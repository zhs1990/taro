'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setGlobalData = setGlobalData;
exports.getGlobalData = getGlobalData;
//全局数据
var globalData = {};
function setGlobalData(key, val) {
  globalData[key] = val;
}
function getGlobalData(key) {
  return globalData[key];
}

//分销商ID
var DealarId = exports.DealarId = 9;

//高德key
var key = exports.key = 'd573be98c1efdb518ba4f190bb01fa97';