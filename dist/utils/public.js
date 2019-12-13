"use strict";

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _aes = require("./aes.js");

var _aes2 = _interopRequireDefault(_aes);

var _rsa = require("./rsa.js");

var _rsa2 = _interopRequireDefault(_rsa);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

//引用rsa源码js  

var publicKey = '-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC8ubGWvuRvV30WKVx5cXprH4AWQLxPdZ24UEntPv3VJofj9JteJOy2k4O0KMUoBuEEra8/+3AvkOQgApAWYbjJW2anxHSaDbz/lg0E3f7/9Lyxg1wvilmChGhDT1rF0JC23hmhx13JXxUkeCsMEiqjLrlICqiYD6RsgqWyELvWYwIDAQAB-----END PUBLIC KEY-----'; //引用AES源码js


function getNum() {
  var chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var nums = "";
  for (var i = 0; i < 32; i++) {
    var id = parseInt(Math.random() * 61);
    nums += chars[id];
  }
  return nums;
}
var num = getNum();
var key = _aes2.default.enc.Utf8.parse(num);
console.log("----密钥----" + num);
var iv = _aes2.default.enc.Utf8.parse('8101626604764947');

var encrypt_rsa = new _rsa2.default.RSAKey();
encrypt_rsa = _rsa2.default.KEYUTIL.getKey(publicKey);
var encStr = encrypt_rsa.encrypt(num);
encStr = _rsa2.default.hex2b64(encStr);
//console.log("加密结果：" + encStr)

// 加密之后aes密钥
_index2.default.setStorage({
  key: 'secretKey',
  data: encStr
});

//解密方法
function Decrypt(word) {
  var encryptedHexStr = _aes2.default.enc.Hex.parse(word);
  var srcs = _aes2.default.enc.Base64.stringify(encryptedHexStr);
  var decrypt = _aes2.default.AES.decrypt(srcs, key, { iv: iv, mode: _aes2.default.mode.CBC, padding: _aes2.default.pad.Pkcs7 });
  var decryptedStr = decrypt.toString(_aes2.default.enc.Utf8);
  return decryptedStr.toString();
}
//加密方法
function Encrypt(word) {
  var srcs = _aes2.default.enc.Utf8.parse(word);
  var encrypted = _aes2.default.AES.encrypt(srcs, key, { iv: iv, mode: _aes2.default.mode.CBC, padding: _aes2.default.pad.Pkcs7 });
  return _aes2.default.enc.Base64.stringify(_aes2.default.enc.Hex.parse(encrypted.ciphertext.toString().toUpperCase()));
}

module.exports.Decrypt = Decrypt;
module.exports.Encrypt = Encrypt;