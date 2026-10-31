# Glossa

App de idiomas instalable (PWA) para estudiar desde el móvil: **polaco** para la Navidad en familia, **latín** para leer lógica escolástica, **griego antiguo** (filosofía) e **italiano** (trabajo): ocho semanas escritas de cada uno (nivel 1) y dos niveles más que prepara Claude. El griego y el italiano empiezan en pausa: «Empezar» los pone en curso desde ese día.

Todo vive en una sola app con un único estado: lecciones, tarjetas con repetición espaciada, lecturas con glosa palabra a palabra, audio, micrófono, conversación con Claude y sesiones con tu chica.

**Abrir:** https://alvar0suarez.github.io/glossa/

## Instalar

- **Android (Chrome):** abre el enlace › menú ⋮ › *Instalar aplicación*. Funciona sin conexión salvo lo que usa Claude.
- **iPhone (Safari):** Compartir › *Añadir a pantalla de inicio*. En iPhone el reconocimiento de voz depende de Safari y puede no estar disponible.
- **Voz polaca en Android:** en los ajustes del móvil busca «texto a voz», elige como motor *Servicios de voz de Google* e instala en él la voz polaca (en Samsung suele estar en Administración general › Texto a voz).
- **Voces de calidad (opcional):** Ajustes › Voces premium. Recomendado: Google Cloud Text-to-Speech (voces Chirp 3 HD, 1 millón de caracteres gratis al mes). En console.cloud.google.com: crea un proyecto, activa «Cloud Text-to-Speech API» y la facturación, y en Credenciales crea una clave de API restringida a esa API y a `alvar0suarez.github.io/*`. También admite Azure, OpenAI y ElevenLabs. El audio se guarda en el móvil: repetirlo no cuesta y suena sin conexión.
- **Claude:** crea una clave en [platform.claude.com](https://platform.claude.com) (*API Keys*), carga saldo en *Billing* y pégala en Ajustes › Claude. La clave se guarda solo en el dispositivo y no sale en las copias de seguridad.

## Qué hay dentro

| Parte | Qué hace |
|---|---|
| Hoy | Plan del día de cada idioma en curso (minutos por tarea), cuenta atrás a Nochebuena; los idiomas en pausa aparte |
| Aprender | Tu ruta: niveles › unidades › lecciones y lecturas, con el progreso de cada unidad y «Continuar». Lecturas hechas para ti y textos propios (pegados o fotografiados) |
| Lección | Paso a paso: **Aprende** (explicación y tablas con audio) › **Vocabulario** (escuchar todo o tarjeta a tarjeta) › **Practica** (un ejercicio cada vez; los fallos vuelven al final) › **Resumen**. Se retoma donde lo dejaste; «Ver todo» la muestra entera |
| Practicar | **Tarjetas** SM-2 (con deshacer), **Ejercicios variados** (unos 15 con lo aprendido: significado, al revés, escucha, ordenar, huecos, decir; insisten en lo que fallas) y **Tus errores** |
| Hablar | Conversación con Claude (también **manos libres**: escucha, envía al callar, contesta en voz alta) y corrección al terminar, audio para hablar, grabarte, sesión con tu chica, escucha nativa |
| Progreso | Por idioma: % del nivel, palabras aprendiendo / consolidadas / total, aciertos de 7 días, minutos de 14 días, racha, hitos, errores recientes |
| Ajustes | Nombres y familia, idiomas en curso o en pausa, inicio y minutos al día de cada uno, voces, clave de Claude, copia de seguridad |

**Niveles.** El nivel 1 son las 8 semanas de cada curso. Los niveles 2 y 3 (`niveles[].temario` en `courses/<id>.js`) se abren al completar el 80 % del anterior, o antes con «Abrir ya». Claude prepara cada unidad cuando la necesitas (primero el plan, luego cada lección o lectura al abrirla) con tu clave; todo se valida antes de guardarse.

**Toques sin saltos.** La vista se actualiza en su sitio: contestar, voltear una tarjeta o pulsar un altavoz no mueve la página ni pierde el foco; solo cambiar de pantalla vuelve arriba (y «atrás» devuelve a donde estabas). En lecciones y prácticas la acción principal está abajo, al alcance del pulgar. Con teclado: 1-9 eligen, Intro sigue, espacio voltea la tarjeta.

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
js/voz-pro.js           voces de calidad con tu clave (Google, Azure, OpenAI, ElevenLabs), con caché
js/ai.js                API de Claude desde el navegador, en streaming
js/app.js               interfaz y vistas
courses/index.js        lista de cursos
courses/pl.js, la.js    semana 1 de cada curso (títulos y programa de las 8 semanas)
courses/pl-2.js … la-8.js  una semana por archivo
courses/grc.js, it.js   griego e italiano: títulos y programa; sus semanas en grc-1.js … it-8.js
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

Prueba completa en navegador (necesita Python Playwright): `python3 tools/smoke.py`. Simula voz, micrófono y la API (también el generador de niveles), comprueba que los toques no mueven la página y guarda capturas en `.shots/` (móvil y Fold abierta, claro y oscuro). Debe terminar en `ERRORES: 0`.

## Datos

El progreso se guarda en el dispositivo (IndexedDB). Ajustes › *Guardar copia* descarga un JSON que se puede restaurar en otro móvil. Todavía no hay sincronización automática entre dispositivos.

Documentos: `perfil` (con `cursos[c].estado` en curso / en pausa, `inicio`, `abierto` y `ajustes.minutos[c]`), `<c>` (lecciones y lecturas hechas, minutos, errores; además `prog`: paso y ejercicio de cada lección a medias, `ejs`: ejercicios por día `{n, ok}`, `fallos`: ejercicios fallados), `<c>-tarjetas`, `<c>-propias`, `<c>-generadas` y `<c>-niveles` (unidades de los niveles 2 y 3: `{u: {n2u1: {plan, lecciones, lecturas}}}`, ids `<c>-n2u1-1` y `<c>-n2u1-r1`).

Fuentes bajo SIL Open Font License (ver `fonts/`).
