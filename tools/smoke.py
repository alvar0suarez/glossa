# Prueba de humo en navegador: python3 tools/smoke.py  (sirve la app en localhost:8765)
# Simula voz, micrófono y la API de Claude; guarda capturas en .shots/ (móvil 412×915, Fold abierta 884×1104, claro y oscuro).
import asyncio, json, subprocess, sys, time, os
from playwright.async_api import async_playwright
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SHOTS = os.environ.get('GLOSSA_SHOTS', os.path.join(ROOT, '.shots'))
os.makedirs(SHOTS, exist_ok=True)
URL = 'http://localhost:8765/'
STUB = r"""
window.__stt = 'Dziękuję bardzo';
class FakeSR { start(){ setTimeout(()=>{ const r=[{transcript: window.__stt}]; r.isFinal = true; this.onresult && this.onresult({results:[r], resultIndex:0}); this.onend && this.onend(); }, 60); } stop(){} abort(){} }
window.webkitSpeechRecognition = FakeSR; window.SpeechRecognition = FakeSR;
if (window.speechSynthesis) { window.speechSynthesis.speak = u => { (window.__spoken = window.__spoken || []).push(u.text); setTimeout(() => u.onend && u.onend(), 15); }; }
"""
def sse(text):
    ev = [('message_start', {'type': 'message_start', 'message': {'id': 'm', 'type': 'message', 'role': 'assistant', 'content': []}}),
          ('content_block_start', {'type': 'content_block_start', 'index': 0, 'content_block': {'type': 'thinking', 'thinking': ''}}),
          ('content_block_delta', {'type': 'content_block_delta', 'index': 0, 'delta': {'type': 'thinking_delta', 'thinking': 'pensando'}}),
          ('content_block_stop', {'type': 'content_block_stop', 'index': 0}),
          ('content_block_start', {'type': 'content_block_start', 'index': 1, 'content_block': {'type': 'text', 'text': ''}})]
    for i in range(0, len(text), 40):
        ev.append(('content_block_delta', {'type': 'content_block_delta', 'index': 1, 'delta': {'type': 'text_delta', 'text': text[i:i+40]}}))
    ev += [('content_block_stop', {'type': 'content_block_stop', 'index': 1}), ('message_delta', {'type': 'message_delta', 'delta': {'stop_reason': 'end_turn'}}), ('message_stop', {'type': 'message_stop'})]
    return ''.join(f'event: {e}\ndata: {json.dumps(d, ensure_ascii=False)}\n\n' for e, d in ev)
# Respuestas fijas del generador de niveles (algunos ejercicios son inválidos a propósito: la app debe descartarlos)
PLAN = {'titulo': 'Contar historias', 'objetivos': ['Narrar en pasado', 'Usar conectores'],
        'lecciones': [{'titulo': f'Historia {i}', 'foco': 'pasado y conectores'} for i in range(1, 7)],
        'lecturas': [{'titulo': 'Wczoraj', 'foco': 'un día cualquiera'}, {'titulo': 'Wakacje', 'foco': 'las vacaciones'}]}
LESSON = {'titulo': 'Najpierw y potem', 'min': 35, 'intro': 'Cuenta lo que hiciste *en orden*.',
          'vocab': [['nigdy', 'nunca'], ['kartka', 'hoja de papel'], ['parasol', 'paraguas'], ['dom', 'casa (repetida: se descarta en polaco)']],
          'bloques': [{'t': 'p', 'x': 'Usa *najpierw* para empezar.'}, {'t': 'tabla', 'cab': ['Conector', 'Significado'], 'filas': [['najpierw', 'primero'], ['potem']], 'audio': [0, 5]},
                      {'t': 'ej', 'items': [['Najpierw jem śniadanie, potem idę do pracy.', 'Primero desayuno, luego voy al trabajo.']]}, {'t': 'raro', 'x': 'se descarta'}],
          'ejercicios': [{'t': 'mc', 'q': '¿Qué significa *potem*?', 'ops': ['después', 'antes', 'nunca'], 'ok': 0},
                         {'t': 'mc', 'q': 'mal', 'ops': ['a', 'b'], 'ok': 5},
                         {'t': 'oir', 'x': 'najpierw', 'ops': ['potem', 'najpierw', 'nigdy'], 'ok': 0},
                         {'t': 'oir', 'x': 'zawsze', 'ops': ['potem', 'nigdy'], 'ok': 0},
                         {'t': 'orden', 'es': 'Primero como, luego duermo.', 'x': 'Najpierw jem, potem śpię.'},
                         {'t': 'orden', 'es': 'mal', 'x': 'una'},
                         {'t': 'decir', 'es': 'al final', 'x': 'w końcu'}]}
READING = {'titulo': 'Wczoraj', 'nivel': 'B1', 'texto': 'Wczoraj najpierw pracowałem, potem czytałem.', 'traduccion': 'Ayer primero trabajé, luego leí.',
           'glosa': {'wczoraj': 'ayer', 'najpierw': 'primero', 'potem': 'luego'}, 'preguntas': [{'q': '¿Qué hizo primero?', 'ops': ['Trabajó', 'Leyó'], 'ok': 0}], 'notas': 'Pasado en -łem.'}
