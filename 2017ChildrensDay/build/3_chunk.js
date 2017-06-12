webpackJsonp([3,8],{

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(T) {

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
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        closeCallback: Function,
        width: Number,
        height: Number
    },
    data: function data() {
        return {
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
        showPop: function showPop(callback) {
            this.showModal = true;
            if ($.type(callback) == 'function') {
                setTimeout(callback, 500);
            }
        },
        closePop: function closePop() {
            var _this = this;

            this.showModal = false;
            this.closeCallback && this.closeCallback();
            setTimeout(function () {
                $(_this.$el).remove();
            }, 510);
        }
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 29:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(29)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(28),
  /* template */
  __webpack_require__(31),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\work\\pc\\activity\\app\\2017ChildrensDay\\src\\pop\\pop.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] pop.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3d258a93", Component.options)
  } else {
    hotAPI.reload("data-v-3d258a93", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 31:
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
      "data-width": _vm.width || 600,
      "data-height": _vm.height || _vm.auto
    },
    on: {
      "click": function($event) {
        _vm.closePropagtion($event)
      }
    }
  }, [_vm._t("close", [_c('div', {
    staticClass: "close img-size",
    attrs: {
      "data-width": "82",
      "data-height": "81",
      "data-top": "-20",
      "data-right": "-20"
    },
    on: {
      "click": _vm.closePop
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "modal-header"
  }, [_c('div', {
    staticClass: "bg img-size",
    attrs: {
      "data-fontSize": "48",
      "data-width": "595",
      "data-height": "123",
      "data-lineHeigh": "120"
    }
  }, [_vm._t("header", [_vm._v("\r\n                            default header\r\n                        ")])], 2)]), _vm._v(" "), _c('div', {
    staticClass: "modal-body"
  }, [_c('div', {
    staticClass: "body-bg img-size",
    attrs: {
      "data-marginTop": "-60",
      "data-paddingTop": "80"
    }
  }, [_c('div', {
    staticClass: "body-cnt"
  }, [_vm._t("body", [_vm._v("\r\n                                default body\r\n                            ")])], 2), _vm._v(" "), _c('div', {
    staticClass: "modal-footer"
  }, [_vm._t("footer", [_c('div', {
    staticClass: "btn img-size",
    attrs: {
      "data-width": "327",
      "data-height": "60"
    }
  })])], 2)])])], 2)])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3d258a93", module.exports)
  }
}

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(T) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pop = __webpack_require__(30);

var _pop2 = _interopRequireDefault(_pop);

var _URL = __webpack_require__(9);

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

exports.default = {
    components: {
        pop: _pop2.default
    },
    props: {
        transition: String
    },
    data: function data() {
        return {
            list: []
        };
    },
    mounted: function mounted() {
        var self = this;
        T.ajax({
            url: _URL.record,
            data: {
                uid: T.uid
            }
        }).then(function (data) {
            self.$set(self, 'list', data.map.lotteryList);
        });
    },

    methods: {
        close: function close() {
            if (this.okCallback && this.okCallback()) ;
            this.$refs.pop.closePop();
        }
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 46:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 47:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(46)
__webpack_require__(47)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(35),
  /* template */
  __webpack_require__(60),
  /* scopeId */
  "data-v-ff539ab0",
  /* cssModules */
  null
)
Component.options.__file = "E:\\work\\pc\\activity\\app\\2017ChildrensDay\\src\\pop\\myprize.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] myprize.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ff539ab0", Component.options)
  } else {
    hotAPI.reload("data-v-ff539ab0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pop', {
    ref: "pop",
    attrs: {
      "transition": _vm.transition,
      "superClass": "myprize"
    }
  }, [_c('div', {
    slot: "header"
  }, [_c('div', {
    staticClass: "title-bg img-size",
    attrs: {
      "data-width": "390",
      "data-height": "79"
    }
  }, [_vm._v("\r\n            我的奖品\r\n        ")])]), _vm._v(" "), _c('div', {
    slot: "body"
  }, [_c('div', {
    staticClass: "explain-red"
  }, [_vm._v("\r\n            * 实物奖品，将在活动结束后的15个工作日内完成发放，礼品以收到的实物为准\r\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "list"
  }, [_c('ul', [_c('li', [_vm._v("奖品")]), _vm._v(" "), _c('li', [_vm._v("获取时间")])]), _vm._v(" "), _vm._l((_vm.list), function(obj) {
    return (_vm.list.length) ? _c('ul', [_c('li', [_vm._v(_vm._s(obj.giftName))]), _vm._v(" "), _c('li', [_vm._v(_vm._s(new Date(obj.addTime).Format('yyyy-MM-dd hh:mm:ss')))])]) : _vm._e()
  }), _vm._v(" "), (!_vm.list.length) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("\r\n                暂无数据\r\n            ")]) : _vm._e()], 2)]), _vm._v(" "), _c('div', {
    staticClass: "submit",
    slot: "footer"
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ff539ab0", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=3_chunk.js.map?name=53e4b78706ea797ca9a3