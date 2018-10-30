alert("hi");

// var CACHE_NAME = 'my-site-cache-v1';
// var urlsToCache = [
//   '/',
//   '/home.js',
//   '/img/cache.jpg'
// ];


// self.addEventListener('install', function (event) {
//   event.waitUntil(
//     caches.open(CACHE_NAME)
//       .then(function (cache) {
//         console.log('Opened cache');
//         return cache.addAll(urlsToCache);
//       })
//   );
// });

//Only cache
// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     caches.match(event.request)
//       .then(function(response) {
//         // Cache hit - return response
//         if (response) {
//           console.log('cache hit');
//           return response;
//         }
//         return fetch(event.request);
//       }
//     )
//   );
// });

/////////////////
//cache and update
// self.addEventListener('fetch', function (event) {
//   event.respondWith(
//     caches.match(event.request)
//       .then(function (response) {
//         // Cache hit - return response
//         if (response) {
//           console.log('cache hit');
//           return response;
//         }
//         return fetch(event.request);
//       })
//   );

//   event.waitUntil(
//     caches.match(event.request)
//       .then(function (response) {
//         // Cache hit - update response
//         if (response) {
//           console.log('cache hit for update');
//           const request = event.request.clone();
//           update(request);
//         }
//       })
//   );
// });

// function update (request) {
//   caches.open(CACHE_NAME).then(function (cache) {
//     fetch(request).then(function (response) {
//       cache.put(request, response);
//     });
//   });
// }

//////////////

/// cache  update with message ////
// self.addEventListener('fetch', function (event) {
//   event.respondWith(
//     caches.match(event.request)
//       .then(function (response) {
//         // Cache hit - return response
//         if (response) {
//           console.log('cache hit');
//           return response;
//         }
//         return fetch(event.request);
//       }
//       )
//   );

//   event.waitUntil(
//     caches.match(event.request)
//       .then(function (response) {
//         // Cache hit - update response
//         if (response) {
//           console.log('cache hit for update');
//           const request = event.request.clone();
//           update(request,response.headers.get('ETag'));
//         }
//       })
//   );
// });

// function update (request, tag) {
//   caches.open(CACHE_NAME).then(function (cache) {
//     fetch(request).then(function (response) {
//       cache.put(request, response);
//       if(tag !== response.headers.get('ETag')){
//         refresh(response.url);
//       }
//     });
//   });
// }


// function refresh(url) {
//   return self.clients.matchAll().then(function (clients) {
//     clients.forEach(function (client) {
//       var message = {
//         type: 'refresh',
//         url: url
//       };
//       client.postMessage(JSON.stringify(message));
//     });
//   });
// }

//////////////


//// Take control ////

// self.addEventListener('install', function (event) {
//   event.waitUntil(
//     caches.open(CACHE_NAME)
//       .then(function (cache) {
//         console.log('Opened cache');
//         return cache.addAll(urlsToCache);
//       }).then(function() {
//         return self.skipWaiting();
//       })
//   );
// });


// self.addEventListener('activate', function (event) {
//   event.waitUntil(
//     caches.keys().then(function(cacheNames) {
//       return Promise.all(
//         cacheNames.map(function(cacheName) {
//           if (cacheName !== CACHE_NAME) {
//             console.log('[ServiceWorker] Deleting old cache:', cacheName);
//             return caches.delete(cacheName);
//           }
//         })
//       );
//     }).then(function() {
//       console.log('[ServiceWorker] Claiming clients for version', CACHE_NAME);
//       return self.clients.claim();
//     })
//   );
// });

// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     caches.match(event.request)
//       .then(function(response) {
//         // Cache hit - return response
//         if (response) {
//           console.log('cache hitt');
//           return response;
//         }
//         return fetch(event.request);
//       }
//     )
//   );
// });