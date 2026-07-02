# Auto-reply WhatsApp — XPLORATRIP

> Primera respuesta automática cuando alguien escribe por primera vez al WhatsApp Business. Aplica la fórmula de 3 preguntas del §18 del CLAUDE.md.

---

## Mensaje automático recomendado (configurar en WhatsApp Business)

```
¡Hola! Bienvenido a XPLORATRIP.

Qué bueno que nos escribiste. Regresar a Venezuela desde Estados Unidos
es una decisión importante, y estamos aquí para orientarte según tu
documento, ciudad de salida y destino final.

Para empezar, ¿me indicas:

1. Tu ciudad actual en Estados Unidos
2. La ciudad de Venezuela a donde deseas llegar
3. El documento con el que cuentas (pasaporte vigente, pasaporte vencido o solo cédula)

Con estos tres datos te respondemos con la mejor ruta para tu caso.

Tiempo de respuesta habitual: en horario de oficina (lun-vie 9am-6pm
hora EE.UU. este) respondemos en menos de 2 horas. Fuera de ese horario,
contestamos al día siguiente hábil.

Gracias por escribirnos.
```

---

## Versión corta (para WhatsApp Business "saludo")

```
¡Hola! Bienvenido a XPLORATRIP. Para orientarte con tu regreso a
Venezuela, cuéntanos: (1) tu ciudad actual en EE.UU., (2) tu destino
en Venezuela, y (3) tu documento (pasaporte vigente, vencido o solo
cédula). Te respondemos en horario hábil con la ruta que aplica a tu
caso.
```

---

## Configuración técnica en WhatsApp Business

1. Abre WhatsApp Business → ajustes → herramientas para la empresa.
2. **Mensaje de bienvenida** → activar. Pegar la versión corta.
3. **Mensaje de ausencia** → activar para horarios fuera de oficina. Pegar la versión completa con la nota de tiempo de respuesta.
4. **Respuestas rápidas** → crear atajos para los 15 mensajes de `WhatsAppMessages.md`. Sugerencia de atajos:
   - `/vig` → mensaje pasaporte vigente
   - `/venc` → vencido menos de 10 años
   - `/venc10` → vencido 10+ años
   - `/ced` → solo cédula
   - `/sinfis` → sin documento físico
   - `/menor` → viaja con menor nacido en EE.UU.
   - `/precio` → pregunta operativa cuánto cuesta
   - `/dev` → explicación DEV
   - `/tsa` → vuelo doméstico TSA
   - `/cbp` → CBP Home
   - `/rescate` → lead enfriado
   - `/cierre` → confirmación cotización
   - `/postventa` → post-venta + referir
   - `/comunidad` → invitación a la comunidad

---

## Reglas operativas

- **Nunca** dejar al cliente sin respuesta más de 24 horas en días hábiles.
- Si el cliente entrega menos de los 3 datos, NO cotizar — pedir lo que falta.
- Si menciona caso migratorio activo (asilo, deportación, parole, etc.), pegar `/cbp` con la nota de "consulta a abogado de inmigración".
- Si el cliente parece confundido o ansioso, baja el ritmo. Una pregunta a la vez.
- Voz: humana, clara, sin "estimado cliente". Cero alarmismo.
