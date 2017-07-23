'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _css = require('antd/lib/popover/style/css');

var _popover = require('antd/lib/popover');

var _popover2 = _interopRequireDefault(_popover);

var _css2 = require('antd/lib/badge/style/css');

var _badge = require('antd/lib/badge');

var _badge2 = _interopRequireDefault(_badge);

var _css3 = require('antd/lib/icon/style/css');

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _css4 = require('antd/lib/tabs/style/css');

var _tabs = require('antd/lib/tabs');

var _tabs2 = _interopRequireDefault(_tabs);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _NotificationList = require('./NotificationList');

var _NotificationList2 = _interopRequireDefault(_NotificationList);

var _index = require('./index.less');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabPane = _tabs2.default.TabPane;


var data = [{
  key: '1',
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
  title: '标题',
  description: '描述信息',
  extra: '2017-07-12'
}, {
  key: '2',
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
  title: '标题',
  description: '消息内容不要超过两行文字，超出时，自动省略超出部分，用…替代',
  extra: '2017-07-12'
}, {
  key: '3',
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
  title: '标题',
  description: '描述信息描述信息描述信息',
  extra: '2017-07-12',
  read: true
}, {
  key: '4',
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
  title: '标题',
  description: '描述信息',
  extra: '2017-07-12'
}, {
  key: '5',
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
  title: '标题标题',
  description: '描述信息',
  extra: '2017-07-12'
}];

var NotificationIcon = function (_Component) {
  _inherits(NotificationIcon, _Component);

  function NotificationIcon() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NotificationIcon);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NotificationIcon.__proto__ || Object.getPrototypeOf(NotificationIcon)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      tabType: 'notice'
    }, _this.onItemClick = function (item, type) {
      var onItemClick = _this.props.onItemClick;

      onItemClick(item, type);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NotificationIcon, [{
    key: 'getNotificationBox',
    value: function getNotificationBox() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _tabs2.default,
          { defaultActiveKey: this.state.tabType, className: _index2.default.tabs },
          _react2.default.createElement(
            TabPane,
            { tab: '\u901A\u77E5 (3)', key: 'notice' },
            _react2.default.createElement(_NotificationList2.default, { data: data, onClick: function onClick(item) {
                return _this2.onItemClick(item, 'notice');
              } })
          ),
          _react2.default.createElement(
            TabPane,
            { tab: '\u6D88\u606F (4)', key: 'message', onClick: this.onItemClick },
            _react2.default.createElement(_NotificationList2.default, { data: data, onClick: function onClick(item) {
                return _this2.onItemClick(item, 'notice');
              } })
          ),
          _react2.default.createElement(
            TabPane,
            { tab: '\u4EE3\u529E (2)', key: 'todo', onClick: this.onItemClick },
            _react2.default.createElement(_NotificationList2.default, { data: data, onClick: function onClick(item) {
                return _this2.onItemClick(item, 'notice');
              } })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: _index2.default.clear, onClick: this.props.onClearUnread },
          '\u6E05\u7A7A\u901A\u77E5'
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          count = _props.count;

      var iconClass = (0, _classnames2.default)(className, _index2.default.icon);
      return _react2.default.createElement(
        _popover2.default,
        {
          placement: 'bottomRight',
          content: this.getNotificationBox(),
          popupClassName: _index2.default.popover,
          trigger: 'click',
          arrowPointAtCenter: true
        },
        _react2.default.createElement(
          _badge2.default,
          { count: count, className: _index2.default.badge },
          _react2.default.createElement(_icon2.default, { className: iconClass, type: 'bell' })
        )
      );
    }
  }]);

  return NotificationIcon;
}(_react.Component);

NotificationIcon.defaultProps = {
  onItemClick: function onItemClick() {}
};
exports.default = NotificationIcon;
module.exports = exports['default'];