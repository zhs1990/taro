"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _index = require("../../../../../@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../../../../prop-types/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = require("../../../../../classnames/index.js");

var _index6 = _interopRequireDefault(_index5);

var _component = require("../../common/component.js");

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var AtTabsPane = (_temp2 = _class = function (_AtComponent) {
  (0, _inherits3.default)(AtTabsPane, _AtComponent);

  function AtTabsPane() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, AtTabsPane);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AtTabsPane.__proto__ || (0, _getPrototypeOf2.default)(AtTabsPane)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "customStyle", "className", "tabDirection", "index", "current", "children"], _this.customComponents = [], _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(AtTabsPane, [{
    key: "_constructor",
    value: function _constructor(props) {
      (0, _get3.default)(AtTabsPane.prototype.__proto__ || (0, _getPrototypeOf2.default)(AtTabsPane.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _index2.default.RefsArray();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _props = this.__props,
          customStyle = _props.customStyle,
          className = _props.className,
          tabDirection = _props.tabDirection,
          index = _props.index,
          current = _props.current;

      var anonymousState__temp = (0, _index6.default)({
        'at-tabs-pane': true,
        'at-tabs-pane--vertical': tabDirection === 'vertical',
        'at-tabs-pane--active': index === current,
        'at-tabs-pane--inactive': index !== current
      }, className);
      var anonymousState__temp2 = (0, _index.internal_inline_style)(customStyle);
      (0, _assign2.default)(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2
      });
      return this.__state;
    }
  }]);
  return AtTabsPane;
}(_component2.default), _class.$$events = [], _class.$$componentPath = "Users/tonglu/Desktop/\u8DD1\u817F\u6587\u6863/myApp/node_modules/taro-ui/dist/weapp/components/tabs-pane/index", _temp2);

AtTabsPane.defaultProps = {
  customStyle: '',
  className: '',
  tabDirection: 'horizontal',
  index: 0,
  current: 0
};

AtTabsPane.propTypes = {
  customStyle: _index4.default.oneOfType([_index4.default.object, _index4.default.string]),
  className: _index4.default.oneOfType([_index4.default.array, _index4.default.string]),
  tabDirection: _index4.default.oneOf(['horizontal', 'vertical']),
  index: _index4.default.number,
  current: _index4.default.number
};
exports.default = AtTabsPane;

Component(require('../../../../../@tarojs/taro-weapp/index.js').default.createComponent(AtTabsPane));