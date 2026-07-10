---
format: 1080x1920
message: "Ya hay vuelos directos Miami → Caracas — XPLORATRIP te organiza el viaje"
arc: Hook → Evidencia → Beneficio → CTA
audience: venezolanos en USA (Instagram Reels / WhatsApp Status)
mode: autonomous
language: es
music: none
---

## Video direction

- **Palette system** (de `frame.md`, por rol): `coral` #0B1D3A (navy) es la superficie de voltaje — grounds de los frames 1, 2 y 4; `cream` #FFFFFF ground del frame 3; `coral-dark` #EABE48 (dorado) es el acento escaso — flecha del trayecto, sello DIARIOS, numeral del precio, píldora CTA; `black` #374151 tinta sobre claro; `white` tinta sobre navy. Máximo 3 superficies por frame; el dorado aparece en TODOS los frames como sello de marca.
- **Motion grammar + reveal model**: video SILENTE — los reveals se marcan al ritmo de los beats de texto en pantalla (una pieza por beat, nunca todo a t=0), con las revelaciones repartidas hacia el back ~50% de cada shot. Eases long-tail (`power3` por defecto), snaps duros solo en los token-swaps del frame 1. Durante holds: quietud total o jitter sutil — sin breathing perezoso, sin pans de relleno.
- **Rhythm / held frames**: frames 1 y 2 son rápidos y percusivos; el frame 3 termina en un held read deliberado (el precio quieto, respiro antes del cierre); el frame 4 resuelve al lockup y sostiene estático los últimos ~0.8s.
- **Negative list**: nada de bokeh flotante ni gradientes morados "IA"; sin sombras ni radios (salvo círculos y la píldora CTA, propios del pack); sin nav/browser chrome; sin front-load-then-freeze (slideshow) ni elementos flotando independientes (screensaver); no se menciona Avior ni Curazao.
- **Caption band**: contenido clave en el ~83% superior; banda inferior limpia en todos los frames.

## Frame 1 — Hook: volvieron los directos

- scene: Tipografía cinética gigante anuncia el regreso de los vuelos directos
- duration: 4s
- poster: 2.5s
- transition_in: cut
- status: animated
- type: hook
- blueprint: kinetic-type-beats (Adapt)
- asset_candidates: skyline-de-miami-florida.webp
- focal: skyline-de-miami-florida.webp
- roles: skyline-de-miami-florida.webp = background (duotono navy, dim ~60%)
- src: compositions/frames/01-hook.html

Apertura en frío, palabra por palabra al ritmo. La noticia ES el gancho: palanca #1 del discurso comercial 2026.

Adapt: keep la escalada full-screen beat a beat con payoff spring-pop; change los beats de 8-12 a 3 + payoff (15s totales lo exigen) y el payoff es el trayecto, no el logo.
Scene 1 (0.0–0.9s): ground navy con el skyline de Miami en duotono navy al fondo (dim ~60%, capa background); "VOLVIERON" entra solo, centered, display gigante en blanco (~55% del canvas), snap duro y micro-settle. 3 capas: skyline / veladura navy / tipografía.
Scene 2 (0.9–1.8s): hard cut del token en el mismo asiento: "LOS VUELOS" reemplaza en su lugar (in-place swap); tracking abre levemente al asentar.
Scene 3 (1.8–2.6s): hard cut a "DIRECTOS" — beat más pesado: escala 1.15→1.0 con power3, el skyline sube su brillo un paso detrás.
Scene 4 (2.6–4.0s): payoff spring-pop: "MIAMI → CARACAS" cae al centro en dorado #EABE48, la flecha "→" se dibuja de izquierda a derecha como trazo (draw) cruzando entre ambas ciudades; upper-third dominante, held read los últimos ~0.5s.

## Frame 2 — Evidencia: aerolíneas y frecuencia

- scene: Tarjetas de aerolíneas se ensamblan con el sello "TODOS LOS DÍAS"
- duration: 4s
- poster: 3s
- transition_in: cut
- status: animated
- type: feature_showcase
- blueprint: grid-card-assemble (Adapt)
- asset_candidates: ciudad-colonial-venezolana-con-arquitect.jpg
- focal: ciudad-colonial-venezolana-con-arquitect.jpg
- roles: ciudad-colonial-venezolana-con-arquitect.jpg = background (franja superior, dim ~45%)
- src: compositions/frames/02-evidencia.html

La prueba de que es real: datos exactos del BusinessContext, nada inventado.

