import dayjs from "dayjs"
let t = dayjs().hour()
export default {
  theme: 18 > t && t > 5 ? true : false,
  themeChange() {
    this.theme ?
      wx.setNavigationBarColor({
        backgroundColor: '#d9a9d4',
        frontColor: '#000000'
      }) :
      wx.setNavigationBarColor({
        backgroundColor: '#2c0741',
        frontColor: '#ffffff'
      })
  }
}
//true 白天 false 黑天