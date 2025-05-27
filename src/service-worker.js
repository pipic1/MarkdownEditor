self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('markdown-editor-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/favicon.ico',
        '/manifest.json',
        '/globals.css',
        '/styles/_variables.scss',
        '/styles/_keyframe-animations.scss'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
