import Taro, { Component } from '@tarojs/taro'
import {
  View,
  Image,
  Text
} from '@tarojs/components'
import dayicon from "../../assets/dayicon.png"
import duricon from "../../assets/duricon.png"
import "./PublicFooter.styl"
import util from "../../util"

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.toHome = this.toHome.bind(this)
    this.imgSrc = this.imgSrc.bind(this, util.theme)
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
      <View className='bottom-box' >
        <Image className='bottom-icon' src={this.imgSrc()}/>
        <Text className="bottom-txt" onClick={this.toHome}>关上书页</Text>
        <Image className='bottom-icon' src={this.imgSrc()}/>
      </View>
    )
  }
  toHome(e){
    e.stopPropagation()
    Taro.navigateBack()
  }
  imgSrc(theme){
    return theme ? dayicon: duricon
  }
}
