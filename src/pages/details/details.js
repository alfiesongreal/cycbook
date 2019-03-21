import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './details.styl'
import PublicBorder from "../../components/PublicBorder/PublicBorder"
import {animate_class_arr} from "../../util/animate_class"

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.changeAnimationBool = this.changeAnimationBool.bind(this)
    this.changeTxt=this.changeTxt.bind(this)
    this.state ={
      list: ['Heallo details!','nihao','asdad'],
      activeIndex:0,
      isAnimation:true,
      addAnimateClass:false,
      rendomAnimateClass: ~~(Math.random() * 43)
    }
  }
  
  config = {
    navigationBarTitleText: 'details'
  }

  componentWillMount () { }

  componentDidMount () { 
    
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const {list,activeIndex,isAnimation,addAnimateClass,rendomAnimateClass}=this.state
    console.log(activeIndex, 'activeIndex')
    return (
      <View className='details' onClick={this.changeAnimationBool}>
        <PublicBorder />
        <View className='txt-box'>
          {
            isAnimation && 
            <Text className = {
              addAnimateClass ? `animated ${animate_class_arr[rendomAnimateClass]}` : ''
            }> 
              {
                list[activeIndex]
              } 
            </Text>
          }
         </View>
         {/* txt-item */}
      </View>
    )
  }
  changeAnimationBool(){
    this.isClick()
    this.rendomClass()
    this.setState(()=>{
      return {
        isAnimation: false
      }
    }, 
    () => {
      this.changeTxt()
    })
  }
  isClick(){
    if (!this.state.addAnimateClass){
      this.setState({
        addAnimateClass:true
      })
    }
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
  rendomClass(){
    this.setState(()=>{
      const r = this.state.rendomAnimateClass
      let num;
      if (r < 43) {
        num = r + 1
      }else{
        num=0
      }
      return{
        rendomAnimateClass:num
      }
    })
    
  }

}
