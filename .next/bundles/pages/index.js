
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(564);

var config = {
  siteName: 'tgrecojs',
  slogan: 'Thomas Joseph Greco Web Application Developer',
  layout: 'centered',
  theme: {
    colors: {
      main: '#24292E',
      dark: '#3F4448',
      light: '#FAFBFC',
      accent: '#0366D6'
    }
  }
};

exports.default = config;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/thomasgreco/tgrecojs-static/config/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/thomasgreco/tgrecojs-static/config/index.js"); } } })();

/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/thomasgreco/tgrecojs-static/types/layout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/thomasgreco/tgrecojs-static/types/layout.js"); } } })();

/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultColors = undefined;

var _keys = __webpack_require__(238);

var _keys2 = _interopRequireDefault(_keys);

var _toConsumableArray2 = __webpack_require__(96);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _styledComponentsTheme = __webpack_require__(568);

var _styledComponentsTheme2 = _interopRequireDefault(_styledComponentsTheme);

var _config = __webpack_require__(547);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultColors = exports.defaultColors = {
  main: '#49768c',
  dark: '#000000',
  light: '#ffffff',
  accent: '#000000'
};

var theme = _styledComponentsTheme2.default.apply(undefined, (0, _toConsumableArray3.default)((0, _keys2.default)(_config2.default.theme ? _config2.default.theme.colors : defaultColors)));

exports.default = theme;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/thomasgreco/tgrecojs-static/src/lib/theme.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/thomasgreco/tgrecojs-static/src/lib/theme.js"); } } })();

/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/thomasgreco/tgrecojs-static/types/request.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/thomasgreco/tgrecojs-static/types/request.js"); } } })();

/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(561);


/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(112);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(562);

var _Layout2 = _interopRequireDefault(_Layout);

var _posts = __webpack_require__(597);

var _posts2 = _interopRequireDefault(_posts);

var _index = __webpack_require__(598);

var _index2 = _interopRequireDefault(_index);

var _GoogleAnalytics = __webpack_require__(600);

var _GoogleAnalytics2 = _interopRequireDefault(_GoogleAnalytics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/thomasgreco/tgrecojs-static/pages/index.js?entry';
exports.default = (0, _GoogleAnalytics2.default)((0, _Layout2.default)(function () {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _posts2.default.map(function (post) {
    return _react2.default.createElement(_index2.default, (0, _extends3.default)({ key: post.slug }, post, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    }));
  }));
}, 'Home'));

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/thomasgreco/tgrecojs-static/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/thomasgreco/tgrecojs-static/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(70)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(112);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(563);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(226);

var _head2 = _interopRequireDefault(_head);

var _styledComponents = __webpack_require__(228);

var _config = __webpack_require__(547);

var _config2 = _interopRequireDefault(_config);

var _Footer = __webpack_require__(567);

var _Footer2 = _interopRequireDefault(_Footer);

var _Header = __webpack_require__(580);

var _Header2 = _interopRequireDefault(_Header);

__webpack_require__(552);

__webpack_require__(581);

var _layouts = __webpack_require__(582);

var _layouts2 = _interopRequireDefault(_layouts);

var _theme = __webpack_require__(549);

var _component = __webpack_require__(585);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/thomasgreco/tgrecojs-static/src/components/Layout/index.js';

var Layout = _layouts2.default[_config2.default.layout || 'none'];

exports.default = function (Page, title) {
  return function (_ref) {
    var props = (0, _objectWithoutProperties3.default)(_ref, []);

    return _react2.default.createElement(_styledComponents.ThemeProvider, { theme: _config2.default.theme ? _config2.default.theme.colors : _theme.defaultColors, __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    }, _react2.default.createElement(Layout, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      }
    }, _react2.default.createElement(_head2.default, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    }, _react2.default.createElement('title', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      }
    }, _config2.default.siteName + ' - ' + title)), _react2.default.createElement(_component2.default, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      }
    }), _react2.default.createElement(_Header2.default, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      }
    }), _react2.default.createElement('div', { className: 'content', __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      }
    }, _react2.default.createElement('main', { className: 'main', __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      }
    }, _react2.default.createElement(Page, (0, _extends3.default)({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      }
    })))), _react2.default.createElement(_Footer2.default, { className: 'footer', __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      }
    })));
  };
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/thomasgreco/tgrecojs-static/src/components/Layout/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/thomasgreco/tgrecojs-static/src/components/Layout/index.js"); } } })();

/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(565);

__webpack_require__(548);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/thomasgreco/tgrecojs-static/types/config.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/thomasgreco/tgrecojs-static/types/config.js"); } } })();

/***/ }),

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(566);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/thomasgreco/tgrecojs-static/types/theme.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/thomasgreco/tgrecojs-static/types/theme.js"); } } })();

/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/thomasgreco/tgrecojs-static/types/colors.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/thomasgreco/tgrecojs-static/types/colors.js"); } } })();

/***/ }),

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(228);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = __webpack_require__(549);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/thomasgreco/tgrecojs-static/src/components/Footer/index.js';


var Footer = _styledComponents2.default.div.withConfig({
  displayName: 'Footer__Footer',
  componentId: 'bubpqg-0'
})(['background-color:rgb(86,156,183);font-family:\'Lato\';color:', ';a,a:visited{color:', ';}'], _theme2.default.light.lighten(0.3), _theme2.default.light.lighten(0.3));

exports.default = function () {
  return _react2.default.createElement(Footer, { className: 'footer', __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement('small', { className: 'footer--madeWith', __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, 'Made with', ' ', _react2.default.createElement('span', { role: 'img', 'aria-label': 'love', __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, '\u2764\uFE0F'), ' ', 'and', ' ', _react2.default.createElement('a', { href: 'https://github.com/infiniteluke/next-static', __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, 'Next Static', ' ', _react2.default.createElement('span', { role: 'img', 'aria-label': 'with extra sparkles', __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, '\u2728'))));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/thomasgreco/tgrecojs-static/src/components/Footer/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/thomasgreco/tgrecojs-static/src/components/Footer/index.js"); } } })();

/***/ }),

/***/ 580:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(228);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/thomasgreco/tgrecojs-static/src/components/Header/index.js';

/* eslint-disable react/no-danger */

var Logo = _styledComponents2.default.img.withConfig({
  displayName: 'Header__Logo',
  componentId: 'lr9vzt-0'
})(['max-width:300px;margin-top:3em;']);

exports.default = function () {
  return _react2.default.createElement('div', { className: 'header', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement(Logo, { src: '/static/tg-logo.png', __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), _react2.default.createElement('h3', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, 'Providing the latest in web application programming.'));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/thomasgreco/tgrecojs-static/src/components/Header/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/thomasgreco/tgrecojs-static/src/components/Header/index.js"); } } })();

/***/ }),

/***/ 581:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(8);

__webpack_require__(552);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/thomasgreco/tgrecojs-static/types/next.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/thomasgreco/tgrecojs-static/types/next.js"); } } })();

/***/ }),

/***/ 582:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(548);

var _centered = __webpack_require__(583);

var _centered2 = _interopRequireDefault(_centered);

var _none = __webpack_require__(584);

var _none2 = _interopRequireDefault(_none);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var layouts = {
  centered: _centered2.default,
  none: _none2.default
};

exports.default = layouts;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/thomasgreco/tgrecojs-static/src/layouts/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/thomasgreco/tgrecojs-static/src/layouts/index.js"); } } })();

/***/ }),

/***/ 583:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = __webpack_require__(228);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var space = 30;
var medium = '700px';

exports.default = _styledComponents2.default.div.withConfig({
  displayName: 'centered',
  componentId: 's1w3fkby-0'
})(['.content{background:#49768c;flex:1;height:100%;padding:3px;}a{text-decoration:none;}.header{display:flex;flex-direction:column;text-align:center;align-items:center;font-family:\'Lato\',san-serif;margin-top:1.25em;}main{font-family:\'Lato\',san-serif;max-width:500px;font-size:16px;@media (min-width:', '){max-width:100%;}margin:', 'px auto;}.home-link{margin-left:', 'px;}.footer{padding:', 'px;text-align:center;}.post{margin:', 'px ', 'px ', 'px;line-height:1.4em;padding:1em;background:#fff;border:1px solid black;h1{margin:0;}}@media (max-width:672px){.post{margin:5px;}}'], medium, space, space, space, space / 2, space, space);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/thomasgreco/tgrecojs-static/src/layouts/centered.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/thomasgreco/tgrecojs-static/src/layouts/centered.js"); } } })();

/***/ }),

/***/ 584:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = __webpack_require__(228);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _styledComponents2.default.div.withConfig({
  displayName: 'none',
  componentId: 's1510mfj-0'
})(['']);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/thomasgreco/tgrecojs-static/src/layouts/none.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/thomasgreco/tgrecojs-static/src/layouts/none.js"); } } })();

/***/ }),

/***/ 585:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(586);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(553);

var _link2 = _interopRequireDefault(_link);

var _modal = __webpack_require__(589);

var _modal2 = _interopRequireDefault(_modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/thomasgreco/tgrecojs-static/src/components/navbar/component.js';

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
    'data-jsx': 1396458282,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement(_style2.default, {
    styleId: 1396458282,
    css: 'nav[data-jsx="1396458282"]{background-color:rgb(86,156,183);font-family:\'Lato\',san-serif;overflow:hidden;width:100%;position:fixed;top:0;padding:1em;border-bottom:1px solid #49768c;z-index:1}a[data-jsx="1396458282"]{color:#fff;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}a[data-jsx="1396458282"]:hover{-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2)}a[data-jsx="1396458282"]:visited{color:#fff}.navWide[data-jsx="1396458282"]{display:none;margin:0 auto}.navWide[data-jsx="1396458282"] .wideDiv[data-jsx="1396458282"]{-webkit-text-align:center;text-align:center}.navWide[data-jsx="1396458282"] .wideDiv[data-jsx="1396458282"] a[data-jsx="1396458282"]{-webkit-text-decoration:none;text-decoration:none;display:inline-block;padding:0 2em}.navNarrow[data-jsx="1396458282"] i[data-jsx="1396458282"]{float:left;cursor:pointer;color:#fff}.navNarrow[data-jsx="1396458282"] .narrowLinks[data-jsx="1396458282"]{display:none}.navNarrow[data-jsx="1396458282"] .narrowLinks[data-jsx="1396458282"] a[data-jsx="1396458282"]{-webkit-text-decoration:none;text-decoration:none;display:block;float:left;clear:left;padding:0.5em 0}.wideDiv[data-jsx="1396458282"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around}@media (min-width:480px){.navWide[data-jsx="1396458282"]{display:block}.navNarrow[data-jsx="1396458282"]{display:none}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL25hdmJhci9jb21wb25lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZU8sQUFHd0MsQUFFdEIsQUFDVSxBQUNWLEFBQ0UsQUFDSyxBQUNHLEFBQ1YsQUFDRSxBQUNRLEFBQ04sQUFHQyxBQUNELFlBYmtDLEFBRWpDLEFBSWlCLEVBSEMsQUFJaEIsQUFNSSxDQURDLGFBTjRCLENBSFosS0FKN0MsTUFPOEQsTUFGakMsTUFDMEIsQUFHUCxZQVQxQixHQVM0QyxPQUhVLElBSjVDLEFBUWlCLENBRG1DLEVBVDVDLEdBQ29CLEtBS3FCLEVBRzBCLEVBVDdDLGVBU2tELENBVHJDLE9BQW1CLGFBQXVDLGlDQUFpQixXQUFLLEVBVXBFLCtIQUFLIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL25hdmJhci9jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3Rob21hc2dyZWNvL3RncmVjb2pzLXN0YXRpYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4uL3NoYXJlZC9tb2RhbCc7XG5jb25zdCB0b2dnbGVMaW5rc0ZuID0gKCkgPT4ge1xuICBjb25zdCBsaW5rc0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hcnJvd0xpbmtzJyk7XG4gIGlmIChsaW5rc0VsLnN0eWxlLmRpc3BsYXkgPT09ICdibG9jaycpIHtcbiAgICBsaW5rc0VsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH0gZWxzZSB7XG4gICAgbGlua3NFbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgfVxufTtcblxuY29uc3QgTmF2Q29tcG9uZW50ID0gKHsgdG9nZ2xlTGlua3MgPSB0b2dnbGVMaW5rc0ZuIH0pID0+XG4gIDxuYXY+XG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgbmF2IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4NiwxNTYsMTgzKTtcbiAgICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsc2FuLXNlcmlmXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB0b3A6IDA7XG4gICAgICBwYWRkaW5nOiAxZW07XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzQ5NzY4YztcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuICAgIGEge1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xuICAgIH1cbiAgICBhOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICB9XG4gICAgYTp2aXNpdGVkIHtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbiAgICAubmF2V2lkZSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuICAgIC5uYXZXaWRlIC53aWRlRGl2IHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLm5hdldpZGUgLndpZGVEaXYgYSB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBwYWRkaW5nOiAwIDJlbTtcbiAgICB9XG4gICAgLm5hdk5hcnJvdyBpIHtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuICAgIC5uYXZOYXJyb3cgLm5hcnJvd0xpbmtzIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5uYXZOYXJyb3cgLm5hcnJvd0xpbmtzIGEge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIGNsZWFyOiBsZWZ0O1xuICAgICAgcGFkZGluZzogMC41ZW0gMDtcbiAgICB9XG4gICAgLndpZGVEaXYge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcbiAgICAgIC5uYXZXaWRlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgICAubmF2TmFycm93IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIGB9XG4gICAgPC9zdHlsZT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdldpZGVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZURpdlwiPlxuICAgICAgICA8TGluayBocmVmPXtgL2B9PlxuICAgICAgICAgIDxhPkJsb2dyb2xsPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9e2AvY29udGFjdGB9IGFzPXtgL2NvbnRhY3RgfT5cbiAgICAgICAgICA8YT5Db250YWN0IE1lPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxhPjxpZnJhbWVcbiAgICAgICAgICBzcmM9XCJodHRwczovL3BsYXRmb3JtLnR3aXR0ZXIuY29tL3dpZGdldHMvZm9sbG93X2J1dHRvbi5odG1sP3NjcmVlbl9uYW1lPXRncmVjb2pzJnNob3dfc2NyZWVuX25hbWU9ZmFsc2Umc2hvd19jb3VudD1mYWxzZSZzaXplPWxcIlxuICAgICAgICAgIHRpdGxlPVwiRm9sbG93IFR3aXR0ZXJEZXYgb24gVHdpdHRlclwiXG4gICAgICAgICAgd2lkdGg9XCI4MFwiXG4gICAgICAgICAgaGVpZ2h0PVwiMzBcIlxuICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogJzAnLCBvdmVyZmxvdzogJ2hpZGRlbicgfX1cbiAgICAgICAgLz48L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdk5hcnJvd1wiPlxuICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYmFycyBmYS0yeFwiIG9uQ2xpY2s9eygpID0+IHRvZ2dsZUxpbmtzKCl9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hcnJvd0xpbmtzXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9e2AvY29udGFjdGB9IGFzPXtgL2NvbnRhY3RgfT5cbiAgICAgICAgICA8YT5Db250YWN0IE1lPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGEgb25DbGljaz17dG9nZ2xlTGlua3N9PkhvbWU8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPGE+XG4gICAgICAgICAgPGlmcmFtZVxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9wbGF0Zm9ybS50d2l0dGVyLmNvbS93aWRnZXRzL2ZvbGxvd19idXR0b24uaHRtbD9zY3JlZW5fbmFtZT1Ud2l0dGVyRGV2JnNob3dfc2NyZWVuX25hbWU9ZmFsc2Umc2hvd19jb3VudD1mYWxzZSZzaXplPWxcIlxuICAgICAgICAgICAgdGl0bGU9XCJGb2xsb3cgdGdyZWNvanMgb24gVHdpdHRlclwiXG4gICAgICAgICAgICB3aWR0aD1cIjgwXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjMwXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogJzAnLCBvdmVyZmxvdzogJ2hpZGRlbicgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2E+XG4gICAgICAgIDxhIG9uQ2xpY2s9e3RvZ2dsZUxpbmtzfT5DbG9zZSBNZW51PC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvbmF2PjtcblxuZXhwb3J0IGRlZmF1bHQgTmF2Q29tcG9uZW50O1xuIl19 */\n/*@ sourceURL=src/components/navbar/component.js */'
  }), _react2.default.createElement('div', { className: 'navWide', 'data-jsx': 1396458282,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    }
  }, _react2.default.createElement('div', { className: 'wideDiv', 'data-jsx': 1396458282,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    }
  }, _react2.default.createElement(_link2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    }
  }, _react2.default.createElement('a', {
    'data-jsx': 1396458282,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    }
  }, 'Blogroll')), _react2.default.createElement(_link2.default, { href: '/contact', as: '/contact', __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    }
  }, _react2.default.createElement('a', {
    'data-jsx': 1396458282,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    }
  }, 'Contact Me')), _react2.default.createElement('a', {
    'data-jsx': 1396458282,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    }
  }, _react2.default.createElement('iframe', {
    src: 'https://platform.twitter.com/widgets/follow_button.html?screen_name=tgrecojs&show_screen_name=false&show_count=false&size=l',
    title: 'Follow TwitterDev on Twitter',
    width: '80',
    height: '30',
    style: { border: '0', overflow: 'hidden' },
    'data-jsx': 1396458282,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    }
  })))), _react2.default.createElement('div', { className: 'navNarrow', 'data-jsx': 1396458282,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    }
  }, _react2.default.createElement('i', { className: 'fa fa-bars fa-2x', onClick: function onClick() {
      return toggleLinks();
    }, 'data-jsx': 1396458282,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    }
  }), _react2.default.createElement('div', { className: 'narrowLinks', 'data-jsx': 1396458282,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    }
  }, _react2.default.createElement(_link2.default, { href: '/contact', as: '/contact', __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    }
  }, _react2.default.createElement('a', {
    'data-jsx': 1396458282,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    }
  }, 'Contact Me')), _react2.default.createElement(_link2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    }
  }, _react2.default.createElement('a', { onClick: toggleLinks, 'data-jsx': 1396458282,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    }
  }, 'Home')), _react2.default.createElement('a', {
    'data-jsx': 1396458282,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    }
  }, _react2.default.createElement('iframe', {
    src: 'https://platform.twitter.com/widgets/follow_button.html?screen_name=TwitterDev&show_screen_name=false&show_count=false&size=l',
    title: 'Follow tgrecojs on Twitter',
    width: '80',
    height: '30',
    style: { border: '0', overflow: 'hidden' },
    'data-jsx': 1396458282,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    }
  })), _react2.default.createElement('a', { onClick: toggleLinks, 'data-jsx': 1396458282,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    }
  }, 'Close Menu'))));
};

exports.default = NavComponent;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/thomasgreco/tgrecojs-static/src/components/navbar/component.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/thomasgreco/tgrecojs-static/src/components/navbar/component.js"); } } })();

/***/ }),

/***/ 589:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(36);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(12);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(13);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(37);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(38);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _reactModal = __webpack_require__(590);

