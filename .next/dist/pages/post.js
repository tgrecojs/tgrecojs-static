'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _Post = require('../src/components/Post');

var _Post2 = _interopRequireDefault(_Post);

var _posts = require('../posts');

var _posts2 = _interopRequireDefault(_posts);

require('../types/request');

var _Layout = require('../src/components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = (0, _Layout2.default)(function(_ref) {
  var slug = _ref.url.query.post;

  var post = _posts2.default.find(function(p) {
    return p.slug === slug;
  });
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _link2.default,
      { href: '/' },
      _react2.default.createElement('a', { className: 'home-link' }, 'Home')
    ),
    _react2.default.createElement(_Post2.default, {
      title: post.title,
      slug: post.slug,
      date: post.date,
      author: post.author,
      body: post.body,
      tags: post.tags,
    })
  );
}, 'Post');
