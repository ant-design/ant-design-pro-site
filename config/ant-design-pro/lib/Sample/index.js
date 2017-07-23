'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sample = function Sample(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: 'plus-sample' },
    children || '示例业务组件'
  );
};

Sample.propTypes = {};

exports.default = Sample;
module.exports = exports['default'];