// Glossa · service worker (generado por tools/release.js: no lo edites a mano)
const VERSION = '2026.10.31-ff235ae3d7';
const CACHE = 'glossa-' + VERSION;
const ASSETS = [
 "./",
 "js/version.js",
 "index.html",
 "manifest.webmanifest",
 "css/app.css",
 "css/fonts.css",
 "js/ai.js",
 "js/app.js",
 "js/core.js",
 "js/speech.js",
 "js/store.js",
 "js/voz-pro.js",
 "courses/grc-1.js",
 "courses/grc-2.js",
 "courses/grc-3.js",
 "courses/grc-4.js",
 "courses/grc-5.js",
 "courses/grc-6.js",
 "courses/grc-7.js",
 "courses/grc-8.js",
 "courses/grc.js",
 "courses/index.js",
 "courses/it-1.js",
 "courses/it-2.js",
 "courses/it-3.js",
 "courses/it-4.js",
 "courses/it-5.js",
 "courses/it-6.js",
 "courses/it-7.js",
 "courses/it-8.js",
 "courses/it.js",
 "courses/la-2.js",
 "courses/la-3.js",
 "courses/la-4.js",
 "courses/la-5.js",
 "courses/la-6.js",
 "courses/la-7.js",
 "courses/la-8.js",
 "courses/la.js",
 "courses/pl-2.js",
 "courses/pl-3.js",
 "courses/pl-4.js",
 "courses/pl-5.js",
 "courses/pl-6.js",
 "courses/pl-7.js",
 "courses/pl-8.js",
 "courses/pl.js",
 "fonts/literata-greek-400-normal.woff2",
 "fonts/literata-greek-600-normal.woff2",
 "fonts/literata-greek-ext-400-normal.woff2",
 "fonts/literata-greek-ext-600-normal.woff2",
 "fonts/literata-latin-400-italic.woff2",
 "fonts/literata-latin-400-normal.woff2",
 "fonts/literata-latin-600-normal.woff2",
 "fonts/literata-latin-ext-400-italic.woff2",
 "fonts/literata-latin-ext-400-normal.woff2",
 "fonts/literata-latin-ext-600-normal.woff2",
 "fonts/source-sans-3-latin-400-normal.woff2",
 "fonts/source-sans-3-latin-600-normal.woff2",
 "fonts/source-sans-3-latin-700-normal.woff2",
 "fonts/source-sans-3-latin-ext-400-normal.woff2",
 "fonts/source-sans-3-latin-ext-600-normal.woff2",
 "fonts/source-sans-3-latin-ext-700-normal.woff2",
 "icons/apple-touch-icon.png",
 "icons/icon-192.png",
 "icons/icon-512.png",
 "icons/maskable-512.png"
];

self.addEventListener('install', e => {
  // cache: 'reload' para no guardar copias viejas de la caché HTTP del navegador
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS.map(u => new Request(u, { cache: 'reload' })))));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k.indexOf('glossa-') === 0 && k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('message', e => { if (e.data === 'skipWaiting') self.skipWaiting(); });
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (req.mode === 'navigate') {
    e.respondWith(caches.match(new URL('index.html', self.registration.scope).href).then(r => r || fetch(req)));
    return;
  }
  e.respondWith(caches.match(req, { ignoreSearch: true }).then(r => r || fetch(req)));
});
