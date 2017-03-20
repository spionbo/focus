webpackJsonp([16,25],{

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(T, $) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pop = __webpack_require__(29);

var _pop2 = _interopRequireDefault(_pop);

var _URL = __webpack_require__(5);

var _requirePop = __webpack_require__(2);

var _requirePop2 = _interopRequireDefault(_requirePop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        pop: _pop2.default
    },
    data: function data() {
        return {
            name: '',
            mobilePhone: '',
            address: '',
            add: true,
            updateBtn: false
        };
    },

    props: {
        transition: String
    },
    mounted: function mounted() {
        var self = this;
        if (T.uid) {
            T.ajax({
                url: _URL.contactGet,
                callback: true,
                data: { uid: T.uid },
                success: function success(_data) {
                    self.updateBtn = false;
                    if (_data.flag == true) {
                        self.updateBtn = true;
                        $.extend(self, _data.map);
                    }
                }
            });
        }
    },

    methods: {
        pop: function pop(text) {
            __webpack_require__.e/* require.ensure */(10).then((function (require) {
                var Pop = __webpack_require__(161);
                var pop = new Pop({
                    title: '&nbsp;',
                    content: text,
                    okBtn: true,
                    cancelBtn: false,
                    timing: 'errorcur', //rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
                    okTxt: '确定'
                });
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
        },
        submit: function submit(event) {
            var self = this,
                btn = $(event.target),
                name = this.name,
                mobilePhone = this.mobilePhone,
                address = this.address;

            if (!T.uid) {
                return self.pop('请登录后再操作');
            }
            if (!name || name.length < 2) {
                return self.pop('姓名不能少于2位数！');
            }
            if (!/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(mobilePhone)) {
                return self.pop('请输入正确的手机号！');
            }
            if (!address || address.length < 5) {
                return self.pop('请输入正确地址！');
            }
            if (this.add == true) {
                this.add = false;
                btn.addClass('gray');
                T.ajax({
                    url: _URL.contact,
                    data: {
                        uid: T.uid,
                        name: name,
                        mobilePhone: mobilePhone,
                        address: address
                    },
                    success: function success(_data) {
                        __webpack_require__.e/* require.ensure */(10).then((function (require) {
                            var Pop = __webpack_require__(161),
                                text = '';
                            if (_data.success == true) {
                                text = self.updateBtn ? "修改成功！" : '添加成功!';
                                self.$refs.pop.closePop(function () {});
                            } else {
                                text = '添加失败!';
                            }
                            var pop = new Pop({
                                title: '&nbsp;',
                                content: text,
                                okBtn: true,
                                cancelBtn: false,
                                timing: 'rotate3d', //rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
                                okTxt: '确定'
                            });
                        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                        self.add = true;
                        btn.removeClass('gray');
                    }
                });
            }
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(4)))

/***/ }),

/***/ 193:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(193)

var Component = __webpack_require__(26)(
  /* script */
  __webpack_require__(171),
  /* template */
  __webpack_require__(231),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\work\\pc\\activity\\app\\dafuwen\\src\\pop\\addAddress.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] addAddress.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-27f9a6c5", Component.options)
  } else {
    hotAPI.reload("data-v-27f9a6c5", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 231:
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
      "data-paddingLeft": "40"
    },
    slot: "header"
  }, [_c('h2', [_vm._v("填写联系方式")])]), _vm._v(" "), _c('div', {
    staticClass: "address-pop",
    slot: "body"
  }, [_c('ul', [_c('li', [_c('div', {
    staticClass: "text"
  }, [_vm._v("联系人姓名")]), _vm._v(" "), _c('div', {
    staticClass: "cnt"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.name),
      expression: "name"
    }],
    attrs: {
      "type": "text",
      "maxlength": "9",
      "placeholder": "请输入姓名"
    },
    domProps: {
      "value": _vm._s(_vm.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.name = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('li', [_c('div', {
    staticClass: "text"
  }, [_vm._v("联系人号码")]), _vm._v(" "), _c('div', {
    staticClass: "cnt"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.mobilePhone),
      expression: "mobilePhone"
    }],
    attrs: {
      "type": "tel",
      "maxlength": "11",
      "placeholder": "请输入号码"
    },
    domProps: {
      "value": _vm._s(_vm.mobilePhone)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.mobilePhone = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('li', [_c('div', {
    staticClass: "text"
  }, [_vm._v("联系人地址")]), _vm._v(" "), _c('div', {
    staticClass: "cnt"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.address),
      expression: "address"
    }],
    attrs: {
      "type": "text",
      "placeholder": "请输入地址"
    },
    domProps: {
      "value": _vm._s(_vm.address)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.address = $event.target.value
      }
    }
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "submit img-size",
    attrs: {
      "data-marginTop": "20"
    },
    slot: "footer"
  }, [_c('div', {
    staticClass: "btn adressbtn img-size",
    class: {
      update: _vm.updateBtn
    },
    attrs: {
      "data-width": "246",
      "data-height": "60"
    },
    on: {
      "click": _vm.submit
    }
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-27f9a6c5", module.exports)
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

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var http = '';
module.exports = {
    status: http + '/activity/tycoon/status.do', //活动状态
    participate: http + '/activity/tycoon/participate.do', //渠道用户
    getlucky: http + '/activity/tycoon/lucky-bag.do', //每天一次免费福袋 - 查看
    setlucky: http + '/activity/tycoon/lucky-bag/get.do', //每天一次免费福袋 - 领取
    welcome: http + '/activity/tycoon/welcome.do', //5. 剩余投掷骰子机会 - 活动欢迎页(剩余骰子机会)
    map: http + '/activity/tycoon/on-map.do', //5. 6. 用户投骰子页面 - 用户在地图上的位置
    dicePlay: http + '/activity/tycoon/dice-play.do', //开始投骰子
    records: http + '/activity/tycoon/member-records.do', //用户中奖记录
    contact: http + '/activity/tycoon/contact-add.do', //地址
    raffle: http + '/activity/tycoon/raffle.do', //抽奖
    realPrizes: http + '/activity/tycoon/real-prizes.do', //终点奖品
    contactGet: http + '/activity/tycoon/contact-get.do' };

/***/ })

});
//# sourceMappingURL=16_chunk.js.map?name=05c98ee84cb2002c1339