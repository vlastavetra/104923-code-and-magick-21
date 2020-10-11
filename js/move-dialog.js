'use strict';

(() => {
  const USER_DIALOG_CN = document.querySelector(`.setup`);
  const DIALOG_HANDLE = USER_DIALOG_CN.querySelector(`.upload`);

  DIALOG_HANDLE.addEventListener(`mousedown`, function (evt) {
    evt.preventDefault();

    const START_COORDS = {
      x: evt.clientX,
      y: evt.clientY
    };

    let dragged = false;

    let onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      dragged = true;

      let shift = {
        x: START_COORDS.x - moveEvt.clientX,
        y: START_COORDS.y - moveEvt.clientY
      };

      START_COORDS = {
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

      if (dragged) {
        let onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          DIALOG_HANDLE.removeEventListener(`click`, onClickPreventDefault);
        };

        DIALOG_HANDLE.addEventListener(`click`, onClickPreventDefault);
      }
    };

    document.addEventListener(`mousemove`, onMouseMove);
    document.addEventListener(`mouseup`, onMouseUp);
  });
})();
