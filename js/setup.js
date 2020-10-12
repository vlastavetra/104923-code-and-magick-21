'use strict';
(() => {
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

  let renderWisardsList = (number) => {
    let wizard = [];

    for (let i = 0; i < number; i++) {
      wizard[i] = {};
      wizard[i].name = window.util.getRandomElement(WIZARD_FIRST_NAME) + ` ` + window.util.getRandomElement(WIZARD_LAST_NAME);
      wizard[i].coatColor = window.util.getRandomElement(WIZARD_COAT_COLOR);
      wizard[i].eyesColor = window.util.getRandomElement(WIZARD_EYES_COLOR);
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

  window.colorize(WIZARD_COAT, WIZARD_COAT_INPUT, WIZARD_COAT_COLOR);
  window.colorize(WIZARD_EYES, WIZARD_EYES_INPUT, WIZARD_EYES_COLOR);
  window.colorize(WIZARD_FIREBALL, WIZARD_FIREBALL_INPUT, WIZARD_FIREBALL_COLOR);

})();