var _reactModal2 = _interopRequireDefault(_reactModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/thomasgreco/tgrecojs-static/src/components/shared/modal.js';


var customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

var _class = function (_Component) {
  (0, _inherits3.default)(_class, _Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this));

    _this.state = {
      modalIsOpen: false
    };

    _this.openModal = _this.openModal.bind(_this);
    _this.afterOpenModal = _this.afterOpenModal.bind(_this);
    _this.closeModal = _this.closeModal.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(_class, [{
    key: 'openModal',
    value: function openModal() {
      this.setState({ modalIsOpen: true });
    }
  }, {
    key: 'afterOpenModal',
    value: function afterOpenModal() {
      // references are now sync'd and can be accessed.
      this.subtitle.style.color = '#f00';
    }
  }, {
    key: 'closeModal',
    value: function closeModal() {
      this.setState({ modalIsOpen: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement('button', { onClick: this.openModal, __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, 'Open Modal'), _react2.default.createElement(_reactModal2.default, {
        isOpen: this.state.modalIsOpen,
        onAfterOpen: this.afterOpenModal,
        onRequestClose: this.closeModal,
        style: customStyles,
        contentLabel: 'Example Modal',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement('h2', { ref: function ref(subtitle) {
          return _this2.subtitle = subtitle;
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, 'Hello'), _react2.default.createElement('button', { onClick: this.closeModal, __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, 'close'), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, 'I am a modal'), _react2.default.createElement('form', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement('input', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }), _react2.default.createElement('button', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, 'tab navigation'), _react2.default.createElement('button', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, 'stays'), _react2.default.createElement('button', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, 'inside'), _react2.default.createElement('button', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, 'the modal'))));
    }
  }]);

  return _class;
}(_react.Component);

exports.default = _class;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/thomasgreco/tgrecojs-static/src/components/shared/modal.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/thomasgreco/tgrecojs-static/src/components/shared/modal.js"); } } })();

/***/ }),

/***/ 597:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = [{ "title": "Unit Testing ReactJS | Tape vs. Jest", "description": "After recently switching my unit tests from Tape to using Jest I decided to write a post on some of my experiences while teaching readers a lesson on testing!", "slug": "tape-jest-testing", "author": "Thomas Greco", "date": "2017-9-05 15:00 PDT", "tags": ["ReactJS", "Testing"], "body": "\n\n## Getting Acquainted with Jest\n### Intro\nLike any developer, my preference of tools has been built pretty much entirely on my past experiences. If i’m not using the tool and it’s known to be an aid to developers then there’s a good chance i’m uninformed on the topic. This was particularly true with Jest, which has become the most widely used library for testing ReactJS applications, so I thought it would be wise to explore the topic a little bit in a blog post. In this post, I want to share my feedback about recently using Jest while contributing to the next-static project.  \n\nI recently ended up pivoting from a dynamic web application to a static site for tgrecojs.com. next-static and the solution has worked A1 so I ended up contributing to the project. The first order of business was to write some tests for this project so I dove right in. Throughout 2017 I received a ton of experience writing unit tests for ReactJS apps but I always used tape so it was no shock that I initially gravitated to my normal dev environment for writing tests.\n\n### Reading the Unit Test\nA few minutes after getting my environment set up I had the boilerplate for my first `test.js` file all ready to go. \n\nBelow, we can see the code submitted in [initial pull request](https://github.com/infiniteluke/next-static/pull/9/commits/006dbe18a2b80f25f9b4d95c090e940da09f09f7).\n\n```javascript\n// imports….\n// set up for test scope\ntest('<Post />', nest => {\n  nest.test('given no props', assert => {\n    const msg = `should render a post`;\n\n    const props = makeProps();\n    const re = RegExp(props);\n\n    const el = <Post {...props} />;\n\n    const $ = dom.load(render(el));\n    const output = $('.post').html();\n    const actual = re.test(output);\n    const expected = true;\n\n    assert.same(actual, expected, msg);\n    assert.end();\n  });\n});\n```\n\nOnce ran, this log for this test would look like the image below.\n\n![tap](https://s26.postimg.org/7glcfzwjd/TAP-_OUTPUT.png)\n\nIsn’t that pretty? I’m a sucker for some good TAP which tape produces. Little did I know that I was taking it for granted but more on that in a moment. At this point, I finally had something that I could confidently push over to the next-static repo. About a day later, I received this remark from the project owner.\n\n![next static issue](https://s26.postimg.org/a0gza3k3d/Screen_Shot_2017-09-05_at_1.03.05_AM.png)\n\nBut of course! Why was I using this stone-age technology when I could just plug in Jest!? All kidding aside I wasn’t surprised by this. I know how crazy important of a tool Jest has become to so many developers and I was just excited to dive into the framework.\n\n### Becoming one with Jest\nI knew that migrated this super basic test wasn’t going to be hard. I just needed to know how my test was to be set up.\n\nI initially had the project's `test` script to fire off the [babel-cli](https://www.npmjs.com/package/babel-cli)  and run any tests that has been imported inside of an entry point file, which in my case was [`index.test.js`](https://github.com/infiniteluke/next-static/pull/9/commits/006dbe18a2b80f25f9b4d95c090e940da09f09f7#diff-275a6743b2ff7d68e3d76f3462691716). Because I was now relying on Jest, I could remove this file and I could also change the `test` script to `jest`. Once that was in place, Jest was pretty much ready to go. \n\nOne of Jest’s marquee behaviors is it’s ability to magically runs tests as long as they are either:\n* in *.test.js or *.spec.js\n* they are in a tests folder.\n\nAt the time of writing my test, I wasn’t even aware of this criteria however my code was inside [test.js](https://github.com/infiniteluke/next-static/blob/master/src/components/Post/test.js) file so everything worked out great. Additionally, I could completely eliminate that main index.test.js file as the `jest` command would navigate to the tests on its own. Once inside these tests, Jest will look for specific global variables that it provides users with for writing tests. In my case, I had to swap out `test` for Jest's `describe` function which will signify that a test suite has been created.\n\n> \"In your test files, Jest puts each of these methods and objects into the global environment. You don't have to require or import anything to use them.\"\n - [Jest Docs on Globals](https://facebook.github.io/jest/docs/en/api.html)\n\n\nThese globals are what allow Jest to magically run our tests without needing us to any code. I don’t want to be over critical of an extremely well known tool like Jest however I became very conscious of polluting my global scope throughout the last year. Yes, even in regards to testing. Over time, I became super comfortable with importing tape directly. It only took a write an import statement (I could add to a VS code snippet if I really needed to) and I feel comfort in knowing my test code is completely self-contained and free from outside bugs. Now, I don’t want to make it seem like i’m nitpicking here. This is merely my feedback on the library. That being said, I think that this no set-up configuration could allows testing to get off the ground as soon as possible.\n\n\nSure enough, I ran my tests and saw that Jest was picking up on my code. I didn’t know the .test or .spec criteria at this time but my tests already fell in line with the criteria necessary. I modified my code to fit Jest’s syntax, and my unit test looked like the following.\n\n```javascript\ndescribe('<Post /> with no args', () => {\nit('should render a post with default args', () => {\nconst props = makeProps();\nconst re = RegExp(props);\n\nconst el = <Component {...props} />;\n\nconst $ = loadComponent(el);\n\nconst output = $('.post').html();\nconst actual = re.test(output);\nconst expected = true;\n\nexpect(actual).toEqual(expected);\n    });\n});`\n```\n\nAs you can see, my test no longer has the `assert` call back that was used with Tape. Instead, we see Jest’s `expect` function to create test assertions. Specifically, we see `expect` asserting that the `actual` value is equal to the `expected` value using `toEqual`. As you can see, migrating this test really didn’t take much and it felt good know that I could have certainly migrated any test’s I’ve written to use Jest without any sort of conflict. Same concepts just different libraries. I love sinking my teeth into knew technologies (especially if I can undertand them from the jump) so it felt good to have my tests now passing with Jest. \n<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/8QXkTFKrW5U\" frameborder=\"0\" allowfullscreen></iframe>\n\n### You had one job\nA day after pushing my newly committed Jest’ test to the next-static repo, I was informed that I failed to fully understand what was being asked of me. I produced a unit test but I really needed to create a snapshot test. Great! Now that I correctly identified the objective, I just needed to find out what exactly a snapshot test was.\n\n### Enter Snapshot Testing\nAs it’s name suggests, a snapshot test will take a `snapshot` of a component each time a test is run. If there is an existing snapshot, Jest will compare the two to make sure that nothing in our UI has changed unexpectedly. This is meant to provide developers with instant feedback of their UI. Whereas unit test assertions are meant to test a specific behavior, snapshot tests allow us to monitor trivial modifications in our UI. \n\nTo accomplish this, we use the `react-test-renderer` library’s `.toMatchSnapshot()` method. Once this is set up, Jest will compare the snapshot of our component to any previous snapshot’s and test their contents are the same. \n\n```javascript\ndescribe('Snapshot::<Post />s', () => {\nit('should render the contents of the component.', () => {\nconst props = makeProps();\nconst el = <Component {...props} />;\n\nconst tree = renderer.create(el).toJSON();\n\nexpect(tree).toMatchSnapshot();\n    });\n});\n```\n\nBelow is the exact snapshot Jest created for the `<Post/>` component. I’m not going to explain each line but you should be able to easily reason about what the UI should render. \n\n```javascript\n// Jest Snapshot v1, https://goo.gl/fbAQLP\n\nexports[`Snapshot::<Post />s should render the contents of the component. 1`] = `\n<article\n  className=\"post Post__Article-s1eculme-0 fQItYZ\"\n  itemScope={true}\n  itemType=\"http://schema.org/BlogPosting\";\n>\n  <header>\n    <a\n      href=\"/post/test-post\"\n      onClick={[Function]}\n    >\n      <h1\n        className=\"post--title\"\n        itemProp=\"headline\"\n      >\n        Hello\n      </h1>\n    </a>\n    <footer\n      className=\"post--info\"\n    >\n      <span>\n        <time\n          dateTime=\"7/22/2017\"\n          itemProp=\"datePublished\"\n        >\n          about 1 month ago\n        </time>\n      </span>\n      <span\n        itemProp=\"author\"\n      >\n        User\n      </span>\n    </footer>\n  </header>\n  <div\n    className=\"post--body\"\n    dangerouslySetInnerHTML={\n      Object {\n        \"__html\": \"<p>lorem ipsum is the name making tests is this game</p>\n      \",\n      }\n    }\n  />\n  <footer>\n    <small\n      className=\"post--tags\"\n    >\n      <span>\n        Filed under: \n      </span>\n      <span\n        className=\"post--tag\"\n        itemProp=\"keywords\"\n      >\n        <a\n          href=\"/tag/javascript\"\n          onClick={[Function]}\n        >\n          javascript\n        </a>\n        , \n      </span>\n      <span\n        className=\"post--tag\"\n        itemProp=\"keywords\"\n      >\n        <a\n          href=\"/tag/angular\"\n          onClick={[Function]}\n        >\n          angular\n        </a>\n        \n      </span>\n    </small>\n  </footer>\n</article>\n`;\n```\n\nAs you can see, Jest has created a readable representation of our UI. From this point forward, any future implementations of `<Post/>` will be tested against this snapshot. To get a better understanding of this, let’s see what happens when we remove the `<footer>` from our `Post` component and run our snapshot test. \n\n![jest snapshot ss](https://s26.postimg.org/o2ybbc03d/Screen_Shot_2017-09-04_at_5.01.48_PM.png)\n\nTaking a look at this image, we see that Jest is expecting the `<footer>` div and it can’t find it inside our component. As a result of this, we see the`-` sign thus signifying that the code block has been removed from the file.   If I was instructed to remove this footer, I would acknowledge this change and run `jest -u` to update my snapshot but I wasn’t. Instead, I was creating the initial snapshot for this component and therefore I didn’t have to worry about prior snapshots. The fact that I had created the starting point for futures tests was good enough.\n\n\n![jest update snapshot ss](https://s26.postimg.org/xdf0sm06v/Screen_Shot_2017-09-04_at_5.06.21_PM.png)\n\nAt this point I was further seeing seeing the benefits that Jest bring to a project but I haven’t been completely sold on it being the end all be all of testing solutions. It’s meant to run super quickly but I found that my tests actually ran a bit quicker with tape which would make sense due to how lightweight tape is. \n\nAdditionally, tape allows me to use TAP. Call me old-fashioned but TAP has been around since the 1980’s. That’s older than me and technologies that have lasted this long are usually etched in stone for good reason. I haven’t personally tried to integrate a custom TAP reporter with Jest but from what i’ve gathered it’s fairly difficult task. Is this the end of the world? No. Not at all but it’s worth noting. On the other hand, when the `—watch` flag is used, Jest offers a pretty cool interface that makes running specific tests a breeze. `—watch` keeps Jest running after creating snapshot tests and offer us the ability to update our previous snapshots by just pressing `u`.\n\n\n\n### Final Words\nThere’s no denying that Jest makes it easy to get begin testing code. In fact, easy is putting it lightly. As I just mentioned, it was so easy that I was initially a bit confused as to how this was supposed to work but the point is that it did indeed work. Aside from the globabl varables and not being able to easily print test results in TAP and the global variables, I have no qualms about the effectiveness of Jest. On the contrary, I am really excited to see what else Jest has to offer as I know that this isn't the last I will see of it!\n" }, { "title": "5 (of the many things) to love about Next.js", "description": "Next.js continues to be considered a “win” amongst a number of developers everywhere. (If you couldn't guess, I am one of them!) To help shine light on some of the reasons why I love the framework, I dediced to put together a series of posts on the topic. In this first one, I'm going to cut right to the chase and shed light on a few of the amazing things that Next.js makes possible.", "slug": "next-js-part1", "author": "Thomas Greco", "date": "2017-8-29 20:00 EST", "tags": ["ReactJS", "nextjs"], "body": "\n\n[Next.js](https://zeit.co/blog/next) continues to be considered a “win” amongst a number of developers everywhere. If you couldn't guess, I am one of them! To help shine light on some of the reasons why I love the framework, I dediced to put together a series of posts on the topic. In this first one, I'm going to cut right to the chase and shed light on a few of the amazing things that Next.js makes possible.\n\n\n### Ease of Use\n\nAnyone who has used the technology will tell you how easy it is to get started building a project with Next.js. You can have an app running as quickly as you’re computer can install the required packages... seriously.\n\nBelow is all that’s needed to create the shell for an app.\n\n```bash\nnpm init -y # creates package.json\nnpm install react react-dom next # self explanatory\nmkdir pages && touch pages/index.js\n```\n\nGranted that you’re package.json’s `script`'s object has been [modified correctly](https://github.com/zeit/next.js/#setup), you can paste the code below into the `pages/index.js`, run `npm run dev` and watch you’re application come to life.\n\n```javascript\nimport React from 'react';\n\nexport default ({title = 'How tight is this next.js thing?'}) => <h2>{title}</h2>;\n```\n<code>pages</code> acts as our router in Next.js. If we added the same code toa new file named `pages/about.js` and then visited `localhost:3000/about`, we'll see that our component is displayed and Next.js took care of the routing for us! Now let's continue on to some more cool stuff.\n\n\n### Automatic Code Splitting\n\nAny programmer in the now will tell you how important code splitting is to ensure an application’s performance is optimal. As it’s name suggests, [code splitting](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=3&cad=rja&uact=8&ved=0ahUKEwiMpYm24JHWAhXFSyYKHR-VAk4QFggyMAI&url=https%3A%2F%2Fwebpack.github.io%2Fdocs%2Fcode-splitting.html&usg=AFQjCNHoevmMDgzx9nVy7XMvPx5xusQ3Kg) allows us to *split* our application code up into a series of lightweight bundles. Instead of loading all of our JavaScript, our application will only load the bundle needed. Webpack is the tool most associated with this process. Instead of having to configure webpack to perform this, we can rely on Next.js! Let' get a better understanding of how this is accomplished so we can better understand what's going on. \n\nBelow shows an example of the `.next` directory created from running `next build`. \n\n![nextjs build directory](https://s3.postimg.org/p628izu1f/Screen_Shot_2017-08-23_at_2.52.45_AM.png)\n\nInside `.next` we see the `bundles` folder. When our `next build` runs, it uses webpack to generate bundles based on our app's `pages` directory. `pages` acts as a file system which allows Webpack easily target this directory and succeed in bundling our code without us having to do a thing. Additionally, application will load the `index.js` bundle when a visiter hits the `/` route. If a user then visits `/blog` route then the `index.js` bundle will be swapped in for the `blog.js` bundle.\n\n### Prefetching\n\nPrefetching picks off where code splitting leaves off. Next.js allows all of our optimized bundles of code to be lazily-loaded behind the scenes. \n\nTo harness the benefits of prefetching, all users need to do is add the `prefetch` attribute to their Link components.\n\n```javascript\n// Will NOT prefetch route\n<Link href=\"/blog\" />\n// Will have response cached and ready to go :)\n<Link prefetch href=\"/blog\" />\n```\n\nWhen next.js sees `prefetch`, it will provide a ServiceWorker for the corresponding route which will load all of the JavaScript behind the scenes. I, [along with other developers](https://github.com/zeit/next.js/issues/740), was initially under the impression that this magic `prefetch` attribute would wire up a service worker that would cache my applicaton's blog posts. After all, I linked to them with `prefetch`! It turns out that this is actually better that we must wire up our own service worker to perform this. It's also a tremendous example of how the tools Next.js provides users with are so crucial yet till pretty unonpinionated. Next.js wants nothing to do with how you handle your data. They just want to supply the tools needed for you to handle it in the best manner.\n\n### Server Side Rendering\nI still haven’t covered the fact that Next.js allows all of our application code to utilize server side rendering (SSR), thus providing the [benefits that come with this](https://medium.com/walmartlabs/the-benefits-of-server-side-rendering-over-client-side-rendering-5d07ff2cefe8). By employing SSR, we…\n\n* eliminate the need for the client to download code by having the HTML ready in the response. \n* can provide users with an initial render of the the application’s view while loading the code in the background.\n* deploy SEO friendly applications that are both Indexable and crawlable.\n* do countless more awesome things with JavaScript.\n\nAdditionally, Next.js makes it super easy to define custom routes on the server using a framework of your choice or, if you’d like, you can roll your own server. Like many JavaScript developers, I have a lot of experience using ExpressJS so I was able to apply this knowledge to create a custom backend with just a few lines of code. \n\nBy taking a look at the [projects repo](https://github.com/zeit/next.js/tree/v3-beta/examples), you will see a slew of examples with frameworks like Express, Koa, and Hapi, further showing how extendable Next.js truly is. Next.js simply provides all of these amazing benefits and let’s the developer pick and choose how they want to harnesss them. \n\n### HMR and Error Reporting\nThe effectiveness of [Hot-module replacement](https://webpack.github.io/docs/hot-module-replacement.html) (HMR) has made it a must-have for the development process. Instead of reloading an entire application when code is changed, HMR will only recreate modules that have been altered. Webpack’s homepage describes the practice as “Livereload for every module” so as you can image, this allows next.js to come equipped with a high-powered development process but it doesn’t stop there. Users will quickly learn about the amazing error messages that Next.js immediately renders to the browser whenever code is in correct. \n\nYes, you’ve heard that correct. I said “amazing error messages”. Surely I must be crazy. Well, take a look for yourself. I’ve recorded a quick clip of this in action. \n\n<div style=\"display: flex; justify-content: center\">\n<iframe src=\"https://giphy.com/embed/3ov9jYfehcX86yv4xa\" width=\"480\" height=\"281\" frameBorder=\"0\"allowFullScreen></iframe>\n</div>\n\nAt first we see the application being rendered correctly in the browser. To demonstrate Next.js’ ability then see an error as a result of me removing the `>` symbol from my JSX. No matter how small, these errors can cause serious headaches due to all sorts of nonsense so I thought this provided a good example of Next.js instantly picking up the error and it doesn’t stop pinpoints the file and even the line on which this error is occurring thus making tracking down bugs a breeze. Every developer knows the struggle of spending more time than they’d be willing to admit on finding a bug, only to find out that the issue was embarrassingly trivial. Next.js eliminates this problem and allows developers to work with great efficiency. \n\n### Final thoughts\nHopefully by now you’re beginning to realize how powerful of a framework Zeit has created with Next.js. In my next post, i'm going to dive deeper into Next.js and in particular, my experiences working it. In the meantime, I highly recommend you checking out yet another home-run that Zeit has released to the people! \n\n##### Additional Resources\n* [Next.js Repo](https://github.com/zeit/next.js)\n* [Learn Next.js -- Awesome for beginners!!!](learnnextjs.com)\n* [Zeit Blog - Next.js 3](https://zeit.co/blog/next3)\n* [Zeit Slack](https://zeit.chat/)\n* [awesome-nextjs](https://github.com/unicodeveloper/awesome-nextjs)\n" }, { "title": "The Benefits of Using Functional Stateless Components in ReactJS", "description": "This article takes a look at Functional Stateless Components which React released in v0.14. Since then, they've made a huge impact in the community by providing users with a cleaner syntax that allows for us to write more declarative code. To show why this is so helpful, this article will take a look at stateless components and finish up with some unit tests.", "slug": "pure-components", "author": "Thomas Greco", "date": "2017-8-22 15:00 PDT", "tags": ["ReactJS", "Testing"], "body": "\n\n### Understanding Outcomes with Pure Components\nUse of Stateless Functional Components (a.k.a. “pure” or “dumb” components) in ReactJS continues to grow since first being released in React 0.14, and for good reason. By relying on pure components, developers end up writing reusable code thats extremely easy to test, thus leading to better application architecture. Why? A functional stateless component is merely a factory function used to create a react component. Personally, I like the term “pure component” because its indicative of what the code really is — a pure function sprinkled with some JSX.\n\n> \"A pure function is a function which:\nGiven the same input, will always return the same output.\nProduces no side effects.\nRelies on no external mutable state.\" </br>\n> Eric Elliott, Master the JavaScript interview: [What is a Pure Function](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976)\n\nEquipped with the right amount of tests, the use of pure functions can help bring peace of mind to developers by ensuring that any scenario that has been tested will not have an unintended result in the application. As you can imagine, this can go along way when building large scale applications. It should also come as no surprise to know that pure functions are the heart of Redux which relies on JavaScript’s [`reduce`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=a) function. \n\nIn an upcoming post, i’ll go into further detail on how reduce works. For now, I want to continue on with the idea of writing “bullet-proof” React components using pure functions. To best illustrate this, i’m going to show some code that shows a react child component.\n\n```javascript\n// Post.js\nconst Post = ({ title, content }) =>\n<div className=\"post\">\n<h2>{title}</h2>\n<p>{content}</p>\n</div>;\n```\n\nThe clean nature of these components make it extremely easy to reason about the code. In this case, we see the that `Post` is just a function that takes title and content props and then uses these props to produce an element. You may often see `props` being passed in as a parameter but i’ve utilized ES6 [destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment). By doing so, my we’re able to pull specific values out of the `props` object and access `props.title` and `props.content` without using [dot notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors).\n\nPersonally, I think that this is awesome as it removes any mystery about the `props` being passed into a component. In programming, mystery is never good a thing so this allows us to read code than others can more easily reason about, especially as components become more large!\n\n### Why this is important\nAlthough this component may not look like much, it could very well play an integral part of an application. For instance, let's imagine `<Post/>` renders articles in for a website that has over a million daily users. If that's the case, then we will likely rather these smaller, cohesive blocks of code as they allow us to easily hammer out every last detail! You’ll also find that pure components make modifications a breeze and also result in writing code that can be easily ported into other projects. In addition to these benefits, pure components also make it extremely easy to test them with any crazy props that you wish. Like a pure function, pure components will always map the same input to the same output therefore **If we can think of the scenario, we can test how our component will react**.\n\n\n#### Diving into Unit Tests\nAs we just saw, the code for functional components provide us awesome intel on with everything we need to know in order to write effective tests. To best illustrate this, i’m going to take you through the code block below which is a unit test of the `<Post />` component.   \n\n```javascript\n// Post.test.js\nimport test from 'tape';\nimport dom from 'cheerio';\nimport Post from './Post';\nimport { renderToStaticMarkup } from 'react-dom';\n\ntest('<Post /> ', assert => {\nconst msg = 'should render a post with a title and content';\n// define preexisiting conditions\nconst props = {\ntitle: 'I am the title',\ncontent: 'I am the content!!!!!! Woooooooo!'\n};\nconst checkProps = RegExp(props);\n\nconst el = <Post {props} />\nconst $ = dom.load(render(el));\nconst output = $('post').html();\n\nconst actual = checkProps.test(output);\nconst expected = true;\n\nassert.same(actual, expected, same);\nassert.end()\n})\n```\n\nDon’t worry if the code above is a bit confusing to you. It will all make sense soon. \n\n\n### Step 1 - Set up pre-existing conditions\nIn this instance, we know that `<Post />` takes a `title` and a `content` prop so we can test this by simply passing in these values to a `props` variable. Once we’ve assigned the props we want to test, we can use JavaScript's `Regex` function to create another variable, `checkProps`, that will make sure the component being tested contains the props it is being given. \n\n```javascript\n// post.test.js\nconst props = {\ntitle: 'I am the title',\ncontent: 'I am the content!!!!!! Woooooooo!'\n};\nconst checkProps = RegExp(props);\n```\n\n### Step 2 - Render the HTML from `<div class=\"post\">`\nFollowing this, we then see the use of cheerio to render our component. Cheerio allows us to traverse and manipulate the DOM using its API. Additionally, Cheerio is lighting fast and as a result of that, it’s at the heart of popular libraries like [enzyme](https://github.com/airbnb/enzyme/blob/master/docs/api/render.md).\n\nTaking a look into our code, we can use cheerio's `.load` method to render our react element. From there, we simply pass in the selector of the contents which we want to check. In our case, it's the `.post` class Following our selector, we then see cheerio’s `.html()` method which will render the content from our selector and allow us to check for our component’s props.\n\n```javascript\n// Set up cheerio\nconst el = <Post {...props} />\nconst $ = dom.load(render(el));\nconst output = $(‘.post').html();\n```\n\n#### Step 3 - Test the props\nThe last thing we need to do is check the props of our `output` variabe. To do this, we have an `actual` value which will check to see if our component passes our `checkProps` test. If it does, that means the `actual` value will return `true` and give us a passing test!\n\n```javascript\nconst actual = checkProps.test(output);\nconst expected = true;\n// asserts that actual and expected are equal\nassert.same(actual, expected, msg);\n// ends assertion test\nassert.end();\n```\n\n#### Step 4 - Celebrate (Final Words)\nAwesome! You’ve made it to the end. Hopefully by now you’ve got a good understanding of how functional stateless components work in React. Personally, I can’t get enough of them and I hardly every try to use classes in my code. Why use `this` if you don’t need to? :)\n\n\n\n\n\n\n" }];

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/thomasgreco/tgrecojs-static/posts/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/thomasgreco/tgrecojs-static/posts/index.js"); } } })();

/***/ }),

