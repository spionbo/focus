webpackJsonp([3],{

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(68)

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(35),
  /* template */
  __webpack_require__(98),
  /* scopeId */
  "data-v-e5aa24ec",
  /* cssModules */
  null
)
Component.options.__file = "E:\\work\\pc\\activity\\app\\guhuaDafuweng\\src\\components\\history.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] history.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e5aa24ec", Component.options)
  } else {
    hotAPI.reload("data-v-e5aa24ec", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(T) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _URL = __webpack_require__(9);

var _list = __webpack_require__(71);

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

exports.default = {
    components: {
        list: _list2.default
    },
    data: function data() {
        return {
            show: true,
            transition: 'left',
            walkRank: _URL.walkRank
        };
    },
    mounted: function mounted() {
        var self = this;
        T.setImgSize();
        setTimeout(function () {
            $('nav.nav li a').eq(1).addClass('active');
        }, 200);
    },
    beforeRouteLeave: function beforeRouteLeave(to, from, next) {
        $('nav.nav li a').eq(1).removeClass('active');
        next();
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
        back: function back() {
            router.back();
        },
        setTime: function setTime(timeMap, i) {
            this.times[i] = timeMap;
            if (i != 0) return;
            this.timeMap = timeMap;
        },
        tab: function tab(i, $event) {
            var li = $('.rank header li');
            var tag = $event.currentTarget,
                self = this,
                tab = 0;
            li.removeClass('active');
            $(tag).addClass('active');
            this.show = i == 0;
            this.transition = i == 0 ? 'right' : 'left';

            tab = i == 0 ? 1 : 0;
        }
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(T) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _URL = __webpack_require__(9);

exports.default = {
    props: {
        url: String,
        monthOrWeek: Number,
        historical: {
            type: Number,
            default: 1
        }
    },
    data: function data() {
        return {
            memberOnMap: '',
            list: 0,
            timeMap: 0,
            page: 0,
            timeSize: 1
        };
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
    mounted: function mounted() {
        this.getData();
    },

    methods: {
        getData: function getData() {
            var self = this;
            self.historical = parseInt(self.historical);
            if (!T.uid) return;
            T.ajax({
                url: self.url,
                data: {
                    uid: T.uid,
                    monthOrWeek: self.monthOrWeek,
                    historical: self.historical
                }
            }).then(function (data) {
                self.$set(self, 'list', data.map.memberOnList);
                self.memberOnMap = data.map.memberOnMap;
                self.timeMap = data.map.timeMap;
                self.timeSize = data.map.timeMap.timeSize || 1;
            });
        },
        pre: function pre() {
            var self = this;
            self.historical = parseInt(self.historical);
            if (self.historical + 1 <= self.timeSize) {
                self.historical += 1;
                self.getData();
            }
        },
        next: function next() {
            var self = this;
            self.historical = parseInt(self.historical);
            if (self.historical - 1 >= 1) {
                self.historical -= 1;
                self.getData();
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 57:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 68:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(57)

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(37),
  /* template */
  __webpack_require__(87),
  /* scopeId */
  "data-v-279c3098",
  /* cssModules */
  null
)
Component.options.__file = "E:\\work\\pc\\activity\\app\\guhuaDafuweng\\src\\components\\list.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] list.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-279c3098", Component.options)
  } else {
    hotAPI.reload("data-v-279c3098", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "box left-sider"
  }, [_c('div', {
    staticClass: "tit-tab img-size",
    attrs: {
      "data-fontSize": "24"
    }
  }, [_c('div', {
    staticClass: "btn pre",
    class: {
      gray: _vm.historical == _vm.timeSize
    },
    on: {
      "click": _vm.pre
    }
  }, [_vm._v("上一页")]), _vm._v(" "), (_vm.timeMap.startTime) ? _c('div', {
    staticClass: "time"
  }, [_vm._v("\r\n            20" + _vm._s(new Date(_vm.timeMap.startTime).Format('yy/MM/dd')) + " 至 20" + _vm._s(new Date(_vm.timeMap.endTime).Format('yy/MM/dd')) + "\r\n        ")]) : _vm._e(), _vm._v(" "), (!_vm.timeMap.startTime) ? _c('div', {
    staticClass: "time"
  }, [_vm._v("\r\n            --\r\n        ")]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "btn next",
    class: {
      gray: _vm.historical == 1
    },
    on: {
      "click": _vm.next
    }
  }, [_vm._v("下一页")])]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "content",
    style: ({
      minHeight: _vm.height
    })
  }, [_vm._l((_vm.list), function(obj) {
    return (_vm.list.length > 0) ? _c('ul', [_c('li', {
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
  }), _vm._v(" "), (_vm.list.length < 1) ? _c('div', {
    staticClass: "no-data"
  }, [_vm._v("\r\n            暂无记录\r\n        ")]) : _vm._e()], 2)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "title img-size",
    attrs: {
      "data-fontSize": "24"
    }
  }, [_c('ul', [_c('li', {
    staticClass: "c1"
  }, [_vm._v("排名")]), _vm._v(" "), _c('li', {
    staticClass: "c2"
  }, [_vm._v("用户"), _c('span', {
    staticClass: "img-size",
    attrs: {
      "data-fontSize": "20"
    }
  }, [_vm._v("(手机号)")])]), _vm._v(" "), _c('li', {
    staticClass: "c3"
  }, [_vm._v("成绩")]), _vm._v(" "), _c('li', {
    staticClass: "c4"
  }, [_vm._v("奖品")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-279c3098", module.exports)
  }
}

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "child-transition bg"
  }, [_c('div', {
    staticClass: "module-scroll"
  }, [_c('section', {
    staticClass: "rank"
  }, [_c('header', [_c('h1', {
    staticClass: "img-size",
    attrs: {
      "data-fontSize": "36"
    }
  }, [_c('div', {
    staticClass: "back",
    on: {
      "click": _vm.back
    }
  }), _vm._v("历史榜单")]), _vm._v(" "), _c('nav', {
    staticClass: "img-size",
    attrs: {
      "data-fontSize": "24"
    }
  }, [_c('ul', [_c('li', {
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
  }, [_vm._v("月排名")])])])]), _vm._v(" "), _c('div', {
    staticClass: "container"
  }, [_c('transition', {
    attrs: {
      "name": _vm.transition
    }
  }, [_c('list', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    attrs: {
      "url": _vm.walkRank,
      "monthOrWeek": "1"
    }
  })], 1), _vm._v(" "), _c('transition', {
    attrs: {
      "name": _vm.transition
    }
  }, [_c('list', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.show),
      expression: "!show"
    }],
    attrs: {
      "url": _vm.walkRank,
      "monthOrWeek": "0"
    }
  })], 1)], 1)])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e5aa24ec", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=3_chunk.js.map?name=67553faf61540dba269b