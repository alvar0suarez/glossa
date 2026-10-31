# Prueba de humo en navegador: python3 tools/smoke.py  (sirve la app en localhost:8765)
import asyncio, json, subprocess, sys, time, os
from playwright.async_api import async_playwright
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SHOTS = os.environ.get('GLOSSA_SHOTS', os.path.join(ROOT, '.shots'))
os.makedirs(SHOTS, exist_ok=True)
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
CALLS = []
async def api(route, request):
    if request.method == 'OPTIONS':
        await route.fulfill(status=204, headers={'access-control-allow-origin': '*', 'access-control-allow-headers': '*', 'access-control-allow-methods': 'POST'}); return
    body = json.loads(request.post_data); txt = json.dumps(body, ensure_ascii=False)
    CALLS.append({'headers': request.headers, 'body': body})
    if 'lectura graduada' in txt:
        out = json.dumps({'titulo': 'Mój brat', 'texto': 'Mam brata. Brat ma psa i kota.', 'glosa': {'mam': 'tengo', 'brata': 'hermano (acusativo)', 'brat': 'hermano', 'ma': 'tiene', 'psa': 'perro (acusativo)', 'i': 'y', 'kota': 'gato (acusativo)'}, 'traduccion': 'Tengo un hermano. Mi hermano tiene un perro y un gato.', 'preguntas': [{'q': '¿Qué tiene el hermano?', 'ops': ['Un perro y un gato', 'Un coche'], 'ok': 0}]}, ensure_ascii=False)
    elif 'Revisa SOLO' in txt:
        out = 'Aquí tienes:\n```json\n' + json.dumps({'resumen': 'Bien para empezar.', 'correcciones': [{'dijiste': 'Mam imię Pablo', 'mejor': 'Mam na imię Pablo', 'explicacion': 'Falta «na».'}], 'palabras': [{'t': 'na imię', 'es': 'de nombre'}]}, ensure_ascii=False) + '\n```'
    elif 'Devuelve SOLO un JSON con esta forma:\\n{\\"titulo\\": \\"título breve' in txt or 'título breve en español' in txt:
        out = json.dumps({'titulo': 'Definición del término', 'texto': 'Varie de definitione termini ſentiunt Authores.', 'glosa': {'varie': 'de distinta manera', 'de': 'sobre', 'definitione': 'definición', 'termini': 'del término', 'ſentiunt': '= sentiunt: opinan', 'authores': '= auctores: autores'}, 'traduccion': 'Los autores opinan de distinta manera sobre la definición del término.', 'notas': 'Fíjate en la ſ.', 'antiguo': True}, ensure_ascii=False)
    elif 'Traduce al español' in txt: out = 'Hola, ¿cómo te llamas?'
    elif 'Palabra en' in txt: out = 'mieć — tener — 1.ª persona del presente'
    elif 'listo' in txt: out = 'listo'
    else: out = 'Cześć! Jak masz na imię?'
    await route.fulfill(status=200, headers={'content-type': 'text/event-stream', 'access-control-allow-origin': '*'}, body=sse(out))

