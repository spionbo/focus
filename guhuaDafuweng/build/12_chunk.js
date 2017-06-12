webpackJsonp([12,16],{

/***/ 30:
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

exports.default = {
    props: {
        superClass: String,
        transition: String,
        closeCallback: Function
    },
    data: function data() {
        return {};
    },
    mounted: function mounted() {
        T.setImgSize();
    },

    methods: {
        closePop: function closePop(callback) {
            this.$refs.pop.closePop(callback);
        }
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(30),
  /* template */
  __webpack_require__(32),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\work\\pc\\activity\\app\\guhuaDafuweng\\src\\pop\\pop.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] pop.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6b6a5d98", Component.options)
  } else {
    hotAPI.reload("data-v-6b6a5d98", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pop', {
    ref: "pop",
    attrs: {
      "transition": _vm.transition,
      "superClass": _vm.superClass,
      "closeCallback": _vm.closeCallback
    }
  }, [_c('div', {
    staticClass: "modal-container img-size",
    attrs: {
      "data-width": "555",
      "data-height": "454"
    },
    slot: "main"
  }, [_vm._t("close", [_c('div', {
    staticClass: "close img-size",
    attrs: {
      "data-width": "82",
      "data-height": "81"
    },
    on: {
      "click": _vm.closePop
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "modal-header"
  }, [_vm._t("header", [_c('div', {
    staticClass: "title-bg img-size",
    attrs: {
      "data-width": "391",
      "data-height": "79",
      "data-marginTop": "20"
    }
  })])], 2), _vm._v(" "), _c('div', {
    staticClass: "modal-body img-size",
    attrs: {
      "data-paddingLeft": "40",
      "data-paddingRight": "40"
    }
  }, [_vm._t("body", [_vm._v("\r\n                default body\r\n            ")])], 2), _vm._v(" "), _c('div', {
    staticClass: "modal-footer img-size",
    attrs: {
      "data-paddingBottom": "40"
    }
  }, [_vm._t("footer", [_c('div', {
    staticClass: "btn img-size",
    attrs: {
      "data-width": "327",
      "data-height": "60",
      "data-lineHeight": "60"
    }
  })])], 2)], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6b6a5d98", module.exports)
  }
}

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pop = __webpack_require__(31);

var _pop2 = _interopRequireDefault(_pop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        pop: _pop2.default
    },
    props: {
        transition: String,
        status: Number,
        btnFn: Function,
        okTxt: String,
        content: String,
        closeCallback: Function,
        okCallback: Function,
        cancelTxt: {
            type: [String, Boolean],
            default: false
        },
        cancelCallback: Function
    },
    methods: {
        close: function close() {
            if (this.okCallback && this.okCallback()) ;
            this.$refs.pop.closePop();
        },
        cancel: function cancel() {
            this.cancelCallback.call(this);
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

/***/ }),

/***/ 62:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(62)

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(45),
  /* template */
  __webpack_require__(92),
  /* scopeId */
  "data-v-53e53fa4",
  /* cssModules */
  null
)
Component.options.__file = "E:\\work\\pc\\activity\\app\\guhuaDafuweng\\src\\pop\\publicTips.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] publicTips.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-53e53fa4", Component.options)
  } else {
    hotAPI.reload("data-v-53e53fa4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pop', {
    ref: "pop",
    attrs: {
      "transition": _vm.transition,
      "closeCallback": _vm.closeCallback
    }
  }, [_c('div', {
    slot: "header"
  }), _vm._v(" "), _c('div', {
    staticClass: "notStart",
    domProps: {
      "innerHTML": _vm._s(_vm.content)
    },
    slot: "body"
  }), _vm._v(" "), _c('div', {
    staticClass: "submit publicTips img-size",
    slot: "footer"
  }, [_c('div', {
    staticClass: "btn img-size",
    attrs: {
      "data-fontSize": "30",
      "data-width": "327",
      "data-height": "60",
      "data-lineHeight": "60"
    },
    on: {
      "click": _vm.close
    }
  }, [_vm._v("\r\n            " + _vm._s(_vm.okTxt) + "\r\n        ")]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.cancelTxt),
      expression: "cancelTxt"
    }],
    staticClass: "cancel img-size",
    attrs: {
      "data-fontSize": "30",
      "data-height": "60",
      "data-lineHeight": "60"
    },
    on: {
      "click": _vm.cancel
    }
  }, [_vm._v("\r\n            " + _vm._s(_vm.cancelTxt) + "\r\n        ")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-53e53fa4", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=12_chunk.js.map?name=67553faf61540dba269b