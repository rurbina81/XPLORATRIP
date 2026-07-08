---
name: agente-contenido
description: Use when el usuario quiere crear contenido para redes con IA — copy, guion de Reel para avatar/clon (HeyGen + voz ElevenLabs) y carruseles — a partir de un tema o nicho. Genera el paquete listo para producir, con el setup exacto de las herramientas. Sirve para tu propia marca o como servicio de contenido recurrente para clientes. Trigger phrases: "hazme contenido", "guion de reel", "carrusel para", "contenido para mi marca", "clon que hable", "reel con avatar".
---

# Agente Creador de Contenido con IA

## Qué es

A partir de **un tema o nicho** genera el **paquete de contenido completo**:
1. **Copy** (caption + hooks alternativos),
2. **Guion de Reel** para avatar/clon con el **setup exacto de HeyGen + ElevenLabs**,
3. **Carrusel** (texto slide por slide + prompts de imagen para Gemini/Ideogram/ChatGPT).

El alumno no edita video ni diseña: describe el tema y el agente arma todo listo para producir.

**Principio:** "clase de cocina" del contenido. La gente ama el efecto "un clon que habla por mí". En el vivo, **el Reel se muestra pre-renderizado** (los renders tardan) mientras se explica que la skill genera el guion + el setup al instante.

**Doble narrativa:** contenido para atraer TUS clientes, o véndelo como **servicio recurrente** a otros negocios.

## Input mínimo

- **Tema o nicho** (ej: "tips para restaurantes", "cómo ahorra tiempo un dueño de clínica con IA").
- Opcional: objetivo (viralidad / valor / venta), tono, marca. Reutiliza tono del proyecto si existe.

## Flujo (4 pasos)

1. **Definir ángulo:** elige tipo de contenido (valor / historia / venta) y estructura narrativa (hook → desarrollo → CTA). El hook debe parar el scroll: pregunta incómoda, dato contraintuitivo o beneficio directo en primera persona.
   - **Referencia de estilo (opcional):** si el usuario da un perfil de IG de referencia (ej. `@diego.vetencourt`) y tienes herramientas vidIQ disponibles (`vidiq_ig_profile_reels`, `vidiq_ig_reel_watch`), trae sus mejores reels y replica su estilo de hooks/ritmo. Si no están disponibles, usa `firecrawl-scrape` sobre el perfil o continúa sin referencia — no bloquees el flujo.
2. **Generar copy:** caption listo + 3 hooks alternativos + 5-10 hashtags relevantes + CTA.
3. **Guion de Reel para avatar (15-45 s):**
   - Texto exacto que dirá el avatar (frases cortas, ritmo, pausas marcadas).
   - **Setup HeyGen:** qué avatar/clon usar, idioma, encuadre, b-roll/captions sugeridos.
   - **Setup ElevenLabs:** voz/clon de voz, estabilidad/estilo recomendados, cómo pegar el guion.
   - Ver `setup-reel-heygen-elevenlabs.md` para los pasos concretos.
4. **Carrusel (6 slides) con IMÁGENES REALES generadas con IA** (no mockups):
   - Genera cada slide como imagen con **nano-banana (Gemini)** vía la skill `nano-banana-pro`:
     `python ~/.claude/skills/nano-banana-pro/scripts/generate.py "<prompt food/diseño + texto corto sobreimpreso>" -o slide-N.png --ratio 4:5 --size 2K`
     (en Windows el comando es `python`; en Mac/Linux puede ser `python3`)
   - Slide 1 = cover con título, último = CTA. Texto corto (≤25 caracteres por frase) para que Gemini lo renderice limpio. Verifica cada imagen y regenera si el texto sale mal (ojo con ñ/tildes).
   - Alternativa: ChatGPT/Ideogram. NUNCA entregues slides como cajas de HTML con texto: el WOW son imágenes reales listas para postear.
   - Muéstralas en un visor HTML tipo carrusel: un solo archivo autosuficiente (sin CDNs) con las imágenes referenciadas por ruta relativa, flechas ← → y contador de slide.

Entrega el copy/guion en un `.md` (ver `plantilla-pack-contenido.md`) + las imágenes del carrusel. Para el vivo, acompaña con el **Reel ya renderizado** y el carrusel de imágenes ya generado.

## Reglas de output

- **Español venezolano/neutro, "tú".** Hooks fuertes, frases cortas, cero relleno.
- Guion del avatar: pensado para hablarse, no para leerse. Marca *(pausa)* y énfasis.
- Carrusel: una idea por slide, legible en 2 segundos.
- No prometas resultados garantizados; vende transformación y claridad.

## Cuánto se puede cobrar

- **Servicio de contenido recurrente:** $300-$1.500/mes por marca (paquetes de X reels + carruseles).
- Clon de avatar como upsell (montaje del clon + voz): one-time + retainer.
- Doble vía: te trae clientes a TI, o es un servicio que vendes.

## Caso real AIBX

**Mauri** hace contenido con IA con muy buenos resultados. El clon que "habla por ti" es lo que más engancha a la audiencia.

## Errores comunes

- Intentar renderizar el Reel EN VIVO → tarda y puede fallar. Muestra el pre-renderizado.
- Guiones largos → el avatar se siente robótico. 15-45 s, frases cortas.
- Carruseles con párrafos → una idea por slide, hook primero.
