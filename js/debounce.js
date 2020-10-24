'use strict';
(() => {
  const DEBOUNCE_INTERVAL = 500;

  window.debounce = function (cb) {
    const lastTimeout = null;

    return (...parameters) => {
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(() => {
        cb(...parameters);
      }, DEBOUNCE_INTERVAL);
    };
  };
})();
