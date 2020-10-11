'use strict';

(() => {

  const USER_DIALOG_CN = document.querySelector(`.setup`);
  const USER_DIALOG_OPEN = document.querySelector(`.setup-open`);
  const USER_DIALOG_CLOSE = document.querySelector(`.setup-close`);
  const USER_DIALOG_TUMBLER = `hidden`;
  const USER_SIMILAR_CN = document.querySelector(`.setup-similar`);
  const USER_NAME_INPUT = document.querySelector(`.setup-user-name`);
  const DIALOG_HANDLE = USER_DIALOG_CN.querySelector(`.upload`);

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

  window.dialog = {
    onPopupEscPress(evt) {
      if (evt.key === `Escape` && document.activeElement !== USER_NAME_INPUT) {
        evt.preventDefault();
        window.util.hideElement(USER_DIALOG_CN, USER_DIALOG_TUMBLER);
      }
    }
  };

  DIALOG_HANDLE.addEventListener(`mousedown`, function (evt) {
    evt.preventDefault();

    let startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    let onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      let shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      USER_DIALOG_CN.style.top = (USER_DIALOG_CN.offsetTop - shift.y) + `px`;
      USER_DIALOG_CN.style.left = (USER_DIALOG_CN.offsetLeft - shift.x) + `px`;
    };

    let onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener(`mousemove`, onMouseMove);
      document.removeEventListener(`mouseup`, onMouseUp);
    };

    document.addEventListener(`mousemove`, onMouseMove);
    document.addEventListener(`mouseup`, onMouseUp);
  });
})();
