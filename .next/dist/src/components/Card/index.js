'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

require('../../../types/post');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/thomasgreco/tgrecojs-static/src/components/Card/index.js';


// import theme from '../../lib/theme';
var Anchor = _styledComponents2.default.a.withConfig({
  displayName: 'Card__Anchor',
  componentId: 's5yzqv-0'
})(['color:#fff;font-family:\'Lato\';']);

var PostCard = _styledComponents2.default.div.withConfig({
  displayName: 'Card__PostCard',
  componentId: 's5yzqv-1'
})(['background:rgb(86,156,183);padding:1em;color:#fff;font-family:\'Lato\';border:1px solid white;border-radius:10px;margin:1.5em;text-align:center;line-height:1.5;display:flex;flex-direction:column;align-items:center;p{width:80%;text-align:left;}@media (max-width:600px){p{display:none;}}}']);

var Btn = _styledComponents2.default.button.withConfig({
  displayName: 'Card__Btn',
  componentId: 's5yzqv-2'
})(['height:50px;width:50%;font-size:1.15em;border:2px solid #fff;border-radius:5px;transition:all .3s ease-in;background:rgb(147,205,227);margin:15px;&:hover{background:#49768c;}']);

exports.default = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      title = _ref.title,
      description = _ref.description,
      slug = _ref.slug,
      tags = _ref.tags;

  return _react2.default.createElement(PostCard, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, _react2.default.createElement('h3', { itemProp: 'headline', className: 'post--title', __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, title), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, description), _react2.default.createElement(_link2.default, { prefetch: true, href: '/post?post=' + slug, as: '/post/' + slug, __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }, _react2.default.createElement(Btn, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, ' ', _react2.default.createElement(Anchor, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, 'Read Post'))), _react2.default.createElement('footer', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }, _react2.default.createElement('small', { className: 'post--tags', __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }, _react2.default.createElement('span', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }, 'Filed under: '), tags.map(function (tag, index) {
    return _react2.default.createElement('span', { key: tag, itemProp: 'keywords', className: 'post--tag', __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      }
    }, _react2.default.createElement(_link2.default, { prefetch: true,
      href: '/tag?tag=' + tag,
      as: '/tag/' + tag.replace(/\s+/g, '-').toLowerCase(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      }
    }, _react2.default.createElement('a', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      }
    }, tag)), index !== tags.length - 1 ? ', ' : '');
  }))));
};