import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './details.styl'
import PublicBorder from "../../components/PublicBorder/PublicBorder"

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.changeAnimationBool = this.changeAnimationBool.bind(this)
    this.changeTxt=this.changeTxt.bind(this)
    this.state ={
      list: ['Heallo details!','nihao','asdad'],
      activeIndex:0,
      isAnimation:true
    }
  }
  
  config = {
    navigationBarTitleText: 'details'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const {list,activeIndex,isAnimation}=this.state
    console.log(activeIndex, 'activeIndex')
    return (
      <View className='details' onClick={this.changeAnimationBool}>
        <PublicBorder />
        <View className='txt-box'>
          {
            isAnimation&&<Text className='txt-item'>{list[activeIndex]}</Text>
          }
         </View>
      </View>
    )
  }
  changeAnimationBool(){
    this.setState(()=>{
      return {
        isAnimation: false
      }
    }, 
    () => {
      this.changeTxt()
    })
  }
  changeTxt(){
    const {list,activeIndex}=this.state
    let newActiveIndex;
    this.setState(()=>{
      if (activeIndex >= list.length - 1) {
        newActiveIndex=0
      }else{
        newActiveIndex=activeIndex+1
      }
      return{
        activeIndex: newActiveIndex,
         isAnimation: true
      }
    })
  }
}
