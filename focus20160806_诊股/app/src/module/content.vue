<template>
	<Loadding></Loadding>
	<top :status='showStatus' :month='month' :day='day' :time='time' :time-text='timeText' ></top>
	<article class="member-bg">
		<div class="member">
			<div class="topbg"></div>
			<div class="bg">
				<div class="title">
					<div class="jian-left"></div>
					<h2>疯狂诊股团</h2>
					<div class="jian-right"></div>
				</div>
				<div class="content">
					<ul>
						<li v-for='item in firstList' v-bind:style="{backgroundImage:'url('+item.pic+')'}"><!--  transition="item" -->
							<div class="mask-bg"></div>
							<div class="cnt">
								<div class="name">{{item.name}}</div>
								<div class="type">{{item.type}}</div>
								<div class="submit"><div class="btn" v-on:click='questions($event,item.name,item.id)'>马上问股</div></div>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="bg1">
				<div class="content content1">
					<ul>
						<li v-for='item in secondList' v-bind:style="{backgroundImage:'url('+item.pic+')'}"><!--  transition="item" -->
							<div class="mask-bg"></div>
							<div class="cnt">
								<div class="name">{{item.name}}</div>
								<div class="type">{{item.type}}</div>
								<div class="submit"><div class="btn" v-on:click='questions($event,item.name,item.id)'>马上问股</div></div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<draw :status='showStatus'></draw>
		<div class="comment" v-show='ask'>
			<div class="content-bg">
				<div class="content-blue">
					<div class="title">
						<h2>精彩回答</h2>
						<div class="line"></div>
					</div>
					<div class="content">
						<div class="item" v-for='item in ask'>
							<i class="q">Q</i>
							<i class="dian"></i>
							<h3>{{item.askContent}}</h3>
							<div class="text"><!--  riseDrop 0 未选  1看涨 <0 看跌 -->
								<span class="z" v-show='item.riseDrop==1'><i></i>看涨</span>
								<span class="d" v-show='item.riseDrop<0'><i></i>看跌</span>
								{{item.answerContent}}
								<div class="showmore" v-show='item.showmore' @click='showList(item)'>更多</div>
							</div>
							<div class="user">
								<div class="line1"></div>
								<div class="info">
									<img v-bind:src="item.userInfo.headImage">
									<div class="info-msg">
										<h4>{{item.userInfo.userName}}</h4>
										<time>{{item.answerTime | getTime }}</time>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="aside">
			<div class="content-bg">
				<div class="content-cnt">
					<h2><span class='name'>● 还不过瘾看这里 ●</span></h2>
					<div class="content">
						参与本次活动还不过瘾，还有更多优秀专家、老师在爱投顾平台上免费诊股，更多请关注“爱投顾”—   <a v-on:click='askHome'>问股</a>  板块，免费快速问股。
					</div>
				</div>
			</div>
		</div>
	</article>
	<div class='hide'>
		<img class='layout-img' data-src='http://i0.jrjimg.cn/zqt-red-1000/focus/focus20160806/app/share.png'>
		<img class='layout-img' data-src='http://i0.jrjimg.cn/zqt-red-1000/focus/focus20160806/app/box.png'>
		<img class='layout-img' data-src='http://i0.jrjimg.cn/zqt-red-1000/focus/focus20160806/app/chi.png'>
		<img class='layout-img' data-src='http://i0.jrjimg.cn/zqt-red-1000/focus/focus20160806/app/deng.png'>
		<img class='layout-img' data-src='http://i0.jrjimg.cn/zqt-red-1000/focus/focus20160806/app/draw.png'>
		<img class='layout-img' data-src='http://i0.jrjimg.cn/zqt-red-1000/focus/focus20160806/app/draw-btn.png'>
		<img class='layout-img' data-src='http://i0.jrjimg.cn/zqt-red-1000/focus/focus20160806/app/jian.png'>
		<img class='layout-img' data-src='http://i0.jrjimg.cn/zqt-red-1000/focus/focus20160806/app/num.png'>
		<img class='layout-img' data-src='http://i0.jrjimg.cn/zqt-red-1000/focus/focus20160806/app/text1.png'>
		<img class='layout-img' data-src='http://i0.jrjimg.cn/zqt-red-1000/focus/focus20160806/app/top1.jpg'>
		<img class='layout-img' data-src='http://i0.jrjimg.cn/zqt-red-1000/focus/focus20160806/app/top2.jpg'>
		<img class='layout-img' data-src='http://itg1.jrjimg.cn/201608/25/editor_upload/editor_upload_14721052394271.jpg'>
		<img class='layout-img' data-src='http://itg1.jrjimg.cn/201608/25/editor_upload/editor_upload_14721052612971.jpg'>
		<img class='layout-img' data-src='http://itg1.jrjimg.cn/201608/25/editor_upload/editor_upload_14721052732171.jpg'>
		<img class='layout-img' data-src='http://itg1.jrjimg.cn/201608/25/editor_upload/editor_upload_14721052880971.jpg'>
		<img class='layout-img' data-src='http://itg1.jrjimg.cn/201608/25/editor_upload/editor_upload_14721053039671.jpg'>
		<img class='layout-img' data-src='http://itg1.jrjimg.cn/201608/25/editor_upload/editor_upload_14721053916941.jpg'>
		<img class='layout-img' data-src='http://itg1.jrjimg.cn/201608/25/editor_upload/editor_upload_14721054085161.jpg'>
		<img class='layout-img' data-src='http://itg1.jrjimg.cn/201608/25/editor_upload/editor_upload_14721054265161.jpg'>
		<img class='layout-img' data-src='http://itg1.jrjimg.cn/201608/25/editor_upload/editor_upload_14721054427261.jpg'>
		<img class='layout-img' data-src='http://itg1.jrjimg.cn/201608/25/editor_upload/editor_upload_14721054579851.jpg'>
		<img class='layout-img' data-src='http://itg1.jrjimg.cn/201608/25/editor_upload/editor_upload_14721054675461.jpg'>
		<img class='layout-img' data-src='http://itg1.jrjimg.cn/201608/25/editor_upload/editor_upload_14721054830161.jpg'>
		<img class='layout-img' data-src='http://itg1.jrjimg.cn/201608/25/editor_upload/editor_upload_14721054971261.jpg'>
		<img class='layout-img' data-src='http://itg1.jrjimg.cn/201608/25/editor_upload/editor_upload_14721055793751.jpg'>
		<img class='layout-img' data-src='http://itg1.jrjimg.cn/201608/25/editor_upload/editor_upload_14721055941751.jpg'>
		<img class='layout-img' data-src='http://itg1.jrjimg.cn/201608/25/editor_upload/editor_upload_14721056061941.jpg'>
		<img class='layout-img' data-src='http://itg1.jrjimg.cn/201608/25/editor_upload/editor_upload_14721056181251.jpg'>
		<img class='layout-img' data-src='http://itg1.jrjimg.cn/201608/25/editor_upload/editor_upload_14721056314151.jpg'>
		<img class='layout-img' data-src='http://itg1.jrjimg.cn/201608/25/editor_upload/editor_upload_14721056427751.jpg'>
		<img class='layout-img' data-src='http://itg1.jrjimg.cn/201608/25/editor_upload/editor_upload_14721056540451.jpg'>
	</div>
