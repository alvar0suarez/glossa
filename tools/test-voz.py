# Prueba de las voces premium con servicios simulados: python3 tools/test-voz.py
# Sirve el repositorio en un puerto libre y abre tools/voz-test.html (core + store + speech + voz-pro, sin la app).
# Las peticiones a Google, Azure, OpenAI y ElevenLabs no salen a la red: se responden aquí con un WAV corto.
# Comprueba: URL, cabeceras y cuerpo de cada servicio; reproducción y onend una sola vez; la caché (sin segunda
# petición); la vuelta a la voz del móvil con 401, 403, CORS y lentitud; parar, cola y relevo; textos largos en trozos;
# la descarga previa y el uso del mes; la tarjeta de Ajustes; y que las copias no lleven la clave.
import asyncio, base64, io, json, math, os, socket, struct, subprocess, sys, time, wave
from urllib.parse import urlparse, parse_qs
from playwright.async_api import async_playwright

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SHOTS = os.environ.get('GLOSSA_SHOTS', os.path.join(ROOT, '.shots'))
os.makedirs(SHOTS, exist_ok=True)


def wav(seconds, freq=440):
    rate, out = 16000, io.BytesIO()
    with wave.open(out, 'wb') as w:
        w.setnchannels(1); w.setsampwidth(2); w.setframerate(rate)
        w.writeframes(b''.join(struct.pack('<h', int(1500 * math.sin(2 * math.pi * freq * i / rate))) for i in range(int(rate * seconds))))
    return out.getvalue()


SHORT, LONG = wav(0.25), wav(2.5)
CORS = {'access-control-allow-origin': '*', 'access-control-allow-headers': '*', 'access-control-allow-methods': 'GET, POST, OPTIONS'}
CALLS = []
MODE = {}


def reset_mode():
    MODE.clear(); MODE.update({'status': 200, 'cors': True, 'delay': 0, 'audio': SHORT})


reset_mode()


def g_voices(lang):
    vs = [(f'{lang}-Chirp3-HD-{n}', g) for n, g in (('Kore', 'FEMALE'), ('Charon', 'MALE'), ('Aoede', 'FEMALE'))]
    vs += [(f'{lang}-Wavenet-F', 'FEMALE'), (f'{lang}-Standard-G', 'MALE'), (f'{lang}-Studio-B', 'MALE')]
    return {'voices': [{'name': n, 'languageCodes': [lang], 'ssmlGender': g, 'naturalSampleRateHertz': 24000} for n, g in vs]}


AZ_VOICES = [
    {'ShortName': 'pl-PL-MarekNeural', 'DisplayName': 'Marek', 'LocalName': 'Marek', 'Gender': 'Male', 'Locale': 'pl-PL', 'VoiceType': 'Neural'},
    {'ShortName': 'pl-PL-ZofiaNeural', 'DisplayName': 'Zofia', 'LocalName': 'Zofia', 'Gender': 'Female', 'Locale': 'pl-PL', 'VoiceType': 'Neural'},
    {'ShortName': 'it-IT-ElsaNeural', 'DisplayName': 'Elsa', 'LocalName': 'Elsa', 'Gender': 'Female', 'Locale': 'it-IT', 'VoiceType': 'Neural'},
    {'ShortName': 'es-ES-ElviraNeural', 'DisplayName': 'Elvira', 'LocalName': 'Elvira', 'Gender': 'Female', 'Locale': 'es-ES', 'VoiceType': 'Neural'},
    {'ShortName': 'es-ES-Ximena:DragonHDLatestNeural', 'DisplayName': 'Ximena', 'Gender': 'Female', 'Locale': 'es-ES', 'VoiceType': 'Neural'},
    {'ShortName': 'en-US-JennyNeural', 'DisplayName': 'Jenny', 'Gender': 'Female', 'Locale': 'en-US', 'VoiceType': 'Neural'},
]
EL_VOICES = {'voices': [
    {'voice_id': 'JBFqnCBsd6RMkjVDRZzb', 'name': 'George', 'category': 'premade', 'labels': {'accent': 'british'}},
    {'voice_id': 'PLvoice0000000000001', 'name': 'Ola', 'category': 'professional', 'labels': {'accent': 'polish'},
     'verified_languages': [{'language': 'pl', 'model_id': 'eleven_multilingual_v2'}]},
]}


