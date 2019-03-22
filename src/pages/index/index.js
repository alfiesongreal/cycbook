import Taro, { Component } from '@tarojs/taro'
import {
  View,
  Image
} from '@tarojs/components'
import PublicBorder from "../../components/PublicBorder/PublicBorder"
import IndexImgage from "../../assets/indeximage.png"
import DuringBg from "../../assets/duringbg.png"
import './index.styl'
import util from "../../util"

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.toDetails = this.toDetails.bind(this)
  }
  config = {
    navigationBarTitleText: '首页'
  }
  static options = {
    addGlobalClass: true
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
      {
        util.theme?
        (
          <View style="width:100%;height:100%" onClick={this.toDetails}>
            <Image src={DuringBg} style="width:100%;height:100%;"  className='index-image'  />
          </View>
        ):
        (
          <View className="bl-bgcolor" style="width:100%;height:100%;" onClick={this.toDetails}>
            <PublicBorder />
            <View className='img-box'>
              <Image src={IndexImgage}  className='index-image'  />
            </View>
          </View>
        )
      }
      </View>
    )
  }
  toDetails(){
    console.log('to_details')
    Taro.navigateTo({
      url: '/pages/details/details'
    })
  }
}
