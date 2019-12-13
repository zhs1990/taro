'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = login;

var _login = require('@/constants/login');

var INITIAL_STATE = {};

function login() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _login.LOGIN_GET_CODE:
      {
        return _extends({}, state);
      }
    case _login.LOGIN_IN:
      {
        console.log(state);
        return _extends({}, state);
      }
    default:
      return state;
  }
}