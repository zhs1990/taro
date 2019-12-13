"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _amapWx = require("@/libs/amap-wx.js");

var _amapWx2 = _interopRequireDefault(_amapWx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var myAmapFun = null;

var Index = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__1199", "$compid__1200", "$compid__1201", "$compid__1202", "latitude", "longitude", "current", "typeCurrent", "startLocation"], _this.config = {
      navigationBarTitleText: '首页'
    }, _this.customComponents = ["AtTabs", "AtTabsPane", "Runman"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        current: 0,
        typeCurrent: 0,
        latitude: '',
        longitude: '',
        startLocation: ''
      };
      this.$$refs = new _index2.default.RefsArray();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      myAmapFun = new _amapWx2.default.AMapWX({
        key: "  "
      });
      myAmapFun.getRegeo({
        success: function success(res) {
          _this2.setState({
            latitude: res[0].latitude,
            longitude: res[0].longitude
          });
        }
      });
    }
    // 切换业务

  }, {
    key: "handleClick",
    value: function handleClick(value) {
      this.setState({
        current: value
      });
    }

    // 切换业务线

  }, {
    key: "handleTypeClick",
    value: function handleTypeClick(value) {
      this.setState({
        typeCurrent: value
      });
    }

    // 拖动地图

  }, {
    key: "handleChange",
    value: function handleChange(e) {
      var _this3 = this;

      if (e.type === 'end') {
        var mapCtx = _index2.default.createMapContext('map');
        mapCtx.getCenterLocation({
          success: function success(res) {
            _this3.setState({
              latitude: res.latitude,
              longitude: res.longitude
            });
            myAmapFun.getRegeo({
              location: res.longitude + "," + res.latitude,
              success: function success(res2) {
                _this3.setState({
                  startLocation: res2[0].regeocodeData.pois[0].name
                });
              }
            });
          }
        });
      }
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _index.genCompid)(__prefix + "$compid__1199"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__1199 = _genCompid2[0],
          $compid__1199 = _genCompid2[1];

      var _genCompid3 = (0, _index.genCompid)(__prefix + "$compid__1200"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__1200 = _genCompid4[0],
          $compid__1200 = _genCompid4[1];

      var _genCompid5 = (0, _index.genCompid)(__prefix + "$compid__1201"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__1201 = _genCompid6[0],
          $compid__1201 = _genCompid6[1];

      var _genCompid7 = (0, _index.genCompid)(__prefix + "$compid__1202"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__1202 = _genCompid8[0],
          $compid__1202 = _genCompid8[1];

      var tabList = [{ title: '跑腿' }, { title: '代驾' }];
      var tabTypeList = [{ title: '帮我取' }, { title: '帮我送' }, { title: '帮我买' }, { title: '帮排队' }, { title: '帮我办' }];
      var _state = this.__state,
          latitude = _state.latitude,
          longitude = _state.longitude,
          current = _state.current,
          typeCurrent = _state.typeCurrent,
          startLocation = _state.startLocation;

      _index.propsManager.set({
        "current": current,
        "tabList": tabList,
        "onClick": this.handleClick.bind(this),
        "height": "100%",
        "swipeable": false
      }, $compid__1199, $prevCompid__1199);
      _index.propsManager.set({
        "current": current,
        "index": 0,
        "className": "driver"
      }, $compid__1200, $prevCompid__1200);
      _index.propsManager.set({
        "current": typeCurrent,
        "tabTypeList": tabTypeList,
        "onClick": this.handleTypeClick.bind(this),
        "startLocation": startLocation
      }, $compid__1201, $prevCompid__1201);
      _index.propsManager.set({
        "current": current,
        "index": 1,
        "className": "runman"
      }, $compid__1202, $prevCompid__1202);
      Object.assign(this.__state, {
        $compid__1199: $compid__1199,
        $compid__1200: $compid__1200,
        $compid__1201: $compid__1201,
        $compid__1202: $compid__1202
      });
      return this.__state;
    }
  }]);

  return Index;
}(_index.Component), _class.$$events = ["handleChange"], _class.$$componentPath = "pages/index/index", _temp2);
exports.default = Index;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index, true));