Adapt: keep el ensamblaje de tarjetas hacia una grilla con settle escalonado; change de grilla llena a stack vertical de 3 chips (9:16 lo pide) coronado por un sello display.
Scene 1 (0.0–1.0s): la ciudad colonial venezolana ocupa la franja superior (~35%) como background dim ~45% bajo veladura navy; sobre ella el section-label "YA ESTÁN OPERANDO" en dorado, tracking amplio, entra con wipe corto. Asimétrico 70/30, 3 capas de profundidad.
Scene 2 (1.0–2.6s): las 3 tarjetas-chip se ensamblan una por beat en stack central sobre navy — "AMERICAN AIRLINES" (1.0s), "LASER" (1.55s), "GLOBAL X" (2.1s) — cada una desliza desde un ala alterna y asienta con power3; bordes 1px blancos, sin sombra, esquinas rectas.
Scene 3 (2.6–4.0s): el sello "VUELOS DIARIOS" aterriza en display grande (~stat-numeral) al centro-bajo del stack, en dorado, con un stamp-in seco; línea de apoyo "operando desde abril 2026" en item-label blanco aparece debajo en su propio beat (3.3s). Held los últimos ~0.4s.

## Frame 3 — Beneficio: precio y organización

- scene: Count-up del precio "desde $499" + la promesa de XPLORATRIP
- duration: 3.5s
- poster: 2.5s
- transition_in: cut
- status: animated
- type: benefit_highlight
- blueprint: dataviz-countup (Adapt)
- asset_candidates: pareja-caminando-en-playa-del-caribe-al-.jpg
- focal: pareja-caminando-en-playa-del-caribe-al-.jpg
- roles: pareja-caminando-en-playa-del-caribe-al-.jpg = supporting (tarjeta polaroid pequeña, esquina inferior del área segura)
- src: compositions/frames/03-beneficio.html

Numeral protagonista con precio referencial real. El beneficio no es solo el vuelo: es viajar con la ruta clara.

Adapt: keep el count-up con ring sweep como centro del shot; change el tour multi-instrumento por un solo stat (un beat, un trabajo) — sin push-through, el frame corto no lo aguanta.
Scene 1 (0.0–0.6s): ground cream #FFFFFF (cambio de temperatura tras dos frames navy); el item-label "DESDE" en navy entra arriba-centro, pequeño y tracked.
Scene 2 (0.6–2.2s): el numeral "$499" cuenta 0→499 dead-center en dorado #EABE48 con tinta navy de borde óptico, stat-numeral gigante (~50% del canvas); un ring circular en navy barre su circunferencia sincronizado al count-up (signature). La foto de la pareja en playa asienta como tarjeta supporting pequeña, rotada 3°, esquina inferior-izquierda del área segura (~15%), un beat después del arranque (1.4s).
Scene 3 (2.2–3.5s): bajo el numeral aparece en su beat la línea "XPLORATRIP te organiza todo el viaje" en body navy, peso 600; luego held read total — el precio quieto, sin drift, respiro deliberado antes del cierre.

## Frame 4 — CTA: cotiza por WhatsApp

- scene: Lockup del logo + CTA de WhatsApp con la web
- duration: 3.5s
- poster: 2s
- transition_in: crossfade
- status: animated
- type: cta
- blueprint: logo-assemble-lockup (Adapt)
- asset_candidates: logo.webp
- focal: logo.webp
- roles: logo.webp = cutout (lockup central)
- src: compositions/frames/04-cta.html

Cierre de marca: un solo llamado a la acción, fácil de tocar en móvil.

Adapt: keep el resolve al lockup final + URL badge revelado por wipe izquierda→derecha con leading edge dorado (signature CTA); change el camera push-through por una entrada directa del lockup (3.5s silentes no dan para el streak con motion-blur).
Scene 1 (0.0–1.0s): ground navy; el logo XPLORATRIP (cutout) se ensambla al centro — escala 0.9→1.0 con settle power3 y un glow dorado sutil que se enciende detrás (rgba dorada, no bokeh). Centered, ~40% del canvas, upper-third.
Scene 2 (1.0–2.2s): la píldora CTA dorada "COTIZA GRATIS POR WHATSAPP" sube desde abajo del lockup (pill rise) y asienta; tinta navy, peso 700, única forma redondeada del video. En su beat (1.8s) el borde de la píldora dibuja su contorno (stroke draw) una vez.
Scene 3 (2.2–3.5s): "www.xploratrip.com" se revela bajo la píldora con wipe izquierda→derecha llevando un leading edge dorado (signature); todo el lockup sostiene estático los últimos ~0.8s — fin en quietud total.
