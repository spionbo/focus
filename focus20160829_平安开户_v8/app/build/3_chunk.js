webpackJsonp([3],{

/***/ 15:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _global = __webpack_require__(3);
	
	var _global2 = _interopRequireDefault(_global);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var URL = window.location.href,
	    status = window.loginStatus;
	function login(callback, url) {
		//登录  -1 登录 -2 accessToken("accessToken", "115","AccessToken过期"),
		url = url || URL;
		_global2.default.urlCode();
		if (status == -1) {
			window.location = url + ((_global2.default.codeUrl.length > 1 ? '&' : '?') + 'goto=/virtual/passportLogin&returnUrl=' + url);
			//jrj.jsCallNative(108, JSON.stringify({retrunUrl:url}));
		} else if (status == -2) {
			window.location = url + ((_global2.default.codeUrl.length > 1 ? '&' : '?') + 'goto=/virtual/accessTokenInvalid&returnUrl=' + url);
			//jrj.jsCallNative(115, JSON.stringify({retrunUrl:url}));
		} else {
			// 0 登录成功
			callback();
		}
	}
	module.exports = {
		ask: function ask(name, id) {
			//提问
			login(function () {
				if (name && id) {
					jrj.jsCallNative(125, JSON.stringify({ username: name, userid: id, usernanme: name })); //usernanme ios 错误
				} else {
					//大厅
					jrj.jsCallNative(125, '');
				}
			});
		},
		login: login,
		myIndex: function myIndex(id) {
			jrj.jsCallNative(113, JSON.stringify({ id: id }));
		},
		openList: function openList() {
			//开户列表
			login(function () {
				window.location = 'http://t.jrj.com.cn/openAccount/activity/index.jspa?type=openAccount&tgqdcode=M582DBXT';
				//jrj.jsCallNative(107, JSON.stringify({ opentype: 2, broker: 'HTZQ' }));
			});
		}
	};

/***/ }

});
//# sourceMappingURL=3_chunk.js.map