webpackJsonp([6,8],{28:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{superClass:String,transition:String,closeCallback:Function,width:Number,height:Number},data:function(){return{showModal:!0}},mounted:function(){t.setImgSize()},methods:{closePropagtion:function(t){t.stopPropagation()},showPop:function(t){this.showModal=!0,"function"==$.type(t)&&setTimeout(t,500)},closePop:function(){var t=this;this.showModal=!1,this.closeCallback&&this.closeCallback(),setTimeout(function(){$(t.$el).remove()},510)}}}}).call(e,o(0))},29:function(t,e){},30:function(t,e,o){o(29);var i=o(4)(o(28),o(31),null,null);i.options.__file="E:\\work\\pc\\activity\\app\\2017ChildrensDay\\src\\pop\\pop.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] pop.vue: functional components are not supported with templates, they should use render functions."),t.exports=i.exports},31:function(t,e,o){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:t.transition}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],staticClass:"modal-mask",class:t.superClass,on:{click:t.closePop}},[o("div",{staticClass:"modal-wrapper"},[o("div",{staticClass:"modal-container img-size",attrs:{"data-width":t.width||600,"data-height":t.height||t.auto},on:{click:function(e){t.closePropagtion(e)}}},[t._t("close",[o("div",{staticClass:"close img-size",attrs:{"data-width":"82","data-height":"81","data-top":"-20","data-right":"-20"},on:{click:t.closePop}})]),t._v(" "),o("div",{staticClass:"modal-header"},[o("div",{staticClass:"bg img-size",attrs:{"data-fontSize":"48","data-width":"595","data-height":"123","data-lineHeigh":"120"}},[t._t("header",[t._v("\r\n                            default header\r\n                        ")])],2)]),t._v(" "),o("div",{staticClass:"modal-body"},[o("div",{staticClass:"body-bg img-size",attrs:{"data-marginTop":"-60","data-paddingTop":"80"}},[o("div",{staticClass:"body-cnt"},[t._t("body",[t._v("\r\n                                default body\r\n                            ")])],2),t._v(" "),o("div",{staticClass:"modal-footer"},[t._t("footer",[o("div",{staticClass:"btn img-size",attrs:{"data-width":"327","data-height":"60"}})])],2)])])],2)])])])},staticRenderFns:[]},t.exports.render._withStripped=!0},34:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var i=o(30),n=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default={components:{pop:n.default},props:{transition:String,closeCallback:Function},methods:{close:function(){this.$refs.pop.closePop()},login:function(){var e="http://app.duorongcf.com/html/2weima.html",o="http://a.app.qq.com/o/simple.jsp?pkgname=com.yz.dr_app";if(t.wap)if(1==t.weixin)window.location.href=o;else if(1==t.ios_weixin)window.location.href=o;else if(t.qq)window.location.href=o;else if(t.Iphone&&t.weibo)window.location.href=e;else if(t.Iphone){var i=document.createElement("iframe");i.style.display="none",i.src="duorong://",document.body.appendChild(i),setTimeout(function(){document.webkitHidden||(window.location.href=e)},25)}else t.Android&&(location.href="duorongcf://duorong/",setTimeout(function(){window.location.href=e},20));else t.login()}}}}).call(e,o(0))},42:function(t,e){},49:function(t,e,o){o(42);var i=o(4)(o(34),o(56),null,null);i.options.__file="E:\\work\\pc\\activity\\app\\2017ChildrensDay\\src\\pop\\login.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] login.vue: functional components are not supported with templates, they should use render functions."),t.exports=i.exports},56:function(t,e,o){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("pop",{ref:"pop",attrs:{transition:t.transition,closeCallback:t.closeCallback,superClass:"loginpop"}},[o("div",{slot:"header"}),t._v(" "),o("div",{staticClass:"content",slot:"body"},[o("h2",[t._v("恭喜您获取一份大礼包")]),t._v(" "),o("p",[t._v("请登录至多融APP平台或者官网查看您的优惠信息")])]),t._v(" "),o("div",{staticClass:"submit",slot:"footer"},[o("div",{staticClass:"btn",on:{click:t.login}},[t._v("登录APP")])])])},staticRenderFns:[]},t.exports.render._withStripped=!0}});