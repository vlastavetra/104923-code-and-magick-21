'use strict';

(() => {
  const URL_GET = `https://21.javascript.pages.academy/code-and-magick`;
  const URL_POST = `https://21.javascript.pages.academy/code-and-magick/data`;
  const StatusCode = {
    OK: 200
  };
  const TIMEOUT_IN_MS = 10000;

  const statusHandler = (xhr, onLoad, onError) => {
    xhr.addEventListener(`load`, () => {
      if (xhr.status === StatusCode.OK) {
        onLoad(xhr.response);
      } else {
        onError(`Статус ответа: ` + xhr.status + ` ` + xhr.statusText);
      }
    });

    xhr.addEventListener(`error`, function () {
      onError(`Произошла ошибка соединения`);
    });

    xhr.addEventListener(`timeout`, function () {
      onError(`Запрос не успел выполниться за ` + xhr.timeout + `мс`);
    });
  };

  window.backend = {
    load(onLoad, onError) {
      let xhr = new XMLHttpRequest();

      xhr.responseType = `json`;
      xhr.open(`GET`, URL_POST);
      xhr.timeout = TIMEOUT_IN_MS;

      statusHandler(xhr, onLoad, onError);
      xhr.send();
    },

    save(data, onLoad, onError) {
      let xhr = new XMLHttpRequest();

      xhr.responseType = `json`;
      xhr.open(`POST`, URL_GET);
      xhr.timeout = TIMEOUT_IN_MS;

      statusHandler(xhr, onLoad, onError);
      xhr.send(data);
    },
  };
})();
