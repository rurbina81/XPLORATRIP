# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Qué es este repositorio

Colección de **4 skills de Claude Code** orientados a la venta de servicios de IA (agencia digital). Cada skill es un agente especializado que se activa por frases clave y entrega un output tangible — dashboard HTML, pack de contenido, lista de leads.

**Dónde viven las skills:** la copia versionada (fuente de verdad) está en `agentes/` dentro de este repo. La copia **instalada** que Claude Code realmente ejecuta está en `~/.claude/skills/agente-*`. Tras editar una skill en el repo, sincroniza copiando la carpeta a `~/.claude/skills/` (y viceversa si se editó la instalada).

## Estructura de cada skill

```
agentes/agente-<nombre>/
  SKILL.md                  ← frontmatter (name, description/triggers) + instrucciones del agente
  plantilla-<nombre>.html   ← template HTML de referencia para el output del agente
  (archivos de apoyo .md)   ← guías específicas referenciadas desde SKILL.md
```

El frontmatter YAML en `SKILL.md` define el nombre del skill y las frases que lo activan (`description`). Claude Code lo lee para saber cuándo invocar el skill.

## Los 4 agentes

| Skill | Activa cuando | Output |
|---|---|---|
| `agente-diagnostico` | usuario da un link (web o @Instagram) de un negocio | Dashboard HTML con score por área + propuesta de servicio |
| `agente-leads` | usuario pide buscar clientes (nicho + ciudad + servicio) | Dashboard HTML con tarjetas de leads + emails pre-escritos con botón `mailto:` |
| `agente-web` | usuario pide crear una página web para un negocio | Un solo archivo HTML autosuficiente (CSS embebido, sin CDN obligatorio) |
| `agente-contenido` | usuario pide contenido para redes o guion de Reel | `.md` con copy/guion + imágenes de carrusel generadas con IA |

## Flujo typical entre agentes

`agente-diagnostico` → `agente-web` o `agente-leads` → `agente-contenido`

El diagnóstico devuelve datos que `agente-web` reutiliza sin volver a preguntar al usuario.

## Convenciones de output

- **Idioma:** Español venezolano/neutro, tuteo ("tú", nunca "vos").
- **Tono:** directo, sin jerga técnica hacia el usuario final del negocio (decir "agente" / "empleado digital" en lugar de "API" / "workflow").
- **Dashboards HTML:** usar como base los archivos `plantilla-*.html` de cada carpeta. El HTML debe abrir sin conexión a internet (sin CDNs para lo esencial; fuentes del sistema como fallback).
- **agente-leads:** el único CTA con botón es email (`mailto:`). Teléfono/Instagram se muestran como información, no como botones accionables.
- **agente-web:** un solo archivo `.html` con CSS embebido, responsive (mobile primero), sin dependencias externas obligatorias.
- **agente-contenido → carrusel:** imágenes reales generadas con IA (nano-banana/Gemini, ChatGPT, Ideogram) — nunca slides como cajas HTML con texto. Presentar en visor HTML tipo carrusel.

## Herramientas externas que usan los agentes

- **IG Scraper CLI (opcional):** `node ~/tools/ig-scraper/build/index.js profile <usuario>` — para obtener perfil/bio/links de Instagram. **No está instalado en esta máquina:** verificar que exista antes de usarlo; si no existe, usar la skill `firecrawl-scrape` sobre el perfil o WebSearch.
- **HeyGen + ElevenLabs:** producción de Reels con avatar/clon de voz (ver `agente-contenido/setup-reel-heygen-elevenlabs.md` para el flujo exacto). No renderizar en vivo — siempre pre-producir.
- **nano-banana-pro:** skill aparte para generar imágenes con Gemini (`python ~/.claude/skills/nano-banana-pro/scripts/generate.py` — en Windows es `python`, no `python3`).
- **WebFetch / WebSearch:** enriquecimiento de datos de negocios; si una herramienta falla, continuar con lo disponible — nunca bloquear el flujo.

## Reglas de demos en vivo

- Los Reels deben estar pre-renderizados antes de mostrar (los renders tardan y pueden fallar en vivo).
- Nunca pedir más datos de los mínimos indicados en cada SKILL.md. Con un link o un nombre + rubro ya se arranca.
- Los placeholders en la web generada deben marcarse visualmente como editables.
