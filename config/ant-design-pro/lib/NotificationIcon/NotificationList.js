'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _css = require('antd/lib/avatar/style/css');

var _avatar = require('antd/lib/avatar');

var _avatar2 = _interopRequireDefault(_avatar);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _NotificationList = require('./NotificationList.less');

var _NotificationList2 = _interopRequireDefault(_NotificationList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = function (_ref) {
  var _ref$data = _ref.data,
      data = _ref$data === undefined ? [] : _ref$data,
      _onClick = _ref.onClick;

  return _react2.default.createElement(
    'ul',
    { className: _NotificationList2.default.list },
    data.map(function (item) {
      var itemCls = (0, _classnames2.default)(_NotificationList2.default.item, _defineProperty({}, _NotificationList2.default.read, item.read));
      return _react2.default.createElement(
        'li',
        { className: itemCls, key: item.key, onClick: function onClick() {
            return _onClick(item);
          } },
        _react2.default.createElement(_avatar2.default, { className: _NotificationList2.default.avatar, src: item.avatar }),
        _react2.default.createElement(
          'div',
          { className: _NotificationList2.default.content },
          _react2.default.createElement(
            'h4',
            { className: _NotificationList2.default.title },
            item.title
          ),
          _react2.default.createElement(
            'div',
            { className: _NotificationList2.default.description },
            item.description
          ),
          _react2.default.createElement(
            'div',
            { className: _NotificationList2.default.extra },
            item.extra
          )
        )
      );
    })
  );
};

module.exports = exports['default'];