webpackJsonp([4],{

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(66)

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(39),
  /* template */
  __webpack_require__(96),
  /* scopeId */
  "data-v-6ec6eb1e",
  /* cssModules */
  null
)
Component.options.__file = "E:\\work\\pc\\activity\\app\\guhuaDafuweng\\src\\integral\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6ec6eb1e", Component.options)
  } else {
    hotAPI.reload("data-v-6ec6eb1e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(T) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _URL = __webpack_require__(9);

var _requirePop = __webpack_require__(1);

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

exports.default = {
    data: function data() {
        return {
            list: [],
            userInfo: ''
        };
    },
    mounted: function mounted() {
        var self = this;
        T.init();
        if (!T.uid) return;
        T.ajax({
            url: _URL.creditsMsg,
            data: { uid: T.uid }
        }).then(function (data) {
            self.$set(self, 'list', data.map.listParameters);
            self.userInfo = data.map.userCoinMsg;
            self.$nextTick(function () {
                T.setImgSize();
            });
        });
    },

    methods: {
        exchange: function exchange(obj) {
            if (obj.surplusQty == 0) return;
            (0, _requirePop2.default)('tips', {
                props: {
                    content: '确定兑换' + obj.name + '吗？',
                    okTxt: '确定',
                    cancelTxt: '取消',
                    transition: 'rotate3d',
                    okCallback: function okCallback() {
                        T.ajax({
                            url: _URL.exchange,
                            callback: true,
                            data: {
                                uid: T.uid,
                                prizeId: obj.id
                            }
                        }).then(function (data) {
                            if (data.flag == false) {
                                (0, _requirePop2.default)('jifwen', {
                                    props: {
                                        content: data.errorMsg || '积分不够！',
                                        okTxt: '确定',
                                        transition: 'rotate3d'
                                    }
                                }, 'publicTips');
                                return;
                            }
                            (0, _requirePop2.default)('exchange', {
                                props: {
                                    obj: obj
                                }
                            });
                        });
                    },
                    cancelCallback: function cancelCallback() {
                        this.$refs.pop.closePop();
                    }
                }
            }, 'publicTips');
        }
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 66:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "child-transition bg"
  }, [_c('div', {
    staticClass: "module-scroll"
  }, [_c('section', {
    staticClass: "integral"
  }, [_c('header', {
    staticClass: "title img-size",
    attrs: {
      "data-height": "140",
      "data-fontSize": "36"
    }
  }, [_vm._v("\r\n                我的积分："), _c('em', [_vm._v(_vm._s(_vm.userInfo.userCoin || 0))]), _vm._v(" "), (_vm.userInfo.cleanCoin > 0) ? _c('p', {
    staticClass: "img-size",
    attrs: {
      "data-fontSize": "28"
    }
  }, [_vm._v("(其中" + _vm._s(_vm.userInfo.cleanCoin) + "积分奖于" + _vm._s(_vm.userInfo.lastTime.Format('yy-MM-dd hh:mm:ss')) + "过期)")]) : _vm._e()]), _vm._v(" "), _c('article', {
    staticClass: "box img-size",
    attrs: {
      "data-paddingTop": "40",
      "data-paddingLeft": "40",
      "data-paddingRight": "40"
    }
  }, [_c('ul', _vm._l((_vm.list), function(obj) {
    return _c('li', {
      staticClass: "img-size",
      attrs: {
        "data-height": "180"
      }
    }, [_c('div', {
      staticClass: "img img-size",
      attrs: {
        "data-width": "280",
        "data-height": "134",
        "data-lineHeight": "134",
        "data-fontSize": "34"
      }
    }, [_vm._v(_vm._s(obj.name) + "\r\n                            "), (obj.type == 5) ? _c('div', {
      staticClass: "tag img-size",
      attrs: {
        "data-width": "52",
        "data-height": "48"
      }
    }) : _vm._e()]), _vm._v(" "), _c('div', {
      staticClass: "footer"
    }, [_c('div', {
      staticClass: "left img-size",
      attrs: {
        "data-fontSize": "24"
      }
    }, [_c('i'), _vm._v(_vm._s(obj.needGoldCoin) + "\r\n                            ")]), _vm._v(" "), _c('div', {
      staticClass: "right img-size",
      attrs: {
        "data-fontSize": "18"
      }
    }, [_c('div', {
      staticClass: "text"
    }), _vm._v(" "), _c('div', {
      staticClass: "btn img-size",
      class: {
        gray: obj.surplusQty == 0
      },
      attrs: {
        "data-width": "75",
        "data-height": "31"
      },
      on: {
        "click": function($event) {
          _vm.exchange(obj)
        }
      }
    })])])])
  }))])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6ec6eb1e", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=4_chunk.js.map?name=67553faf61540dba269b