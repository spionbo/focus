webpackJsonp([23],{176:function(t,a,i){"use strict";(function(t,e){function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(a,"__esModule",{value:!0});var o=i(5),d=i(2),n=s(d);a.default={props:{transition:String},data:function(){return{isclick:!0,resultNum:null,resultName:"",showModal:!0}},mounted:function(){t.setImgSize()},methods:{closePropagtion:function(t){t.stopPropagation()},submit:function(){function a(){u.removeClass("cur"),r>c&&(r=0),u.eq(l[r]).addClass("cur"),r++}function s(){g++,p+=20,u.removeClass("cur"),r>c&&(r=0),u.eq(l[r]).addClass("cur"),r==d.resultNum&&g>20?(d.isclick=!0,d.closePop(function(){(0,n.default)("winning1",{props:{name:d.resultName}})})):(r++,setTimeout(s,p))}var d=this,r=0,c=7,l=[0,1,2,5,8,7,6,3],u=e("#PrizeDo .li"),m=0;if(d.isclick){t.ajax({url:o.raffle,data:{uid:t.uid},callback:!0,success:function(t){if(t.flag){var a={"双立人刀具套装":4,"1000元京东购物卡":5,"200元京东购物卡":6,"小米移动电源":3,"100元京东购物卡":7,"50元京东购物卡":2,"30元京东购物卡":1,"10元京东购物卡":0};d.resultName=t.map.prizeName,d.resultNum=a[d.resultName]}else d.closePop(),i.e(10).then(function(a){var e=i(161);new e({title:"",width:"70%",content:"<center>"+(t.errorMsg||"操作失败，请联系客服！")+"</center>",okBtn:!0,cancelBtn:!1,okTxt:"确定",timing:"errorcur"})}.bind(null,i)).catch(i.oe)}}),d.isclick=!1,m=setInterval(a,80);var p=100,g=0;setTimeout(function(){clearInterval(m),s()},3e3)}},showPop:function(t){this.showModal=!0,"function"==e.type(t)&&setTimeout(t,550)},closePop:function(a){this.showModal=!1,t.getPop(a),bus.$emit("closePopEvent")}}}}).call(a,i(0),i(4))},205:function(t,a){},215:function(t,a,i){i(205);var e=i(26)(i(176),i(243),null,null);e.options.__file="E:\\work\\pc\\activity\\app\\dafuwen\\src\\pop\\prizedoPlay.vue",e.esModule&&Object.keys(e.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),e.options.functional&&console.error("[vue-loader] prizedoPlay.vue: functional components are not supported with templates, they should use render functions."),t.exports=e.exports},243:function(t,a,i){t.exports={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("transition",{attrs:{name:t.transition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],staticClass:"modal-mask",class:t.superClass,on:{click:t.closePop}},[i("div",{staticClass:"modal-wrapper prizedo img-size",attrs:{"data-width":"624","data-height":"678"},on:{click:t.closePropagtion}},[i("div",{staticClass:"close img-size",attrs:{"data-width":"79","data-height":"79"},on:{click:t.closePop}}),t._v(" "),i("div",{staticClass:"content img-size",attrs:{id:"PrizeDo","data-paddingTop":"117","data-paddingLeft":"38"}},[i("div",{staticClass:"li img-size",attrs:{"data-width":"165","data-height":"153","data-marginLeft":"14","data-marginTop":"16"}},[i("div",{staticClass:"img img1 img-size",attrs:{"data-width":"115","data-height":"74"}}),t._v(" "),i("p",[t._v("10元京东购物卡")])]),t._v(" "),i("div",{staticClass:"li img-size",attrs:{"data-width":"165","data-height":"153","data-marginLeft":"14","data-marginTop":"16"}},[i("div",{staticClass:"img img2 img-size",attrs:{"data-width":"115","data-height":"74"}}),t._v(" "),i("p",[t._v("30元京东购物卡")])]),t._v(" "),i("div",{staticClass:"li img-size",attrs:{"data-width":"165","data-height":"153","data-marginLeft":"14","data-marginTop":"16"}},[i("div",{staticClass:"img img3 img-size",attrs:{"data-width":"115","data-height":"74"}}),t._v(" "),i("p",[t._v("50元京东购物卡")])]),t._v(" "),i("div",{staticClass:"li img-size",attrs:{"data-width":"165","data-height":"153","data-marginLeft":"14","data-marginTop":"16"}},[i("div",{staticClass:"img img4 img-size",attrs:{"data-width":"115","data-height":"74"}}),t._v(" "),i("p",[t._v("100元京东购物卡")])]),t._v(" "),i("div",{staticClass:"li btn img-size",attrs:{"data-width":"165","data-height":"153","data-marginLeft":"14","data-marginTop":"16"},on:{click:t.submit}}),t._v(" "),i("div",{staticClass:"li img-size",attrs:{"data-width":"165","data-height":"153","data-marginLeft":"14","data-marginTop":"16"}},[i("div",{staticClass:"you img-size",attrs:{"data-width":"109","data-height":"79"}}),t._v(" "),i("p",[t._v("小米移动电源")])]),t._v(" "),i("div",{staticClass:"li img-size",attrs:{"data-width":"165","data-height":"153","data-marginLeft":"14","data-marginTop":"16"}},[i("div",{staticClass:"img img5 img-size",attrs:{"data-width":"115","data-height":"74"}}),t._v(" "),i("p",[t._v("200元京东购物卡")])]),t._v(" "),i("div",{staticClass:"li img-size",attrs:{"data-width":"165","data-height":"153","data-marginLeft":"14","data-marginTop":"16"}},[i("div",{staticClass:"img img6 img-size",attrs:{"data-width":"115","data-height":"74"}}),t._v(" "),i("p",[t._v("1000元京东购物卡")])]),t._v(" "),i("div",{staticClass:"li img-size",attrs:{"data-width":"165","data-height":"153","data-marginLeft":"14","data-marginTop":"16"}},[i("div",{staticClass:"dao img-size",attrs:{"data-width":"131","data-height":"88"}}),t._v(" "),i("p",[t._v("双立人刀具套装")])])])])])])},staticRenderFns:[]},t.exports.render._withStripped=!0},26:function(t,a){t.exports=function(t,a,i,e){var s,o=t=t||{},d=typeof t.default;"object"!==d&&"function"!==d||(s=t,o=t.default);var n="function"==typeof o?o.options:o;if(a&&(n.render=a.render,n.staticRenderFns=a.staticRenderFns),i&&(n._scopeId=i),e){var r=n.computed||(n.computed={});Object.keys(e).forEach(function(t){var a=e[t];r[t]=function(){return a}})}return{esModule:s,exports:o,options:n}}},5:function(t,a,i){"use strict";var e="";t.exports={status:e+"/activity/tycoon/status.do",participate:e+"/activity/tycoon/participate.do",getlucky:e+"/activity/tycoon/lucky-bag.do",setlucky:e+"/activity/tycoon/lucky-bag/get.do",welcome:e+"/activity/tycoon/welcome.do",map:e+"/activity/tycoon/on-map.do",dicePlay:e+"/activity/tycoon/dice-play.do",records:e+"/activity/tycoon/member-records.do",contact:e+"/activity/tycoon/contact-add.do",raffle:e+"/activity/tycoon/raffle.do",realPrizes:e+"/activity/tycoon/real-prizes.do",contactGet:e+"/activity/tycoon/contact-get.do"}}});