async def provider(route, request):
    hdr = dict(CORS)
    if request.method == 'OPTIONS':
        await route.fulfill(status=204, headers=hdr); return
    if not MODE['cors']:
        # Playwright responde él mismo a las preflight y no aplica CORS a lo que se simula: se corta la petición,
        # que en la página se ve igual que un bloqueo por CORS (TypeError: Failed to fetch).
        CALLS.append({'url': request.url, 'method': request.method, 'headers': {}, 'body': request.post_data, 'abortada': True})
        await route.abort('failed'); return
    CALLS.append({'url': request.url, 'method': request.method, 'headers': await request.all_headers(), 'body': request.post_data})
    if MODE['delay']:
        await asyncio.sleep(MODE['delay'])
    if MODE['status'] != 200:
        await route.fulfill(status=MODE['status'], headers=dict(hdr, **{'content-type': 'application/json'}),
                            body=json.dumps({'error': {'code': MODE['status'], 'message': 'Clave rechazada (simulada).'}})); return
    u = urlparse(request.url)
    js = None
    if u.netloc == 'texttospeech.googleapis.com':
        js = g_voices(parse_qs(u.query).get('languageCode', [''])[0]) if u.path == '/v1/voices' else {'audioContent': base64.b64encode(MODE['audio']).decode()}
    elif u.path.endswith('/voices/list'):
        js = AZ_VOICES
    elif u.netloc == 'api.elevenlabs.io' and u.path == '/v1/voices':
        js = EL_VOICES
    if js is not None:
        await route.fulfill(status=200, headers=dict(hdr, **{'content-type': 'application/json'}), body=json.dumps(js))
    else:
        await route.fulfill(status=200, headers=dict(hdr, **{'content-type': 'audio/mpeg'}), body=MODE['audio'])


STUB = r"""
window.__spoken = []; window.__plays = []; window.__ended = 0;
if (window.speechSynthesis) {
  speechSynthesis.speak = u => { window.__spoken.push(u.text); setTimeout(() => u.onend && u.onend(), 30); };
  speechSynthesis.cancel = () => {};
}
const __play = HTMLMediaElement.prototype.play;
HTMLMediaElement.prototype.play = function () {
  window.__plays.push({ rate: this.playbackRate, t: performance.now() });
  this.addEventListener('ended', () => { window.__ended++; }, { once: true });
  return __play.call(this);
};
"""

FAILS = []
CHECKS = [0]


def check(cond, msg):
    CHECKS[0] += 1
    if not cond:
        FAILS.append(msg); print('FALLA', msg)


def free_port():
    s = socket.socket(); s.bind(('127.0.0.1', 0)); port = s.getsockname()[1]; s.close(); return port


