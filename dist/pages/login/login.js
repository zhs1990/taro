'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _class2, _temp2;

var _index = require('../../npm/@tarojs/taro-weapp/index.js');

var _index2 = _interopRequireDefault(_index);

var _redux = require('@tarojs/redux');

var _login = require('@/actions/login');

var actions = _interopRequireWildcard(_login);

var _global = require('@/utils/global');

var _public = require('@/utils/public');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = (_dec = (0, _redux.connect)(function (state) {
  return state.login;
}, actions), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(Login, _BaseComponent);

  function Login() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Login);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Login.__proto__ || Object.getPrototypeOf(Login)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__1203", "$compid__1204", "$compid__1205", "$compid__1206", "phone", "code", "dispatchLogin"], _this.config = {
      navigationBarTitleText: '麒麟代驾'
    }, _this.customComponents = ["AtInput", "AtButton"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Login, [{
    key: '_constructor',
    value: function _constructor() {
      _get(Login.prototype.__proto__ || Object.getPrototypeOf(Login.prototype), '_constructor', this).apply(this, arguments);
      this.state = {
        phone: '',
        code: ''
      };
      this.$$refs = new _index2.default.RefsArray();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'handlePhoneClick',
    value: function handlePhoneClick() {
      var jsonBunch = {
        Mobile: this.state.phone,
        DealerId: _global.DealarId,
        AreaCode: (0, _global.getGlobalData)("Adcode")
      };
      var payload = (0, _public.Encrypt)(JSON.stringify(jsonBunch));
      this.props.dispatchLogin({
        key: _index2.default.getStorageSync('secretKey'),
        content: payload,
        DealerId: _global.DealarId,
        AreaCode: (0, _global.getGlobalData)("Adcode")
      });
    }
  }, {
    key: 'handlePhoneChange',
    value: function handlePhoneChange(value) {
      this.setState({
        phone: value
      });
      // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
      return value;
    }
  }, {
    key: 'handleCodeChange',
    value: function handleCodeChange(value) {
      this.setState({
        code: value
      });
      // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
      return value;
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _index.genCompid)(__prefix + "$compid__1203"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__1203 = _genCompid2[0],
          $compid__1203 = _genCompid2[1];

      var _genCompid3 = (0, _index.genCompid)(__prefix + "$compid__1204"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__1204 = _genCompid4[0],
          $compid__1204 = _genCompid4[1];

      var _genCompid5 = (0, _index.genCompid)(__prefix + "$compid__1205"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__1205 = _genCompid6[0],
          $compid__1205 = _genCompid6[1];

      var _genCompid7 = (0, _index.genCompid)(__prefix + "$compid__1206"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__1206 = _genCompid8[0],
          $compid__1206 = _genCompid8[1];

      _index.propsManager.set({
        "className": "input",
        "name": "value",
        "title": "",
        "type": "number",
        "placeholder": '\u8BF7\u8F93\u5165\u624B\u673A\u53F72',
        "placeholderClass": "placeholderstyle",
        "value": this.__state.phone,
        "onChange": this.handlePhoneChange.bind(this),
        "maxLength": 11
      }, $compid__1203, $prevCompid__1203);
      _index.propsManager.set({
        "className": "input",
        "name": "value",
        "title": "",
        "type": "number",
        "placeholder": '\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801',
        "placeholderClass": "placeholderstyle",
        "value": this.__state.code,
        "onChange": this.handleCodeChange.bind(this),
        "maxLength": 4
      }, $compid__1204, $prevCompid__1204);
      _index.propsManager.set({
        "type": "primary",
        "size": "small",
        "className": "getCode",
        "onClick": this.handlePhoneClick.bind(this)
      }, $compid__1205, $prevCompid__1205);
      _index.propsManager.set({
        "type": "primary",
        "className": "login"
      }, $compid__1206, $prevCompid__1206);
      Object.assign(this.__state, {
        $compid__1203: $compid__1203,
        $compid__1204: $compid__1204,
        $compid__1205: $compid__1205,
        $compid__1206: $compid__1206
      });
      return this.__state;
    }
  }]);

  return Login;
}(_index.Component), _class2.$$events = [], _class2.$$componentPath = "pages/login/login", _temp2)) || _class);
exports.default = Login;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Login, true));