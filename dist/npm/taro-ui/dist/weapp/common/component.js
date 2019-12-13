'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _assign = require("../../../../babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = require("../../../../babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("../../../../babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("../../../../babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("../../../../babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("../../../../babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _keys = require("../../../../babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = require("../../../../babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _class, _temp;

var _index = require('../../../../@tarojs/taro-weapp/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var objectToString = function objectToString(style) {
  if (style && (typeof style === 'undefined' ? 'undefined' : (0, _typeof3.default)(style)) === 'object') {
    var styleStr = '';
    (0, _keys2.default)(style).forEach(function (key) {
      var lowerCaseKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      styleStr += lowerCaseKey + ':' + style[key] + ';';
    });
    return styleStr;
  } else if (style && typeof style === 'string') {
    return style;
  }
  return '';
};

var AtComponent = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(AtComponent, _Component);

  function AtComponent() {
    (0, _classCallCheck3.default)(this, AtComponent);
    return (0, _possibleConstructorReturn3.default)(this, (AtComponent.__proto__ || (0, _getPrototypeOf2.default)(AtComponent)).apply(this, arguments));
  }

  (0, _createClass3.default)(AtComponent, [{
    key: 'mergeStyle',
    value: function mergeStyle(style1, style2) {
      if (style1 && (typeof style1 === 'undefined' ? 'undefined' : (0, _typeof3.default)(style1)) === 'object' && style2 && (typeof style2 === 'undefined' ? 'undefined' : (0, _typeof3.default)(style2)) === 'object') {
        return (0, _assign2.default)({}, style1, style2);
      }
      return objectToString(style1) + objectToString(style2);
    }
  }]);
  return AtComponent;
}(_index.Component), _class.options = {
  addGlobalClass: true

  /**
   * 合并 style
   * @param {Object|String} style1
   * @param {Object|String} style2
   * @returns {String}
   */
}, _temp);
exports.default = AtComponent;