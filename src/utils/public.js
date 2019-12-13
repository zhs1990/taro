import Taro from '@tarojs/taro'
import CryptoJS from '@/utils/aes.js' //引用AES源码js
import RSA from '@/utils/rsa.js' //引用rsa源码js  

var publicKey = '-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC8ubGWvuRvV30WKVx5cXprH4AWQLxPdZ24UEntPv3VJofj9JteJOy2k4O0KMUoBuEEra8/+3AvkOQgApAWYbjJW2anxHSaDbz/lg0E3f7/9Lyxg1wvilmChGhDT1rF0JC23hmhx13JXxUkeCsMEiqjLrlICqiYD6RsgqWyELvWYwIDAQAB-----END PUBLIC KEY-----';

function getNum() {
    var chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var nums = "";
    for (var i = 0; i < 32; i++) {
        var id = parseInt(Math.random() * 61);
        nums += chars[id];
    }
    return nums;
}
var num = getNum()
var key = CryptoJS.enc.Utf8.parse(num);
console.log("----密钥----" +num)
var iv = CryptoJS.enc.Utf8.parse('8101626604764947');

var encrypt_rsa = new RSA.RSAKey();
encrypt_rsa = RSA.KEYUTIL.getKey(publicKey);
var encStr = encrypt_rsa.encrypt(num)
encStr = RSA.hex2b64(encStr);
//console.log("加密结果：" + encStr)

// 加密之后aes密钥
Taro.setStorage({
    key: 'secretKey',
    data: encStr,
})

//解密方法
function Decrypt(word) {
    var encryptedHexStr = CryptoJS.enc.Hex.parse(word);
    var srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
    var decrypt = CryptoJS.AES.decrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
    var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    return decryptedStr.toString();
}
//加密方法
function Encrypt(word) {
    var srcs = CryptoJS.enc.Utf8.parse(word);
    var encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
    return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Hex.parse(encrypted.ciphertext.toString().toUpperCase()));
     
}

module.exports.Decrypt = Decrypt;
module.exports.Encrypt = Encrypt;