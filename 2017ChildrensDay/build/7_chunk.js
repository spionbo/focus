webpackJsonp([7,8],{

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

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _pop = __webpack_require__(30);

var _pop2 = _interopRequireDefault(_pop);

var _store = __webpack_require__(1);

var _store2 = _interopRequireDefault(_store);

var _vuex = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    store: _store2.default,
    computed: _extends({}, (0, _vuex.mapState)(['startTime', 'endTime'])),
    components: {
        pop: _pop2.default
    },
    props: {
        transition: String
    },
    methods: {
        close: function close() {
            if (this.okCallback && this.okCallback()) ;
            this.$refs.pop.closePop();
        }
    }
};

/***/ }),

/***/ 44:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(44)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(33),
  /* template */
  __webpack_require__(58),
  /* scopeId */
  "data-v-9c2a958e",
  /* cssModules */
  null
)
Component.options.__file = "E:\\work\\pc\\activity\\app\\2017ChildrensDay\\src\\pop\\explain.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] explain.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9c2a958e", Component.options)
  } else {
    hotAPI.reload("data-v-9c2a958e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pop', {
    ref: "pop",
    attrs: {
      "transition": _vm.transition,
      "superClass": "explain",
      "height": "800",
      "closeCallback": _vm.closeCallback
    }
  }, [_c('div', {
    slot: "header"
  }, [_vm._v("\r\n        活动规则\r\n    ")]), _vm._v(" "), _c('div', {
    slot: "body"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('dl', [_c('dd'), _vm._v(" "), _c('dt', [_c('b', [_vm._v("1、")]), _vm._v("活动时间：" + _vm._s(_vm.startTime) + " - " + _vm._s(_vm.endTime))])]), _vm._v(" "), _c('dl', [_c('dd', [_vm._v("2、赚金币")]), _vm._v(" "), _c('dt', [_vm._v("活动期间，投资20天及以上产品即可获得金币。金币=投资金额*期限/360")])]), _vm._v(" "), _c('dl', [_c('dd', [_vm._v("3、要礼物")]), _vm._v(" "), _c('dt', [_c('p', [_vm._v("\r\n                        ① 活动期间，每天1次免费机会，可向“马里奥”要礼物，礼物为优惠券，最高1.5%加息券或100元红包，最低0.5%加息券或5元红包。\r\n                    ")]), _vm._v(" "), _c('p', [_vm._v("\r\n                         ② 花费不同数量的金币，可自行选择向“哆啦A梦”“加菲猫”“喜羊羊”“麦兜”要礼物，最高及最低礼物各有不同，具体参见活动页面\r\n                    ")])])]), _vm._v(" "), _c('dl', [_c('dd', [_vm._v("4、礼物发放")]), _vm._v(" "), _c('dt', [_c('p', [_vm._v("① 优惠券，将即时发放到您的多融账户，可登录APP或官网查看并使用")]), _vm._v(" "), _c('p', [_vm._v("② 实物奖品，将在活动结束后的15个工作日内完成发放，礼品以收到的实物为准")])])]), _vm._v(" "), _c('dl', [_c('dd', [_vm._v("5、活动最终解释权归多融财富所有")]), _vm._v(" "), _c('dt')])])]), _vm._v(" "), _c('div', {
    staticClass: "submit img-size",
    slot: "footer"
  }, [_c('div', {
    staticClass: "btn img-size",
    attrs: {
      "data-fontSize": "30",
      "data-width": "494",
      "data-height": "85",
      "data-lineHeight": "85"
    },
    on: {
      "click": _vm.close
    }
  }, [_vm._v("\r\n            我知道了\r\n        ")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9c2a958e", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=7_chunk.js.map?name=53e4b78706ea797ca9a3