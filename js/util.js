'use strict';

window.util = {
  getRandomNumber(num) {
    return (Math.floor(Math.random() * num));
  },

  getRandomElement(arr) {
    return arr[Math.floor(Math.random() * Math.round(arr.length - 1))];
  },

  getRandomArray(num, arr) {
    let randomArr = [];

    for (let i = 0; i < num; i++) {
      let newIndex = window.util.getRandomNumber(arr.length - 1);

      randomArr.push(arr[newIndex]);
      arr.splice(newIndex, 1);
    }

    return randomArr;
  },

  showElement(element, tumbler) {
    element.classList.remove(tumbler);

    document.addEventListener(`keydown`, window.dialog.onPopupEscPress);
  },

  hideElement(element, tumbler) {
    element.classList.add(tumbler);

    document.addEventListener(`keydown`, window.dialog.onPopupEscPress);
  },

  createErrorMessage(errorMessage) {
    const node = document.createElement(`div`);

    node.style = `z-index: 100; margin: 0 auto; text-align: center; background-color: red;`;
    node.style.position = `absolute`;
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = `30px`;
    node.textContent = errorMessage;

    document.body.insertAdjacentElement(`afterbegin`, node);
  },

  noop() {},
};
