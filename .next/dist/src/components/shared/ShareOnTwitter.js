'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostFooter = function PostFooter() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      title = _ref.title,
      slug = _ref.slug,
      _ref$twitterIconClass = _ref.twitterIconClass,
      twitterIconClass = _ref$twitterIconClass === undefined ? 'twitter-icon' : _ref$twitterIconClass,
      _ref$buttonRowClass = _ref.buttonRowClass,
      buttonRowClass = _ref$buttonRowClass === undefined ? 'post-btn-row' : _ref$buttonRowClass;

  return _react2.default.createElement('div', { className: buttonRowClass }, _react2.default.createElement('button', null, _react2.default.createElement(_link2.default, { href: '/' }, _react2.default.createElement('a', null, 'Back to home'))), _react2.default.createElement(_link2.default, {
    href: 'http://twitter.com/share?text=Read ' + title + ' via @tgrecojs #javascript &url=https://tgrecojs.com/posts/' + slug
  }, _react2.default.createElement('a', { className: 'twitter-link' }, 'Share Post', _react2.default.createElement('img', {
    className: twitterIconClass,
    alt: 'Share on Twitter',
    src: '/static/twitter-icon.png'
  }))));
};

exports.default = PostFooter;