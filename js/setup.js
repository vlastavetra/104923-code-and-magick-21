'use strict';

const USER_DIALOG = document.querySelector(`.setup`);
const USER_SIMILAR = document.querySelector(`.setup-similar`);
const SIMILAR_LIST_ELEMENT = document.querySelector(`.setup-similar-list`);
const SIMILAR_WIZARD_TEMPLATE = document.querySelector(`#similar-wizard-template`)
    .content
    .querySelector(`.setup-similar-item`);
const WIZARD_FIRST_NAME = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_LAST_NAME = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const WIZARD_COAT_COLOR = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const WIZARD_EYES_COLOR = [`black`, `red`, `blue`, `yellow`, `green`];
const FRAGMENT = document.createDocumentFragment();

USER_DIALOG.classList.remove(`hidden`);

let wizardsList = [];

let createRandomElement = (arr) => {
  return arr[Math.round(Math.random() * Math.round(arr.length - 1))];
};

let createWisardsList = (number) => {
  for (let i = 0; i < number; i++) {
    wizardsList[i] = {};
    wizardsList[i].name = createRandomElement(WIZARD_FIRST_NAME) + ` ` + createRandomElement(WIZARD_LAST_NAME);
    wizardsList[i].coatColor = createRandomElement(WIZARD_COAT_COLOR);
    wizardsList[i].eyesColor = createRandomElement(WIZARD_EYES_COLOR);
  }
};

createWisardsList(4);

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

USER_SIMILAR.classList.remove(`hidden`);
