'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _modal = require('../shared/modal');

var _modal2 = _interopRequireDefault(_modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toggleLinksFn = function toggleLinksFn() {
  var linksEl = document.querySelector('.narrowLinks');
  if (linksEl.style.display === 'block') {
    linksEl.style.display = 'none';
  } else {
    linksEl.style.display = 'block';
  }
};

var NavComponent = function NavComponent(_ref) {
  var _ref$toggleLinks = _ref.toggleLinks,
      toggleLinks = _ref$toggleLinks === undefined ? toggleLinksFn : _ref$toggleLinks;
  return _react2.default.createElement('nav', {
    'data-jsx': 1396458282
  }, _react2.default.createElement(_style2.default, {
    styleId: 1396458282,
    css: 'nav[data-jsx="1396458282"]{background-color:rgb(86,156,183);font-family:\'Lato\',san-serif;overflow:hidden;width:100%;position:fixed;top:0;padding:1em;border-bottom:1px solid #49768c;z-index:1}a[data-jsx="1396458282"]{color:#fff;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}a[data-jsx="1396458282"]:hover{-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2)}a[data-jsx="1396458282"]:visited{color:#fff}.navWide[data-jsx="1396458282"]{display:none;margin:0 auto}.navWide[data-jsx="1396458282"] .wideDiv[data-jsx="1396458282"]{-webkit-text-align:center;text-align:center}.navWide[data-jsx="1396458282"] .wideDiv[data-jsx="1396458282"] a[data-jsx="1396458282"]{-webkit-text-decoration:none;text-decoration:none;display:inline-block;padding:0 2em}.navNarrow[data-jsx="1396458282"] i[data-jsx="1396458282"]{float:left;cursor:pointer;color:#fff}.navNarrow[data-jsx="1396458282"] .narrowLinks[data-jsx="1396458282"]{display:none}.navNarrow[data-jsx="1396458282"] .narrowLinks[data-jsx="1396458282"] a[data-jsx="1396458282"]{-webkit-text-decoration:none;text-decoration:none;display:block;float:left;clear:left;padding:0.5em 0}.wideDiv[data-jsx="1396458282"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around}@media (min-width:480px){.navWide[data-jsx="1396458282"]{display:block}.navNarrow[data-jsx="1396458282"]{display:none}}'
  }), _react2.default.createElement('div', { className: 'navWide', 'data-jsx': 1396458282
  }, _react2.default.createElement('div', { className: 'wideDiv', 'data-jsx': 1396458282
  }, _react2.default.createElement(_link2.default, { href: '/' }, _react2.default.createElement('a', {
    'data-jsx': 1396458282
  }, 'Blogroll')), _react2.default.createElement(_link2.default, { href: '/contact', as: '/contact' }, _react2.default.createElement('a', {
    'data-jsx': 1396458282
  }, 'Contact Me')), _react2.default.createElement('a', {
    'data-jsx': 1396458282
  }, _react2.default.createElement('iframe', {
    src: 'https://platform.twitter.com/widgets/follow_button.html?screen_name=tgrecojs&show_screen_name=false&show_count=false&size=l',
    title: 'Follow TwitterDev on Twitter',
    width: '80',
    height: '30',
    style: { border: '0', overflow: 'hidden' },
    'data-jsx': 1396458282
  })))), _react2.default.createElement('div', { className: 'navNarrow', 'data-jsx': 1396458282
  }, _react2.default.createElement('i', { className: 'fa fa-bars fa-2x', onClick: function onClick() {
      return toggleLinks();
    }, 'data-jsx': 1396458282
  }), _react2.default.createElement('div', { className: 'narrowLinks', 'data-jsx': 1396458282
  }, _react2.default.createElement(_link2.default, { href: '/contact', as: '/contact' }, _react2.default.createElement('a', {
    'data-jsx': 1396458282
  }, 'Contact Me')), _react2.default.createElement(_link2.default, { href: '/' }, _react2.default.createElement('a', { onClick: toggleLinks, 'data-jsx': 1396458282
  }, 'Home')), _react2.default.createElement('a', {
    'data-jsx': 1396458282
  }, _react2.default.createElement('iframe', {
    src: 'https://platform.twitter.com/widgets/follow_button.html?screen_name=TwitterDev&show_screen_name=false&show_count=false&size=l',
    title: 'Follow tgrecojs on Twitter',
    width: '80',
    height: '30',
    style: { border: '0', overflow: 'hidden' },
    'data-jsx': 1396458282
  })), _react2.default.createElement('a', { onClick: toggleLinks, 'data-jsx': 1396458282
  }, 'Close Menu'))));
};

exports.default = NavComponent;