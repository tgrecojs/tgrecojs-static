'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../src/components/Card/index');

var _index2 = _interopRequireDefault(_index);

var _posts = require('../posts');

var _posts2 = _interopRequireDefault(_posts);

require('../types/request');

var _Layout = require('../src/components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _Layout2.default)(function (_ref) {
  var tag = _ref.url.query.tag;
  return _react2.default.createElement('div', null, _react2.default.createElement('h2', { style: { textAlign: 'center', color: 'white' } }, 'Current Tag: ', tag), _posts2.default.filter(function (post) {
    return post.tags && post.tags.includes(tag);
  }).map(function (post) {
    return _react2.default.createElement(_index2.default, post);
  }));
}, 'Tag');