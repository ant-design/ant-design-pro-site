'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _css = require('antd/lib/input/style/css');

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _css2 = require('antd/lib/icon/style/css');

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _index = require('./index.less');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderSearch = function (_Component) {
  _inherits(HeaderSearch, _Component);

  function HeaderSearch() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, HeaderSearch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HeaderSearch.__proto__ || Object.getPrototypeOf(HeaderSearch)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      searchMode: false
    }, _this.toggleSearchMode = function () {
      _this.setState({ searchMode: !_this.state.searchMode }, function () {
        if (_this.state.searchMode) {
          _this.input.refs.input.focus();
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HeaderSearch, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          placeholder = _props.placeholder;

      var inputClass = (0, _classnames2.default)(_index2.default.input, _defineProperty({}, _index2.default.show, this.state.searchMode));
      return _react2.default.createElement(
        'span',
        { className: className },
        _react2.default.createElement(_icon2.default, { type: 'search', onClick: this.toggleSearchMode }),
        _react2.default.createElement(_input2.default, {
          className: inputClass,
          placeholder: placeholder,
          ref: function ref(node) {
            _this2.input = node;
          },
          onBlur: this.toggleSearchMode
        })
      );
    }
  }]);

  return HeaderSearch;
}(_react.Component);

exports.default = HeaderSearch;
module.exports = exports['default'];