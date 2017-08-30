'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(
  _objectWithoutProperties2
);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _config = require('../../../config');

var _config2 = _interopRequireDefault(_config);

var _Footer = require('../Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Header = require('../Header');

var _Header2 = _interopRequireDefault(_Header);

require('../../../types/request');

require('../../../types/next');

var _layouts = require('../../layouts');

var _layouts2 = _interopRequireDefault(_layouts);

var _theme = require('../../lib/theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Layout = _layouts2.default[_config2.default.layout || 'none'];

var Theme = _styledComponents2.default.div.withConfig({
  displayName: 'Layout__Theme',
  componentId: 'pgo1oy-0',
})(
  [
    'font-family:sans-serif;color:',
    ';a{color:',
    ';}a:hover{color:',
    ';}a:visited{color:',
    ';}',
  ],
  _theme2.default.main,
  _theme2.default.accent,
  _theme2.default.accent.lighten(0.2),
  _theme2.default.accent.darken(0.2)
);

exports.default = function(Page, title) {
  return function(_ref) {
    var props = (0, _objectWithoutProperties3.default)(_ref, []);

    return _react2.default.createElement(
      _styledComponents.ThemeProvider,
      {
        theme: _config2.default.theme
          ? _config2.default.theme.colors
          : _theme.defaultColors,
      },
      _react2.default.createElement(
        Layout,
        null,
        _react2.default.createElement(
          Theme,
          null,
          _react2.default.createElement(
            _head2.default,
            null,
            _react2.default.createElement(
              'title',
              null,
              _config2.default.siteName + ' - ' + title
            )
          ),
          _react2.default.createElement(_Header2.default, null),
          _react2.default.createElement(
            'main',
            { className: 'main' },
            _react2.default.createElement(Page, props)
          ),
          _react2.default.createElement(_Footer2.default, {
            className: 'footer',
          })
        )
      )
    );
  };
};
