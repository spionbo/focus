webpackJsonp([7,8],{28:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{superClass:String,transition:String,closeCallback:Function,width:Number,height:Number},data:function(){return{showModal:!0}},mounted:function(){t.setImgSize()},methods:{closePropagtion:function(t){t.stopPropagation()},showPop:function(t){this.showModal=!0,"function"==$.type(t)&&setTimeout(t,500)},closePop:function(){var t=this;this.showModal=!1,this.closeCallback&&this.closeCallback(),setTimeout(function(){$(t.$el).remove()},510)}}}}).call(e,o(0))},29:function(t,e){},30:function(t,e,o){o(29);var s=o(4)(o(28),o(31),null,null);s.options.__file="E:\\work\\pc\\activity\\app\\2017ChildrensDay\\src\\pop\\pop.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] pop.vue: functional components are not supported with templates, they should use render functions."),t.exports=s.exports},31:function(t,e,o){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:t.transition}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],staticClass:"modal-mask",class:t.superClass,on:{click:t.closePop}},[o("div",{staticClass:"modal-wrapper"},[o("div",{staticClass:"modal-container img-size",attrs:{"data-width":t.width||600,"data-height":t.height||t.auto},on:{click:function(e){t.closePropagtion(e)}}},[t._t("close",[o("div",{staticClass:"close img-size",attrs:{"data-width":"82","data-height":"81","data-top":"-20","data-right":"-20"},on:{click:t.closePop}})]),t._v(" "),o("div",{staticClass:"modal-header"},[o("div",{staticClass:"bg img-size",attrs:{"data-fontSize":"48","data-width":"595","data-height":"123","data-lineHeigh":"120"}},[t._t("header",[t._v("\r\n                            default header\r\n                        ")])],2)]),t._v(" "),o("div",{staticClass:"modal-body"},[o("div",{staticClass:"body-bg img-size",attrs:{"data-marginTop":"-60","data-paddingTop":"80"}},[o("div",{staticClass:"body-cnt"},[t._t("body",[t._v("\r\n                                default body\r\n                            ")])],2),t._v(" "),o("div",{staticClass:"modal-footer"},[t._t("footer",[o("div",{staticClass:"btn img-size",attrs:{"data-width":"327","data-height":"60"}})])],2)])])],2)])])])},staticRenderFns:[]},t.exports.render._withStripped=!0},33:function(t,e,o){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s])}return t},i=o(30),n=s(i),r=o(1),d=s(r),l=o(5);e.default={store:d.default,computed:a({},(0,l.mapState)(["startTime","endTime"])),components:{pop:n.default},props:{transition:String},methods:{close:function(){this.okCallback&&this.okCallback(),this.$refs.pop.closePop()}}}},44:function(t,e){},48:function(t,e,o){o(44);var s=o(4)(o(33),o(58),"data-v-9c2a958e",null);s.options.__file="E:\\work\\pc\\activity\\app\\2017ChildrensDay\\src\\pop\\explain.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] explain.vue: functional components are not supported with templates, they should use render functions."),t.exports=s.exports},58:function(t,e,o){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("pop",{ref:"pop",attrs:{transition:t.transition,superClass:"explain",height:"800",closeCallback:t.closeCallback}},[o("div",{slot:"header"},[t._v("\r\n        活动规则\r\n    ")]),t._v(" "),o("div",{slot:"body"},[o("div",{staticClass:"content"},[o("dl",[o("dd"),t._v(" "),o("dt",[o("b",[t._v("1、")]),t._v("活动时间："+t._s(t.startTime)+" - "+t._s(t.endTime))])]),t._v(" "),o("dl",[o("dd",[t._v("2、赚金币")]),t._v(" "),o("dt",[t._v("活动期间，投资20天及以上产品即可获得金币。金币=投资金额*期限/360")])]),t._v(" "),o("dl",[o("dd",[t._v("3、要礼物")]),t._v(" "),o("dt",[o("p",[t._v("\r\n                        ① 活动期间，每天1次免费机会，可向“马里奥”要礼物，礼物为优惠券，最高1.5%加息券或100元红包，最低0.5%加息券或5元红包。\r\n                    ")]),t._v(" "),o("p",[t._v("\r\n                         ② 花费不同数量的金币，可自行选择向“哆啦A梦”“加菲猫”“喜羊羊”“麦兜”要礼物，最高及最低礼物各有不同，具体参见活动页面\r\n                    ")])])]),t._v(" "),o("dl",[o("dd",[t._v("4、礼物发放")]),t._v(" "),o("dt",[o("p",[t._v("① 优惠券，将即时发放到您的多融账户，可登录APP或官网查看并使用")]),t._v(" "),o("p",[t._v("② 实物奖品，将在活动结束后的15个工作日内完成发放，礼品以收到的实物为准")])])]),t._v(" "),o("dl",[o("dd",[t._v("5、活动最终解释权归多融财富所有")]),t._v(" "),o("dt")])])]),t._v(" "),o("div",{staticClass:"submit img-size",slot:"footer"},[o("div",{staticClass:"btn img-size",attrs:{"data-fontSize":"30","data-width":"494","data-height":"85","data-lineHeight":"85"},on:{click:t.close}},[t._v("\r\n            我知道了\r\n        ")])])])},staticRenderFns:[]},t.exports.render._withStripped=!0}});