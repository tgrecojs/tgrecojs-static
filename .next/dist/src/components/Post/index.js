'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _dateFns = require('date-fns');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _renderMarkup = require('../../lib/renderMarkup');

var _renderMarkup2 = _interopRequireDefault(_renderMarkup);

require('../../../types/post');

var _theme = require('../../lib/theme');

var _theme2 = _interopRequireDefault(_theme);

var _ShareOnTwitter = require('../shared/ShareOnTwitter');

var _ShareOnTwitter2 = _interopRequireDefault(_ShareOnTwitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/no-danger */

var Article = _styledComponents2.default.article.withConfig({
  displayName: 'Post__Article',
  componentId: 's1ptcmqe-0'
})(['.twitter-icon{max-width:50px;}.twitter-link{display:flex;align-items:center;}.post-btn-row{display:flex;justify-content:space-around;align-items:center;}button{width:25%;height:40px;background:#49768c;a{color:white;}}@media (max-width:600px){button{width:50%;margin-bottom:16px;}.post-btn-row{flex-direction:column;}}p img{display:flex;align-items:center;justify-content:center;max-width:100%;}img{max-width:600px;max-height:100%;margin:auto;}@media and (max-width:600px){img{width:100%;margin:0;}}code{color:#49768c;font-size:.9em;}p,h1,h2,h3,h4,button{font-family:\'Lato\',sans-serif;}h1{padding:.5em;line-height:1.3em;text-align:center;}.table-wrapper{overflow-x:auto;}table{border-collapse:collapse;}table th{background-color:', ';color:', ';}table,th,td{border:1px solid ', ';}th,td{padding:10px;}iframe{border:2px solid #49768c;border-radius:5px;display:flex;}blockquote{display:flex;flex-direction:column;align-items:center;justify-content:space-around;line-height:1.3;padding:1em;p{font-size:1.4rem;margin:0;display:inline;}p:before{font-size:5rem;color:', ';line-height:0.3rem;vertical-align:-0.4em;}}@media (max-width:600px){blockquote{padding:.2em;}}.headline{font-size:24px;}'], _theme2.default.accent, _theme2.default.light, _theme2.default.dark, _theme2.default.dark.lighten(1.5));

exports.default = function (_ref) {
  var title = _ref.title,
      date = _ref.date,
      tags = _ref.tags,
      body = _ref.body,
      slug = _ref.slug;
  return _react2.default.createElement(Article, { itemScope: true, itemType: 'http://schema.org/BlogPosting', className: 'post' }, _react2.default.createElement('header', null, _react2.default.createElement('h1', { itemProp: 'headline' }, title), _react2.default.createElement('div', null, _react2.default.createElement('small', { className: 'post--tags' }, _react2.default.createElement('span', null, 'Tags: '), tags.map(function (tag, index) {
    return _react2.default.createElement('span', { key: tag, itemProp: 'keywords', className: 'post--tag' }, _react2.default.createElement(_link2.default, {
      href: '/tag?tag=' + tag,
      as: '/tag/' + tag.replace(/\s+/g, '-').toLowerCase()
    }, _react2.default.createElement('a', null, tag)), index !== tags.length - 1 ? ', ' : '');
  }))), _react2.default.createElement('div', null, _react2.default.createElement('span', null, _react2.default.createElement('time', { itemProp: 'datePublished', dateTime: date }, (0, _dateFns.distanceInWordsToNow)(date, { addSuffix: true }))))), _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: (0, _renderMarkup2.default)(body) } }), _react2.default.createElement(_ShareOnTwitter2.default, { title: title, slug: slug }));
};