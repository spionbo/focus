webpackJsonp([8],{

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(195)

var Component = __webpack_require__(26)(
  /* script */
  __webpack_require__(164),
  /* template */
  __webpack_require__(233),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\work\\pc\\activity\\app\\dafuwen\\src\\module\\main\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-35500bfb", Component.options)
  } else {
    hotAPI.reload("data-v-35500bfb", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(T) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _head = __webpack_require__(208);

var _head2 = _interopRequireDefault(_head);

var _main = __webpack_require__(209);

var _main2 = _interopRequireDefault(_main);

var _myPrize = __webpack_require__(34);

var _myPrize2 = _interopRequireDefault(_myPrize);

var _URL = __webpack_require__(5);

var _requirePop = __webpack_require__(2);

var _requirePop2 = _interopRequireDefault(_requirePop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	components: {
		Top: _head2.default,
		Main: _main2.default,
		myPrize: _myPrize2.default
	},
	mounted: function mounted() {
		T.setImgSize();
		T.mobile();
		T.getAppInfo();
		/*T.init({
  	loadding : {
  		imgs : [
  			
  		]
  	}
  });*/
	},

	methods: {
		activity: function activity() {
			(0, _requirePop2.default)('explain');
			/*require.ensure([],function( require ){
   	var explain = require('../../pop/explain.js');
   	explain.open();
   },'activity')*/
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(T, $) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _URL = __webpack_require__(5);

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
//
//
//

exports.default = {
	props: {},
	data: function data() {
		return {
			islogin: false,
			diceChance: 0, //掷骰机会
			isLucky: false
		};
	},
	beforeCreate: function beforeCreate() {
		var self = this;
		T.getAppInfo();
	},
	mounted: function mounted() {
		var self = this;
		this.islogin = T.isLogin;
		if (!this.islogin || !T.uid) return;
		info.click(function () {
			T.ajax({
				url: _URL.getlucky,
				data: {
					uid: T.uid
				},
				success: function success(_data) {
					self.isLucky = _data.map.hasGot;
				}
			});
			info.getDice(function () {
				self.diceChance = info.diceChance;
			});
		});
	},

	methods: {
		login: function login(callback) {
			T.login(callback);
		},
		receive: function receive(event) {
			//立即领取
			var self = this,
			    targ = $(event.target);
			T.login(function () {
				if (self.isLucky == true) {
					(0, _requirePop2.default)('lingquguo', {
						props: {
							content: '您已经领取过！',
							transition: 'bounceIn',
							okTxt: '确定'
						}
					}, 'publicTips');
				} else {
					T.ajax({
						url: _URL.setlucky,
						data: {
							uid: T.uid
						},
						success: function success(_data) {
							if (_data.flag == true) {
								var text = '恭喜您 ，成功领取';
								if (_data.map.type == 1) {
									//红包
									text += _data.map.amount + '元红包';
								} else if (_data.map.type == 2) {
									//加息券
									text += _data.map.amount + '%加息券';
								} else if (_data.map.type == 5) {
									//实物
									text += _data.map.amount;
								}

								(0, _requirePop2.default)('lingquguo', {
									props: {
										content: text,
										transition: 'bounceIn',
										okTxt: '确定'
									}
								}, 'publicTips');
								targ.addClass('btn2');
							}
							self.isLucky = true;
						}
					});
				}
			});
		},
		investment: function investment() {
			T.callApp.investment();
		},
		luckDraw: function luckDraw() {
			T.goPage.call(this, info.map.pointOnMap, 1);
			/*var num = info.map.pointOnMap , 
   	module = 'module1';
   if(num>24 && num<48){
   	module = 'module2'
   }else if(num>48 && num<72){
   	module = 'module3'
   }else if(num>72 && num<96){
   	module = 'module4'
   }else if(num>96 && num<119){
   	module = 'module5'
   }
   	router.push({ path: module, query: {
   	wap:T.wap,uid:T.uid,
   	pointOnMap:num,
   	diceChance : this.diceChance
   }})*/
		}
	}
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(4)))

/***/ }),

/***/ 194:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 195:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 201:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(194)

var Component = __webpack_require__(26)(
  /* script */
  null,
  /* template */
  __webpack_require__(232),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\work\\pc\\activity\\app\\dafuwen\\src\\module\\main\\head.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] head.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2c0eb0c7", Component.options)
  } else {
    hotAPI.reload("data-v-2c0eb0c7", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(201)

var Component = __webpack_require__(26)(
  /* script */
  __webpack_require__(165),
  /* template */
  __webpack_require__(239),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\work\\pc\\activity\\app\\dafuwen\\src\\module\\main\\main.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] main.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6e0f5420", Component.options)
  } else {
    hotAPI.reload("data-v-6e0f5420", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "header"
  }, [_c('div', {
    staticClass: "bg1 img-size",
    attrs: {
      "data-height": "441"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "light img-size",
    attrs: {
      "data-height": "1500"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "header-bg img-size",
    attrs: {
      "data-height": "429"
    }
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2c0eb0c7", module.exports)
  }
}

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main-section"
  }, [_c('Top'), _vm._v(" "), _c('Main'), _vm._v(" "), _c('div', {
    staticClass: "activity"
  }, [_c('div', {
    staticClass: "tit img-size",
    attrs: {
      "data-width": "718",
      "data-height": "51"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "bg-box img-size",
    attrs: {
      "data-width": "720",
      "data-height": "440"
    }
  }, [_c('div', {
    staticClass: "activity-btn img-size",
    attrs: {
      "data-left": "206",
      "data-top": "35",
      "data-width": "287",
      "data-height": "41"
    },
    on: {
      "click": _vm.activity
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "btn img-size",
    attrs: {
      "data-width": "190",
      "data-height": "55"
    }
  }, [_c('my-Prize', {
    attrs: {
      "position": "absolute",
      "left": "112",
      "top": "0",
      "width": "193",
      "height": "47"
    }
  })], 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-35500bfb", module.exports)
  }
}

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main-box"
  }, [_c('div', {
    staticClass: "tit"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "btn img-size",
    class: {
      btn2: _vm.isLucky
    },
    attrs: {
      "data-width": "200",
      "data-height": "67"
    },
    on: {
      "click": _vm.receive
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "bg img-size",
    attrs: {
      "data-width": "569",
      "data-height": "101",
      "data-lineHeight": "101"
    }
  }, [_vm._v("\r\n\t\t您的剩余掷骰机会：\r\n\t\t"), (_vm.islogin) ? _c('span', [_c('em', [_vm._v(_vm._s(_vm.diceChance))])]) : _c('span', [_vm._v("登录后查看")])]), _vm._v(" "), _c('div', {
    staticClass: "submit"
  }, [(_vm.islogin) ? _c('div', [(_vm.diceChance > 0) ? _c('div', {
    staticClass: "btn btn2 img-size",
    attrs: {
      "data-width": "559",
      "data-height": "98"
    },
    on: {
      "click": _vm.luckDraw
    }
  }) : _c('div', {
    staticClass: "btn img-size",
    attrs: {
      "data-width": "559",
      "data-height": "98"
    },
    on: {
      "click": _vm.investment
    }
  })]) : _c('div', [_c('div', {
    staticClass: "btn btn-login img-size",
    attrs: {
      "data-width": "559",
      "data-height": "98"
    },
    on: {
      "click": _vm.login
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "text"
  }, [_vm._v("\r\n\t\t单笔投资每满1万≥30天产品可获1个普通骰子"), _c('br'), _vm._v("每满5万≥90天产品可额外获1个遥控骰子"), _c('br'), _c('a', {
    attrs: {
      "href": "javascript:void(0)"
    },
    on: {
      "click": _vm.investment
    }
  }, [_vm._v("立即投资")])]), _vm._v(" "), _c('div', {
    staticClass: "car img-size",
    attrs: {
      "data-height": "84"
    }
  })])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("\r\n\t\t\t每天可以免费获得"), _c('em', [_vm._v("1个")]), _vm._v("大富翁福袋\r\n\t\t")])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6e0f5420", module.exports)
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

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

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

exports.default = {
	props: {
		position: String,
		left: String,
		top: String,
		width: String,
		height: String
	},
	mounted: function mounted() {
		setTimeout(function () {
			$('.prizesit').addClass('cur');
		}, 1200);
	},

	methods: {
		open: function open() {
			var pop = __webpack_require__(2);
			pop.call(this, 'mypPrize', {
				props: {
					transition: 'mask' //rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
				}
			});
		}
	}
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(33)

var Component = __webpack_require__(26)(
  /* script */
  __webpack_require__(32),
  /* template */
  __webpack_require__(35),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\work\\pc\\activity\\app\\dafuwen\\src\\components\\myPrize.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] myPrize.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-122ec001", Component.options)
  } else {
    hotAPI.reload("data-v-122ec001", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.position != "absolute") ? _c('div', {
    staticClass: "my-prize prizesit img-size",
    attrs: {
      "data-width": "232",
      "data-height": "73",
      "data-bottom": "51"
    },
    on: {
      "click": _vm.open
    }
  }) : _c('div', {
    staticClass: "my-prize position img-size",
    attrs: {
      "data-top": _vm.top,
      "data-left": _vm.left,
      "data-width": _vm.width,
      "data-height": _vm.height
    },
    on: {
      "click": _vm.open
    }
  })
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-122ec001", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=8_chunk.js.map?name=05c98ee84cb2002c1339