'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.defaultColors = undefined;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _styledComponentsTheme = require('styled-components-theme');

var _styledComponentsTheme2 = _interopRequireDefault(_styledComponentsTheme);

var _config = require('../../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var defaultColors = (exports.defaultColors = {
  main: '#000000',
  dark: '#000000',
  light: '#ffffff',
  accent: '#000000',
});

var theme = _styledComponentsTheme2.default.apply(
  undefined,
  (0, _toConsumableArray3.default)(
    (0, _keys2.default)(
      _config2.default.theme ? _config2.default.theme.colors : defaultColors
    )
  )
);

exports.default = theme;
