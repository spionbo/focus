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
/******/ 		17: 0
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
/******/ 		script.src = __webpack_require__.p + "" + ({}[chunkId]||chunkId) + "_chunk.js?name=" + "67553faf61540dba269b" + "";
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

var _requirePop = __webpack_require__(1);

var _requirePop2 = _interopRequireDefault(_requirePop);

var _cookie = __webpack_require__(13);

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
    getInfo: function getInfo(self) {
        T.getAppInfo();
        self.$store.dispatch('getInfo', self.$store.state).then(function () {
            if (T.uid && self.$store.state.status == 0) {
                self.$store.commit('participate');
            }
        });
    },
    getAppInfo: function getAppInfo() {
        var uid = T.getQueryString('uid'),
            wap = T.getQueryString('wap');

        T.uid = uid;
        T.isLogin = T.uid && T.uid.length > 0 ? true : false;
        T.wap = wap == 'true';
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
        },
        integral: function integral() {
            window.location.href = 'jump://page=34?';
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
            $.each(['height', 'width', 'fontSize', 'left', 'right', 'bottom', 'top', 'margin', 'padding', 'paddingTop', 'lineHeight', 'paddingLeft', 'paddingRight', 'paddingBottom', 'marginTop', 'marginLeft', 'marginRight', 'marginBottom'], function (i, str) {
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
                                content: data.errorMsg || '操作失败，请联系客服！',
                                okTxt: '确定',
                                transition: 'rotate3d'
                            }
                        }, 'publicTips');
                    }
                },
                error: function error() {
                    (0, _requirePop2.default)('lingquguo', {
                        props: {
                            content: '操作失败，请联系客服！',
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
        } else if (timing == 'lightLoader') {
            loadDemo = "<canvas id='loadCavans' class='" + timing + "'></canvas>";
        }
        loadIcon.html(loadDemo);
        T.body.append(demo);
        demo.click(function (e) {
            e.stopPropagation();
        });
        if (timing == 'lightLoader') {
            //进度条
            __webpack_require__.e/* require.ensure */(7).then((function () {
                var lightLoader = __webpack_require__(27);
                try {
                    var c = document.getElementById('loadCavans');
                    c.width = T.width / 1.5;
                    c.height = 100;
                    T.canvasDemo = new lightLoader(c, c.width, c.height);
                    T.canvasDemo.init();
                    callbackfn = function callbackfn(fn) {
                        fn();
                    };
                } catch (e) {
                    console.log('多融财富欢迎您！');
                }
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
            text.css({ marginTop: '-30px' });
        } else if (timing == 'square' || timing == 'circles' || timing == 'circles1' || timing == 'circles2' || timing == 'circles3' || timing == 'circles4' || timing == 'line') {
            //距形 圆 圆1 圆3 圆4 线
            __webpack_require__.e/* require.ensure */(6).then((function () {
                var Sonic = __webpack_require__(28);
                var option = {},
                    width = 50,
                    height = 50,
                    half = width / 2;

                if (timing == 'square') {
                    margin = -20;
                    option = {
                        width: width,
                        height: height,

                        stepsPerFrame: 2,
                        trailLength: .3,
                        pointDistance: .1,
                        padding: 10,

                        fillColor: fillColor,
                        strokeColor: fillColor,

                        setup: function setup() {
                            this._.lineWidth = 20;
                        },
                        path: [['line', 0, 0, 30, 0], ['line', 30, 0, 30, 30], ['line', 30, 30, 0, 30], ['line', 0, 30, 0, 0]]
                    };
                } else if (timing == 'circles') {
                    option = {
                        width: width,
                        height: height,

                        stepsPerFrame: 1,
                        trailLength: 1,
                        pointDistance: .025,

                        strokeColor: fillColor,

                        fps: 20,

                        setup: function setup() {
                            this._.lineWidth = 2;
                        },
                        step: function step(point, index) {

                            var cx = this.padding + half,
                                cy = this.padding + half,
                                _ = this._,
                                angle = Math.PI / 180 * (point.progress * 360);

                            this._.globalAlpha = Math.max(.5, this.alpha);

                            _.beginPath();
                            _.moveTo(point.x, point.y);
                            _.lineTo(Math.cos(angle) * 25 + cx, Math.sin(angle) * 25 + cy);
                            _.closePath();
                            _.stroke();

                            _.beginPath();
                            _.moveTo(Math.cos(-angle) * 25 + cx, Math.sin(-angle) * 25 + cy);
                            _.lineTo(Math.cos(-angle) * 19 + cx, Math.sin(-angle) * 19 + cy);
                            _.closePath();
                            _.stroke();
                        },
                        path: [['arc', half, half, 12, 0, 360]]
                    };
                } else if (timing == 'circles1') {
                    option = {
                        width: width,
                        height: height,

                        stepsPerFrame: 1,
                        trailLength: 1,
                        pointDistance: .05,
                        fillColor: fillColor,
                        strokeColor: fillColor,

                        fps: 20,

                        setup: function setup() {
                            this._.lineWidth = 2;
                        },
                        step: function step(point, index) {

                            var cx = this.padding + half,
                                cy = this.padding + half,
                                _ = this._,
                                angle = Math.PI / 180 * (point.progress * 360),
                                innerRadius = index === 1 ? 10 : 25;

                            _.beginPath();
                            _.moveTo(point.x, point.y);
                            _.lineTo(Math.cos(angle) * innerRadius + cx, Math.sin(angle) * innerRadius + cy);
                            _.closePath();
                            _.stroke();
                        },
                        path: [['arc', half, half, 10, 0, 360]]
                    };
                } else if (timing == 'circles2') {
                    option = {
                        width: width,
                        height: height,

                        stepsPerFrame: 1,
                        trailLength: 1,
                        pointDistance: .02,
                        fps: 30,

                        fillColor: fillColor,

                        step: function step(point, index) {

                            this._.beginPath();
                            this._.moveTo(point.x, point.y);
                            this._.arc(point.x, point.y, index * 3, 0, Math.PI * 2, false);
                            this._.closePath();
                            this._.fill();
                        },

                        path: [['arc', half, half, 17, 0, 360]]
                    };
                } else if (timing == 'circles3') {
                    option = {
                        width: width,
                        height: height,

                        stepsPerFrame: 3,
                        trailLength: 1,
                        pointDistance: .01,
                        fps: 30,
                        step: 'fader',
                        fillColor: fillColor,
                        strokeColor: fillColor,

                        setup: function setup() {
                            this._.lineWidth = 6;
                        },

                        path: [['arc', half, half, 20, 360, 0]]
                    };
                } else if (timing == 'circles4') {
                    option = {
                        width: 100,
                        height: 100,

                        stepsPerFrame: 4,
                        trailLength: 1,
                        pointDistance: .01,
                        fps: 25,

                        fillColor: fillColor,

                        setup: function setup() {
                            this._.lineWidth = 10;
                        },

                        step: function step(point, i, f) {

                            var progress = point.progress,
                                degAngle = 360 * progress,
                                angle = Math.PI / 180 * degAngle,
                                angleB = Math.PI / 180 * (degAngle - 180),
                                size = i * 5;

                            this._.fillRect(Math.cos(angle) * 25 + (50 - size / 2), Math.sin(angle) * 15 + (50 - size / 2), size, size);

                            this._.fillStyle = '#63D3FF';

                            this._.fillRect(Math.cos(angleB) * 15 + (50 - size / 2), Math.sin(angleB) * 25 + (50 - size / 2), size, size);

                            if (point.progress == 1) {

                                this._.globalAlpha = f < .5 ? 1 - f : f;

                                this._.fillStyle = '#EEE';

                                this._.beginPath();
                                this._.arc(50, 50, 5, 0, 360, 0);
                                this._.closePath();
                                this._.fill();
                            }
                        },
                        path: [['line', 40, 10, 60, 90]]
                    };
                } else if (timing == 'line') {
                    margin = -30;
                    option = {
                        width: 100,
                        height: 50,

                        stepsPerFrame: 1,
                        trailLength: 1,
                        pointDistance: .1,
                        fps: 15,
                        padding: 10,
                        //step: 'fader',

                        fillColor: fillColor,

                        setup: function setup() {
                            this._.lineWidth = 20;
                        },

                        path: [['line', 0, 20, 100, 20], ['line', 100, 20, 0, 20]]
                    };
                }
                T.canvasDemo = new Sonic(option);
                loadIcon.append(T.canvasDemo.canvas);
                T.canvasDemo.play();
                text.css({ marginTop: margin + 'px' });
                callbackfn = function callbackfn(fn) {
                    fn();
                };
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
        }
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
                        if (timing == 'lightLoader') {
                            //进度条
                            try {
                                T.canvasDemo.progress = Math.round(count / len * 100);
                            } catch (e) {
                                console.log('多融财富欢迎您！');
                            }
                        }
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (elementName, _data, name) {
    name = name || elementName;
    _data = _data || {
        props: {
            transition: 'rotate3d' //rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
        }
    };
    __webpack_require__.e/* require.ensure */(5).then((function (require) {
        $('<div class="child">').appendTo('#pop');
        Vue.component(elementName, function () {
            return __webpack_require__(29)("./" + name + '.vue');
        });
        new Vue({
            el: '#pop .child',
            render: function render(h) {
                return h(elementName, _data);
            }
        });
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16).Promise;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actions = __webpack_require__(14);

var actions = _interopRequireWildcard(_actions);

var _mutations = __webpack_require__(15);

var _mutations2 = _interopRequireDefault(_mutations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = new Vuex.Store({
    actions: actions,
    mutations: _mutations2.default,
    state: {
        status: -1,
        currentPoint: 0, //当前位置，
        round: 0, //当前圈数；
        roundMonth: 0,
        currentPointMonth: 0,
        evenNumbersDice: 0, //双数机会
        oddNumbersDice: 0, //单数机会，
        //todayChance : 0,//当日机会（0为没有，1为有）
        diceRemainChance: 0, //总机会
        integral: 0, //积分
        prize: { //奖品相关
            diceNumList: 0, //获得的色子数；
            achievePrizePoint: 0, //是否获得一次机会；
            getCredits: 0, //获得的积分数；
            getRound: 0, //当前圈数；
            nextPoint: 0, //走到的位置；
            prizeAmount: 0, //奖品的金额；
            prizeName: 0, //奖品的名字
            raisedRates: 0, //加息额度（type =2 时）；
            prizeType: 0 //奖品类型；（1：红包 2：加息券 5：实物）
        }
    }
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Public = {
			api: 'https://shimo.im/spreadsheet/GAPmGmOMnQ4RMvPa/EAKi6',
			name: '金融财富大富翁',
			version: '1.0',
			tips: '投资≥80天产品，每满5000元，可获得双骰子机会',
			author: 'bo.peng',
			http: 'http://www.duorongcf.com',
			email: 'spion@qq.com'
};
module.exports = Public;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(18);

Vue.component('pop', {
    render: function render(h) {
        var self = this;
        return h('transition', {
            attrs: {
                'name': self.transition
            }
        }, [h('div', {
            'class': self.superClass,
            staticClass: 'modal-mask',
            directives: [{
                name: "show",
                rawName: "v-show",
                value: self.showModal
            }],
            on: {
                click: self.closePop
            }
        }, [h('div', {
            staticClass: 'modal-wrapper',
            on: {
                click: self.closePropagtion
            }
        }, [this.$slots.main])])]);
    },
    data: function data() {
        return {
            showModal: true
        };
    },

    props: {
        superClass: String,
        transition: String,
        closeCallback: Function
    },
    methods: {
        closePropagtion: function closePropagtion(e) {
            e.stopPropagation(); //
        },
        showPop: function showPop(callback) {
            this.showModal = true;
            if ($.type(callback) == 'function') {
                setTimeout(callback, 500);
            }
        },
        closePop: function closePop(callback) {
            var _this = this;

            this.showModal = false;
            setTimeout(function () {
                $(_this.$el).remove();
            }, 510);
            if ($.type(callback) == 'function') {
                setTimeout(callback, 500);
            }
            this.closeCallback && this.closeCallback.call(this);
        }
    }
});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(12),
  /* template */
  __webpack_require__(24),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\work\\pc\\activity\\app\\guhuaDafuweng\\src\\components\\nav.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] nav.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e1f69cce", Component.options)
  } else {
    hotAPI.reload("data-v-e1f69cce", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var http = '';
module.exports = {
    status: http + '/activity/tycoon-settled/status.do', //活动状态
    participate: http + '/activity/tycoon-settled/participate.do', //渠道用户
    userMessage: http + '/activity/tycoon-settled/user-message.do', //用户信息

    dicePlay: http + '/activity/tycoon-settled/dice-play.do', //开始投骰子
    walkRank: http + '/activity/tycoon-settled/walk-rank.do', //排行
    creditsMsg: http + '/activity/tycoon-settled/credits-msg.do', //积分
    exchange: http + '/activity/tycoon-settled/prize-exchange.do', //积分兑换
    record: http + '/activity/tycoon-settled/prize-record.do' };

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        return {};
    },
    mounted: function mounted() {},
    afterEach: function afterEach() {
        debugger;
    },

    methods: {
        integral: function integral() {
            T.callApp.integral();
        }
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 13 */
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Promise) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
var getInfo = exports.getInfo = function getInfo(_ref, $store) {
    var commit = _ref.commit;

    return new Promise(function (resolve, reject) {
        commit('getInfo', function () {
            resolve();
        });
    });
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(T) {

var _URL = __webpack_require__(9);

var _requirePop = __webpack_require__(1);

var _requirePop2 = _interopRequireDefault(_requirePop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    getInfo: function getInfo(state, callback) {
        T.ajax({
            url: _URL.status,
            callback: true
        }).then(function (data) {
            $.extend(state, data.map);
            //state.status = data.map.status;
            if (state.status != 0) {
                (0, _requirePop2.default)('notStart');
            } else {
                callback();
            }
        });
    },
    updateData: function updateData(state, obj) {
        state.currentPoint = obj.nextPoint;
        state.round = obj.getRound;
        state.currentPointMonth = obj.currentPointMonth;
        state.roundMonth = obj.roundMonth;
    },
    participate: function participate(state) {
        T.ajax({
            url: _URL.participate,
            callback: true,
            data: { uid: T.uid }
        }).then(function (data) {
            if (data.flag == false) {
                (0, _requirePop2.default)('juedao', {
                    props: {
                        content: data.errorMsg || '渠道用户不参加活动！',
                        transition: 'rotate3d',
                        okTxt: '回首页',
                        closeCallback: function closeCallback() {
                            T.callApp.home();
                        }
                    }
                }, 'publicTips');
            }
        });
    },
    userMessage: function userMessage(state) {
        if (!T.uid) return;
        T.ajax({
            url: _URL.userMessage,
            data: { uid: T.uid }
        }).then(function (data) {
            $.extend(state, data.map);
            state.integral = data.map.userCoin.points;
        });
    },
    updatePrize: function updatePrize(state, obj) {
        //state.prize = {...state.obj,obj}
        //state.diceRemainChance -= 1; //骰子机会减少
        $.extend(state.prize, obj);
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11), __webpack_require__(2), __webpack_require__(10)))

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('nav', {
    staticClass: "nav"
  }, [_c('ul', [_c('li', {
    staticClass: "img-size",
    attrs: {
      "data-width": "188",
      "data-height": "164",
      "data-fontSize": "30"
    }
  }, [_c('router-link', {
    staticClass: "img-size",
    attrs: {
      "to": "/main",
      "replace": "",
      "data-paddingTop": "36"
    }
  }, [_vm._v("\r\n                活动首页\r\n            ")])], 1), _vm._v(" "), _c('li', {
    staticClass: "img-size",
    attrs: {
      "data-width": "188",
      "data-height": "164",
      "data-fontSize": "30"
    }
  }, [_c('router-link', {
    staticClass: "img-size",
    attrs: {
      "to": "/rank",
      "replace": "",
      "data-paddingTop": "36"
    }
  }, [_vm._v("大富翁"), _c('br'), _vm._v("排行榜")])], 1), _vm._v(" "), _c('li', {
    staticClass: "img-size",
    attrs: {
      "data-width": "188",
      "data-height": "164",
      "data-fontSize": "30"
    }
  }, [_c('a', {
    staticClass: "img-size",
    attrs: {
      "data-paddingTop": "36"
    },
    on: {
      "click": _vm.integral
    }
  }, [_vm._v("\r\n                积分兑换\r\n            ")])]), _vm._v(" "), _c('li', {
    staticClass: "img-size",
    attrs: {
      "data-width": "188",
      "data-height": "164",
      "data-fontSize": "30"
    }
  }, [_c('router-link', {
    staticClass: "img-size",
    attrs: {
      "to": "/prize",
      "replace": "",
      "data-paddingTop": "36"
    }
  }, [_vm._v("\r\n                我的奖品\r\n            ")])], 1)])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e1f69cce", module.exports)
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
/* WEBPACK VAR INJECTION */(function(__dirname, T) {

__webpack_require__(6);

var _public = __webpack_require__(4);

var _public2 = _interopRequireDefault(_public);

var _requirePop = __webpack_require__(1);

var _requirePop2 = _interopRequireDefault(_requirePop);

var _nav = __webpack_require__(7);

var _nav2 = _interopRequireDefault(_nav);

__webpack_require__(5);

var _store = __webpack_require__(3);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//获取项目信息

/*import { participate } from './common/URL';*/
Vue.use(VueRouter);

var router = new VueRouter({
    mode: 'hash',
    base: __dirname,
    linkActiveClass: "active",
    routes: [{
        path: '/',
        redirect: '/main'
    }, {
        path: '/main',
        component: function component(resolve) {
            __webpack_require__.e/* require */(0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(21)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        }
    }, {
        path: '/rank',
        component: function component(resolve) {
            __webpack_require__.e/* require */(1).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(23)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        }
    }, {
        path: '/history',
        component: function component(resolve) {
            __webpack_require__.e/* require */(3).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(19)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        }
    }, {
        path: '/integral', //33
        component: function component(resolve) {
            __webpack_require__.e/* require */(4).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(20)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        }
    }, {
        path: '/prize',
        component: function component(resolve) {
            __webpack_require__.e/* require */(2).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(22)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        }
    }]
});

window.router = router;
window.Public = _public2.default;

new Vue({
    router: router,
    store: _store2.default,
    data: function data() {
        return {
            transitionName: 'left',
            home: false
        };
    },

    components: {
        navtab: _nav2.default
    },
    mounted: function mounted() {
        var url = T.imgsrc + '/activity/app/guhuaDafuweng/images/';
        T.init({
            loadding: {
                timing: 'spinner-loader', //加载 spinner , spinner-loader , loadingbar , lightLoader , square ,circles,circles1,circles2,circles3,circles4,line' 
                fillColor: 'rgba(150,213,0,1)',
                imgs: [url + '001.png', url + '002.png', url + '003.png', url + '004.png', url + '005.png', url + '006.png', url + '1.png', url + '2.png', url + '3.png', url + '4.png', url + '5.png', url + '6.png', url + '7.png', url + '8.png', url + '9.png', url + '10.png', url + '11.png', url + '12.png', url + 'dicedo.gif', url + 'bg.jpg', url + 'bg1.jpg', url + 'bg-repeat.jpg', url + 'book.png', url + 'bottom.png', url + 'bottom-left-num.png', url + 'bottom-num.png', url + 'bottom-num1.png', url + 'bottom-right-num.png', url + 'box.png', url + 'btn.jpg', url + 'close.png', url + 'coupon.jpg', url + 'defualt-btn.png', url + 'dice-bg.png', url + 'dice-btn.png',
                // url+'dice-btn-hover.png',
                url + 'dice-do.png', url + 'explain.png', url + 'first.png', url + 'l.png', url + 'left-num.png', url + 'left-num1.png', url + 'me.jpg', url + 'one.jpg', url + 'money.jpg', url + 'tree.jpg', url + 'two.jpg', url + 'nav.png', url + 'nav-cur.png', url + 'pop.png', url + 'selectone.png', url + 'selecttwo.png', url + 'tit1.jpg', url + 'sunlight.png', url + 'tit.png', url + 'prize-bg.png', url + 'title.png', url + 'top-left-num.png', url + 'top-num.png', url + 'top-num1.png', url + 'top-right-num.png', url + 'txt1.png', url + 'txt2.png', url + 'laba.png'],
                callback: function callback() {}
            }
        });
        T.getInfo(this);
        this.$store.commit('userMessage');
    },

    watch: {
        '$route': function $route(to, from) {
            this.transitionName = this.getTransition(to, from);
            if (!T.uid && to.path != '/main') {
                (0, _requirePop2.default)('gologin', {
                    props: {
                        content: '对不起，请登录后再操作。',
                        transition: 'rotate3d',
                        okTxt: '马上去登录',
                        okCallback: function okCallback() {
                            T.login();
                        },
                        closeCallback: function closeCallback() {
                            router.push('/main');
                        }
                    }
                }, 'publicTips');
            }
        }
    },
    methods: {
        getTransition: function getTransition(to, from) {
            var text = 'left',
                arr = ['/main', '/rank', '/history', '/integral'];

            for (var i = 0; i < arr.length; i++) {
                if (to.path == arr[i]) {
                    text = 'right';
                    break;
                } else if (from.path == arr[i]) {
                    text = 'left';
                    break;
                } else {
                    text = 'left';
                }
            }
            return text;
        }
    },
    template: '\n        <div id="app">\n            <transition :name="transitionName">\n                <router-view class="child-view"></router-view>\n            </transition>\n            <navtab></navtab>\n            <div id=\'pop\'></div>\n        </div>\n    '
}).$mount('#app');
/* WEBPACK VAR INJECTION */}.call(exports, "/", __webpack_require__(0)))

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map?name=67553faf61540dba269b