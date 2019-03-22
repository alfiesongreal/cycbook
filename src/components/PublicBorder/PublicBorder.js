import Taro, { Component } from '@tarojs/taro'
import {
  View,
  Image
} from '@tarojs/components'
import bg_border from "../../assets/bgsbor.png"
import bg from "../../assets/bg.png"
import './PublicBorder.styl'
import util from "../../util"

export default class PublicBorder extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className="borimg-box">
        <Image src={util.theme?bg:bg_border} className='border-img' />
      </View>
    )
  }
}
