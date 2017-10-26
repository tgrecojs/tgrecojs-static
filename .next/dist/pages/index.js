'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../src/components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _posts = require('../posts');

var _posts2 = _interopRequireDefault(_posts);

var _index = require('../src/components/Card/index');

var _index2 = _interopRequireDefault(_index);

var _GoogleAnalytics = require('../src/components/HOCs/GoogleAnalytics');

var _GoogleAnalytics2 = _interopRequireDefault(_GoogleAnalytics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _GoogleAnalytics2.default)((0, _Layout2.default)(function () {
  return _react2.default.createElement('div', null, _posts2.default.map(function (post) {
    return _react2.default.createElement(_index2.default, (0, _extends3.default)({ key: post.slug }, post));
  }));
}, 'Home'));