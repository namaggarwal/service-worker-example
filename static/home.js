if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}



if ('serviceWorker' in navigator) {
  var CACHE = 'cache-update-and-refresh';

  navigator.serviceWorker.onmessage = function (evt) {
    var message = JSON.parse(evt.data);

    var isRefresh = message.type === 'refresh';

    if (isRefresh ) {
      alert('Data Changed!!! Please refresh the page');
    }
  };
}
