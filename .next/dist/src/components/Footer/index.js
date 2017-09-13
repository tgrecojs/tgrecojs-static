'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../../lib/theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/thomasgreco/tgrecojs-static/src/components/Footer/index.js';


var Footer = _styledComponents2.default.div.withConfig({
  displayName: 'Footer__Footer',
  componentId: 'bubpqg-0'
})(['background-color:rgb(86,156,183);font-family:\'Lato\';color:', ';a,a:visited{color:', ';}'], _theme2.default.light.lighten(0.3), _theme2.default.light.lighten(0.3));

exports.default = function () {
  return _react2.default.createElement(Footer, { className: 'footer', __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement('small', { className: 'footer--madeWith', __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, 'Made with', ' ', _react2.default.createElement('span', { role: 'img', 'aria-label': 'love', __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, '\u2764\uFE0F'), ' ', 'and', ' ', _react2.default.createElement('a', { href: 'https://github.com/infiniteluke/next-static', __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, 'Next Static', ' ', _react2.default.createElement('span', { role: 'img', 'aria-label': 'with extra sparkles', __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, '\u2728'))));
};