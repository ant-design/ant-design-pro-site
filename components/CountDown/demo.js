webpackJsonp([16],{

/***/ 2391:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    'simple': __webpack_require__(4324),
}

/***/ }),

/***/ 4324:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "简单的倒计时组件使用。"
      ]
    ],
    "en-US": [
      [
        "p",
        "The simplest usage."
      ]
    ]
  },
  "meta": {
    "order": 0,
    "title": {
      "zh-CN": "基本",
      "en-US": "Basic"
    },
    "filename": "scaffold/src/components/CountDown/demo/simple.md",
    "id": "scaffold-src-components-CountDown-demo-simple"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#zh-CN",
          "title": "zh-CN"
        },
        "zh-CN"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> CountDown <span class=\"token keyword\">from</span> <span class=\"token string\">'ant-design-pro/lib/CountDown'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> targetTime <span class=\"token operator\">=</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">Date</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">getTime</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">+</span> <span class=\"token number\">3900000</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>CountDown</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> fontSize<span class=\"token punctuation\">:</span> <span class=\"token number\">20</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">target</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>targetTime<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(10);

  var _CountDown = __webpack_require__(4325);

  var _CountDown2 = _interopRequireDefault(_CountDown);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var targetTime = new Date().getTime() + 3900000;
  return React.createElement(_CountDown2.default, {
    style: {
      fontSize: 20
    },
    target: targetTime
  });
}
};

/***/ }),

/***/ 4325:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function fixedZero(val) {
  return val * 1 < 10 ? '0' + val : val;
}
var initTime = function initTime(props) {
  var lastTime = 0;
  var targetTime = 0;
  try {
    if (Object.prototype.toString.call(props.target) === '[object Date]') {
      targetTime = props.target.getTime();
    } else {
      targetTime = new Date(props.target).getTime();
    }
  } catch (e) {
    throw new Error('invalid target prop', e);
  }

  lastTime = targetTime - new Date().getTime();
  return {
    lastTime: lastTime < 0 ? 0 : lastTime
  };
};

var CountDown = function (_Component) {
  _inherits(CountDown, _Component);

  function CountDown(props) {
    _classCallCheck(this, CountDown);

    var _this = _possibleConstructorReturn(this, (CountDown.__proto__ || Object.getPrototypeOf(CountDown)).call(this, props));

    _initialiseProps.call(_this);

    var _initTime = initTime(props),
        lastTime = _initTime.lastTime;

    _this.state = {
      lastTime: lastTime
    };
    return _this;
  }

  _createClass(CountDown, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.tick();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var target = this.props.target;

      if (target !== prevProps.target) {
        clearTimeout(this.timer);
        this.tick();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timer);
    }

    // defaultFormat = time => (
    //  <span>{moment(time).format('hh:mm:ss')}</span>
    // );

  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$format = _props.format,
          format = _props$format === undefined ? this.defaultFormat : _props$format,
          onEnd = _props.onEnd,
          rest = _objectWithoutProperties(_props, ['format', 'onEnd']);

      var lastTime = this.state.lastTime;

      var result = format(lastTime);

      return _react2.default.createElement(
        'span',
        rest,
        result
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, preState) {
      var _initTime2 = initTime(nextProps),
          lastTime = _initTime2.lastTime;

      if (preState.lastTime !== lastTime) {
        return {
          lastTime: lastTime
        };
      }
      return null;
    }
  }]);

  return CountDown;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.timer = 0;
  this.interval = 1000;

  this.defaultFormat = function (time) {
    var hours = 60 * 60 * 1000;
    var minutes = 60 * 1000;

    var h = Math.floor(time / hours);
    var m = Math.floor((time - h * hours) / minutes);
    var s = Math.floor((time - h * hours - m * minutes) / 1000);
    return _react2.default.createElement(
      'span',
      null,
      fixedZero(h),
      ':',
      fixedZero(m),
      ':',
      fixedZero(s)
    );
  };

  this.tick = function () {
    var onEnd = _this2.props.onEnd;
    var lastTime = _this2.state.lastTime;


    _this2.timer = setTimeout(function () {
      if (lastTime < _this2.interval) {
        clearTimeout(_this2.timer);
        _this2.setState({
          lastTime: 0
        }, function () {
          if (onEnd) {
            onEnd();
          }
        });
      } else {
        lastTime -= _this2.interval;
        _this2.setState({
          lastTime: lastTime
        }, function () {
          _this2.tick();
        });
      }
    }, _this2.interval);
  };
};

exports.default = CountDown;

/***/ })

});