<template>
	<div class="start-dome" v-show='status'>
		<div class="draw img-size" data-height='461' data-paddingLeft='95' data-paddingTop='105'>
			<div class="asknum img-size" data-width='159' data-height='158' data-right='20'></div>
			<section class="luck-draw">
				<div class="cnt">
					<h2>已产生问股数<em>780</em></h2>
					<div class="line redline">
						<div class="num-left"></div>
						<div class="num"></div>
						<div class="num-right"></div>
					</div>
					<h2 class="blue">已产生诊股数<em>500</em></h2>
					<div class="line blue blueline">
						<div class="num-left"></div>
						<div class="num"></div>
						<div class="num-right"></div>
					</div>
				</div>
				<div class="submit">
					<div class="btn"></div>
				</div>
			</section>
		</div>
		<section class="active-info">
			<div class="bg">
				<h2>
					<i></i>
					用户集体冲击
					<em>"1000个问股数"</em>
					大关！
				</h2>
				<div class="cnt">
					活动结束时，问股数若达到1000，所有参与用户将获得“幸运大抽奖”机会，奖品：5根猴年金条。反之，问股数未达到1000，抽奖环节取消。
				</div>
			</div>
		</section>
		<article class="reward-about">
			<div class="red-bg"></div>
			<div class="contentbar">
				<div class="title">
					<div class="gap"></div>
					<div class="name">● 奖励规则 ●</div>
					<div class="gap"></div>
					<div class="line"></div>
				</div>
				<div class="content">
					<div class="text">
						<i class="num_1"></i>
						<p>
							参与用户集体冲击“1000个问股数”大关。活动期间，问股数达到1000，所有参与用户将获得“幸运大抽奖”机会，奖品：5个纯金金条。反之，问股数未达到1000，抽奖环节取消。
						</p>
					</div>
					<div class="text">
						<i class="num_2"></i>
						<p>
							活动结束后，站方将根据“问股”被采纳数、回答数，回答质量等指标评出本次诊股活动优秀老师3名，授予“诊股高手”称号。站方将会把此称号加在该老师的认证标签处，并在站内进行宣传推广。
						</p>
					</div>
					<div class="text">
						<i class="num_3"></i>
						<p>
							对于在活动期间内没有得到回复的用户，站方将额外给予补偿。（补偿：面值100元的代金券1张，只限于在使用期限内购买活动推荐老师的内参使用）
						</p>
					</div>
				</div>
				<div class="title">
					<div class="gap"></div>
					<div class="name">● 问股小提示 ●</div>
					<div class="gap"></div>
					<div class="line"></div>
				</div>
				<div class="content">
					<div class="text">
						<i class="num_1"></i>
						<p>
							请在活动前准备好要提问的问题，越早提问，回复越早。
						</p>
					</div>
					<div class="text">
						<i class="num_2"></i>
						<p>
							一次只问一只股票，将你的仓位、成本价等尽可能详细的给出，方便老师针对你的情况给出准确的解答
						</p>
					</div>
					<div class="text">
						<i class="num_3"></i>
						<p>
							用户在老师回答后，需要根据老师的回答“满意与否”进行采纳。您“是否采纳”将直接影响老师的评比，请给予您喜欢的老师宝贵的支持。
						</p>
					</div>
					<div class="text">
						<i class="num_3"></i>
						<p>
							请尽量在活动结束半小时前完成所有问股，这样即便老师晚些回复，也不耽误您正常休息。
						</p>
					</div>
				</div>
				<div class="title">
					<div class="gap"></div>
					<div class="name">● 活动规则 ●</div>
					<div class="gap"></div>
					<div class="line"></div>
				</div>
				<div class="content">
					<div class="text">
						<i class="num_1"></i>
						<p>
							活动期间内，用户每人最多问2个问题。
						</p>
					</div>
					<div class="text">
						<i class="num_2"></i>
						<p>
							站方将特邀20位老师组成“诊股团”进行专场诊股，用户通过“问股”按钮在活动页对指定老师进行提问即可。老师回答后，用户可以根据老师的回答，选择“满意与否”进行采纳。
						</p>
					</div>
					<div class="text">
						<i class="num_3"></i>
						<p>
							7月6日举行诊股活动，用户参与的时间为19:00-21:00，老师诊股的时间为19:00-21:30。
						</p>
					</div>
				</div>
				<div class="expain">
					本次活动最终解释权归爱投顾所有。用户如有疑问可拨打客服电话咨询活动详情：4400-1661188
				</div>
			</div>
		</article>
	</div>
	<div class="end-dome" v-show='!status'>
		<div class="draw img-size" data-height='461' data-paddingLeft='95' data-paddingTop='105'>
			<section class="draw-old">
				<ul>
					<li>本次活动参与人数<em>{{userInfo.participate}}</em>人</li>
					<li>本次活动共产生了<em>{{userInfo.askNum}}</em>条问股数，共<em>{{userInfo.reply}}</em>条问股得到回复，<em>{{userInfo.percent}}%</em>回答，真正做到有问必答！</li>
				</ul>
				<div class="text img-size" data-height='38'></div>
			</section>
		</div>
		<section class="draw-member">
			<ul>
				<li v-for='item in list'>
					<div class="img"><img v-bind:src='item.src'></div>
					<div class="name">{{item.name}}</div>
				</li>
			</ul>
		</section>
		<article class="reward-about member-author">
			<div class="red-bg"></div>
			<div class="contentbar">
				<div class="tit">
					<h2>幸运大奖获得者</h2>
					<div class="line1"></div>
				</div>
				<div class="content-user">
					<ul>
						<li v-for='item in luck_list'>
							<div class="img"><img v-bind:src='item.src'></div>
							<div class="name">{{item.name}}</div>
						</li>
					</ul>
				</div>
				<div class="content">
					<h2>以上5名获奖用户将获得每人一根猴年金条奖励。</h2>
					<p>活动奖品将在活动结束后收到截图后的五个工作日内统一发放，爱投顾工作人员将通过您注册填写的手机号与您取得联系，请务必保持手机服务状态。</p>
				</div>
			</div>
		</article>
	</div>
