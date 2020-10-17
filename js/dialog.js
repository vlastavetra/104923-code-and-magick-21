'use strict';

(() => {

  const USER_DIALOG_CN = document.querySelector(`.setup`);
  const USER_DIALOG_OPEN = document.querySelector(`.setup-open`);
  const USER_DIALOG_CLOSE = document.querySelector(`.setup-close`);
  const USER_DIALOG_TUMBLER = `hidden`;
  const USER_SIMILAR_CN = document.querySelector(`.setup-similar`);
  const USER_NAME_INPUT = document.querySelector(`.setup-user-name`);
  const USER_DIALOG_FORM = USER_DIALOG_CN.querySelector(`.setup-wizard-form`);

  USER_DIALOG_OPEN.addEventListener(`click`, () => {
    window.util.showElement(USER_DIALOG_CN, USER_DIALOG_TUMBLER);
    window.util.showElement(USER_SIMILAR_CN, USER_DIALOG_TUMBLER);
  });

  USER_DIALOG_OPEN.addEventListener(`keydown`, (evt) => {
    if (evt.key === `Enter`) {
      window.util.showElement(USER_DIALOG_CN, USER_DIALOG_TUMBLER);
    }
  });

  USER_DIALOG_CLOSE.addEventListener(`click`, () => {
    window.util.hideElement(USER_DIALOG_CN, USER_DIALOG_TUMBLER);
  });

  USER_DIALOG_CLOSE.addEventListener(`keydown`, (evt) => {
    if (evt.key === `Enter`) {
      window.util.hideElement(USER_DIALOG_CN, USER_DIALOG_TUMBLER);
    }
  });

  USER_DIALOG_FORM.addEventListener(`submit`, function (evt) {
    evt.preventDefault();
    window.backend.save(new FormData(USER_DIALOG_FORM), function () {
      window.util.hideElement(USER_DIALOG_CN, USER_DIALOG_TUMBLER);
    });
  });

  window.dialog = {
    onPopupEscPress(evt) {
      if (evt.key === `Escape` && document.activeElement !== USER_NAME_INPUT) {
        evt.preventDefault();
        window.util.hideElement(USER_DIALOG_CN, USER_DIALOG_TUMBLER);
      }
    }
  };
})();
