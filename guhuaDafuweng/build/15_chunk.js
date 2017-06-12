webpackJsonp([15],{

/***/ 43:
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

exports.default = {
    mounted: function mounted() {
        T.setImgSize();
    },

    props: {
        transition: String
    },
    methods: {
        close: function close() {
            this.$refs.pop.closePop();
            this.okCallback && this.okCallback.call(this);
        }
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 53:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(53)

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(43),
  /* template */
  __webpack_require__(83),
  /* scopeId */
  "data-v-07d9c35a",
  /* cssModules */
  null
)
Component.options.__file = "E:\\work\\pc\\activity\\app\\guhuaDafuweng\\src\\pop\\explain.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] explain.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-07d9c35a", Component.options)
  } else {
    hotAPI.reload("data-v-07d9c35a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pop', {
    ref: "pop",
    attrs: {
      "transition": _vm.transition
    }
  }, [_c('div', {
    staticClass: "explain img-size",
    attrs: {
      "data-width": "655",
      "data-height": "947"
    },
    slot: "main"
  }, [_c('div', {
    staticClass: "close img-size",
    attrs: {
      "data-width": "84",
      "data-height": "84"
    },
    on: {
      "click": _vm.close
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "content img-size",
    attrs: {
      "data-marginTop": "140",
      "data-marginBottom": "50"
    }
  }, [_c('div', {
    staticClass: "img img-size",
    attrs: {
      "data-height": "1324"
    }
  })])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-07d9c35a", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=15_chunk.js.map?name=67553faf61540dba269b