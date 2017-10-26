'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../src/components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Form = _styledComponents2.default.form.withConfig({
  displayName: 'subscribe__Form',
  componentId: 's1s2hfvu-0'
})(['max-width:100%;text-align:center;display:flex;flex-direction:column;div{display:flex;flex-wrap:wrap;max-width:80%;align-items:center;padding:1em;input,select,textarea{flex:1 0 220px;padding:.5em;border-radius:5px;}::placeholder{color:red;font-size:1.5em;}label{text-align:right;flex:1 0 120px;margin-right:2em;color:#fff;}@media (max-width:669px){label{text-align:left;}}}']);

var BtnRow = _styledComponents2.default.div.withConfig({
  displayName: 'subscribe__BtnRow',
  componentId: 's1s2hfvu-1'
})(['display:flex;justify-content:flex-end;button{width:60%;font-family:\'Lato\';padding:.5em;font-size:1.15em;color:#fff;border:2px solid #fff;border-radius:5px;transition:all .3s ease-in;background:rgb(147,205,227);margin:15px;&:hover{background:#49768c;}}@media (max-width:669px){button{width:100%;}}}']);

var APIKEY = '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';

var data = (0, _stringify2.default)({
  personalizations: [{
    to: [{
      email: 'john.doe@example.com',
      name: 'John Doe'
    }],
    subject: 'Hello, World!'
  }],
  from: {
    email: 'sam.smith@example.com',
    name: 'Sam Smith'
  },
  reply_to: {
    email: 'sam.smith@example.com',
    name: 'Sam Smith'
  },
  subject: 'Hello, World!',
  content: [{
    type: 'text/html',
    value: '<html><p>Hello, world!</p></html>'
  }]
});

var config = {
  headers: {
    Authorization: 'Bearer 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',
    'content-type': 'application/json'
  },
  url: 'https://wt-9a23f117fecfd46745cb0cfc8078d671-0.run.webtask.io/tgrecojs-signup',
  data: data
};
exports.default = (0, _Layout2.default)(function (_ref) {
  var settings = _ref.settings,
      _ref$emailData = _ref.emailData,
      emailData = _ref$emailData === undefined ? config : _ref$emailData;

  _axios2.default.post(emailData).then(function (response) {
    console.log(response);
    return response.json();
  }).catch(function (e) {
    return new Error('Problem with Sendrid', e);
  });
  return _react2.default.createElement(Form, {
    action: 'https://wt-9a23f117fecfd46745cb0cfc8078d671-0.run.webtask.io/tgrecojs-signup',
    method: 'POST'
  }, _react2.default.createElement('div', null, _react2.default.createElement('label', { htmlFor: 'to_email' }, 'Email'), _react2.default.createElement('input', { type: 'email', placeholder: 'from@gmail.com', name: 'to_email' })), _react2.default.createElement('div', null, _react2.default.createElement('label', { htmlFor: 'from_email' }, 'Email'), _react2.default.createElement('input', { type: 'email', placeholder: 'from@gmail.com', name: 'from_email' })), _react2.default.createElement('div', null, _react2.default.createElement('label', { htmlFor: 'title' }, 'title'), _react2.default.createElement('input', { type: 'text', placeholder: 'text', name: 'title' })), _react2.default.createElement(BtnRow, null, _react2.default.createElement('button', { type: 'submit' }, 'Click to Submit')));
}, 'Contact');