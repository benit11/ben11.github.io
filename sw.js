self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('first-app')
        .then(function(cache) {
          cache.addAll([
            '/',
            'favicon.ico',
            '/index.html',
            '/src/css/app.css',
            '/src/js/app.js',
            '/src/images/icons/icon-48x48.png',
            '/src/images/icons/icon-96x96.png',
            '/src/images/icons/icon-144x144.png',
            '/src/images/icons/icon-192x192.png',
            '/src/images/icons/icon-384x384.png',
            '/src/images/icons/icon-512x512.png',
          
          ])
        })
    );
    return self.clients.claim();
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(res) {
          return res;
        })
    );
  });
    