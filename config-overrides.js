const { override, disableEsLint, addBabelPreset } = require('customize-cra');

/* config-overrides.js */
module.exports = override(
  addBabelPreset('@emotion/babel-preset-css-prop'),
  disableEsLint()
);