</template>
<script>
	import $ from 'webpack-zepto';
	import {start} from '../js/draw.js';
	import T from '../js/global.js';
	export default {
		name : 'draw',
		props : {
			status: Boolean
		},
		data(){
			return {
				list :  initObject.drawMember.slice(0,3),
				luck_list :  initObject.drawMember.slice(3),
				userInfo : initObject.activityNumber,
				askNum : 0 , //问股数
				zhenNum : 0  //诊股数
			}
		},
		ready(){
			var self = this;
			T.setHtml5();
			function updateNum(){
				if( !self.status) return;
				self.askNum = initObject.draw.askNum
				self.zhenNum = initObject.draw.zhenguNum;
				self.askNum = self.askNum>=1000?1000:self.askNum;
				self.zhenNum = self.zhenNum>=1000?1000:self.zhenNum;

				if( self.askNum==1000 ){
					start('.luck-draw .submit .btn',self.$parent.question);
				}

				var blueline = $('.blueline .num'),
					line =$('.redline'),
					left = line.find('.num-left'),
					right = line.find('.num-right'),
					width = line.width() - left.width() - right.width() - 15,
					askWidth = self.askNum/1000*width,
					zhenWidth = self.zhenNum/1000*width;

				line.find('.num').css3({width: askWidth+'px',transitionDuration:'.5s'});
				blueline.css3({width: zhenWidth+'px',transitionDuration:'.5s'});

			}

			updateNum();

		}
	}
