import Taro, { Component } from '@tarojs/taro'
import { View, Map, Image } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import Runman from './runman/runman'
import AmapFile from '@/libs/amap-wx.js'
import './index.scss'

let myAmapFun = null;

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  constructor () {
    super(...arguments)
    this.state = {
      current: 0,
      typeCurrent: 0,
      latitude: '',
      longitude: '',
      startLocation: ''
    }
  }

  componentDidMount () {
    myAmapFun = new AmapFile.AMapWX({
      key : "  "
    })
    myAmapFun.getRegeo({
      success: res => {
        this.setState({
          latitude: res[0].latitude,
          longitude: res[0].longitude
        })
      }
    })
  }  
  // 切换业务
  handleClick (value) {
    this.setState({
      current: value
    })
  }

  // 切换业务线
  handleTypeClick (value) {
    this.setState({
      typeCurrent: value
    })
  }

  // 拖动地图
  handleChange (e) {
    if ( e.type === 'end' ) {
      let mapCtx = Taro.createMapContext('map')
      mapCtx.getCenterLocation({
        success : res => {
          this.setState({
            latitude: res.latitude,
            longitude: res.longitude
          })
          myAmapFun.getRegeo({
            location: res.longitude + "," + res.latitude,
            success: res2 => {
              this.setState({
                startLocation : res2[0].regeocodeData.pois[0].name
              })
            }
          })
        }
      })
      
    }
  }

  render () {
    const tabList = [{ title: '跑腿' }, { title: '代驾' }]
    const tabTypeList = [{ title: '帮我取' }, { title: '帮我送' }, { title: '帮我买' }, { title: '帮排队' }, { title: '帮我办' }]
    const { latitude, longitude, current, typeCurrent, startLocation } = this.state
    return (
      <View className='contain'>
        <AtTabs current={current} tabList={tabList} onClick={this.handleClick.bind(this)} height='100%' swipeable={false}>
          <AtTabsPane current={current} index={0} className="driver">
            <View className='mapContainer'>
              <Map onRegionchange	={this.handleChange.bind(this)} className='maps' latitude={latitude} longitude={longitude} show-location id='map' />
              <Image src='/images/running_marker.png' className='marker'></Image>
              <Image src='/images/running_location.png' className='location'></Image>
            </View>
            <Runman current={typeCurrent} tabTypeList={tabTypeList} onClick={this.handleTypeClick.bind(this)} startLocation={startLocation} />
          </AtTabsPane>
          <AtTabsPane current={current} index={1} className="runman">
            {/* <Map onRegionchange	={handleChange} className='maps' latitude={latitude} longitude={longitude} show-location id='map' /> */}
          </AtTabsPane>
        </AtTabs>
      </View> 
    )
  }
}
