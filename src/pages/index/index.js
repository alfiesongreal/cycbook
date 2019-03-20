import Taro, { Component } from '@tarojs/taro'
import {
  View,
  Image
} from '@tarojs/components'
import PublicBorder from "../../components/PublicBorder/PublicBorder"
import IndexImgage from "../../assets/indeximage.png"
import './index.styl'

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.toDetails = this.toDetails.bind(this)
  }
  config = {
    navigationBarTitleText: '首页'
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'  onClick={this.toDetails}>
        <PublicBorder />
         <View className='img-box'>
          <Image src={IndexImgage}  className='index-image'  />
         </View>
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
