'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactModal = require('react-modal');

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