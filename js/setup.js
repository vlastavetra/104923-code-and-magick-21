'use strict';

const USER_DIALOG_CN = `.setup`;
const USER_DIALOG_OPEN = document.querySelector(`.setup-open`);
const USER_DIALOG_CLOSE = document.querySelector(`.setup-close`);
const USER_NAME_INPUT = document.querySelector(`.setup-user-name`);
const USER_SIMILAR_CN = `.setup-similar`;
const SIMILAR_LIST_ELEMENT = document.querySelector(`.setup-similar-list`);
const SIMILAR_WIZARD_TEMPLATE = document.querySelector(`#similar-wizard-template`)
    .content
    .querySelector(`.setup-similar-item`);
const FRAGMENT = document.createDocumentFragment();
const WIZARD_COAT = document.querySelector(`.setup-wizard .wizard-coat`);
const WIZARD_EYES = document.querySelector(`.setup-wizard .wizard-eyes`);
const WIZARD_FIREBALL = document.querySelector(`.setup-fireball-wrap`);
const WIZARD_COAT_INPUT = document.querySelector(`input[name="coat-color"]`);
const WIZARD_EYES_INPUT = document.querySelector(`input[name="eyes-color"]`);
const WIZARD_FIREBALL_INPUT = document.querySelector(`input[name="fireball-color"]`);

const WIZARD_FIRST_NAME = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_LAST_NAME = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const WIZARD_COAT_COLOR = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const WIZARD_EYES_COLOR = [`black`, `red`, `blue`, `yellow`, `green`];
const WIZARD_FIREBALL_COLOR = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];

const WIZARDS_NUMBER = 4;
const MIN_NAME_LENGTH = 2;
const MAX_NAME_LENGTH = 25;

let getRandomElement = (arr) => {
  return arr[Math.round(Math.random() * Math.round(arr.length - 1))];
};

let onPopupEscPress = (evt) => {
  if (evt.key === `Escape` && document.activeElement !== USER_NAME_INPUT) {
    evt.preventDefault();
    hideElement(document, USER_DIALOG_CN);
  }
};

let showElement = (searchLevel, elementClassName) => {
  searchLevel.querySelector(elementClassName).classList.remove(`hidden`);

  searchLevel.addEventListener(`keydown`, onPopupEscPress);
};

let hideElement = (searchLevel, elementClassName) => {
  searchLevel.querySelector(elementClassName).classList.add(`hidden`);

  searchLevel.addEventListener(`keydown`, onPopupEscPress);
};

USER_DIALOG_OPEN.addEventListener(`click`, () => {
  showElement(document, USER_DIALOG_CN);
  showElement(document, USER_SIMILAR_CN);
});

USER_DIALOG_OPEN.addEventListener(`keydown`, (evt) => {
  if (evt.key === `Enter`) {
    showElement(document, USER_DIALOG_CN);
  }
});

USER_DIALOG_CLOSE.addEventListener(`click`, () => {
  hideElement(document, USER_DIALOG_CN);
});

USER_DIALOG_CLOSE.addEventListener(`keydown`, (evt) => {
  if (evt.key === `Enter`) {
    hideElement(document, USER_DIALOG_CN);
  }
});

let renderWisardsList = (number) => {
  let wizard = [];

  for (let i = 0; i < number; i++) {
    wizard[i] = {};
    wizard[i].name = getRandomElement(WIZARD_FIRST_NAME) + ` ` + getRandomElement(WIZARD_LAST_NAME);
    wizard[i].coatColor = getRandomElement(WIZARD_COAT_COLOR);
    wizard[i].eyesColor = getRandomElement(WIZARD_EYES_COLOR);
  }

  return wizard;
};

let wizardsList = renderWisardsList(WIZARDS_NUMBER);

let renderWizard = (wizard) => {
  const WIZARD_ELEMENT = SIMILAR_WIZARD_TEMPLATE.cloneNode(true);

  WIZARD_ELEMENT.querySelector(`.setup-similar-label`).textContent = wizard.name;
  WIZARD_ELEMENT.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  WIZARD_ELEMENT.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;

  return WIZARD_ELEMENT;
};

for (let i = 0; i < wizardsList.length; i++) {
  FRAGMENT.appendChild(renderWizard(wizardsList[i]));
}

SIMILAR_LIST_ELEMENT.appendChild(FRAGMENT);

WIZARD_COAT.addEventListener(`click`, () => {
  WIZARD_COAT.style.fill = getRandomElement(WIZARD_COAT_COLOR);
  WIZARD_COAT_INPUT.value = WIZARD_COAT.style.fill;
});

WIZARD_EYES.addEventListener(`click`, () => {
  WIZARD_EYES.style.fill = getRandomElement(WIZARD_EYES_COLOR);
  WIZARD_EYES_INPUT.value = WIZARD_EYES.style.fill;
});

WIZARD_FIREBALL.addEventListener(`click`, () => {
  let newFireballColor = getRandomElement(WIZARD_FIREBALL_COLOR);

  WIZARD_FIREBALL.style.background = newFireballColor;
  WIZARD_FIREBALL_INPUT.value = newFireballColor;
});

USER_NAME_INPUT.addEventListener(`input`, () => {
  let valueLength = USER_NAME_INPUT.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    USER_NAME_INPUT.setCustomValidity(`Ещё ` + (MIN_NAME_LENGTH - valueLength) + ` симв.`);
  } else if (valueLength > MAX_NAME_LENGTH) {
    USER_NAME_INPUT.setCustomValidity(`Удалите лишние ` + (valueLength - MAX_NAME_LENGTH) + ` симв.`);
  } else {
    USER_NAME_INPUT.setCustomValidity(``);
  }

  USER_NAME_INPUT.reportValidity();
});
