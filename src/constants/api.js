/**
 * NOTE HOST、HOST_M 是在 config 中通过 defineConstants 配置的
 * 只所以不在代码中直接引用，是因为 eslint 会报 no-undef 的错误，因此用如下方式处理
 */
/* eslint-disable */
export const host = HOST
/* eslint-enable */


// index


// login
export const API_LOGIN_GET_CODE = `${host}/member/Login/GetSMSCode`
export const API_LOGIN_IN = `${host}/member/Login`