</template>
<script>
	import $ from 'webpack-zepto';
	import Vue from 'vue';
	//import VueAnimatedList from '../js/vue-animated-list';
	import Loadding from './loading.vue';
	import top from './top.vue';
	import draw from './draw.vue';
	import Time from '../js/Countdown.js';
	import slider from '../js/slider.js';
	import L from '../js/loadding.js';
	import T from '../js/global.js';
	import callApp from '../js/callApp.js';
	import WeChatShare from '../js/wechat-share.js'; 
	import {pop} from '../js/draw.js';
	import loadJs from 'load-js';

	//Vue.use(VueAnimatedList);

	export default {
		name : 'content',
		components : {
			Loadding,
			top,
			draw
		},
		props : {
			month : String,
			day : String,
			time : String
		},
		data (){
			return {
				timeText : initObject.startText,
				showStatus : true ,
				firstList : initObject.member[0].slice(0,3) , 
				secondList : initObject.member[0].slice(3) , 
				ask : initObject.ask , 
				question : 0 , 
				login : loginStatus , 
				dcs : dcsMultiTrack 
			}
		},
		ready(){
			var self = this;
			T.init();	
			L(()=>{
				Time(
					this.timeElement, 
					initObject,
					function(){ //活动开始时间
						self.timeText = initObject.endText;
						self.question = 1;
					},
					function(){ //抽奖时间
						self.timeText = initObject.drawEndText;
						self.question = 2;
					},
					function(){//活动结束时间
						self.showStatus = false;
						self.question = 3;
					}
				);
				slider(self , {
					left : $('.member .jian-left'),
					right : $('.member .jian-right'),
					li :  '.member li',
					data : initObject.member
				});

				WeChatShare({
					shareTitle: shareInfo.title,
					shareLink: shareInfo.url,
					shareDesc: shareInfo.content,
					shareImg: shareInfo.pic
		     	});
			});
			if(!self.ask.length){
				loadJs('http://itougu.jrj.com.cn/ques/campaign_answers.js').then(function(){
					self.ask = window.answersData;
					var  width = window.screen.width
						,len = 0 ;

					if( width>=360 && width<=667 && width !=414 && width != 736){ // iphone6
						len = 75
					}else if( width>=414 && width<=736 ){ // iphone6 plus
						len = 85
					}else{//iphone4
						len = 55;
					}
					$.each(self.ask,function( i , obj ){
						var _len = len
						if( obj.riseDrop!=0 ){
							_len -= 12;
						}
						obj.answerContentStr = obj.answerContent;
						if(T.getByteLen(obj.answerContent)>_len){
							obj.answerContent = T.getByteVal(obj.answerContent,_len)+'...';
							obj.showmore = true;
						}else{
							obj.showmore = false;
						}
					});
				})
			}
		},
		filters : {
			getTime : function( now ){
				now = parseInt(now);
				function add0(m){return m<10?'0'+m:m }
				var time = new Date(now);
				//var y = time.getFullYear();
				var m = time.getMonth()+1;
				var d = time.getDate();
				var h = time.getHours();
				var mm = time.getMinutes();
				//var s = time.getSeconds();
				return add0(m)+'/'+add0(d)+' '+add0(h)+':'+add0(mm)//+':'+add0(s);
			}
		},
		methods : {
			questions : function( event , name , id ){
				var self = this;
				T.btnEvent.call( event.target , function(){
					callApp.login(self.login,function(){
						if(self.question == 0 ){ // 未到抽奖时间 ，不能抽奖
							pop('活动还未开始！请在活动开始后进行问股！')
						}else{
							callApp.ask( name , id);
						}
					});
				});
				self.dcs('DCS.dcsuri', 'ITOUGU_focus20160806_ZHENGU', 'WT.ti', 'ITOUGU_focus20160806_ZHENGU');
			},
			askHome : function(event){
				var self = this;
				T.btnEvent.call( event.target , function(){
					callApp.login(self.login,callApp.ask);
				});
			},
			showList : function( obj ){ //展示更多
				obj.answerContent = obj.answerContentStr;
				obj.showmore = false;
				$(event.target).hide();
			}
		},
		events : {
			'timeElement' : function( ele ){
				this.timeElement = $(ele);
			}
		}
	}