async def main():
    srv = subprocess.Popen([sys.executable, '-m', 'http.server', '8765', '--bind', '127.0.0.1'], cwd=ROOT, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    time.sleep(0.8)
    errors = []
    try:
        async with async_playwright() as p:
            b = await p.chromium.launch(args=['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream'])
            ctx = await b.new_context(viewport={'width': 412, 'height': 915}, device_scale_factor=2, permissions=['microphone'])
            await ctx.add_init_script(STUB)
            await ctx.route('https://api.anthropic.com/v1/messages', api)
            pg = await ctx.new_page()
            pg.on('pageerror', lambda e: errors.append('pageerror: ' + str(e)))
            pg.on('console', lambda m: errors.append('console.' + m.type + ': ' + m.text) if m.type in ('error', 'warning') else None)
            async def click(sel, wait=120):
                await pg.locator(f'{sel} >> visible=true').first.click(); await pg.wait_for_timeout(wait)
            async def text(sel='main'): return (await pg.locator(sel).first.inner_text()).replace('\n', ' | ')
            await pg.goto('http://localhost:8765/'); await pg.wait_for_timeout(900)
            await pg.screenshot(path=f'{SHOTS}/01_hoy_movil.png')
            print('hoy:', (await text())[:160])
            # lección de polaco
            await click('[data-go="aprender"]'); await click('[data-go="leccion"][data-param="pl1-3"]')
            exs = pg.locator('.ex')
            for i in range(3): await exs.nth(i).locator('[data-act="ex-pick"]').first.click(); await pg.wait_for_timeout(60)
            ex = exs.nth(3)
            for i in range(2): await ex.locator('[data-act="ex-build"]:not([disabled])').first.click(); await pg.wait_for_timeout(60)
            await ex.locator('[data-act="ex-check"]').click(); await pg.wait_for_timeout(80)
            await exs.nth(5).locator('[data-act="ex-say"]').click(); await pg.wait_for_timeout(400)
            print('decir:', (await exs.nth(5).inner_text()).replace('\n', ' | '))
            await pg.evaluate("window.__stt = 'przepraszam bardzo'")
            await exs.nth(6).locator('[data-act="ex-say"]').click(); await pg.wait_for_timeout(400)
            print('decir 2:', (await exs.nth(6).inner_text()).replace('\n', ' | '))
            await pg.screenshot(path=f'{SHOTS}/02_leccion_movil.png', full_page=False)
            await click('[data-act="lesson-done"]')
            # repasar
            await click('nav.tabs [data-go="repasar"]')
            for i in range(4): await click('[data-act="flip"]'); await click('[data-act="grade"][data-g="2"]')
            await click('[data-act="flip"]'); await click('[data-act="grade"][data-g="0"]')
            print('repasar:', (await text())[:90])
            # lectura con hoja de palabra
            await click('nav.tabs [data-go="aprender"]'); await click('[data-go="lectura"][data-param="pl1-r1"]')
            await click('.reading .w >> nth=3'); print('palabra:', await text('.word-sheet'))
            await pg.screenshot(path=f'{SHOTS}/03_lectura_movil.png')
            await click('h1.page')  # tocar fuera cierra la hoja
            print('hoja cerrada:', await pg.locator('.word-sheet').count() == 0)
            await click('[data-act="tr-toggle"]'); await click('[data-act="reading-done"]')
            # ajustes: clave de API
            await click('[data-go="ajustes"]')
            await pg.fill('#f-key', 'sk-ant-prueba'); await pg.locator('#f-key').dispatch_event('change'); await pg.wait_for_timeout(150)
            await pg.fill('#f-ella', 'Ania'); await pg.locator('#f-ella').dispatch_event('change')
            await pg.fill('#f-familia', 'Ewa: su madre\nMarek: su padre'); await pg.locator('#f-familia').dispatch_event('change')
            await click('[data-act="ia-test"]', 500); print('prueba clave:', (await text('.settings'))[-200:].replace(' | ', ' '))
            # conversación
            await click('nav.tabs [data-go="hablar"]'); await click('[data-go="chat"]')
            await click('[data-act="chat-scene"][data-s="padres"]'); await click('[data-act="chat-start"]', 500)
            await pg.fill('#chatin', 'Mam imię Pablo'); await click('.composer button[type="submit"]', 500)
            await click('[data-act="chat-mic"]', 400)
            print('mic → caja:', await pg.input_value('#chatin'))
            await click('[data-act="chat-review"]', 500)
            await click('[data-act="chat-tr"]', 400)
            print('chat:', (await text())[:260])
            await click('[data-act="rev-card"]')
            await pg.screenshot(path=f'{SHOTS}/04_chat_movil.png')
            # sesión con ella
            await click('nav.tabs [data-go="hablar"]'); await click('[data-go="pareja"]')
            await pg.fill('#par-notas', 'Wesołych Świąt = ¡Feliz Navidad!\nLa ł suena como u'); await click('form[data-act="par-done"] button[type="submit"]', 300)
            print('tras sesión:', (await text())[:200])
            # audio para hablar (con escucha)
            await click('nav.tabs [data-go="hablar"]'); await click('[data-go="drill"]')
            await pg.evaluate("window.__stt = 'Dzień dobry'")
            await click('[data-act="drill-toggle"]', 1500); print('drill:', (await text('.drillcard')))
            await click('[data-act="drill-toggle"]')
            # grabar
            await click('nav.tabs [data-go="hablar"]'); await click('[data-go="grabar"]')
            await click('[data-act="rec-toggle"]', 700); await click('[data-act="rec-toggle"]', 600)
            print('grabación:', await pg.locator('audio').count())
            await pg.evaluate("window.__stt = 'dom'"); await click('[data-act="rec-check"]', 400)
            print('comprobar:', (await text())[150:330])
            # lectura generada y texto propio
            await click('nav.tabs [data-go="aprender"]'); await click('[data-act="gen-reading"]', 700)
            print('lectura IA:', (await text())[:120])
            await click('[data-course-set]') if False else None
            # latín
            await click('[data-act="courses"]'); await click('.course-row[data-course-set="la"]')
            await click('nav.tabs [data-go="aprender"]'); await click('[data-go="leccion"][data-param="la1-8"]')
            await pg.screenshot(path=f'{SHOTS}/05_latin_tipografia_movil.png')
            await click('[data-act="lesson-done"]')
            await click('[data-go="lectura"][data-param="la1-r5"]'); await click('.reading .w >> nth=4')
            print('latín antiguo:', await text('.word-sheet'))
            await click('[data-go="texto"]') if await pg.locator('[data-go="texto"]').count() else None
            await click('nav.tabs [data-go="aprender"]'); await click('[data-go="texto"]')
            await pg.fill('#txt', 'Varie de definitione termini ſentiunt Authores.'); await pg.check('#txt-antiguo'); await click('form[data-act="texto-send"] button[type="submit"]', 800)
            print('texto propio:', (await text())[:160])
            # navegación hacia atrás
            await pg.go_back(); await pg.wait_for_timeout(200); print('atrás →', pg.url.split('#')[1])
            # recarga: ¿se guardó todo?
            await pg.wait_for_timeout(600); await pg.reload(); await pg.wait_for_timeout(900)
            await click('nav.tabs [data-go="progreso"]'); print('progreso tras recargar:', (await text())[:260])
            # pantalla grande (Fold abierta)
            await pg.set_viewport_size({'width': 884, 'height': 1104}); await pg.wait_for_timeout(300)
            await pg.goto('http://localhost:8765/#hoy'); await pg.wait_for_timeout(500)
            await pg.screenshot(path=f'{SHOTS}/10_hoy_fold.png')
            await pg.goto('http://localhost:8765/#leccion/pl1-4'); await pg.wait_for_timeout(400)
            await pg.screenshot(path=f'{SHOTS}/11_leccion_fold.png')
            await pg.goto('http://localhost:8765/#lectura/la1-r5'); await pg.wait_for_timeout(400)
            await click('.reading .w >> nth=6'); await pg.screenshot(path=f'{SHOTS}/12_lectura_fold.png')
            await pg.goto('http://localhost:8765/#chat'); await pg.wait_for_timeout(300)
            await pg.screenshot(path=f'{SHOTS}/13_chat_fold.png')
            await pg.goto('http://localhost:8765/#ajustes'); await pg.wait_for_timeout(300)
            await pg.screenshot(path=f'{SHOTS}/14_ajustes_fold.png', full_page=True)
            # sin conexión
            sw = await pg.evaluate("navigator.serviceWorker.ready.then(r => !!r.active)")
            await ctx.set_offline(True); await pg.reload(); await pg.wait_for_timeout(800)
            print('service worker:', sw, '· sin conexión:', (await text())[:80])
            await ctx.set_offline(False)
            # llamadas a la API
            h = CALLS[0]['headers'] if CALLS else {}
            print('API llamadas:', len(CALLS), '· cabecera navegador:', h.get('anthropic-dangerous-direct-browser-access'), '· clave:', h.get('x-api-key'), '· modelo:', CALLS[1]['body'].get('model') if len(CALLS) > 1 else None, '· effort:', CALLS[1]['body'].get('output_config') if len(CALLS) > 1 else None)
            await b.close()
    finally:
        srv.terminate()
    errs = [e for e in errors if 'favicon' not in e]
    print('ERRORES:', len(errs))
    for e in errs[:20]: print('  ', e)
asyncio.run(main())
