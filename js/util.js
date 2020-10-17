'use strict';

(() => {
  window.util = {
    getRandomNumber(num) {
      return (Math.round(Math.random() * num));
    },

    getRandomElement(arr) {
      return arr[Math.round(Math.random() * Math.round(arr.length - 1))];
    },

    getRandomArray(arr) {
      let newArray = [];

      newArray = arr.slice(window.util.getRandomNumber(arr.length - 1));

      return newArray;
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
