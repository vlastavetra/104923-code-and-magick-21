'use strict';

const WIZARD_COAT = document.querySelector(`.setup-wizard .wizard-coat`);
const WIZARD_EYES = document.querySelector(`.setup-wizard .wizard-eyes`);
const WIZARD_FIREBALL = document.querySelector(`.setup-fireball-wrap`);
const WIZARD_COAT_INPUT = document.querySelector(`input[name="coat-color"]`);
const WIZARD_EYES_INPUT = document.querySelector(`input[name="eyes-color"]`);
const WIZARD_FIREBALL_INPUT = document.querySelector(`input[name="fireball-color"]`);

const WIZARD_COAT_COLOR = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const WIZARD_EYES_COLOR = [`black`, `red`, `blue`, `yellow`, `green`];
const WIZARD_FIREBALL_COLOR = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];

let coatColor = `rgb(101, 137, 164)`;
let eyesColor = `black`;
let fireballColor = `#ee4830`;

let wizards = [];

let getRank = (wizard) => {
  let rank = 0;

  if (wizard.colorCoat === coatColor) {
    rank += 3;
  }
  if (wizard.colorEyes === eyesColor) {
    rank += 2;
  }
  if (wizard.colorFireball === fireballColor) {
    rank += 1;
  }

  return rank;
};

let compareNames = (left, right) => {
  if (left > right) {
    return 1;
  } else if (left < right) {
    return -1;
  } else {
    return 0;
  }
};

const successHandler = (data) => {
  wizards = data;
  updateWizards();
};

const errorHandler = (errorMessage) => {
  window.util.createErrorMessage(errorMessage);
};

window.backend.load(successHandler, errorHandler);

let updateWizards = () => {
  window.render.renderList(wizards.sort((left, right) => {
    let rankDiff = getRank(right) - getRank(left);
    if (rankDiff === 0) {
      rankDiff = compareNames(left.name, right.name);
    }
    return rankDiff;
  }));
};

let updateWizardsWithDebounce = window.debounce(updateWizards);

window.colorize.setCoatChangeHandler((color) => {
  coatColor = color;
  updateWizardsWithDebounce();
});

window.colorize.setEyesChangeHandler((color) => {
  eyesColor = color;
  updateWizardsWithDebounce();
});

window.colorize.setFireballChangeHandler((color) => {
  fireballColor = color;
  updateWizardsWithDebounce();
});

window.colorize.colorizeElement(WIZARD_COAT, WIZARD_COAT_INPUT, WIZARD_COAT_COLOR);
window.colorize.colorizeElement(WIZARD_EYES, WIZARD_EYES_INPUT, WIZARD_EYES_COLOR);
window.colorize.colorizeElement(WIZARD_FIREBALL, WIZARD_FIREBALL_INPUT, WIZARD_FIREBALL_COLOR);
