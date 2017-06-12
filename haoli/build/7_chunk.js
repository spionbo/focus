webpackJsonp([7,9],{

/***/ 11:
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

/***/ 12:
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

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(12),
  /* template */
  __webpack_require__(14),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\work\\pc\\activity\\app\\haoli\\src\\pop\\pop.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] pop.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0675794e", Component.options)
  } else {
    hotAPI.reload("data-v-0675794e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 14:
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
     require("vue-hot-reload-api").rerender("data-v-0675794e", module.exports)
  }
}

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(T) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pop = __webpack_require__(13);

var _pop2 = _interopRequireDefault(_pop);

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

/***/ 29:
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleNotFoundError: Module not found: Error: Can't resolve '../images/txt1.png' in 'E:\\work\\pc\\activity\\app\\haoli\\src\\pop'\n    at factoryCallback (C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\webpack\\lib\\Compilation.js:259:39)\n    at C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\webpack\\lib\\NormalModuleFactory.js:234:19\n    at onDoneResolving (C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\webpack\\lib\\NormalModuleFactory.js:59:20)\n    at C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\webpack\\lib\\NormalModuleFactory.js:126:20\n    at C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\webpack\\node_modules\\async\\dist\\async.js:3694:9\n    at C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\webpack\\node_modules\\async\\dist\\async.js:356:16\n    at iteratorCallback (C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\webpack\\node_modules\\async\\dist\\async.js:934:13)\n    at C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\webpack\\node_modules\\async\\dist\\async.js:840:16\n    at C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\webpack\\node_modules\\async\\dist\\async.js:3691:13\n    at apply (C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\webpack\\node_modules\\async\\dist\\async.js:21:25)\n    at C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\webpack\\node_modules\\async\\dist\\async.js:56:12\n    at C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\webpack\\lib\\NormalModuleFactory.js:121:22\n    at onResolved (C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\webpack\\node_modules\\enhanced-resolve\\lib\\Resolver.js:70:11)\n    at loggingCallbackWrapper (C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\webpack\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at afterInnerCallback (C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\webpack\\node_modules\\enhanced-resolve\\lib\\Resolver.js:138:10)\n    at loggingCallbackWrapper (C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\webpack\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at Resolver.applyPluginsAsyncSeriesBailResult1 (C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\webpack\\node_modules\\tapable\\lib\\Tapable.js:181:46)\n    at innerCallback (C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\webpack\\node_modules\\enhanced-resolve\\lib\\Resolver.js:125:19)\n    at loggingCallbackWrapper (C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\webpack\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\webpack\\node_modules\\tapable\\lib\\Tapable.js:283:15\n    at C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\webpack\\node_modules\\enhanced-resolve\\lib\\UnsafeCachePlugin.js:38:4\n    at loggingCallbackWrapper (C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\webpack\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at afterInnerCallback (C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\webpack\\node_modules\\enhanced-resolve\\lib\\Resolver.js:138:10)\n    at loggingCallbackWrapper (C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\webpack\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at Resolver.applyPluginsAsyncSeriesBailResult1 (C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\webpack\\node_modules\\tapable\\lib\\Tapable.js:181:46)\n    at innerCallback (C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\webpack\\node_modules\\enhanced-resolve\\lib\\Resolver.js:125:19)\n    at loggingCallbackWrapper (C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\webpack\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\webpack\\node_modules\\tapable\\lib\\Tapable.js:283:15\n    at innerCallback (C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\webpack\\node_modules\\enhanced-resolve\\lib\\Resolver.js:123:11)\n    at loggingCallbackWrapper (C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\webpack\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)");

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(29)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(16),
  /* template */
  __webpack_require__(45),
  /* scopeId */
  "data-v-607ed5fa",
  /* cssModules */
  null
)
Component.options.__file = "E:\\work\\pc\\activity\\app\\haoli\\src\\pop\\continue.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] continue.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-607ed5fa", Component.options)
  } else {
    hotAPI.reload("data-v-607ed5fa", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 45:
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
     require("vue-hot-reload-api").rerender("data-v-607ed5fa", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=7_chunk.js.map?name=c11ee17315c239cd5699