</script>
<style scoped>
.start-dome,.end-dome{ background: #f2e8c3; overflow: hidden; }

.draw{ position: relative; z-index: 1; background: url('http://i0.jrjimg.cn/zqt-red-1000/focus/focus20160806/app/box.png') #06204f no-repeat; background-size: 100% auto; box-sizing: border-box; -webkit-box-sizing:border-box;}

.asknum{ position: absolute; top: 0; background: url('http://i0.jrjimg.cn/zqt-red-1000/focus/focus20160806/app/asknum.png'); background-size: contain; }

.luck-draw .submit{ position: absolute; z-index: 2; left: 0; right: 0; bottom: 0; width: 100%; text-align: center; }
.luck-draw .btn{ width: 64px; height: 203px; margin: 0 auto; background: url('http://i0.jrjimg.cn/zqt-red-1000/focus/focus20160806/app/draw-btn.png') no-repeat; background-size: auto 64px; }
.luck-draw .btn.enter{ background-position: -106px 0; }
.luck-draw .btn.unbind{ background-position: right 0; }
.luck-draw h2{ font-size: .75rem; color: #fe7800; padding-left: 10px; }
.luck-draw h2.blue{ color: #609ee5;  }
.luck-draw h2 em{ font-size: .9375rem; }
.luck-draw .line{ width: 280px; height: 31px; padding: 12px 0 0 9px; background: url('http://i0.jrjimg.cn/zqt-red-1000/focus/focus20160806/app/draw.png') no-repeat; background-size: 280px auto; 
	box-sizing: border-box; -webkit-box-sizing: border-box;
}
.luck-draw .line.blue{ background-position: 0 -31px; }
.luck-draw .num-left,.luck-draw .num-right,.luck-draw .num{ float:left; width:12px; height: 11px;
background: url('http://i0.jrjimg.cn/zqt-red-1000/focus/focus20160806/app/draw.png') 0 -64px no-repeat; background-size: 280px auto;
}
.luck-draw .num-right{ float: left; width: 7px; background-position: -36px -64px;}
.luck-draw .num{ width: 1px; background-position: 0 -76px; background-repeat: repeat-x;}

.draw-old{ padding-right: 45px; padding-top: 10px;}
.draw-old .text{ position: absolute; z-index: 2; left: 0; width: 100%; bottom:7px; background: url('http://i0.jrjimg.cn/zqt-red-1000/focus/focus20160806/app/text1.png') no-repeat; background-size: contain; background-position: center 0;  }
.draw-old li{ color: #fe7800; line-height: 22px; font-size: .75rem; }
.draw-old li em{ color: #e40640; font-size: 1.25rem; }

.active-info{ background: #f5c519; margin-bottom: 10px; box-shadow: 0 5px 3px rgba(0, 0, 0, .3); overflow: hidden; }
.active-info .bg{ margin: 10px 20px; background: #eea00c; padding: 10px; border-radius: 10px; }
.active-info h2{ height: 40px; line-height: 40px; color: #faf239; font-size: 1rem; text-shadow: 1px 1px 0px rgba(0, 0, 0, .3);  }
.active-info h2 em{ color: #fff; }
.active-info i{ display: inline-block; vertical-align: middle; margin-top: -2px; width: 30px; height: 25px; background: url('http://i0.jrjimg.cn/zqt-red-1000/focus/focus20160806/app/deng.png') no-repeat; background-size: contain; }
.active-info .cnt{ background: #dc7500; padding: 10px; color: #fff; font-size: .75rem; line-height: 18px; border-radius: 5px;}

.reward-about{ position: relative; z-index: 1; margin: 0 ; border: 10px solid #f2e8c3; background: #ecc385; padding: 5px; }
.reward-about .red-bg{ position: absolute; z-index: 2; left: -200%; bottom: -100px; width: 500%; height: 300px; background: #bc0234;  
	transform: rotate(-15deg);
}
.reward-about .contentbar{ position: relative; z-index: 5; padding: 10px; border: 5px solid #e6a451; background:#e28b28; }

.reward-about .title{ margin-bottom: 10px; display: box; display: -webkit-box; box-orient: horizontal; -webkit-box-orient: horizontal; height: 27px; line-height: 27px; position: relative; z-index: 1; text-align: center; box-align:center; -webkit-box-align:center; box-pack:center; -webkit-box-pack:center;}
.reward-about .title .line{ position: absolute; z-index: 2; width: 100%; left: 0; top: 13px; height: 1px; font: 0/0 arial; background: #fbaa12; }
.reward-about .title .name{ display: block; position: relative; z-index: 5; height: 27px; line-height: 27px; padding: 0 15px; border-radius: 10px; background: #fbaa12; font-size: .9375rem; color: #7f3601;  }
.reward-about .title .gap{position: relative; z-index: 5;  width: 10px; height: 27px; display: block; background: #e28b28;}
.reward-about .content{ margin-bottom: 10px; padding:0 20px; background: #eaa145; overflow: hidden; }
.reward-about .content .text{ position: relative; z-index: 1; padding-top: 10px;}
.reward-about .content .text p{ padding-bottom: 10px; border-bottom: 1px dashed #fff; font-size: .75rem;}
.reward-about .content .text p:last-child{ border-bottom: none; }
.reward-about .expain{ font-size: .7rem; color: #5f2800; }

i.num_1,i.num_2,i.num_3,i.num_4{ position: absolute; left: -20px; top: 13px; display: block; width: 15px; height: 15px; background: url('http://i0.jrjimg.cn/zqt-red-1000/focus/focus20160806/app/num.png') no-repeat; background-size: 15px auto; }
i.num_2{ background-position: 0 -16px; }
i.num_3{ background-position: 0 -32px; }
i.num_4{ background-position: 0 -48px; }

.draw-member{ padding: 10px; background: #f5c519; overflow:hidden;}
.draw-member ul,.member-author ul{ display: box; display: -webkit-box; width: 100%; box-orient: horizontal; -webkit-box-orient: horizontal;  }
.draw-member li{ width: 100px; margin: 0 10px;  box-flex: 1; -webkit-box-flex: 1;  }
.draw-member li .img{ width: 100px; height: 100px; border-radius: 100%;border:2px solid #fde480; }
.draw-member li img{ width: 100%; height: 100%;  margin: 0 auto; border-radius: 100%; }
.draw-member li .name{ position: relative; z-index: 5; margin: 0 auto; margin-top:-10px;  height: 22px; line-height: 22px;  border: 2px solid #fde480; border-radius: 5px; background: #ed8b00; font-weight: bold; font-size: .75rem; text-align: center; }

.member-author .tit{  }
.member-author .line1{ height: 3px; background: url('http://i0.jrjimg.cn/zqt-red-1000/focus/focus20160806/app/chi.png'); background-size: auto 8px;  }
.member-author .tit h2{height: 33px; line-height: 33px; background: #f2b32b; color: #7f3601; font-size: .9375rem; text-align: center; }
.member-author ul{ box-pack: center; -webkit-box-pack: center; }
.member-author li{ margin: 0 3px; text-anchor: center; }
.member-author li .img{ width: 40px; height: 40px; margin: 0 auto 3px; border-radius: 100%;border:2px solid #fde480; }
.member-author li img{ width: 100%; height: 100%; border-radius: 100%; }
.member-author li .name{ font-size: .5rem; text-align: center;}
.member-author.reward-about.contentbar{ padding: 0; }
.member-author.reward-about .red-bg{ height: 200px; }
.member-author.reward-about .content{ padding: 10px; }
.member-author.reward-about .content h2{ line-height: 22px; font-size: .75rem; font-weight: bold; color: #7f3601;  }
.member-author.reward-about .content p{ line-height: 20px; font-size: .75rem; color: #7f3601;  }
.member-author .content-user{ padding: 10px 0; }



/* iphone6+ */
@media only screen and (min-device-width : 414px) and (max-device-width : 736px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 3) {
	
}

/* 360*640 480*800 4.0, 480*854 4.3, 540*960 4.0 4.3 4.5 */
@media only screen and (min-device-width : 320px) and (max-device-width : 340px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio:1) and (-webkit-max-device-pixel-ratio:2) {
	.luck-draw .line{ width: 230px; height: 26px; padding-top: 9px; padding-left: 11px; background-size: 230px auto; }
	.luck-draw .line.blue{ background-position: 0 -26px; }
	.luck-draw .num-left,.luck-draw .num-right,.luck-draw .num{ width:12px; height: 10px; background-position:0 -52px; background-size: 230px auto;
	}
	.luck-draw .num-right{ background-position: -29px -52px; }
	.luck-draw .num{ background-position: 0 -62px; }
	.active-info h2{ font-size: .75rem; }

	.draw-old{ padding-top: 0; }
	.draw-member li .img{ width: 80px; height: 80px; }

	.luck-draw .btn{ width: 88px; height: 55px; background-size: auto 55px; }
	.luck-draw .btn.enter{ background-position: -91px 0; }
}
</style>