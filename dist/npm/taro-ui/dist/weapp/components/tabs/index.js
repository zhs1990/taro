"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require("../../../../../babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = require("../../../../../babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = require("../../../../../babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("../../../../../babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("../../../../../babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("../../../../../babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require("../../../../../babel-runtime/helpers/get.js");

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require("../../../../../babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _index2 = require("../../../../../@tarojs/taro-weapp/index.js");

var _index3 = _interopRequireDefault(_index2);

var _index4 = require("../../../../../prop-types/index.js");

var _index5 = _interopRequireDefault(_index4);

var _index6 = require("../../../../../classnames/index.js");

var _index7 = _interopRequireDefault(_index6);

var _utils = require("../../common/utils.js");

var _component = require("../../common/component.js");

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var ENV = _index3.default.getEnv();
var MIN_DISTANCE = 100;
var MAX_INTERVAL = 10;

var AtTabs = (_temp2 = _class = function (_AtComponent) {
  (0, _inherits3.default)(AtTabs, _AtComponent);

  function AtTabs() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, AtTabs);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AtTabs.__proto__ || (0, _getPrototypeOf2.default)(AtTabs)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "loopArray0", "tabList", "rootCls", "scroll", "_tabId", "scrollX", "scrollY", "_scrollLeft", "_scrollTop", "_scrollIntoView", "swipeable", "tabDirection", "current", "customStyle", "className", "height", "animated", "children"], _this.updateState = function (idx) {
      if (_this.props.scroll) {
        // 标签栏滚动
        switch (ENV) {
          case _index3.default.ENV_TYPE.WEAPP:
          case _index3.default.ENV_TYPE.ALIPAY:
          case _index3.default.ENV_TYPE.SWAN:
            var index = Math.max(idx - 1, 0);
            _this.setState({
              _scrollIntoView: "tab" + index
            });
            break;

          case _index3.default.ENV_TYPE.WEB:
            {
              var _index = Math.max(idx - 1, 0);
              var prevTabItem = _this.tabHeaderRef.childNodes[_index];
              prevTabItem && _this.setState({
                _scrollTop: prevTabItem.offsetTop,
                _scrollLeft: prevTabItem.offsetLeft
              });
              break;
            }

          default:
            console.warn('AtTab 组件在该环境还未适配');
            break;
        }
      }
    }, _this.customComponents = [], _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(AtTabs, [{
    key: "_constructor",
    value: function _constructor() {
      (0, _get3.default)(AtTabs.prototype.__proto__ || (0, _getPrototypeOf2.default)(AtTabs.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        _scrollLeft: '',
        _scrollTop: '',
        _scrollIntoView: ''
      };
      this._tabId = (0, _utils.isTest)() ? 'tabs-AOTU2018' : (0, _utils.uuid)();
      // 触摸时的原点
      this._touchDot = 0;
      // 定时器
      this._timer = null;
      // 滑动时间间隔
      this._interval = 0;
      // 是否已经在滑动
      this._isMoving = false;
      this.$$refs = new _index3.default.RefsArray();
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      var _props;

      (_props = this.props).onClick.apply(_props, arguments);
    }
  }, {
    key: "handleTouchStart",
    value: function handleTouchStart(e) {
      var _this2 = this;

      var _props2 = this.props,
          swipeable = _props2.swipeable,
          tabDirection = _props2.tabDirection;

      if (!swipeable || tabDirection === 'vertical') {
        return;
      } // 获取触摸时的原点
      this._touchDot = e.touches[0].pageX;
      // 使用js计时器记录时间
      this._timer = setInterval(function () {
        _this2._interval++;
      }, 100);
    }
  }, {
    key: "handleTouchMove",
    value: function handleTouchMove(e) {
      var _props3 = this.props,
          swipeable = _props3.swipeable,
          tabDirection = _props3.tabDirection,
          current = _props3.current,
          tabList = _props3.tabList;

      if (!swipeable || tabDirection === 'vertical') {
        return;
      }var touchMove = e.touches[0].pageX;
      var moveDistance = touchMove - this._touchDot;
      var maxIndex = tabList.length;

      if (!this._isMoving && this._interval < MAX_INTERVAL && this._touchDot > 20) {
        // 向左滑动
        if (current + 1 < maxIndex && moveDistance <= -100) {
          this._isMoving = true;
          this.handleClick(current + 1);

          // 向右滑动
        } else if (current - 1 >= 0 && moveDistance >= MIN_DISTANCE) {
          this._isMoving = true;
          this.handleClick(current - 1);
        }
      }
    }
  }, {
    key: "handleTouchEnd",
    value: function handleTouchEnd() {
      var _props4 = this.props,
          swipeable = _props4.swipeable,
          tabDirection = _props4.tabDirection;

      if (!swipeable || tabDirection === 'vertical') {
        return;
      }clearInterval(this._timer);
      this._interval = 0;
      this._isMoving = false;
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.scroll !== this.props.scroll) {
        this.getTabHeaderRef();
      }
      if (nextProps.current !== this.props.current) {
        this.updateState(nextProps.current);
      }
    }
  }, {
    key: "getTabHeaderRef",
    value: function getTabHeaderRef() {
      if (ENV === _index3.default.ENV_TYPE.WEB) {
        this.tabHeaderRef = document.getElementById(this._tabId);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getTabHeaderRef();
      this.updateState(this.props.current);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.tabHeaderRef = null;
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _classNames;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      var _tabId = this._tabId;
      var _props5 = this.__props,
          customStyle = _props5.customStyle,
          className = _props5.className,
          height = _props5.height,
          tabDirection = _props5.tabDirection,
          animated = _props5.animated,
          tabList = _props5.tabList,
          scroll = _props5.scroll,
          current = _props5.current;
      var _state = this.__state,
          _scrollLeft = _state._scrollLeft,
          _scrollTop = _state._scrollTop,
          _scrollIntoView = _state._scrollIntoView;

      var heightStyle = { height: height };
      var underlineStyle = {
        height: tabDirection === 'vertical' ? tabList.length * 100 + "%" : '1PX',
        width: tabDirection === 'horizontal' ? tabList.length * 100 + "%" : '1PX'
      };
      var bodyStyle = {};
      var transformStyle = "translate3d(0px, -" + current * 100 + "%, 0px)";
      if (tabDirection === 'horizontal') {
        transformStyle = "translate3d(-" + current * 100 + "%, 0px, 0px)";
      }
      (0, _assign2.default)(bodyStyle, {
        'transform': transformStyle,
        '-webkit-transform': transformStyle
      });
      if (!animated) {
        bodyStyle.transition = 'unset';
      }

      var rootCls = (0, _index7.default)((_classNames = {
        'at-tabs': true,
        'at-tabs--scroll': scroll
      }, (0, _defineProperty3.default)(_classNames, "at-tabs--" + tabDirection, true), (0, _defineProperty3.default)(_classNames, "at-tabs--" + ENV, true), _classNames), className);
      var scrollX = tabDirection === 'horizontal';
      var scrollY = tabDirection === 'vertical';

      var anonymousState__temp = (0, _index2.internal_inline_style)(this.mergeStyle(heightStyle, customStyle));
      var anonymousState__temp2 = scroll ? (0, _index2.internal_inline_style)(heightStyle) : null;
      var anonymousState__temp3 = (0, _index2.internal_inline_style)(this.mergeStyle(bodyStyle, heightStyle));
      var anonymousState__temp4 = (0, _index2.internal_inline_style)(underlineStyle);
      var loopArray0 = tabList.map(function (item, idx) {
        item = {
          $original: (0, _index2.internal_get_original)(item)
        };

        var itemCls = (0, _index7.default)({
          'at-tabs__item': true,
          'at-tabs__item--active': current === idx
        });

        return {
          itemCls: itemCls,
          $original: item.$original
        };
      });
      (0, _assign2.default)(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        loopArray0: loopArray0,
        tabList: tabList,
        rootCls: rootCls,
        scroll: scroll,
        _tabId: _tabId,
        scrollX: scrollX,
        scrollY: scrollY
      });
      return this.__state;
    }
  }]);
  return AtTabs;
}(_component2.default), _class.$$events = ["handleClick", "handleTouchStart", "handleTouchEnd", "handleTouchMove"], _class.$$componentPath = "Users/tonglu/Desktop/\u8DD1\u817F\u6587\u6863/myApp/node_modules/taro-ui/dist/weapp/components/tabs/index", _temp2);

AtTabs.defaultProps = {
  isTest: false,
  customStyle: '',
  className: '',
  tabDirection: 'horizontal',
  height: '',
  current: 0,
  swipeable: true,
  scroll: false,
  animated: true,
  tabList: [],
  onClick: function onClick() {}
};

AtTabs.propTypes = {
  customStyle: _index5.default.oneOfType([_index5.default.object, _index5.default.string]),
  className: _index5.default.oneOfType([_index5.default.array, _index5.default.string]),
  isTest: _index5.default.bool,
  height: _index5.default.string,
  tabDirection: _index5.default.oneOf(['horizontal', 'vertical']),
  current: _index5.default.number,
  swipeable: _index5.default.bool,
  scroll: _index5.default.bool,
  animated: _index5.default.bool,
  tabList: _index5.default.array,
  onClick: _index5.default.func
};
exports.default = AtTabs;

Component(require('../../../../../@tarojs/taro-weapp/index.js').default.createComponent(AtTabs));