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

var Footer = _styledComponents2.default.div.withConfig({
  displayName: 'Footer__Footer',
  componentId: 'bubpqg-0'
})(['background-color:rgb(86,156,183);font-family:\'Lato\';color:', ';a,a:visited{color:', ';}'], _theme2.default.light.lighten(0.3), _theme2.default.light.lighten(0.3));

exports.default = function () {
  return _react2.default.createElement(Footer, { className: 'footer' }, _react2.default.createElement('small', { className: 'footer--madeWith' }, 'Made with', ' ', _react2.default.createElement('span', { role: 'img', 'aria-label': 'love' }, '\u2764\uFE0F'), ' ', 'and', ' ', _react2.default.createElement('a', { href: 'https://github.com/infiniteluke/next-static' }, 'Next Static', ' ', _react2.default.createElement('span', { role: 'img', 'aria-label': 'with extra sparkles' }, '\u2728'))));
};