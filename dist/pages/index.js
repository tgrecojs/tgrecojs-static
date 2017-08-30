'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Post = require('../src/components/Post');

var _Post2 = _interopRequireDefault(_Post);

var _Layout = require('../src/components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _posts = require('../posts');

var _posts2 = _interopRequireDefault(_posts);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = (0, _Layout2.default)(function() {
  return _react2.default.createElement(
    'div',
    null,
    _posts2.default.map(function(post) {
      return _react2.default.createElement(_Post2.default, {
        key: post.slug,
        title: post.title,
        slug: post.slug,
        date: post.date,
        author: post.author,
        body: post.body,
        tags: post.tags,
      });
    })
  );
}, 'Home');