</script>
<style scoped>


.member-bg{ background: #06204f; overflow: hidden; }
.member{ margin: 0 20px; padding-top: 10px; }
.member .title{ height: 40px; padding-top: 5px; display: box; display: -webkit-box; box-orient: horiznotal;  -webkit-box-orient:horiznotal; box-align:center; -webkit-box-align:center; box-pack: center;-webkit-box-pack: center;}
.member h2{ font-size: 1.28rem; }
.member .title .jian-left{width: 0; height: 0; margin-right: 10px; border-top: 10px solid transparent; border-right: 15px solid #f6a9bd; border-bottom: 10px solid transparent;}
.member .title .jian-right{ width: 0; height: 0; margin-left: 10px; border-top: 10px solid transparent; border-left: 15px solid #f6a9bd; border-bottom: 10px solid transparent;}
.member .topbg{ height: 50px; background: #ff6784; border-top-left-radius: 15px; border-top-right-radius: 15px; }
.member .bg{ margin-top:-40px; background: #e40a42; border-radius: 15px; }
.member .bg1{ margin: 0 30px; padding: 0 20px; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; background:#e40a42; }
.member ul{ width: 100%; display: box; display: -webkit-box; padding: 0 5px; box-orient: horiznotal;  -webkit-box-orient:horiznotal; box-sizing: border-box; -webkit-box-sizing: border-box; }
.member ul li{ position: relative; z-index: 1; height: 130px; background-repeat: no-repeat; background-size: cover; background-position: center 0; box-flex: 1; -webkit-box-flex: 1;  margin-right: 5px; text-align: center; overflow:hidden;
	display: box; display: -webkit-box; 
	box-orient: vertical; -webkit-box-orient: vertical;
	box-pack: end; -webkit-box-pack: end;
	border-radius: 5px;
}

.member ul li:last-child{ margin-right: none; }
.member li .name{ color: #ffcc21; font-size: .75rem; font-weight: bold; text-align: center;}
.member li .type{ color: #fff; font-size: .6875rem; }
.member li .btn{ display: inline-block; height: 22px; line-height: 22px; padding: 0px 15px; color: #fff; font-size: .6875rem; background: #eea00c; border-radius: 5px;}
.member .mask-bg{ position: absolute; z-index:4; left: -150%; bottom: -20px; width: 300%; height: 50%; padding-top: 10px; background: rgba(0,0,0,.5); transform: rotate(160deg); -webkit-transform:rotate(160deg);}
.member .cnt{ position: relative; z-index: 5; padding-bottom: 10px; }
.member .content{ padding-bottom: 10px; }
.member .content1{ padding-top: 10px; }


.comment{ position: relative; z-index: 1; padding: 10px; background: #bc0234; }
.comment .content-bg{ border: 5px solid rgba(6, 32, 79, .3); background: rgba(6, 32, 79, .5) }
.comment .content-blue{ padding: 5px; background: #06204f; }
.comment .line{ height: 3px; background: url('http://i0.jrjimg.cn/zqt-red-1000/focus/focus20160806/app/chi.png') 0 -4px; background-size: auto 8px;  }
.comment .content{ }
.comment .title h2{height: 33px; line-height: 33px; background: #2a5299; color: #fff; font-size: .9375rem; text-align: center; }
.comment .item{ position: relative; z-index: 1; padding-top: 10px;}
.comment .item .text{ position: relative; z-index: 2; padding-top: 5px; padding-bottom: 5px; border-left: 1px solid #97cef1; padding-left: 15px; line-height: 20px; color: #fff; font-size: .75rem; font-weight: bold; overflow: hidden; word-break:break-all; }
.comment .item .text .showmore{ position: absolute; right: 15px; bottom: 5px; font-weight: normal; background: rgba(255,255,255,.2);    padding: 0 10px; border-radius: 9px;}
.comment i.q{ position:absolute; left:-9px; top:5px; width: 13px; height: 13px; border: 4px solid #112f65; line-height: 13px;  text-align:center; font-size: .75rem; background: #97cef1; color: #97cef1; border-radius: 100%; color: #06204f; }
.comment i.dian{ position: absolute; left: -6px; top: 44px; z-index: 5; width: 5px; height: 5px; background: #97cef1; border: 4px solid #112f65; border-radius: 100%; }
.comment h3{  line-height: 22px; padding-left: 15px; border-left: 1px solid #97cef1; font-size: .75rem; color: #97cef1; word-break:break-all; word-wrap:break-word; }

.comment .user{ padding-left: 15px;  display: box; display: -webkit-box; width: 100%; box-orient: horzinotal; -webkit-box-orient: horzinotal;  box-shadow: border-box; -webkit-box-sizing:border-box;}
.comment .line1{ box-flex: 1; -webkit-box-flex: 1; height: 25px; border-bottom: 1px dashed #6e9dc3; }
.comment .info img{ float: left; width: 30px; height:30px; border-radius: 100%; margin-right: 5px; }
.comment .info .info-msg{ padding-left: 35px; line-height: 15px; }
.comment .info h4{ font-size: .75rem; font-weight: normal; }
.comment time{ font-size: .625rem; color: #97cef1; font-weight: normal;}

.z{ color: #ff2323; }
.d{ color: #38ff23 }
.z i,.d i{ display: inline-block; width: 10px; height: 12px; vertical-align: middle; margin-top: -2px; background: url('http://i0.jrjimg.cn/zqt-red-1000/focus/focus20160806/app/jian.png') no-repeat; background-size: 10px auto; }
.d i{ background-position: 0 bottom; }

.aside{ padding: 10px 10px 30px; background: #bc0234;}
.aside .content-bg{ border: 5px solid rgba(139, 139, 191, .4); background: rgba(139, 139, 191, .56); padding: 5px; background-clip: padding-box; -webkit-background-clip: padding-box;}
.aside .content-cnt{ padding: 10px; background: #8b8bbf; }
.aside h2{ text-align: center; }
.aside h2 .name{ display: inline-block; height: 33px; line-height: 33px; padding: 0 15px; border-radius: 10px; font-size: .9375rem; font-weight: bold; background: #7171b4;  }
.aside .content{ margin-top: 10px; padding: 10px; background: #7171b4; font-size: .75rem; }
.aside .content a{ display: inline-block; padding: 1px 5px; background: #f5c519;  }




@-webkit-keyframes flip {
  from {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  40% {
    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  50% {
    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  80% {
    -webkit-transform: perspective(400px) scale3d(.95, .95, .95);
    transform: perspective(400px) scale3d(.95, .95, .95);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
}

@keyframes flip {
  from {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  40% {
    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  50% {
    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  80% {
    -webkit-transform: perspective(400px) scale3d(.95, .95, .95);
    transform: perspective(400px) scale3d(.95, .95, .95);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
}

.animated.flip {
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
  -webkit-animation-name: flip;
  animation-name: flip;
  animation-duration: 1s;
  -webkit-animation-duration: 1s;
}
</style>