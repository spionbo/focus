import $ from 'webpack-zepto';
const qApiSrc = {
    lower: "http://i0.jrjimg.cn/zqt-red-1000/focus/common/js/qb.js",
    higher: "http://jsapi.qq.com/get?api=app.share"
};
const bLevel = {
    qq: {forbid: 0, lower: 1, higher: 2},
    uc: {forbid: 0, allow: 1}
};
const UA = navigator.appVersion;
var isqqBrowser = (UA.split("MQQBrowser/").length > 1) ? bLevel.qq.higher : bLevel.qq.forbid;
var isucBrowser = (UA.split("UCBrowser/").length > 1) ? bLevel.uc.allow : bLevel.uc.forbid;
var version = {
    uc: "",
    qq: ""
};
var isWeixin = false;
module.exports = class NativeShare{
    constructor(config){
        this.config = {
            btn : [],
            url:window.location.href,
            title:'爱投顾-金融界-最专业的股市投资咨询服务',
            desc:'爱投顾是金融界旗下专业证券投资领域的综合性服务平台。',
            img:'http://i0.jrjimg.cn/zqt-red-1000/focus/logo_100_100.png',
            img_title:'金融界爱投顾分享图片',
            from:'http://itougu.jrj.com.cn'
        };
        $.extend(this.config,config);

        this.ucAppList = {
            sinaWeibo: ['kSinaWeibo', 'SinaWeibo', 11, '新浪微博'],
            weixin: ['kWeixin', 'WechatFriends', 1, '微信好友'],
            weixinFriend: ['kWeixinFriend', 'WechatTimeline', '8', '微信朋友圈'],
            QQ: ['kQQ', 'QQ', '4', 'QQ好友'],
            QZone: ['kQZone', 'QZone', '3', 'QQ空间']
        };

        if(this.config.btn.length){
            this.init();
        }

    }
    getPlantform() {
        let ua = navigator.userAgent;
        if ((ua.indexOf("iPhone") > -1 || ua.indexOf("iPod") > -1)) {
            return "iPhone"
        }
        return "Android"
    }
    isloadqqApi() {
        if (isqqBrowser) {
            var b = (version.qq < 5.4) ? qApiSrc.lower : qApiSrc.higher;
            var d = document.createElement("script");
            var a = document.getElementsByTagName("body")[0];
            d.setAttribute("src", b);
            a.appendChild(d)
        }
    }
    init(){
        var self = this;
        this.platform_os = this.getPlantform();
        version.qq = isqqBrowser ? this.getVersion(UA.split("MQQBrowser/")[1]) : 0;
        version.uc = isucBrowser ? this.getVersion(UA.split("UCBrowser/")[1]) : 0;
        isWeixin = this.is_weixin();
        if ((isqqBrowser && version.qq < 5.4 && this.platform_os == "iPhone") || (isqqBrowser && version.qq < 5.3 && this.platform_os == "Android")) {
            isqqBrowser = bLevel.qq.forbid
        } else {
            if (isqqBrowser && version.qq < 5.4 && this.platform_os == "Android") {
                isqqBrowser = bLevel.qq.lower
            } else {
                if (isucBrowser && ((version.uc < 10.2 && this.platform_os == "iPhone") || (version.uc < 9.7 && this.platform_os == "Android"))) {
                    isucBrowser = bLevel.uc.forbid
                }
            }
        }
        if ( (isqqBrowser || isucBrowser) && !isWeixin ) {
            this.isloadqqApi();
            if(this.config.callback){
                this.config.btn.click(()=>{
                    this.config.callback().find('li').each(( i , elem )=>{
                        elem.onclick = function(){
                            self.share(this.getAttribute('data-app'));
                        }
                    });
                })
            }
        } else {
            this.config.btn.hide();
        }
    }
    share(to_app) {
        var title = this.config.title, 
            url = this.config.url, 
            desc = this.config.desc, 
            img = this.config.img, 
            img_title = this.config.img_title, 
            from = this.config.from;
        if (isucBrowser) {
            to_app = to_app == '' ? '' : (this.platform_os == 'iPhone' ? this.ucAppList[to_app][0] : this.ucAppList[to_app][1]);
            if (to_app == 'QZone') {
                B = "mqqapi://share/to_qzone?src_type=web&version=1&file_type=news&req_type=1&image_url="+img+"&title="+title+"&description="+desc+"&url="+url+"&app_name="+from;
                k = document.createElement("div"), k.style.visibility = "hidden", k.innerHTML = '<iframe src="' + B + '" scrolling="no" width="1" height="1"></iframe>', document.body.appendChild(k), setTimeout(function () {
                    k && k.parentNode && k.parentNode.removeChild(k)
                }, 5E3);
            }
            if (typeof(ucweb) != "undefined") {
                ucweb.startRequest("shell.page_share", [title, title, url, to_app, "", "@" + from, ""])
            } else {
                if (typeof(ucbrowser) != "undefined") {
                    ucbrowser.web_share(title, title, url, to_app, "", "@" + from, '')
                } else {
                }
            }
        } else {
            if (isqqBrowser && ! isWeixin) {
                to_app = to_app == '' ? '' : this.ucAppList[to_app][2];
                var ah = {
                    url: url,
                    title: title,
                    description: desc,
                    img_url: img,
                    img_title: img_title,
                    to_app: to_app,//微信好友1,腾讯微博2,QQ空间3,QQ好友4,生成二维码7,微信朋友圈8,啾啾分享9,复制网址10,分享到微博11,创意分享13
                    cus_txt: "请输入此时此刻想要分享的内容"
                };
                ah = to_app == '' ? '' : ah;
                if (typeof(browser) != "undefined") {
                    if (typeof(browser.app) != "undefined" && isqqBrowser == bLevel.qq.higher) {
                        browser.app.share(ah)
                    }
                } else {
                    if (typeof(window.qb) != "undefined" && isqqBrowser == bLevel.qq.lower) {
                        window.qb.share(ah)
                    } else {
                    }
                }
            } else {
            }
        }
    }
    is_weixin() {
        var a = UA.toLowerCase();
        if (a.match(/MicroMessenger/i) == "micromessenger") {
            return true
        } else {
            return false
        }
    }
    getVersion(c) {
        var a = c.split("."), b = parseFloat(a[0] + "." + a[1]);
        return b
    }
};