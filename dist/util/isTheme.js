'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dayjsMin = require('../npm/dayjs/dayjs.min.js');

var _dayjsMin2 = _interopRequireDefault(_dayjsMin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var t = (0, _dayjsMin2.default)().hour();
exports.default = {
  theme: 18 > t && t > 5 ? true : false,
  themeChange: function themeChange() {
    this.theme ? wx.setNavigationBarColor({
      backgroundColor: '#d9a9d4',
      frontColor: '#000000'
    }) : wx.setNavigationBarColor({
      backgroundColor: '#2c0741',
      frontColor: '#ffffff'
    });
  }
};
//true 白天 false 黑天