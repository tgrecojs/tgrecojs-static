'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _document = require('next/dist/server/document.js');

var _document2 = _interopRequireDefault(_document);

var _styledComponents = require('styled-components');

var _styledNormalize = require('styled-normalize');

var _styledNormalize2 = _interopRequireDefault(_styledNormalize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MyDocument = function (_Document) {
  (0, _inherits3.default)(MyDocument, _Document);

  function MyDocument() {
    (0, _classCallCheck3.default)(this, MyDocument);

    return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(MyDocument, [{
    key: 'render',
    value: function render() {
      var sheet = new _styledComponents.ServerStyleSheet();
      var main = sheet.collectStyles(_react2.default.createElement(_document.Main, null));
      var styleTags = sheet.getStyleElement();
      return _react2.default.createElement('html', { lang: 'en-US' }, _react2.default.createElement(_document.Head, null, styleTags, _react2.default.createElement('style', { type: 'text/css' }, _styledNormalize2.default), _react2.default.createElement('meta', {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0'
      }), _react2.default.createElement('link', { rel: 'manifest', href: './static/manifest.json' }), _react2.default.createElement('meta', { name: 'theme-color', content: '#56a5b7' }), _react2.default.createElement('link', {
        rel: 'shortcut icon',
        type: 'image/png',
        href: '/static/tg-logo.png'
      })), _react2.default.createElement('body', null, _react2.default.createElement('div', { className: 'root' }, main), _react2.default.createElement(_document.NextScript, null), _react2.default.createElement('link', {
        rel: 'stylesheet',
        href: '//cdnjs.cloudflare.com/ajax/libs/prism/1.6.0/themes/prism-coy.min.css'
      }), _react2.default.createElement('link', {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css'
      }), _react2.default.createElement('link', {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Lato'
      }), _react2.default.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js' })));
    }
  }]);

  return MyDocument;
}(_document2.default);

exports.default = MyDocument;