'use strict';

(() => {
  const USER_NAME_INPUT = document.querySelector(`.setup-user-name`);
  const MIN_NAME_LENGTH = 2;
  const MAX_NAME_LENGTH = 25;

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
})();
