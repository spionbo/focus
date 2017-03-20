webpackJsonp([9],{

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Vue, VueRouter, __dirname, T) {

__webpack_require__(9);

var _info = __webpack_require__(8);

var _info2 = _interopRequireDefault(_info);

var _URL = __webpack_require__(5);

var _requirePop = __webpack_require__(2);

var _requirePop2 = _interopRequireDefault(_requirePop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//获取项目信息
Vue.use(VueRouter);
var router = new VueRouter({
    mode: 'hash',
    base: __dirname,
    routes: [{
        path: '/',
        component: function component(resolve) {
            /*return require.ensure([],(require)=>{
                return require('./module/main/index');
            })*/
            __webpack_require__.e/* require */(8).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(14)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        }
    }, {
        path: '/module1',
        component: function component(resolve) {
            /*return require.ensure([],(require)=>{
                return require('./module/module1/index');
            })*/
            __webpack_require__.e/* require */(5).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(15)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        }
    }, {
        path: '/module2',
        component: function component(resolve) {
            /*return require.ensure([],(require)=>{
                return require('./module/module2/index');
            })*/
            __webpack_require__.e/* require */(7).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(16)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        }
    }, {
        path: '/module3',
        component: function component(resolve) {
            /*return require.ensure([],(require)=>{
                return require('./module/module3/index');
            })*/
            __webpack_require__.e/* require */(6).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(17)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        }
    }, {
        path: '/module4',
        component: function component(resolve) {
            /*return require.ensure([],(require)=>{
                return require('./module/module4/index');
            })*/
            __webpack_require__.e/* require */(4).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(18)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        }
    }, {
        path: '/module5',
        component: function component(resolve) {
            /*return require.ensure([],(require)=>{
                return require('./module/module5/index');
            })*/
            __webpack_require__.e/* require */(3).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(19)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        }
    }]
});
/*router.beforeEach((to, from, next) => {
    $('#pop').html('<div class="child"></div>')
    next(vm => {});
});*/

_info2.default.init();
window.router = router;
window.info = _info2.default;
window.bus = new Vue();
new Vue({
    router: router,
    data: function data() {
        return {
            transitionName: 'slide-left',
            home: false
        };
    },

    watch: {
        '$route': function $route(to, from) {
            this.home = to.path != '/';
            var toDepth = to.path.split('/').length;
            var fromDepth = from.path.split('/').length;
            this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
        }
    },
    mounted: function mounted() {
        var http = T.imgsrc + "/activity/app/dafuweng/src/images/";
        T.init({
            loadding: {
                imgs: [http + 'l.png', http + 'light-bg.png', http + 'loading.gif', http + 'myPrize.png', http + 'myPrize-pop.jpg', http + 'people.png', http + 'people-light.png', http + 'people-light1.png', http + 'prize-box.png', http + 'prizedo.png', http + 'home.png', http + 'sunlight.png', http + 'sunlight.png', http + 'module1/b1.png', http + 'module1/bg.jpg', http + 'module2/b2.png', http + 'module2/bg.jpg', http + 'module3/b3.png', http + 'module3/bg.jpg', http + 'module4/b4.png', http + 'module4/bg.jpg', http + 'module5/b5.png', http + 'module5/bg.jpg', http + 'pop/btn.png', http + 'pop/btn1.png', http + 'pop/btn2.png', http + 'pop/btn3.png', http + 'pop/defualt-btn.png', http + 'pop/img1.png', http + 'pop/pop.png', http + 'pop/txt1.png', http + 'pop/txt2.png', http + 'pop/txt3.png', http + 'pop/txt4.png', http + 'dice/001.png', http + 'dice/002.png', http + 'dice/003.png', http + 'dice/004.png', http + 'dice/005.png', http + 'dice/006.png', http + 'dice/1.png', http + 'dice/2.png', http + 'dice/3.png', http + 'dice/4.png', http + 'dice/5.png', http + 'dice/6.png', http + 'dice/dicedo.gif', http + 'dice/selectone.png', http + 'dice/selecttwo.png', http + 'dice/gun.png', http + 'main/btn1.jpg', http + 'main/btn2.jpg', http + 'main/btn3.jpg', http + 'main/car.gif', http + 'main/header-bg.jpg', http + 'main/header-bg1.png', http + 'main/login_btn.jpg', http + 'main/login_btn_hover.jpg', http + 'main/prize.jpg'],
                callback: function callback() {

                    _info2.default.click(function () {
                        if (!T.uid) {
                            router.replace({ path: '/', query: {
                                    wap: T.wap, uid: T.uid
                                } });
                            return;
                        };
                        T.ajax({
                            url: _URL.participate,
                            data: { uid: T.uid },
                            callback: true,
                            success: function success(_data) {
                                if (!_data.flag) {
                                    /* var pop = new Pop({
                                         title : '&nbsp;',
                                         content : '渠道用户不能参加此活动！',
                                         okBtn : true,
                                         cancelBtn:false,
                                         timing : 'bounceIn', //rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
                                         okTxt : '去投资列表',
                                         closeCallback : function(){
                                             T.callApp.investment();
                                         }
                                     });*/
                                    (0, _requirePop2.default)('juedao', {
                                        props: {
                                            content: '渠道用户不能参加此活动！',
                                            transition: 'bounceIn',
                                            okTxt: '回首页',
                                            closeCallback: function closeCallback() {
                                                T.callApp.home();
                                            }
                                        }
                                    }, 'publicTips');

                                    /*return;
                                    require.ensure([],(require)=>{
                                        var Pop = require('./pop/index.js');
                                        var pop = new Pop({
                                            title : '&nbsp;',
                                            content : '渠道用户不能参加此活动！',
                                            okBtn : true,
                                            cancelBtn:false,
                                            timing : 'slideOutUp', //rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
                                            okTxt : '回首页',
                                            closeCallback : function(){
                                                T.callApp.home();
                                            }
                                        });
                                    },'pop');*/
                                } else {
                                    //更新栏目数据
                                    var hash = window.location.hash;
                                    if (hash.search(/#\/\module\d/) >= 0) {
                                        _info2.default.onmap(function () {
                                            _info2.default.getDice(function () {
                                                bus.$emit('pointOnMap', _info2.default.map.pointOnMap);
                                                //T.goPage();
                                                /* var num = info.map.pointOnMap , 
                                                     diceChance = info.diceChance ,
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
                                                 if(num>=118){
                                                     module = '/';
                                                 }
                                                 //if(hash.match(/#\/\module\d/)[0].substr(2)==module) return;
                                                 router.replace({ path: module, query: {
                                                     wap:T.wap,uid:T.uid,
                                                     pointOnMap:num,
                                                     diceChance : diceChance
                                                 }});*/
                                            });
                                        });
                                    } else {
                                        console.log('多融欢迎您！');
                                    }
                                }
                            }
                        });
                    });
                }
            }
        });
    },

    template: '\n        <div id="app">\n            <transition name="left">\n                <router-view class="child-view"></router-view>\n            </transition>\n            <div id=\'pop\'><div class=\'child\'></div></div>\n        </div>\n    '
}).$mount('#app');
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(3), "/", __webpack_require__(0)))

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

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(T) {

var _URL = __webpack_require__(5);

var _requirePop = __webpack_require__(2);

var _requirePop2 = _interopRequireDefault(_requirePop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var info = {
    api: 'https://shimo.im/spreadsheet/GAPmGmOMnQ4RMvPa/1nP14',
    name: '金融财富大富翁',
    version: '1.0',
    startTime: null,
    endTime: null,
    status: -1,
    mapLength: 118, //总共118步
    init: function init() {
        info.getTime(function () {});
        info.onmap(function () {});
    },
    click: function click(callback) {
        info.getTime(function () {
            var status = info.status,
                text = '';
            if (status == 0) {
                //进行中
                return callback();
            }
            setTimeout(function () {
                (0, _requirePop2.default)('mainchuowutisih', {
                    props: {
                        status: info.status,
                        startTime: info.startTime,
                        endTime: info.endTime,
                        transition: 'bounceIn',
                        closeCallback: function closeCallback() {
                            T.callApp.home();
                        }
                    }
                }, 'noStart');
            }, 500);
        });
    },
    getTimes: [],
    getTime: function getTime(callback) {
        if (info.startTime) {
            return callback && callback();
        }
        T.getAppInfo();
        info.getTimes.push(callback);
        if (info.getTimes.length <= 1) {
            T.ajax({
                url: _URL.status,
                callback: true,
                data: {
                    channel: 'H5',
                    uid: T.uid
                },
                success: function success(_data) {
                    info.startTime = new Date(_data.map.startTime).Format('yy/MM/dd hh:mm:ss');
                    info.endTime = new Date(_data.map.endTime).Format('yy/MM/dd hh:mm:ss');
                    info.status = _data.map.status;
                    info.getTimes.map(function (callback) {
                        callback && callback();
                    });
                }
            });
        }
    },
    getDices: [],
    getDice: function getDice(callback) {
        if (!T.uid) return;
        if (info.diceChance != void 0) return callback && callback();
        info.getDices.push(callback);
        if (info.getDices.length <= 1) {
            info.getTime(function () {
                if (info.status != 0) return;
                T.ajax({ //掷骰机会
                    url: _URL.welcome,
                    callback: true,
                    data: {
                        uid: T.uid
                    },
                    success: function success(_data) {
                        //normalChance - 普通骰子机会, controllableChance - 遥控骰子 机会
                        info.diceChance = _data.map.diceChance;
                        info.controllableChance = _data.map.controllableChance; //遥控
                        info.normalChance = _data.map.normalChance; //普通
                        info.getDices.map(function (callback) {
                            callback && callback();
                        });
                    }
                });
            });
        }
    },
    map: {},
    onmaps: [],
    onmap: function onmap(callback) {
        if (!T.uid) return;
        if (info.map.pointOnMap != void 0) {
            callback && callback(info);
        } else {
            info.onmaps.push(callback);
            if (info.onmaps.length <= 1) {
                info.getTime(function () {
                    if (info.status != 0) return;
                    T.ajax({ //掷骰机会
                        url: _URL.map,
                        callback: true,
                        data: {
                            uid: T.uid
                        },
                        success: function success(_data) {
                            info.map = _data.map;
                            info.onmaps.map(function (callback) {
                                callback && callback();
                            });
                            /*diceChance:4 //剩余骰子机会
                            pointOnMap: 23 //地图上的位置
                            achievePrizePoint = false; //是否抽奖点 
                            hasRaffle = false; 表示 如果在抽奖点上， 是否有抽奖机会
                            rank{[138****0001, 138****0002, 138****0003, 138****0004]}*/
                        }
                    });
                });
            }
        }
    },
    author: 'bo.peng',
    http: 'http://www.duorongcf.com',
    email: 'spion@qq.com'
};
module.exports = info;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[21]);
//# sourceMappingURL=app.js.map?name=05c98ee84cb2002c1339