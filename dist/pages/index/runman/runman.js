"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Runman = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Runman, _BaseComponent);

  function Runman() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Runman);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Runman.__proto__ || Object.getPrototypeOf(Runman)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__1188", "$compid__1189", "$compid__1190", "$compid__1191", "$compid__1192", "$compid__1193", "$compid__1194", "$compid__1195", "$compid__1196", "$compid__1197", "$compid__1198", "startLocation", "tabTypeList", "current", "onClick"], _this.customComponents = ["AtTabs", "AtTabsPane", "AtButton"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Runman, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Runman.prototype.__proto__ || Object.getPrototypeOf(Runman.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _index2.default.RefsArray();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _index.genCompid)(__prefix + "$compid__1188"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__1188 = _genCompid2[0],
          $compid__1188 = _genCompid2[1];

      var _genCompid3 = (0, _index.genCompid)(__prefix + "$compid__1189"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__1189 = _genCompid4[0],
          $compid__1189 = _genCompid4[1];

      var _genCompid5 = (0, _index.genCompid)(__prefix + "$compid__1190"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__1190 = _genCompid6[0],
          $compid__1190 = _genCompid6[1];

      var _genCompid7 = (0, _index.genCompid)(__prefix + "$compid__1191"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__1191 = _genCompid8[0],
          $compid__1191 = _genCompid8[1];

      var _genCompid9 = (0, _index.genCompid)(__prefix + "$compid__1192"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__1192 = _genCompid10[0],
          $compid__1192 = _genCompid10[1];

      var _genCompid11 = (0, _index.genCompid)(__prefix + "$compid__1193"),
          _genCompid12 = _slicedToArray(_genCompid11, 2),
          $prevCompid__1193 = _genCompid12[0],
          $compid__1193 = _genCompid12[1];

      var _genCompid13 = (0, _index.genCompid)(__prefix + "$compid__1194"),
          _genCompid14 = _slicedToArray(_genCompid13, 2),
          $prevCompid__1194 = _genCompid14[0],
          $compid__1194 = _genCompid14[1];

      var _genCompid15 = (0, _index.genCompid)(__prefix + "$compid__1195"),
          _genCompid16 = _slicedToArray(_genCompid15, 2),
          $prevCompid__1195 = _genCompid16[0],
          $compid__1195 = _genCompid16[1];

      var _genCompid17 = (0, _index.genCompid)(__prefix + "$compid__1196"),
          _genCompid18 = _slicedToArray(_genCompid17, 2),
          $prevCompid__1196 = _genCompid18[0],
          $compid__1196 = _genCompid18[1];

      var _genCompid19 = (0, _index.genCompid)(__prefix + "$compid__1197"),
          _genCompid20 = _slicedToArray(_genCompid19, 2),
          $prevCompid__1197 = _genCompid20[0],
          $compid__1197 = _genCompid20[1];

      var _genCompid21 = (0, _index.genCompid)(__prefix + "$compid__1198"),
          _genCompid22 = _slicedToArray(_genCompid21, 2),
          $prevCompid__1198 = _genCompid22[0],
          $compid__1198 = _genCompid22[1];

      var _props = this.__props,
          tabTypeList = _props.tabTypeList,
          current = _props.current,
          onClick = _props.onClick,
          startLocation = _props.startLocation;

      _index.propsManager.set({
        "current": current,
        "tabList": tabTypeList,
        "onClick": this.__props.onClick,
        "swipeable": false
      }, $compid__1188, $prevCompid__1188);
      _index.propsManager.set({
        "current": current,
        "index": 0
      }, $compid__1189, $prevCompid__1189);
      _index.propsManager.set({
        "type": "primary",
        "size": "small"
      }, $compid__1190, $prevCompid__1190);
      _index.propsManager.set({
        "current": current,
        "index": 1
      }, $compid__1191, $prevCompid__1191);
      _index.propsManager.set({
        "type": "primary",
        "size": "small"
      }, $compid__1192, $prevCompid__1192);
      _index.propsManager.set({
        "current": current,
        "index": 2
      }, $compid__1193, $prevCompid__1193);
      _index.propsManager.set({
        "type": "primary",
        "size": "small"
      }, $compid__1194, $prevCompid__1194);
      _index.propsManager.set({
        "current": current,
        "index": 3
      }, $compid__1195, $prevCompid__1195);
      _index.propsManager.set({
        "type": "primary",
        "size": "small"
      }, $compid__1196, $prevCompid__1196);
      _index.propsManager.set({
        "current": current,
        "index": 4
      }, $compid__1197, $prevCompid__1197);
      _index.propsManager.set({
        "type": "primary",
        "size": "small"
      }, $compid__1198, $prevCompid__1198);
      Object.assign(this.__state, {
        $compid__1188: $compid__1188,
        $compid__1189: $compid__1189,
        $compid__1190: $compid__1190,
        $compid__1191: $compid__1191,
        $compid__1192: $compid__1192,
        $compid__1193: $compid__1193,
        $compid__1194: $compid__1194,
        $compid__1195: $compid__1195,
        $compid__1196: $compid__1196,
        $compid__1197: $compid__1197,
        $compid__1198: $compid__1198,
        startLocation: startLocation
      });
      return this.__state;
    }
  }]);

  return Runman;
}(_index.Component), _class.$$events = [], _class.$$componentPath = "pages/index/runman/runman", _temp2);
exports.default = Runman;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Runman));