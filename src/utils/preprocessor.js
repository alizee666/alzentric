/* eslint-disable comma-dangle */
// Depended on by Jest
// DO NOT REMOVE
const babelJest = require('babel-jest');

module.exports = {
  canInstrument: true,
  process(src, filename, config, options) {
    if (/\.svg$/.test(filename)) {
      return 'module.exports = function () {}';
    }

    if (!(/\.jsx?$/.test(filename))) {
      return '';
    }

    return babelJest.process(src, filename, config, options);
  }
};