async def main():
    port = free_port()
    srv = subprocess.Popen([sys.executable, '-m', 'http.server', str(port), '--bind', '127.0.0.1'], cwd=ROOT, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    for _ in range(50):
        try:
            socket.create_connection(('127.0.0.1', port), 0.1).close(); break
        except OSError:
            time.sleep(0.1)
    errors = []
    try:
        async with async_playwright() as p:
            browser = await p.chromium.launch(args=['--autoplay-policy=no-user-gesture-required'])
            ctx = await browser.new_context(viewport={'width': 412, 'height': 915}, device_scale_factor=2)
            await ctx.add_init_script(STUB)
            for pat in ('https://texttospeech.googleapis.com/**', 'https://*.tts.speech.microsoft.com/**', 'https://api.openai.com/**', 'https://api.elevenlabs.io/**'):
                await ctx.route(pat, provider)
            pg = await ctx.new_page()
            pg.on('pageerror', lambda e: errors.append(str(e)))
            pg.on('dialog', lambda d: asyncio.ensure_future(d.accept()))
            await pg.goto(f'http://127.0.0.1:{port}/tools/voz-test.html')
            await pg.wait_for_function('window.VozPro && window.Voice')

            async def js(expr, arg=None):
                return await pg.evaluate(expr, arg)

            async def cfg(prov, **kw):
                v = {'proveedor': prov, 'clave': 'KEY-' + prov, 'region': 'westeurope' if prov == 'azure' else '', 'voces': {}, 'velocidad': 0.95,
                     'usar': {'pl-PL': True, 'it-IT': True, 'es-ES': True}}
                v.update(kw)
                await js('v => { window.ajustes.vozpro = v; VozPro._reset(); }', v)

            async def say(text, tag='pl-PL', **o):
                return await js('([t, g, o]) => say(t, g, o)', [text, tag, o])

            async def counts():
                return await js('() => ({ plays: __plays.length, spoken: __spoken.length, ended: __ended })')

            # ---- 0. Sin configurar: la voz del móvil, como siempre ----
            check(await js("() => VozPro.enabledFor('pl-PL')") is False, 'sin configurar: desactivado')
            r = await say('Hola', 'es-ES')
            check(r['ends'] == 1 and (await js('() => __spoken.slice(-1)[0]')) == 'Hola' and not CALLS, 'sin configurar: voz del móvil')

            # ---- 1. Cada servicio: petición, reproducción, onend y caché ----
            async def provider_case(prov, text, expect):
                await cfg(prov)
                reset_mode()
                n0, c0 = len(CALLS), await counts()
                r = await say(text, 'pl-PL')
                c1 = await counts()
                check(r['ends'] == 1, f'{prov}: onend una vez ({r["ends"]})')
                check(len(CALLS) == n0 + 1, f'{prov}: una petición ({len(CALLS) - n0})')
                check(c1['plays'] == c0['plays'] + 1 and c1['ended'] == c0['ended'] + 1, f'{prov}: suena hasta el final')
                check(c1['spoken'] == c0['spoken'], f'{prov}: sin voz del móvil')
                if len(CALLS) > n0:
                    expect(CALLS[-1])
                r = await say(text, 'pl-PL')
                c2 = await counts()
                check(r['ends'] == 1 and len(CALLS) == n0 + 1 and c2['plays'] == c1['plays'] + 1, f'{prov}: segunda vez desde la caché')

            def exp_google(c):
                check(c['method'] == 'POST' and c['url'] == 'https://texttospeech.googleapis.com/v1/text:synthesize?key=KEY-google', 'google: URL ' + c['url'])
                check(c['headers'].get('content-type', '').startswith('application/json'), 'google: content-type')
                check(json.loads(c['body']) == {'input': {'text': 'Dzień dobry!'}, 'voice': {'languageCode': 'pl-PL', 'name': 'pl-PL-Chirp3-HD-Kore'},
                                                'audioConfig': {'audioEncoding': 'MP3', 'speakingRate': 0.95}}, 'google: cuerpo ' + str(c['body']))

            def exp_azure(c):
                h = c['headers']
                check(c['method'] == 'POST' and c['url'] == 'https://westeurope.tts.speech.microsoft.com/cognitiveservices/v1', 'azure: URL ' + c['url'])
                check(h.get('ocp-apim-subscription-key') == 'KEY-azure', 'azure: clave')
                check(h.get('content-type', '').startswith('application/ssml+xml'), 'azure: content-type')
                check(h.get('x-microsoft-outputformat') == 'audio-24khz-48kbitrate-mono-mp3', 'azure: formato')
                check(c['body'] == "<speak version='1.0' xml:lang='pl-PL'><voice name='pl-PL-ZofiaNeural'><prosody rate='-5%'>Tak &amp; nie &lt;ok&gt;</prosody></voice></speak>",
                      'azure: SSML ' + str(c['body']))

            def exp_openai(c):
                b = json.loads(c['body'])
                check(c['method'] == 'POST' and c['url'] == 'https://api.openai.com/v1/audio/speech', 'openai: URL')
                check(c['headers'].get('authorization') == 'Bearer KEY-openai', 'openai: clave')
                check(c['headers'].get('content-type', '').startswith('application/json'), 'openai: content-type')
                check(b.get('model') == 'gpt-4o-mini-tts' and b.get('input') == 'Dzień dobry!' and b.get('voice') == 'coral'
                      and b.get('response_format') == 'mp3' and b.get('speed') == 0.95, 'openai: cuerpo ' + c['body'])
                check('Polish' in b.get('instructions', '') and 'slightly slowly' in b.get('instructions', ''), 'openai: instrucciones')

            def exp_eleven(c):
                b = json.loads(c['body'])
                check(c['method'] == 'POST' and c['url'] == 'https://api.elevenlabs.io/v1/text-to-speech/JBFqnCBsd6RMkjVDRZzb?output_format=mp3_44100_64', 'elevenlabs: URL ' + c['url'])
                check(c['headers'].get('xi-api-key') == 'KEY-elevenlabs', 'elevenlabs: clave')
                check(b.get('text') == 'Dzień dobry!' and b.get('model_id') == 'eleven_multilingual_v2' and b.get('voice_settings', {}).get('speed') == 0.95, 'elevenlabs: cuerpo ' + c['body'])

            await provider_case('google', 'Dzień dobry!', exp_google)
            await provider_case('azure', 'Tak & nie <ok>', exp_azure)
            await provider_case('openai', 'Dzień dobry!', exp_openai)
            await provider_case('elevenlabs', 'Dzień dobry!', exp_eleven)

            # voz elegida, velocidad, español (latín y griego) e instrucciones de OpenAI
            await cfg('google', voces={'pl-PL': 'pl-PL-Chirp3-HD-Charon'}, velocidad=1.1)
            await say('Do widzenia.', 'pl-PL')
            b = json.loads(CALLS[-1]['body'])
            check(b['voice']['name'] == 'pl-PL-Chirp3-HD-Charon' and b['audioConfig']['speakingRate'] == 1.1, 'google: voz elegida y velocidad')
            await cfg('azure', velocidad=1.1)
            await say('Dziękuję.', 'pl-PL')
            check("<prosody rate='+10%'>" in CALLS[-1]['body'], 'azure: velocidad +10%')
            await cfg('openai')
            await say(await js("() => Core.greekToSpanish('γνῶθι σεαυτόν')"), 'es-ES')
            b = json.loads(CALLS[-1]['body'])
            check(b['input'] == 'gnózi seautón' and 'Spanish spelling' in b['instructions'] and 'Latin' in b['instructions'], 'openai: griego en grafía española')

            # ---- 2. Vuelta a la voz del móvil ----
            await cfg('google', clave='KEY-401'); reset_mode(); MODE['status'] = 401
            n0, c0 = len(CALLS), await counts()
            r = await say('Cześć', 'pl-PL')
            check(r['ends'] == 1 and (await js('() => __spoken.slice(-1)[0]')) == 'Cześć' and len(CALLS) == n0 + 1, '401: voz del móvil')
            r = await say('Na razie', 'pl-PL')
            check(r['ends'] == 1 and (await js('() => __spoken.slice(-1)[0]')) == 'Na razie' and len(CALLS) == n0 + 1, '401: no se vuelve a llamar')
            r = await say('Dzień dobry!', 'pl-PL')
            c1 = await counts()
            check(r['ends'] == 1 and c1['plays'] == c0['plays'] + 1 and c1['spoken'] == c0['spoken'] + 2, '401: lo guardado sigue sonando')
            await cfg('google', clave='KEY-403'); MODE['status'] = 403
            r = await say('Dziękuję bardzo', 'pl-PL')
            check(r['ends'] == 1 and (await js('() => __spoken.slice(-1)[0]')) == 'Dziękuję bardzo', '403: voz del móvil')
            await cfg('google', clave='KEY-cors'); reset_mode(); MODE['cors'] = False
            n0 = len(CALLS)
            r = await say('Proszę', 'pl-PL')
            check(r['ends'] == 1 and (await js('() => __spoken.slice(-1)[0]')) == 'Proszę' and len(CALLS) == n0 + 1, 'CORS: voz del móvil')
            await cfg('google', clave='KEY-slow'); reset_mode(); MODE['delay'] = 2.5
            await js('() => { VozPro._t.first = 700; }')
            r = await say('Przepraszam', 'pl-PL')
            check(r['ends'] == 1 and r['t'] < 2000 and (await js('() => __spoken.slice(-1)[0]')) == 'Przepraszam', f'lento: voz del móvil a tiempo ({r["t"]} ms)')
            await asyncio.sleep(2.6)
            reset_mode()
            n0, c0 = len(CALLS), await counts()
            r = await say('Przepraszam', 'pl-PL')
            c1 = await counts()
            check(r['ends'] == 1 and len(CALLS) == n0 and c1['plays'] == c0['plays'] + 1, 'lento: la respuesta tardía queda guardada')
            await js('() => { VozPro._t.first = 9000; }')
            # idioma desactivado y etiqueta sin servicio
            await cfg('google', usar={'pl-PL': True, 'it-IT': False, 'es-ES': True})
            n0 = len(CALLS)
            r = await say('Ciao', 'it-IT')
            check(r['ends'] == 1 and (await js('() => __spoken.slice(-1)[0]')) == 'Ciao' and len(CALLS) == n0, 'idioma desactivado: voz del móvil')
            r = await say('Hello', 'en-US')
            check(r['ends'] == 1 and (await js('() => __spoken.slice(-1)[0]')) == 'Hello' and len(CALLS) == n0, 'idioma sin servicio: voz del móvil')
            # «Más despacio»: el mismo audio guardado, más lento
            await cfg('google')
            n0 = len(CALLS)
            r = await say('Dzień dobry!', 'pl-PL', rate=0.6)
            rate = await js('() => __plays.slice(-1)[0].rate')
            check(r['ends'] == 1 and len(CALLS) == n0 and abs(rate - 0.6 / 0.9) < 0.01, f'más despacio: playbackRate {rate}')

            # ---- 3. Parar, cola y relevo ----
            await cfg('google'); reset_mode(); MODE['audio'] = LONG
            st = await js("""async () => {
              const r = { ends: 0 }, e0 = __ended;
              Voice.TTS.speak('Długi tekst do zatrzymania.', 'pl-PL', { onend: () => r.ends++ });
              await sleep(900); const playing = __plays.length; Voice.TTS.stop(); await sleep(400);
              return { ends: r.ends, playing, ended: __ended - e0 };
            }""")
            check(st['ends'] == 1 and st['ended'] == 0, f'parar: onend una vez sin llegar al final {st}')
            await cfg('google', usar={'pl-PL': True, 'it-IT': False, 'es-ES': True})
            q = await js("""async () => {
              const log = [];
              Voice.TTS.speak('Pierwsze zdanie.', 'pl-PL', { onend: () => log.push('A') });
              Voice.TTS.speak('Ciao a tutti', 'it-IT', { queue: true, onend: () => log.push('B') });
              await sleep(600); const early = __spoken.slice(-1)[0], mid = log.slice();
              await sleep(3200); return { log, mid, early, last: __spoken.slice(-1)[0] };
            }""")
            check(q['mid'] == [] and q['early'] != 'Ciao a tutti' and q['log'] == ['A', 'B'] and q['last'] == 'Ciao a tutti', f'cola: la voz del móvil espera a la premium {q}')
            q = await js("""async () => {
              const log = [];
              Voice.TTS.speak('Pierwsze zdanie.', 'pl-PL', { onend: () => log.push('A') });
              await sleep(500);
              Voice.TTS.speak('Drugie zdanie.', 'pl-PL', { onend: () => log.push('B') });
              await sleep(200); const mid = log.slice();
              await sleep(3300); return { mid, log };
            }""")
            check(q['mid'] == ['A'] and q['log'] == ['A', 'B'], f'relevo: corta y sigue {q}')

            # ---- 4. Textos largos en trozos ----
            await cfg('google'); reset_mode()
            frases = ' '.join(f'To jest zdanie numer {i}, które ma kilka słów.' for i in range(1, 26))
            n0, c0 = len(CALLS), await counts()
            r = await say(frases, 'pl-PL')
            trozos = [json.loads(c['body'])['input']['text'] for c in CALLS[n0:]]
            c1 = await counts()
            check(r['ends'] == 1 and len(trozos) >= 3 and all(len(t) <= 400 for t in trozos), f'largo: {len(trozos)} trozos de ≤ 400')
            check(' '.join(trozos) == frases and c1['plays'] - c0['plays'] == len(trozos), 'largo: nada se pierde y suena todo')
            larga = 'Sed ' + ', '.join('quod est ens in quantum ens consideratum' for _ in range(12)) + '.'
            partes = await js('t => VozPro._trocea(VozPro.normText(t))', larga)
            check(all(len(x) <= 250 for x in partes) and ' '.join(partes) == larga, 'frase larga partida por las comas')

            # ---- 5. Descarga previa, uso del mes y sin conexión ----
            await cfg('google'); reset_mode()
            u0 = await js('() => VozPro.usage().chars')
            n0 = len(CALLS)
            items = [{'text': 'Jeden', 'tag': 'pl-PL'}, {'text': 'Dwa', 'tag': 'pl-PL'}, {'text': 'Jeden', 'tag': 'pl-PL'}, {'text': 'Uno', 'tag': 'it-IT'},
                     {'text': 'Hello', 'tag': 'en-US'}, {'text': '', 'tag': 'pl-PL'}]
            pr = await js('async items => { const prog = []; const r = await VozPro.prefetch(items, p => { prog.push(p.hechos); }); return { r, prog }; }', items)
            check(pr['r']['total'] == 3 and pr['r']['nuevos'] == 3 and len(CALLS) == n0 + 3 and pr['prog'][-1] == 3, f'descarga: {pr}')
            uso = await js('() => VozPro.usage()')
            check(uso['chars'] == u0 + 11 and len(uso['mes']) == 7, f'uso del mes: {uso}')
            pr = await js('async items => (await VozPro.prefetch(items)).guardados', items)
            check(pr == 3 and len(CALLS) == n0 + 3, 'descarga: lo guardado no se pide otra vez')
            pr = await js("async () => VozPro.prefetch([{ text: 'Trzy', tag: 'pl-PL' }, { text: 'Cztery', tag: 'pl-PL' }], () => false)")
            check(pr['cancelado'] and len(CALLS) == n0 + 3, 'descarga: se puede cancelar')
            await ctx.set_offline(True)
            c0 = await counts()
            r1 = await say('Jeden', 'pl-PL')
            r2 = await say('Pięć', 'pl-PL')
            c1 = await counts()
            check(r1['ends'] == 1 and r2['ends'] == 1 and c1['plays'] == c0['plays'] + 1 and c1['spoken'] == c0['spoken'] + 1 and len(CALLS) == n0 + 3,
                  'sin conexión: lo guardado suena, lo nuevo con la voz del móvil')
            await ctx.set_offline(False)

            # ---- 6. Tarjeta de Ajustes ----
            await js('() => { window.ajustes = {}; window.saves = 0; VozPro._reset(); render(); }')
            card = '#vozpro'
            vp = await js('() => window.ajustes.vozpro')
            check(vp and vp['proveedor'] == '' and vp['velocidad'] == 0.95 and vp['usar'].get('pl-PL') is True, f'ajustes: crea vozpro {vp}')
            check(await pg.locator(f'{card} select[data-vp=proveedor] option').count() == 5 and await pg.locator(f'{card} input[data-vp=clave]').count() == 0, 'ajustes: sin servicio')
            await pg.select_option(f'{card} select[data-vp=proveedor]', 'google')
            check(await js('() => window.ajustes.vozpro.proveedor') == 'google' and await js('() => window.saves') >= 1, 'ajustes: guarda el servicio')
            check('console.cloud.google.com' in await pg.locator(f'{card} .hint').first.inner_text(), 'ajustes: ayuda de Google')
            check(await pg.locator(f'{card} [data-vp-act=comprobar]').is_disabled(), 'ajustes: Comprobar sin clave desactivado')
            n0 = len(CALLS)
            await pg.fill(f'{card} input[data-vp=clave]', '  AIza-test ')
            check(not await pg.locator(f'{card} [data-vp-act=comprobar]').is_disabled(), 'ajustes: Comprobar se activa al escribir')
            await pg.press(f'{card} input[data-vp=clave]', 'Tab')
            await pg.wait_for_function("() => /Funciona/.test(document.querySelector('[data-vp-estado]').textContent)", timeout=5000)
            urls = [c['url'] for c in CALLS[n0:]]
            check(await js('() => window.ajustes.vozpro.clave') == 'AIza-test', 'ajustes: clave guardada sin espacios')
            check(sorted(urls) == sorted(f'https://texttospeech.googleapis.com/v1/voices?languageCode={t}&key=AIza-test' for t in ('pl-PL', 'it-IT', 'es-ES')), f'ajustes: listas de voces {urls}')
            opts = await js("() => Array.from(document.querySelectorAll('#vozpro select[data-tag=\"pl-PL\"] option')).map(o => [o.value, o.textContent])")
            vals = [o[0] for o in opts]
            check(vals[0] == '' and opts[0][1].startswith('Automática: Kore') and 'pl-PL-Chirp3-HD-Charon' in vals and 'pl-PL-Wavenet-F' in vals
                  and 'pl-PL-Studio-B' not in vals and vals.index('pl-PL-Chirp3-HD-Aoede') < vals.index('pl-PL-Wavenet-F'), f'ajustes: voces de Google {opts}')
            await pg.select_option(f'{card} select[data-tag="pl-PL"]', 'pl-PL-Chirp3-HD-Charon')
            await pg.uncheck(f'{card} input[data-vp=usar][data-tag="it-IT"]')
            await js("() => { const s = document.querySelector('#vozpro input[data-vp=velocidad]'); s.value = '1.1'; s.dispatchEvent(new Event('input', { bubbles: true })); s.dispatchEvent(new Event('change', { bubbles: true })); }")
            vp = await js('() => window.ajustes.vozpro')
            check(vp['voces'].get('pl-PL') == 'pl-PL-Chirp3-HD-Charon' and vp['usar'].get('it-IT') is False and vp['velocidad'] == 1.1, f'ajustes: voz, idioma y velocidad {vp}')
            check(await pg.locator(f'{card} [data-vp-vel]').inner_text() == '1.1', 'ajustes: etiqueta de velocidad')
            n0 = len(CALLS)
            await pg.click(f'{card} [data-vp-act=probar][data-tag="pl-PL"]')
            await pg.wait_for_function("() => document.querySelector('[data-vp-msg=\"pl-PL\"]').textContent === ''", timeout=5000)
            b = json.loads(CALLS[-1]['body']) if len(CALLS) > n0 else {}
            check(b.get('voice', {}).get('name') == 'pl-PL-Chirp3-HD-Charon' and b.get('audioConfig', {}).get('speakingRate') == 1.1, 'ajustes: Probar usa la voz elegida')
            await pg.click(f'{card} [data-vp-act=probar][data-tag="it-IT"]')
            await pg.wait_for_function("() => document.querySelector('[data-vp-msg=\"it-IT\"]').textContent === ''", timeout=5000)
            check(json.loads(CALLS[-1]['body'])['voice']['languageCode'] == 'it-IT', 'ajustes: Probar suena aunque el idioma esté desactivado')
            await pg.click(f'{card} [data-vp-act=probar][data-tag="es-ES"]')
            await pg.wait_for_function("() => document.querySelector('[data-vp-msg=\"es-ES\"]').textContent === ''", timeout=5000)
            check(json.loads(CALLS[-1]['body'])['input']['text'] == 'kóguito, érgo sum. gnózi seautón.', 'ajustes: muestra de latín y griego')
            uso = await pg.locator(f'{card} [data-vp-uso]').inner_text()
            check('Este mes con Google Cloud' in uso and 'de 1.000.000 gratis' in uso, 'ajustes: uso del mes ' + uso)
            check('Guardados:' in await pg.locator(f'{card} [data-vp-cache]').inner_text(), 'ajustes: audio guardado')
            for sel in ('.field', '.btn.small', '.hint', '.muted.small', '.row-btns', '.check'):
                check(await pg.locator(f'{card} {sel}').count() > 0, 'ajustes: clase ' + sel)
            await pg.screenshot(path=os.path.join(SHOTS, 'voz_ajustes_google.png'), full_page=True)
            # error visible
            MODE['status'] = 403
            await pg.click(f'{card} [data-vp-act=comprobar]')
            await pg.wait_for_function("() => /No funciona/.test(document.querySelector('[data-vp-estado]').textContent)", timeout=5000)
            check('Clave rechazada (simulada)' in await pg.locator(f'{card} [data-vp-estado]').inner_text(), 'ajustes: se ve el error del servicio')
            reset_mode()
            # borrar el audio guardado
            await pg.click(f'{card} [data-vp-act=borrar]')
            await pg.wait_for_function("() => /Aún no hay audio/.test(document.querySelector('[data-vp-cache]').textContent)", timeout=5000)
            left = await js("async () => { const c = await caches.open('vozpro-audio-1'); return (await c.keys()).length; }")
            check(left == 0 and (await js('() => VozPro.cacheInfo().n')) == 0, 'ajustes: borrar audio guardado')
            # Azure: la clave de Google no viaja a otro servicio
            await pg.select_option(f'{card} select[data-vp=proveedor]', 'azure')
            vp = await js('() => window.ajustes.vozpro')
            check(vp['proveedor'] == 'azure' and vp['clave'] == '' and vp['voces'] == {}, f'ajustes: al cambiar de servicio se borra la clave {vp}')
            check(await pg.locator(f'{card} input[data-vp=region]').count() == 1, 'ajustes: Azure pide región')
            n0 = len(CALLS)
            await pg.fill(f'{card} input[data-vp=clave]', 'az-key')
            await pg.fill(f'{card} input[data-vp=region]', ' West Europe ')
            await pg.press(f'{card} input[data-vp=region]', 'Tab')
            await pg.wait_for_function("() => /Funciona/.test(document.querySelector('[data-vp-estado]').textContent)", timeout=5000)
            lists = [c for c in CALLS[n0:] if c['url'].endswith('/voices/list')]
            check(lists and lists[-1]['url'] == 'https://westeurope.tts.speech.microsoft.com/cognitiveservices/voices/list'
                  and lists[-1]['headers'].get('ocp-apim-subscription-key') == 'az-key', 'ajustes: lista de voces de Azure')
            vals = await js("() => Array.from(document.querySelectorAll('#vozpro select[data-tag=\"pl-PL\"] option')).map(o => o.value)")
            check(vals[:3] == ['', 'pl-PL-ZofiaNeural', 'pl-PL-MarekNeural'], f'ajustes: voces de Azure {vals}')
            vals = await js("() => Array.from(document.querySelectorAll('#vozpro select[data-tag=\"es-ES\"] option')).map(o => o.value)")
            check('es-ES-Ximena:DragonHDLatestNeural' not in vals and 'es-ES-ElviraNeural' in vals, 'ajustes: Azure sin voces HD')
            await pg.screenshot(path=os.path.join(SHOTS, 'voz_ajustes_azure.png'), full_page=True)
            # OpenAI: voces fijas, sin «Comprobar»
            await pg.select_option(f'{card} select[data-vp=proveedor]', 'openai')
            vals = await js("() => Array.from(document.querySelectorAll('#vozpro select[data-tag=\"pl-PL\"] option')).map(o => o.value)")
            check(await pg.locator(f'{card} [data-vp-act=comprobar]').count() == 0 and 'coral' in vals and 'marin' in vals, 'ajustes: OpenAI con voces fijas')
            check('6 de enero de 2027' in await pg.locator(f'{card} .hint').first.inner_text(), 'ajustes: aviso de retirada de OpenAI')
            # ElevenLabs: las voces nativas primero
            await pg.select_option(f'{card} select[data-vp=proveedor]', 'elevenlabs')
            await pg.fill(f'{card} input[data-vp=clave]', 'el-key')
            await pg.press(f'{card} input[data-vp=clave]', 'Tab')
            await pg.wait_for_function("() => /Funciona/.test(document.querySelector('[data-vp-estado]').textContent)", timeout=5000)
            opts = await js("() => Array.from(document.querySelectorAll('#vozpro select[data-tag=\"pl-PL\"] option')).map(o => [o.value, o.textContent])")
            check(opts[1][0] == 'PLvoice0000000000001' and 'nativa' in opts[1][1] and opts[0][1] == 'Automática: George · british', f'ajustes: voces de ElevenLabs {opts}')
            check('más cara' in await pg.locator(f'{card} select[data-vp=proveedor]').inner_text(), 'ajustes: ElevenLabs marcada como la más cara')
            # volver a pintar no duplica los eventos
            n0 = await js('() => window.saves')
            await js('() => render()')
            await pg.check(f'{card} input[data-vp=usar][data-tag="es-ES"]')
            await pg.uncheck(f'{card} input[data-vp=usar][data-tag="es-ES"]')
            check(await js('() => window.saves') == n0 + 1, 'ajustes: un solo guardado por cambio')

            # ---- 7. Copias de seguridad ----
            st = await js("""() => {
              Store.def = k => (k === 'perfil' ? { ajustes: { ia: { key: '' } } } : {});
              Store.data = { perfil: { ajustes: { ia: { key: 'sk-ant-x' }, vozpro: { proveedor: 'google', clave: 'AIza-SECRET', claveDe: 'google', region: '', voces: {}, velocidad: 0.95, usar: {} } } } };
              const ex = Store.exportData(), copy = () => JSON.parse(JSON.stringify(ex)), vp = () => Store.data.perfil.ajustes.vozpro, out = {};
              out.exported = ex.data.perfil.ajustes.vozpro.clave; out.ia = ex.data.perfil.ajustes.ia.key; out.original = vp().clave;
              Store.importData(copy()); out.same = vp().clave;
              const other = copy(); other.data.perfil.ajustes.vozpro = { proveedor: 'azure', clave: '', region: 'westeurope', voces: {}, velocidad: 1, usar: {} };
              Store.importData(other); out.other = vp().proveedor + ' ' + vp().clave;
              const old = copy(); delete old.data.perfil.ajustes.vozpro;
              Store.importData(old); out.old = vp().proveedor + ' ' + vp().clave;
              const off = copy(); off.data.perfil.ajustes.vozpro.proveedor = ''; off.data.perfil.ajustes.vozpro.velocidad = 1.1;
              Store.importData(off); out.off = vp().proveedor + ' ' + vp().clave + ' ' + vp().velocidad;
              clearTimeout(Store.timer); Store.dirty.clear();
              return out;
            }""")
            check(st['exported'] == '' and st['ia'] == '' and st['original'] == 'AIza-SECRET', f'copia: sin claves {st}')
            check(st['same'] == 'AIza-SECRET' and st['other'] == 'google AIza-SECRET' and st['old'] == 'google AIza-SECRET' and st['off'] == 'google AIza-SECRET 1.1',
                  f'copia: restaurar conserva la clave de este móvil {st}')
            await browser.close()
    finally:
        srv.terminate()
    for e in errors:
        FAILS.append('error en la página: ' + e); print('FALLA error en la página:', e)
    print(f'voz: {len(FAILS)} FALLOS de {CHECKS[0]}' if FAILS else f'voz: todo bien ({CHECKS[0]} comprobaciones)')
    sys.exit(1 if FAILS else 0)


asyncio.run(main())
