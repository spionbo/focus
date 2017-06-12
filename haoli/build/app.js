/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length)
/******/ 			resolves.shift()();
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		6: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return Promise.resolve();
/******/
/******/ 		// an Promise means "currently loading".
/******/ 		if(installedChunks[chunkId]) {
/******/ 			return installedChunks[chunkId][2];
/******/ 		}
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + ({}[chunkId]||chunkId) + "_chunk.js?name=" + "1086476b833cf105a4b6" + "";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunks[chunkId][2] = promise;
/******/
/******/ 		head.appendChild(script);
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Promise) {

__webpack_require__(17);

var _requirePop = __webpack_require__(4);

var _requirePop2 = _interopRequireDefault(_requirePop);

var _cookie = __webpack_require__(15);

var _cookie2 = _interopRequireDefault(_cookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Date.prototype.Format = function (fmt) {
    //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }return fmt;
};
var T = {
    body: $('body'),
    duorongHttp: 'http://app.duorongcf.com',
    imgsrc: 'http://www.duorongcf.com'
    /*,duorongHttp : 'http://192.168.1.248'
    ,imgsrc : 'http://192.168.0.245:8888'*/
    , init: function init(obj) {
        var config = {
            loadding: {
                timing: 'spinner-loader', //加载 spinner , spinner-loader , loadingbar , lightLoader , square ,circles,circles1,circles2,circles3,circles4,line' 
                fillColor: 'rgba(150,213,0,1)',
                imgs: [],
                callback: function callback() {}
            }
        };
        $.extend(T, obj);
        if (obj && obj.loadding) {
            $.extend(config.loadding, obj.loadding);
            if (obj.loadding.imgs && obj.loadding.imgs.length > 0) {
                var imgs = T.loadding.imgs || [];
                imgs = imgs.concat(obj.loadding.imgs);
                config.loadding.imgs = imgs;
            }
        }
        $.extend(T, config);
        T.setImgSize();
        T.mobile();
        T.load();
        T.getAppInfo();
        window.onresize = T.setImgSize;
    },
    requestAnimationFrame: window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || window.setImmediate || window.msSetIntermediate || function (callback) {
        setInterval(callback, 1000 / 60);
    },
    mobile: function mobile() {
        var ua = navigator.userAgent,
            uaLower = ua.toLowerCase(),
            IS_IPAD = ua.match(/iPad/i) != null,
            IS_IPHONE = !IS_IPAD && (ua.match(/iPhone/i) != null || ua.match(/iPod/i) != null),
            IS_IOS = IS_IPAD || IS_IPHONE,
            IS_ANDROID = !IS_IOS && ua.match(/android/i) != null,
            IS_MOBILE = IS_IOS || IS_ANDROID;

        T.Iphone = IS_IOS;
        T.Android = IS_ANDROID;
        T.Mobile = IS_MOBILE;

        function is_weixin() {
            var ua = uaLower;
            if (ua.match(/micromessenger/i) == "micromessenger") {
                return true;
            } else {
                return false;
            }
        }
        function is_weixin_ios() {
            var ua = uaLower;
            if (ua.match(/micromessenger/i) == "micromessenger" && T.Iphone) {
                return true;
            } else {
                return false;
            }
        };
        function is_weibo() {
            var ua = uaLower;
            if (ua.match(/Weibo/i) == "weibo") {
                return true;
            } else {
                return false;
            }
        };
        function is_qq() {
            var ua = uaLower;
            if (ua.match(/QQ\//i) == "qq/") {
                return true;
            } else {
                return false;
            }
        };
        T.weixin = is_weixin();
        T.ios_weixin = is_weixin_ios();
        T.weibo = is_weibo();
        T.qq = is_qq();
    },
    localStorage: {
        setItem: function setItem(key, value, obj) {
            if (window.localStorage) {
                localStorage.setItem(key, JSON.stringify(value));
            } else {
                $.fn.cookie(key, value, obj);
            }
        },
        getItem: function getItem(name) {
            if (window.localStorage) {
                return JSON.parse(localStorage.getItem(name));
            } else {
                return $.fn.cookie(name);
            }
        }
    },
    getAppInfo: function getAppInfo() {
        var uid = T.getQueryString('uid'),
            wap = T.getQueryString('wap');

        T.uid = uid;
        T.isLogin = T.uid && T.uid.length > 0 ? true : false;
        T.wap = wap == 'true';
    },
    click: function click(callback) {
        if (T.uid) {
            callback();
        } else {
            (0, _requirePop2.default)('lingquguo', {
                props: {
                    content: '<div style="text-align:center; padding:20px;">您还未登录，请登录后再操作！</div>',
                    okTxt: '去登录',
                    transition: 'rotate3d',
                    okCallback: function okCallback() {
                        T.login();
                    }
                }
            }, 'publicTips');
        }
    },
    login: function login(callback) {
        T.callApp.login({ callback: callback });
    },
    callApp: {
        login: function login(obj) {
            //登录
            var url = obj.url ? 'returnUrl=' + obj.url : '';
            T.getAppInfo();
            if (T.isLogin == true) {
                obj.callback && obj.callback();
            } else {
                if (T.wap) {
                    window.location.href = T.duorongHttp + '/dl?' + encodeURIComponent(url);
                } else {
                    window.location.href = 'jump://page=4?';
                }
            }
        },
        investment: function investment() {
            //去投资列表页
            T.getAppInfo();
            if (T.wap) {
                window.location.href = T.duorongHttp + '/main/bankBillList';
            } else {
                window.location.href = 'jump://page=2?';
            }
        },
        home: function home() {
            //去投资列表页
            T.getAppInfo();
            if (T.wap) {
                window.location.href = 'http://app.duorongcf.com';
            } else {
                window.location.href = 'jump://page=1?';
            }
        }
    },
    getEvent: function getEvent(e, def, p) {
        e = e || window.event;
        if (!def) {
            e.stopPropagation();
        }
        if (!p) {
            e.preventDefault();
        }
        e = e.touches ? e.touches[0] : e;
        return e;
    },
    myAddListener: function myAddListener(ele, type, fn) {
        if (T.Mobile) {
            var mapping = {
                mousedown: 'touchstart',
                mouseup: 'touchend',
                mousemove: 'touchmove'
            };
            type = mapping[type] || type;
        }
        ele.each(function () {
            this.removeEventListener(type, fn, false);
            this.addEventListener(type, fn, false);
        });
    },
    getMS: function getMS() {
        var z = new Date();
        return (z.getMinutes() * 60 + z.getSeconds()) * 1000 + z.getMilliseconds();
    },
    getQueryString: function getQueryString(name) {
        var reg = new RegExp("(^|&|/?)" + name + "=([^&]*)(&|$)", "i");
        var r = encodeURI(window.location.search || window.location.href || window.location.hash).substr(1).match(reg);
        if (r != null) return unescape(r[2]);return null;
    },
    update: function update() {
        T.width = T.body.width();
        T.height = T.body.height();
    },
    setImgSize: function setImgSize() {
        T.update();
        var originWidth = 375,
            ratio = T.width / originWidth;

        $('.img-size').each(function () {
            var self = $(this);
            $.each(['height', 'width', 'fontSize', 'left', 'right', 'bottom', 'top', 'paddingTop', 'lineHeight', 'paddingLeft', 'paddingRight', 'paddingBottom', 'marginTop', 'marginLeft', 'marginRight', 'marginBottom'], function (i, str) {
                var num = self.attr('data-' + str);
                if (num) {
                    num = num * ratio / 2 / 16 + 'rem';
                    self.css(str, num);
                }
            });
        });
    },
    ajax: function ajax(obj) {
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: obj.url,
                type: 'POST',
                dataType: 'json',
                contentType: 'application/json;charset=UTF-8',
                processData: false,
                data: JSON.stringify(obj.data),
                success: function success(data) {
                    if (data.flag == true) {
                        resolve(data);
                    } else {
                        if (obj.callback) {
                            return resolve(data);
                        }
                        (0, _requirePop2.default)('lingquguo', {
                            props: {
                                content: '<div style="padding:20px 0; text-align:center;">' + (data.errorMsg || '操作失败，请联系客服！') + '</div>',
                                okTxt: '确定',
                                transition: 'rotate3d'
                            }
                        }, 'publicTips');
                    }
                },
                error: function error() {
                    (0, _requirePop2.default)('lingquguo', {
                        props: {
                            content: '<div style="padding:20px 0; text-align:center;">请求失败，请联系客服！</div>',
                            okTxt: '确定',
                            transition: 'rotate3d'
                        }
                    }, 'publicTips');
                }
            });
        });
    },
    load: function load() {
        var timing = T.loadding.timing,
            fillColor = T.loadding.fillColor,
            demo = $('<div id="Loading"><div class="loadIcon"></div><div class="loadText"></div></div>'),
            loadIcon = demo.find('.loadIcon'),
            text = demo.find('.loadText'),
            loadDemo = '',
            count = 0,
            timer = null,
            margin = 0,
            imgs = $('.load-img'),
            img = imgs.length ? T.loadding.imgs.concat(imgs) : T.loadding.imgs,
            len = img.length,
            callbackfn = function callbackfn(callback) {
            callback();
        };

        if (timing == 'spinner-loader') {
            //win8 系统
            loadDemo = "<div class='spinner-loader'></div>";
        } else if (timing == 'loadingbar') {
            //5个竖条
            loadDemo = '<div class="loadingbar">' + '<div class="loading-bar"></div>' + '<div class="loading-bar"></div>' + '<div class="loading-bar"></div>' + '<div class="loading-bar"></div>' + '<div class="loading-bar"></div>' + '</div>';
        } else if (timing == 'spinner') {
            //10个圆旋转
            loadDemo = "<div class='spinner'></div>";
        }
        loadIcon.html(loadDemo);
        T.body.append(demo);
        demo.click(function (e) {
            e.stopPropagation();
        });
        if (len) {
            callbackfn(function () {
                T.body.css({ height: T.height + 'px' });
                img.map(function (div) {
                    var oImage = new Image(),
                        src = '';

                    if (typeof div == 'string') {
                        src = div;
                    } else {
                        src = $(div).attr('src');
                    }
                    oImage.src = src;
                    text.html('Loading&nbsp;0%');
                    oImage.onload = function () {
                        count++;
                        text.html('Loading&nbsp;' + Math.round(count / len * 100) + '%');
                        if (count == len) {
                            T.canvasDemo && T.canvasDemo.stop();
                            demo.remove();
                            $('.remove-hide').remove();
                            T.body.css({ 'height': '100%' });
                            T.loadding.callback && T.loadding.callback();
                        }
                    };
                    oImage.onerror = function () {
                        console.log('错误的地址：' + src);
                    };
                });
            });
        } else {
            T.loadding.callback && T.loadding.callback();
            demo.remove();
            $('.remove-hide').remove();
        }
    }
};
module.exports = T;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Public = {
   api: 'https://shimo.im/sheet/3FDuhYVvoQA838kX',
   name: '金融财富大富翁',
   version: '1.0',
   status: -1,
   vip: false,
   messages: ['每日榜单排名前6名依次可获得奖品+2.3%加息券', '总榜单排名前8名依次可获得奖品+2.5%加息券'],
   author: 'bo.peng',
   http: 'http://www.duorongcf.com',
   email: 'spion@qq.com',
   time: '2017年4月18日至2017年4月24日'
};
module.exports = Public;

