const self = this;

const scriptLink = (self.serviceWorker.scriptURL || "").split("?");
const src = (new URLSearchParams(scriptLink[1] || "v=1")).get("v");
const CACHE_NAME = src;
const urlsToCache = [ "/", "index.html", "manifest.json", 'audio/beep.mp3', 'logo.png', '787.chunk.js', "main.css", "main.js"];

// Install SW
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');

                return cache.addAll(urlsToCache);
            })
    )
});

// Listen for requests
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(() => {
                return fetch(event.request)
                    .catch(() => caches.match('index.html'))
            })
    )
});

// Activate the SW
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                console.log(cacheName);
                if(!cacheWhitelist.includes(cacheName)) {
                    console.log("remove cacheName", cacheName);
                    return caches.delete(cacheName);
                }
            })
        ))

    )
});