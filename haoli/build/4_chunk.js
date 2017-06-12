webpackJsonp([4,5],{

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
        closePop: function closePop(callback, name) {
            var _this = this;

            name = name || 'closePopEvent';
            this.showModal = false;
            this.closeCallback && this.closeCallback.call(this);
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

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(28),
  /* template */
  __webpack_require__(31),
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
      "data-width": "80",
      "data-height": "80",
      "data-top": "-20",
      "data-right": "-20"
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
     require("vue-hot-reload-api").rerender("data-v-0675794e", module.exports)
  }
}

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pop = __webpack_require__(30);

var _pop2 = _interopRequireDefault(_pop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        pop: _pop2.default
    },
    data: function data() {
        return {
            P: Public
        };
    },

    props: {
        transition: String,
        closeCallback: Function
    },
    methods: {
        close: function close() {
            this.$refs.pop.closePop();
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

/***/ }),

/***/ 38:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(38)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(32),
  /* template */
  __webpack_require__(46),
  /* scopeId */
  "data-v-5fdece74",
  /* cssModules */
  null
)
Component.options.__file = "E:\\work\\pc\\activity\\app\\haoli\\src\\pop\\explain.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] explain.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5fdece74", Component.options)
  } else {
    hotAPI.reload("data-v-5fdece74", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pop', {
    ref: "pop",
    attrs: {
      "height": "900",
      "transition": _vm.transition,
      "closeCallback": _vm.closeCallback
    }
  }, [_c('div', {
    slot: "header"
  }, [_c('div', {
    staticClass: "title-bg img-size",
    attrs: {
      "data-width": "390",
      "data-height": "79"
    }
  }, [_c('i', {
    staticClass: "t-2 img-size",
    attrs: {
      "data-width": "189",
      "data-height": "47"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "content",
    slot: "body"
  }, [_c('dl', [_c('dd', [_vm._v("1、")]), _vm._v(" "), _c('dt', [_vm._v("活动时间：" + _vm._s(_vm.P.startTime) + "至" + _vm._s(_vm.P.endTime))])]), _vm._v(" "), _c('dl', [_c('dd', [_vm._v("2、")]), _vm._v(" "), _c('dt', [_vm._v("每日排名：活动期间，每天进行一次排名，共7天，每天投资前6名可获得奖品")])]), _vm._v(" "), _c('dl', [_c('dd', [_vm._v("3、")]), _vm._v(" "), _c('dt', [_vm._v("总排名：活动期间进行一次总排名，以最后1天排名为准，累计财富值前8名可获赠奖品")])]), _vm._v(" "), _c('p', [_vm._v("4、排名规则如下：")]), _vm._v(" "), _c('dl', [_c('dd'), _vm._v(" "), _c('dt', [_c('p', [_c('i'), _vm._v("排名统计时间，当天0:00~23:59，以提交订单时间为准\r\n                ")]), _vm._v(" "), _c('p', [_c('i'), _vm._v("购买30天及以上期限产品，参与排名，按财富值进行排名，财富值=投资金额*投资期限/360\r\n                ")]), _vm._v(" "), _c('p', [_c('i'), _vm._v("榜单实时展示，榜单结果以当天23:59最终结果为准，其余时间仅供参考")]), _vm._v(" "), _c('p', [_c('i'), _vm._v("如遇到财富值相同的，按最先到达的用户优先排名")])])]), _vm._v(" "), _c('dl', [_c('dd', [_vm._v("5、")]), _vm._v(" "), _c('dt', [_vm._v("\r\n                每日榜单排名前6名依次可获得奖品：1000元京东购物卡+2.3%加息券、800元京东购物卡+2.3%加息券、500元京东购物卡+2.3%加息券、300元京东购物卡+2.3%加息券、200元京东购物卡+2.3%加息券、50元京东购物卡+2.3%加息券\r\n            ")])]), _vm._v(" "), _c('dl', [_c('dd', [_vm._v("6、")]), _vm._v(" "), _c('dt', [_vm._v("\r\n                每周榜单排名前8名依次可以获得奖品：iPhone7 128G红色特别版+2.5%加息券、Gopro HERO5运动摄像机+2.5%加息券、irobot扫地机器人+2.5%加息券、Kindle Paperwhite+2.5%加息券、LG趣拍得+2.5%加息券、无印良品香薰机+2.5%加息券、凌美恒星钢笔+2.5%加息券、膳魔师保温杯+2.5%加息券\r\n            ")])]), _vm._v(" "), _c('dl', [_c('dd', [_vm._v("7、")]), _vm._v(" "), _c('dt', [_vm._v("\r\n                2.3%/2.5%加息券使用条件：≥90天产品适用，起投金额≥1000元，有效期30天。加息券将在每日榜单/总榜确定后1~2个工作日内发放到您的多融账户，可登录多融理财APP或官网查看并使用。京东卡机实体奖品将统一于活动结束后15个工作日内发放。\r\n            ")])]), _vm._v(" "), _c('dl', [_c('dd', [_vm._v("8、")]), _vm._v(" "), _c('dt', [_vm._v("本次活动最终解释权归多融财富所有")])])]), _vm._v(" "), _c('div', {
    staticClass: "submit",
    slot: "footer"
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5fdece74", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=4_chunk.js.map?name=1086476b833cf105a4b6