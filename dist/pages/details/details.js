"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _animate_class = require("../../util/animate_class.js");

var _index3 = require("../../util/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["util", "isAnimation", "addAnimateClass", "animate_class_arr", "rendomAnimateClass", "list", "activeIndex"], _this.config = {
      navigationBarTitleText: 'details'
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).call(this, props);
      this.changeAnimationBool = this.changeAnimationBool.bind(this);
      this.changeTxt = this.changeTxt.bind(this);
      this.state = {
        list: ['Heallo details!', 'nihao', 'asdad'],
        activeIndex: 0,
        isAnimation: true,
        addAnimateClass: false,
        rendomAnimateClass: ~~(Math.random() * 43)
      };
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      _index4.default.themeChange();
    }
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var _state = this.__state,
          list = _state.list,
          activeIndex = _state.activeIndex,
          isAnimation = _state.isAnimation,
          addAnimateClass = _state.addAnimateClass,
          rendomAnimateClass = _state.rendomAnimateClass;

      Object.assign(this.__state, {
        util: _index4.default,
        animate_class_arr: _animate_class.animate_class_arr
      });
      return this.__state;
    }
  }, {
    key: "changeAnimationBool",
    value: function changeAnimationBool() {
      var _this2 = this;

      this.isClick();
      this.rendomClass();
      this.setState(function () {
        return {
          isAnimation: false
        };
      }, function () {
        _this2.changeTxt();
      });
    }
  }, {
    key: "isClick",
    value: function isClick() {
      if (!this.state.addAnimateClass) {
        this.setState({
          addAnimateClass: true
        });
      }
    }
  }, {
    key: "changeTxt",
    value: function changeTxt() {
      var _state2 = this.state,
          list = _state2.list,
          activeIndex = _state2.activeIndex;

      var newActiveIndex = void 0;
      this.setState(function () {
        if (activeIndex >= list.length - 1) {
          newActiveIndex = 0;
        } else {
          newActiveIndex = activeIndex + 1;
        }
        return {
          activeIndex: newActiveIndex,
          isAnimation: true
        };
      });
    }
  }, {
    key: "rendomClass",
    value: function rendomClass() {
      var _this3 = this;

      this.setState(function () {
        var r = _this3.state.rendomAnimateClass;
        var num = void 0;
        if (r < 43) {
          num = r + 1;
        } else {
          num = 0;
        }
        return {
          rendomAnimateClass: num
        };
      });
    }
  }]);

  return Index;
}(_index.Component), _class.properties = {}, _class.$$events = ["changeAnimationBool"], _class.options = {
  addGlobalClass: true
}, _temp2);
exports.default = Index;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index, true));