/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var http = '';
module.exports = {
    status: http + '/activity/apr-supplement/status.do', //活动状态
    participate: http + '/activity/apr-supplement/participate.do', //渠道用户
    walkRank: http + '/activity/apr-supplement/wealth-and-lottery.do', //排行
    rankRecord: http + '/activity/apr-supplement/rank-record.do' };

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

module.exports = function (elementName, _data, name) {
    name = name || elementName;
    _data = _data || {
        props: {
            transition: 'rotate3d' //rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
        }
    };
    __webpack_require__.e/* require.ensure */(0).then((function (require) {
        $('<div class="child">').appendTo('#pop');
        Vue.component(elementName, function () {
            return __webpack_require__(27)("./" + name + '.vue');
        });
        new Vue({
            el: '#pop .child',
            render: function render(h) {
                return h(elementName, _extends({}, _data));
            }
        });
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16).Promise;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(20)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(12),
  /* template */
  __webpack_require__(24),
  /* scopeId */
  "data-v-30a98dc4",
  /* cssModules */
  null
)
Component.options.__file = "E:\\work\\pc\\activity\\app\\haoli\\src\\module\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-30a98dc4", Component.options)
  } else {
    hotAPI.reload("data-v-30a98dc4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
	function Move(option) {
		_classCallCheck(this, Move);

		//3d效果时  父类样式需要 overflow:hidden 解决iphonebug
		this.config = {
			current: 0,
			time: .5,
			runX: true,
			runY: false,
			auto: false,
			moveTime: 5000,
			showHeight: true // 是否显示不同的高度切换
			, showMax: false //当为true时，effect高度不够时，则显示最大高度
			, marginRight: 10,
			animate3d: true,
			tabCallback: function tabCallback() {}
		};
		//Object.assign(this.config,option)
		for (var i in option) {
			this.config[i] = option[i];
		}
		if (this.config.option.length < 2) return;
		this.config.option.css({ 'float': 'left' });
		this.config.effect.css({ 'float': 'left' });
		if (this.config.animate3d) {
			this.config.effect.css({ overflow: 'hidden', '-webkit-perspective': '600px', perspective: '600px' });
		}

		this.init();
	}

	_createClass(Move, [{
		key: 'init',
		value: function init() {
			this.config.option.css({ marginRight: this.config.marginRight + 'px' });
			this.clone();
			this.updateElement();
			this.resize();
			this.tab_click();
			this.addEvent();
			if (this.config.auto == true) {
				this.autoSlide();
			}
		}
	}, {
		key: 'resize',
		value: function resize() {
			var self = this,
			    timer = 0;
			$(window).bind('orientationchange resize', function () {
				clearTimeout(timer);
				timer = setTimeout(function () {
					self.updateElement();
				}, 510);
			});
		}
	}, {
		key: 'clone',
		value: function clone() {
			var self = this,
			    effect = this.config.effect,
			    parent = effect.parent(),
			    option = this.config.option,
			    width = parent.width(),
			    height = parent.height(),
			    first,
			    last;

			effect.width(width * (option.length + 2) + this.config.marginRight * (option.length + 2));
			option.width(width);

			first = option.first().clone();
			last = option.last().clone();
			first.addClass('clone');
			last.addClass('clone');
			last.insertBefore(option.first());
			first.insertAfter(option.last());
			this.config.option = $(option.selector);
			this.config.option.css({ minHeight: '20px', 'transition-duration': '0s', '-webkit-transition-duration': '0s' });
			if (this.config.showMax) {
				if (effect.height() < height) {
					effect.height(height);
				}
			}
			if (this.config.showHeight) {
				this.config.option.css({ transform: 'translate3d(0px, 0px, 0px) rotateY(0deg)', '-webkit-transform': 'translate3d(0px, 0px, 0px) rotateY(0deg)' }).each(function () {
					$(this).data('height', $(this).height());
				});
			}
		}
	}, {
		key: 'update',
		value: function update() {
			var _this = this;

			var effect = this.config.effect,
			    option = this.config.option,
			    index = this.config.current;

			this.updateElement();

			option.first().remove();
			option.last().remove();
			this.config.option = $(option.selector);
			this.clone();
			if (this.config.showHeight) {
				effect.height(option.eq(index + 1).data('height'));
			}
			setTimeout(function () {
				_this.optionTransform(index + 1);
			}, 50);
		}
	}, {
		key: 'updateElement',
		value: function updateElement() {
			var _this2 = this;

			this.width = this.config.effect.parent().width();
			this.gap = this.config.marginRight;
			this.setElement();
			var width = -this.width - this.gap;
			this.config.effect.css({ transform: 'translate3d(' + width + 'px,0,0)', transitionDuration: '0s' });
			this.config.effect.css({ '-webkit-transform': 'translate3d(' + width + 'px,0,0)', '-webkit-transitionDuration': '0s' });
			setTimeout(function () {
				_this2.runing();
			}, 60);
		}
	}, {
		key: 'slide',
		value: function slide() {
			this.config.current++;
			this.config.effect.css({ transitionDuration: this.config.time + 's' });
			this.config.effect.css({ '-webkit-transitionDuration': this.config.time + 's' });
			this.runing();
		}
	}, {
		key: 'autoSlide',
		value: function autoSlide() {
			var self = this;
			this.monitor = setInterval(function () {
				self.slide();
			}, this.config.moveTime);
		}
	}, {
		key: 'setElement',
		value: function setElement() {
			var width = this.width,
			    len = this.config.option.length;
			this.config.effect.width((width + this.gap) * len + 240 * len);
			this.config.option.width(width);
		}
	}, {
		key: 'getEvent',
		value: function getEvent(e, def, p) {
			e = e || window.event;
			if (!def) {
				e.stopPropagation();
			}
			if (!p) {
				e.preventDefault();
			}
			e = e.touches ? e.touches[0] : e;
			return e;
		}
	}, {
		key: 'myAddListener',
		value: function myAddListener(ele, type, fn) {
			var IS_IPAD = navigator.userAgent.match(/iPad/i) != null,
			    IS_IPHONE = !IS_IPAD && (navigator.userAgent.match(/iPhone/i) != null || navigator.userAgent.match(/iPod/i) != null),
			    IS_IOS = IS_IPAD || IS_IPHONE,
			    IS_ANDROID = !IS_IOS && navigator.userAgent.match(/android/i) != null,
			    IS_MOBILE = IS_IOS || IS_ANDROID;

			if (IS_MOBILE) {
				var mapping = {
					mousedown: 'touchstart',
					mouseup: 'touchend',
					mousemove: 'touchmove'
				};
				type = mapping[type] || type;
			}
			ele.each(function () {
				this.removeEventListener(type, fn, false);
				this.addEventListener(type, fn, false);
			});
		}
	}, {
		key: 'addEvent',
		value: function addEvent() {

			var list = this.config.effect,
			    self = this;
			this.myAddListener(list, 'mousedown', function (e) {
				self.downEvent(e);
			});
			this.myAddListener(list, 'mousemove', function (e) {
				self.moveEvent(e);
			});
			this.myAddListener(list, 'mouseup', function (e) {
				self.upEvent(e);
			});
		}
	}, {
		key: 'tab_click',
		value: function tab_click() {
			var nav = this.config.nav,
			    self = this;
			nav.each(function (i) {
				$(this).click(function () {
					self.config.current = i;
					self.runing();
					//self.config.tabCallback(i);
				});
			});
		}
	}, {
		key: 'navStatus',
		value: function navStatus() {
			var nav = this.config.nav;
			nav.removeClass('current').eq(this.config.current).addClass('current');
		}
	}, {
		key: 'optionTransform',
		value: function optionTransform(num) {
			if (this.config.animate3d == false) return;
			this.config.option.each(function (i, ele) {
				var n = i - num,
				    left = -n * 110,
				    left1 = -n * 120;

				$(ele).css({ transform: 'translate3d(0px,0px, ' + left + 'px) rotateY(' + left1 + 'deg)' });
				$(ele).css({ '-webkit-transform': 'translate3d(0px,0px, ' + left + 'px) rotateY(' + left1 + 'deg)' });
			});
		}
	}, {
		key: 'optionMove',
		value: function optionMove(x) {
			var _this3 = this;

			if (this.config.animate3d == false) return;
			var self = this;
			this.config.option.each(function (i, ele) {
				var n = i - (_this3.config.current + 1),
				    moveX = x / self.width,
				    left = -n * 110 - 110 * moveX,
				    left1 = -n * 120 - 120 * moveX;
				$(ele).css({ transform: 'translate3d(0px,0px, ' + left + 'px) rotateY(' + left1 + 'deg)' });
				$(ele).css({ '-webkit-transform': 'translate3d(0px,0px, ' + left + 'px) rotateY(' + left1 + 'deg)' });
			});
		}
	}, {
		key: 'animate3d',
		value: function animate3d(index, b) {
			if (this.config.animate3d == false) return;
			var self = this,
			    len = this.config.option.length - 1,
			    option = this.config.option,
			    time = this.config.time;

			if (!b) {
				option.css({ transitionDuration: time + 's', '-webkit-transitionDuration': time + 's' });
				self.optionTransform(index + 1);
			} else {
				setTimeout(function () {
					option.css({ transitionDuration: '0s', '-webkit-transitionDuration': '0s' });
				}, 20); //animate3d 会执行两次，第二次到这里时要延迟一下，防止3D效果消失。
				if (index <= 0) {
					setTimeout(function () {
						self.optionTransform(1);
					}, time * 1000);
				} else if (index >= len - 2) {
					setTimeout(function () {
						self.optionTransform(len - 1);
					}, time * 1000);
				}
			}
		}
	}, {
		key: 'runing',
		value: function runing() {
			//执行X OR Y 
			var effect = this.config.effect,
			    option = this.config.option,
			    len = option.length - 1,
			    time = this.config.time,
			    width = this.width + this.gap,
			    index = this.config.current;

			if (this.config.showHeight) {
				effect.height(option.eq(index + 1).data('height'));
			}
			if (this.config.runX) {
				effect.css({ transform: 'translate3d(' + -(index + 1) * width + 'px,0,0)' });
				effect.css({ '-webkit-transform': 'translate3d(' + -(index + 1) * width + 'px,0,0)' });
			}

			this.animate3d(index);
			index = index < 0 ? len - 2 : index > len - 2 ? 0 : index;
			this.config.tabCallback(index);
			this.config.current = index;
			this.animate3d(index, true);

			this.navStatus();
			if (index <= 0) {
				setTimeout(function () {
					effect.css({ transform: 'translate3d(' + -width + 'px,0,0)', transitionDuration: '0s' });
					effect.css({ '-webkit-transform': 'translate3d(' + -width + 'px,0,0)', transitionDuration: '0s' });
					setTimeout(function () {
						effect.css({ transitionDuration: time + 's' });
						effect.css({ '-webkit-transitionDuration': time + 's' });
					}, 50);
				}, time * 1000);
			} else if (index >= len - 2) {
				setTimeout(function () {
					effect.css({ transform: 'translate3d(' + -width * (len - 1) + 'px,0,0)', transitionDuration: '0s' });
					effect.css({ '-webkit-transform': 'translate3d(' + -width * (len - 1) + 'px,0,0)', transitionDuration: '0s' });
					setTimeout(function () {
						effect.css({ transitionDuration: time + 's' });
						effect.css({ '-webkit-transitionDuration': time + 's' });
					}, 50);
				}, time * 1000);
			}
		}
	}, {
		key: 'downEvent',
		value: function downEvent(e) {
			e = this.getEvent(e, 0, 1);
			this.left = -this.width * (this.config.current + 1);
			this.firstX = e.clientX + this.gap * (this.config.current + 1);
			this.firstY = e.clientY;
			this.moveX = 0;
			this.moveY = 0;
			this.mousedown = true;
			this.direction = 'none';
			clearInterval(this.monitor);
		}
	}, {
		key: 'moveEvent',
		value: function moveEvent(e) {
			if (!this.mousedown) return;
			var ee = this.getEvent(e, 0, 1),
			    list = this.config.effect,
			    xPoint = ee.clientX,
			    yPoint = ee.clientY,
			    x,
			    y;
			x = Math.abs(xPoint + this.gap * (this.config.current + 1) - this.firstX);
			y = Math.abs(yPoint - this.firstY);

			this.moveX = xPoint - this.firstX;
			this.moveY = yPoint - this.firstY;

			//document.title = (x+':'+y)
			if (this.direction == 'x' || x > y && x > 5) {
				this.direction = 'x';
				this.getEvent(e);
				var move_left = this.moveX + this.left;
				this.config.effect.css({ transform: 'translate3d(' + move_left + 'px,0,0)', transitionDuration: '0s' });
				this.config.effect.css({ '-webkit-transform': 'translate3d(' + move_left + 'px,0,0)', transitionDuration: '0s' });
				this.optionMove(this.moveX);
				this.getEvent(e);
			} else {
				this.direction = 'y';
			}
		}
	}, {
		key: 'upEvent',
		value: function upEvent(e) {
			var width = (this.width + this.gap) / 4,
			    self = this,
			    gap = this.gap * (this.config.current + 1);
			if (this.direction == 'x' && this.mousedown) {
				this.mousedown = false;
				if (-this.moveX - gap > width) {
					this.config.current++;
				} else if (this.moveX + gap > width) {
					this.config.current--;
				}

				this.config.effect.css({ transitionDuration: this.config.time + 's' });
				this.config.effect.css({ '-webkit-transitionDuration': this.config.time + 's' });
				this.config.effect.parent().scrollTop(0);
				this.runing();

				if (!this.config.auto) return;
				setTimeout(function () {
					self.monitor = setInterval(function () {
						self.slide();
					}, self.config.moveTime);
				}, self.config.time * 1000 + 50);
			}
		}
	}]);

	return Move;
}();

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(19)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(13),
  /* template */
  __webpack_require__(23),
  /* scopeId */
  "data-v-116e3b11",
  /* cssModules */
  null
)
Component.options.__file = "E:\\work\\pc\\activity\\app\\haoli\\src\\module\\rank-list.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] rank-list.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-116e3b11", Component.options)
  } else {
    hotAPI.reload("data-v-116e3b11", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 10 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(T) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _requirePop = __webpack_require__(4);

var _requirePop2 = _interopRequireDefault(_requirePop);

var _URL = __webpack_require__(3);

var _public = __webpack_require__(1);

var _public2 = _interopRequireDefault(_public);

var _rank = __webpack_require__(21);

var _rank2 = _interopRequireDefault(_rank);

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

exports.default = {
    components: {
        Rank: _rank2.default
    },
    data: function data() {
        return {
            P: _public2.default
        };
    },
    mounted: function mounted() {
        T.init();
        T.ajax({
            url: _URL.status
        }).then(function (data) {
            _public2.default.status = data.map.status;
            _public2.default.startTime = new Date(data.map.startTime).Format('yyyy-MM-dd');
            _public2.default.endTime = new Date(data.map.endTime).Format('yyyy-MM-dd');
            if (_public2.default.status == 0 || _public2.default.status == 1) {
                if (T.uid) {
                    T.ajax({
                        url: _URL.participate,
                        callback: true,
                        data: { uid: T.uid }
                    }).then(function (data) {
                        _public2.default.vip = data.flag;
                        if (data.flag) return;
                        (0, _requirePop2.default)('vip', {
                            props: {
                                content: '<div style="padding:20px 0; text-align:center;">' + (data.errorMsg || '渠道用户不参加活动！') + '</div>',
                                okTxt: '回首页',
                                closeCallback: function closeCallback() {
                                    T.callApp.home();
                                }
                            }
                        }, 'publicTips');
                    });
                }
            } else {
                (0, _requirePop2.default)('statuserror', {
                    props: {
                        content: '<div style="padding:20px 0; text-align:center;">' + (data.errorMsg || (_public2.default.status == -1 ? '活动未开始！' : '活动已结束！')) + '</div>',
                        okTxt: '回首页',
                        closeCallback: function closeCallback() {
                            T.callApp.home();
                        }
                    }
                }, 'publicTips');
            }
        });
    },

    methods: {
        Investment: function Investment() {
            if (this.P.status == 1) return;

            T.callApp.investment();
        },
        acivity: function acivity() {
            (0, _requirePop2.default)('explain');
        },
        winning: function winning() {
            //T.click(()=>{
            (0, _requirePop2.default)('winning');
            //})
        }
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

exports.default = {
    props: {
        list: Array
    },
    watch: {
        list: function list(newArr, old) {
            if (newArr && newArr.length) {
                newArr.map(function (obj) {
                    if (obj.fortune > 10000) {
                        obj.fortune = String((obj.fortune / 10000).toFixed(3)).match(/\w+\.\w{2}/)[0] + '万';
                    }
                });
            }
        }
    }
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(T) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _rankList = __webpack_require__(9);

var _rankList2 = _interopRequireDefault(_rankList);

var _public = __webpack_require__(1);

var _public2 = _interopRequireDefault(_public);

var _URL = __webpack_require__(3);

var _moveEvent = __webpack_require__(8);

var _moveEvent2 = _interopRequireDefault(_moveEvent);

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

var messages = _public2.default.messages;

exports.default = {
    components: {
        list: _rankList2.default
    },
    data: function data() {
        return {
            P: _public2.default,
            isRefresh: true,
            time: 0,
            user: {
                index: '***',
                gotCardCount: '***',
                prize: '***'
            },
            users: [],
            list: [],
            list1: [],
            istrue: false,
            login: T.uid,
            message: messages[0]
        };
    },
    mounted: function mounted() {
        T.init();
        this.login = T.uid;
        this.updateMove();
    },

    watch: {
        'P.status': function PStatus(newArr, old) {
            if (newArr == 0) {
                /*this.$watch('P.vip',arr1=>{
                    if(arr1){*/
                this.istrue = true;
                this.getRank(0);
                this.getRank(1);
                /*}
                })*/
            }
        }
    },
    methods: {
        gologin: function gologin() {
            T.login();
        },
        Investment: function Investment() {
            T.callApp.investment();
        },
        updateMove: function updateMove() {
            var self = this;
            if (!this.Move) {
                this.Move = new _moveEvent2.default({
                    nav: $('.indexRank nav .tab'),
                    effect: $('.indexRank .effect'),
                    option: $('.indexRank .option'),
                    animate3d: false,
                    tabCallback: function tabCallback(i) {
                        self.user = self.users[i];
                        if (!self.user || $.type(self.user.index) == 'string') {
                            self.user = {
                                fortune: '***',
                                index: '***',
                                prize: '***'
                            };
                        }
                        self.message = messages[i];
                    }
                });
            } else {
                this.Move.update();
            }
        },
        getRank: function getRank(type) {
            //0为当天  1 为每周
            if (!this.istrue) return;
            var self = this,
                myDate = new Date(),
                year = myDate.getFullYear(),
                month = myDate.getMonth() + 1,
                date = myDate.getDate(),
                hours = myDate.getHours(),
                minutes = myDate.getMinutes(),
                seconds = myDate.getSeconds();

            month = month > 9 ? month : '0' + month;
            date = date > 9 ? date : '0' + date;
            hours = hours > 9 ? hours : '0' + hours;
            minutes = minutes > 9 ? minutes : '0' + minutes;
            seconds = seconds > 9 ? seconds : '0' + seconds;

            self.time = year + '-' + month + '-' + date + ' ' + hours + ':' + minutes + ':' + seconds;

            T.ajax({
                url: _URL.walkRank,
                data: { uid: T.uid, dayOrWeek: type },
                callback: true //接口问题
            }).then(function (data) {
                if (type == 0) {
                    self.$set(self, 'list', data.map.prizeRanks);
                    self.users[0] = data.map.funtuneOfUser;
                } else {
                    self.$set(self, 'list1', data.map.prizeRanks);
                    self.users[1] = data.map.funtuneOfUser;
                    self.user = data.map.funtuneOfUser;
                    if (!self.user) {
                        self.user = {
                            fortune: '***',
                            index: '***',
                            prize: '***'
                        };
                    }
                }
                self.$nextTick(function () {
                    self.updateMove();
                });
            });
        },
        refresh: function refresh($event) {
            var _this = this;

            if (this.P.status == 1) return;
            var tag = $($event.currentTarget);
            tag.addClass('gray');
            if (this.isRefresh) {
                this.getRank(0);
                this.getRank(1);
                this.isRefresh = false;
            }
            setTimeout(function () {
                tag.removeClass('gray');
                _this.isRefresh = true;
            }, 3000);
        }
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Zepto.cookie plugin
// 
// Copyright (c) 2010, 2012 
// @author Klaus Hartl (stilbuero.de)
// @author Daniel Lacy (daniellacy.com)
// 
// Dual licensed under the MIT and GPL licenses:
// http://www.opensource.org/licenses/mit-license.php
// http://www.gnu.org/licenses/gpl.html
;(function ($) {
    $.extend($.fn, {
        cookie: function cookie(key, value, options) {
            var days, time, result, decode;

            // A key and value were given. Set cookie.
            if (arguments.length > 1 && String(value) !== "[object Object]") {
                // Enforce object
                options = $.extend({}, options);

                if (value === null || value === undefined) options.expires = -1;

                if (typeof options.expires === 'number') {
                    days = options.expires * 24 * 60 * 60 * 1000;
                    time = options.expires = new Date();

                    time.setTime(time.getTime() + days);
                }

                value = String(value);

                return document.cookie = [encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value), options.expires ? '; expires=' + options.expires.toUTCString() : '', options.path ? '; path=' + options.path : '', options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join('');
            }

            // Key and possibly options given, get cookie
            options = value || {};

            decode = options.raw ? function (s) {
                return s;
            } : decodeURIComponent;

            return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
        }

    });
})(Zepto);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, Promise, global) {var require;/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   3.3.1
 */

(function (global, factory) {
     true ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.ES6Promise = factory());
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  return typeof x === 'function' || typeof x === 'object' && x !== null;
}

function isFunction(x) {
  return typeof x === 'function';
}

var _isArray = undefined;
if (!Array.isArray) {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
} else {
  _isArray = Array.isArray;
}

var isArray = _isArray;

var len = 0;
var vertxNext = undefined;
var customSchedulerFn = undefined;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && ({}).toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  return function () {
    vertxNext(flush);
  };
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var r = require;
    var vertx = __webpack_require__(25);
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = undefined;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && "function" === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var _arguments = arguments;

  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;

  if (_state) {
    (function () {
      var callback = _arguments[_state - 1];
      asap(function () {
        return invokeCallback(_state, child, callback, parent._result);
      });
    })();
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  _resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(16);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

var GET_THEN_ERROR = new ErrorObject();

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function getThen(promise) {
  try {
    return promise.then;
  } catch (error) {
    GET_THEN_ERROR.error = error;
    return GET_THEN_ERROR;
  }
}

function tryThen(then, value, fulfillmentHandler, rejectionHandler) {
  try {
    then.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        _resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      _reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      _reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    _reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return _resolve(promise, value);
    }, function (reason) {
      return _reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$) {
  if (maybeThenable.constructor === promise.constructor && then$$ === then && maybeThenable.constructor.resolve === resolve) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$ === GET_THEN_ERROR) {
      _reject(promise, GET_THEN_ERROR.error);
    } else if (then$$ === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$)) {
      handleForeignThenable(promise, maybeThenable, then$$);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function _resolve(promise, value) {
  if (promise === value) {
    _reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    handleMaybeThenable(promise, value, getThen(value));
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function _reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;

  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = undefined,
      callback = undefined,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function ErrorObject() {
  this.error = null;
}

var TRY_CATCH_ERROR = new ErrorObject();

function tryCatch(callback, detail) {
  try {
    return callback(detail);
  } catch (e) {
    TRY_CATCH_ERROR.error = e;
    return TRY_CATCH_ERROR;
  }
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = undefined,
      error = undefined,
      succeeded = undefined,
      failed = undefined;

  if (hasCallback) {
    value = tryCatch(callback, detail);

    if (value === TRY_CATCH_ERROR) {
      failed = true;
      error = value.error;
      value = null;
    } else {
      succeeded = true;
    }

    if (promise === value) {
      _reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
    succeeded = true;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
      _resolve(promise, value);
    } else if (failed) {
      _reject(promise, error);
    } else if (settled === FULFILLED) {
      fulfill(promise, value);
    } else if (settled === REJECTED) {
      _reject(promise, value);
    }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      _resolve(promise, value);
    }, function rejectPromise(reason) {
      _reject(promise, reason);
    });
  } catch (e) {
    _reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function Enumerator(Constructor, input) {
  this._instanceConstructor = Constructor;
  this.promise = new Constructor(noop);

  if (!this.promise[PROMISE_ID]) {
    makePromise(this.promise);
  }

  if (isArray(input)) {
    this._input = input;
    this.length = input.length;
    this._remaining = input.length;

    this._result = new Array(this.length);

    if (this.length === 0) {
      fulfill(this.promise, this._result);
    } else {
      this.length = this.length || 0;
      this._enumerate();
      if (this._remaining === 0) {
        fulfill(this.promise, this._result);
      }
    }
  } else {
    _reject(this.promise, validationError());
  }
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
};

Enumerator.prototype._enumerate = function () {
  var length = this.length;
  var _input = this._input;

  for (var i = 0; this._state === PENDING && i < length; i++) {
    this._eachEntry(_input[i], i);
  }
};

Enumerator.prototype._eachEntry = function (entry, i) {
  var c = this._instanceConstructor;
  var resolve$$ = c.resolve;

  if (resolve$$ === resolve) {
    var _then = getThen(entry);

    if (_then === then && entry._state !== PENDING) {
      this._settledAt(entry._state, i, entry._result);
    } else if (typeof _then !== 'function') {
      this._remaining--;
      this._result[i] = entry;
    } else if (c === Promise) {
      var promise = new c(noop);
      handleMaybeThenable(promise, entry, _then);
      this._willSettleAt(promise, i);
    } else {
      this._willSettleAt(new c(function (resolve$$) {
        return resolve$$(entry);
      }), i);
    }
  } else {
    this._willSettleAt(resolve$$(entry), i);
  }
};

Enumerator.prototype._settledAt = function (state, i, value) {
  var promise = this.promise;

  if (promise._state === PENDING) {
    this._remaining--;

    if (state === REJECTED) {
      _reject(promise, value);
    } else {
      this._result[i] = value;
    }
  }

  if (this._remaining === 0) {
    fulfill(promise, this._result);
  }
};

Enumerator.prototype._willSettleAt = function (promise, i) {
  var enumerator = this;

  subscribe(promise, undefined, function (value) {
    return enumerator._settledAt(FULFILLED, i, value);
  }, function (reason) {
    return enumerator._settledAt(REJECTED, i, reason);
  });
};

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all(entries) {
  return new Enumerator(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  _reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {function} resolver
  Useful for tooling.
  @constructor
*/
function Promise(resolver) {
  this[PROMISE_ID] = nextId();
  this._result = this._state = undefined;
  this._subscribers = [];

  if (noop !== resolver) {
    typeof resolver !== 'function' && needsResolver();
    this instanceof Promise ? initializePromise(this, resolver) : needsNew();
  }
}

Promise.all = all;
Promise.race = race;
Promise.resolve = resolve;
Promise.reject = reject;
Promise._setScheduler = setScheduler;
Promise._setAsap = setAsap;
Promise._asap = asap;

Promise.prototype = {
  constructor: Promise,

  /**
    The primary way of interacting with a promise is through its `then` method,
    which registers callbacks to receive either a promise's eventual value or the
    reason why the promise cannot be fulfilled.
  
    ```js
    findUser().then(function(user){
      // user is available
    }, function(reason){
      // user is unavailable, and you are given the reason why
    });
    ```
  
    Chaining
    --------
  
    The return value of `then` is itself a promise.  This second, 'downstream'
    promise is resolved with the return value of the first promise's fulfillment
    or rejection handler, or rejected if the handler throws an exception.
  
    ```js
    findUser().then(function (user) {
      return user.name;
    }, function (reason) {
      return 'default name';
    }).then(function (userName) {
      // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
      // will be `'default name'`
    });
  
    findUser().then(function (user) {
      throw new Error('Found user, but still unhappy');
    }, function (reason) {
      throw new Error('`findUser` rejected and we're unhappy');
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
      // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
    });
    ```
    If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
  
    ```js
    findUser().then(function (user) {
      throw new PedagogicalException('Upstream error');
    }).then(function (value) {
      // never reached
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // The `PedgagocialException` is propagated all the way down to here
    });
    ```
  
    Assimilation
    ------------
  
    Sometimes the value you want to propagate to a downstream promise can only be
    retrieved asynchronously. This can be achieved by returning a promise in the
    fulfillment or rejection handler. The downstream promise will then be pending
    until the returned promise is settled. This is called *assimilation*.
  
    ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // The user's comments are now available
    });
    ```
  
    If the assimliated promise rejects, then the downstream promise will also reject.
  
    ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // If `findCommentsByAuthor` fulfills, we'll have the value here
    }, function (reason) {
      // If `findCommentsByAuthor` rejects, we'll have the reason here
    });
    ```
  
    Simple Example
    --------------
  
    Synchronous Example
  
    ```javascript
    let result;
  
    try {
      result = findResult();
      // success
    } catch(reason) {
      // failure
    }
    ```
  
    Errback Example
  
    ```js
    findResult(function(result, err){
      if (err) {
        // failure
      } else {
        // success
      }
    });
    ```
  
    Promise Example;
  
    ```javascript
    findResult().then(function(result){
      // success
    }, function(reason){
      // failure
    });
    ```
  
    Advanced Example
    --------------
  
    Synchronous Example
  
    ```javascript
    let author, books;
  
    try {
      author = findAuthor();
      books  = findBooksByAuthor(author);
      // success
    } catch(reason) {
      // failure
    }
    ```
  
    Errback Example
  
    ```js
  
    function foundBooks(books) {
  
    }
  
    function failure(reason) {
  
    }
  
    findAuthor(function(author, err){
      if (err) {
        failure(err);
        // failure
      } else {
        try {
          findBoooksByAuthor(author, function(books, err) {
            if (err) {
              failure(err);
            } else {
              try {
                foundBooks(books);
              } catch(reason) {
                failure(reason);
              }
            }
          });
        } catch(error) {
          failure(err);
        }
        // success
      }
    });
    ```
  
    Promise Example;
  
    ```javascript
    findAuthor().
      then(findBooksByAuthor).
      then(function(books){
        // found books
    }).catch(function(reason){
      // something went wrong
    });
    ```
  
    @method then
    @param {Function} onFulfilled
    @param {Function} onRejected
    Useful for tooling.
    @return {Promise}
  */
  then: then,

  /**
    `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
    as the catch block of a try/catch statement.
  
    ```js
    function findAuthor(){
      throw new Error('couldn't find that author');
    }
  
    // synchronous
    try {
      findAuthor();
    } catch(reason) {
      // something went wrong
    }
  
    // async with promises
    findAuthor().catch(function(reason){
      // something went wrong
    });
    ```
  
    @method catch
    @param {Function} onRejection
    Useful for tooling.
    @return {Promise}
  */
  'catch': function _catch(onRejection) {
    return this.then(null, onRejection);
  }
};

function polyfill() {
    var local = undefined;

    if (typeof global !== 'undefined') {
        local = global;
    } else if (typeof self !== 'undefined') {
        local = self;
    } else {
        try {
            local = Function('return this')();
        } catch (e) {
            throw new Error('polyfill failed because global object is unavailable in this environment');
        }
    }

    var P = local.Promise;

    if (P) {
        var promiseToString = null;
        try {
            promiseToString = Object.prototype.toString.call(P.resolve());
        } catch (e) {
            // silently ignored
        }

        if (promiseToString === '[object Promise]' && !P.cast) {
            return;
        }
    }

    local.Promise = Promise;
}

polyfill();
// Strange compat..
Promise.polyfill = polyfill;
Promise.Promise = Promise;

return Promise;

})));
//# sourceMappingURL=es6-promise.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11), __webpack_require__(5), __webpack_require__(10)))

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 20 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(18)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(14),
  /* template */
  __webpack_require__(22),
  /* scopeId */
  "data-v-01cdca2a",
  /* cssModules */
  null
)
Component.options.__file = "E:\\work\\pc\\activity\\app\\haoli\\src\\module\\rank.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] rank.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-01cdca2a", Component.options)
  } else {
    hotAPI.reload("data-v-01cdca2a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main-rank indexRank"
  }, [_c('div', {
    staticClass: "bg img-size",
    attrs: {
      "data-height": "40"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "title img-size",
    attrs: {
      "data-marginTop": "50",
      "data-width": "402",
      "data-marginBottom": "40",
      "data-height": "56"
    }
  }), _vm._v(" "), (_vm.P.status != 1) ? _c('nav', {
    staticClass: "img-size",
    attrs: {
      "data-fontSize": "30",
      "data-height": "52",
      "data-lineHeight": "52"
    }
  }, [_c('div', {
    staticClass: "tab active"
  }, [_vm._v("每日榜单")]), _vm._v(" "), _c('div', {
    staticClass: "tab"
  }, [_vm._v("总榜单")])]) : _vm._e(), _vm._v(" "), (_vm.P.status != 1) ? _c('div', {
    staticClass: "nav-text img-size",
    attrs: {
      "data-fontSize": "30"
    }
  }, [_vm._v(_vm._s(_vm.message))]) : _vm._e(), _vm._v(" "), (_vm.P.status != 1) ? _c('div', {
    staticClass: "content img-size",
    attrs: {
      "data-fontSize": "30",
      "data-marginTop": "30"
    }
  }, [_c('div', {
    staticClass: "userInfo img-size",
    attrs: {
      "data-fontSize": "30",
      "data-lineHeight": "56"
    }
  }, [_c('ul', [_c('li', {
    staticClass: "img-size",
    attrs: {
      "data-fontSize": "24"
    }
  }, [_vm._v("您的当前财富值：" + _vm._s(_vm.user.fortune))]), _vm._v(" "), _c('li', {
    staticClass: "img-size",
    attrs: {
      "data-fontSize": "24"
    }
  }, [_vm._v("排名：" + _vm._s(_vm.user.index == -1 ? '--' : _vm.user.index > 100 ? '>100' : _vm.user.index) + "名")])]), _vm._v(" "), _c('ul', [_c('li', {
    staticClass: "img-size",
    attrs: {
      "data-fontSize": "24"
    }
  }, [_vm._v("预计获得：" + _vm._s(_vm.user.prize) + " 奖品")]), _vm._v(" "), (!_vm.login) ? _c('li', {
    staticClass: "img-size",
    attrs: {
      "data-fontSize": "24"
    }
  }, [_c('div', {
    staticClass: "btn",
    on: {
      "click": _vm.gologin
    }
  }, [_vm._v("登陆查看")])]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "effect-content"
  }, [_c('div', {
    staticClass: "effect"
  }, [_c('div', {
    staticClass: "option"
  }, [_c('list', {
    attrs: {
      "list": _vm.list
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "option"
  }, [_c('list', {
    attrs: {
      "list": _vm.list1
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "footer"
  }, [_c('time', {
    staticClass: "img-size",
    attrs: {
      "data-fontSize": "26"
    }
  }, [_vm._v("更新时间： " + _vm._s(_vm.time))]), _vm._v(" "), _c('div', {
    staticClass: "info img-size",
    attrs: {
      "data-fontSize": "30"
    }
  }, [_vm._v("财富值=投资金额*投资期限/360")])])]) : _vm._e(), _vm._v(" "), (_vm.P.status == 1) ? _c('div', {
    staticClass: "content img-size",
    attrs: {
      "data-fontSize": "30",
      "data-marginTop": "30"
    }
  }, [_c('p', [_vm._v("本次活动已结束！")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('p', [_vm._v("排名获得的京东卡及实体奖品将统一于活动结束后15个工作日内发放，加息券将于活动结束后7个工作日内发放到您的多融账户，可登录多融财富APP或官网查看")])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "btn img-size",
    class: {
      gray: _vm.P.status == 1
    },
    attrs: {
      "data-width": "302",
      "data-height": "61",
      "data-lineHeight": "61",
      "data-fontSize": "36"
    },
    on: {
      "click": function($event) {
        _vm.refresh($event)
      }
    }
  }, [_vm._v(_vm._s(_vm.P.status == 1 ? '活动已结束' : '刷新'))])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-01cdca2a", module.exports)
  }
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "rank-list"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "cnt img-size",
    attrs: {
      "data-fontSize": "24",
      "data-lineHeight": "40"
    }
  }, [(_vm.list && _vm.list.length) ? _c('div', _vm._l((_vm.list), function(obj) {
    return _c('ul', [_c('li', {
      staticClass: "c1"
    }, [_vm._v(_vm._s(obj.index))]), _vm._v(" "), _c('li', {
      staticClass: "c2"
    }, [_vm._v(_vm._s(obj.mobilePhone))]), _vm._v(" "), _c('li', {
      staticClass: "c3"
    }, [_vm._v(_vm._s(obj.fortune))]), _vm._v(" "), _c('li', {
      staticClass: "c4"
    }, [_vm._v(_vm._s(obj.prize))])])
  })) : _c('div', {
    staticClass: "no-data"
  }, [_vm._v("\r\n            暂无数据\r\n        ")])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tit img-size",
    attrs: {
      "data-fontSize": "26"
    }
  }, [_c('ul', [_c('li', {
    staticClass: "c1"
  }, [_vm._v("排名")]), _vm._v(" "), _c('li', {
    staticClass: "c2"
  }, [_vm._v("手机号码")]), _vm._v(" "), _c('li', {
    staticClass: "c3"
  }, [_vm._v("财富值")]), _vm._v(" "), _c('li', {
    staticClass: "c4"
  }, [_vm._v("奖品")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-116e3b11", module.exports)
  }
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "module-scroll"
  }, [_c('div', {
    staticClass: "main"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "banner img-size",
    attrs: {
      "data-height": "605"
    }
  }), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "submit"
  }, [_c('div', {
    staticClass: "btn img-size",
    class: {
      gray: _vm.P.status == 1
    },
    attrs: {
      "data-width": "500",
      "data-height": "72",
      "data-lineHeight": "72"
    },
    on: {
      "click": _vm.Investment
    }
  }, [_vm._v(_vm._s(_vm.P.status == 1 ? '活动已结束' : '立即投资'))])]), _vm._v(" "), _c('div', {
    staticClass: "about"
  }, [_c('div', {
    staticClass: "btn jiang img-size",
    attrs: {
      "data-fontSize": "24"
    },
    on: {
      "click": _vm.winning
    }
  }, [_vm._v("中奖名单")]), _vm._v(" "), _c('div', {
    staticClass: "btn acivity img-size",
    attrs: {
      "data-fontSize": "24"
    },
    on: {
      "click": _vm.acivity
    }
  }, [_vm._v("活动规则")])]), _vm._v(" "), _c('Rank')], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "money"
  }, [_c('div', {
    staticClass: "m_1"
  }), _vm._v(" "), _c('div', {
    staticClass: "m_2"
  }), _vm._v(" "), _c('div', {
    staticClass: "m_3"
  }), _vm._v(" "), _c('div', {
    staticClass: "m_4"
  }), _vm._v(" "), _c('div', {
    staticClass: "m_5"
  }), _vm._v(" "), _c('div', {
    staticClass: "m_6"
  }), _vm._v(" "), _c('div', {
    staticClass: "m_7"
  }), _vm._v(" "), _c('div', {
    staticClass: "m_8"
  }), _vm._v(" "), _c('div', {
    staticClass: "m_9"
  }), _vm._v(" "), _c('div', {
    staticClass: "m_10"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "text img-size",
    attrs: {
      "data-paddingTop": "40",
      "data-paddingBottom": "40",
      "data-lineHeight": "50"
    }
  }, [_c('h2', {
    staticClass: "img-size",
    attrs: {
      "data-fontSize": "36"
    }
  }, [_vm._v("投资≥30天以上产品即可参加排名")]), _vm._v(" "), _c('p', {
    staticClass: "img-size",
    attrs: {
      "data-fontSize": "30"
    }
  }, [_vm._v("实时排名，按照财富值排名")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-30a98dc4", module.exports)
  }
}

/***/ }),
/* 25 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(T) {

__webpack_require__(6);

var _public = __webpack_require__(1);

var _public2 = _interopRequireDefault(_public);

var _index = __webpack_require__(7);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.Public = _public2.default;
new Vue({
    el: '#app',
    mounted: function mounted() {
        var url = T.imgsrc + '/activity/app/tianTianQiangPaimin/images/';
        T.init({
            loadding: {
                timing: 'spinner-loader', //加载 spinner , spinner-loader , loadingbar , lightLoader , square ,circles,circles1,circles2,circles3,circles4,line' 
                fillColor: 'rgba(150,213,0,1)',
                imgs: [url + 'banner.jpg', url + 'btn1.png', url + 'btn2.png', url + 'close.png', url + 'img1.jpg', url + 'star.jpg', url + 'tit-bg.png', url + 'tit1.png', url + 'tit2.png', url + 'tit3.png', url + 'tit4.png'],
                callback: function callback() {}
            }
        });
    },

    components: {
        Content: _index2.default
    },
    methods: {},
    render: function render(h) {
        return h(
            'div',
            {
                attrs: { id: 'app' }
            },
            [h(
                _index2.default,
                null,
                []
            ), h(
                'div',
                {
                    attrs: { id: 'pop' }
                },
                []
            )]
        );
    }
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map?name=1086476b833cf105a4b6