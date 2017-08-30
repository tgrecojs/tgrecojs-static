'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

require('../../types/layout');

var _centered = require('./centered');

var _centered2 = _interopRequireDefault(_centered);

var _none = require('./none');

var _none2 = _interopRequireDefault(_none);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var layouts = {
  centered: _centered2.default,
  none: _none2.default,
};

exports.default = layouts;
