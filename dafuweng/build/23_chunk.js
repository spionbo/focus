webpackJsonp([23],{

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(T, $) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _URL = __webpack_require__(5);

var _requirePop = __webpack_require__(2);

var _requirePop2 = _interopRequireDefault(_requirePop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
        transition: String
    },
    data: function data() {
        return {
            isclick: true,
            resultNum: null,
            resultName: '',
            showModal: true
        };
    },
    mounted: function mounted() {
        T.setImgSize();
    },

    methods: {
        closePropagtion: function closePropagtion(e) {
            e.stopPropagation(); //
            //e.cancelBubble = true;  // 
        },
        submit: function submit() {
            var self = this,
                num = 0,
                len = 7,
                arr = [0, 1, 2, 5, 8, 7, 6, 3],
                li = $('#PrizeDo .li'),
                timer = 0;
            if (!self.isclick) return;
            T.ajax({
                url: _URL.raffle,
                data: {
                    uid: T.uid
                },
                callback: true,
                success: function success(_data) {
                    if (_data.flag) {
                        var product = {
                            '双立人刀具套装': 4,
                            '1000元京东购物卡': 5,
                            '200元京东购物卡': 6,
                            '小米移动电源': 3,
                            '100元京东购物卡': 7,
                            '50元京东购物卡': 2,
                            '30元京东购物卡': 1,
                            '10元京东购物卡': 0
                        };
                        self.resultName = _data.map.prizeName;
                        self.resultNum = product[self.resultName];
                        //_data.map.prize.name.indexOf()
                        //self.resultNum
                    } else {
                        self.closePop();
                        __webpack_require__.e/* require.ensure */(10).then((function (require) {
                            var pop = __webpack_require__(161);
                            new pop({
                                title: '',
                                width: '70%',
                                content: '<center>' + (_data.errorMsg || '操作失败，请联系客服！') + '</center>',
                                okBtn: true,
                                cancelBtn: false,
                                okTxt: '确定',
                                timing: 'errorcur'
                            });
                        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                    }
                }
            });
            self.isclick = false;
            function go() {
                li.removeClass('cur');
                if (num > len) {
                    num = 0;
                }
                li.eq(arr[num]).addClass('cur');
                num++;
            }
            timer = setInterval(go, 80);
            var timeNum = 100,
                index = 0;
            function end() {
                index++;
                timeNum += 20;
                li.removeClass('cur');
                if (num > len) {
                    num = 0;
                }
                li.eq(arr[num]).addClass('cur');
                if (num == self.resultNum && index > 20) {
                    self.isclick = true;
                    self.closePop(function () {
                        (0, _requirePop2.default)('winning1', {
                            props: {
                                name: self.resultName
                            }
                        });
                    });
                } else {
                    num++;
                    setTimeout(end, timeNum);
                }
            }
            setTimeout(function () {
                clearInterval(timer);
                end();
            }, 3000);
        },
        showPop: function showPop(callback) {
            this.showModal = true;
            if ($.type(callback) == 'function') {
                setTimeout(callback, 550);
            }
        },
        closePop: function closePop(callback) {
            this.showModal = false;
            T.getPop(callback);
            bus.$emit('closePopEvent');
        }
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(4)))

/***/ }),

/***/ 205:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(205)

var Component = __webpack_require__(26)(
  /* script */
  __webpack_require__(176),
  /* template */
  __webpack_require__(243),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\work\\pc\\activity\\app\\dafuwen\\src\\pop\\prizedoPlay.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] prizedoPlay.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cc1f1ea2", Component.options)
  } else {
    hotAPI.reload("data-v-cc1f1ea2", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 243:
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
    staticClass: "modal-wrapper prizedo img-size",
    attrs: {
      "data-width": "624",
      "data-height": "678"
    },
    on: {
      "click": _vm.closePropagtion
    }
  }, [_c('div', {
    staticClass: "close img-size",
    attrs: {
      "data-width": "79",
      "data-height": "79"
    },
    on: {
      "click": _vm.closePop
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "content img-size",
    attrs: {
      "id": "PrizeDo",
      "data-paddingTop": "117",
      "data-paddingLeft": "38"
    }
  }, [_c('div', {
    staticClass: "li img-size",
    attrs: {
      "data-width": "165",
      "data-height": "153",
      "data-marginLeft": "14",
      "data-marginTop": "16"
    }
  }, [_c('div', {
    staticClass: "img img1 img-size",
    attrs: {
      "data-width": "115",
      "data-height": "74"
    }
  }), _vm._v(" "), _c('p', [_vm._v("10元京东购物卡")])]), _vm._v(" "), _c('div', {
    staticClass: "li img-size",
    attrs: {
      "data-width": "165",
      "data-height": "153",
      "data-marginLeft": "14",
      "data-marginTop": "16"
    }
  }, [_c('div', {
    staticClass: "img img2 img-size",
    attrs: {
      "data-width": "115",
      "data-height": "74"
    }
  }), _vm._v(" "), _c('p', [_vm._v("30元京东购物卡")])]), _vm._v(" "), _c('div', {
    staticClass: "li img-size",
    attrs: {
      "data-width": "165",
      "data-height": "153",
      "data-marginLeft": "14",
      "data-marginTop": "16"
    }
  }, [_c('div', {
    staticClass: "img img3 img-size",
    attrs: {
      "data-width": "115",
      "data-height": "74"
    }
  }), _vm._v(" "), _c('p', [_vm._v("50元京东购物卡")])]), _vm._v(" "), _c('div', {
    staticClass: "li img-size",
    attrs: {
      "data-width": "165",
      "data-height": "153",
      "data-marginLeft": "14",
      "data-marginTop": "16"
    }
  }, [_c('div', {
    staticClass: "img img4 img-size",
    attrs: {
      "data-width": "115",
      "data-height": "74"
    }
  }), _vm._v(" "), _c('p', [_vm._v("100元京东购物卡")])]), _vm._v(" "), _c('div', {
    staticClass: "li btn img-size",
    attrs: {
      "data-width": "165",
      "data-height": "153",
      "data-marginLeft": "14",
      "data-marginTop": "16"
    },
    on: {
      "click": _vm.submit
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "li img-size",
    attrs: {
      "data-width": "165",
      "data-height": "153",
      "data-marginLeft": "14",
      "data-marginTop": "16"
    }
  }, [_c('div', {
    staticClass: "you img-size",
    attrs: {
      "data-width": "109",
      "data-height": "79"
    }
  }), _vm._v(" "), _c('p', [_vm._v("小米移动电源")])]), _vm._v(" "), _c('div', {
    staticClass: "li img-size",
    attrs: {
      "data-width": "165",
      "data-height": "153",
      "data-marginLeft": "14",
      "data-marginTop": "16"
    }
  }, [_c('div', {
    staticClass: "img img5 img-size",
    attrs: {
      "data-width": "115",
      "data-height": "74"
    }
  }), _vm._v(" "), _c('p', [_vm._v("200元京东购物卡")])]), _vm._v(" "), _c('div', {
    staticClass: "li img-size",
    attrs: {
      "data-width": "165",
      "data-height": "153",
      "data-marginLeft": "14",
      "data-marginTop": "16"
    }
  }, [_c('div', {
    staticClass: "img img6 img-size",
    attrs: {
      "data-width": "115",
      "data-height": "74"
    }
  }), _vm._v(" "), _c('p', [_vm._v("1000元京东购物卡")])]), _vm._v(" "), _c('div', {
    staticClass: "li img-size",
    attrs: {
      "data-width": "165",
      "data-height": "153",
      "data-marginLeft": "14",
      "data-marginTop": "16"
    }
  }, [_c('div', {
    staticClass: "dao img-size",
    attrs: {
      "data-width": "131",
      "data-height": "88"
    }
  }), _vm._v(" "), _c('p', [_vm._v("双立人刀具套装")])])])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-cc1f1ea2", module.exports)
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
//# sourceMappingURL=23_chunk.js.map?name=05c98ee84cb2002c1339