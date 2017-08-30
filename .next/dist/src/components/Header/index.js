'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _config = require('../../../config');

var _config2 = _interopRequireDefault(_config);

var _theme = require('../../lib/theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/* eslint-disable react/no-danger */

var Header = _styledComponents2.default.header.withConfig({
  displayName: 'Header__Header',
  componentId: 'te6fwh-0',
})(
  ['background-color:', ';color:', ';'],
  _theme2.default.main,
  _theme2.default.light.lighten(0.3)
);

exports.default = function() {
  return _react2.default.createElement(
    Header,
    { className: 'header' },
    _react2.default.createElement(
      'h1',
      { className: 'header--siteName' },
      _config2.default.siteName
    ),
    _react2.default.createElement(
      'div',
      { className: 'header--slogan' },
      _config2.default.slogan
    )
  );
};
