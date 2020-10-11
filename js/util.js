'use strict';

(() => {
  window.util = {
    getRandomElement(arr) {
      return arr[Math.round(Math.random() * Math.round(arr.length - 1))];
    },

    showElement(element, tumbler) {
      element.classList.remove(tumbler);

      document.addEventListener(`keydown`, window.dialog.onPopupEscPress);
    },

    hideElement(element, tumbler) {
      element.classList.add(tumbler);

      document.addEventListener(`keydown`, window.dialog.onPopupEscPress);
    },
  };
})();
