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
  displayName: 'contact__Form',
  componentId: 's1ar2g3-0'
})(['max-width:100%;text-align:center;display:flex;flex-direction:column;div{display:flex;flex-wrap:wrap;max-width:80%;align-items:center;padding:1em;input,select,textarea{flex:1 0 220px;padding:.5em;border-radius:5px;}::placeholder{color:red;font-size:1.5em;}label{text-align:right;flex:1 0 120px;margin-right:2em;color:#fff;}@media (max-width:669px){label{text-align:left;}}}']);

var BtnRow = _styledComponents2.default.div.withConfig({
  displayName: 'contact__BtnRow',
  componentId: 's1ar2g3-1'
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
exports.default = (0, _Layout2.default)(function () {
  return _react2.default.createElement(Form, { action: 'https://formspree.io/hello@tgrecojs.com', method: 'POST' }, _react2.default.createElement('div', null, _react2.default.createElement('label', { htmlFor: 'name' }, 'Name'), _react2.default.createElement('input', { type: 'text', placeholder: '', name: 'name' })), _react2.default.createElement('div', null, _react2.default.createElement('label', { htmlFor: 'email' }, 'Email'), _react2.default.createElement('input', { type: 'email', placeholder: 'johndoe@gmail.com', name: '_replyto' })), _react2.default.createElement('div', null, _react2.default.createElement('label', { htmlFor: 'reasonSelected' }, 'Subject'), _react2.default.createElement('select', { name: 'reasonSelected' }, _react2.default.createElement('option', { value: 'Engineering Opportunity' }, 'JavaScript Engineering Opportunity'), _react2.default.createElement('option', { value: 'Development Opportunity' }, 'Website Development and Design'), _react2.default.createElement('option', { value: 'Graphic Design' }, 'Logo & Icon Design'), _react2.default.createElement('option', { value: 'mentorship' }, 'JavaScript Mentorship'), _react2.default.createElement('option', { value: 'other' }, 'Just saying Hello!'))), _react2.default.createElement('div', null, _react2.default.createElement('label', { htmlFor: 'reason' }, 'More Info'), _react2.default.createElement('textarea', {
    type: 'text',
    rows: '10',
    columns: '4',
    placeholder: 'Use this text area to provide some more information regarding your inquiry.',
    name: 'reason'
  })), _react2.default.createElement(BtnRow, null, _react2.default.createElement('button', { type: 'submit' }, 'Click to Submit')));
}, 'Contact');