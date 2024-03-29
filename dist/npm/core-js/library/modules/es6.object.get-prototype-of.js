// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = require("./_to-object.js");
var $getPrototypeOf = require("./_object-gpo.js");

require("./_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});