---
name: agente-web
description: Use when el usuario quiere crear una página web profesional para un negocio a partir de pocos datos (nombre, rubro, a quién sirve) o del output del Agente Diagnóstico. Genera un HTML autosuficiente listo para mostrar o desplegar. Sirve para tu propio negocio o como entregable/lead magnet para un cliente. Trigger phrases: "hazme una web", "crea una página para este negocio", "necesito una landing", "armá el sitio".
---

# Agente Creador de Páginas Web

## Qué es

Con **pocos datos de un negocio** (o reutilizando el diagnóstico del `/agente-diagnostico`) genera una **página web profesional en un solo archivo HTML** — lista para abrir en el navegador, mostrar al cliente o subir a internet. El alumno no escribe código: solo describe el negocio.

**Principio:** un entregable tangible y visible es la mejor apertura comercial. "Mira, te preparé tu web" abre conversaciones que un mensaje frío no abre.

**Doble narrativa:** web para tu propio negocio, web como servicio de agencia (ticket clásico), o web como **lead magnet** para entrar a un cliente.

## Input mínimo

- **Nombre del negocio** + **a qué se dedica** (una frase basta).
- Ideal pero opcional: ciudad, servicios/precios, teléfono/WhatsApp, Instagram, 2-3 reseñas.
- Si viene de un diagnóstico previo, **reutiliza esos datos** y no vuelvas a preguntar.

Si falta algo, propón valores sensatos y márcalos como placeholder editable. Nunca trabes la demo pidiendo 10 datos.

## Flujo (3 pasos)

1. **Reunir contexto:** toma los datos dados o el output del Agente Diagnóstico. Si hay un @ de Instagram, opcionalmente enriquece con el IG Scraper CLI **si está instalado** (`node ~/tools/ig-scraper/build/index.js profile <usuario>` — bio, foto, links); si no existe, usa `firecrawl-scrape` sobre el perfil o sigue con los datos que ya tienes. Nunca trabes el flujo por esto.
2. **Generar el HTML** (basado en `plantilla-web.html`):
   - **Un solo archivo** autosuficiente (CSS embebido, sin dependencias externas obligatorias).
   - Secciones: hero con propuesta de valor + CTA, servicios, "por qué nosotros", prueba social/reseñas, contacto/WhatsApp, footer.
   - **Responsive** (mobile primero) y con animaciones de scroll suaves.
   - Adapta paleta y copy al rubro y al tono del negocio. Fotos: usa placeholders claros indicando dónde van las reales.
   - CTA siempre visible (reservar / escribir por WhatsApp / pedir).
3. **Abrir y ofrecer iteración:** abre el HTML en el navegador, resume qué incluye, y ofrece ajustes ("cambio colores / agrego sección / pongo tus fotos") y el siguiente paso (`/agente-leads` para conseguir más negocios como este).

## Reglas de output

- **Español venezolano/neutro, "tú".** Copy de la web claro, orientado a venta, sin jerga.
- Diseño limpio y moderno — que se vea de agencia, no de plantilla genérica de los 2010.
- El HTML debe abrir bien **sin internet** (no depender de CDNs para lo esencial; fuentes del sistema como fallback).
- Nada de Lovable/servicios externos obligatorios: el entregable es el archivo HTML. (Lovable/deploy es opcional y se menciona como upgrade.)

## Cuánto se puede cobrar

- **Página web a negocios:** ticket clásico de agencia, **$500-$2.000 USD** según alcance.
- **Como lead magnet:** la regalas/la muestras para abrir la venta de un servicio mayor (automatización, contenido, retainer).
- Combinada con fee mensual de mantenimiento ($100-$300/mes).

## Caso real AIBX

**Adriana** hizo su web con IA y le funcionó. **Tony** consigue clientes haciendo webs vía Google Maps + LinkedIn — ya lleva **+10 clientes**, usando la web como apertura ("te preparé tu sitio").

## Errores comunes

- Pedir demasiados datos antes de generar → con nombre + rubro arranca.
- Webs cargadas de texto → menos copy, más claridad y CTA.
- Depender de un CDN que en el vivo no carga → todo embebido, fuentes con fallback del sistema.
