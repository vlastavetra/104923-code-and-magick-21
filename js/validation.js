'use strict';

(() => {
  const USER_NAME_INPUT = document.querySelector(`.setup-user-name`);
  const NameLength = {
    MIN: 2,
    MAX: 25
  };

  USER_NAME_INPUT.addEventListener(`input`, () => {
    let valueLength = USER_NAME_INPUT.value.length;

    if (valueLength < NameLength.MIN) {
      USER_NAME_INPUT.setCustomValidity(`Ещё ` + (NameLength.MIN - valueLength) + ` симв.`);
    } else if (valueLength > NameLength.MAX) {
      USER_NAME_INPUT.setCustomValidity(`Удалите лишние ` + (valueLength - NameLength.MAX) + ` симв.`);
    } else {
      USER_NAME_INPUT.setCustomValidity(``);
    }

    USER_NAME_INPUT.reportValidity();
  });
})();
