'use strict';

(() => {
  window.colorize = (element, elementInput, colors) => {
    element.addEventListener(`click`, function () {
      let newColor = window.util.getRandomElement(colors);

      elementInput.value = newColor;

      if (element.tagName.toLowerCase() === `div`) {
        element.style.background = newColor;
      } else {
        element.style.fill = newColor;
      }
    });
  };
})();
