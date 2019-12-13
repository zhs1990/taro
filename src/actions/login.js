import { LOGIN_GET_CODE, LOGIN_IN } from '@/constants/login'
import { API_LOGIN_GET_CODE, API_LOGIN_IN } from '@/constants/api'
import { createAction } from '@/utils/redux' 

/**
 * 获取验证码
 * @param {*} payload
 */
export const dispatchLogin = payload => createAction({
    url: API_LOGIN_GET_CODE,
    type: LOGIN_GET_CODE,
    payload
})  