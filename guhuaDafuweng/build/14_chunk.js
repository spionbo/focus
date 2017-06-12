webpackJsonp([14,16],{

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

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(T) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pop = __webpack_require__(31);

var _pop2 = _interopRequireDefault(_pop);

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

exports.default = {
    components: {
        pop: _pop2.default
    },
    props: {
        transition: String
    },
    mounted: function mounted() {
        T.setImgSize();
    },

    methods: {
        close: function close(fn) {
            this.$refs.pop.closePop(fn);
        },
        agin: function agin() {
            this.close(function () {
                (0, _requirePop2.default)('gameStart', {
                    props: {
                        transition: 'rotate3d'
                    }
                }, 'selectScene');
            });
        }
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 67:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(67)

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(41),
  /* template */
  __webpack_require__(97),
  /* scopeId */
  "data-v-903b0458",
  /* cssModules */
  null
)
Component.options.__file = "E:\\work\\pc\\activity\\app\\guhuaDafuweng\\src\\pop\\continue.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] continue.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-903b0458", Component.options)
  } else {
    hotAPI.reload("data-v-903b0458", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pop', {
    ref: "pop",
    attrs: {
      "transition": _vm.transition
    }
  }, [_c('div', {
    staticClass: "title-bg img-size",
    attrs: {
      "data-marginTop": "25",
      "data-width": "391",
      "data-height": "79"
    },
    slot: "header"
  }, [_c('i', {
    staticClass: "bg1 img-size",
    attrs: {
      "data-width": "189",
      "data-height": "49"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "c-pop",
    slot: "body"
  }, [_c('h2', {
    staticClass: "img-size",
    attrs: {
      "data-paddingTop": "10",
      "data-paddingBottom": "10",
      "data-fontSize": "34"
    }
  }, [_vm._v("恭喜，获得1次掷骰子机会")]), _vm._v(" "), _c('div', {
    staticClass: "cnt1"
  }, [_c('span', {
    staticClass: "scenedo img-size",
    attrs: {
      "data-marginLeft": "10",
      "data-width": "80",
      "data-height": "83"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "img-size",
    attrs: {
      "data-fontSize": "50"
    }
  }, [_vm._v("X1")]), _vm._v(" "), _c('div', {
    staticClass: "scenedobg1 img-size",
    attrs: {
      "data-width": "191",
      "data-height": "98"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "submit img-size",
    attrs: {
      "data-marginTop": "20"
    },
    slot: "footer"
  }, [_c('div', {
    staticClass: "btn img-size",
    attrs: {
      "data-width": "327",
      "data-height": "60",
      "data-lineHeight": "60"
    },
    on: {
      "click": _vm.agin
    }
  }, [_vm._v("立即掷骰子")]), _vm._v(" "), _c('div', {
    staticClass: "btn1",
    on: {
      "click": _vm.close
    }
  }, [_vm._v("以后再掷")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-903b0458", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=14_chunk.js.map?name=67553faf61540dba269b