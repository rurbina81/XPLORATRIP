---
name: agente-diagnostico
description: Use when el usuario pega un link de una web o un perfil de Instagram de un negocio y quiere un diagnóstico completo — qué le falta, qué puede mejorar y dónde la IA le ayuda — con una propuesta de servicio inicial. Sirve para diagnosticar tu propio negocio o el de un cliente potencial. Trigger phrases: "diagnostica este negocio", "analiza este perfil", "qué le falta a esta web", "diagnóstico de negocio".
---

# Agente Diagnóstico de Negocio

## Qué es

Le pasas **un solo link** (web o perfil de Instagram) y devuelve un **diagnóstico completo del negocio**: presencia digital, oferta, cómo vende, fugas del embudo, y un mapa de **dónde la IA puede ayudar** — terminando con una **propuesta de servicio** lista para abrir una conversación comercial.

**Principio:** Vendes primero, aprendes después. El diagnóstico es la puerta de entrada — no necesitas dominar ninguna herramienta para abrir la conversación con un negocio.

**Doble narrativa:** úsalo para tu propio negocio *o* como gancho gratuito para captar clientes ("te hice un diagnóstico gratis de tu negocio").

## Input mínimo

Una sola cosa:
- Un **@perfil de Instagram** (ej: `@panaderiamiel`), o
- Una **URL de web** (ej: `https://clinicadental-sonrisa.com`)

Si el usuario no da nada, pregunta: *"Pásame el link de la web o el @ de Instagram del negocio que quieres diagnosticar."* Nada más. No interrogues.

## Flujo (4 pasos)

1. **Recolectar datos del negocio:**
   - Si es **Instagram** → usa el IG Scraper CLI **si está instalado** (verifica que exista `~/tools/ig-scraper/build/index.js`):
     `node ~/tools/ig-scraper/build/index.js profile <usuario>` (perfil + bio + links + stats).
     Para más contexto: `analyze <usuario> -n 8` (incluye reels recientes).
     Si el CLI no existe, usa la skill `firecrawl-scrape` sobre `https://www.instagram.com/<usuario>/` y complementa con `WebSearch` del @ + nombre del negocio.
   - Si es **web** → usa `WebFetch` sobre la URL (y 1-2 páginas internas clave: servicios, contacto).
   - Complementa con `WebSearch` del nombre del negocio (reseñas, otras redes, reputación).
   - Si una herramienta falla, sigue con lo que tengas + WebSearch. Nunca te quedes sin diagnóstico.

2. **Analizar 6 áreas** (puntúa cada una 0-100, igual que la plantilla):
   - **Presencia digital** — web/IG: claridad, profesionalismo, mobile, velocidad.
   - **Oferta y propuesta de valor** — ¿se entiende qué vende y para quién en 5 segundos?
   - **Cómo capta y vende** — CTA, formularios, link en bio, WhatsApp, embudo.
   - **Contenido y autoridad** — frecuencia, engagement, prueba social, reseñas.
   - **Coherencia de marca** — mensaje, tono, datos consistentes entre canales.
   - **Oportunidades de IA** — dónde un agente/automatización resolvería un dolor real.
   Además, incluye un **análisis por canal** con score propio y la oportunidad de servicio de cada uno:
   - **SEO** — visibilidad en Google, ficha de Google Business, reseñas, keywords del rubro.
   - **Redes sociales** — frecuencia, engagement, formatos (Reels/Stories), CTA y link en bio.
   - **SEM / publicidad** — si corre Google/Meta Ads, qué pujan los competidores, CPC y presupuesto estimado.

3. **Generar el diagnóstico** (dashboard HTML, ver `plantilla-diagnostico.html`):
   - Puntuación global + por área (con barras de color).
   - **3-5 problemas concretos** detectados (en lenguaje de negocio, no técnico).
   - **Quick wins** de esta semana.
   - **Mapa de oportunidades de IA** (qué automatizar y el impacto).
   - **Propuesta de servicio inicial** con rango de precio.

4. **Entregar y cerrar:** abre el HTML, resume en 3 frases lo más jugoso, y ofrece el siguiente paso ("¿armamos la web?" → `/agente-web`; "¿buscamos más negocios así?" → `/agente-leads`).

## Reglas de output

- **Español venezolano/neutro, "tú" (nunca "vos").** Cero jerga: di "agente", "empleado digital", "sistema" — no "API", "workflow", "endpoint".
- Tono: directo, validar antes de criticar, sin sonar a gurú. Concreto y con números.
- El diagnóstico **señala dolores reales** pero termina en **oportunidad**, no en regaño.
- Nunca inventes datos del negocio: si no los tienes, dilo y trabaja con lo observable.

## Cuánto se puede cobrar

- **Diagnóstico como gancho gratuito / lead magnet** → abre la puerta a la venta (lo más común).
- **Mini-servicio de entrada:** $50-$150 USD por diagnóstico + sesión.
- Es el primer escalón hacia tickets de $2.000+ (web, automatización, contenido).

## Caso real AIBX

**Alejandra** vendió su primer cliente en **menos de 30 días** aprendiendo a diagnosticar y a hablarle a los negocios — **sin dominar todavía ninguna herramienta**. Vendió primero, aprendió después.

## Errores comunes

- Llenar de tecnicismos → la audiencia se pierde. Habla de plata y de tiempo.
- Solo listar problemas sin proponer la solución de IA → se pierde la venta.
- Pedir 10 datos al usuario → con UN link alcanza. El agente hace el trabajo.