CALLS = []
async def api(route, request):
    if request.method == 'OPTIONS':
        await route.fulfill(status=204, headers={'access-control-allow-origin': '*', 'access-control-allow-headers': '*', 'access-control-allow-methods': 'POST'}); return
    body = json.loads(request.post_data); txt = json.dumps(body, ensure_ascii=False)
    CALLS.append({'headers': request.headers, 'body': body})
    if 'PLAN DE UNIDAD' in txt: out = json.dumps(PLAN, ensure_ascii=False)
    elif 'LECCIÓN COMPLETA' in txt: out = 'Aquí está:\n```json\n' + json.dumps(LESSON, ensure_ascii=False) + '\n```'
    elif 'LECTURA DE UNIDAD' in txt: out = json.dumps(READING, ensure_ascii=False)
    elif 'GLOSA QUE FALTA' in txt: out = json.dumps({'pracowałem': 'trabajé (pasado, 1.ª persona)', 'czytałem': 'leí'}, ensure_ascii=False)
    elif 'lectura graduada' in txt:
        out = json.dumps({'titulo': 'Mój brat', 'texto': 'Mam brata. Brat ma psa i kota.', 'glosa': {'mam': 'tengo', 'brata': 'hermano (acusativo)', 'brat': 'hermano', 'ma': 'tiene', 'psa': 'perro (acusativo)', 'i': 'y', 'kota': 'gato (acusativo)'}, 'traduccion': 'Tengo un hermano. Mi hermano tiene un perro y un gato.', 'preguntas': [{'q': '¿Qué tiene el hermano?', 'ops': ['Un perro y un gato', 'Un coche'], 'ok': 0}]}, ensure_ascii=False)
    elif 'Revisa SOLO' in txt:
        out = 'Aquí tienes:\n```json\n' + json.dumps({'resumen': 'Bien para empezar.', 'correcciones': [{'dijiste': 'Mam imię Pablo', 'mejor': 'Mam na imię Pablo', 'explicacion': 'Falta «na».'}], 'palabras': [{'t': 'na imię', 'es': 'de nombre'}]}, ensure_ascii=False) + '\n```'
    elif 'título breve en español' in txt:
        out = json.dumps({'titulo': 'Definición del término', 'texto': 'Varie de definitione termini ſentiunt Authores.', 'glosa': {'varie': 'de distinta manera', 'de': 'sobre', 'definitione': 'definición', 'termini': 'del término', 'ſentiunt': '= sentiunt: opinan', 'authores': '= auctores: autores'}, 'traduccion': 'Los autores opinan de distinta manera sobre la definición del término.', 'notas': 'Fíjate en la ſ.', 'antiguo': True}, ensure_ascii=False)
    elif 'Traduce al español' in txt: out = 'Hola, ¿cómo te llamas?'
    elif 'Palabra en' in txt: out = 'mieć — tener — 1.ª persona del presente'
    elif 'listo' in txt: out = 'listo'
    else: out = 'Cześć! Jak masz na imię?'
    await route.fulfill(status=200, headers={'content-type': 'text/event-stream', 'access-control-allow-origin': '*'}, body=sse(out))

KEY_JS = """() => { const it = document.querySelector('.player .item'); if (!it) return '';
  const q = s => { const e = it.querySelector(s); return e ? e.textContent.trim() : ''; };
  const say = it.querySelector('.listen .say'); return [q('.itype'), q('.show'), q('.q'), q('.cloze'), q('.big-es'), say ? say.dataset.say : ''].join('|'); }"""
SCROLL_JS = '() => Math.round(Math.max(window.scrollY, document.body.scrollTop))'
# Para fallar a propósito: busca el ejercicio en el contenido y devuelve una opción incorrecta
WRONG_JS = """() => { const q = document.querySelector('.player .item .q'); if (!q) return null; const txt = q.textContent.trim();
  for (const c in CONTENT) for (const s of CONTENT[c].semanas || []) for (const l of s.lecciones) for (const e of l.ejercicios)
    if (e.q && e.ops && e.q.replace(/\\*/g, '').trim() === txt) return e.ops.find((o, j) => j !== e.ok);
  return null; }"""
CLICK_OPT_JS = """w => { const b = [...document.querySelectorAll('.player .opt')].find(x => x.querySelector('.ol').textContent === w); if (b) b.click(); return !!b; }"""

