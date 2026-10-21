// Service worker: guarda la página del juego para abrirla sin señal (trabajo de campo, app instalada).
// No se empaqueta en el HTML: publicar.mjs lo copia junto a index.html. Red primero (así siempre llega la versión
// nueva) y, sin red, la copia guardada. La caché va por ruta: la beta y el sitio oficial comparten dominio.
const CACHE = 'cuadrilla-segura:' + new URL(self.registration.scope).pathname;

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(['./', 'manifest.webmanifest', 'icono-192.png'])));
});
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));

self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET' || new URL(r.url).origin !== location.origin) return;   // el servidor de la sala va directo
  e.respondWith(
    fetch(r)
      .then(res => { if (res.ok) { const copia = res.clone(); caches.open(CACHE).then(c => c.put(r, copia)); } return res; })
      // sin red: la misma página aunque traiga ?sala=… u otros parámetros
      .catch(() => caches.match(r, { ignoreSearch: true }).then(m => m || caches.match('./'))),
  );
});
