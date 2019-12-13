"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("../npm/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

exports.createAction = createAction;

var _request = require("./request.js");

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function createAction(options) {
  var url = options.url,
      payload = options.payload,
      method = options.method,
      fetchOptions = options.fetchOptions,
      cb = options.cb,
      type = options.type;

  return function (dispatch) {
    return (0, _request2.default)((0, _extends3.default)({ url: url, payload: payload, method: method }, fetchOptions)).then(function (res) {
      dispatch({ type: type, payload: cb ? cb(res) : res });
      return res;
    });
  };
} /**
   * 适当封装 Redux，简化调用
   */
/* eslint-disable import/prefer-default-export */