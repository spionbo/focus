webpackJsonp([1,5],{

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

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(T) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pop = __webpack_require__(30);

var _pop2 = _interopRequireDefault(_pop);

var _rankList = __webpack_require__(9);

var _rankList2 = _interopRequireDefault(_rankList);

var _URL = __webpack_require__(3);

var _moveEvent = __webpack_require__(8);

var _moveEvent2 = _interopRequireDefault(_moveEvent);

var _public = __webpack_require__(1);

var _public2 = _interopRequireDefault(_public);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var messages = _public2.default.messages,
    preClick = false,
    nextClick = false; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        pop: _pop2.default,
        list: _rankList2.default
    },
    data: function data() {
        return {
            P: _public2.default,
            time: 0,
            startTime: 0,
            endTime: 0,
            times: [],
            list: [],
            list1: [],
            num1: 0,
            num2: 0,
            tabNum: 0,
            daySize: 0,
            message: messages[0],
            pageSize: 0,
            transition: 'left'
        };
    },
    mounted: function mounted() {
        this.getRank(0, 0);
        this.getRank(1, 0);
        this.updateMove();
    },

    props: {
        transition: String,
        closeCallback: Function
    },
    methods: {
        pre: function pre() {
            var type = 0,
                num = 0;
            if (this.tabNum == 0) {
                if (this.num1 >= this.daySize && preClick) return;
                this.num1++;
            } else {
                this.num2++;
            }
            num = this[['num1', 'num2'][this.tabNum]];
            this.getRank(this.tabNum, num);

            preClick = true;
            nextClick = false;
        },
        next: function next() {
            var type = 0,
                num = 0;
            if (this.tabNum == 0) {
                if (this.num1 <= 0 && nextClick) return;
                this.num1--;
                this.num1 = this.num1 < 0 ? 0 : this.num1;
            } else {
                this.num2--;
                this.num2 = this.num2 < 0 ? 0 : this.num2;
            }
            num = this[['num1', 'num2'][this.tabNum]];
            this.getRank(this.tabNum, num);

            nextClick = true;
            preClick = false;
        },
        tab: function tab(num, $event) {
            var tag = $($event.currentTarget);
            var li = $('.winningRank nav .tab');
            this.tabNum = num;

            li.removeClass('current');
            tag.addClass('current');
            this.transition = num == 0 ? 'left' : 'right';

            this.time = this.times[num];
            this.message = messages[num];
        },
        updateMove: function updateMove() {
            return;
            var self = this;
            if (!this.Move) {
                this.Move = new _moveEvent2.default({
                    nav: $('.winningRank nav .tab'),
                    effect: $('.winningRank .effect'),
                    option: $('.winningRank .option'),
                    animate3d: false,
                    tabCallback: function tabCallback(i) {
                        self.time = self.times[i];
                        self.message = messages[i];
                        self.tabNum = i;
                    }
                });
            } else {
                this.Move.update();
            }
        },
        getRank: function getRank(type, num) {
            //0为当天  1 为每周
            var self = this;

            T.ajax({
                url: _URL.rankRecord,
                data: { recordNum: num, dayOrWeek: type },
                callback: true
            }).then(function (data) {
                if (type == 0) {
                    self.$set(self, 'list', data.map.prizeRanks);
                    self.times[0] = data.map.startTime;
                    self.time = data.map.startTime;
                    self.daySize = data.map.daySize;
                } else {
                    self.times[1] = data.map.startTime;
                    self.$set(self, 'list1', data.map.prizeRanks);
                    self.startTime = data.map.startTime;
                    self.endTime = data.map.endTime;
                }
                self.$nextTick(function () {
                    setTimeout(function () {
                        $('.effect-content').show();
                        self.updateMove();
                    }, 510);
                });
            });
        },
        close: function close() {
            this.$refs.pop.closePop();
        }
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 37:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(37)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(35),
  /* template */
  __webpack_require__(45),
  /* scopeId */
  "data-v-4392a8e6",
  /* cssModules */
  null
)
Component.options.__file = "E:\\work\\pc\\activity\\app\\haoli\\src\\pop\\winning.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] winning.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4392a8e6", Component.options)
  } else {
    hotAPI.reload("data-v-4392a8e6", Component.options)
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
      "transition": _vm.transition,
      "closeCallback": _vm.closeCallback,
      "height": "800"
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
    staticClass: "t-3 img-size",
    attrs: {
      "data-width": "189",
      "data-height": "47"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "winning winningRank",
    slot: "body"
  }, [_c('nav', {
    staticClass: "img-size",
    attrs: {
      "data-fontSize": "30",
      "data-height": "52",
      "data-lineHeight": "52"
    }
  }, [_c('div', {
    staticClass: "tab current",
    on: {
      "click": function($event) {
        _vm.tab(0, $event)
      }
    }
  }, [_vm._v("每日榜单")]), _vm._v(" "), _c('div', {
    staticClass: "tab",
    on: {
      "click": function($event) {
        _vm.tab(1, $event)
      }
    }
  }, [_vm._v("总榜单")])]), _vm._v(" "), _c('div', {
    staticClass: "content img-size",
    attrs: {
      "data-fontSize": "30",
      "data-marginTop": "30"
    }
  }, [_c('div', {
    staticClass: "explorer"
  }, [_c('p', {
    staticClass: "img-size",
    attrs: {
      "data-fontSize": "20"
    }
  }, [_vm._v(_vm._s(_vm.message))]), _vm._v(" "), _c('div', {
    staticClass: "time img-size",
    attrs: {
      "data-fontSize": "24"
    }
  }, [_c('time', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.tabNum == 0),
      expression: "tabNum==0"
    }]
  }, [_vm._v(_vm._s(new Date(_vm.time).Format('yyyy-MM-dd')))]), _vm._v(" "), _c('time', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.tabNum == 1),
      expression: "tabNum==1"
    }]
  }, [_vm._v(_vm._s(new Date(_vm.startTime).Format('yyyy-MM-dd')) + " - " + _vm._s(new Date(_vm.endTime).Format('yyyy-MM-dd')))]), _vm._v(" "), _c('div', {
    staticClass: "line"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "effect-content"
  }, [_c('transition', {
    attrs: {
      "name": _vm.transition
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.tabNum == 0),
      expression: "tabNum==0"
    }],
    staticClass: "cnt1 left-sider"
  }, [_c('list', {
    attrs: {
      "list": _vm.list
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "page img-size",
    attrs: {
      "data-fontSize": "24"
    }
  }, [_c('div', {
    staticClass: "pre btn",
    class: {
      active: !_vm.list.length
    },
    on: {
      "click": _vm.pre
    }
  }, [_vm._v("上一页")]), _c('div', {
    staticClass: "next btn",
    on: {
      "click": _vm.next
    }
  }, [_vm._v("下一页")])])], 1)]), _vm._v(" "), _c('transition', {
    attrs: {
      "name": _vm.transition
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.tabNum == 1),
      expression: "tabNum==1"
    }],
    staticClass: "cnt2 left-sider"
  }, [_c('list', {
    attrs: {
      "list": _vm.list1
    }
  })], 1)])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "submit",
    slot: "footer"
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4392a8e6", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=1_chunk.js.map?name=1086476b833cf105a4b6