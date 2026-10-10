const CACHE = 'kuiz-sains-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './KEDAH K1 2026/rajah1.png',
  './KEDAH K1 2026/rajah2.png',
  './KEDAH K1 2026/rajah3.png',
  './KEDAH K1 2026/rajah4.png',
  './KEDAH K1 2026/rajah5.png',
  './KEDAH K1 2026/rajah6.png',
  './KEDAH K1 2026/rajah7.png',
  './KEDAH K1 2026/rajah8.png',
  './KEDAH K1 2026/rajah9.png',
  './KEDAH K1 2026/rajah10.png',
  './KEDAH K1 2026/rajah11.png',
  './KEDAH K1 2026/rajah12.png',
  './KEDAH K1 2026/rajah13.png',
  './KEDAH K1 2026/rajah14.png',
  './KEDAH K1 2026/rajah15.png',
  './KEDAH K1 2026/rajah16.png',
  './KEDAH K1 2026/rajah17.png',
  './KEDAH K1 2026/rajah18.png',
  './KEDAH K1 2026/rajah19.png',
  './KEDAH K1 2026/rajah20.png',
  './KEDAH K1 2026/rajah21.png',
  './KEDAH K1 2026/rajah22.png',
  './KEDAH K1 2026/rajah23.png',
  './KEDAH K1 2026/rajah24.png',
  './KEDAH K1 2026/rajah25.png',
  './KEDAH K1 2026/rajah26.png',
  './KEDAH K1 2026/lensA.png',
  './KEDAH K1 2026/lensB.png',
  './KEDAH K1 2026/lensC.png',
  './KEDAH K1 2026/lensD.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS).catch(()=>{})));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});