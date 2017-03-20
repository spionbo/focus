webpackJsonp([10],{

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(185);

var _global = __webpack_require__(0);

var _global2 = _interopRequireDefault(_global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var body = $('body');
module.exports = function () {
	function Pop(obj) {
		_classCallCheck(this, Pop);

		var self = this;
		this.config = {
			title: '',
			content: null,
			okBtn: true,
			okCls: '',
			nextBtn: false,
			cancelBtn: true,
			cancelCls: '',
			width: null,
			okTxt: '确定',
			nextTxt: '下一步',
			cancelTxt: '取消',
			history: true, //是否使用历史记录
			okCallback: function okCallback() {
				self.close();
			},
			cancelCallback: function cancelCallback() {
				self.close();
			},
			close: true,
			closeCallback: function closeCallback() {},
			windowClose: true,
			superClass: '',
			class: '',
			time: .5,
			mask: false,
			maskTiming: 'mask',
			timing: 'rotate3d', // rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
			timingTime: 0,
			openDone: function openDone() {} //加载完成
		};
		$.extend(this.config, obj);
		this.init();
	}

	_createClass(Pop, [{
		key: 'init',
		value: function init() {
			var timing = this.config.timing;
			if (timing == 'rotate3d' || timing == 'slideOutUp' || timing == 'fadeIn' || timing == 'slideOutDown') {
				this.config.timingTime = 50;
			}
			if (this.config.mask == true) {
				this.config.timing = '';
			} else {
				this.config.maskTiming = '';
			}
			var ele = $("<div class='pop " + this.config.maskTiming + "'>" + "<div data-width='555' data-height='454' class='pop-cnt img-size " + this.config.timing + "'>" + "<div class='close'><div class='v-line'></div><div class='h-line'></div></div>" + "<div class='title'></div>" + "<div class='content'></div>" + "<div class='error'></div>" + "<div class='submit'><div class='btn okbtn img-size'  data-width='326' data-height='60' data-lineHeight='60'></div><div class='btn next'></div><div class='btn unbind'></div></div>" + "</div>" + "</div>");

			this.element = {
				elem: ele,
				title: ele.find('.title'),
				close: ele.find('.close'),
				bg: ele.find('.pop-cnt'),
				content: ele.find('.content'),
				submit: ele.find('.submit'),
				okbtn: ele.find('.okbtn'),
				nextbtn: ele.find('.next'),
				cancelbtn: ele.find('.unbind'),
				error: ele.find('.error')
			};

			this.updateElement();
		}
	}, {
		key: 'updateElement',
		value: function updateElement() {
			var elem = this.element,
			    config = this.config,
			    time = config.time + 's';
			elem.okbtn.addClass(config.okCls).html(config.okTxt);
			elem.nextbtn.html(config.nextTxt);
			elem.cancelbtn.addClass(config.cancelCls).html(config.cancelTxt);

			if (config.mask == true) {
				this.addContent("<div class='loading'></div>");
			}

			elem.title.html(config.title);
			if (config.content) this.add(function () {
				return config.content;
			});

			elem.elem.addClass(config.superClass);
			elem.bg.addClass(config.class);
			elem.bg.css({ 'transition-duration': time, 'animation-duration': time });
			elem.bg.css({ '-webkit-transition-duration': time, '-webkit-animation-duration': time });

			if (config.width) {
				elem.bg.css({ width: config.width });
			}
			if (config.title.length < 2) {
				elem.title.remove();
			}
			if (config.okBtn == false) {
				elem.okbtn.remove();
			}
			if (config.nextBtn == false) {
				elem.nextbtn.remove();
			}
			if (config.cancelBtn == false) {
				elem.cancelbtn.remove();
			}
			if (config.okBtn == false && config.cancelBtn == false) {
				elem.submit.remove();
			}
			if (config.close == false) {
				elem.close.remove();
			}
		}
	}, {
		key: 'add',
		value: function add(fn) {
			var _this = this;

			var ele = this.element,
			    self = this;
			if (!ele.elem.parent().length) {
				body.append(ele.elem);
				this.addContent(fn);
				setTimeout(function () {
					ele.bg.addClass('cur');
				}, self.config.timingTime);
				_global2.default.body.css({ overflowY: 'hidden' });
				self.history();
				setTimeout(function () {
					_this.updateEvent();
					self.config.openDone();
				}, self.config.time + 20);
			} else {
				self.close();
			}
			return ele.content;
		}
	}, {
		key: 'addContent',
		value: function addContent(fn) {
			var ele = this.element.content;
			if (fn && typeof fn == 'function') {
				ele.html(fn.call(ele));
			} else {
				ele.html(fn);
			}
			setTimeout(function () {
				_global2.default.setImgSize();
			}, 100);
		}
	}, {
		key: 'history',
		value: function (_history) {
			function history() {
				return _history.apply(this, arguments);
			}

			history.toString = function () {
				return _history.toString();
			};

			return history;
		}(function () {
			var self = this;
			if (self.config.history) {
				history.pushState({ status: 'mask' }, '');
				if (!window.maskSelf) {
					window.maskSelf = [];
				}
				maskSelf.push(self);
				window.onpopstate = function (e) {
					if (maskSelf.length) {
						maskSelf[maskSelf.length - 1].back();
						maskSelf.pop();
					}
				};
			}
		})
	}, {
		key: 'unbind',
		value: function unbind(btn, callback, txt, time) {
			var self = this,
			    text = btn.text();
			txt = txt || text;
			time = time || 3;
			function bind() {
				btn.removeClass('unbind').text(text);
				self.unbind(btn, callback, txt, time);
			}
			btn.unbind().click(function () {
				btn.unbind().addClass('unbind').text(txt);
				callback();
				setTimeout(bind, time * 1000);
			});
		}
	}, {
		key: 'updateEvent',
		value: function updateEvent() {
			var self = this,
			    elem = this.element,
			    config = this.config;

			_global2.default.myAddListener(elem.close, 'mousedown', function (e) {
				e.stopPropagation();
				self.close();
			});

			_global2.default.myAddListener(elem.elem, 'mousedown', function (e) {
				e.stopPropagation();
				if (config.windowClose) {
					self.close();
				}
			});

			_global2.default.myAddListener(elem.bg, 'mousedown', function (e) {
				e.stopPropagation();
			});

			/*elem.close.click((event)=>{
   	T.getEvent(event);
   	self.close();
   });*/
			/*elem.elem.click((event)=>{
   	T.getEvent(event);
   	if(config.windowClose){
   		self.close();
   	}
   });*/

			/*elem.bg.click((event)=>{
   	T.getEvent(event);
   });*/

			if (config.okBtn == true) {
				//self.unbind(elem.okbtn,config.okCallback)
				/*elem.okbtn.click((event)=>{
    	config.okCallback.call(self);
    });*/
				_global2.default.myAddListener(elem.okbtn, 'mousedown', function (e) {
					e.stopPropagation();
					config.okCallback.call(self);
				});
			}
			if (config.nextBtn == true) {
				//self.unbind(elem.nextbtn,config.nextCallback);
				/*elem.nextbtn.click(()=>{
    	config.nextCallback.call(self);
    });*/

				_global2.default.myAddListener(elem.nextbtn, 'mousedown', function (e) {
					e.stopPropagation();
					config.nextCallback.call(self);
				});
			}
			if (config.cancelBtn == true) {
				/*elem.cancelbtn.click(()=>{
    	config.cancelCallback.call(self);
    })*/
				_global2.default.myAddListener(elem.cancelbtn, 'mousedown', function (e) {
					e.stopPropagation();
					config.cancelCallback.call(self);
				});
			}
		}
	}, {
		key: 'error',
		value: function error(txt, h) {
			var self = this,
			    error = this.element.error,
			    bg = this.element.bg,
			    time = this.config.time;

			bg.addClass('errorcur');
			error.html(txt).addClass('cur');
			setTimeout(function () {
				bg.removeClass('errorcur');
				bg.css({ 'animation-duration': '0s' });
				bg.css({ '-webkit-animation-duration': '0s' });
				setTimeout(function () {
					bg.css({ 'animation-duration': time + 's' });
					bg.css({ '-webkit-animation-duration': time + 's' });
				}, time * 1000 + 10);
			}, time * 1000 + 10);
		}
	}, {
		key: 'hideError',
		value: function hideError() {
			this.element.error.html('').removeClass('cur succee');
			this.element.bg.removeClass('errorcur');
		}
	}, {
		key: 'succee',
		value: function succee(obj) {
			var t = obj.time || .1;
			var self = this,
			    error = this.element.error,
			    time = this.config.time;

			error.html(obj.txt).addClass('cur succee');
			setTimeout(function () {
				self.hideError();
				obj.callback && obj.callback();
			}, time * 1000 + t * 1000);
		}
	}, {
		key: 'close',
		value: function close() {
			if (this.config.history) {
				history.back();
			} else {
				this.back();
			}
			this.config.closeCallback();
		}
	}, {
		key: 'back',
		value: function back(fn) {
			var ele = this.element;
			ele.bg.removeClass('cur');
			setTimeout(function () {
				ele.elem.remove();
				if (fn && $.type(fn) == 'function' && fn()) ;
				_global2.default.body.css({ overflowY: 'auto' });
			}, 510);
		}
	}]);

	return Pop;
}();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=pop_chunk.js.map?name=05c98ee84cb2002c1339