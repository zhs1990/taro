"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dispatchLogin = undefined;

var _login = require("../constants/login.js");

var _api = require("../constants/api.js");

var _redux = require("../utils/redux.js");

/**
 * 获取验证码
 * @param {*} payload
 */
var dispatchLogin = exports.dispatchLogin = function dispatchLogin(payload) {
  return (0, _redux.createAction)({
    url: _api.API_LOGIN_GET_CODE,
    type: _login.LOGIN_GET_CODE,
    payload: payload
  });
};