/***/ 598:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(553);

var _link2 = _interopRequireDefault(_link);

var _styledComponents = __webpack_require__(228);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

__webpack_require__(599);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/thomasgreco/tgrecojs-static/src/components/Card/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/thomasgreco/tgrecojs-static/src/components/Card/index.js"); } } })();

/***/ }),

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/thomasgreco/tgrecojs-static/types/post.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/thomasgreco/tgrecojs-static/types/post.js"); } } })();

/***/ }),

/***/ 600:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(112);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(36);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(12);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(13);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(37);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(38);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _googleAnalytics = __webpack_require__(601);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/thomasgreco/tgrecojs-static/src/components/HOCs/GoogleAnalytics.js';


var withGA = function withGA(ComposedComponent) {
  return function (_Component) {
    (0, _inherits3.default)(HOC, _Component);

    function HOC() {
      (0, _classCallCheck3.default)(this, HOC);

      return (0, _possibleConstructorReturn3.default)(this, (HOC.__proto__ || (0, _getPrototypeOf2.default)(HOC)).apply(this, arguments));
    }

    (0, _createClass3.default)(HOC, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (!window.GA_INITIALIZED) {
          (0, _googleAnalytics.initGA)();
          window.GA_INITIALIZED = true;
        }
        (0, _googleAnalytics.logPageView)();
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(ComposedComponent, (0, _extends3.default)({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        }));
      }
    }]);

    return HOC;
  }(_react.Component);
};

exports.default = withGA;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/thomasgreco/tgrecojs-static/src/components/HOCs/GoogleAnalytics.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/thomasgreco/tgrecojs-static/src/components/HOCs/GoogleAnalytics.js"); } } })();

/***/ }),

/***/ 601:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logException = exports.logEvent = exports.logPageView = exports.initGA = undefined;

var _reactGa = __webpack_require__(602);

