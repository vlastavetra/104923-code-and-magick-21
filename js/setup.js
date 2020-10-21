'use strict';
(() => {
  const USER_SIMILAR_CN = document.querySelector(`.setup-similar`);
  const USER_DIALOG_TUMBLER = `hidden`;
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

  const WIZARD_COAT_COLOR = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
  const WIZARD_EYES_COLOR = [`black`, `red`, `blue`, `yellow`, `green`];
  const WIZARD_FIREBALL_COLOR = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];

  const WIZARDS_NUMBER = 4;

  let renderWizard = (wizard) => {
    const WIZARD_ELEMENT = SIMILAR_WIZARD_TEMPLATE.cloneNode(true);

    WIZARD_ELEMENT.querySelector(`.setup-similar-label`).textContent = wizard.name;
    WIZARD_ELEMENT.querySelector(`.wizard-coat`).style.fill = wizard.colorCoat;
    WIZARD_ELEMENT.querySelector(`.wizard-eyes`).style.fill = wizard.colorEyes;

    return WIZARD_ELEMENT;
  };

  const successHandler = (wizards) => {
    let wizardArr = window.util.getRandomArray(WIZARDS_NUMBER, wizards);

    if (wizardArr.length >= WIZARDS_NUMBER) {
      for (let i = 0; i < WIZARDS_NUMBER; i++) {
        FRAGMENT.appendChild(renderWizard(wizardArr[i]));
      }
    } else {
      for (let i = 0; i < wizardArr.length; i++) {
        FRAGMENT.appendChild(renderWizard(wizardArr[i]));
      }
    }

    SIMILAR_LIST_ELEMENT.appendChild(FRAGMENT);
    window.util.showElement(USER_SIMILAR_CN, USER_DIALOG_TUMBLER);
  };

  const errorHandler = (errorMessage) => {
    const node = document.createElement(`div`);

    node.style = `z-index: 100; margin: 0 auto; text-align: center; background-color: red;`;
    node.style.position = `absolute`;
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = `30px`;
    node.textContent = errorMessage;

    document.body.insertAdjacentElement(`afterbegin`, node);
  };

  window.backend.load(successHandler, errorHandler);

  window.colorize(WIZARD_COAT, WIZARD_COAT_INPUT, WIZARD_COAT_COLOR);
  window.colorize(WIZARD_EYES, WIZARD_EYES_INPUT, WIZARD_EYES_COLOR);
  window.colorize(WIZARD_FIREBALL, WIZARD_FIREBALL_INPUT, WIZARD_FIREBALL_COLOR);

})();
