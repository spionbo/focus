webpackJsonp([20,25],{

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pop = __webpack_require__(29);

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

exports.default = {
    components: {
        pop: _pop2.default
    },
    props: {
        showselectSceneNum: Function,
        transition: String
    },
    methods: {
        prizedo: function prizedo(num) {
            var _this = this;

            this.$refs.pop.closePop(function () {
                _requirePop2.default.call(_this, 'selectSceneResult', {
                    props: {
                        transition: 'bounceIn', //rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
                        num: num,
                        showselectSceneNum: _this.showselectSceneNum
                    }
                });
            });
        }
    }
};

/***/ }),

/***/ 196:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(196)

var Component = __webpack_require__(26)(
  /* script */
  __webpack_require__(180),
  /* template */
  __webpack_require__(234),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\work\\pc\\activity\\app\\dafuwen\\src\\pop\\selectSceneNum.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] selectSceneNum.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3e7f08a8", Component.options)
  } else {
    hotAPI.reload("data-v-3e7f08a8", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pop', {
    ref: "pop",
    attrs: {
      "transition": _vm.transition
    }
  }, [_c('div', {
    staticClass: "img-size",
    attrs: {
      "data-paddingTop": "60",
      "data-paddingLeft": "60"
    },
    slot: "header"
  }, [_c('h2', [_vm._v("请选择摇骰点数")])]), _vm._v(" "), _c('div', {
    staticClass: "selectSceneNum",
    slot: "body"
  }, [_c('ul', [_c('li', {
    staticClass: "img1 img-size",
    attrs: {
      "data-width": "127",
      "data-height": "94"
    },
    on: {
      "click": function($event) {
        _vm.prizedo(1)
      }
    }
  }), _vm._v(" "), _c('li', {
    staticClass: "img2 img-size",
    attrs: {
      "data-width": "127",
      "data-height": "94"
    },
    on: {
      "click": function($event) {
        _vm.prizedo(2)
      }
    }
  }), _vm._v(" "), _c('li', {
    staticClass: "img3 img-size",
    attrs: {
      "data-width": "127",
      "data-height": "94"
    },
    on: {
      "click": function($event) {
        _vm.prizedo(3)
      }
    }
  })]), _vm._v(" "), _c('ul', [_c('li', {
    staticClass: "img4 img-size",
    attrs: {
      "data-width": "127",
      "data-height": "94"
    },
    on: {
      "click": function($event) {
        _vm.prizedo(4)
      }
    }
  }), _vm._v(" "), _c('li', {
    staticClass: "img5 img-size",
    attrs: {
      "data-width": "127",
      "data-height": "94"
    },
    on: {
      "click": function($event) {
        _vm.prizedo(5)
      }
    }
  }), _vm._v(" "), _c('li', {
    staticClass: "img6 img-size",
    attrs: {
      "data-width": "127",
      "data-height": "94"
    },
    on: {
      "click": function($event) {
        _vm.prizedo(6)
      }
    }
  })]), _vm._v(" "), _c('p', {
    staticStyle: {
      "padding-top": "0.625rem"
    }
  }, [_vm._v("使用遥控骰子可自己指定想获得的点数")])]), _vm._v(" "), _c('div', {
    staticClass: "submit",
    slot: "footer"
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3e7f08a8", module.exports)
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

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(T, $) {

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

exports.default = {
    props: {
        superClass: String,
        transition: String,
        closeCallback: Function
    },
    data: function data() {
        return {
            showModal: true
        };
    },
    mounted: function mounted() {
        T.setImgSize();
        bus.$on('closePop', this.closePop);
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
            name = name || 'closePopEvent';
            this.showModal = false;
            T.getPop(callback);
            bus.$emit(name);
            this.closeCallback && this.closeCallback.call(this);
        }
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(4)))

/***/ }),

/***/ 28:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(28)

var Component = __webpack_require__(26)(
  /* script */
  __webpack_require__(27),
  /* template */
  __webpack_require__(30),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\work\\pc\\activity\\app\\dafuwen\\src\\pop\\pop.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] pop.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1d57cc0f", Component.options)
  } else {
    hotAPI.reload("data-v-1d57cc0f", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 30:
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
      "data-width": "555",
      "data-height": "454"
    },
    on: {
      "click": function($event) {
        _vm.closePropagtion($event)
      }
    }
  }, [_vm._t("close", [_c('div', {
    staticClass: "close img-size",
    attrs: {
      "data-width": "80",
      "data-height": "80",
      "data-top": "5",
      "data-right": "5"
    },
    on: {
      "click": _vm.closePop
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "modal-header"
  }, [_vm._t("header", [_vm._v("\r\n                        default header\r\n                    ")])], 2), _vm._v(" "), _c('div', {
    staticClass: "modal-body"
  }, [_vm._t("body", [_vm._v("\r\n                        default body\r\n                    ")])], 2), _vm._v(" "), _c('div', {
    staticClass: "modal-footer"
  }, [_vm._t("footer", [_c('div', {
    staticClass: "btn img-size",
    attrs: {
      "data-width": "327",
      "data-height": "60"
    }
  })])], 2)], 2)])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1d57cc0f", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=20_chunk.js.map?name=05c98ee84cb2002c1339