---
name: agente-leads
description: Use when el usuario quiere encontrar clientes potenciales para vender un servicio (ej: negocios en Google Maps sin página web), generar el mensaje de prospección para contactarlos, y armar una propuesta de servicio. Buscar leads + prospectar + proponer, en un solo flujo. Sirve para conseguir clientes para tu agencia o para un cliente. Trigger phrases: "buscame clientes", "negocios sin web en", "leads de", "prospección", "armá la propuesta", "a quién le vendo".
---

# Agente Buscador de Leads + Prospección + Propuesta

## Qué es

El **motor de adquisición**. Le dices **un nicho + una ciudad + qué vendes**, y devuelve:
1. una **lista de clientes potenciales** reales (con su debilidad detectada),
2. el **mensaje de prospección** personalizado para contactar a cada uno,
3. una **propuesta de servicio** lista para enviar.

Todo en un dashboard. Es el agente que más impacta en el vivo: *"una IA te consigue los clientes mientras duermes."*

**Principio:** buscar → prospectar → proponer → cobrar. UN método simple, no mil. Habilita los tickets de $2.000+.

**Doble narrativa:** consigue clientes para TU agencia, o véndelo como servicio de prospección a otra empresa.

## Input mínimo

Tres datos (si falta alguno, pregúntalo en una sola frase):
- **Nicho / tipo de negocio** (ej: restaurantes, clínicas dentales, gimnasios, abogados).
- **Ciudad o zona** (ej: Miami, Bogotá, Madrid).
- **Qué servicio vas a ofrecer** (ej: página web, agente de WhatsApp, contenido).

Opcional: cuántos leads (default 10).

## Flujo (4 pasos)

1. **Buscar negocios** con `WebSearch` (sin API keys → confiable para el vivo):
   - Busca el nicho + ciudad ("restaurantes venezolanos Miami", "clínicas dentales Bogotá Google Maps", etc.).
   - Junta nombre, zona, y señales públicas (web si tiene, Instagram, teléfono, rating/reseñas).
   - Apunta a negocios con una **debilidad visible** alineada al servicio (ej: sin web, web vieja, sin reservas online).
2. **Enriquecer y puntuar** cada lead (0-100 de "oportunidad"):
   - Con `WebFetch` revisa la web (si tiene): mobile, CTA, antigüedad, reservas.
   - Puntúa según qué tan bien tu servicio resuelve su debilidad. Ordena de mayor a menor.
3. **Generar prospección + propuesta:**
   - **Email de prospección** por lead: personalizado con la debilidad real del negocio, corto, gancho + valor + CTA suave. Tono humano, no spam. Estructura: (1) observación específica del negocio, (2) qué gana resolviéndola, (3) invitación a conversar — nunca "compra ya".
   - **Propuesta de servicio** tipo (alcance, entregables, precio, siguiente paso) adaptable a los mejores leads.
4. **Entregar** en dashboard HTML como **lista de tarjetas** (ver `plantilla-leads.html`):
   - Cada lead muestra: nombre, rating + nº reseñas, **teléfono**, **email**, estado de web, Instagram, debilidad y score de oportunidad.
   - **Botón "Enviar email" funcional por lead:** abre el correo del usuario (`mailto:`) con asunto + cuerpo **ya escritos y editables** antes de enviar.
   - Stats arriba + filtros (todos / sin web / top oportunidad) + datos exportables (JSON).
   - Abre el HTML y resume los 3 mejores leads.

> **Canal accionable = email.** No generamos botones de WhatsApp, teléfono ni DM de Instagram (no se pueden disparar desde aquí). Teléfono/IG se muestran como info; el único CTA con botón es el email editable.

## Reglas de output

- **Español venezolano/neutro, "tú".** Mensajes de prospección que suenen a persona, no a robot ni a venta agresiva.
- **No inventes contactos:** usa solo datos públicos que realmente encuentres. Si no hay teléfono, deja el canal disponible (DM/web) y márcalo.
- Prospección ética: personalizada, aporta valor primero, CTA a conversación (no "compra ya").
- Cero jerga técnica en los mensajes al negocio.

## Cuánto se puede cobrar

- Es el motor que habilita **tickets de $2.000+** por implementación (web + automatización).
- La prospección misma se puede vender como servicio: **$500-$1.500/mes** de generación de leads.
- Combina con fee recurrente por gestión de los leads/seguimiento.

## Caso real AIBX

**Tony** (+10 clientes vía Google Maps + LinkedIn). **Jhorman** (primer cliente en **<15 días**). **Nick** ($3.600 por un cliente). El patrón: encontrar negocios con un hoyo evidente y ofrecer la solución.

## Errores comunes

- Mensajes genéricos de copy-paste → no convierten. Personaliza con la debilidad real del negocio.
- Listas enormes sin priorizar → enfócate en los 10 con más oportunidad.
- Prometer en frío → el mensaje invita a una conversación/diagnóstico, no cierra la venta.