async def main():
    srv = subprocess.Popen([sys.executable, '-m', 'http.server', '8765', '--bind', '127.0.0.1'], cwd=ROOT, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    time.sleep(0.8)
    errors, fails = [], []
    def check(ok, msg):
        if not ok: fails.append(msg)
        print(('  ok · ' if ok else '  FALLA · ') + msg)
    try:
        async with async_playwright() as p:
            b = await p.chromium.launch(args=['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream'])
            ctx = await b.new_context(viewport={'width': 412, 'height': 915}, device_scale_factor=2, permissions=['microphone'])
            await ctx.add_init_script(STUB)
            await ctx.route('https://api.anthropic.com/v1/messages', api)
            pg = await ctx.new_page()
            pg.on('pageerror', lambda e: errors.append('pageerror: ' + str(e)))
            pg.on('console', lambda m: errors.append('console.' + m.type + ': ' + m.text) if m.type in ('error', 'warning') else None)
            async def click(sel, wait=140):
                await pg.locator(f'{sel} >> visible=true').first.click(); await pg.wait_for_timeout(wait)
            async def text(sel='main'): return (await pg.locator(sel).first.inner_text()).replace('\n', ' | ')
            async def shot(name, full=False): await pg.screenshot(path=f'{SHOTS}/{name}.png', full_page=full)
            async def sy(page=None): return await (page or pg).evaluate(SCROLL_JS)
            async def doc(k): return await pg.evaluate(f"() => JSON.parse(JSON.stringify(Store.doc('{k}')))")
            async def no_jump(loc, label, page=None):
                page = page or pg
                await loc.evaluate('e => e.scrollIntoView({block: "center"})'); await page.wait_for_timeout(250)
                before = await sy(page)
                await loc.click(); await page.wait_for_timeout(350)
                after = await sy(page)
                check(before > 0 and abs(after - before) <= 1, f'sin salto al tocar ({label}): scroll {before} → {after}')
            # Contesta el ejercicio que está en pantalla. mem guarda las respuestas vistas al fallar (como haría él).
            async def answer(mem, wrong_first=False):
                key = await pg.evaluate(KEY_JS)
                item = pg.locator('.player .item')
                if await item.locator('.opt').count():
                    want = mem.get(key) or (await pg.evaluate(WRONG_JS) if wrong_first else None)
                    if not (want and await pg.evaluate(CLICK_OPT_JS, want)):
                        await item.locator('.opt').nth(1 if wrong_first else 0).click()
                    await pg.wait_for_timeout(140)
                    if await pg.locator('.actbar.bad').count():
                        mem[key] = (await item.locator('.opt.ok .ol').inner_text()).strip()
                    return 'opt'
                if await item.locator('.pool .chip').count():
                    js = await item.locator('.pool .chip').evaluate_all('els => els.map(e => +e.dataset.j)')
                    for j in sorted(js): await item.locator(f'.pool .chip[data-j="{j}"]').click(); await pg.wait_for_timeout(50)
                    await click('#main-act'); return 'orden'
                if await item.locator('.big-es').count():
                    if key in mem: await pg.evaluate(f'window.__stt = {json.dumps(mem[key])}')
                    if await pg.locator('[data-act="ex-say"]').count():
                        await click('#main-act', 420)
                        if await pg.locator('.actbar.bad').count(): mem[key] = (await pg.locator('.fb-ans .t').first.inner_text()).strip()
                    else: await click('#main-act')
                    return 'decir'
                return '?'
            async def play_all(mem, limit=80, wrong_first=False):
                n = 0
                while n < limit and await pg.locator('.player .item').count():
                    await answer(mem, wrong_first and n == 0); n += 1
                    if await pg.locator('#main-act[data-act="ex-next"]').count(): await click('#main-act', 120)
                return n

            await pg.goto(URL); await pg.wait_for_timeout(900)
            await shot('01_hoy_movil')
            print('hoy:', (await text())[:170])
            # ---------- Tu ruta ----------
            print('· ruta')
            await click('nav.tabs [data-go="aprender"]')
            check(await pg.locator('.unit.cur').count() == 1, 'la unidad actual está resaltada')
            check('Continuar' in await text('.continuar'), 'botón Continuar a la siguiente lección')
            await shot('02_ruta_movil')
            # ---------- Lección como flujo guiado ----------
            print('· lección paso a paso')
            await click('[data-go="leccion"][data-param="pl1-3"]')
            check(await pg.locator('.stepper .step.on').inner_text() == '1\nAprende' or 'Aprende' in await pg.locator('.stepper .step.on').inner_text(), 'empieza en «Aprende»')
            check(await pg.locator('nav.tabs').count() == 0, 'en la lección no hay barra de pestañas (modo foco)')
            await shot('03_leccion_aprende_movil')
            say_btn = pg.locator('.paso .examples .say').nth(3)
            await no_jump(say_btn, 'audio en Aprende')
            await click('#main-act', 250)
            check('vocab' in pg.url, 'paso 2: vocabulario (' + pg.url.split('#')[1] + ')')
            sp0 = await pg.evaluate('(window.__spoken || []).length')
            await click('[data-act="voc-all"]', 900)
            check(await pg.evaluate('(window.__spoken || []).length') > sp0, 'Escuchar todo reproduce las tarjetas')
            check(await pg.locator('.vcard.playing').count() == 1, 'la tarjeta que suena se resalta')
            await click('[data-act="voc-stop"]')
            await click('.vcard >> nth=2', 150)
            await shot('04_leccion_vocab_movil')
            await click('#main-act', 250)
            check(await pg.locator('.player').count() == 1, 'paso 3: reproductor de ejercicios')
            mem = {}
            # primero, un fallo a propósito: corrección, respuesta y vuelve al final
            await answer(mem, wrong_first=True)
            check(await pg.locator('.actbar.bad').count() == 1 and await pg.locator('.opt.ok').count() == 1, 'fallo: se marca y se ve la respuesta correcta')
            await shot('05_practica_fallo_movil')
            await click('#main-act', 120)
            prog = await text('.ply-top')
            # a mitad: comprobar que el progreso se guarda
            await pg.evaluate("window.__stt = 'Dziękuję bardzo'")
            for _ in range(2):
                await answer(mem); await click('#main-act', 120)
            saved = (await doc('pl'))['prog'].get('pl1-3', {})
            check(saved.get('p') == 'practica' and saved.get('pl', {}).get('i', 0) >= 3, f'progreso de la lección guardado (paso {saved.get("p")}, ejercicio {saved.get("pl", {}).get("i")})')
            await pg.evaluate("window.__stt = 'Dziękuję bardzo'")
            n = await play_all(mem)
            check(await pg.locator('.resumen').count() == 1, f'paso 4: resumen tras {n} ejercicios más (los fallos vuelven al final)')
            print('resumen:', (await text('.resumen'))[:150])
            check('pl1-3' in (await doc('pl'))['lec'], 'terminar la práctica marca la lección como hecha')
            await shot('06_resumen_movil')
            # ---------- Retomar donde lo dejaste ----------
            print('· retomar')
            await pg.goto(URL + '#leccion/pl1-4/practica'); await pg.wait_for_timeout(400)
            for _ in range(2): await answer(mem); await click('#main-act', 120)
            before = await text('.ply-top')
            await pg.goto(URL + '#hoy'); await pg.wait_for_timeout(700); await pg.reload(); await pg.wait_for_timeout(900)
            await pg.goto(URL + '#leccion/pl1-4'); await pg.wait_for_timeout(500)
            check(await pg.locator('.player').count() == 1 and await text('.ply-top') == before, f'al volver sigue en Practica, en el mismo punto ({before})')
            # ---------- Ver todo, sin saltos ----------
            print('· ver todo')
            await click('.flowhead [data-go="leccion"]', 300)
            check('todo' in pg.url and await pg.locator('.ex').count() >= 5, 'Ver todo: la lección entera en una página')
            await no_jump(pg.locator('.ex').nth(2).locator('.opt').first, 'opción en Ver todo')
            ex = pg.locator('.ex').nth(0)
            await no_jump(ex.locator('.pool .chip').first, 'ordenar en Ver todo')
            await click('[data-act="back"]', 300)
            check(await pg.locator('.player').count() == 1 and 'Practica' in await text('.step.on'), 'Volver regresa al paso donde estabas (' + pg.url.split('#')[1] + ')')
            await pg.set_viewport_size({'width': 412, 'height': 600}); await pg.wait_for_timeout(200)
            await pg.evaluate('() => window.scrollTo(0, 1e5)'); await pg.wait_for_timeout(200)
            before = await sy(); await pg.locator('.player .opt').last.click(); await pg.wait_for_timeout(350)
            check(before > 0 and await sy() == before, f'sin salto al tocar (reproductor con la pantalla corta): scroll {before} → {await sy()}')
            await pg.set_viewport_size({'width': 412, 'height': 915})
            # ---------- Practicar: tarjetas ----------
            print('· practicar')
            await click('[data-act="close"]', 300)
            await click('nav.tabs [data-go="practicar"]')
            await shot('07_practicar_movil')
            await click('[data-go="repasar"]')
            left0 = await text('.ply-top')
            for i in range(3): await click('[data-act="flip"]'); await click('[data-act="grade"][data-g="2"]')
            await click('[data-act="flip"]'); await click('[data-act="grade"][data-g="0"]')
            left1 = await text('.ply-top')
            await click('[data-act="undo"]')
            check(await pg.locator('.grades').count() == 1, 'Deshacer vuelve a la tarjeta anterior, ya volteada')
            await click('[data-act="grade"][data-g="3"]')
            await click('[data-act="flip"]')
            await shot('08_tarjetas_movil')
            print('tarjetas:', left0, '→', left1, '·', (await text())[:90])
            # ---------- Ejercicios variados ----------
            await click('[data-act="close"]', 300)
            await click('[data-act="ses-new"][data-kind="mezcla"]', 300)
            check(await pg.locator('.player').count() == 1, 'ejercicios variados: sesión nueva')
            tipos = set()
            for _ in range(80):
                if not await pg.locator('.player .item').count(): break
                tipos.add((await pg.locator('.player .itype').inner_text()).strip().lower())
                await answer(mem, wrong_first=len(tipos) == 1 and len(mem) < 2)
                if await pg.locator('#main-act[data-act="ex-next"]').count():
                    if len(tipos) == 3 and not os.path.exists(f'{SHOTS}/09_ejercicios_movil.png'): await shot('09_ejercicios_movil')
                    await click('#main-act', 120)
            check(len(tipos) >= 4, 'tipos variados: ' + ', '.join(sorted(tipos)))
            check(await pg.locator('.resumen').count() == 1, 'la sesión termina con su resumen')
            print('sesión:', (await text('.resumen'))[:160])
            ejs = (await doc('pl'))['ejs']
            check(sum(v['n'] for v in ejs.values()) >= 20, f'resultados guardados por día: {ejs}')
            # ---------- Tus errores ----------
            await click('[data-act="close"]', 300)
            nerr = await pg.locator('.hub .pill').count()
            check(nerr == 1, 'Tus errores muestra cuántos hay: ' + ((await text('.hub .pill')) if nerr else '0'))
            await click('[data-act="ses-new"][data-kind="errores"]', 300)
            m = await play_all(mem)
            check(await pg.locator('.resumen').count() == 1, f'sesión de errores completada ({m} ejercicios)')
            # ---------- Lectura con hoja de palabra ----------
            print('· lectura')
            await pg.goto(URL + '#aprender'); await pg.wait_for_timeout(300)
            await click('[data-go="lectura"][data-param="pl1-r1"]')
            await click('.reading .w >> nth=3'); print('palabra:', await text('.word-sheet'))
            await shot('10_lectura_movil')
            await click('h1.page')  # tocar fuera cierra la hoja
            check(await pg.locator('.word-sheet').count() == 0, 'tocar fuera cierra la hoja')
            await no_jump(pg.locator('.ex .opt').first, 'pregunta de comprensión')
            await click('[data-act="tr-toggle"]'); await click('[data-act="reading-done"]')
            # ---------- Ajustes ----------
            print('· ajustes')
            await click('[data-go="ajustes"]')
            check(await pg.locator('#vozpro').is_visible() and await pg.locator('#vozpro select, #vozpro input').count() > 0, 'la tarjeta de voces de calidad (VozPro) se ve en Ajustes')
            await pg.fill('#f-key', 'sk-ant-prueba'); await pg.locator('#f-key').dispatch_event('change'); await pg.wait_for_timeout(150)
            await pg.fill('#f-ella', 'Ania'); await pg.locator('#f-ella').dispatch_event('change')
            await pg.fill('#f-familia', 'Ewa: su madre\nMarek: su padre'); await pg.locator('#f-familia').dispatch_event('change')
            await pg.fill('[data-set="minutos.pl"]', '200'); await pg.locator('[data-set="minutos.pl"]').dispatch_event('change'); await pg.wait_for_timeout(150)
            await click('[data-act="ia-test"]', 500); print('prueba clave:', (await text('.settings'))[-160:].replace(' | ', ' '))
            await pg.locator('#f-nombre').focus(); await pg.keyboard.type('Álv')
            await pg.evaluate("speechSynthesis.dispatchEvent(new Event('voiceschanged'))"); await pg.wait_for_timeout(200)
            check(await pg.evaluate("document.activeElement && document.activeElement.id") == 'f-nombre' and await pg.input_value('#f-nombre') == 'Álv', 'un repintado no quita el foco ni lo que estás escribiendo')
            await pg.locator('#f-nombre').dispatch_event('change')
            await click('nav.tabs [data-go="hoy"]')
            check('/ 200 min' in await text('.hero'), 'minutos al día reparten el plan: ' + (await text('.meter-top')))
            # ---------- Conversación y manos libres ----------
            print('· conversación')
            await click('nav.tabs [data-go="hablar"]'); await click('[data-go="chat"]')
            await click('[data-act="chat-scene"][data-s="padres"]'); await click('[data-act="chat-start"]', 500)
            await pg.fill('#chatin', 'Mam imię Pablo'); await click('.composer button[type="submit"]', 500)
            await click('[data-act="chat-mic"]', 400)
            print('mic → caja:', await pg.input_value('#chatin'))
            await pg.fill('#chatin', '')
            await click('[data-act="chat-review"]', 500)
            await click('[data-act="chat-tr"]', 400)
            print('chat:', (await text())[:200])
            await click('[data-act="rev-card"]')
            await shot('11_chat_movil')
            u0 = await pg.locator('.msg.me').count()
            await pg.evaluate("window.__stt = 'Mam na imię Álvaro'")
            await click('[data-act="hf-start"]', 1600)
            check(await pg.locator('.hf').count() == 1, 'manos libres: panel con botón grande de parar')
            await shot('12_manos_libres_movil')
            u1 = await pg.locator('.msg.me').count()
            check(u1 > u0, f'manos libres: escucha, envía y vuelve a escuchar ({u1 - u0} turnos)')
            await click('[data-act="hf-stop"]', 600)
            u2 = await pg.locator('.msg.me').count(); await pg.wait_for_timeout(700)
            check(await pg.locator('.hf').count() == 0 and await pg.locator('.msg.me').count() == u2, 'Parar detiene la escucha')
            check(await pg.locator('[data-act="chat-review"]').is_enabled(), '«Terminar y corregir» sigue disponible')
            # ---------- Sesión con ella, audio, grabar ----------
            await click('nav.tabs [data-go="hablar"]'); await click('[data-go="pareja"]')
            await pg.fill('#par-notas', 'Wesołych Świąt = ¡Feliz Navidad!\nLa ł suena como u'); await click('form[data-act="par-done"] button[type="submit"]', 300)
            print('tras sesión:', (await text())[:120])
            await click('nav.tabs [data-go="hablar"]'); await click('[data-go="drill"]')
            await pg.evaluate("window.__stt = 'Dzień dobry'")
            await click('[data-act="drill-toggle"]', 1500); print('drill:', (await text('.drillcard')))
            await click('[data-act="drill-toggle"]')
            await click('nav.tabs [data-go="hablar"]'); await click('[data-go="grabar"]')
            await click('[data-act="rec-toggle"]', 700); await click('[data-act="rec-toggle"]', 600)
            print('grabación:', await pg.locator('audio').count())
            await pg.evaluate("window.__stt = 'dom'"); await click('[data-act="rec-check"]', 400)
            # ---------- Lectura generada, latín, texto propio ----------
            await click('nav.tabs [data-go="aprender"]'); await click('[data-act="gen-reading"]', 700)
            print('lectura IA:', (await text())[:110])
            await click('[data-act="courses"]'); await click('.course-row[data-course-set="la"]')
            await pg.goto(URL + '#leccion/la1-8/todo'); await pg.wait_for_timeout(400)
            await shot('13_latin_tipografia_movil')
            await click('[data-act="lesson-done"]')
            check('la1-8' in (await doc('la'))['lec'], '«Marcar como hecha» en Ver todo')
            await pg.goto(URL + '#lectura/la1-r5'); await pg.wait_for_timeout(400); await click('.reading .w >> nth=4')
            print('latín antiguo:', await text('.word-sheet'))
            await click('nav.tabs [data-go="aprender"]'); await click('[data-go="texto"]')
            await pg.fill('#txt', 'Varie de definitione termini ſentiunt Authores.'); await pg.check('#txt-antiguo'); await click('form[data-act="texto-send"] button[type="submit"]', 800)
            print('texto propio:', (await text())[:120])
            await pg.go_back(); await pg.wait_for_timeout(250); print('atrás →', pg.url.split('#')[1])
            # ---------- Empezar un curso en pausa ----------
            print('· cursos en pausa')
            await pg.goto(URL + '#hoy'); await pg.wait_for_timeout(300)
            check('En pausa' in await text(), 'Hoy muestra los cursos en pausa aparte')
            await click('[data-act="courses"]')
            await shot('14_idiomas_movil')
            await click('[data-act="course-start"][data-c="it"]', 300)
            it = (await doc('perfil'))['cursos'].get('it', {})
            today = await pg.evaluate('Core.localDateStr()')
            check(it.get('estado') == 'curso' and it.get('inicio') == today, f'«Empezar» pone el italiano en curso desde hoy ({it})')
            check('Lección' in await text() or 'lección' in await text(), 'el italiano empezado muestra sus tareas del día')
            # una semana sin contenido no rompe nada: se quita la semana 1 de italiano en esta página
            await pg.evaluate("CONTENT.it.semanas = CONTENT.it.semanas.filter(s => s.n !== 1)")
            await pg.goto(URL + '#aprender'); await pg.wait_for_timeout(300)
            await pg.goto(URL + '#hoy'); await pg.wait_for_timeout(300)
            check('se están preparando' in await text() or 'preparando' in await text(), 'semana sin contenido: «se están preparando», sin errores')
            await pg.reload(); await pg.wait_for_timeout(600)
            await shot('15_italiano_empezado_movil')
            await click('nav.tabs [data-go="aprender"]'); await click('nav.tabs [data-go="practicar"]'); await click('nav.tabs [data-go="progreso"]')
            await click('[data-act="courses"]') if await pg.locator('[data-act="courses"] >> visible=true').count() else None
            await click('.course-row[data-course-set="pl"]')
            # ---------- Niveles 2 y 3 con Claude ----------
            print('· generador')
            await pg.goto(URL + '#aprender'); await pg.wait_for_timeout(300)
            await click('[data-act="nivel"][data-n="2"]')
            check(await pg.locator('.locked').count() == 1, 'el nivel 2 está cerrado hasta el 80 % del nivel 1')
            await click('[data-act="abrir-nivel"][data-n="2"]')
            await click('[data-act="unit"][data-u="n2u1"]')
            await click('[data-act="gen-plan"][data-u="n2u1"]', 900)
            check(await pg.locator('.unit[data-u="n2u1"] .row.pend').count() == 8, 'plan de la unidad: 6 lecciones y 2 lecturas por preparar')
            await shot('16_nivel2_plan_movil')
            await click('[data-go="leccion"][data-param="pl-n2u1-1"]', 1500)
            lv = (await doc('pl-niveles'))['u']['n2u1']
            les = lv['lecciones'][0]
            check(await pg.locator('.stepper').count() == 1 and les['id'] == 'pl-n2u1-1', 'la lección se prepara al abrirla y se abre con sus pasos')
            check([e['t'] for e in les['ejercicios']] == ['mc', 'oir', 'orden', 'decir'] and les['ejercicios'][1]['ok'] == 1, 'validación: fuera ejercicios rotos, «oir» corregido: ' + str([e['t'] for e in les['ejercicios']]))
            check([v[0] for v in les['vocab']] == ['nigdy', 'kartka', 'parasol'], 'validación: sin tarjetas repetidas del curso')
            check(les['bloques'][1]['filas'][1] == ['potem', ''] and les['bloques'][1]['audio'] == [0] and len(les['bloques']) == 3, 'validación: tabla arreglada, bloque desconocido fuera')
            await shot('17_nivel2_leccion_movil')
            await pg.goto(URL + '#lectura/pl-n2u1-r1'); await pg.wait_for_timeout(1800)
            rd = (await doc('pl-niveles'))['u']['n2u1']['lecturas'][0]
            check(rd and 'pracowałem' in rd['glosa'], 'lectura: las palabras sin glosa se piden aparte y se guardan')
            check(await pg.locator('.reading').count() == 1, 'la lectura generada se abre con la glosa')
            exp = await pg.evaluate("Object.keys(Store.exportData().data)")
            check('pl-niveles' in exp, 'la copia de seguridad incluye pl-niveles')
            await pg.goto(URL + '#aprender'); await pg.wait_for_timeout(300)
            await click('[data-act="courses"]'); await click('.course-row[data-course-set="la"]')
            await click('[data-act="nivel"][data-n="2"]'); await click('[data-act="abrir-nivel"][data-n="2"]')
            await click('[data-act="unit"][data-u="n2u1"]'); await click('[data-act="gen-plan"][data-u="n2u1"]', 900)
            await click('[data-act="gen-item"]', 1500)
            lat = (await doc('la-niveles'))['u']['n2u1']['lecciones'][0]
            check('decir' not in [e['t'] for e in lat['ejercicios']], 'latín (sin reconocimiento de voz): sin ejercicios «decir»')
            await click('[data-act="courses"]'); await click('.course-row[data-course-set="pl"]')
            # ---------- Progreso ----------
            print('· progreso')
            await pg.wait_for_timeout(600); await pg.reload(); await pg.wait_for_timeout(900)
            await click('nav.tabs [data-go="progreso"]')
            t = await text()
            check(all(k in t.lower() for k in ('%', 'consolidadas', 'minutos al día', 'aciertos', 'errores recientes')), 'progreso: nivel, palabras, aciertos, minutos y errores')
            print('progreso tras recargar:', t[:260])
            await shot('18_progreso_movil', full=True)
            # ---------- Modo oscuro (móvil) ----------
            await pg.emulate_media(color_scheme='dark')
            for name, route in [('20_oscuro_hoy_movil', '#hoy'), ('21_oscuro_ruta_movil', '#aprender'), ('22_oscuro_progreso_movil', '#progreso')]:
                await pg.goto(URL + route); await pg.wait_for_timeout(350); await shot(name)
            await pg.goto(URL + '#leccion/pl1-5/practica'); await pg.wait_for_timeout(400)
            await answer({}, wrong_first=True); await shot('23_oscuro_practica_movil')
            await pg.goto(URL + '#repasar'); await pg.wait_for_timeout(300)
            if await pg.locator('[data-act="flip"]').count(): await click('[data-act="flip"]')
            await shot('24_oscuro_tarjetas_movil')
            await pg.emulate_media(color_scheme='light')
            # ---------- Pantalla grande (Fold abierta) ----------
            await pg.set_viewport_size({'width': 884, 'height': 1104}); await pg.wait_for_timeout(300)
            for name, route in [('30_hoy_fold', '#hoy'), ('31_ruta_fold', '#aprender'), ('32_leccion_fold', '#leccion/pl1-6'), ('34_practicar_fold', '#practicar'), ('36_progreso_fold', '#progreso')]:
                await pg.goto(URL + route); await pg.wait_for_timeout(400); await shot(name)
            await pg.goto(URL + '#leccion/pl1-6/practica'); await pg.wait_for_timeout(400)
            await answer({}); await shot('33_practica_fold')
            # la columna lateral fija de «Ver todo» tiene su propio scroll: tampoco se mueve
            await pg.goto(URL + '#leccion/pl1-7/todo'); await pg.wait_for_timeout(400)
            side = pg.locator('.col-side')
            await side.evaluate('e => { e.scrollTop = e.scrollHeight; }'); await pg.wait_for_timeout(150)
            s0 = await side.evaluate('e => Math.round(e.scrollTop)')
            target = pg.locator('.col-side .ex .opt').last
            box = await target.bounding_box()
            await pg.mouse.click(box['x'] + box['width'] / 2, box['y'] + box['height'] / 2); await pg.wait_for_timeout(350)
            s1 = await side.evaluate('e => Math.round(e.scrollTop)')
            check(s0 > 0 and s0 == s1 and await pg.locator('.col-side .exres').count() >= 1, f'el panel lateral conserva su scroll al contestar ({s0} → {s1})')
            await pg.goto(URL + '#lectura/la1-r5'); await pg.wait_for_timeout(400)
            await click('.reading .w >> nth=6'); await shot('35_lectura_fold')
            await pg.goto(URL + '#chat'); await pg.wait_for_timeout(300)
            await shot('37_chat_fold')
            await pg.goto(URL + '#ajustes'); await pg.wait_for_timeout(300)
            await shot('38_ajustes_fold', full=True)
            await pg.emulate_media(color_scheme='dark')
            for name, route in [('40_oscuro_hoy_fold', '#hoy'), ('41_oscuro_leccion_fold', '#leccion/pl1-6/aprende'), ('42_oscuro_progreso_fold', '#progreso')]:
                await pg.goto(URL + route); await pg.wait_for_timeout(400); await shot(name)
            await pg.emulate_media(color_scheme='light')
            # sin conexión
            sw = await pg.evaluate("navigator.serviceWorker.ready.then(r => !!r.active)")
            await ctx.set_offline(True); await pg.reload(); await pg.wait_for_timeout(800)
            print('service worker:', sw, '· sin conexión:', (await text())[:70])
            await ctx.set_offline(False)
            # llamadas a la API
            h = CALLS[0]['headers'] if CALLS else {}
            print('API llamadas:', len(CALLS), '· cabecera navegador:', h.get('anthropic-dangerous-direct-browser-access'), '· clave:', h.get('x-api-key'), '· modelo:', CALLS[1]['body'].get('model') if len(CALLS) > 1 else None, '· effort:', CALLS[1]['body'].get('output_config') if len(CALLS) > 1 else None)
            gen = [c['body'] for c in CALLS if 'LECCIÓN COMPLETA' in json.dumps(c['body'], ensure_ascii=False)]
            check(bool(gen) and gen[0].get('output_config') == {'effort': 'medium'} and gen[0].get('max_tokens') == 16000, 'generador: modelo principal, effort medium, 16000 tokens')
            # ---------- Fold plegado con Chrome en «Sitio de escritorio»: 980 px de página en una pantalla de 412 ----------
            dk = await b.new_context(viewport={'width': 980, 'height': 2178}, screen={'width': 412, 'height': 915}, has_touch=True, device_scale_factor=1)
            await dk.add_init_script(STUB)
            dp = await dk.new_page()
            dp.on('pageerror', lambda e: errors.append('pageerror (escritorio): ' + str(e)))
            await dp.goto(URL + '#hoy'); await dp.wait_for_timeout(700)
            info = await dp.evaluate("({zoom: document.documentElement.style.zoom, wide: document.documentElement.classList.contains('wide'), tabs: getComputedStyle(document.querySelector('nav.tabs')).display})")
            print('modo escritorio plegado:', info)
            await dp.screenshot(path=f'{SHOTS}/50_hoy_plegado_escritorio.png')
            await dp.goto(URL + '#leccion/pl2-1/todo'); await dp.wait_for_timeout(500)
            await no_jump(dp.locator('.ex').nth(3).locator('.opt, .chip, [data-act="ex-reveal"]').first, 'ampliada («Sitio de escritorio»)', dp)
            await dp.goto(URL + '#aprender'); await dp.wait_for_timeout(300)
            await dp.evaluate('() => window.scrollTo(0, 400)'); await dp.wait_for_timeout(100)
            await dp.locator('[data-go="leccion"] >> visible=true').first.click(); await dp.wait_for_timeout(400)
            check(await sy(dp) == 0, 'ampliada: cambiar de ruta vuelve arriba')
            await dp.screenshot(path=f'{SHOTS}/51_leccion_plegado_escritorio.png')
            # semanas nuevas: una lección y una lectura de cada idioma
            for route in ['#leccion/pl8-2', '#lectura/pl7-r2', '#leccion/la7-7', '#lectura/la8-r1']:
                await pg.goto(URL + route); await pg.wait_for_timeout(450)
                print('ruta', route, '→', (await text())[:100])
            await b.close()
    finally:
        srv.terminate()
    errs = [e for e in errors if 'favicon' not in e]
    print('COMPROBACIONES FALLIDAS:', len(fails))
    for f in fails: print('  ', f)
    print('ERRORES:', len(errs) + len(fails))
    for e in errs[:20]: print('  ', e)
asyncio.run(main())
