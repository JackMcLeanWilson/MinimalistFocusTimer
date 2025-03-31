const CACHE_NAME = "pomodoro-cache-v1";
const ASSETS = [
    "/",
    "/index.html",
    "/styles.css",
    "/app.js",
    "/icons/icon-192x192.png",
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
