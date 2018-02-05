(function() {
  'use strict';

  var isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
      window.location.hostname === '[::1]' ||
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      )
  );

  if (
    'serviceWorker' in navigator &&
    (window.location.protocol === 'https:' || isLocalhost)
  ) {
    navigator.serviceWorker
      .register('/static/scripts/service-worker.js')
      .then(function(registration) {
        registration.onupdatefound = function() {
          if (navigator.serviceWorker.controller) {
            var worker = registration.installing;

            worker.onstatechange = function() {
              switch (worker.state) {
                case 'installed':
                  break;
                case 'redundant':
                  throw new Error(
                    'The installing ' + 'service worker became redundant.'
                  );
                default:
              }
            };
          }
        };
      })
      .catch(function(e) {
        console.error('Error during service worker registration:', e);
      });
  }
})();
