import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtInput, AtButton } from 'taro-ui'
import { connect } from '@tarojs/redux'
import * as actions from '@/actions/login'
import { DealarId, getGlobalData } from "@/utils/global"
import { Encrypt } from "@/utils/public"
import './login.scss'

@connect( state=> state.login , actions)

export default class Login extends Component {

  config = {
    navigationBarTitleText: '麒麟代驾'
  }

  constructor () {
    super(...arguments)
    this.state = {
      phone: '',
      code: ''
    }
  }

  componentDidMount () {}  

  handlePhoneClick () {
    let jsonBunch = {
      Mobile : this.state.phone,
      DealerId : DealarId,
      AreaCode : getGlobalData("Adcode")
    }
    let payload = Encrypt(JSON.stringify(jsonBunch))
    this.props.dispatchLogin({
      key: Taro.getStorageSync('secretKey'),
      content: payload,
      DealerId: DealarId,
      AreaCode: getGlobalData("Adcode"),
    })
  }

  handlePhoneChange (value) {
    this.setState({
      phone: value
    })
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return value
  }

  handleCodeChange (value) {
    this.setState({
      code: value
    })
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return value
  }

  render () {
    return (
      <View className='contain'>
        <View className='title'>登录</View>
        <AtInput
          className='input'
          name='value'
          title=''
          type='number'
          placeholder='请输入手机号2'
          placeholderClass='placeholderstyle'
          value={this.state.phone}
          onChange={this.handlePhoneChange.bind(this)}
          maxLength={11}
        />
        <View className='code'>
          <AtInput
            className='input'
            name='value'
            title=''
            type='number'
            placeholder='请输入验证码'
            placeholderClass='placeholderstyle'
            value={this.state.code}
            onChange={this.handleCodeChange.bind(this)}
            maxLength={4}
          />
          <AtButton type='primary' size='small' className='getCode' onClick={this.handlePhoneClick.bind(this)}>获取验证码</AtButton>
        </View>
        <AtButton type='primary' className='login'>登录</AtButton>
      </View> 
    )
  }
}
