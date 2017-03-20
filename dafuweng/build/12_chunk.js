webpackJsonp([12,25],{

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(T, $) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pop = __webpack_require__(29);

var _pop2 = _interopRequireDefault(_pop);

var _requirePop = __webpack_require__(2);

var _requirePop2 = _interopRequireDefault(_requirePop);

var _URL = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        pop: _pop2.default
    },
    props: {
        diceType: Number,
        diceNumber: Number
    },
    mounted: function mounted() {
        var self = this;
        var obj = { uid: T.uid, diceType: self.diceType };
        if (self.diceType == 2) {
            obj.diceNumber = self.diceNumber;
        }
        //self.do(2 , function(){})

        T.ajax({
            url: _URL.dicePlay,
            data: obj,
            callback: true,
            success: function success(_data) {

                if (_data.flag) {
                    T.ajax({ //掷骰机会
                        url: _URL.map,
                        callback: true,
                        data: {
                            uid: T.uid
                        },
                        success: function success(_data1) {
                            info.map = _data1.map;
                            var memberWalk = _data.map.memberWalk;

                            var popName = '',
                                props = {};
                            info.diceChance--;
                            if (self.diceType == 2) {
                                info.controllableChance--;
                            } else {
                                info.normalChance--;
                            }

                            if (memberWalk.prizeType == 1) {
                                //红包
                                popName = 'winning';
                                props = {
                                    num: memberWalk.prizeAmount,
                                    prizeName: memberWalk.prizeName,
                                    prizeType: memberWalk.prizeType
                                };
                            } else if (memberWalk.prizeType == 2) {
                                //加息券
                                popName = 'winning';
                                props = {
                                    num: memberWalk.prizeAmount,
                                    prizeName: memberWalk.prizeName,
                                    prizeType: memberWalk.prizeType
                                };
                            } else if (memberWalk.prizeType == 5) {
                                //实物
                                popName = 'winning1';
                                props = {
                                    num: memberWalk.prizeAmount
                                };
                            }
                            if (memberWalk.achieveEndPoint == true) {
                                //已到终点
                                self.do(memberWalk.diceResult, function () {
                                    self.$refs.pop.closePop(function () {
                                        bus.$emit('pointOnMap', memberWalk.nextPoint); //更新步数
                                        setTimeout(function () {
                                            info.onmap(function () {
                                                return (0, _requirePop2.default)('goEnd', {
                                                    props: {
                                                        num: info.map.userRank,
                                                        name: info.map.prizeOfRank,
                                                        transition: 'bounceIn'
                                                    }
                                                });
                                            });
                                        }, 350);
                                    });
                                });
                                return;
                            }

                            self.do(memberWalk.diceResult, function () {
                                self.$refs.pop.closePop(function () {
                                    if (popName.length > 2) {
                                        //中奖
                                        setTimeout(function () {
                                            (0, _requirePop2.default)(popName, { props: props });
                                        }, 350);
                                    }
                                    bus.$emit('pointOnMap', memberWalk.nextPoint); //更新步数
                                });
                            });
                        }
                    });
                    /*if(popName.length>2){
                        bus.$on('closePopEvent',function(){
                            bus.$emit('pointOnMap', memberWalk.nextPoint); //更新步数
                        })
                    }*/
                    //nextPoint

                    /*memberWalk{    
                    nextPoint;  //下一个地图上的点    
                    achievePrizePoint = false;  //是否抽奖点 10， 20     
                    prizeName;  //普通中奖信息；   
                    prizeType; // 类型:1：红包 2：加息券 5：实物    
                    prizeAmount; //    
                    achieveEndPoint = false;  //是否到达终点    
                    orderOfRank; //用户到达终点后的排名
                    }*/
                } else {
                    self.$refs.pop.closePop();
                    __webpack_require__.e/* require.ensure */(10).then((function (require) {
                        var Pop = __webpack_require__(161);
                        var pop = new Pop({
                            title: '&nbsp;',
                            content: '<center>' + _data.errorMsg + '</center>',
                            okBtn: true,
                            cancelBtn: false,
                            timing: 'bounceIn', //rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
                            okTxt: '投资获取机会',
                            okCallback: function okCallback() {
                                pop.close();
                                T.callApp.investment();
                            }
                        });
                    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                }
            }
        });
    },

    methods: {
        do: function _do(num, callback) {
            var self = this,
                scene = $('.scenedo'),
                snum = $('.scenedo-num');
            var str = 'img1 img2 img3 img4 img5 img6';

            setTimeout(function () {
                scene.removeClass(str).addClass(' img' + num);
                snum.removeClass(str).addClass('cur img' + num);
                setTimeout(callback, 300);
            }, 2830);
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
//
//
//
//
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(4)))

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(190)

var Component = __webpack_require__(26)(
  /* script */
  __webpack_require__(178),
  /* template */
  __webpack_require__(228),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\work\\pc\\activity\\app\\dafuwen\\src\\pop\\scenedo.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] scenedo.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1a53b5d5", Component.options)
  } else {
    hotAPI.reload("data-v-1a53b5d5", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pop', {
    ref: "pop",
    attrs: {
      "superClass": "scenedo-pop",
      "transition": "bounceIn"
    }
  }, [_c('div', {
    slot: "header"
  }), _vm._v(" "), _c('div', {
    staticClass: "selectSceneNum img-size",
    attrs: {
      "data-paddingTop": "200",
      "data-paddingBottom": "10"
    },
    slot: "body"
  }, [_c('div', {
    staticClass: "lights img-size",
    attrs: {
      "data-width": "1846",
      "data-height": "2362"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "scenedobg img-size",
    attrs: {
      "data-width": "374",
      "data-height": "130"
    }
  }, [_c('div', {
    staticClass: "scenedo img-size",
    attrs: {
      "data-width": "139",
      "data-height": "144",
      "data-marginLeft": "80",
      "data-top": "-60"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "scenedo-num img-size",
    attrs: {
      "data-width": "114",
      "data-height": "92",
      "data-top": "-30"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "submit",
    slot: "footer"
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1a53b5d5", module.exports)
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
//# sourceMappingURL=12_chunk.js.map?name=05c98ee84cb2002c1339