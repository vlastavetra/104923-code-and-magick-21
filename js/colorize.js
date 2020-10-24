'use strict';

(() => {
  const WizardAttr = {
    COAT: document.querySelector(`.setup-wizard .wizard-coat`),
    EYES: document.querySelector(`.setup-wizard .wizard-eyes`),
    FIREBALL: document.querySelector(`.setup-fireball-wrap`),
  };

  let wizard = {
    onCoatChange: () => {},
    onEyesChange: () => {},
    onFireballChange: () => {}
  };

  let changeColor = (element, newColor) => {
    if (element === WizardAttr.COAT) {
      wizard.onCoatChange(newColor);
    }
    if (element === WizardAttr.EYES) {
      wizard.onEyesChange(newColor);
    }
    if (element === WizardAttr.FIREBALL) {
      wizard.onFireballChange(newColor);
    }
  };

  window.colorize = {
    colorizeElement(element, elementInput, colors) {
      element.addEventListener(`click`, () => {
        let newColor = window.util.getRandomElement(colors);

        changeColor(element, newColor);

        elementInput.value = newColor;

        if (element.tagName.toLowerCase() === `div`) {
          element.style.background = newColor;
        } else {
          element.style.fill = newColor;
        }
      });
    },

    setCoatChangeHandler(cb) {
      wizard.onCoatChange = cb;
    },

    setEyesChangeHandler(cb) {
      wizard.onEyesChange = cb;
    },

    setFireballChangeHandler(cb) {
      wizard.onFireballChange = cb;
    }
  };
})();
