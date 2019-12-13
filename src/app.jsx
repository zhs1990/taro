import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import Index from './pages/index'
import AmapFile from '@/libs/amap-wx'
import { setGlobalData } from "@/utils/global"
import configStore from './store'
import './app.scss'
import './custom-variables.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/login/login',
      'pages/index/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  globalData = {
    Adcode : ''
  }

  componentDidMount () {
    let myAmapFun = myAmapFun = new AmapFile.AMapWX({
      key : "d573be98c1efdb518ba4f190bb01fa97"
    })
    myAmapFun.getRegeo({
      success: res => {
        setGlobalData( 'Adcode' , res[0].regeocodeData.addressComponent.adcode)  //全局变量
      }
    })
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
