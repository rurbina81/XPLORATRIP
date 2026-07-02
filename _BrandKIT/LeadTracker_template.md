# Lead Tracker — XPLORATRIP

> Plantilla simple para registrar leads en Google Sheets, Notion, Excel o Airtable. XPLORATRIP no usa HubSpot, así que esto reemplaza el CRM.

---

## Estructura de columnas recomendada

| Columna | Tipo | Ejemplo |
|---|---|---|
| Fecha de contacto inicial | Fecha | 2026-05-21 |
| Canal | Select | WhatsApp / IG DM / FB Messenger / Gmail |
| Nombre | Texto | María González |
| Teléfono / WhatsApp | Texto | +1 305 555 0123 |
| Email | Texto | maria@gmail.com |
| Ciudad EE.UU. | Texto | Houston |
| Destino Venezuela | Texto | Valencia |
| Documento | Select | Vigente / Vencido <10 / Vencido 10+ / Solo cédula / Sin físico / Otro |
| Mes/año vencimiento | Texto | Mar 2022 |
| Fecha tentativa viaje | Fecha | 2026-08-15 |
| Cantidad pasajeros | Número | 2 |
| Menores en EE.UU. | Checkbox | Sí / No |
| Estado | Select | Nuevo / Datos parciales / Cotización lanzada / Casi cierre / Cerrado / Frío / Descalificado |
| Días en estado actual | Fórmula | =hoy() - fecha estado |
| Ruta cotizada | Select | Directo Miami-Caracas / Copa vía Panamá / Cúcuta-Táchira / Riohacha-Zulia / Otra |
| Precio cotizado | Número | 580 |
| Próximo paso | Texto | "Llamar 22-may al mediodía" |
| Notas | Texto largo | "Quiere viajar con suegra. Suegra tiene pasaporte vigente." |
| Mensaje drip enviado | Select | Día 2 / Día 5 / Día 9 / Día 14 / Día 21 / Detenido (respondió) |

---

## Estados del lead (definiciones operativas)

| Estado | Definición |
|---|---|
| **Nuevo** | Escribió por primera vez en últimas 48h. Todavía no se le pidió los 3 datos clave. |
| **Datos parciales** | Tiene 1 o 2 de los 3 datos clave. Estamos esperando el resto. |
| **Cotización lanzada** | Le mandamos número y servicios. Esperamos su confirmación. |
| **Casi cierre** | Confirmó interés en cotización. Falta solo pago / fecha confirmada. |
| **Cerrado** | Pagó / reservó / viajó. |
| **Frío** | Sin responder hace 14+ días. Está en secuencia drip. |
| **Descalificado** | Caso que no podemos atender (ej. no es venezolano, no quiere regresar a Venezuela). |

---

## Reglas de uso diario

1. **Toda conversación nueva por WhatsApp se registra el mismo día.**
2. **Si el lead no entregó los 3 datos clave en 48h, marcar "Datos parciales" y agregar `Mensaje drip enviado = Día 2`.**
3. **Al cerrar, registrar el precio final y la ruta usada.** Sirve para `friday-brief` y `quarterly-review`.
4. **Cada lunes**, filtrar por "Días en estado actual > 7" para identificar leads enfriados que necesitan rescate.
5. **Cada viernes**, contar cierres por ruta y por documento. Eso alimenta el `friday-brief`.

---

## Estructura mínima si prefieres mantenerlo en una sola hoja Excel/Google Sheets

```
Fecha | Nombre | Ciudad EE.UU. | Destino VZ | Documento | Fecha viaje | Estado | Notas
```

(Las otras columnas pueden agregarse después.)

---

## Métricas semanales sugeridas a contar

- Conversaciones nuevas totales.
- Leads con 3 datos clave completos / leads con datos parciales.
- Cotizaciones lanzadas.
- Cierres confirmados.
- Cierres por ruta: directo Miami-Caracas · Copa Panamá · Cúcuta · Riohacha · otra.
- Cierres por documento: vigente · vencido <10 · vencido 10+ · solo cédula · sin físico.
- Tasa de cierre = cierres / cotizaciones lanzadas.
- Tiempo promedio entre primer contacto y cierre.

---

## Sugerencia de herramienta

- **Más simple**: Google Sheets con las columnas de arriba. Comparte con tu operador.
- **Más visual**: Notion database con vistas (kanban por estado, tabla por documento, calendario por fecha de viaje).
- **Más automatizable**: Airtable con vistas y automaciones (recordatorio cuando un lead pasa N días en un estado).

XPLORATRIP no necesita HubSpot. Cualquiera de las tres funciona.
