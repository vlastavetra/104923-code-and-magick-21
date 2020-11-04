const path = require(`path`);

module.exports = {
  entry: [
    `./js/util.js`,
    `./js/backend.js`,
    `./js/colorize.js`,
    `./js/dialog.js`,
    `./js/move-dialog.js`,
    `./js/validation.js`,
    `./js/debounce.js`,
    `./js/setup.js`,
    `./js/render.js`,
    `./js/stat.js`,
    `./js/game.js`
  ],
  output: {
    filename: `bundle.js`,
    path: path.resolve(__dirname),
    iife: true
  },
  devtool: false
};
