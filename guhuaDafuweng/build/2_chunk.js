webpackJsonp([2],{

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(56)

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(49),
  /* template */
  __webpack_require__(86),
  /* scopeId */
  "data-v-1a47aeb6",
  /* cssModules */
  null
)
Component.options.__file = "E:\\work\\pc\\activity\\app\\guhuaDafuweng\\src\\prize\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1a47aeb6", Component.options)
  } else {
    hotAPI.reload("data-v-1a47aeb6", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(T) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _URL = __webpack_require__(9);

var _list = __webpack_require__(81);

var _list2 = _interopRequireDefault(_list);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        list: _list2.default
    },
    data: function data() {
        return {
            list: [],
            list1: [],
            show: true,
            transition: 'left',
            record: _URL.record,
            pageSize: 20
        };
    },
    mounted: function mounted() {
        var self = this;
        T.init();
        /*if(!T.uid) return; 
        T.ajax({
            url : record , 
            data : {
                uid :T.uid , 
                recodeType : 1 , //1,我的奖品; 2积分兑换记录
                pageOn : 1 , 
                pageSize : 20
            }
        }).then(data=>{
            self.list = data.map.page.rows;
        })
        T.ajax({
            url : record , 
            data : {
                uid :T.uid , 
                recodeType : 2 , //1,我的奖品; 2积分兑换记录
                pageOn : 1 , 
                pageSize : 20
            }
        }).then(data=>{
            self.list1 = data.map.page.rows;
        })*/
    },

    methods: {
        tab: function tab(i, $event) {
            var li = $('.prize nav li');
            var tag = $event.currentTarget;
            li.removeClass('active');
            $(tag).addClass('active');

            this.show = i == 0;
            this.transition = i == 0 ? 'right' : 'left';

            this.height = this[['list', 'list1'][i]].length * 35 + 65;
            this.height = this.height < 35 ? '35px' : this.height + 'px';
        }
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 50:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        type: String,
        url: String,
        pageOn: {
            type: Number,
            default: 1
        },
        pageSize: {
            type: Number,
            default: 20
        }
    },
    data: function data() {
        return {
            list: [],
            more: false
        };
    },
    mounted: function mounted() {
        var self = this,
            pageOn = this.pageOn,
            pageSize = this.pageSize,
            loading = true;

        T.init();
        if (!T.uid) return;
        function getList() {
            if (loading == false) return;
            loading = false;
            T.ajax({
                url: self.url,
                data: {
                    uid: T.uid,
                    recodeType: self.type, //1,我的奖品; 2积分兑换记录
                    pageOn: pageOn,
                    pageSize: pageSize
                }
            }).then(function (data) {
                var list = data.map.page.rows;
                if (!list || !list.length) return;
                self.list = self.list.concat(list);
                loading = true;
                self.$nextTick(function () {
                    var box = $('.boxd .scroll').eq(parseInt(self.type) - 1);
                    box.unbind().on('scroll', function () {
                        var scrollHeight = box[0].scrollHeight,
                            height = box.height();
                        var scrollTop = $(this).scrollTop() + height + 50;
                        if (scrollTop > scrollHeight) {
                            if (pageOn <= data.map.page.totalPage && loading == true) {
                                pageOn++;
                                getList();
                                self.more = false;
                            } else {
                                self.more = true;
                            }
                        }
                    });
                });
            });
        };
        getList();
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 56:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 58:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(58)

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(50),
  /* template */
  __webpack_require__(88),
  /* scopeId */
  "data-v-29409e6a",
  /* cssModules */
  null
)
Component.options.__file = "E:\\work\\pc\\activity\\app\\guhuaDafuweng\\src\\prize\\list.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] list.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-29409e6a", Component.options)
  } else {
    hotAPI.reload("data-v-29409e6a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "child-transition bg"
  }, [_c('div', {
    staticClass: "module-scroll"
  }, [_c('section', {
    staticClass: "prize img-size",
    attrs: {
      "data-paddingBottom": "150"
    }
  }, [_c('nav', {
    staticClass: "img-size",
    attrs: {
      "data-height": "140"
    }
  }, [_c('ul', {
    staticClass: "img-size",
    attrs: {
      "data-height": "60",
      "data-lineHeight": "60"
    }
  }, [_c('li', {
    staticClass: "active",
    on: {
      "click": function($event) {
        _vm.tab(0, $event)
      }
    }
  }, [_vm._v("我的奖品")]), _vm._v(" "), _c('li', {
    on: {
      "click": function($event) {
        _vm.tab(1, $event)
      }
    }
  }, [_vm._v("积分兑换记录")])])]), _vm._v(" "), _c('div', {
    staticClass: "content img-size",
    attrs: {
      "data-margin": "40"
    }
  }, [_c('transition', {
    attrs: {
      "name": _vm.transition
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    staticClass: "list-child left-sider"
  }, [_c('list', {
    attrs: {
      "url": _vm.record,
      "pageSize": _vm.pageSize,
      "type": "1"
    }
  })], 1)]), _vm._v(" "), _c('transition', {
    attrs: {
      "name": _vm.transition
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.show),
      expression: "!show"
    }],
    staticClass: "list-child left-sider"
  }, [_c('list', {
    attrs: {
      "url": _vm.record,
      "pageSize": _vm.pageSize,
      "type": "2"
    }
  })], 1)])], 1), _vm._v(" "), _vm._m(0)])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('aside', {
    staticClass: "img-size",
    attrs: {
      "data-fontSize": "24",
      "data-lineHeight": "40"
    }
  }, [_c('dl', [_c('dd', [_vm._v("*")]), _vm._v(" "), _c('dt', [_vm._v("红包，加息券发放到您的多融账户，可登录APP或官网查看并使用")])]), _vm._v(" "), _c('dl', [_c('dd', [_vm._v("*")]), _vm._v(" "), _c('dt', [_vm._v("积分兑换奖品，将在每月月初前15个工作日内统一发放上月奖品")])]), _vm._v(" "), _c('dl', [_c('dd', [_vm._v("*")]), _vm._v(" "), _c('dt', [_vm._v("2017年5月29日之后的积分兑换记录请在积分商场中查看")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1a47aeb6", module.exports)
  }
}

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('article', {
    staticClass: "boxd"
  }, [_c('div', {
    staticClass: "tit img-size",
    attrs: {
      "data-paddingBottom": "60",
      "data-fontSize": "30"
    }
  }, [_c('ul', [_c('li', [_vm._v("奖品")]), _vm._v(" "), _c('li', [_vm._v(_vm._s(_vm.type == 1 ? '获取' : '兑换') + "时间")]), _vm._v(" "), _c('li', [_vm._v("获取途径")])])]), _vm._v(" "), _c('div', {
    staticClass: "cnt scroll img-size",
    attrs: {
      "data-fontSize": "24"
    }
  }, [_vm._l((_vm.list), function(obj) {
    return _c('ul', [_c('li', [_vm._v(_vm._s(obj.name))]), _vm._v(" "), _c('li', [_vm._v("20" + _vm._s(new Date(obj.time).Format('yy/MM/dd')))]), _vm._v(" "), _c('li', [_vm._v(_vm._s(obj.descpt))])])
  }), _vm._v(" "), (_vm.list.length < 1) ? _c('div', {
    staticStyle: {
      "padding": "20px",
      "text-align": "center"
    }
  }, [_vm._v("\r\n            暂无记录\r\n        ")]) : _vm._e()], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-29409e6a", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=2_chunk.js.map?name=67553faf61540dba269b