'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/thomasgreco/tgrecojs-static/src/components/Header/index.js';

/* eslint-disable react/no-danger */

var Logo = _styledComponents2.default.img.withConfig({
  displayName: 'Header__Logo',
  componentId: 'lr9vzt-0'
})(['max-width:300px;margin-top:3em;']);

exports.default = function () {
  return _react2.default.createElement('div', { className: 'header', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement(Logo, { src: '/static/tg-logo.png', __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), _react2.default.createElement('h3', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, 'Providing the latest in web application programming.'));
};