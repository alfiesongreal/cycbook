import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './details.styl'
import PublicBorder from "../../components/PublicBorder/PublicBorder"
import PublicFooter from "../../components/PublicFooter/PublicFooter"
import {animate_class_arr} from "../../util/animate_class"
import util from "../../util"

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.changeAnimationBool = this.changeAnimationBool.bind(this)
    this.changeTxt=this.changeTxt.bind(this)
    this.state ={
      list: util.list,
      activeIndex: ~~(Math.random() * util.list.length),
      isAnimation:true,
      addAnimateClass:false,
      rendomAnimateClass: ~~(Math.random() * 17),
      timer:true
    }
  }
  
  config = {
    navigationBarTitleText: '超越宝书'
  }
  static options = {
    addGlobalClass: true
  }

  componentWillMount () { }

  componentDidMount () { 
    this.shake()
  }

  componentWillUnmount () {
    this.unshake()
  }

  componentDidShow () {
    util.themeChange()
  }

  componentDidHide () { }

  render () {
    const {list,activeIndex,isAnimation,addAnimateClass,rendomAnimateClass}=this.state
    return (
      <View className={
        `details ${util.theme ?'bg-dayclo' : 'bl-bgcolor'} `
        }>
        <PublicBorder />
        <View className='txt-content'>
          {
            isAnimation && 
            <View className="txt-box" onClick={this.changeAnimationBool}>
              <Text className = {
                addAnimateClass ?`animated ${animate_class_arr[rendomAnimateClass]}` : ''
              }> 
                {
                  list[activeIndex]
                } 
              </Text>
            </View>
          }
         </View>
         <PublicFooter/>
      </View>
    )
  }
  changeAnimationBool(){
    this.isClick()
    this.rendomClass()
    this.setState(()=>{
      return {
        isAnimation: false,
      }
    }, 
    () => {
      this.changeTxt()
    })
  }
  isClick() {
    if (!this.state.addAnimateClass) {
      this.setState({
        addAnimateClass: true
      })
    }
  }
  changeTxt(){
    const {list,activeIndex}=this.state
    this.setState(()=>{
      return{
        activeIndex: activeIndex >= list.length-1 ? 0 : activeIndex + 1,
        isAnimation: true,
        timer: true
      }
    })
  }
  rendomClass(){
    this.setState(()=>{
      const r = this.state.rendomAnimateClass
      return{
        rendomAnimateClass: ~~(Math.random() * 17)
      }
    })
    
  }
  shake(){
    Taro.startAccelerometer()
    Taro.onAccelerometerChange( (res)=> {
      if (this.state.timer){
         if (res.x > 1 && res.y > 1) {
           this.setState({
             timer:null
           })
           this.changeAnimationBool()
         }
      }
    })
  }
  unshake(){
    Taro.stopAccelerometer()
  }

}
