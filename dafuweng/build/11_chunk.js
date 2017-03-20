webpackJsonp([11,25],{

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pop = __webpack_require__(29);

var _pop2 = _interopRequireDefault(_pop);

var _URL = __webpack_require__(5);

var _requirePop = __webpack_require__(2);

var _requirePop2 = _interopRequireDefault(_requirePop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        pop: _pop2.default
    },
    props: {
        showselectSceneNum: Function,
        transition: String,
        num: Number
    },
    computed: {
        getClass: function getClass() {
            return 'img' + this.num;
        }
    },
    data: function data() {
        return {
            isshow: true
        };
    },

    methods: {
        ok: function ok() {
            var _this = this;

            this.$refs.pop.closePop(function () {
                (0, _requirePop2.default)('scenedo', {
                    props: {
                        diceType: 2, //遥控
                        diceNumber: _this.num,
                        transition: 'modal' //rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
                    }
                });
            });
            /*var self = this;
            T.ajax({
                url : dicePlay,
                data : { uid : T.uid , diceType : 2 , diceNumber : this.num },
                callback : true,
                success : function(_data){
                    if(_data.flag){
                        var memberWalk = _data.map.memberWalk;
                        bus.$emit('pointOnMap', memberWalk.nextPoint);
                        info.diceChance--;
                        self.$refs.pop.closePop();
                        }else{
                        self.$refs.pop.closePop();
                        require.ensure([],(require)=>{
                            var Pop = require('./index.js');
                            var pop = new Pop({
                                title : '&nbsp;',
                                content : '<center>'+_data.errorMsg+'</center>',
                                okBtn : true,
                                cancelBtn:false,
                                timing : 'bounceIn', //rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
                                okTxt : '投资获取机会',
                                okCallback : function(){
                                    pop.close();
                                    T.callApp.investment();
                                }
                            });
                        },'pop');
                    }
                }
            })*/
        },
        back: function back() {
            var _this2 = this;

            this.$refs.pop.closePop(function () {
                _this2.showselectSceneNum();
            });
        }
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 199:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(199)

var Component = __webpack_require__(26)(
  /* script */
  __webpack_require__(181),
  /* template */
  __webpack_require__(237),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\work\\pc\\activity\\app\\dafuwen\\src\\pop\\selectSceneResult.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] selectSceneResult.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-57dae26b", Component.options)
  } else {
    hotAPI.reload("data-v-57dae26b", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pop', {
    ref: "pop",
    attrs: {
      "transition": _vm.transition
    }
  }, [_c('div', {
    staticClass: "img-size",
    attrs: {
      "data-paddingTop": "60",
      "data-paddingLeft": "60"
    },
    slot: "header"
  }, [_c('h2', [_vm._v("您选中遥控骰子为")])]), _vm._v(" "), _c('div', {
    staticClass: "selectresult img-size",
    attrs: {
      "data-paddingTop": "40",
      "data-paddingBottom": "40"
    },
    slot: "body"
  }, [_c('div', {
    staticClass: "btn img-size",
    class: _vm.getClass,
    attrs: {
      "data-width": "188",
      "data-height": "151"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "submit selectResult",
    slot: "footer"
  }, [_c('div', {
    staticClass: "btn btn1 img-size",
    attrs: {
      "data-width": "128",
      "data-height": "48"
    },
    on: {
      "click": _vm.ok
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "btn btn2 img-size",
    attrs: {
      "data-width": "128",
      "data-height": "48"
    },
    on: {
      "click": _vm.back
    }
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-57dae26b", module.exports)
  }
}

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(T, $) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    props: {
        superClass: String,
        transition: String,
        closeCallback: Function
    },
    data: function data() {
        return {
            showModal: true
        };
    },
    mounted: function mounted() {
        T.setImgSize();
        bus.$on('closePop', this.closePop);
    },

    methods: {
        closePropagtion: function closePropagtion(e) {
            e.stopPropagation(); //
            //e.cancelBubble = true;  // 
        },
        showPop: function showPop(callback) {
            this.showModal = true;
            if ($.type(callback) == 'function') {
                setTimeout(callback, 500);
            }
        },
        closePop: function closePop(callback, name) {
            name = name || 'closePopEvent';
            this.showModal = false;
            T.getPop(callback);
            bus.$emit(name);
            this.closeCallback && this.closeCallback.call(this);
        }
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(4)))

/***/ }),

/***/ 28:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(28)

var Component = __webpack_require__(26)(
  /* script */
  __webpack_require__(27),
  /* template */
  __webpack_require__(30),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\work\\pc\\activity\\app\\dafuwen\\src\\pop\\pop.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] pop.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1d57cc0f", Component.options)
  } else {
    hotAPI.reload("data-v-1d57cc0f", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": _vm.transition
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showModal),
      expression: "showModal"
    }],
    staticClass: "modal-mask",
    class: _vm.superClass,
    on: {
      "click": _vm.closePop
    }
  }, [_c('div', {
    staticClass: "modal-wrapper"
  }, [_c('div', {
    staticClass: "modal-container img-size",
    attrs: {
      "data-width": "555",
      "data-height": "454"
    },
    on: {
      "click": function($event) {
        _vm.closePropagtion($event)
      }
    }
  }, [_vm._t("close", [_c('div', {
    staticClass: "close img-size",
    attrs: {
      "data-width": "80",
      "data-height": "80",
      "data-top": "5",
      "data-right": "5"
    },
    on: {
      "click": _vm.closePop
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "modal-header"
  }, [_vm._t("header", [_vm._v("\r\n                        default header\r\n                    ")])], 2), _vm._v(" "), _c('div', {
    staticClass: "modal-body"
  }, [_vm._t("body", [_vm._v("\r\n                        default body\r\n                    ")])], 2), _vm._v(" "), _c('div', {
    staticClass: "modal-footer"
  }, [_vm._t("footer", [_c('div', {
    staticClass: "btn img-size",
    attrs: {
      "data-width": "327",
      "data-height": "60"
    }
  })])], 2)], 2)])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1d57cc0f", module.exports)
  }
}

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var http = '';
module.exports = {
    status: http + '/activity/tycoon/status.do', //活动状态
    participate: http + '/activity/tycoon/participate.do', //渠道用户
    getlucky: http + '/activity/tycoon/lucky-bag.do', //每天一次免费福袋 - 查看
    setlucky: http + '/activity/tycoon/lucky-bag/get.do', //每天一次免费福袋 - 领取
    welcome: http + '/activity/tycoon/welcome.do', //5. 剩余投掷骰子机会 - 活动欢迎页(剩余骰子机会)
    map: http + '/activity/tycoon/on-map.do', //5. 6. 用户投骰子页面 - 用户在地图上的位置
    dicePlay: http + '/activity/tycoon/dice-play.do', //开始投骰子
    records: http + '/activity/tycoon/member-records.do', //用户中奖记录
    contact: http + '/activity/tycoon/contact-add.do', //地址
    raffle: http + '/activity/tycoon/raffle.do', //抽奖
    realPrizes: http + '/activity/tycoon/real-prizes.do', //终点奖品
    contactGet: http + '/activity/tycoon/contact-get.do' };

/***/ })

});
//# sourceMappingURL=11_chunk.js.map?name=05c98ee84cb2002c1339