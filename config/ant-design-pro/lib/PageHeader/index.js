'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _css = require('antd/lib/breadcrumb/style/css');

var _breadcrumb = require('antd/lib/breadcrumb');

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _router = require('dva/router');

var _index = require('./index.less');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function itemRender(route, params, routes, paths) {
  var last = routes.indexOf(route) === routes.length - 1;
  return last || !route.component ? _react2.default.createElement(
    'span',
    null,
    route.breadcrumbName
  ) : _react2.default.createElement(
    _router.Link,
    { to: paths.join('/') },
    route.breadcrumbName
  );
}

exports.default = function (_ref) {
  var routes = _ref.routes,
      params = _ref.params,
      title = _ref.title,
      children = _ref.children;

  if (children === null) {
    return children;
  }
  return _react2.default.createElement(
    'div',
    { className: _index2.default.pageHeader },
    _react2.default.createElement(_breadcrumb2.default, { routes: routes, params: params, itemRender: itemRender }),
    _react2.default.createElement(
      'h1',
      null,
      title
    )
  );
};

module.exports = exports['default'];