'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("../npm/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("../npm/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = require("../npm/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

var _index = require('../npm/@tarojs/taro-weapp/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var CODE_SUCCESS = 200;
var CODE_AUTH_EXPIRED = 400;

function getStorage(key) {
  return _index2.default.getStorage({ key: key }).then(function (res) {
    return res.data;
  }).catch(function () {
    return '';
  });
}

function updateStorage() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return _promise2.default.all([_index2.default.setStorage({ key: 'token', data: data['3rdSession'] || '' }), _index2.default.setStorage({ key: 'uid', data: data['uid'] || '' })]);
}

/**
 * 简易封装网络请求
 * // NOTE 需要注意 RN 不支持 *StorageSync，此处用 async/await 解决
 * @param {*} options
 */

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(options) {
    var _this = this;

    var url, payload, _options$method, method, _options$showToast, showToast, _options$autoLogin, autoLogin, token, header;

    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            url = options.url, payload = options.payload, _options$method = options.method, method = _options$method === undefined ? 'POST' : _options$method, _options$showToast = options.showToast, showToast = _options$showToast === undefined ? true : _options$showToast, _options$autoLogin = options.autoLogin, autoLogin = _options$autoLogin === undefined ? true : _options$autoLogin;
            _context2.next = 3;
            return getStorage('token');

          case 3:
            token = _context2.sent;
            header = {
              'content-type': 'application/json',
              UserToken: token ? token : '',
              'cache-control': 'max-age=60'
            };
            return _context2.abrupt('return', _index2.default.request({
              url: url,
              method: method,
              data: payload,
              header: header
            }).then(function () {
              var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(res) {
                var _res$data, Code, Data, Message;

                return _regenerator2.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _res$data = res.data, Code = _res$data.Code, Data = _res$data.Data, Message = _res$data.Message;

                        if (!(Code !== CODE_SUCCESS)) {
                          _context.next = 6;
                          break;
                        }

                        if (!(Code === CODE_AUTH_EXPIRED)) {
                          _context.next = 5;
                          break;
                        }

                        _context.next = 5;
                        return updateStorage({});

                      case 5:
                        return _context.abrupt('return', _promise2.default.reject(res.data));

                      case 6:
                        _index2.default.showToast({
                          title: Message ? Message : '啥',
                          icon: 'none'
                        });
                        return _context.abrupt('return', Data);

                      case 8:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, _this);
              }));

              return function (_x3) {
                return _ref2.apply(this, arguments);
              };
            }()));

          case 6:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  function fetch(_x2) {
    return _ref.apply(this, arguments);
  }

  return fetch;
}();