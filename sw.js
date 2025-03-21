const CACHE_NAME = "formulaire-cache-v1";
const URLS_TO_CACHE = [
    "formulaire.html",
    "manifest.json",
    "icon-192.png",
    "icon-512.png"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(URLS_TO_CACHE);
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
