webpackJsonp([0],{

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(43)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(32),
  /* template */
  __webpack_require__(57),
  /* scopeId */
  "data-v-87a5f93a",
  /* cssModules */
  null
)
Component.options.__file = "E:\\work\\pc\\activity\\app\\2017ChildrensDay\\src\\gift\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-87a5f93a", Component.options)
  } else {
    hotAPI.reload("data-v-87a5f93a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(T) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _URL = __webpack_require__(9);

var _store = __webpack_require__(1);

var _store2 = _interopRequireDefault(_store);

var _requirePop = __webpack_require__(2);

var _requirePop2 = _interopRequireDefault(_requirePop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    store: _store2.default,
    props: {
        superClass: String,
        className: String,
        transition: String,
        closeCallback: Function,
        index: Number,
        isHaveFree: Number,
        prizeType: Number,
        Freeofcharge: Number,
        obj: Object
    },
    data: function data() {
        return {
            showModal: true,
            liping: true,
            showList: false,
            mp3: 0,
            width: 117,
            height: 157,
            isclick: true
        };
    },
    mounted: function mounted() {
        var self = this;
        T.setImgSize();
        /* var mp3 = {
             '0':'超级玛丽',
             '1':'哆啦A梦',
             '2':'喜羊羊',
             '3':'喵',
             '4':'麦兜',
         }
         this.mp3 = this.index+'.mp3';
          $('html').on('touchstart',function(){
             $('#audio')[0].play();
         });*/
        /*setTimeout(function(){
            self.showList = true;
            $('.liping').css({marginTop:-$('.liping').height()+'px'});
            setTimeout(function(){
                self.liping = false;
            },310);
        },1000);*/

        var collection = $('.collection'),
            collectionCnt = $('.collection .cnt');

        setTimeout(function () {
            collection.css({ opacity: 1 });
            setTimeout(function () {
                collectionCnt.addClass('cur');
                self.liping = false;
                self.showList = true;
                setTimeout(function () {
                    collectionCnt.addClass('cur1');
                    setTimeout(function () {
                        collection.css({ opacity: 0 });
                        setTimeout(function () {
                            collection.remove();
                        }, 350);
                    }, 350);
                }, 2000);
            }, 350);
        }, 5000);
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
            var _this = this;

            name = name || 'closePopEvent';
            this.showModal = false;
            this.closeCallback && this.closeCallback.call(this);
            setTimeout(function () {
                $(_this.$el).remove();
            }, 510);
        },
        prize: function prize() {
            var self = this,
                text = '';

            if (self.obj.needCoin > 0) {
                text = '<center>本次兑换需要花费:' + self.obj.needCoin + '金币</center>';
            } else {
                text = '<center>本次拆礼物免费</center>';
            }
            if (!this.isclick) return;
            this.isclick = false;
            (0, _requirePop2.default)('publicTips', {
                props: {
                    title: '提示',
                    content: text,
                    okTxt: '确定拆礼物',
                    cancelTxt: '取消',
                    closeCallback: function closeCallback() {
                        self.isclick = true;
                    },
                    okCallback: function okCallback() {
                        T.ajax({
                            url: _URL.prize,
                            data: {
                                uid: T.uid,
                                prizeType: self.prizeType
                            }
                        }).then(function (data) {
                            //console.log(data);
                            var prize = data.map.prize;
                            if (self.isHaveFree > 0) {
                                self.$store.commit('haveFree', self.isHaveFree - 1);
                            }
                            self.$store.commit('all');
                            (0, _requirePop2.default)('winng', {
                                props: {
                                    transition: 'rotate3d',
                                    className: 'img' + (self.index + 1),
                                    closeCallback: self.closePop,
                                    back: self.closePop,
                                    obj: prize
                                }
                            });
                        });
                    }
                }
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 43:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 57:
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
    class: _vm.superClass
  }, [_c('div', {
    staticClass: "mask img-size",
    attrs: {
      "data-height": "1334"
    }
  }, [_c('header', {
    staticClass: "img-size",
    attrs: {
      "data-height": "245"
    }
  }, [_c('div', {
    staticClass: "back img-size",
    attrs: {
      "data-fontSize": "24",
      "data-right": "45",
      "data-top": "45"
    },
    on: {
      "click": _vm.closePop
    }
  }, [_vm._v("返回")]), _vm._v(" "), _c('div', {
    staticClass: "img img-size",
    class: _vm.className,
    attrs: {
      "data-width": "117",
      "data-height": "157"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "text img-size",
    attrs: {
      "data-fontSize": "30"
    }
  }, [_vm._v("看下我给大家伙准备了哪些礼物：")])]), _vm._v(" "), _c('div', {
    staticClass: "content img-size",
    attrs: {
      "data-width": "670",
      "data-height": "960"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.liping),
      expression: "liping"
    }],
    staticClass: "liping img-size",
    attrs: {
      "data-width": "670",
      "data-height": "960"
    }
  }, [_c('div', {
    staticClass: "img img-size",
    class: _vm.className,
    attrs: {
      "data-width": "619",
      "data-height": "717"
    }
  })]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showList),
      expression: "showList"
    }],
    staticClass: "list img-size",
    attrs: {
      "data-width": "670",
      "data-height": "960"
    }
  }, [(_vm.isHaveFree != 1) ? _c('div', {
    staticClass: "list-ul"
  }, [_c('ul', _vm._l((9), function(obj) {
    return _c('li', [_c('div', {
      staticClass: "img img-size",
      class: _vm.className,
      attrs: {
        "data-width": "189",
        "data-height": "143"
      },
      on: {
        "click": _vm.prize
      }
    })])
  })), _vm._v(" "), _c('ul', {
    staticClass: "two"
  }, _vm._l((2), function(obj) {
    return _c('li', [_c('div', {
      staticClass: "img img-size",
      class: _vm.className,
      attrs: {
        "data-width": "189",
        "data-height": "143"
      },
      on: {
        "click": _vm.prize
      }
    })])
  }))]) : _vm._e(), _vm._v(" "), (_vm.isHaveFree == 1) ? _c('div', {
    staticClass: "list-ul"
  }, [_c('ul', _vm._l((9), function(obj) {
    return _c('li', [_c('div', {
      staticClass: "img img-size",
      class: _vm.className,
      attrs: {
        "data-width": "189",
        "data-height": "143"
      },
      on: {
        "click": _vm.prize
      }
    })])
  })), _vm._v(" "), _c('ul', {
    staticClass: "two"
  }, _vm._l((2), function(obj) {
    return _c('li', [_c('div', {
      staticClass: "img img-size",
      class: _vm.className,
      attrs: {
        "data-width": "189",
        "data-height": "143"
      },
      on: {
        "click": _vm.prize
      }
    })])
  }))]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "submit"
  }, [(_vm.obj.needCoin > 0) ? _c('p', {
    staticClass: "img-size",
    attrs: {
      "data-fontSize": "24",
      "data-paddingBottom": "10"
    }
  }, [_vm._v(_vm._s(_vm.obj.needCoin) + "金币/次")]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "btn img-size",
    attrs: {
      "data-width": "304",
      "data-height": "81"
    },
    on: {
      "click": _vm.prize
    }
  }), _vm._v(" "), (_vm.Freeofcharge == 1) ? _c('p', {
    staticClass: "img-size",
    attrs: {
      "data-fontSize": "30"
    }
  }, [_vm._v("\r\n                            本次拆礼物免费（每日1次）\r\n                        ")]) : _vm._e()])])])]), _vm._v(" "), _c('div', {
    staticClass: "collection"
  }, [_c('p', [_vm._v("我去藏礼物啦"), _c('br'), _vm._v("能不能找到大奖，就看你的啦~~")]), _vm._v(" "), _c('div', {
    staticClass: "cnt"
  }, [_c('div', {
    staticClass: "img img-size",
    class: _vm.className,
    attrs: {
      "data-width": "117",
      "data-height": "157"
    }
  })])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-87a5f93a", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=0_chunk.js.map?name=53e4b78706ea797ca9a3