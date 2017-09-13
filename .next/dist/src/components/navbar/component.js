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