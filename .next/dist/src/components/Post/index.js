'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Article = _styledComponents2.default.article.withConfig({
  displayName: 'Post__Article',
  componentId: 's1eculme-0',
})(
  [
    '.table-wrapper{overflow-x:auto;}table{border-collapse:collapse;}table th{background-color:',
    ';color:',
    ';}table,th,td{border:1px solid ',
    ';}th,td{padding:10px;}blockquote{margin:1.8rem 20px;padding:1rem 10px;p{font-size:1.4rem;margin:0;display:inline;quotes:"\\201C""\\201D""\\2018""\\2019";}p:before{font-size:5rem;font-family:Georgia,serif;color:',
    ';content:open-quote;line-height:0.3rem;margin-right:0.8rem;vertical-align:-0.4em;}p:after{content:close-quote;visibility:hidden;}}',
  ],
  _theme2.default.accent,
  _theme2.default.light,
  _theme2.default.dark,
  _theme2.default.dark.lighten(1.5)
);
/* eslint-disable react/no-danger */

exports.default = function(_ref) {
  var title = _ref.title,
    author = _ref.author,
    date = _ref.date,
    tags = _ref.tags,
    body = _ref.body,
    slug = _ref.slug;
  return _react2.default.createElement(
    Article,
    {
      itemScope: true,
      itemType: 'http://schema.org/BlogPosting',
      className: 'post',
    },
    _react2.default.createElement(
      'header',
      null,
      _react2.default.createElement(
        _link2.default,
        { href: '/post?post=' + slug, as: '/post/' + slug },
        _react2.default.createElement(
          'a',
          null,
          _react2.default.createElement(
            'h1',
            { itemProp: 'headline', className: 'post--title' },
            title
          )
        )
      ),
      _react2.default.createElement(
        'footer',
        { className: 'post--info' },
        _react2.default.createElement(
          'span',
          null,
          _react2.default.createElement(
            'time',
            { itemProp: 'datePublished', dateTime: date },
            (0, _dateFns.distanceInWordsToNow)(date, { addSuffix: true })
          )
        ),
        _react2.default.createElement('span', { itemProp: 'author' }, author)
      )
    ),
    _react2.default.createElement('div', {
      className: 'post--body',
      dangerouslySetInnerHTML: { __html: (0, _renderMarkup2.default)(body) },
    }),
    _react2.default.createElement(
      'footer',
      null,
      _react2.default.createElement(
        'small',
        { className: 'post--tags' },
        _react2.default.createElement('span', null, 'Filed under: '),
        tags.map(function(tag, index) {
          return _react2.default.createElement(
            'span',
            { key: tag, itemProp: 'keywords', className: 'post--tag' },
            _react2.default.createElement(
              _link2.default,
              {
                href: '/tag?tag=' + tag,
                as: '/tag/' + tag.replace(/\s+/g, '-').toLowerCase(),
              },
              _react2.default.createElement('a', null, tag)
            ),
            index !== tags.length - 1 ? ', ' : ''
          );
        })
      )
    )
  );
};
