webpackJsonp([19],{

/***/ 15:
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

/***/ 37:
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

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(15)(
  /* script */
  __webpack_require__(37),
  /* template */
  __webpack_require__(39),
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

/***/ 39:
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

/***/ })

});
//# sourceMappingURL=19_chunk.js.map?name=79d1a99a443b4bda24d0