webpackJsonp([1],{

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(61)

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(51),
  /* template */
  __webpack_require__(91),
  /* scopeId */
  "data-v-42f5851e",
  /* cssModules */
  null
)
Component.options.__file = "E:\\work\\pc\\activity\\app\\guhuaDafuweng\\src\\rank\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-42f5851e", Component.options)
  } else {
    hotAPI.reload("data-v-42f5851e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(T) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _URL = __webpack_require__(9);

var _list = __webpack_require__(82);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    data: function data() {
        return {
            memberOnMap: '',
            memberOnMaps: [],
            week: [],
            month: [],
            show: true,
            transition: 'left',
            height: 0
        };
    },

    components: {
        list: _list2.default
    },
    mounted: function mounted() {
        var self = this;
        T.setImgSize();
        if (!T.uid) return;
        T.ajax({
            url: _URL.walkRank,
            data: {
                uid: T.uid,
                monthOrWeek: 1,
                historical: 0
            }
        }).then(function (data) {
            self.$set(self, 'week', data.map.memberOnList);
            self.memberOnMap = data.map.memberOnMap;
            self.memberOnMaps[0] = data.map.memberOnMap;
        });
        T.ajax({
            url: _URL.walkRank,
            data: {
                uid: T.uid,
                monthOrWeek: 0,
                historical: 0
            }
        }).then(function (data) {
            self.$set(self, 'month', data.map.memberOnList);
            self.memberOnMaps[1] = data.map.memberOnMap;
        });
    },

    filters: {
        getClass: function getClass(obj) {
            var text = '',
                rank = obj.index;
            if (rank == 1) {
                text = 'ranks r1';
            } else if (rank == 2) {
                text = 'ranks r2';
            } else if (rank == 3) {
                text = 'ranks r3';
            } else {
                text = 'text';
            }
            return text;
        }
    },
    methods: {
        tab: function tab(i, $event) {
            var li = $('.rank nav li');
            var self = this,
                tag = $event.currentTarget;
            li.removeClass('active');
            $(tag).addClass('active');

            this.show = i == 0;
            this.transition = i == 0 ? 'left' : 'right';
            self.memberOnMap = self.memberOnMaps[i];

            this.height = this[['week', 'month'][i]].length * 35;
            this.height = this.height < 35 ? '35px' : this.height + 40 + 'px';
        }
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _URL = __webpack_require__(9);

exports.default = {
    props: {
        memberOnMap: Object,
        week: Array,
        month: Array,
        show: Boolean,
        transition: String,
        height: String
    },
    filters: {
        getClass: function getClass(obj) {
            var text = '',
                rank = obj.index;
            if (rank == 1) {
                text = 'ranks r1';
            } else if (rank == 2) {
                text = 'ranks r2';
            } else if (rank == 3) {
                text = 'ranks r3';
            } else {
                text = 'text';
            }
            return text;
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
//
//
//
//
//
//
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

/***/ 55:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 61:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(55)

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(52),
  /* template */
  __webpack_require__(85),
  /* scopeId */
  "data-v-11ca5b02",
  /* cssModules */
  null
)
Component.options.__file = "E:\\work\\pc\\activity\\app\\guhuaDafuweng\\src\\rank\\list.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] list.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-11ca5b02", Component.options)
  } else {
    hotAPI.reload("data-v-11ca5b02", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content",
    style: ({
      minHeight: _vm.height
    })
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
    staticClass: "left-sider"
  }, [_c('ul', {
    staticClass: "active"
  }, [_c('li', {
    staticClass: "c1"
  }, [_c('div', {
    class: _vm._f("getClass")(_vm.memberOnMap)
  }, [_vm._v(_vm._s(_vm.memberOnMap.index == -1 ? '--' : _vm.memberOnMap.index))])]), _vm._v(" "), _c('li', {
    staticClass: "c2"
  }, [_vm._v(_vm._s(_vm.memberOnMap.mobilePhone)), _c('span', {
    staticClass: "me"
  })]), _vm._v(" "), _c('li', {
    staticClass: "c3"
  }, [_vm._v(_vm._s(_vm.memberOnMap.round) + "圈" + _vm._s(_vm.memberOnMap.currentpoint) + "步")]), _vm._v(" "), _c('li', {
    staticClass: "c4"
  }, [_vm._v(_vm._s(_vm.memberOnMap.prizeName))])]), _vm._v(" "), _vm._l((_vm.week), function(obj) {
    return (_vm.week.length > 0) ? _c('ul', [_c('li', {
      staticClass: "c1"
    }, [_c('div', {
      class: _vm._f("getClass")(obj)
    }, [_vm._v(_vm._s(obj.index))])]), _vm._v(" "), _c('li', {
      staticClass: "c2"
    }, [_vm._v(_vm._s(obj.mobilePhone))]), _vm._v(" "), _c('li', {
      staticClass: "c3"
    }, [_vm._v(_vm._s(obj.round) + "圈" + _vm._s(obj.currentpoint) + "步")]), _vm._v(" "), _c('li', {
      staticClass: "c4"
    }, [_vm._v(_vm._s(obj.prizeName))])]) : _vm._e()
  }), _vm._v(" "), (_vm.week.length < 1) ? _c('div', {
    staticClass: "text-align:center"
  }, [_vm._v("\r\n                暂无记录\r\n            ")]) : _vm._e()], 2)]), _vm._v(" "), _c('transition', {
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
    staticClass: "left-sider"
  }, [_c('ul', {
    staticClass: "active"
  }, [_c('li', {
    staticClass: "c1"
  }, [_c('div', {
    class: _vm._f("getClass")(_vm.memberOnMap)
  }, [_vm._v(_vm._s(_vm.memberOnMap.index == -1 ? '--' : _vm.memberOnMap.index))])]), _vm._v(" "), _c('li', {
    staticClass: "c2"
  }, [_vm._v(_vm._s(_vm.memberOnMap.mobilePhone)), _c('span', {
    staticClass: "me"
  })]), _vm._v(" "), _c('li', {
    staticClass: "c3"
  }, [_vm._v(_vm._s(_vm.memberOnMap.round) + "圈" + _vm._s(_vm.memberOnMap.currentpoint) + "步")]), _vm._v(" "), _c('li', {
    staticClass: "c4"
  }, [_vm._v(_vm._s(_vm.memberOnMap.prizeName))])]), _vm._v(" "), _vm._l((_vm.month), function(obj) {
    return (_vm.month.length > 0) ? _c('ul', [_c('li', {
      staticClass: "c1"
    }, [_c('div', {
      class: _vm._f("getClass")(obj)
    }, [_vm._v(_vm._s(obj.index))])]), _vm._v(" "), _c('li', {
      staticClass: "c2"
    }, [_vm._v(_vm._s(obj.mobilePhone))]), _vm._v(" "), _c('li', {
      staticClass: "c3"
    }, [_vm._v(_vm._s(obj.round) + "圈" + _vm._s(obj.currentpoint) + "步")]), _vm._v(" "), _c('li', {
      staticClass: "c4"
    }, [_vm._v(_vm._s(obj.prizeName))])]) : _vm._e()
  }), _vm._v(" "), (_vm.month.length < 1) ? _c('div', {
    staticClass: "text-align:center"
  }, [_vm._v("\r\n                暂无记录\r\n            ")]) : _vm._e()], 2)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-11ca5b02", module.exports)
  }
}

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "child-transition"
  }, [_c('div', {
    staticClass: "module-scroll"
  }, [_c('section', {
    staticClass: "rank"
  }, [_vm._m(0), _vm._v(" "), _c('nav', {
    staticClass: "img-size",
    attrs: {
      "data-fontSize": "24"
    }
  }, [_c('router-link', {
    staticClass: "active",
    attrs: {
      "to": "/history",
      "tag": "aside"
    }
  }, [_vm._v("\r\n                    历史榜单 "), _c('span', {
    staticClass: "jian"
  })]), _vm._v(" "), _c('ul', [_c('li', {
    staticClass: "active",
    on: {
      "click": function($event) {
        _vm.tab(0, $event)
      }
    }
  }, [_vm._v("周排名")]), _vm._v(" "), _c('li', {
    on: {
      "click": function($event) {
        _vm.tab(1, $event)
      }
    }
  }, [_vm._v("月排名")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "container"
  }, [_c('section', {
    staticClass: "box"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "content",
    style: ({
      minHeight: _vm.height
    })
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
    staticClass: "left-sider"
  }, [(_vm.memberOnMap) ? _c('ul', {
    staticClass: "active"
  }, [_c('li', {
    staticClass: "c1"
  }, [_c('div', {
    class: _vm._f("getClass")(_vm.memberOnMap)
  }, [_vm._v(_vm._s(_vm.memberOnMap.index == -1 ? '--' : _vm.memberOnMap.index))])]), _vm._v(" "), _c('li', {
    staticClass: "c2"
  }, [_vm._v(_vm._s(_vm.memberOnMap.mobilePhone)), _c('span', {
    staticClass: "me"
  })]), _vm._v(" "), _c('li', {
    staticClass: "c3"
  }, [_vm._v(_vm._s(_vm.memberOnMap.round) + "圈" + _vm._s(_vm.memberOnMap.currentpoint) + "步")]), _vm._v(" "), _c('li', {
    staticClass: "c4"
  }, [_vm._v(_vm._s(_vm.memberOnMap.prizeName))])]) : _vm._e(), _vm._v(" "), _vm._l((_vm.week), function(obj) {
    return (_vm.week.length > 0) ? _c('ul', [_c('li', {
      staticClass: "c1"
    }, [_c('div', {
      class: _vm._f("getClass")(obj)
    }, [_vm._v(_vm._s(obj.index))])]), _vm._v(" "), _c('li', {
      staticClass: "c2"
    }, [_vm._v(_vm._s(obj.mobilePhone))]), _vm._v(" "), _c('li', {
      staticClass: "c3"
    }, [_vm._v(_vm._s(obj.round) + "圈" + _vm._s(obj.currentpoint) + "步")]), _vm._v(" "), _c('li', {
      staticClass: "c4"
    }, [_vm._v(_vm._s(obj.prizeName))])]) : _vm._e()
  }), _vm._v(" "), (_vm.week.length < 1) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("\r\n                                    暂无记录\r\n                                ")]) : _vm._e()], 2)]), _vm._v(" "), _c('transition', {
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
    staticClass: "left-sider"
  }, [(_vm.memberOnMap) ? _c('ul', {
    staticClass: "active"
  }, [_c('li', {
    staticClass: "c1"
  }, [_c('div', {
    class: _vm._f("getClass")(_vm.memberOnMap)
  }, [_vm._v(_vm._s(_vm.memberOnMap.index == -1 ? '--' : _vm.memberOnMap.index))])]), _vm._v(" "), _c('li', {
    staticClass: "c2"
  }, [_vm._v(_vm._s(_vm.memberOnMap.mobilePhone)), _c('span', {
    staticClass: "me"
  })]), _vm._v(" "), _c('li', {
    staticClass: "c3"
  }, [_vm._v(_vm._s(_vm.memberOnMap.round) + "圈" + _vm._s(_vm.memberOnMap.currentpoint) + "步")]), _vm._v(" "), _c('li', {
    staticClass: "c4"
  }, [_vm._v(_vm._s(_vm.memberOnMap.prizeName))])]) : _vm._e(), _vm._v(" "), _vm._l((_vm.month), function(obj) {
    return (_vm.month.length > 0) ? _c('ul', [_c('li', {
      staticClass: "c1"
    }, [_c('div', {
      class: _vm._f("getClass")(obj)
    }, [_vm._v(_vm._s(obj.index))])]), _vm._v(" "), _c('li', {
      staticClass: "c2"
    }, [_vm._v(_vm._s(obj.mobilePhone))]), _vm._v(" "), _c('li', {
      staticClass: "c3"
    }, [_vm._v(_vm._s(obj.round) + "圈" + _vm._s(obj.currentpoint) + "步")]), _vm._v(" "), _c('li', {
      staticClass: "c4"
    }, [_vm._v(_vm._s(obj.prizeName))])]) : _vm._e()
  }), _vm._v(" "), (_vm.month.length < 1) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("\r\n                                    暂无记录\r\n                                ")]) : _vm._e()], 2)])], 1)])]), _vm._v(" "), _vm._m(2)])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('header', [_c('h1', {
    staticClass: "img-size",
    attrs: {
      "data-width": "627",
      "data-height": "87"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "title"
  }, [_c('ul', [_c('li', {
    staticClass: "c1"
  }, [_vm._v("排名")]), _vm._v(" "), _c('li', {
    staticClass: "c2"
  }, [_vm._v("用户"), _c('span', [_vm._v("(手机号)")])]), _vm._v(" "), _c('li', {
    staticClass: "c3"
  }, [_vm._v("成绩")]), _vm._v(" "), _c('li', {
    staticClass: "c4"
  }, [_vm._v("奖品")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('aside', {
    staticClass: "img-size",
    attrs: {
      "data-fontSize": "24",
      "data-lineHeight": "40",
      "data-paddingTop": "40",
      "data-paddingBottom": "50"
    }
  }, [_c('dl', [_c('dd', [_vm._v("*")]), _vm._v(" "), _c('dt', [_vm._v("榜单实时更新，数据仅供参考。实际获奖名单以每周/每月最后1天23:59:59为准")])]), _vm._v(" "), _c('dl', [_c('dd', [_vm._v("*")]), _vm._v(" "), _c('dt', [_vm._v("奖品以每一期活动公示为准，实物奖发奖时间为每月月初前15个工作日内统一发放")])]), _vm._v(" "), _c('dl', [_c('dd', [_vm._v("*")]), _vm._v(" "), _c('dt', [_vm._v("积分可至“积分兑换”栏目查看并兑换奖品")])]), _vm._v(" "), _c('dl', [_c('dd', [_vm._v("*")]), _vm._v(" "), _c('dt', [_vm._v("周/月榜成绩：指在单一自然周/月内所走步数之和（即所掷骰子点数之和）。\r\n                    "), _c('br'), _vm._v("周榜：每周继续上周路程，不重新回到起点，按每圈24步折算成绩。\r\n                    "), _c('br'), _vm._v("月榜：每月第1天，回到起点，重新计算成绩，上月成绩清零。")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-42f5851e", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=1_chunk.js.map?name=67553faf61540dba269b