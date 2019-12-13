import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { AtTabs, AtTabsPane, AtButton } from 'taro-ui'
import './runman.scss'

export default class Runman extends Component {
  componentWillMount () { }

  componentDidMount () {
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { tabTypeList, current, onClick, startLocation } = this.props
    return (
      <View className="runman">
        <AtTabs current={current} tabList={tabTypeList} onClick={onClick} swipeable={false}>
          <AtTabsPane current={current} index={0}>
            <View className='locationBox'>
              <View className='location'>
                <Image src="/images/get.png" className='icon'></Image>
                <View className='address'>
                  <View className='address_mes'>{startLocation}</View>
                  <View className='startA'>请填写门牌号等信息</View>
                </View>
                <View className='phone'>18043112082</View>
                <View className='theMostUsed'>常用</View>
              </View>
              <View className='location'>
                <Image src="/images/delivery.png" className='icon'></Image>
                <View className='address'>
                  <View className='address_mes'>{startLocation}</View>
                  <View className='startA'>请填写门牌号等信息</View>
                </View>
                <View className='phone'>18043112082</View>
                <View className='theMostUsed'>常用</View>
              </View>
            </View>
            <AtButton type='primary' size='small'>立即下单</AtButton>
          </AtTabsPane>
          <AtTabsPane current={current} index={1}>
            <View className='locationBox'>
              <View className='location'>
                <Image src="/images/get.png" className='icon'></Image>
                <View className='address'>
                  <View className='address_mes'>{startLocation}</View>
                  <View className='startA'>请填写门牌号等信息</View>
                </View>
                <View className='phone'>18043112082</View>
                <View className='theMostUsed'>常用</View>
              </View>
              <View className='location'>
                <Image src="/images/delivery.png" className='icon'></Image>
                <View className='address'>
                  <View className='address_mes'>{startLocation}</View>
                  <View className='startA'>请填写门牌号等信息</View>
                </View>
                <View className='phone'>18043112082</View>
                <View className='theMostUsed'>常用</View>
              </View>
            </View>
            <AtButton type='primary' size='small'>立即下单</AtButton>
          </AtTabsPane>
          <AtTabsPane current={current} index={2}>
            <View className='locationBox'>
              <View className='location'>
                <Image src="/images/start_buy.png" className='icon'></Image>
                <View className='address'>
                  <View className='address_mes'>{startLocation}</View>
                  <View className='startA'>请填写门牌号等信息</View>
                </View>
                <View className='phone'>18043112082</View>
                <View className='theMostUsed'>常用</View>
              </View>
              <View className='location'>
                <Image src="/images/delivery.png" className='icon'></Image>
                <View className='address'>
                  <View className='address_mes'>鸿达光电子产业园</View>
                  <View className='startA'>请填写门牌号等信息</View>
                </View>
                <View className='phone'>18043112082</View>
                <View className='theMostUsed'>常用</View>
              </View>
            </View>
            <AtButton type='primary' size='small'>立即下单</AtButton>
          </AtTabsPane>
          <AtTabsPane current={current} index={3}>
            <View className='locationBox single'>
              <View className='location'>
                <Image src="/images/pai.png" className='icon'></Image>
                <View className='address'>
                  <View className='address_mes'>鸿达光电子产业园</View>
                  <View className='startA'>请填写门牌号等信息</View>
                </View>
                <View className='phone'>18043112082</View>
                <View className='theMostUsed'>常用</View>
              </View>
            </View>
            <AtButton type='primary' size='small'>立即下单</AtButton>
          </AtTabsPane>
          <AtTabsPane current={current} index={4}>
            <View className='locationBox single'>
              <View className='location'>
                <Image src="/images/do.png" className='icon'></Image>
                <View className='address'>
                  <View className='address_mes'>鸿达光电子产业园</View>
                  <View className='startA'>请填写门牌号等信息</View>
                </View>
                <View className='phone'>18043112082</View>
                <View className='theMostUsed'>常用</View>
              </View>
            </View>
            <AtButton type='primary' size='small'>立即下单</AtButton>
          </AtTabsPane>
        </AtTabs>
        
      </View>
    )
  }
}
