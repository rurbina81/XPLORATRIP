#!/usr/bin/env python3
"""nano-banana-pro: image generation via Google Gemini API"""

import argparse
import base64
import io
import os
import sys
import requests
from PIL import Image


def generate_image(api_key, prompt, output_path, width=600, height=400):
    # Try Imagen 4 Fast (best quality, predict endpoint)
    url_imagen = (
        f"https://generativelanguage.googleapis.com/v1beta/models/"
        f"imagen-4.0-fast-generate-001:predict?key={api_key}"
    )
    payload_imagen = {
        "instances": [{"prompt": prompt}],
        "parameters": {"sampleCount": 1, "aspectRatio": "4:3"},
    }

    r = requests.post(url_imagen, json=payload_imagen, timeout=90)

    if r.status_code == 200:
        data = r.json()
        b64 = data["predictions"][0]["bytesBase64Encoded"]
        img_bytes = base64.b64decode(b64)
    else:
        # Fallback: Gemini 2.5 Flash image generation
        print(f"Imagen 4 unavailable ({r.status_code}), trying Gemini 2.5 Flash Image...", file=sys.stderr)
        url_flash = (
            f"https://generativelanguage.googleapis.com/v1beta/models/"
            f"gemini-2.5-flash-image:generateContent?key={api_key}"
        )
        payload_flash = {
            "contents": [{"parts": [{"text": prompt}]}],
            "generationConfig": {"responseModalities": ["IMAGE"]},
        }
        r2 = requests.post(url_flash, json=payload_flash, timeout=90)
        if r2.status_code != 200:
            print(f"Error: {r2.status_code}\n{r2.text}", file=sys.stderr)
            return False
        data2 = r2.json()
        try:
            b64 = data2["candidates"][0]["content"]["parts"][0]["inlineData"]["data"]
            img_bytes = base64.b64decode(b64)
        except (KeyError, IndexError) as e:
            print(f"Unexpected response structure: {e}\n{data2}", file=sys.stderr)
            return False

    # Resize and save
    img = Image.open(io.BytesIO(img_bytes)).convert("RGB")
    img = img.resize((width, height), Image.LANCZOS)
    os.makedirs(os.path.dirname(os.path.abspath(output_path)), exist_ok=True)
    img.save(output_path, quality=88, optimize=True)
    print(f"Saved {width}x{height}px -> {output_path}")
    return True


def main():
    parser = argparse.ArgumentParser(description="Generate images with Gemini")
    parser.add_argument("--api-key", default=os.environ.get("GEMINI_API_KEY") or os.environ.get("GOOGLE_API_KEY"), help="Gemini API key")
    parser.add_argument("--prompt", required=True, help="Image prompt")
    parser.add_argument("--output", required=True, help="Output file path (.jpg or .webp)")
    parser.add_argument("--width", type=int, default=600)
    parser.add_argument("--height", type=int, default=400)
    args = parser.parse_args()

    if not args.api_key:
        print("Error: provide --api-key or set GEMINI_API_KEY / GOOGLE_API_KEY env var", file=sys.stderr)
        sys.exit(1)

    ok = generate_image(args.api_key, args.prompt, args.output, args.width, args.height)
    sys.exit(0 if ok else 1)


if __name__ == "__main__":
    main()
