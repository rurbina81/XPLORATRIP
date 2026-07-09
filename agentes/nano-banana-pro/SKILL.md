---
name: nano-banana-pro
description: Genera imágenes con IA usando Google Gemini (Imagen 4 Fast con fallback automático a Gemini 2.5 Flash Image) a partir de un prompt de texto. Use when el usuario pide generar una imagen, slide de carrusel, foto para una web o cualquier asset visual con IA. Trigger phrases: "genera una imagen", "hazme una imagen con IA", "imagen para el slide", "nano banana".
---

# nano-banana-pro — Generación de imágenes con Gemini

## Uso

```
python ~/.claude/skills/nano-banana-pro/scripts/generate.py --prompt "<descripción de la imagen>" --output <archivo.jpg> [--width 1080] [--height 1350]
```

(en Windows el comando es `python`; en Mac/Linux puede ser `python3`)

- **API key:** requiere `GEMINI_API_KEY` o `GOOGLE_API_KEY` en el entorno, o pasarla con `--api-key`. En esta máquina la clave vive en `~/Downloads/OpenMontage/.env` (`GOOGLE_API_KEY`) — cargarla de ahí si el entorno no la tiene.
- **Modelos:** intenta Imagen 4 Fast primero; si no está disponible cae automáticamente a Gemini 2.5 Flash Image. No hay que elegir nada.
- **Formatos de salida:** `.jpg`, `.webp` o `.png` (según la extensión del `--output`).
- **Tamaño:** el modelo genera en 4:3 nativo y el script reescala a `--width × --height`. Para formatos lejos de 4:3 (ej. 4:5 de carrusel) puede haber ligera distorsión: pide en el prompt composición centrada con margen alrededor.
- **Texto sobre la imagen:** frases ≤25 caracteres para que se rendericen limpias. Verificar cada imagen generada (ojo con ñ/tildes) y regenerar si el texto sale mal.

## Tamaños típicos

| Uso | `--width` × `--height` |
|---|---|
| Slide de carrusel IG (4:5) | 1080 × 1350 |
| Post cuadrado | 1080 × 1080 |
| Cover de Reel / Story (9:16) | 1080 × 1920 |
| Hero de web (16:9) | 1600 × 900 |

## Dependencias

Python con `requests` y `Pillow`. Si falta alguna: `pip install requests pillow`.
