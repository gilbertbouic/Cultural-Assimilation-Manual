const CACHE_NAME = 'cultural-assimilation-manual-cache-v1';
const urlsToCache = [
  '/index.html',
  '/styles.css',
  '/interactive-styles.css',
  '/app.js',
  '/data.js',
  '/scenarios.js',
  '/interactive.js',
  '/navigation.js',
  '/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache).catch(error => {
          console.error('Failed to cache:', error);
        });
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
