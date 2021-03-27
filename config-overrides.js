const { override, useEslintRc, addBabelPreset } = require('customize-cra');

/* config-overrides.js */
module.exports = override(
  addBabelPreset('@emotion/babel-preset-css-prop')
  // useEslintRc('.eslintrc')
);
