'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _styledComponents = require('styled-components');

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

var _component = require('../navbar/component');

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/thomasgreco/tgrecojs-static/src/components/Layout/index.js';

var Layout = _layouts2.default[_config2.default.layout || 'none'];

exports.default = function (Page, title) {
  return function (_ref) {
    var props = (0, _objectWithoutProperties3.default)(_ref, []);

    return _react2.default.createElement(_styledComponents.ThemeProvider, { theme: _config2.default.theme ? _config2.default.theme.colors : _theme.defaultColors, __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    }, _react2.default.createElement(Layout, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      }
    }, _react2.default.createElement(_head2.default, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    }, _react2.default.createElement('title', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      }
    }, _config2.default.siteName + ' - ' + title)), _react2.default.createElement(_component2.default, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      }
    }), _react2.default.createElement(_Header2.default, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      }
    }), _react2.default.createElement('div', { className: 'content', __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      }
    }, _react2.default.createElement('main', { className: 'main', __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      }
    }, _react2.default.createElement(Page, (0, _extends3.default)({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      }
    })))), _react2.default.createElement(_Footer2.default, { className: 'footer', __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      }
    })));
  };
};