var _reactGa2 = _interopRequireDefault(_reactGa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initGA = exports.initGA = function initGA() {
  console.log('GA init');
  _reactGa2.default.initialize('UA-105994309-1');
};

var logPageView = exports.logPageView = function logPageView() {
  console.log('Logging pageview for ' + window.location.pathname);
  _reactGa2.default.set({ page: window.location.pathname });
  _reactGa2.default.pageview(window.location.pathname);
};

var logEvent = exports.logEvent = function logEvent() {
  var category = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (category && action) {
    _reactGa2.default.event({ category: category, action: action });
  }
};

var logException = exports.logException = function logException() {
  var description = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var fatal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (description) {
    _reactGa2.default.exception({ description: description, fatal: fatal });
  }
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/thomasgreco/tgrecojs-static/src/lib/googleAnalytics.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/thomasgreco/tgrecojs-static/src/lib/googleAnalytics.js"); } } })();

/***/ })

},[560]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbmZpZy9pbmRleC5qcz9jNzVjOTllIiwid2VicGFjazovLy8uL3NyYy9saWIvdGhlbWUuanM/Yzc1Yzk5ZSIsIndlYnBhY2s6Ly8vLi9wYWdlcz9jNzVjOTllIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC9pbmRleC5qcz9jNzVjOTllIiwid2VicGFjazovLy8uL3R5cGVzL2NvbmZpZy5qcz9jNzVjOTllIiwid2VicGFjazovLy8uL3R5cGVzL3RoZW1lLmpzP2M3NWM5OWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL2luZGV4LmpzP2M3NWM5OWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LmpzP2M3NWM5OWUiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvbmV4dC5qcz9jNzVjOTllIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL2luZGV4LmpzP2M3NWM5OWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvY2VudGVyZWQuanM/Yzc1Yzk5ZSIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9ub25lLmpzP2M3NWM5OWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbmF2YmFyL2NvbXBvbmVudC5qcz9jNzVjOTllIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NoYXJlZC9tb2RhbC5qcz9jNzVjOTllIiwid2VicGFjazovLy8uL3Bvc3RzL2luZGV4LmpzP2M3NWM5OWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC9pbmRleC5qcz9jNzVjOTllIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hPQ3MvR29vZ2xlQW5hbHl0aWNzLmpzP2M3NWM5OWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9nb29nbGVBbmFseXRpY3MuanM/Yzc1Yzk5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgeyB0eXBlIENvbmZpZyB9IGZyb20gJy4uL3R5cGVzL2NvbmZpZyc7XG5cbmNvbnN0IGNvbmZpZzogQ29uZmlnID0ge1xuICBzaXRlTmFtZTogJ3RncmVjb2pzJyxcbiAgc2xvZ2FuOiAnVGhvbWFzIEpvc2VwaCBHcmVjbyBXZWIgQXBwbGljYXRpb24gRGV2ZWxvcGVyJyxcbiAgbGF5b3V0OiAnY2VudGVyZWQnLFxuICB0aGVtZToge1xuICAgIGNvbG9yczoge1xuICAgICAgbWFpbjogJyMyNDI5MkUnLFxuICAgICAgZGFyazogJyMzRjQ0NDgnLFxuICAgICAgbGlnaHQ6ICcjRkFGQkZDJyxcbiAgICAgIGFjY2VudDogJyMwMzY2RDYnLFxuICAgIH0sXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25maWc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb25maWcvaW5kZXguanMiLCJpbXBvcnQgY3JlYXRlVGhlbWUgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMtdGhlbWUnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi8uLi9jb25maWcnO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdENvbG9ycyA9IHtcbiAgbWFpbjogJyM0OTc2OGMnLFxuICBkYXJrOiAnIzAwMDAwMCcsXG4gIGxpZ2h0OiAnI2ZmZmZmZicsXG4gIGFjY2VudDogJyMwMDAwMDAnLFxufTtcblxuY29uc3QgdGhlbWUgPSBjcmVhdGVUaGVtZShcbiAgLi4uT2JqZWN0LmtleXMoY29uZmlnLnRoZW1lID8gY29uZmlnLnRoZW1lLmNvbG9ycyA6IGRlZmF1bHRDb2xvcnMpXG4pO1xuXG5leHBvcnQgZGVmYXVsdCB0aGVtZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvdGhlbWUuanMiLCIvLyBAZmxvd1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IHBvc3RzIGZyb20gJy4uL3Bvc3RzJztcbmltcG9ydCBDYXJkIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0NhcmQvaW5kZXgnO1xuaW1wb3J0IHdpdGhHQSBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9IT0NzL0dvb2dsZUFuYWx5dGljcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhHQShcbiAgTGF5b3V0KFxuICAgICgpID0+XG4gICAgICA8ZGl2PlxuICAgICAgICB7cG9zdHMubWFwKHBvc3QgPT4gPENhcmQga2V5PXtwb3N0LnNsdWd9IHsuLi5wb3N0fSAvPil9XG4gICAgICA8L2Rpdj4sXG4gICAgJ0hvbWUnXG4gIClcbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsIi8vIEBmbG93XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHtcbiAgLy8gc3R5bGVkLFxuICBUaGVtZVByb3ZpZGVyLFxufSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4uLy4uLy4uL2NvbmZpZyc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL0Zvb3Rlcic7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL0hlYWRlcic7XG5pbXBvcnQgeyB0eXBlIFJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9yZXF1ZXN0JztcbmltcG9ydCB7IHR5cGUgTmV4dFBhZ2UgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9uZXh0JztcbmltcG9ydCBMYXlvdXRzIGZyb20gJy4uLy4uL2xheW91dHMnO1xuaW1wb3J0IHsgZGVmYXVsdENvbG9ycyB9IGZyb20gJy4uLy4uL2xpYi90aGVtZSc7XG5pbXBvcnQgTmF2IGZyb20gJy4uL25hdmJhci9jb21wb25lbnQnXG5jb25zdCBMYXlvdXQgPSBMYXlvdXRzW2NvbmZpZy5sYXlvdXQgfHwgJ25vbmUnXTtcblxuZXhwb3J0IGRlZmF1bHQgKFBhZ2U6IE5leHRQYWdlLCB0aXRsZTogc3RyaW5nKSA9PiAoeyAuLi5wcm9wcyB9OiBSZXF1ZXN0KSA9PlxuICA8VGhlbWVQcm92aWRlciB0aGVtZT17Y29uZmlnLnRoZW1lID8gY29uZmlnLnRoZW1lLmNvbG9ycyA6IGRlZmF1bHRDb2xvcnN9PlxuICAgIDxMYXlvdXQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntgJHtjb25maWcuc2l0ZU5hbWV9IC0gJHt0aXRsZX1gfTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8TmF2IC8+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICAgIDxQYWdlIHsuLi5wcm9wc30gLz5cbiAgICAgICAgPC9tYWluPlxuICAgICAgPC9kaXY+XG4gICAgICA8Rm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlclwiIC8+XG4gICAgPC9MYXlvdXQ+XG4gIDwvVGhlbWVQcm92aWRlcj47XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvaW5kZXguanMiLCIvLyBAZmxvd1xuXG5pbXBvcnQgeyB0eXBlIFRoZW1lIH0gZnJvbSAnLi90aGVtZSc7XG5pbXBvcnQgeyB0eXBlIExheW91dCB9IGZyb20gJy4vbGF5b3V0JztcblxuZXhwb3J0IHR5cGUgQ29uZmlnID0ge3xcbiAgK3NpdGVOYW1lOiBzdHJpbmcsXG4gICtzbG9nYW46IHN0cmluZyxcbiAgK2xheW91dD86IExheW91dCxcbiAgK3RoZW1lPzogVGhlbWUsXG58fTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3R5cGVzL2NvbmZpZy5qcyIsIi8vIEBmbG93XG5cbmltcG9ydCB7IHR5cGUgQ29sb3JzIH0gZnJvbSAnLi9jb2xvcnMnO1xuXG5leHBvcnQgdHlwZSBUaGVtZSA9IHtcbiAgK2NvbG9yczogQ29sb3JzLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3R5cGVzL3RoZW1lLmpzIiwiLy8gQGZsb3dcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uLy4uL2xpYi90aGVtZSc7XG5cbmNvbnN0IEZvb3RlciA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4NiwgMTU2LCAxODMpO1xuICBmb250LWZhbWlseTogJ0xhdG8nO1xuICBjb2xvcjogJHt0aGVtZS5saWdodC5saWdodGVuKDAuMyl9O1xuICBhLFxuICBhOnZpc2l0ZWQge1xuICAgIGNvbG9yOiAke3RoZW1lLmxpZ2h0LmxpZ2h0ZW4oMC4zKX07XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+XG4gIDxGb290ZXIgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgPHNtYWxsIGNsYXNzTmFtZT1cImZvb3Rlci0tbWFkZVdpdGhcIj5cbiAgICAgIE1hZGUgd2l0aHsnICd9XG4gICAgICA8c3BhbiByb2xlPVwiaW1nXCIgYXJpYS1sYWJlbD1cImxvdmVcIj5cbiAgICAgICAg4p2k77iPXG4gICAgICA8L3NwYW4+eycgJ31cbiAgICAgIGFuZHsnICd9XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2luZmluaXRlbHVrZS9uZXh0LXN0YXRpY1wiPlxuICAgICAgICBOZXh0IFN0YXRpY3snICd9XG4gICAgICAgIDxzcGFuIHJvbGU9XCJpbWdcIiBhcmlhLWxhYmVsPVwid2l0aCBleHRyYSBzcGFya2xlc1wiPlxuICAgICAgICAgIOKcqFxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2E+XG4gICAgPC9zbWFsbD5cbiAgPC9Gb290ZXI+O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL2luZGV4LmpzIiwiLy8gQGZsb3dcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLWRhbmdlciAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IExvZ28gPSBzdHlsZWQuaW1nYFxuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBtYXJnaW4tdG9wOiAzZW07XG5gO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PlxuICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgIDxMb2dvIHNyYz1cIi9zdGF0aWMvdGctbG9nby5wbmdcIiAvPlxuICAgIDxoMz5Qcm92aWRpbmcgdGhlIGxhdGVzdCBpbiB3ZWIgYXBwbGljYXRpb24gcHJvZ3JhbW1pbmcuPC9oMz5cbiAgPC9kaXY+O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LmpzIiwiLy8gQGZsb3dcblxuaW1wb3J0IHsgdHlwZSBFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdHlwZSBSZXF1ZXN0IH0gZnJvbSAnLi9yZXF1ZXN0JztcblxuZXhwb3J0IHR5cGUgTmV4dFBhZ2UgPSAocHJvcHM6IFJlcXVlc3QpID0+IEVsZW1lbnQ8Kj47XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90eXBlcy9uZXh0LmpzIiwiLy8gQGZsb3dcbmltcG9ydCB0eXBlIHsgRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHR5cGUgTGF5b3V0IH0gZnJvbSAnLi4vLi4vdHlwZXMvbGF5b3V0JztcbmltcG9ydCBjZW50ZXJlZCBmcm9tICcuL2NlbnRlcmVkJztcbmltcG9ydCBub25lIGZyb20gJy4vbm9uZSc7XG5cbmNvbnN0IGxheW91dHM6IHtcbiAgW0xheW91dF06ICgpID0+IEVsZW1lbnQ8Kj4sXG59ID0ge1xuICBjZW50ZXJlZCxcbiAgbm9uZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxheW91dHM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGF5b3V0cy9pbmRleC5qcyIsIi8vIEBmbG93XG5cbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBzcGFjZSA9IDMwO1xuY29uc3QgbWVkaXVtID0gJzcwMHB4JztcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVkLmRpdmBcbiAgLmNvbnRlbnQge1xuICAgIGJhY2tncm91bmQ6ICM0OTc2OGM7XG4gICAgZmxleDogMTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogM3B4O1xuICB9XG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gIC5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW4tc2VyaWY7XG4gICAgbWFyZ2luLXRvcDogMS4yNWVtO1xuICB9XG5cbiAgbWFpbiB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2FuLXNlcmlmO1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAke21lZGl1bX0pIHtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB9XG4gICAgbWFyZ2luOiAke3NwYWNlfXB4IGF1dG87XG4gIH1cblxuICAuaG9tZS1saW5rIHtcbiAgICBtYXJnaW4tbGVmdDogJHtzcGFjZX1weDtcbiAgfVxuXG4gIC5mb290ZXIge1xuICAgIHBhZGRpbmc6ICR7c3BhY2V9cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLnBvc3Qge1xuICAgIG1hcmdpbjogJHtzcGFjZSAvIDJ9cHggJHtzcGFjZX1weCAke3NwYWNlfXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjRlbTtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBoMSB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2NzJweCkge1xuICAgIC5wb3N0IHtcbiAgICAgIG1hcmdpbjogNXB4O1xuICAgIH1cbiAgfVxuYDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9sYXlvdXRzL2NlbnRlcmVkLmpzIiwiLy8gQGZsb3dcblxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlZC5kaXZgXG5cbmA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGF5b3V0cy9ub25lLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vc2hhcmVkL21vZGFsJztcbmNvbnN0IHRvZ2dsZUxpbmtzRm4gPSAoKSA9PiB7XG4gIGNvbnN0IGxpbmtzRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmFycm93TGlua3MnKTtcbiAgaWYgKGxpbmtzRWwuc3R5bGUuZGlzcGxheSA9PT0gJ2Jsb2NrJykge1xuICAgIGxpbmtzRWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfSBlbHNlIHtcbiAgICBsaW5rc0VsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9XG59O1xuXG5jb25zdCBOYXZDb21wb25lbnQgPSAoeyB0b2dnbGVMaW5rcyA9IHRvZ2dsZUxpbmtzRm4gfSkgPT5cbiAgPG5hdj5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICBuYXYge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg2LDE1NiwxODMpO1xuICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJyxzYW4tc2VyaWZcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIHRvcDogMDtcbiAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDk3NjhjO1xuICAgICAgei1pbmRleDogMTtcbiAgICB9XG4gICAgYSB7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgfVxuICAgIGE6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgIH1cbiAgICBhOnZpc2l0ZWQge1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuICAgIC5uYXZXaWRlIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG4gICAgLm5hdldpZGUgLndpZGVEaXYge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAubmF2V2lkZSAud2lkZURpdiBhIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHBhZGRpbmc6IDAgMmVtO1xuICAgIH1cbiAgICAubmF2TmFycm93IGkge1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG4gICAgLm5hdk5hcnJvdyAubmFycm93TGlua3Mge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLm5hdk5hcnJvdyAubmFycm93TGlua3MgYSB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgY2xlYXI6IGxlZnQ7XG4gICAgICBwYWRkaW5nOiAwLjVlbSAwO1xuICAgIH1cbiAgICAud2lkZURpdiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIH1cblxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xuICAgICAgLm5hdldpZGUge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICAgIC5uYXZOYXJyb3cge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgYH1cbiAgICA8L3N0eWxlPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2V2lkZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRlRGl2XCI+XG4gICAgICAgIDxMaW5rIGhyZWY9e2AvYH0+XG4gICAgICAgICAgPGE+QmxvZ3JvbGw8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj17YC9jb250YWN0YH0gYXM9e2AvY29udGFjdGB9PlxuICAgICAgICAgIDxhPkNvbnRhY3QgTWU8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPGE+PGlmcmFtZVxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vcGxhdGZvcm0udHdpdHRlci5jb20vd2lkZ2V0cy9mb2xsb3dfYnV0dG9uLmh0bWw/c2NyZWVuX25hbWU9dGdyZWNvanMmc2hvd19zY3JlZW5fbmFtZT1mYWxzZSZzaG93X2NvdW50PWZhbHNlJnNpemU9bFwiXG4gICAgICAgICAgdGl0bGU9XCJGb2xsb3cgVHdpdHRlckRldiBvbiBUd2l0dGVyXCJcbiAgICAgICAgICB3aWR0aD1cIjgwXCJcbiAgICAgICAgICBoZWlnaHQ9XCIzMFwiXG4gICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiAnMCcsIG92ZXJmbG93OiAnaGlkZGVuJyB9fVxuICAgICAgICAvPjwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2TmFycm93XCI+XG4gICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1iYXJzIGZhLTJ4XCIgb25DbGljaz17KCkgPT4gdG9nZ2xlTGlua3MoKX0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmFycm93TGlua3NcIj5cbiAgICAgICAgPExpbmsgaHJlZj17YC9jb250YWN0YH0gYXM9e2AvY29udGFjdGB9PlxuICAgICAgICAgIDxhPkNvbnRhY3QgTWU8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8YSBvbkNsaWNrPXt0b2dnbGVMaW5rc30+SG9tZTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8YT5cbiAgICAgICAgICA8aWZyYW1lXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL3BsYXRmb3JtLnR3aXR0ZXIuY29tL3dpZGdldHMvZm9sbG93X2J1dHRvbi5odG1sP3NjcmVlbl9uYW1lPVR3aXR0ZXJEZXYmc2hvd19zY3JlZW5fbmFtZT1mYWxzZSZzaG93X2NvdW50PWZhbHNlJnNpemU9bFwiXG4gICAgICAgICAgICB0aXRsZT1cIkZvbGxvdyB0Z3JlY29qcyBvbiBUd2l0dGVyXCJcbiAgICAgICAgICAgIHdpZHRoPVwiODBcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMzBcIlxuICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiAnMCcsIG92ZXJmbG93OiAnaGlkZGVuJyB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGEgb25DbGljaz17dG9nZ2xlTGlua3N9PkNsb3NlIE1lbnU8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9uYXY+O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZDb21wb25lbnQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9uYXZiYXIvY29tcG9uZW50LmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1tb2RhbCc7XG5cbmNvbnN0IGN1c3RvbVN0eWxlcyA9IHtcbiAgY29udGVudDoge1xuICAgIHRvcDogJzUwJScsXG4gICAgbGVmdDogJzUwJScsXG4gICAgcmlnaHQ6ICdhdXRvJyxcbiAgICBib3R0b206ICdhdXRvJyxcbiAgICBtYXJnaW5SaWdodDogJy01MCUnLFxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbW9kYWxJc09wZW46IGZhbHNlLFxuICAgIH07XG5cbiAgICB0aGlzLm9wZW5Nb2RhbCA9IHRoaXMub3Blbk1vZGFsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hZnRlck9wZW5Nb2RhbCA9IHRoaXMuYWZ0ZXJPcGVuTW9kYWwuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlTW9kYWwgPSB0aGlzLmNsb3NlTW9kYWwuYmluZCh0aGlzKTtcbiAgfVxuXG4gIG9wZW5Nb2RhbCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbW9kYWxJc09wZW46IHRydWUgfSk7XG4gIH1cblxuICBhZnRlck9wZW5Nb2RhbCgpIHtcbiAgICAvLyByZWZlcmVuY2VzIGFyZSBub3cgc3luYydkIGFuZCBjYW4gYmUgYWNjZXNzZWQuXG4gICAgdGhpcy5zdWJ0aXRsZS5zdHlsZS5jb2xvciA9ICcjZjAwJztcbiAgfVxuXG4gIGNsb3NlTW9kYWwoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1vZGFsSXNPcGVuOiBmYWxzZSB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9wZW5Nb2RhbH0+T3BlbiBNb2RhbDwvYnV0dG9uPlxuICAgICAgICA8TW9kYWxcbiAgICAgICAgICBpc09wZW49e3RoaXMuc3RhdGUubW9kYWxJc09wZW59XG4gICAgICAgICAgb25BZnRlck9wZW49e3RoaXMuYWZ0ZXJPcGVuTW9kYWx9XG4gICAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e3RoaXMuY2xvc2VNb2RhbH1cbiAgICAgICAgICBzdHlsZT17Y3VzdG9tU3R5bGVzfVxuICAgICAgICAgIGNvbnRlbnRMYWJlbD1cIkV4YW1wbGUgTW9kYWxcIlxuICAgICAgICA+XG4gICAgICAgICAgPGgyIHJlZj17c3VidGl0bGUgPT4gKHRoaXMuc3VidGl0bGUgPSBzdWJ0aXRsZSl9PkhlbGxvPC9oMj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuY2xvc2VNb2RhbH0+Y2xvc2U8L2J1dHRvbj5cbiAgICAgICAgICA8ZGl2PkkgYW0gYSBtb2RhbDwvZGl2PlxuICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgPGlucHV0IC8+XG4gICAgICAgICAgICA8YnV0dG9uPnRhYiBuYXZpZ2F0aW9uPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uPnN0YXlzPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uPmluc2lkZTwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbj50aGUgbW9kYWw8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9zaGFyZWQvbW9kYWwuanMiLCJleHBvcnQgZGVmYXVsdCBbe1widGl0bGVcIjpcIlVuaXQgVGVzdGluZyBSZWFjdEpTIHwgVGFwZSB2cy4gSmVzdFwiLFwiZGVzY3JpcHRpb25cIjpcIkFmdGVyIHJlY2VudGx5IHN3aXRjaGluZyBteSB1bml0IHRlc3RzIGZyb20gVGFwZSB0byB1c2luZyBKZXN0IEkgZGVjaWRlZCB0byB3cml0ZSBhIHBvc3Qgb24gc29tZSBvZiBteSBleHBlcmllbmNlcyB3aGlsZSB0ZWFjaGluZyByZWFkZXJzIGEgbGVzc29uIG9uIHRlc3RpbmchXCIsXCJzbHVnXCI6XCJ0YXBlLWplc3QtdGVzdGluZ1wiLFwiYXV0aG9yXCI6XCJUaG9tYXMgR3JlY29cIixcImRhdGVcIjpcIjIwMTctOS0wNSAxNTowMCBQRFRcIixcInRhZ3NcIjpbXCJSZWFjdEpTXCIsXCJUZXN0aW5nXCJdLFwiYm9keVwiOlwiXFxuXFxuIyMgR2V0dGluZyBBY3F1YWludGVkIHdpdGggSmVzdFxcbiMjIyBJbnRyb1xcbkxpa2UgYW55IGRldmVsb3BlciwgbXkgcHJlZmVyZW5jZSBvZiB0b29scyBoYXMgYmVlbiBidWlsdCBwcmV0dHkgbXVjaCBlbnRpcmVseSBvbiBteSBwYXN0IGV4cGVyaWVuY2VzLiBJZiBp4oCZbSBub3QgdXNpbmcgdGhlIHRvb2wgYW5kIGl04oCZcyBrbm93biB0byBiZSBhbiBhaWQgdG8gZGV2ZWxvcGVycyB0aGVuIHRoZXJl4oCZcyBhIGdvb2QgY2hhbmNlIGnigJltIHVuaW5mb3JtZWQgb24gdGhlIHRvcGljLiBUaGlzIHdhcyBwYXJ0aWN1bGFybHkgdHJ1ZSB3aXRoIEplc3QsIHdoaWNoIGhhcyBiZWNvbWUgdGhlIG1vc3Qgd2lkZWx5IHVzZWQgbGlicmFyeSBmb3IgdGVzdGluZyBSZWFjdEpTIGFwcGxpY2F0aW9ucywgc28gSSB0aG91Z2h0IGl0IHdvdWxkIGJlIHdpc2UgdG8gZXhwbG9yZSB0aGUgdG9waWMgYSBsaXR0bGUgYml0IGluIGEgYmxvZyBwb3N0LiBJbiB0aGlzIHBvc3QsIEkgd2FudCB0byBzaGFyZSBteSBmZWVkYmFjayBhYm91dCByZWNlbnRseSB1c2luZyBKZXN0IHdoaWxlIGNvbnRyaWJ1dGluZyB0byB0aGUgbmV4dC1zdGF0aWMgcHJvamVjdC4gIFxcblxcbkkgcmVjZW50bHkgZW5kZWQgdXAgcGl2b3RpbmcgZnJvbSBhIGR5bmFtaWMgd2ViIGFwcGxpY2F0aW9uIHRvIGEgc3RhdGljIHNpdGUgZm9yIHRncmVjb2pzLmNvbS4gbmV4dC1zdGF0aWMgYW5kIHRoZSBzb2x1dGlvbiBoYXMgd29ya2VkIEExIHNvIEkgZW5kZWQgdXAgY29udHJpYnV0aW5nIHRvIHRoZSBwcm9qZWN0LiBUaGUgZmlyc3Qgb3JkZXIgb2YgYnVzaW5lc3Mgd2FzIHRvIHdyaXRlIHNvbWUgdGVzdHMgZm9yIHRoaXMgcHJvamVjdCBzbyBJIGRvdmUgcmlnaHQgaW4uIFRocm91Z2hvdXQgMjAxNyBJIHJlY2VpdmVkIGEgdG9uIG9mIGV4cGVyaWVuY2Ugd3JpdGluZyB1bml0IHRlc3RzIGZvciBSZWFjdEpTIGFwcHMgYnV0IEkgYWx3YXlzIHVzZWQgdGFwZSBzbyBpdCB3YXMgbm8gc2hvY2sgdGhhdCBJIGluaXRpYWxseSBncmF2aXRhdGVkIHRvIG15IG5vcm1hbCBkZXYgZW52aXJvbm1lbnQgZm9yIHdyaXRpbmcgdGVzdHMuXFxuXFxuIyMjIFJlYWRpbmcgdGhlIFVuaXQgVGVzdFxcbkEgZmV3IG1pbnV0ZXMgYWZ0ZXIgZ2V0dGluZyBteSBlbnZpcm9ubWVudCBzZXQgdXAgSSBoYWQgdGhlIGJvaWxlcnBsYXRlIGZvciBteSBmaXJzdCBgdGVzdC5qc2AgZmlsZSBhbGwgcmVhZHkgdG8gZ28uIFxcblxcbkJlbG93LCB3ZSBjYW4gc2VlIHRoZSBjb2RlIHN1Ym1pdHRlZCBpbiBbaW5pdGlhbCBwdWxsIHJlcXVlc3RdKGh0dHBzOi8vZ2l0aHViLmNvbS9pbmZpbml0ZWx1a2UvbmV4dC1zdGF0aWMvcHVsbC85L2NvbW1pdHMvMDA2ZGJlMThhMmI4MGYyNWY5YjRkOTVjMDkwZTk0MGRhMDlmMDlmNykuXFxuXFxuYGBgamF2YXNjcmlwdFxcbi8vIGltcG9ydHPigKYuXFxuLy8gc2V0IHVwIGZvciB0ZXN0IHNjb3BlXFxudGVzdCgnPFBvc3QgLz4nLCBuZXN0ID0+IHtcXG4gIG5lc3QudGVzdCgnZ2l2ZW4gbm8gcHJvcHMnLCBhc3NlcnQgPT4ge1xcbiAgICBjb25zdCBtc2cgPSBgc2hvdWxkIHJlbmRlciBhIHBvc3RgO1xcblxcbiAgICBjb25zdCBwcm9wcyA9IG1ha2VQcm9wcygpO1xcbiAgICBjb25zdCByZSA9IFJlZ0V4cChwcm9wcyk7XFxuXFxuICAgIGNvbnN0IGVsID0gPFBvc3Qgey4uLnByb3BzfSAvPjtcXG5cXG4gICAgY29uc3QgJCA9IGRvbS5sb2FkKHJlbmRlcihlbCkpO1xcbiAgICBjb25zdCBvdXRwdXQgPSAkKCcucG9zdCcpLmh0bWwoKTtcXG4gICAgY29uc3QgYWN0dWFsID0gcmUudGVzdChvdXRwdXQpO1xcbiAgICBjb25zdCBleHBlY3RlZCA9IHRydWU7XFxuXFxuICAgIGFzc2VydC5zYW1lKGFjdHVhbCwgZXhwZWN0ZWQsIG1zZyk7XFxuICAgIGFzc2VydC5lbmQoKTtcXG4gIH0pO1xcbn0pO1xcbmBgYFxcblxcbk9uY2UgcmFuLCB0aGlzIGxvZyBmb3IgdGhpcyB0ZXN0IHdvdWxkIGxvb2sgbGlrZSB0aGUgaW1hZ2UgYmVsb3cuXFxuXFxuIVt0YXBdKGh0dHBzOi8vczI2LnBvc3RpbWcub3JnLzdnbGNmendqZC9UQVAtX09VVFBVVC5wbmcpXFxuXFxuSXNu4oCZdCB0aGF0IHByZXR0eT8gSeKAmW0gYSBzdWNrZXIgZm9yIHNvbWUgZ29vZCBUQVAgd2hpY2ggdGFwZSBwcm9kdWNlcy4gTGl0dGxlIGRpZCBJIGtub3cgdGhhdCBJIHdhcyB0YWtpbmcgaXQgZm9yIGdyYW50ZWQgYnV0IG1vcmUgb24gdGhhdCBpbiBhIG1vbWVudC4gQXQgdGhpcyBwb2ludCwgSSBmaW5hbGx5IGhhZCBzb21ldGhpbmcgdGhhdCBJIGNvdWxkIGNvbmZpZGVudGx5IHB1c2ggb3ZlciB0byB0aGUgbmV4dC1zdGF0aWMgcmVwby4gQWJvdXQgYSBkYXkgbGF0ZXIsIEkgcmVjZWl2ZWQgdGhpcyByZW1hcmsgZnJvbSB0aGUgcHJvamVjdCBvd25lci5cXG5cXG4hW25leHQgc3RhdGljIGlzc3VlXShodHRwczovL3MyNi5wb3N0aW1nLm9yZy9hMGd6YTNrM2QvU2NyZWVuX1Nob3RfMjAxNy0wOS0wNV9hdF8xLjAzLjA1X0FNLnBuZylcXG5cXG5CdXQgb2YgY291cnNlISBXaHkgd2FzIEkgdXNpbmcgdGhpcyBzdG9uZS1hZ2UgdGVjaG5vbG9neSB3aGVuIEkgY291bGQganVzdCBwbHVnIGluIEplc3QhPyBBbGwga2lkZGluZyBhc2lkZSBJIHdhc27igJl0IHN1cnByaXNlZCBieSB0aGlzLiBJIGtub3cgaG93IGNyYXp5IGltcG9ydGFudCBvZiBhIHRvb2wgSmVzdCBoYXMgYmVjb21lIHRvIHNvIG1hbnkgZGV2ZWxvcGVycyBhbmQgSSB3YXMganVzdCBleGNpdGVkIHRvIGRpdmUgaW50byB0aGUgZnJhbWV3b3JrLlxcblxcbiMjIyBCZWNvbWluZyBvbmUgd2l0aCBKZXN0XFxuSSBrbmV3IHRoYXQgbWlncmF0ZWQgdGhpcyBzdXBlciBiYXNpYyB0ZXN0IHdhc27igJl0IGdvaW5nIHRvIGJlIGhhcmQuIEkganVzdCBuZWVkZWQgdG8ga25vdyBob3cgbXkgdGVzdCB3YXMgdG8gYmUgc2V0IHVwLlxcblxcbkkgaW5pdGlhbGx5IGhhZCB0aGUgcHJvamVjdCdzIGB0ZXN0YCBzY3JpcHQgdG8gZmlyZSBvZmYgdGhlIFtiYWJlbC1jbGldKGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL2JhYmVsLWNsaSkgIGFuZCBydW4gYW55IHRlc3RzIHRoYXQgaGFzIGJlZW4gaW1wb3J0ZWQgaW5zaWRlIG9mIGFuIGVudHJ5IHBvaW50IGZpbGUsIHdoaWNoIGluIG15IGNhc2Ugd2FzIFtgaW5kZXgudGVzdC5qc2BdKGh0dHBzOi8vZ2l0aHViLmNvbS9pbmZpbml0ZWx1a2UvbmV4dC1zdGF0aWMvcHVsbC85L2NvbW1pdHMvMDA2ZGJlMThhMmI4MGYyNWY5YjRkOTVjMDkwZTk0MGRhMDlmMDlmNyNkaWZmLTI3NWE2NzQzYjJmZjdkNjhlM2Q3NmYzNDYyNjkxNzE2KS4gQmVjYXVzZSBJIHdhcyBub3cgcmVseWluZyBvbiBKZXN0LCBJIGNvdWxkIHJlbW92ZSB0aGlzIGZpbGUgYW5kIEkgY291bGQgYWxzbyBjaGFuZ2UgdGhlIGB0ZXN0YCBzY3JpcHQgdG8gYGplc3RgLiBPbmNlIHRoYXQgd2FzIGluIHBsYWNlLCBKZXN0IHdhcyBwcmV0dHkgbXVjaCByZWFkeSB0byBnby4gXFxuXFxuT25lIG9mIEplc3TigJlzIG1hcnF1ZWUgYmVoYXZpb3JzIGlzIGl04oCZcyBhYmlsaXR5IHRvIG1hZ2ljYWxseSBydW5zIHRlc3RzIGFzIGxvbmcgYXMgdGhleSBhcmUgZWl0aGVyOlxcbiogaW4gKi50ZXN0LmpzIG9yICouc3BlYy5qc1xcbiogdGhleSBhcmUgaW4gYSB0ZXN0cyBmb2xkZXIuXFxuXFxuQXQgdGhlIHRpbWUgb2Ygd3JpdGluZyBteSB0ZXN0LCBJIHdhc27igJl0IGV2ZW4gYXdhcmUgb2YgdGhpcyBjcml0ZXJpYSBob3dldmVyIG15IGNvZGUgd2FzIGluc2lkZSBbdGVzdC5qc10oaHR0cHM6Ly9naXRodWIuY29tL2luZmluaXRlbHVrZS9uZXh0LXN0YXRpYy9ibG9iL21hc3Rlci9zcmMvY29tcG9uZW50cy9Qb3N0L3Rlc3QuanMpIGZpbGUgc28gZXZlcnl0aGluZyB3b3JrZWQgb3V0IGdyZWF0LiBBZGRpdGlvbmFsbHksIEkgY291bGQgY29tcGxldGVseSBlbGltaW5hdGUgdGhhdCBtYWluIGluZGV4LnRlc3QuanMgZmlsZSBhcyB0aGUgYGplc3RgIGNvbW1hbmQgd291bGQgbmF2aWdhdGUgdG8gdGhlIHRlc3RzIG9uIGl0cyBvd24uIE9uY2UgaW5zaWRlIHRoZXNlIHRlc3RzLCBKZXN0IHdpbGwgbG9vayBmb3Igc3BlY2lmaWMgZ2xvYmFsIHZhcmlhYmxlcyB0aGF0IGl0IHByb3ZpZGVzIHVzZXJzIHdpdGggZm9yIHdyaXRpbmcgdGVzdHMuIEluIG15IGNhc2UsIEkgaGFkIHRvIHN3YXAgb3V0IGB0ZXN0YCBmb3IgSmVzdCdzIGBkZXNjcmliZWAgZnVuY3Rpb24gd2hpY2ggd2lsbCBzaWduaWZ5IHRoYXQgYSB0ZXN0IHN1aXRlIGhhcyBiZWVuIGNyZWF0ZWQuXFxuXFxuPiBcXFwiSW4geW91ciB0ZXN0IGZpbGVzLCBKZXN0IHB1dHMgZWFjaCBvZiB0aGVzZSBtZXRob2RzIGFuZCBvYmplY3RzIGludG8gdGhlIGdsb2JhbCBlbnZpcm9ubWVudC4gWW91IGRvbid0IGhhdmUgdG8gcmVxdWlyZSBvciBpbXBvcnQgYW55dGhpbmcgdG8gdXNlIHRoZW0uXFxcIlxcbiAtIFtKZXN0IERvY3Mgb24gR2xvYmFsc10oaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vamVzdC9kb2NzL2VuL2FwaS5odG1sKVxcblxcblxcblRoZXNlIGdsb2JhbHMgYXJlIHdoYXQgYWxsb3cgSmVzdCB0byBtYWdpY2FsbHkgcnVuIG91ciB0ZXN0cyB3aXRob3V0IG5lZWRpbmcgdXMgdG8gYW55IGNvZGUuIEkgZG9u4oCZdCB3YW50IHRvIGJlIG92ZXIgY3JpdGljYWwgb2YgYW4gZXh0cmVtZWx5IHdlbGwga25vd24gdG9vbCBsaWtlIEplc3QgaG93ZXZlciBJIGJlY2FtZSB2ZXJ5IGNvbnNjaW91cyBvZiBwb2xsdXRpbmcgbXkgZ2xvYmFsIHNjb3BlIHRocm91Z2hvdXQgdGhlIGxhc3QgeWVhci4gWWVzLCBldmVuIGluIHJlZ2FyZHMgdG8gdGVzdGluZy4gT3ZlciB0aW1lLCBJIGJlY2FtZSBzdXBlciBjb21mb3J0YWJsZSB3aXRoIGltcG9ydGluZyB0YXBlIGRpcmVjdGx5LiBJdCBvbmx5IHRvb2sgYSB3cml0ZSBhbiBpbXBvcnQgc3RhdGVtZW50IChJIGNvdWxkIGFkZCB0byBhIFZTIGNvZGUgc25pcHBldCBpZiBJIHJlYWxseSBuZWVkZWQgdG8pIGFuZCBJIGZlZWwgY29tZm9ydCBpbiBrbm93aW5nIG15IHRlc3QgY29kZSBpcyBjb21wbGV0ZWx5IHNlbGYtY29udGFpbmVkIGFuZCBmcmVlIGZyb20gb3V0c2lkZSBidWdzLiBOb3csIEkgZG9u4oCZdCB3YW50IHRvIG1ha2UgaXQgc2VlbSBsaWtlIGnigJltIG5pdHBpY2tpbmcgaGVyZS4gVGhpcyBpcyBtZXJlbHkgbXkgZmVlZGJhY2sgb24gdGhlIGxpYnJhcnkuIFRoYXQgYmVpbmcgc2FpZCwgSSB0aGluayB0aGF0IHRoaXMgbm8gc2V0LXVwIGNvbmZpZ3VyYXRpb24gY291bGQgYWxsb3dzIHRlc3RpbmcgdG8gZ2V0IG9mZiB0aGUgZ3JvdW5kIGFzIHNvb24gYXMgcG9zc2libGUuXFxuXFxuXFxuU3VyZSBlbm91Z2gsIEkgcmFuIG15IHRlc3RzIGFuZCBzYXcgdGhhdCBKZXN0IHdhcyBwaWNraW5nIHVwIG9uIG15IGNvZGUuIEkgZGlkbuKAmXQga25vdyB0aGUgLnRlc3Qgb3IgLnNwZWMgY3JpdGVyaWEgYXQgdGhpcyB0aW1lIGJ1dCBteSB0ZXN0cyBhbHJlYWR5IGZlbGwgaW4gbGluZSB3aXRoIHRoZSBjcml0ZXJpYSBuZWNlc3NhcnkuIEkgbW9kaWZpZWQgbXkgY29kZSB0byBmaXQgSmVzdOKAmXMgc3ludGF4LCBhbmQgbXkgdW5pdCB0ZXN0IGxvb2tlZCBsaWtlIHRoZSBmb2xsb3dpbmcuXFxuXFxuYGBgamF2YXNjcmlwdFxcbmRlc2NyaWJlKCc8UG9zdCAvPiB3aXRoIG5vIGFyZ3MnLCAoKSA9PiB7XFxuaXQoJ3Nob3VsZCByZW5kZXIgYSBwb3N0IHdpdGggZGVmYXVsdCBhcmdzJywgKCkgPT4ge1xcbmNvbnN0IHByb3BzID0gbWFrZVByb3BzKCk7XFxuY29uc3QgcmUgPSBSZWdFeHAocHJvcHMpO1xcblxcbmNvbnN0IGVsID0gPENvbXBvbmVudCB7Li4ucHJvcHN9IC8+O1xcblxcbmNvbnN0ICQgPSBsb2FkQ29tcG9uZW50KGVsKTtcXG5cXG5jb25zdCBvdXRwdXQgPSAkKCcucG9zdCcpLmh0bWwoKTtcXG5jb25zdCBhY3R1YWwgPSByZS50ZXN0KG91dHB1dCk7XFxuY29uc3QgZXhwZWN0ZWQgPSB0cnVlO1xcblxcbmV4cGVjdChhY3R1YWwpLnRvRXF1YWwoZXhwZWN0ZWQpO1xcbiAgICB9KTtcXG59KTtgXFxuYGBgXFxuXFxuQXMgeW91IGNhbiBzZWUsIG15IHRlc3Qgbm8gbG9uZ2VyIGhhcyB0aGUgYGFzc2VydGAgY2FsbCBiYWNrIHRoYXQgd2FzIHVzZWQgd2l0aCBUYXBlLiBJbnN0ZWFkLCB3ZSBzZWUgSmVzdOKAmXMgYGV4cGVjdGAgZnVuY3Rpb24gdG8gY3JlYXRlIHRlc3QgYXNzZXJ0aW9ucy4gU3BlY2lmaWNhbGx5LCB3ZSBzZWUgYGV4cGVjdGAgYXNzZXJ0aW5nIHRoYXQgdGhlIGBhY3R1YWxgIHZhbHVlIGlzIGVxdWFsIHRvIHRoZSBgZXhwZWN0ZWRgIHZhbHVlIHVzaW5nIGB0b0VxdWFsYC4gQXMgeW91IGNhbiBzZWUsIG1pZ3JhdGluZyB0aGlzIHRlc3QgcmVhbGx5IGRpZG7igJl0IHRha2UgbXVjaCBhbmQgaXQgZmVsdCBnb29kIGtub3cgdGhhdCBJIGNvdWxkIGhhdmUgY2VydGFpbmx5IG1pZ3JhdGVkIGFueSB0ZXN04oCZcyBJ4oCZdmUgd3JpdHRlbiB0byB1c2UgSmVzdCB3aXRob3V0IGFueSBzb3J0IG9mIGNvbmZsaWN0LiBTYW1lIGNvbmNlcHRzIGp1c3QgZGlmZmVyZW50IGxpYnJhcmllcy4gSSBsb3ZlIHNpbmtpbmcgbXkgdGVldGggaW50byBrbmV3IHRlY2hub2xvZ2llcyAoZXNwZWNpYWxseSBpZiBJIGNhbiB1bmRlcnRhbmQgdGhlbSBmcm9tIHRoZSBqdW1wKSBzbyBpdCBmZWx0IGdvb2QgdG8gaGF2ZSBteSB0ZXN0cyBub3cgcGFzc2luZyB3aXRoIEplc3QuIFxcbjxpZnJhbWUgd2lkdGg9XFxcIjU2MFxcXCIgaGVpZ2h0PVxcXCIzMTVcXFwiIHNyYz1cXFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvOFFYa1RGS3JXNVVcXFwiIGZyYW1lYm9yZGVyPVxcXCIwXFxcIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+XFxuXFxuIyMjIFlvdSBoYWQgb25lIGpvYlxcbkEgZGF5IGFmdGVyIHB1c2hpbmcgbXkgbmV3bHkgY29tbWl0dGVkIEplc3TigJkgdGVzdCB0byB0aGUgbmV4dC1zdGF0aWMgcmVwbywgSSB3YXMgaW5mb3JtZWQgdGhhdCBJIGZhaWxlZCB0byBmdWxseSB1bmRlcnN0YW5kIHdoYXQgd2FzIGJlaW5nIGFza2VkIG9mIG1lLiBJIHByb2R1Y2VkIGEgdW5pdCB0ZXN0IGJ1dCBJIHJlYWxseSBuZWVkZWQgdG8gY3JlYXRlIGEgc25hcHNob3QgdGVzdC4gR3JlYXQhIE5vdyB0aGF0IEkgY29ycmVjdGx5IGlkZW50aWZpZWQgdGhlIG9iamVjdGl2ZSwgSSBqdXN0IG5lZWRlZCB0byBmaW5kIG91dCB3aGF0IGV4YWN0bHkgYSBzbmFwc2hvdCB0ZXN0IHdhcy5cXG5cXG4jIyMgRW50ZXIgU25hcHNob3QgVGVzdGluZ1xcbkFzIGl04oCZcyBuYW1lIHN1Z2dlc3RzLCBhIHNuYXBzaG90IHRlc3Qgd2lsbCB0YWtlIGEgYHNuYXBzaG90YCBvZiBhIGNvbXBvbmVudCBlYWNoIHRpbWUgYSB0ZXN0IGlzIHJ1bi4gSWYgdGhlcmUgaXMgYW4gZXhpc3Rpbmcgc25hcHNob3QsIEplc3Qgd2lsbCBjb21wYXJlIHRoZSB0d28gdG8gbWFrZSBzdXJlIHRoYXQgbm90aGluZyBpbiBvdXIgVUkgaGFzIGNoYW5nZWQgdW5leHBlY3RlZGx5LiBUaGlzIGlzIG1lYW50IHRvIHByb3ZpZGUgZGV2ZWxvcGVycyB3aXRoIGluc3RhbnQgZmVlZGJhY2sgb2YgdGhlaXIgVUkuIFdoZXJlYXMgdW5pdCB0ZXN0IGFzc2VydGlvbnMgYXJlIG1lYW50IHRvIHRlc3QgYSBzcGVjaWZpYyBiZWhhdmlvciwgc25hcHNob3QgdGVzdHMgYWxsb3cgdXMgdG8gbW9uaXRvciB0cml2aWFsIG1vZGlmaWNhdGlvbnMgaW4gb3VyIFVJLiBcXG5cXG5UbyBhY2NvbXBsaXNoIHRoaXMsIHdlIHVzZSB0aGUgYHJlYWN0LXRlc3QtcmVuZGVyZXJgIGxpYnJhcnnigJlzIGAudG9NYXRjaFNuYXBzaG90KClgIG1ldGhvZC4gT25jZSB0aGlzIGlzIHNldCB1cCwgSmVzdCB3aWxsIGNvbXBhcmUgdGhlIHNuYXBzaG90IG9mIG91ciBjb21wb25lbnQgdG8gYW55IHByZXZpb3VzIHNuYXBzaG904oCZcyBhbmQgdGVzdCB0aGVpciBjb250ZW50cyBhcmUgdGhlIHNhbWUuIFxcblxcbmBgYGphdmFzY3JpcHRcXG5kZXNjcmliZSgnU25hcHNob3Q6OjxQb3N0IC8+cycsICgpID0+IHtcXG5pdCgnc2hvdWxkIHJlbmRlciB0aGUgY29udGVudHMgb2YgdGhlIGNvbXBvbmVudC4nLCAoKSA9PiB7XFxuY29uc3QgcHJvcHMgPSBtYWtlUHJvcHMoKTtcXG5jb25zdCBlbCA9IDxDb21wb25lbnQgey4uLnByb3BzfSAvPjtcXG5cXG5jb25zdCB0cmVlID0gcmVuZGVyZXIuY3JlYXRlKGVsKS50b0pTT04oKTtcXG5cXG5leHBlY3QodHJlZSkudG9NYXRjaFNuYXBzaG90KCk7XFxuICAgIH0pO1xcbn0pO1xcbmBgYFxcblxcbkJlbG93IGlzIHRoZSBleGFjdCBzbmFwc2hvdCBKZXN0IGNyZWF0ZWQgZm9yIHRoZSBgPFBvc3QvPmAgY29tcG9uZW50LiBJ4oCZbSBub3QgZ29pbmcgdG8gZXhwbGFpbiBlYWNoIGxpbmUgYnV0IHlvdSBzaG91bGQgYmUgYWJsZSB0byBlYXNpbHkgcmVhc29uIGFib3V0IHdoYXQgdGhlIFVJIHNob3VsZCByZW5kZXIuIFxcblxcbmBgYGphdmFzY3JpcHRcXG4vLyBKZXN0IFNuYXBzaG90IHYxLCBodHRwczovL2dvby5nbC9mYkFRTFBcXG5cXG5leHBvcnRzW2BTbmFwc2hvdDo6PFBvc3QgLz5zIHNob3VsZCByZW5kZXIgdGhlIGNvbnRlbnRzIG9mIHRoZSBjb21wb25lbnQuIDFgXSA9IGBcXG48YXJ0aWNsZVxcbiAgY2xhc3NOYW1lPVxcXCJwb3N0IFBvc3RfX0FydGljbGUtczFlY3VsbWUtMCBmUUl0WVpcXFwiXFxuICBpdGVtU2NvcGU9e3RydWV9XFxuICBpdGVtVHlwZT1cXFwiaHR0cDovL3NjaGVtYS5vcmcvQmxvZ1Bvc3RpbmdcXFwiO1xcbj5cXG4gIDxoZWFkZXI+XFxuICAgIDxhXFxuICAgICAgaHJlZj1cXFwiL3Bvc3QvdGVzdC1wb3N0XFxcIlxcbiAgICAgIG9uQ2xpY2s9e1tGdW5jdGlvbl19XFxuICAgID5cXG4gICAgICA8aDFcXG4gICAgICAgIGNsYXNzTmFtZT1cXFwicG9zdC0tdGl0bGVcXFwiXFxuICAgICAgICBpdGVtUHJvcD1cXFwiaGVhZGxpbmVcXFwiXFxuICAgICAgPlxcbiAgICAgICAgSGVsbG9cXG4gICAgICA8L2gxPlxcbiAgICA8L2E+XFxuICAgIDxmb290ZXJcXG4gICAgICBjbGFzc05hbWU9XFxcInBvc3QtLWluZm9cXFwiXFxuICAgID5cXG4gICAgICA8c3Bhbj5cXG4gICAgICAgIDx0aW1lXFxuICAgICAgICAgIGRhdGVUaW1lPVxcXCI3LzIyLzIwMTdcXFwiXFxuICAgICAgICAgIGl0ZW1Qcm9wPVxcXCJkYXRlUHVibGlzaGVkXFxcIlxcbiAgICAgICAgPlxcbiAgICAgICAgICBhYm91dCAxIG1vbnRoIGFnb1xcbiAgICAgICAgPC90aW1lPlxcbiAgICAgIDwvc3Bhbj5cXG4gICAgICA8c3BhblxcbiAgICAgICAgaXRlbVByb3A9XFxcImF1dGhvclxcXCJcXG4gICAgICA+XFxuICAgICAgICBVc2VyXFxuICAgICAgPC9zcGFuPlxcbiAgICA8L2Zvb3Rlcj5cXG4gIDwvaGVhZGVyPlxcbiAgPGRpdlxcbiAgICBjbGFzc05hbWU9XFxcInBvc3QtLWJvZHlcXFwiXFxuICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXtcXG4gICAgICBPYmplY3Qge1xcbiAgICAgICAgXFxcIl9faHRtbFxcXCI6IFxcXCI8cD5sb3JlbSBpcHN1bSBpcyB0aGUgbmFtZSBtYWtpbmcgdGVzdHMgaXMgdGhpcyBnYW1lPC9wPlxcbiAgICAgIFxcXCIsXFxuICAgICAgfVxcbiAgICB9XFxuICAvPlxcbiAgPGZvb3Rlcj5cXG4gICAgPHNtYWxsXFxuICAgICAgY2xhc3NOYW1lPVxcXCJwb3N0LS10YWdzXFxcIlxcbiAgICA+XFxuICAgICAgPHNwYW4+XFxuICAgICAgICBGaWxlZCB1bmRlcjogXFxuICAgICAgPC9zcGFuPlxcbiAgICAgIDxzcGFuXFxuICAgICAgICBjbGFzc05hbWU9XFxcInBvc3QtLXRhZ1xcXCJcXG4gICAgICAgIGl0ZW1Qcm9wPVxcXCJrZXl3b3Jkc1xcXCJcXG4gICAgICA+XFxuICAgICAgICA8YVxcbiAgICAgICAgICBocmVmPVxcXCIvdGFnL2phdmFzY3JpcHRcXFwiXFxuICAgICAgICAgIG9uQ2xpY2s9e1tGdW5jdGlvbl19XFxuICAgICAgICA+XFxuICAgICAgICAgIGphdmFzY3JpcHRcXG4gICAgICAgIDwvYT5cXG4gICAgICAgICwgXFxuICAgICAgPC9zcGFuPlxcbiAgICAgIDxzcGFuXFxuICAgICAgICBjbGFzc05hbWU9XFxcInBvc3QtLXRhZ1xcXCJcXG4gICAgICAgIGl0ZW1Qcm9wPVxcXCJrZXl3b3Jkc1xcXCJcXG4gICAgICA+XFxuICAgICAgICA8YVxcbiAgICAgICAgICBocmVmPVxcXCIvdGFnL2FuZ3VsYXJcXFwiXFxuICAgICAgICAgIG9uQ2xpY2s9e1tGdW5jdGlvbl19XFxuICAgICAgICA+XFxuICAgICAgICAgIGFuZ3VsYXJcXG4gICAgICAgIDwvYT5cXG4gICAgICAgIFxcbiAgICAgIDwvc3Bhbj5cXG4gICAgPC9zbWFsbD5cXG4gIDwvZm9vdGVyPlxcbjwvYXJ0aWNsZT5cXG5gO1xcbmBgYFxcblxcbkFzIHlvdSBjYW4gc2VlLCBKZXN0IGhhcyBjcmVhdGVkIGEgcmVhZGFibGUgcmVwcmVzZW50YXRpb24gb2Ygb3VyIFVJLiBGcm9tIHRoaXMgcG9pbnQgZm9yd2FyZCwgYW55IGZ1dHVyZSBpbXBsZW1lbnRhdGlvbnMgb2YgYDxQb3N0Lz5gIHdpbGwgYmUgdGVzdGVkIGFnYWluc3QgdGhpcyBzbmFwc2hvdC4gVG8gZ2V0IGEgYmV0dGVyIHVuZGVyc3RhbmRpbmcgb2YgdGhpcywgbGV04oCZcyBzZWUgd2hhdCBoYXBwZW5zIHdoZW4gd2UgcmVtb3ZlIHRoZSBgPGZvb3Rlcj5gIGZyb20gb3VyIGBQb3N0YCBjb21wb25lbnQgYW5kIHJ1biBvdXIgc25hcHNob3QgdGVzdC4gXFxuXFxuIVtqZXN0IHNuYXBzaG90IHNzXShodHRwczovL3MyNi5wb3N0aW1nLm9yZy9vMnliYmMwM2QvU2NyZWVuX1Nob3RfMjAxNy0wOS0wNF9hdF81LjAxLjQ4X1BNLnBuZylcXG5cXG5UYWtpbmcgYSBsb29rIGF0IHRoaXMgaW1hZ2UsIHdlIHNlZSB0aGF0IEplc3QgaXMgZXhwZWN0aW5nIHRoZSBgPGZvb3Rlcj5gIGRpdiBhbmQgaXQgY2Fu4oCZdCBmaW5kIGl0IGluc2lkZSBvdXIgY29tcG9uZW50LiBBcyBhIHJlc3VsdCBvZiB0aGlzLCB3ZSBzZWUgdGhlYC1gIHNpZ24gdGh1cyBzaWduaWZ5aW5nIHRoYXQgdGhlIGNvZGUgYmxvY2sgaGFzIGJlZW4gcmVtb3ZlZCBmcm9tIHRoZSBmaWxlLiAgIElmIEkgd2FzIGluc3RydWN0ZWQgdG8gcmVtb3ZlIHRoaXMgZm9vdGVyLCBJIHdvdWxkIGFja25vd2xlZGdlIHRoaXMgY2hhbmdlIGFuZCBydW4gYGplc3QgLXVgIHRvIHVwZGF0ZSBteSBzbmFwc2hvdCBidXQgSSB3YXNu4oCZdC4gSW5zdGVhZCwgSSB3YXMgY3JlYXRpbmcgdGhlIGluaXRpYWwgc25hcHNob3QgZm9yIHRoaXMgY29tcG9uZW50IGFuZCB0aGVyZWZvcmUgSSBkaWRu4oCZdCBoYXZlIHRvIHdvcnJ5IGFib3V0IHByaW9yIHNuYXBzaG90cy4gVGhlIGZhY3QgdGhhdCBJIGhhZCBjcmVhdGVkIHRoZSBzdGFydGluZyBwb2ludCBmb3IgZnV0dXJlcyB0ZXN0cyB3YXMgZ29vZCBlbm91Z2guXFxuXFxuXFxuIVtqZXN0IHVwZGF0ZSBzbmFwc2hvdCBzc10oaHR0cHM6Ly9zMjYucG9zdGltZy5vcmcveGRmMHNtMDZ2L1NjcmVlbl9TaG90XzIwMTctMDktMDRfYXRfNS4wNi4yMV9QTS5wbmcpXFxuXFxuQXQgdGhpcyBwb2ludCBJIHdhcyBmdXJ0aGVyIHNlZWluZyBzZWVpbmcgdGhlIGJlbmVmaXRzIHRoYXQgSmVzdCBicmluZyB0byBhIHByb2plY3QgYnV0IEkgaGF2ZW7igJl0IGJlZW4gY29tcGxldGVseSBzb2xkIG9uIGl0IGJlaW5nIHRoZSBlbmQgYWxsIGJlIGFsbCBvZiB0ZXN0aW5nIHNvbHV0aW9ucy4gSXTigJlzIG1lYW50IHRvIHJ1biBzdXBlciBxdWlja2x5IGJ1dCBJIGZvdW5kIHRoYXQgbXkgdGVzdHMgYWN0dWFsbHkgcmFuIGEgYml0IHF1aWNrZXIgd2l0aCB0YXBlIHdoaWNoIHdvdWxkIG1ha2Ugc2Vuc2UgZHVlIHRvIGhvdyBsaWdodHdlaWdodCB0YXBlIGlzLiBcXG5cXG5BZGRpdGlvbmFsbHksIHRhcGUgYWxsb3dzIG1lIHRvIHVzZSBUQVAuIENhbGwgbWUgb2xkLWZhc2hpb25lZCBidXQgVEFQIGhhcyBiZWVuIGFyb3VuZCBzaW5jZSB0aGUgMTk4MOKAmXMuIFRoYXTigJlzIG9sZGVyIHRoYW4gbWUgYW5kIHRlY2hub2xvZ2llcyB0aGF0IGhhdmUgbGFzdGVkIHRoaXMgbG9uZyBhcmUgdXN1YWxseSBldGNoZWQgaW4gc3RvbmUgZm9yIGdvb2QgcmVhc29uLiBJIGhhdmVu4oCZdCBwZXJzb25hbGx5IHRyaWVkIHRvIGludGVncmF0ZSBhIGN1c3RvbSBUQVAgcmVwb3J0ZXIgd2l0aCBKZXN0IGJ1dCBmcm9tIHdoYXQgaeKAmXZlIGdhdGhlcmVkIGl04oCZcyBmYWlybHkgZGlmZmljdWx0IHRhc2suIElzIHRoaXMgdGhlIGVuZCBvZiB0aGUgd29ybGQ/IE5vLiBOb3QgYXQgYWxsIGJ1dCBpdOKAmXMgd29ydGggbm90aW5nLiBPbiB0aGUgb3RoZXIgaGFuZCwgd2hlbiB0aGUgYOKAlHdhdGNoYCBmbGFnIGlzIHVzZWQsIEplc3Qgb2ZmZXJzIGEgcHJldHR5IGNvb2wgaW50ZXJmYWNlIHRoYXQgbWFrZXMgcnVubmluZyBzcGVjaWZpYyB0ZXN0cyBhIGJyZWV6ZS4gYOKAlHdhdGNoYCBrZWVwcyBKZXN0IHJ1bm5pbmcgYWZ0ZXIgY3JlYXRpbmcgc25hcHNob3QgdGVzdHMgYW5kIG9mZmVyIHVzIHRoZSBhYmlsaXR5IHRvIHVwZGF0ZSBvdXIgcHJldmlvdXMgc25hcHNob3RzIGJ5IGp1c3QgcHJlc3NpbmcgYHVgLlxcblxcblxcblxcbiMjIyBGaW5hbCBXb3Jkc1xcblRoZXJl4oCZcyBubyBkZW55aW5nIHRoYXQgSmVzdCBtYWtlcyBpdCBlYXN5IHRvIGdldCBiZWdpbiB0ZXN0aW5nIGNvZGUuIEluIGZhY3QsIGVhc3kgaXMgcHV0dGluZyBpdCBsaWdodGx5LiBBcyBJIGp1c3QgbWVudGlvbmVkLCBpdCB3YXMgc28gZWFzeSB0aGF0IEkgd2FzIGluaXRpYWxseSBhIGJpdCBjb25mdXNlZCBhcyB0byBob3cgdGhpcyB3YXMgc3VwcG9zZWQgdG8gd29yayBidXQgdGhlIHBvaW50IGlzIHRoYXQgaXQgZGlkIGluZGVlZCB3b3JrLiBBc2lkZSBmcm9tIHRoZSBnbG9iYWJsIHZhcmFibGVzIGFuZCBub3QgYmVpbmcgYWJsZSB0byBlYXNpbHkgcHJpbnQgdGVzdCByZXN1bHRzIGluIFRBUCBhbmQgdGhlIGdsb2JhbCB2YXJpYWJsZXMsIEkgaGF2ZSBubyBxdWFsbXMgYWJvdXQgdGhlIGVmZmVjdGl2ZW5lc3Mgb2YgSmVzdC4gT24gdGhlIGNvbnRyYXJ5LCBJIGFtIHJlYWxseSBleGNpdGVkIHRvIHNlZSB3aGF0IGVsc2UgSmVzdCBoYXMgdG8gb2ZmZXIgYXMgSSBrbm93IHRoYXQgdGhpcyBpc24ndCB0aGUgbGFzdCBJIHdpbGwgc2VlIG9mIGl0IVxcblwifSx7XCJ0aXRsZVwiOlwiNSAob2YgdGhlIG1hbnkgdGhpbmdzKSB0byBsb3ZlIGFib3V0IE5leHQuanNcIixcImRlc2NyaXB0aW9uXCI6XCJOZXh0LmpzIGNvbnRpbnVlcyB0byBiZSBjb25zaWRlcmVkIGEg4oCcd2lu4oCdIGFtb25nc3QgYSBudW1iZXIgb2YgZGV2ZWxvcGVycyBldmVyeXdoZXJlLiAoSWYgeW91IGNvdWxkbid0IGd1ZXNzLCBJIGFtIG9uZSBvZiB0aGVtISkgVG8gaGVscCBzaGluZSBsaWdodCBvbiBzb21lIG9mIHRoZSByZWFzb25zIHdoeSBJIGxvdmUgdGhlIGZyYW1ld29yaywgSSBkZWRpY2VkIHRvIHB1dCB0b2dldGhlciBhIHNlcmllcyBvZiBwb3N0cyBvbiB0aGUgdG9waWMuIEluIHRoaXMgZmlyc3Qgb25lLCBJJ20gZ29pbmcgdG8gY3V0IHJpZ2h0IHRvIHRoZSBjaGFzZSBhbmQgc2hlZCBsaWdodCBvbiBhIGZldyBvZiB0aGUgYW1hemluZyB0aGluZ3MgdGhhdCBOZXh0LmpzIG1ha2VzIHBvc3NpYmxlLlwiLFwic2x1Z1wiOlwibmV4dC1qcy1wYXJ0MVwiLFwiYXV0aG9yXCI6XCJUaG9tYXMgR3JlY29cIixcImRhdGVcIjpcIjIwMTctOC0yOSAyMDowMCBFU1RcIixcInRhZ3NcIjpbXCJSZWFjdEpTXCIsXCJuZXh0anNcIl0sXCJib2R5XCI6XCJcXG5cXG5bTmV4dC5qc10oaHR0cHM6Ly96ZWl0LmNvL2Jsb2cvbmV4dCkgY29udGludWVzIHRvIGJlIGNvbnNpZGVyZWQgYSDigJx3aW7igJ0gYW1vbmdzdCBhIG51bWJlciBvZiBkZXZlbG9wZXJzIGV2ZXJ5d2hlcmUuIElmIHlvdSBjb3VsZG4ndCBndWVzcywgSSBhbSBvbmUgb2YgdGhlbSEgVG8gaGVscCBzaGluZSBsaWdodCBvbiBzb21lIG9mIHRoZSByZWFzb25zIHdoeSBJIGxvdmUgdGhlIGZyYW1ld29yaywgSSBkZWRpY2VkIHRvIHB1dCB0b2dldGhlciBhIHNlcmllcyBvZiBwb3N0cyBvbiB0aGUgdG9waWMuIEluIHRoaXMgZmlyc3Qgb25lLCBJJ20gZ29pbmcgdG8gY3V0IHJpZ2h0IHRvIHRoZSBjaGFzZSBhbmQgc2hlZCBsaWdodCBvbiBhIGZldyBvZiB0aGUgYW1hemluZyB0aGluZ3MgdGhhdCBOZXh0LmpzIG1ha2VzIHBvc3NpYmxlLlxcblxcblxcbiMjIyBFYXNlIG9mIFVzZVxcblxcbkFueW9uZSB3aG8gaGFzIHVzZWQgdGhlIHRlY2hub2xvZ3kgd2lsbCB0ZWxsIHlvdSBob3cgZWFzeSBpdCBpcyB0byBnZXQgc3RhcnRlZCBidWlsZGluZyBhIHByb2plY3Qgd2l0aCBOZXh0LmpzLiBZb3UgY2FuIGhhdmUgYW4gYXBwIHJ1bm5pbmcgYXMgcXVpY2tseSBhcyB5b3XigJlyZSBjb21wdXRlciBjYW4gaW5zdGFsbCB0aGUgcmVxdWlyZWQgcGFja2FnZXMuLi4gc2VyaW91c2x5LlxcblxcbkJlbG93IGlzIGFsbCB0aGF04oCZcyBuZWVkZWQgdG8gY3JlYXRlIHRoZSBzaGVsbCBmb3IgYW4gYXBwLlxcblxcbmBgYGJhc2hcXG5ucG0gaW5pdCAteSAjIGNyZWF0ZXMgcGFja2FnZS5qc29uXFxubnBtIGluc3RhbGwgcmVhY3QgcmVhY3QtZG9tIG5leHQgIyBzZWxmIGV4cGxhbmF0b3J5XFxubWtkaXIgcGFnZXMgJiYgdG91Y2ggcGFnZXMvaW5kZXguanNcXG5gYGBcXG5cXG5HcmFudGVkIHRoYXQgeW914oCZcmUgcGFja2FnZS5qc29u4oCZcyBgc2NyaXB0YCdzIG9iamVjdCBoYXMgYmVlbiBbbW9kaWZpZWQgY29ycmVjdGx5XShodHRwczovL2dpdGh1Yi5jb20vemVpdC9uZXh0LmpzLyNzZXR1cCksIHlvdSBjYW4gcGFzdGUgdGhlIGNvZGUgYmVsb3cgaW50byB0aGUgYHBhZ2VzL2luZGV4LmpzYCwgcnVuIGBucG0gcnVuIGRldmAgYW5kIHdhdGNoIHlvdeKAmXJlIGFwcGxpY2F0aW9uIGNvbWUgdG8gbGlmZS5cXG5cXG5gYGBqYXZhc2NyaXB0XFxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcXG5cXG5leHBvcnQgZGVmYXVsdCAoe3RpdGxlID0gJ0hvdyB0aWdodCBpcyB0aGlzIG5leHQuanMgdGhpbmc/J30pID0+IDxoMj57dGl0bGV9PC9oMj47XFxuYGBgXFxuPGNvZGU+cGFnZXM8L2NvZGU+IGFjdHMgYXMgb3VyIHJvdXRlciBpbiBOZXh0LmpzLiBJZiB3ZSBhZGRlZCB0aGUgc2FtZSBjb2RlIHRvYSBuZXcgZmlsZSBuYW1lZCBgcGFnZXMvYWJvdXQuanNgIGFuZCB0aGVuIHZpc2l0ZWQgYGxvY2FsaG9zdDozMDAwL2Fib3V0YCwgd2UnbGwgc2VlIHRoYXQgb3VyIGNvbXBvbmVudCBpcyBkaXNwbGF5ZWQgYW5kIE5leHQuanMgdG9vayBjYXJlIG9mIHRoZSByb3V0aW5nIGZvciB1cyEgTm93IGxldCdzIGNvbnRpbnVlIG9uIHRvIHNvbWUgbW9yZSBjb29sIHN0dWZmLlxcblxcblxcbiMjIyBBdXRvbWF0aWMgQ29kZSBTcGxpdHRpbmdcXG5cXG5BbnkgcHJvZ3JhbW1lciBpbiB0aGUgbm93IHdpbGwgdGVsbCB5b3UgaG93IGltcG9ydGFudCBjb2RlIHNwbGl0dGluZyBpcyB0byBlbnN1cmUgYW4gYXBwbGljYXRpb27igJlzIHBlcmZvcm1hbmNlIGlzIG9wdGltYWwuIEFzIGl04oCZcyBuYW1lIHN1Z2dlc3RzLCBbY29kZSBzcGxpdHRpbmddKGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vdXJsP3NhPXQmcmN0PWomcT0mZXNyYz1zJnNvdXJjZT13ZWImY2Q9MyZjYWQ9cmphJnVhY3Q9OCZ2ZWQ9MGFoVUtFd2lNcFltMjRKSFdBaFhGU3lZS0hSLVZBazRRRmdneU1BSSZ1cmw9aHR0cHMlM0ElMkYlMkZ3ZWJwYWNrLmdpdGh1Yi5pbyUyRmRvY3MlMkZjb2RlLXNwbGl0dGluZy5odG1sJnVzZz1BRlFqQ05Ib2V2bU1EZ3p4OW5WeTdYTXZQeDV4dXNRM0tnKSBhbGxvd3MgdXMgdG8gKnNwbGl0KiBvdXIgYXBwbGljYXRpb24gY29kZSB1cCBpbnRvIGEgc2VyaWVzIG9mIGxpZ2h0d2VpZ2h0IGJ1bmRsZXMuIEluc3RlYWQgb2YgbG9hZGluZyBhbGwgb2Ygb3VyIEphdmFTY3JpcHQsIG91ciBhcHBsaWNhdGlvbiB3aWxsIG9ubHkgbG9hZCB0aGUgYnVuZGxlIG5lZWRlZC4gV2VicGFjayBpcyB0aGUgdG9vbCBtb3N0IGFzc29jaWF0ZWQgd2l0aCB0aGlzIHByb2Nlc3MuIEluc3RlYWQgb2YgaGF2aW5nIHRvIGNvbmZpZ3VyZSB3ZWJwYWNrIHRvIHBlcmZvcm0gdGhpcywgd2UgY2FuIHJlbHkgb24gTmV4dC5qcyEgTGV0JyBnZXQgYSBiZXR0ZXIgdW5kZXJzdGFuZGluZyBvZiBob3cgdGhpcyBpcyBhY2NvbXBsaXNoZWQgc28gd2UgY2FuIGJldHRlciB1bmRlcnN0YW5kIHdoYXQncyBnb2luZyBvbi4gXFxuXFxuQmVsb3cgc2hvd3MgYW4gZXhhbXBsZSBvZiB0aGUgYC5uZXh0YCBkaXJlY3RvcnkgY3JlYXRlZCBmcm9tIHJ1bm5pbmcgYG5leHQgYnVpbGRgLiBcXG5cXG4hW25leHRqcyBidWlsZCBkaXJlY3RvcnldKGh0dHBzOi8vczMucG9zdGltZy5vcmcvcDYyOGl6dTFmL1NjcmVlbl9TaG90XzIwMTctMDgtMjNfYXRfMi41Mi40NV9BTS5wbmcpXFxuXFxuSW5zaWRlIGAubmV4dGAgd2Ugc2VlIHRoZSBgYnVuZGxlc2AgZm9sZGVyLiBXaGVuIG91ciBgbmV4dCBidWlsZGAgcnVucywgaXQgdXNlcyB3ZWJwYWNrIHRvIGdlbmVyYXRlIGJ1bmRsZXMgYmFzZWQgb24gb3VyIGFwcCdzIGBwYWdlc2AgZGlyZWN0b3J5LiBgcGFnZXNgIGFjdHMgYXMgYSBmaWxlIHN5c3RlbSB3aGljaCBhbGxvd3MgV2VicGFjayBlYXNpbHkgdGFyZ2V0IHRoaXMgZGlyZWN0b3J5IGFuZCBzdWNjZWVkIGluIGJ1bmRsaW5nIG91ciBjb2RlIHdpdGhvdXQgdXMgaGF2aW5nIHRvIGRvIGEgdGhpbmcuIEFkZGl0aW9uYWxseSwgYXBwbGljYXRpb24gd2lsbCBsb2FkIHRoZSBgaW5kZXguanNgIGJ1bmRsZSB3aGVuIGEgdmlzaXRlciBoaXRzIHRoZSBgL2Agcm91dGUuIElmIGEgdXNlciB0aGVuIHZpc2l0cyBgL2Jsb2dgIHJvdXRlIHRoZW4gdGhlIGBpbmRleC5qc2AgYnVuZGxlIHdpbGwgYmUgc3dhcHBlZCBpbiBmb3IgdGhlIGBibG9nLmpzYCBidW5kbGUuXFxuXFxuIyMjIFByZWZldGNoaW5nXFxuXFxuUHJlZmV0Y2hpbmcgcGlja3Mgb2ZmIHdoZXJlIGNvZGUgc3BsaXR0aW5nIGxlYXZlcyBvZmYuIE5leHQuanMgYWxsb3dzIGFsbCBvZiBvdXIgb3B0aW1pemVkIGJ1bmRsZXMgb2YgY29kZSB0byBiZSBsYXppbHktbG9hZGVkIGJlaGluZCB0aGUgc2NlbmVzLiBcXG5cXG5UbyBoYXJuZXNzIHRoZSBiZW5lZml0cyBvZiBwcmVmZXRjaGluZywgYWxsIHVzZXJzIG5lZWQgdG8gZG8gaXMgYWRkIHRoZSBgcHJlZmV0Y2hgIGF0dHJpYnV0ZSB0byB0aGVpciBMaW5rIGNvbXBvbmVudHMuXFxuXFxuYGBgamF2YXNjcmlwdFxcbi8vIFdpbGwgTk9UIHByZWZldGNoIHJvdXRlXFxuPExpbmsgaHJlZj1cXFwiL2Jsb2dcXFwiIC8+XFxuLy8gV2lsbCBoYXZlIHJlc3BvbnNlIGNhY2hlZCBhbmQgcmVhZHkgdG8gZ28gOilcXG48TGluayBwcmVmZXRjaCBocmVmPVxcXCIvYmxvZ1xcXCIgLz5cXG5gYGBcXG5cXG5XaGVuIG5leHQuanMgc2VlcyBgcHJlZmV0Y2hgLCBpdCB3aWxsIHByb3ZpZGUgYSBTZXJ2aWNlV29ya2VyIGZvciB0aGUgY29ycmVzcG9uZGluZyByb3V0ZSB3aGljaCB3aWxsIGxvYWQgYWxsIG9mIHRoZSBKYXZhU2NyaXB0IGJlaGluZCB0aGUgc2NlbmVzLiBJLCBbYWxvbmcgd2l0aCBvdGhlciBkZXZlbG9wZXJzXShodHRwczovL2dpdGh1Yi5jb20vemVpdC9uZXh0LmpzL2lzc3Vlcy83NDApLCB3YXMgaW5pdGlhbGx5IHVuZGVyIHRoZSBpbXByZXNzaW9uIHRoYXQgdGhpcyBtYWdpYyBgcHJlZmV0Y2hgIGF0dHJpYnV0ZSB3b3VsZCB3aXJlIHVwIGEgc2VydmljZSB3b3JrZXIgdGhhdCB3b3VsZCBjYWNoZSBteSBhcHBsaWNhdG9uJ3MgYmxvZyBwb3N0cy4gQWZ0ZXIgYWxsLCBJIGxpbmtlZCB0byB0aGVtIHdpdGggYHByZWZldGNoYCEgSXQgdHVybnMgb3V0IHRoYXQgdGhpcyBpcyBhY3R1YWxseSBiZXR0ZXIgdGhhdCB3ZSBtdXN0IHdpcmUgdXAgb3VyIG93biBzZXJ2aWNlIHdvcmtlciB0byBwZXJmb3JtIHRoaXMuIEl0J3MgYWxzbyBhIHRyZW1lbmRvdXMgZXhhbXBsZSBvZiBob3cgdGhlIHRvb2xzIE5leHQuanMgcHJvdmlkZXMgdXNlcnMgd2l0aCBhcmUgc28gY3J1Y2lhbCB5ZXQgdGlsbCBwcmV0dHkgdW5vbnBpbmlvbmF0ZWQuIE5leHQuanMgd2FudHMgbm90aGluZyB0byBkbyB3aXRoIGhvdyB5b3UgaGFuZGxlIHlvdXIgZGF0YS4gVGhleSBqdXN0IHdhbnQgdG8gc3VwcGx5IHRoZSB0b29scyBuZWVkZWQgZm9yIHlvdSB0byBoYW5kbGUgaXQgaW4gdGhlIGJlc3QgbWFubmVyLlxcblxcbiMjIyBTZXJ2ZXIgU2lkZSBSZW5kZXJpbmdcXG5JIHN0aWxsIGhhdmVu4oCZdCBjb3ZlcmVkIHRoZSBmYWN0IHRoYXQgTmV4dC5qcyBhbGxvd3MgYWxsIG9mIG91ciBhcHBsaWNhdGlvbiBjb2RlIHRvIHV0aWxpemUgc2VydmVyIHNpZGUgcmVuZGVyaW5nIChTU1IpLCB0aHVzIHByb3ZpZGluZyB0aGUgW2JlbmVmaXRzIHRoYXQgY29tZSB3aXRoIHRoaXNdKGh0dHBzOi8vbWVkaXVtLmNvbS93YWxtYXJ0bGFicy90aGUtYmVuZWZpdHMtb2Ytc2VydmVyLXNpZGUtcmVuZGVyaW5nLW92ZXItY2xpZW50LXNpZGUtcmVuZGVyaW5nLTVkMDdmZjJjZWZlOCkuIEJ5IGVtcGxveWluZyBTU1IsIHdl4oCmXFxuXFxuKiBlbGltaW5hdGUgdGhlIG5lZWQgZm9yIHRoZSBjbGllbnQgdG8gZG93bmxvYWQgY29kZSBieSBoYXZpbmcgdGhlIEhUTUwgcmVhZHkgaW4gdGhlIHJlc3BvbnNlLiBcXG4qIGNhbiBwcm92aWRlIHVzZXJzIHdpdGggYW4gaW5pdGlhbCByZW5kZXIgb2YgdGhlIHRoZSBhcHBsaWNhdGlvbuKAmXMgdmlldyB3aGlsZSBsb2FkaW5nIHRoZSBjb2RlIGluIHRoZSBiYWNrZ3JvdW5kLlxcbiogZGVwbG95IFNFTyBmcmllbmRseSBhcHBsaWNhdGlvbnMgdGhhdCBhcmUgYm90aCBJbmRleGFibGUgYW5kIGNyYXdsYWJsZS5cXG4qIGRvIGNvdW50bGVzcyBtb3JlIGF3ZXNvbWUgdGhpbmdzIHdpdGggSmF2YVNjcmlwdC5cXG5cXG5BZGRpdGlvbmFsbHksIE5leHQuanMgbWFrZXMgaXQgc3VwZXIgZWFzeSB0byBkZWZpbmUgY3VzdG9tIHJvdXRlcyBvbiB0aGUgc2VydmVyIHVzaW5nIGEgZnJhbWV3b3JrIG9mIHlvdXIgY2hvaWNlIG9yLCBpZiB5b3XigJlkIGxpa2UsIHlvdSBjYW4gcm9sbCB5b3VyIG93biBzZXJ2ZXIuIExpa2UgbWFueSBKYXZhU2NyaXB0IGRldmVsb3BlcnMsIEkgaGF2ZSBhIGxvdCBvZiBleHBlcmllbmNlIHVzaW5nIEV4cHJlc3NKUyBzbyBJIHdhcyBhYmxlIHRvIGFwcGx5IHRoaXMga25vd2xlZGdlIHRvIGNyZWF0ZSBhIGN1c3RvbSBiYWNrZW5kIHdpdGgganVzdCBhIGZldyBsaW5lcyBvZiBjb2RlLiBcXG5cXG5CeSB0YWtpbmcgYSBsb29rIGF0IHRoZSBbcHJvamVjdHMgcmVwb10oaHR0cHM6Ly9naXRodWIuY29tL3plaXQvbmV4dC5qcy90cmVlL3YzLWJldGEvZXhhbXBsZXMpLCB5b3Ugd2lsbCBzZWUgYSBzbGV3IG9mIGV4YW1wbGVzIHdpdGggZnJhbWV3b3JrcyBsaWtlIEV4cHJlc3MsIEtvYSwgYW5kIEhhcGksIGZ1cnRoZXIgc2hvd2luZyBob3cgZXh0ZW5kYWJsZSBOZXh0LmpzIHRydWx5IGlzLiBOZXh0LmpzIHNpbXBseSBwcm92aWRlcyBhbGwgb2YgdGhlc2UgYW1hemluZyBiZW5lZml0cyBhbmQgbGV04oCZcyB0aGUgZGV2ZWxvcGVyIHBpY2sgYW5kIGNob29zZSBob3cgdGhleSB3YW50IHRvIGhhcm5lc3NzIHRoZW0uIFxcblxcbiMjIyBITVIgYW5kIEVycm9yIFJlcG9ydGluZ1xcblRoZSBlZmZlY3RpdmVuZXNzIG9mIFtIb3QtbW9kdWxlIHJlcGxhY2VtZW50XShodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudC5odG1sKSAoSE1SKSBoYXMgbWFkZSBpdCBhIG11c3QtaGF2ZSBmb3IgdGhlIGRldmVsb3BtZW50IHByb2Nlc3MuIEluc3RlYWQgb2YgcmVsb2FkaW5nIGFuIGVudGlyZSBhcHBsaWNhdGlvbiB3aGVuIGNvZGUgaXMgY2hhbmdlZCwgSE1SIHdpbGwgb25seSByZWNyZWF0ZSBtb2R1bGVzIHRoYXQgaGF2ZSBiZWVuIGFsdGVyZWQuIFdlYnBhY2vigJlzIGhvbWVwYWdlIGRlc2NyaWJlcyB0aGUgcHJhY3RpY2UgYXMg4oCcTGl2ZXJlbG9hZCBmb3IgZXZlcnkgbW9kdWxl4oCdIHNvIGFzIHlvdSBjYW4gaW1hZ2UsIHRoaXMgYWxsb3dzIG5leHQuanMgdG8gY29tZSBlcXVpcHBlZCB3aXRoIGEgaGlnaC1wb3dlcmVkIGRldmVsb3BtZW50IHByb2Nlc3MgYnV0IGl0IGRvZXNu4oCZdCBzdG9wIHRoZXJlLiBVc2VycyB3aWxsIHF1aWNrbHkgbGVhcm4gYWJvdXQgdGhlIGFtYXppbmcgZXJyb3IgbWVzc2FnZXMgdGhhdCBOZXh0LmpzIGltbWVkaWF0ZWx5IHJlbmRlcnMgdG8gdGhlIGJyb3dzZXIgd2hlbmV2ZXIgY29kZSBpcyBpbiBjb3JyZWN0LiBcXG5cXG5ZZXMsIHlvdeKAmXZlIGhlYXJkIHRoYXQgY29ycmVjdC4gSSBzYWlkIOKAnGFtYXppbmcgZXJyb3IgbWVzc2FnZXPigJ0uIFN1cmVseSBJIG11c3QgYmUgY3JhenkuIFdlbGwsIHRha2UgYSBsb29rIGZvciB5b3Vyc2VsZi4gSeKAmXZlIHJlY29yZGVkIGEgcXVpY2sgY2xpcCBvZiB0aGlzIGluIGFjdGlvbi4gXFxuXFxuPGRpdiBzdHlsZT1cXFwiZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBjZW50ZXJcXFwiPlxcbjxpZnJhbWUgc3JjPVxcXCJodHRwczovL2dpcGh5LmNvbS9lbWJlZC8zb3Y5allmZWhjWDg2eXY0eGFcXFwiIHdpZHRoPVxcXCI0ODBcXFwiIGhlaWdodD1cXFwiMjgxXFxcIiBmcmFtZUJvcmRlcj1cXFwiMFxcXCJhbGxvd0Z1bGxTY3JlZW4+PC9pZnJhbWU+XFxuPC9kaXY+XFxuXFxuQXQgZmlyc3Qgd2Ugc2VlIHRoZSBhcHBsaWNhdGlvbiBiZWluZyByZW5kZXJlZCBjb3JyZWN0bHkgaW4gdGhlIGJyb3dzZXIuIFRvIGRlbW9uc3RyYXRlIE5leHQuanPigJkgYWJpbGl0eSB0aGVuIHNlZSBhbiBlcnJvciBhcyBhIHJlc3VsdCBvZiBtZSByZW1vdmluZyB0aGUgYD5gIHN5bWJvbCBmcm9tIG15IEpTWC4gTm8gbWF0dGVyIGhvdyBzbWFsbCwgdGhlc2UgZXJyb3JzIGNhbiBjYXVzZSBzZXJpb3VzIGhlYWRhY2hlcyBkdWUgdG8gYWxsIHNvcnRzIG9mIG5vbnNlbnNlIHNvIEkgdGhvdWdodCB0aGlzIHByb3ZpZGVkIGEgZ29vZCBleGFtcGxlIG9mIE5leHQuanMgaW5zdGFudGx5IHBpY2tpbmcgdXAgdGhlIGVycm9yIGFuZCBpdCBkb2VzbuKAmXQgc3RvcCBwaW5wb2ludHMgdGhlIGZpbGUgYW5kIGV2ZW4gdGhlIGxpbmUgb24gd2hpY2ggdGhpcyBlcnJvciBpcyBvY2N1cnJpbmcgdGh1cyBtYWtpbmcgdHJhY2tpbmcgZG93biBidWdzIGEgYnJlZXplLiBFdmVyeSBkZXZlbG9wZXIga25vd3MgdGhlIHN0cnVnZ2xlIG9mIHNwZW5kaW5nIG1vcmUgdGltZSB0aGFuIHRoZXnigJlkIGJlIHdpbGxpbmcgdG8gYWRtaXQgb24gZmluZGluZyBhIGJ1Zywgb25seSB0byBmaW5kIG91dCB0aGF0IHRoZSBpc3N1ZSB3YXMgZW1iYXJyYXNzaW5nbHkgdHJpdmlhbC4gTmV4dC5qcyBlbGltaW5hdGVzIHRoaXMgcHJvYmxlbSBhbmQgYWxsb3dzIGRldmVsb3BlcnMgdG8gd29yayB3aXRoIGdyZWF0IGVmZmljaWVuY3kuIFxcblxcbiMjIyBGaW5hbCB0aG91Z2h0c1xcbkhvcGVmdWxseSBieSBub3cgeW914oCZcmUgYmVnaW5uaW5nIHRvIHJlYWxpemUgaG93IHBvd2VyZnVsIG9mIGEgZnJhbWV3b3JrIFplaXQgaGFzIGNyZWF0ZWQgd2l0aCBOZXh0LmpzLiBJbiBteSBuZXh0IHBvc3QsIGknbSBnb2luZyB0byBkaXZlIGRlZXBlciBpbnRvIE5leHQuanMgYW5kIGluIHBhcnRpY3VsYXIsIG15IGV4cGVyaWVuY2VzIHdvcmtpbmcgaXQuIEluIHRoZSBtZWFudGltZSwgSSBoaWdobHkgcmVjb21tZW5kIHlvdSBjaGVja2luZyBvdXQgeWV0IGFub3RoZXIgaG9tZS1ydW4gdGhhdCBaZWl0IGhhcyByZWxlYXNlZCB0byB0aGUgcGVvcGxlISBcXG5cXG4jIyMjIyBBZGRpdGlvbmFsIFJlc291cmNlc1xcbiogW05leHQuanMgUmVwb10oaHR0cHM6Ly9naXRodWIuY29tL3plaXQvbmV4dC5qcylcXG4qIFtMZWFybiBOZXh0LmpzIC0tIEF3ZXNvbWUgZm9yIGJlZ2lubmVycyEhIV0obGVhcm5uZXh0anMuY29tKVxcbiogW1plaXQgQmxvZyAtIE5leHQuanMgM10oaHR0cHM6Ly96ZWl0LmNvL2Jsb2cvbmV4dDMpXFxuKiBbWmVpdCBTbGFja10oaHR0cHM6Ly96ZWl0LmNoYXQvKVxcbiogW2F3ZXNvbWUtbmV4dGpzXShodHRwczovL2dpdGh1Yi5jb20vdW5pY29kZXZlbG9wZXIvYXdlc29tZS1uZXh0anMpXFxuXCJ9LHtcInRpdGxlXCI6XCJUaGUgQmVuZWZpdHMgb2YgVXNpbmcgRnVuY3Rpb25hbCBTdGF0ZWxlc3MgQ29tcG9uZW50cyBpbiBSZWFjdEpTXCIsXCJkZXNjcmlwdGlvblwiOlwiVGhpcyBhcnRpY2xlIHRha2VzIGEgbG9vayBhdCBGdW5jdGlvbmFsIFN0YXRlbGVzcyBDb21wb25lbnRzIHdoaWNoIFJlYWN0IHJlbGVhc2VkIGluIHYwLjE0LiBTaW5jZSB0aGVuLCB0aGV5J3ZlIG1hZGUgYSBodWdlIGltcGFjdCBpbiB0aGUgY29tbXVuaXR5IGJ5IHByb3ZpZGluZyB1c2VycyB3aXRoIGEgY2xlYW5lciBzeW50YXggdGhhdCBhbGxvd3MgZm9yIHVzIHRvIHdyaXRlIG1vcmUgZGVjbGFyYXRpdmUgY29kZS4gVG8gc2hvdyB3aHkgdGhpcyBpcyBzbyBoZWxwZnVsLCB0aGlzIGFydGljbGUgd2lsbCB0YWtlIGEgbG9vayBhdCBzdGF0ZWxlc3MgY29tcG9uZW50cyBhbmQgZmluaXNoIHVwIHdpdGggc29tZSB1bml0IHRlc3RzLlwiLFwic2x1Z1wiOlwicHVyZS1jb21wb25lbnRzXCIsXCJhdXRob3JcIjpcIlRob21hcyBHcmVjb1wiLFwiZGF0ZVwiOlwiMjAxNy04LTIyIDE1OjAwIFBEVFwiLFwidGFnc1wiOltcIlJlYWN0SlNcIixcIlRlc3RpbmdcIl0sXCJib2R5XCI6XCJcXG5cXG4jIyMgVW5kZXJzdGFuZGluZyBPdXRjb21lcyB3aXRoIFB1cmUgQ29tcG9uZW50c1xcblVzZSBvZiBTdGF0ZWxlc3MgRnVuY3Rpb25hbCBDb21wb25lbnRzIChhLmsuYS4g4oCccHVyZeKAnSBvciDigJxkdW1i4oCdIGNvbXBvbmVudHMpIGluIFJlYWN0SlMgY29udGludWVzIHRvIGdyb3cgc2luY2UgZmlyc3QgYmVpbmcgcmVsZWFzZWQgaW4gUmVhY3QgMC4xNCwgYW5kIGZvciBnb29kIHJlYXNvbi4gQnkgcmVseWluZyBvbiBwdXJlIGNvbXBvbmVudHMsIGRldmVsb3BlcnMgZW5kIHVwIHdyaXRpbmcgcmV1c2FibGUgY29kZSB0aGF0cyBleHRyZW1lbHkgZWFzeSB0byB0ZXN0LCB0aHVzIGxlYWRpbmcgdG8gYmV0dGVyIGFwcGxpY2F0aW9uIGFyY2hpdGVjdHVyZS4gV2h5PyBBIGZ1bmN0aW9uYWwgc3RhdGVsZXNzIGNvbXBvbmVudCBpcyBtZXJlbHkgYSBmYWN0b3J5IGZ1bmN0aW9uIHVzZWQgdG8gY3JlYXRlIGEgcmVhY3QgY29tcG9uZW50LiBQZXJzb25hbGx5LCBJIGxpa2UgdGhlIHRlcm0g4oCccHVyZSBjb21wb25lbnTigJ0gYmVjYXVzZSBpdHMgaW5kaWNhdGl2ZSBvZiB3aGF0IHRoZSBjb2RlIHJlYWxseSBpc+KAiuKAlOKAimEgcHVyZSBmdW5jdGlvbiBzcHJpbmtsZWQgd2l0aCBzb21lIEpTWC5cXG5cXG4+IFxcXCJBIHB1cmUgZnVuY3Rpb24gaXMgYSBmdW5jdGlvbiB3aGljaDpcXG5HaXZlbiB0aGUgc2FtZSBpbnB1dCwgd2lsbCBhbHdheXMgcmV0dXJuIHRoZSBzYW1lIG91dHB1dC5cXG5Qcm9kdWNlcyBubyBzaWRlIGVmZmVjdHMuXFxuUmVsaWVzIG9uIG5vIGV4dGVybmFsIG11dGFibGUgc3RhdGUuXFxcIiA8L2JyPlxcbj4gRXJpYyBFbGxpb3R0LCBNYXN0ZXIgdGhlIEphdmFTY3JpcHQgaW50ZXJ2aWV3OiBbV2hhdCBpcyBhIFB1cmUgRnVuY3Rpb25dKGh0dHBzOi8vbWVkaXVtLmNvbS9qYXZhc2NyaXB0LXNjZW5lL21hc3Rlci10aGUtamF2YXNjcmlwdC1pbnRlcnZpZXctd2hhdC1pcy1hLXB1cmUtZnVuY3Rpb24tZDFjMDc2YmVjOTc2KVxcblxcbkVxdWlwcGVkIHdpdGggdGhlIHJpZ2h0IGFtb3VudCBvZiB0ZXN0cywgdGhlIHVzZSBvZiBwdXJlIGZ1bmN0aW9ucyBjYW4gaGVscCBicmluZyBwZWFjZSBvZiBtaW5kIHRvIGRldmVsb3BlcnMgYnkgZW5zdXJpbmcgdGhhdCBhbnkgc2NlbmFyaW8gdGhhdCBoYXMgYmVlbiB0ZXN0ZWQgd2lsbCBub3QgaGF2ZSBhbiB1bmludGVuZGVkIHJlc3VsdCBpbiB0aGUgYXBwbGljYXRpb24uIEFzIHlvdSBjYW4gaW1hZ2luZSwgdGhpcyBjYW4gZ28gYWxvbmcgd2F5IHdoZW4gYnVpbGRpbmcgbGFyZ2Ugc2NhbGUgYXBwbGljYXRpb25zLiBJdCBzaG91bGQgYWxzbyBjb21lIGFzIG5vIHN1cnByaXNlIHRvIGtub3cgdGhhdCBwdXJlIGZ1bmN0aW9ucyBhcmUgdGhlIGhlYXJ0IG9mIFJlZHV4IHdoaWNoIHJlbGllcyBvbiBKYXZhU2NyaXB04oCZcyBbYHJlZHVjZWBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L1JlZHVjZT92PWEpIGZ1bmN0aW9uLiBcXG5cXG5JbiBhbiB1cGNvbWluZyBwb3N0LCBp4oCZbGwgZ28gaW50byBmdXJ0aGVyIGRldGFpbCBvbiBob3cgcmVkdWNlIHdvcmtzLiBGb3Igbm93LCBJIHdhbnQgdG8gY29udGludWUgb24gd2l0aCB0aGUgaWRlYSBvZiB3cml0aW5nIOKAnGJ1bGxldC1wcm9vZuKAnSBSZWFjdCBjb21wb25lbnRzIHVzaW5nIHB1cmUgZnVuY3Rpb25zLiBUbyBiZXN0IGlsbHVzdHJhdGUgdGhpcywgaeKAmW0gZ29pbmcgdG8gc2hvdyBzb21lIGNvZGUgdGhhdCBzaG93cyBhIHJlYWN0IGNoaWxkIGNvbXBvbmVudC5cXG5cXG5gYGBqYXZhc2NyaXB0XFxuLy8gUG9zdC5qc1xcbmNvbnN0IFBvc3QgPSAoeyB0aXRsZSwgY29udGVudCB9KSA9PlxcbjxkaXYgY2xhc3NOYW1lPVxcXCJwb3N0XFxcIj5cXG48aDI+e3RpdGxlfTwvaDI+XFxuPHA+e2NvbnRlbnR9PC9wPlxcbjwvZGl2PjtcXG5gYGBcXG5cXG5UaGUgY2xlYW4gbmF0dXJlIG9mIHRoZXNlIGNvbXBvbmVudHMgbWFrZSBpdCBleHRyZW1lbHkgZWFzeSB0byByZWFzb24gYWJvdXQgdGhlIGNvZGUuIEluIHRoaXMgY2FzZSwgd2Ugc2VlIHRoZSB0aGF0IGBQb3N0YCBpcyBqdXN0IGEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0aXRsZSBhbmQgY29udGVudCBwcm9wcyBhbmQgdGhlbiB1c2VzIHRoZXNlIHByb3BzIHRvIHByb2R1Y2UgYW4gZWxlbWVudC4gWW91IG1heSBvZnRlbiBzZWUgYHByb3BzYCBiZWluZyBwYXNzZWQgaW4gYXMgYSBwYXJhbWV0ZXIgYnV0IGnigJl2ZSB1dGlsaXplZCBFUzYgW2Rlc3RydWN0dXJpbmddKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL09wZXJhdG9ycy9EZXN0cnVjdHVyaW5nX2Fzc2lnbm1lbnQpLiBCeSBkb2luZyBzbywgbXkgd2XigJlyZSBhYmxlIHRvIHB1bGwgc3BlY2lmaWMgdmFsdWVzIG91dCBvZiB0aGUgYHByb3BzYCBvYmplY3QgYW5kIGFjY2VzcyBgcHJvcHMudGl0bGVgIGFuZCBgcHJvcHMuY29udGVudGAgd2l0aG91dCB1c2luZyBbZG90IG5vdGF0aW9uXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9PcGVyYXRvcnMvUHJvcGVydHlfQWNjZXNzb3JzKS5cXG5cXG5QZXJzb25hbGx5LCBJIHRoaW5rIHRoYXQgdGhpcyBpcyBhd2Vzb21lIGFzIGl0IHJlbW92ZXMgYW55IG15c3RlcnkgYWJvdXQgdGhlIGBwcm9wc2AgYmVpbmcgcGFzc2VkIGludG8gYSBjb21wb25lbnQuIEluIHByb2dyYW1taW5nLCBteXN0ZXJ5IGlzIG5ldmVyIGdvb2QgYSB0aGluZyBzbyB0aGlzIGFsbG93cyB1cyB0byByZWFkIGNvZGUgdGhhbiBvdGhlcnMgY2FuIG1vcmUgZWFzaWx5IHJlYXNvbiBhYm91dCwgZXNwZWNpYWxseSBhcyBjb21wb25lbnRzIGJlY29tZSBtb3JlIGxhcmdlIVxcblxcbiMjIyBXaHkgdGhpcyBpcyBpbXBvcnRhbnRcXG5BbHRob3VnaCB0aGlzIGNvbXBvbmVudCBtYXkgbm90IGxvb2sgbGlrZSBtdWNoLCBpdCBjb3VsZCB2ZXJ5IHdlbGwgcGxheSBhbiBpbnRlZ3JhbCBwYXJ0IG9mIGFuIGFwcGxpY2F0aW9uLiBGb3IgaW5zdGFuY2UsIGxldCdzIGltYWdpbmUgYDxQb3N0Lz5gIHJlbmRlcnMgYXJ0aWNsZXMgaW4gZm9yIGEgd2Vic2l0ZSB0aGF0IGhhcyBvdmVyIGEgbWlsbGlvbiBkYWlseSB1c2Vycy4gSWYgdGhhdCdzIHRoZSBjYXNlLCB0aGVuIHdlIHdpbGwgbGlrZWx5IHJhdGhlciB0aGVzZSBzbWFsbGVyLCBjb2hlc2l2ZSBibG9ja3Mgb2YgY29kZSBhcyB0aGV5IGFsbG93IHVzIHRvIGVhc2lseSBoYW1tZXIgb3V0IGV2ZXJ5IGxhc3QgZGV0YWlsISBZb3XigJlsbCBhbHNvIGZpbmQgdGhhdCBwdXJlIGNvbXBvbmVudHMgbWFrZSBtb2RpZmljYXRpb25zIGEgYnJlZXplIGFuZCBhbHNvIHJlc3VsdCBpbiB3cml0aW5nIGNvZGUgdGhhdCBjYW4gYmUgZWFzaWx5IHBvcnRlZCBpbnRvIG90aGVyIHByb2plY3RzLiBJbiBhZGRpdGlvbiB0byB0aGVzZSBiZW5lZml0cywgcHVyZSBjb21wb25lbnRzIGFsc28gbWFrZSBpdCBleHRyZW1lbHkgZWFzeSB0byB0ZXN0IHRoZW0gd2l0aCBhbnkgY3JhenkgcHJvcHMgdGhhdCB5b3Ugd2lzaC4gTGlrZSBhIHB1cmUgZnVuY3Rpb24sIHB1cmUgY29tcG9uZW50cyB3aWxsIGFsd2F5cyBtYXAgdGhlIHNhbWUgaW5wdXQgdG8gdGhlIHNhbWUgb3V0cHV0IHRoZXJlZm9yZSAqKklmIHdlIGNhbiB0aGluayBvZiB0aGUgc2NlbmFyaW8sIHdlIGNhbiB0ZXN0IGhvdyBvdXIgY29tcG9uZW50IHdpbGwgcmVhY3QqKi5cXG5cXG5cXG4jIyMjIERpdmluZyBpbnRvIFVuaXQgVGVzdHNcXG5BcyB3ZSBqdXN0IHNhdywgdGhlIGNvZGUgZm9yIGZ1bmN0aW9uYWwgY29tcG9uZW50cyBwcm92aWRlIHVzIGF3ZXNvbWUgaW50ZWwgb24gd2l0aCBldmVyeXRoaW5nIHdlIG5lZWQgdG8ga25vdyBpbiBvcmRlciB0byB3cml0ZSBlZmZlY3RpdmUgdGVzdHMuIFRvIGJlc3QgaWxsdXN0cmF0ZSB0aGlzLCBp4oCZbSBnb2luZyB0byB0YWtlIHlvdSB0aHJvdWdoIHRoZSBjb2RlIGJsb2NrIGJlbG93IHdoaWNoIGlzIGEgdW5pdCB0ZXN0IG9mIHRoZSBgPFBvc3QgLz5gIGNvbXBvbmVudC4gICBcXG5cXG5gYGBqYXZhc2NyaXB0XFxuLy8gUG9zdC50ZXN0LmpzXFxuaW1wb3J0IHRlc3QgZnJvbSAndGFwZSc7XFxuaW1wb3J0IGRvbSBmcm9tICdjaGVlcmlvJztcXG5pbXBvcnQgUG9zdCBmcm9tICcuL1Bvc3QnO1xcbmltcG9ydCB7IHJlbmRlclRvU3RhdGljTWFya3VwIH0gZnJvbSAncmVhY3QtZG9tJztcXG5cXG50ZXN0KCc8UG9zdCAvPiAnLCBhc3NlcnQgPT4ge1xcbmNvbnN0IG1zZyA9ICdzaG91bGQgcmVuZGVyIGEgcG9zdCB3aXRoIGEgdGl0bGUgYW5kIGNvbnRlbnQnO1xcbi8vIGRlZmluZSBwcmVleGlzaXRpbmcgY29uZGl0aW9uc1xcbmNvbnN0IHByb3BzID0ge1xcbnRpdGxlOiAnSSBhbSB0aGUgdGl0bGUnLFxcbmNvbnRlbnQ6ICdJIGFtIHRoZSBjb250ZW50ISEhISEhIFdvb29vb29vbyEnXFxufTtcXG5jb25zdCBjaGVja1Byb3BzID0gUmVnRXhwKHByb3BzKTtcXG5cXG5jb25zdCBlbCA9IDxQb3N0IHtwcm9wc30gLz5cXG5jb25zdCAkID0gZG9tLmxvYWQocmVuZGVyKGVsKSk7XFxuY29uc3Qgb3V0cHV0ID0gJCgncG9zdCcpLmh0bWwoKTtcXG5cXG5jb25zdCBhY3R1YWwgPSBjaGVja1Byb3BzLnRlc3Qob3V0cHV0KTtcXG5jb25zdCBleHBlY3RlZCA9IHRydWU7XFxuXFxuYXNzZXJ0LnNhbWUoYWN0dWFsLCBleHBlY3RlZCwgc2FtZSk7XFxuYXNzZXJ0LmVuZCgpXFxufSlcXG5gYGBcXG5cXG5Eb27igJl0IHdvcnJ5IGlmIHRoZSBjb2RlIGFib3ZlIGlzIGEgYml0IGNvbmZ1c2luZyB0byB5b3UuIEl0IHdpbGwgYWxsIG1ha2Ugc2Vuc2Ugc29vbi4gXFxuXFxuXFxuIyMjIFN0ZXAgMSAtIFNldCB1cCBwcmUtZXhpc3RpbmcgY29uZGl0aW9uc1xcbkluIHRoaXMgaW5zdGFuY2UsIHdlIGtub3cgdGhhdCBgPFBvc3QgLz5gIHRha2VzIGEgYHRpdGxlYCBhbmQgYSBgY29udGVudGAgcHJvcCBzbyB3ZSBjYW4gdGVzdCB0aGlzIGJ5IHNpbXBseSBwYXNzaW5nIGluIHRoZXNlIHZhbHVlcyB0byBhIGBwcm9wc2AgdmFyaWFibGUuIE9uY2Ugd2XigJl2ZSBhc3NpZ25lZCB0aGUgcHJvcHMgd2Ugd2FudCB0byB0ZXN0LCB3ZSBjYW4gdXNlIEphdmFTY3JpcHQncyBgUmVnZXhgIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhbm90aGVyIHZhcmlhYmxlLCBgY2hlY2tQcm9wc2AsIHRoYXQgd2lsbCBtYWtlIHN1cmUgdGhlIGNvbXBvbmVudCBiZWluZyB0ZXN0ZWQgY29udGFpbnMgdGhlIHByb3BzIGl0IGlzIGJlaW5nIGdpdmVuLiBcXG5cXG5gYGBqYXZhc2NyaXB0XFxuLy8gcG9zdC50ZXN0LmpzXFxuY29uc3QgcHJvcHMgPSB7XFxudGl0bGU6ICdJIGFtIHRoZSB0aXRsZScsXFxuY29udGVudDogJ0kgYW0gdGhlIGNvbnRlbnQhISEhISEgV29vb29vb29vISdcXG59O1xcbmNvbnN0IGNoZWNrUHJvcHMgPSBSZWdFeHAocHJvcHMpO1xcbmBgYFxcblxcbiMjIyBTdGVwIDIgLSBSZW5kZXIgdGhlIEhUTUwgZnJvbSBgPGRpdiBjbGFzcz1cXFwicG9zdFxcXCI+YFxcbkZvbGxvd2luZyB0aGlzLCB3ZSB0aGVuIHNlZSB0aGUgdXNlIG9mIGNoZWVyaW8gdG8gcmVuZGVyIG91ciBjb21wb25lbnQuIENoZWVyaW8gYWxsb3dzIHVzIHRvIHRyYXZlcnNlIGFuZCBtYW5pcHVsYXRlIHRoZSBET00gdXNpbmcgaXRzIEFQSS4gQWRkaXRpb25hbGx5LCBDaGVlcmlvIGlzIGxpZ2h0aW5nIGZhc3QgYW5kIGFzIGEgcmVzdWx0IG9mIHRoYXQsIGl04oCZcyBhdCB0aGUgaGVhcnQgb2YgcG9wdWxhciBsaWJyYXJpZXMgbGlrZSBbZW56eW1lXShodHRwczovL2dpdGh1Yi5jb20vYWlyYm5iL2VuenltZS9ibG9iL21hc3Rlci9kb2NzL2FwaS9yZW5kZXIubWQpLlxcblxcblRha2luZyBhIGxvb2sgaW50byBvdXIgY29kZSwgd2UgY2FuIHVzZSBjaGVlcmlvJ3MgYC5sb2FkYCBtZXRob2QgdG8gcmVuZGVyIG91ciByZWFjdCBlbGVtZW50LiBGcm9tIHRoZXJlLCB3ZSBzaW1wbHkgcGFzcyBpbiB0aGUgc2VsZWN0b3Igb2YgdGhlIGNvbnRlbnRzIHdoaWNoIHdlIHdhbnQgdG8gY2hlY2suIEluIG91ciBjYXNlLCBpdCdzIHRoZSBgLnBvc3RgIGNsYXNzIEZvbGxvd2luZyBvdXIgc2VsZWN0b3IsIHdlIHRoZW4gc2VlIGNoZWVyaW/igJlzIGAuaHRtbCgpYCBtZXRob2Qgd2hpY2ggd2lsbCByZW5kZXIgdGhlIGNvbnRlbnQgZnJvbSBvdXIgc2VsZWN0b3IgYW5kIGFsbG93IHVzIHRvIGNoZWNrIGZvciBvdXIgY29tcG9uZW504oCZcyBwcm9wcy5cXG5cXG5gYGBqYXZhc2NyaXB0XFxuLy8gU2V0IHVwIGNoZWVyaW9cXG5jb25zdCBlbCA9IDxQb3N0IHsuLi5wcm9wc30gLz5cXG5jb25zdCAkID0gZG9tLmxvYWQocmVuZGVyKGVsKSk7XFxuY29uc3Qgb3V0cHV0ID0gJCjigJgucG9zdCcpLmh0bWwoKTtcXG5gYGBcXG5cXG4jIyMjIFN0ZXAgMyAtIFRlc3QgdGhlIHByb3BzXFxuVGhlIGxhc3QgdGhpbmcgd2UgbmVlZCB0byBkbyBpcyBjaGVjayB0aGUgcHJvcHMgb2Ygb3VyIGBvdXRwdXRgIHZhcmlhYmUuIFRvIGRvIHRoaXMsIHdlIGhhdmUgYW4gYGFjdHVhbGAgdmFsdWUgd2hpY2ggd2lsbCBjaGVjayB0byBzZWUgaWYgb3VyIGNvbXBvbmVudCBwYXNzZXMgb3VyIGBjaGVja1Byb3BzYCB0ZXN0LiBJZiBpdCBkb2VzLCB0aGF0IG1lYW5zIHRoZSBgYWN0dWFsYCB2YWx1ZSB3aWxsIHJldHVybiBgdHJ1ZWAgYW5kIGdpdmUgdXMgYSBwYXNzaW5nIHRlc3QhXFxuXFxuYGBgamF2YXNjcmlwdFxcbmNvbnN0IGFjdHVhbCA9IGNoZWNrUHJvcHMudGVzdChvdXRwdXQpO1xcbmNvbnN0IGV4cGVjdGVkID0gdHJ1ZTtcXG4vLyBhc3NlcnRzIHRoYXQgYWN0dWFsIGFuZCBleHBlY3RlZCBhcmUgZXF1YWxcXG5hc3NlcnQuc2FtZShhY3R1YWwsIGV4cGVjdGVkLCBtc2cpO1xcbi8vIGVuZHMgYXNzZXJ0aW9uIHRlc3RcXG5hc3NlcnQuZW5kKCk7XFxuYGBgXFxuXFxuIyMjIyBTdGVwIDQgLSBDZWxlYnJhdGUgKEZpbmFsIFdvcmRzKVxcbkF3ZXNvbWUhIFlvdeKAmXZlIG1hZGUgaXQgdG8gdGhlIGVuZC4gSG9wZWZ1bGx5IGJ5IG5vdyB5b3XigJl2ZSBnb3QgYSBnb29kIHVuZGVyc3RhbmRpbmcgb2YgaG93IGZ1bmN0aW9uYWwgc3RhdGVsZXNzIGNvbXBvbmVudHMgd29yayBpbiBSZWFjdC4gUGVyc29uYWxseSwgSSBjYW7igJl0IGdldCBlbm91Z2ggb2YgdGhlbSBhbmQgSSBoYXJkbHkgZXZlcnkgdHJ5IHRvIHVzZSBjbGFzc2VzIGluIG15IGNvZGUuIFdoeSB1c2UgYHRoaXNgIGlmIHlvdSBkb27igJl0IG5lZWQgdG8/IDopXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCJ9XVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Bvc3RzL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHR5cGUgUG9zdCB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL3Bvc3QnO1xuXG4vLyBpbXBvcnQgdGhlbWUgZnJvbSAnLi4vLi4vbGliL3RoZW1lJztcbmNvbnN0IEFuY2hvciA9IHN0eWxlZC5hYFxuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJztcbmA7XG5cbmNvbnN0IFBvc3RDYXJkID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogcmdiKDg2LCAxNTYsIDE4Myk7XG4gIHBhZGRpbmc6IDFlbTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW46IDEuNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHAge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBwIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG5gO1xuXG5jb25zdCBCdG4gPSBzdHlsZWQuYnV0dG9uYFxuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MCU7XG4gIGZvbnQtc2l6ZTogMS4xNWVtO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbjtcbiAgYmFja2dyb3VuZDogcmdiKDE0NywgMjA1LCAyMjcpO1xuICBtYXJnaW46IDE1cHg7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICM0OTc2OGM7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IHRpdGxlLCBkZXNjcmlwdGlvbiwgc2x1ZywgdGFncyB9OiBQb3N0ID0ge30pID0+XG4gIDxQb3N0Q2FyZD5cbiAgICA8aDMgaXRlbVByb3A9XCJoZWFkbGluZVwiIGNsYXNzTmFtZT1cInBvc3QtLXRpdGxlXCI+XG4gICAgICB7dGl0bGV9XG4gICAgPC9oMz5cbiAgICA8cD5cbiAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICA8L3A+XG4gICAgPExpbmsgcHJlZmV0Y2ggaHJlZj17YC9wb3N0P3Bvc3Q9JHtzbHVnfWB9IGFzPXtgL3Bvc3QvJHtzbHVnfWB9PlxuICAgICAgPEJ0bj5cbiAgICAgICAgeycgJ308QW5jaG9yPlJlYWQgUG9zdDwvQW5jaG9yPlxuICAgICAgPC9CdG4+XG4gICAgPC9MaW5rPlxuICAgIDxmb290ZXI+XG4gICAgICA8c21hbGwgY2xhc3NOYW1lPVwicG9zdC0tdGFnc1wiPlxuICAgICAgICA8c3Bhbj5GaWxlZCB1bmRlcjogPC9zcGFuPlxuICAgICAgICB7dGFncy5tYXAoKHRhZywgaW5kZXgpID0+XG4gICAgICAgICAgPHNwYW4ga2V5PXt0YWd9IGl0ZW1Qcm9wPVwia2V5d29yZHNcIiBjbGFzc05hbWU9XCJwb3N0LS10YWdcIj5cbiAgICAgICAgICAgIDxMaW5rIHByZWZldGNoXG4gICAgICAgICAgICAgIGhyZWY9e2AvdGFnP3RhZz0ke3RhZ31gfVxuICAgICAgICAgICAgICBhcz17YC90YWcvJHt0YWcucmVwbGFjZSgvXFxzKy9nLCAnLScpLnRvTG93ZXJDYXNlKCl9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAge3RhZ31cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAge2luZGV4ICE9PSB0YWdzLmxlbmd0aCAtIDEgPyAnLCAnIDogJyd9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICApfVxuICAgICAgPC9zbWFsbD5cbiAgICA8L2Zvb3Rlcj5cbiAgPC9Qb3N0Q2FyZD47XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9DYXJkL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGluaXRHQSwgbG9nUGFnZVZpZXcgfSBmcm9tICcuLi8uLi9saWIvZ29vZ2xlQW5hbHl0aWNzJztcblxuY29uc3Qgd2l0aEdBID0gQ29tcG9zZWRDb21wb25lbnQgPT5cbiAgY2xhc3MgSE9DIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGlmICghd2luZG93LkdBX0lOSVRJQUxJWkVEKSB7XG4gICAgICAgIGluaXRHQSgpO1xuICAgICAgICB3aW5kb3cuR0FfSU5JVElBTElaRUQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgbG9nUGFnZVZpZXcoKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gLz47XG4gICAgfVxuICB9O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoR0E7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9IT0NzL0dvb2dsZUFuYWx5dGljcy5qcyIsImltcG9ydCBSZWFjdEdBIGZyb20gJ3JlYWN0LWdhJztcblxuZXhwb3J0IGNvbnN0IGluaXRHQSA9ICgpID0+IHtcbiAgY29uc29sZS5sb2coJ0dBIGluaXQnKTtcbiAgUmVhY3RHQS5pbml0aWFsaXplKCdVQS0xMDU5OTQzMDktMScpO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvZ1BhZ2VWaWV3ID0gKCkgPT4ge1xuICBjb25zb2xlLmxvZyhgTG9nZ2luZyBwYWdldmlldyBmb3IgJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9YCk7XG4gIFJlYWN0R0Euc2V0KHsgcGFnZTogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lIH0pO1xuICBSZWFjdEdBLnBhZ2V2aWV3KHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9nRXZlbnQgPSAoY2F0ZWdvcnkgPSAnJywgYWN0aW9uID0gJycpID0+IHtcbiAgaWYgKGNhdGVnb3J5ICYmIGFjdGlvbikge1xuICAgIFJlYWN0R0EuZXZlbnQoeyBjYXRlZ29yeSwgYWN0aW9uIH0pO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgbG9nRXhjZXB0aW9uID0gKGRlc2NyaXB0aW9uID0gJycsIGZhdGFsID0gZmFsc2UpID0+IHtcbiAgaWYgKGRlc2NyaXB0aW9uKSB7XG4gICAgUmVhY3RHQS5leGNlcHRpb24oeyBkZXNjcmlwdGlvbiwgZmF0YWwgfSk7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL2dvb2dsZUFuYWx5dGljcy5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUtBO0FBUkE7QUFEQTtBQUpBO0FBQ0E7QUFZQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7O0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBR0E7QUFIQTtBQUFBO0FBR0E7QUFBQTtBQUFBOztBQWJBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBVkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUpBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQUNBOzs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUlBO0FBR0E7QUFKQTtBQUNBO0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBOzs7OztBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFQQTtBQUNBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbUVBO0FBbkVBOztBQW1FQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTEE7O0FBQUE7QUFTQTtBQVRBO0FBQ0E7O0FBUUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTEE7O0FBQUE7QUFRQTtBQVJBO0FBQ0E7O0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6SEE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFMQTtBQURBO0FBQ0E7O0FBVUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUlBO0FBSEE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUdBO0FBQUE7Ozs7QUFJQTtBQUNBO0FBQUE7Ozs7QUFJQTtBQUFBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7O0FBTEE7QUFPQTtBQVBBO0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUE3Q0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUF3QkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUdBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTs7QUFGQTtBQUlBO0FBSkE7QUFJQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQU5BO0FBaEJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuREE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7O0FBREE7QUFHQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFSQTtBQUFBO0FBQUE7QUFVQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBVkE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQWFBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7Ozs7O0FBREE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBSkE7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        