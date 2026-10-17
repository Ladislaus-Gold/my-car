/* My CAR — кэш оболочки приложения: мгновенный запуск и работа офлайн */
var V = (new URL(self.location.href).searchParams.get('v')) || '0';
var CACHE = 'mycar-' + V;
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (k) { return Promise.all(k.filter(function (x) { return x !== CACHE; }).map(function (x) { return caches.delete(x); })); }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  var r = e.request, u = new URL(r.url);
  if (r.method !== 'GET') return;
  var sameOrigin = u.origin === self.location.origin, sdk = u.hostname === 'www.gstatic.com' && u.pathname.indexOf('/firebasejs/') === 0;
  if (!sameOrigin && !sdk) return;
  if (sameOrigin && u.pathname.slice(-12) === 'version.json') return; // всегда с сети
  e.respondWith(caches.open(CACHE).then(function (c) {
    var nav = r.mode === 'navigate';
    return c.match(r, { ignoreSearch: nav }).then(function (hit) {
      var net = fetch(r).then(function (res) { if (res && res.ok && (res.type === 'basic' || res.type === 'cors')) c.put(nav ? new Request(u.origin + u.pathname) : r, res.clone()); return res; }).catch(function () { return hit; });
      return hit || net;
    });
  }));
});
