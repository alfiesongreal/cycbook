import Taro, { Component } from '@tarojs/taro'
import {
  Image
} from '@tarojs/components'
import bg_border from "../../assets/bgsbor.png"
import './PublicBorder.styl'

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
      <Image src={bg_border} className='border-img' />
    )
  }
}
