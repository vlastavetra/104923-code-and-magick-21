'use strict';

(() => {
  const URL_POST = `https://21.javascript.pages.academy/code-and-magick`;
  const URL_GET = `https://21.javascript.pages.academy/code-and-magick/data`;
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

  let makeRequest = (xhr, method, url) => {
    xhr.responseType = `json`;
    xhr.open(method, url);
    xhr.timeout = TIMEOUT_IN_MS;
  };

  window.backend = {
    load(onLoad, onError = window.util.noop) {
      let xhr = new XMLHttpRequest();

      makeRequest(xhr, `GET`, URL_GET);

      statusHandler(xhr, onLoad, onError);
      xhr.send();
    },

    save(data, onLoad, onError = window.util.noop) {
      let xhr = new XMLHttpRequest();

      makeRequest(xhr, `POST`, URL_POST);

      statusHandler(xhr, onLoad, onError);
      xhr.send(data);
    },
  };
})();
