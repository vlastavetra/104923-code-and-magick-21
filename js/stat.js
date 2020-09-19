'use strict';

const MAIN_BLACK = `rgba(0, 0, 0, 1)`;
const TRANSP_BLACK = `rgba(0, 0, 0, 0.7)`;
const MAIN_WHITE = `rgba(255, 255, 255, 1)`;
const MAIN_RED = `rgba(255, 0, 0, 1)`;
const MAIN_BLUE = `rgba(0, 32, 191, 1)`;
const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const TOP_TEXT_X = CLOUD_X + 20;
const TEXT_BOTTOM_PADDING = CLOUD_Y + CLOUD_HEIGHT - 30;
const BAR_BOTTOM_PADDING = TEXT_BOTTOM_PADDING - 10;
const BAR_WIDTH = 40;
const BAR_HEIGHT = -150;
const GAP = 40;

let renderCloud = (ctx, x, y, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

let getMaxElement = (arr) => {
  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = (ctx, names, times) => {
  renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, TRANSP_BLACK);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, MAIN_WHITE);

  ctx.strokeStyle = MAIN_BLACK;
  ctx.strokeRect(CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.font = `16px PT Mono`;
  ctx.textBaseline = `hanging`;
  ctx.fillStyle = MAIN_BLACK;
  ctx.fillText(`Ура вы победили!`, TOP_TEXT_X, CLOUD_Y + 20);
  ctx.fillText(`Список результатов:`, TOP_TEXT_X, CLOUD_Y + GAP);

  let maxTime = getMaxElement(times);

  for (let i = 0; i < names.length; i++) {
    ctx.fillText(
        names[i],
        CLOUD_X * (i + 1) + GAP,
        TEXT_BOTTOM_PADDING
    );

    if (names[i] === `Вы`) {
      ctx.fillStyle = MAIN_RED;
    } else {
      ctx.fillStyle = MAIN_BLUE;
      ctx.globalAlpha = 1 / (times[i] / maxTime + i);
    }

    ctx.fillRect(
        CLOUD_X * (i + 1) + GAP,
        BAR_BOTTOM_PADDING,
        BAR_WIDTH,
        BAR_HEIGHT * times[i] / maxTime
    );

    ctx.fillStyle = MAIN_BLACK;
    ctx.globalAlpha = 1;

    ctx.fillText(
        Math.round(times[i]),
        CLOUD_X * (i + 1) + GAP,
        BAR_HEIGHT * times[i] / maxTime + TEXT_BOTTOM_PADDING - 30
    );
  }
};
