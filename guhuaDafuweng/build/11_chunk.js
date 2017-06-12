webpackJsonp([11,16],{

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

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(T) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _requirePop = __webpack_require__(1);

var _requirePop2 = _interopRequireDefault(_requirePop);

var _pop = __webpack_require__(31);

var _pop2 = _interopRequireDefault(_pop);

var _URL = __webpack_require__(9);

var _store = __webpack_require__(3);

var _store2 = _interopRequireDefault(_store);

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

exports.default = {
    store: _store2.default,
    components: {
        pop: _pop2.default
    },
    props: {
        diceType: Number,
        diceNumber: Number
    },
    mounted: function mounted() {
        var self = this;
        var obj = { uid: T.uid, diceType: self.diceType };
        if (self.diceType == 2) {
            obj.diceNumber = self.diceNumber;
        }
        //self.do(5 , 6 , ()=>{});

        T.ajax({
            url: _URL.dicePlay,
            data: obj
        }).then(function (data) {
            if (data.flag) {
                var memberWalk = data.map.memberWalk;
                var diceNumList = data.map.diceNumList;

                var num1, num2;
                if (diceNumList.length > 1) {
                    num1 = diceNumList[0];
                    num2 = diceNumList[1];
                } else {
                    num1 = diceNumList[0];
                    num2 = 0;
                }
                self.do(num1, num2, function () {
                    self.$refs.pop.closePop();
                    if (memberWalk.nextPoint == 10 || memberWalk.nextPoint == 20) {
                        (0, _requirePop2.default)('continue');
                    } else {
                        (0, _requirePop2.default)('winning');
                    }
                    self.$store.commit('updateData', memberWalk);
                    self.$store.commit('updatePrize', memberWalk);
                    self.$store.commit('userMessage', memberWalk); //更新数据
                });

                /*if(map.prizeType == 1){//红包
                 }else if(map.prizeType == 2){//加息券
                 }else{//5 实物
                 }*/
            } else {
                self.$refs.pop.closePop();
                (0, _requirePop2.default)('touzhijihui', {
                    props: {
                        content: data.errorMsg,
                        transition: 'rotate3d',
                        okTxt: '投资获取机会',
                        closeCallback: function closeCallback() {
                            T.callApp.investment();
                        }
                    }
                }, 'publicTips');
            }
        });
    },

    methods: {
        do: function _do(num, num1, callback) {
            var self = this,
                scene = $('.scenedo').eq(0),
                scene1 = $('.scenedo').eq(1),
                snum = $('.scenedo-num'),
                str = 'img1 img2 img3 img4 img5 img6 img7 img8 img9 img10 img11 img12';

            if (num1 == 0) {
                scene1.hide();
            }
            setTimeout(function () {
                scene.removeClass(str).addClass(' img' + num);
                setTimeout(function () {
                    scene1.removeClass(str).addClass(' img' + num1);
                    snum.removeClass(str).addClass('cur img' + (num + num1));
                    setTimeout(callback, 300);
                }, 1030);
            }, 2830);
        }
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 63:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(63)

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(46),
  /* template */
  __webpack_require__(93),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\work\\pc\\activity\\app\\guhuaDafuweng\\src\\pop\\scenedo.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] scenedo.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5e45a07a", Component.options)
  } else {
    hotAPI.reload("data-v-5e45a07a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pop', {
    ref: "pop",
    attrs: {
      "superClass": "scenedo-pop"
    }
  }, [_c('div', {
    slot: "close"
  }), _vm._v(" "), _c('div', {
    slot: "header"
  }), _vm._v(" "), _c('div', {
    staticClass: "selectSceneNum img-size",
    attrs: {
      "data-paddingTop": "200",
      "data-paddingBottom": "10"
    },
    slot: "body"
  }, [_c('div', {
    staticClass: "lights img-size",
    attrs: {
      "data-width": "726",
      "data-height": "699",
      "data-top": "100",
      "data-marginLeft": "-363"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "scenedobg img-size",
    attrs: {
      "data-width": "374",
      "data-height": "130",
      "data-paddingLeft": "54"
    }
  }, [_c('div', {
    staticClass: "scenedo img-size",
    attrs: {
      "data-width": "139",
      "data-height": "144",
      "data-top": "-60"
    }
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.diceType == 2),
      expression: "diceType==2"
    }],
    staticClass: "scenedo img-size",
    attrs: {
      "data-marginLeft": "-10",
      "data-width": "139",
      "data-height": "144",
      "data-top": "-60"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "scenedo-num img-size",
    attrs: {
      "data-width": "114",
      "data-height": "92",
      "data-top": "-30"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "submit",
    slot: "footer"
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5e45a07a", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=11_chunk.js.map?name=67553faf61540dba269b