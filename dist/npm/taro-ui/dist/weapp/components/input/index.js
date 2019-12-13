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

function getInputProps(props) {
  var actualProps = {
    type: props.type,
    maxLength: props.maxLength,
    disabled: props.disabled,
    password: false
  };

  switch (actualProps.type) {
    case 'phone':
      actualProps.type = 'number';
      actualProps.maxLength = 11;
      break;
    case 'password':
      actualProps.password = true;
      break;
    default:
      break;
  }
  if (!props.disabled && !props.editable) {
    actualProps.disabled = true;
  }
  return actualProps;
}

var AtInput = (_temp2 = _class = function (_AtComponent) {
  (0, _inherits3.default)(AtInput, _AtComponent);

  function AtInput() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, AtInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AtInput.__proto__ || (0, _getPrototypeOf2.default)(AtInput)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "rootCls", "containerCls", "overlayCls", "title", "name", "type", "password", "placeholderStyle", "placeholderCls", "placeholder", "cursorSpacing", "maxLength", "autoFocus", "focus", "value", "confirmType", "cursor", "selectionStart", "selectionEnd", "adjustPosition", "clear", "error", "editable", "className", "customStyle", "border", "placeholderClass", "children"], _this.onInput = function (event) {
      return _this.props.onChange(event.target.value, event);
    }, _this.onFocus = function (event) {
      return _this.props.onFocus(event.target.value, event);
    }, _this.onBlur = function (event) {
      _this.props.onBlur(event.target.value, event);
      // fix # 583 AtInput 不触发 onChange 的问题
      _this.props.onChange(event.target.value, event);
    }, _this.onConfirm = function (event) {
      return _this.props.onConfirm(event.target.value, event);
    }, _this.onClick = function () {
      return !_this.props.editable && _this.props.onClick();
    }, _this.clearValue = function () {
      return _this.props.onChange('');
    }, _this.onErrorClick = function () {
      return _this.props.onErrorClick();
    }, _this.customComponents = [], _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(AtInput, [{
    key: "_constructor",
    value: function _constructor(props) {
      (0, _get3.default)(AtInput.prototype.__proto__ || (0, _getPrototypeOf2.default)(AtInput.prototype), "_constructor", this).call(this, props);

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
          className = _props.className,
          customStyle = _props.customStyle,
          name = _props.name,
          cursorSpacing = _props.cursorSpacing,
          confirmType = _props.confirmType,
          cursor = _props.cursor,
          selectionStart = _props.selectionStart,
          selectionEnd = _props.selectionEnd,
          adjustPosition = _props.adjustPosition,
          border = _props.border,
          title = _props.title,
          error = _props.error,
          clear = _props.clear,
          placeholder = _props.placeholder,
          placeholderStyle = _props.placeholderStyle,
          placeholderClass = _props.placeholderClass,
          autoFocus = _props.autoFocus,
          focus = _props.focus,
          value = _props.value;

      var _getInputProps = getInputProps(this.__props),
          type = _getInputProps.type,
          maxLength = _getInputProps.maxLength,
          disabled = _getInputProps.disabled,
          password = _getInputProps.password;

      var rootCls = (0, _index6.default)('at-input', {
        'at-input--without-border': !border
      }, className);
      var containerCls = (0, _index6.default)('at-input__container', {
        'at-input--error': error,
        'at-input--disabled': disabled
      });
      var overlayCls = (0, _index6.default)('at-input__overlay', {
        'at-input__overlay--hidden': !disabled
      });
      var placeholderCls = (0, _index6.default)('placeholder', placeholderClass);

      var anonymousState__temp = (0, _index.internal_inline_style)(customStyle);
      (0, _assign2.default)(this.__state, {
        anonymousState__temp: anonymousState__temp,
        rootCls: rootCls,
        containerCls: containerCls,
        overlayCls: overlayCls,
        title: title,
        name: name,
        type: type,
        password: password,
        placeholderStyle: placeholderStyle,
        placeholderCls: placeholderCls,
        placeholder: placeholder,
        cursorSpacing: cursorSpacing,
        maxLength: maxLength,
        autoFocus: autoFocus,
        focus: focus,
        value: value,
        confirmType: confirmType,
        cursor: cursor,
        selectionStart: selectionStart,
        selectionEnd: selectionEnd,
        adjustPosition: adjustPosition,
        clear: clear,
        error: error
      });
      return this.__state;
    }
  }]);
  return AtInput;
}(_component2.default), _class.$$events = ["onClick", "onInput", "onFocus", "onBlur", "onConfirm", "clearValue", "onErrorClick"], _class.$$componentPath = "Users/tonglu/Desktop/\u8DD1\u817F\u6587\u6863/myApp/node_modules/taro-ui/dist/weapp/components/input/index", _temp2);

AtInput.defaultProps = {
  className: '',
  customStyle: '',
  value: '',
  name: '',
  placeholder: '',
  placeholderStyle: '',
  placeholderClass: '',
  title: '',
  cursorSpacing: 50,
  confirmType: '完成',
  cursor: 0,
  selectionStart: -1,
  selectionEnd: -1,
  adjustPosition: true,
  maxLength: 140,
  type: 'text',
  disabled: false,
  border: true,
  editable: true,
  error: false,
  clear: false,
  autoFocus: false,
  focus: false,
  onChange: function onChange() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  onConfirm: function onConfirm() {},
  onErrorClick: function onErrorClick() {},
  onClick: function onClick() {}
};

AtInput.propTypes = {
  className: _index4.default.oneOfType([_index4.default.string, _index4.default.array]),
  customStyle: _index4.default.oneOfType([_index4.default.string, _index4.default.object]),
  value: _index4.default.oneOfType([_index4.default.string, _index4.default.number]),
  name: _index4.default.string,
  placeholder: _index4.default.string,
  placeholderStyle: _index4.default.string,
  placeholderClass: _index4.default.string,
  title: _index4.default.string,
  confirmType: _index4.default.string,
  cursor: _index4.default.oneOfType([_index4.default.string, _index4.default.number]),
  selectionStart: _index4.default.oneOfType([_index4.default.string, _index4.default.number]),
  selectionEnd: _index4.default.oneOfType([_index4.default.string, _index4.default.number]),
  adjustPosition: _index4.default.bool,
  cursorSpacing: _index4.default.oneOfType([_index4.default.string, _index4.default.number]),
  maxLength: _index4.default.oneOfType([_index4.default.string, _index4.default.number]),
  type: _index4.default.string,
  disabled: _index4.default.bool,
  border: _index4.default.bool,
  editable: _index4.default.bool,
  error: _index4.default.bool,
  clear: _index4.default.bool,
  backgroundColor: _index4.default.string,
  autoFocus: _index4.default.bool,
  focus: _index4.default.bool,
  onChange: _index4.default.func,
  onFocus: _index4.default.func,
  onBlur: _index4.default.func,
  onConfirm: _index4.default.func,
  onErrorClick: _index4.default.func,
  onClick: _index4.default.func
};
exports.default = AtInput;

Component(require('../../../../../@tarojs/taro-weapp/index.js').default.createComponent(AtInput));