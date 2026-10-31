# Glossa

App de idiomas instalable (PWA) para estudiar desde el móvil: **polaco** para la Navidad en familia y **latín** para leer lógica escolástica, ocho semanas de cada uno. Griego antiguo e italiano quedan preparados como cursos futuros.

Todo vive en una sola app con un único estado: lecciones, tarjetas con repetición espaciada, lecturas con glosa palabra a palabra, audio, micrófono, conversación con Claude y sesiones con tu chica.

**Abrir:** https://alvar0suarez.github.io/glossa/

## Instalar

- **Android (Chrome):** abre el enlace › menú ⋮ › *Instalar aplicación*. Funciona sin conexión salvo lo que usa Claude.
- **iPhone (Safari):** Compartir › *Añadir a pantalla de inicio*. En iPhone el reconocimiento de voz depende de Safari y puede no estar disponible.
- **Voz polaca en Android:** en los ajustes del móvil busca «texto a voz», elige como motor *Servicios de voz de Google* e instala en él la voz polaca (en Samsung suele estar en Administración general › Texto a voz).
- **Claude:** crea una clave en [platform.claude.com](https://platform.claude.com) (*API Keys*), carga saldo en *Billing* y pégala en Ajustes › Claude. La clave se guarda solo en el dispositivo y no sale en las copias de seguridad.

## Qué hay dentro

| Parte | Qué hace |
|---|---|
| Hoy | Tareas del día por idioma, minutos, cuenta atrás a Nochebuena |
| Aprender | Lecciones (tablas con audio, notas, ejercicios), lecturas y textos propios (pegados o fotografiados) |
| Repasar | Tarjetas SM-2; las nuevas salen de las lecciones hechas |
| Hablar | Conversación con Claude y corrección al terminar, audio de manos libres, grabarte, sesión con tu chica, escucha |
| Progreso | Racha, minutos, hitos, repaso del domingo, errores recientes |
| Ajustes | Nombres y familia, voces, clave de Claude, copia de seguridad |

En pantallas anchas (Fold abierto, tablet) la navegación pasa a un carril lateral y las vistas usan dos columnas. Si el navegador simula una página de escritorio en una pantalla estrecha (Chrome «Sitio de escritorio» en la pantalla exterior del Fold), la app lo detecta y se amplía para verse como en un móvil.

## Estructura

```
index.html              carga de scripts (sin compilación)
manifest.webmanifest    instalación
sw.js                   service worker (generado)
css/                    app.css, fonts.css (fuentes propias: Literata, Source Sans 3)
js/core.js              lógica pura: fechas, SM-2, latín (pronunciación, ortografía antigua), similitud
js/store.js             IndexedDB local, exportar/importar
js/speech.js            voz (síntesis), oído (reconocimiento), grabación
js/ai.js                API de Claude desde el navegador, en streaming
js/app.js               interfaz y vistas
courses/index.js        lista de cursos
courses/pl.js, la.js    semana 1 de cada curso (títulos y programa de las 8 semanas)
courses/pl-2.js … la-8.js  una semana por archivo
tools/                  publicar versión y pruebas
```

## Añadir contenido

Cada curso registra `window.CONTENT[id]` en `courses/<id>.js` con la semana 1; cada semana siguiente va en su propio archivo, `courses/<id>-<n>.js`, que hace `window.CONTENT.<id>.semanas.push({ n, … })` y se carga en `index.html`. La forma de una semana:

```js
{
  semanasTitulos: [8 títulos], programa: [8 resúmenes], temasChat: [...],
  semanas: [{
    n: 1,
    pareja: { tema, preguntas: [[pl, es]], frases: [...], reto: [pl, es] },   // opcional
    lecciones: [{ id, titulo, min, intro, vocab: [[texto, es]],
                  bloques: [ {t:'tabla', cab:[...], filas:[[...]], audio:[columnas con audio]},
                             {t:'p', x}, {t:'nota', x}, {t:'ej', items:[[texto, es]]} ],
                  ejercicios: [ {t:'mc', q, ops, ok}, {t:'oir', x, ops, ok},
                                {t:'orden', es, x}, {t:'decir', es, x} ] }],   // 'decir' solo si el curso tiene reconocimiento de voz
    lecturas: [{ id, titulo, nivel, texto, traduccion, glosa: {forma: 'significado'},
                 preguntas: [{q, ops, ok}], antiguo?, notas? }]
  }]
}
```

Para un idioma nuevo: añadirlo en `courses/index.js` con `estado:'activo'`, crear `courses/<id>.js` y cargarlo en `index.html`.

`node tools/test-content.js` revisa todo el contenido (forma, ids, tarjetas repetidas entre semanas, que cada palabra de las lecturas tenga glosa…); `node tools/test-content.js courses/pl-3.js` revisa solo esa semana frente a la semana 1.

## Publicar una versión

```
node tools/test-core.js && node tools/test-content.js
node tools/release.js        # recalcula la versión y la lista de archivos de sw.js
git commit -am "..." && git push
```

La app instalada detecta la versión nueva y muestra *Actualizar*.

Prueba completa en navegador (necesita Python Playwright): `python3 tools/smoke.py`. Simula voz, micrófono y la API, y guarda capturas en `.shots/`.

## Datos

El progreso se guarda en el dispositivo (IndexedDB). Ajustes › *Guardar copia* descarga un JSON que se puede restaurar en otro móvil. Todavía no hay sincronización automática entre dispositivos.

Fuentes bajo SIL Open Font License (ver `fonts/`).
