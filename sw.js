// Glossa · service worker (generado por tools/release.js: no lo edites a mano)
const VERSION = '2026.10.31-b2e527bbc0';
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
 "courses/index.js",
 "courses/la.js",
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
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
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
