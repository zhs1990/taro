import Taro from '@tarojs/taro'

const CODE_SUCCESS = 200
const CODE_AUTH_EXPIRED = 400

function getStorage(key) {
  return Taro.getStorage({ key }).then(res => res.data).catch(() => '')
}

function updateStorage(data = {}) {
  return Promise.all([
    Taro.setStorage({ key: 'token', data: data['3rdSession'] || '' }),
    Taro.setStorage({ key: 'uid', data: data['uid'] || ''})
  ])
}

/**
 * 简易封装网络请求
 * // NOTE 需要注意 RN 不支持 *StorageSync，此处用 async/await 解决
 * @param {*} options
 */
export default async function fetch(options) {
  const { url, payload, method = 'POST', showToast = true, autoLogin = true } = options
  const token = await getStorage('token')
  const header = {
    'content-type' : 'application/json',
    UserToken : token ? token : '',
    'cache-control': 'max-age=60'
  };

  return Taro.request({
    url,
    method,
    data: payload,
    header
  }).then(async (res) => {
    const { Code, Data, Message } = res.data
    if (Code !== CODE_SUCCESS) {
      if (Code === CODE_AUTH_EXPIRED) {
        await updateStorage({})
      }
      return Promise.reject(res.data)
    }
    Taro.showToast({
      title: Message ? Message : '啥',
      icon: 'none'
    });
    return Data
  })
  // .catch((err) => {
  //   const defaultMsg = err.Code === CODE_AUTH_EXPIRED ? '登录失效' : '请求异常'
  //   if (showToast) {
  //     Taro.showToast({
  //       title: err && err.Message || defaultMsg,
  //       icon: 'none'
  //     })
  //   }

  //   if (err.Code === CODE_AUTH_EXPIRED && autoLogin) {
  //     Taro.navigateTo({
  //       url: '/pages/login/login'
  //     })
  //   }

  //   return Promise.reject({ message: defaultMsg, ...err })
  // })
}
