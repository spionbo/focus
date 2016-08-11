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
						<li v-for='item in firstList' v-bind:style="{backgroundImage:'url('+item.pic+')'}">
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
						<li v-for='item in secondList' v-bind:style="{backgroundImage:'url('+item.pic+')'}">
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
		<div class="comment">
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
							<h3>{{item.title}}</h3>
							<div class="text">
								<span class="z" v-show='item.zhang'><i></i>看涨</span>
								<span class="d" v-show='!item.zhang'><i></i>看跌</span>
								{{item.content}}
							</div>
							<div class="user">
								<div class="line1"></div>
								<div class="info">
									<img v-bind:src="item.userImg">
									<div class="info-msg">
										<h4>{{item.userName}}</h4>
										<time>{{item.time}}</time>
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
	</div>
</template>
<script>
	import $ from 'webpack-zepto';
	import Loadding from './loading.vue';
	import top from './top.vue';
	import draw from './draw.vue';
	import Time from '../js/Countdown.js';
	import slider from '../js/slider.js';
	import L from '../js/loadding.js';
	import T from '../js/global.js';
	import callApp from '../js/callApp.js';
	import WeChatShare from '../js/wechat-share.js'; 

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
				ask : initObject.ask
			}
		},
		ready(){
			var self = this;
			T.init();	
			L(()=>{
				Time(
					this.timeElement, 
					initObject.startTime,
					initObject.endTime,
					function(){
						self.timeText = initObject.endText;
					},
					function(){
						self.showStatus = false;
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
		},
		methods : {
			questions : function( event , name , id ){
				//console.dir( event.target )
				T.btnEvent.call( event.target , function(){
					if(loginStatus == 0 ){
						callApp.ask( name , id);
					}else if(loginStatus == -1 ){
						callApp.login(-1)
					}else if( loginStatus == -2 ){
						callApp.login(-2)
					}
				});
			},
			askHome : function(event){
				T.btnEvent.call( event.target , function(){
					if(loginStatus == 0 ){
						callApp.ask();
					}else if(loginStatus == -1 ){
						callApp.login(-1)
					}else if( loginStatus == -2 ){
						callApp.login(-2)
					}
				});
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
.comment .item .text{ position: relative; z-index: 2; padding-top: 5px; padding-bottom: 5px; border-left: 1px solid #97cef1; padding-left: 15px; line-height: 20px; color: #fff; font-size: .75rem; font-weight: bold; }
.comment i.q{ position:absolute; left:-9px; top:5px; width: 13px; height: 13px; border: 4px solid #112f65; line-height: 13px;  text-align:center; font-size: .75rem; background: #97cef1; color: #97cef1; border-radius: 100%; color: #06204f; }
.comment i.dian{ position: absolute; left: -6px; top: 44px; z-index: 5; width: 5px; height: 5px; background: #97cef1; border: 4px solid #112f65; border-radius: 100%; }
.comment h3{ height: 25px; line-height: 22px; padding-left: 15px; border-left: 1px solid #97cef1; font-size: .75rem; color: #97cef1; }

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