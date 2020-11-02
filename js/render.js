'use strict';

(() => {
  const SIMILAR_WIZARD_TEMPLATE = document.querySelector(`#similar-wizard-template`)
    .content
    .querySelector(`.setup-similar-item`);
  const FRAGMENT = document.createDocumentFragment();
  const USER_SIMILAR_CN = document.querySelector(`.setup-similar`);
  const USER_DIALOG_TUMBLER = `hidden`;
  const SIMILAR_LIST_ELEMENT = document.querySelector(`.setup-similar-list`);
  const MAX_SIMILAR_WIZARD_COUNT = 4;

  window.render = {
    renderWizard(wizard) {
      const WIZARD_ELEMENT = SIMILAR_WIZARD_TEMPLATE.cloneNode(true);

      WIZARD_ELEMENT.querySelector(`.setup-similar-label`).textContent = wizard.name;
      WIZARD_ELEMENT.querySelector(`.wizard-coat`).style.fill = wizard.colorCoat;
      WIZARD_ELEMENT.querySelector(`.wizard-eyes`).style.fill = wizard.colorEyes;

      return WIZARD_ELEMENT;
    },

    renderList(wizards) {
      let takeNumber = wizards.length > MAX_SIMILAR_WIZARD_COUNT
        ? MAX_SIMILAR_WIZARD_COUNT
        : wizards.length;

      SIMILAR_LIST_ELEMENT.innerHTML = ``;

      for (let i = 0; i < takeNumber; i++) {
        FRAGMENT.appendChild(window.render.renderWizard(wizards[i]));
      }

      SIMILAR_LIST_ELEMENT.appendChild(FRAGMENT);
      window.util.showElement(USER_SIMILAR_CN, USER_DIALOG_TUMBLER);
    }
  };
})();
