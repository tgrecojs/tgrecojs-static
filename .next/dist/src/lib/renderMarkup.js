'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _marked = require('marked');

var _marked2 = _interopRequireDefault(_marked);

var _prismjs = require('prismjs');

var _prismjs2 = _interopRequireDefault(_prismjs);

require('prismjs/components/prism-markdown');

require('prismjs/components/prism-jsx');

require('prismjs/components/prism-bash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderer = new _marked2.default.Renderer();
var langPrefix = 'language-';

// prettier-ignore
renderer.code = function (code, language) {
  return '<pre class="' + langPrefix + language + '"><code class="' + langPrefix + language + '">' + _prismjs2.default.highlight(code, _prismjs2.default.languages[language]) + '</code></pre>';
};
renderer.table = function (header, body) {
  return '<div class="table-wrapper"><table>' + header + body + '</table></div>';
};

_marked2.default.setOptions({
  gfm: true,
  breaks: true,
  langPrefix: langPrefix,
  renderer: renderer
});

exports.default = function (markdown) {
  return (0, _marked2.default)(markdown);
};