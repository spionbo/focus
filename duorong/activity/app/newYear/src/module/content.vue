<template>
<div id='Content' class="container">
	<div class='topEffect img-size' data-height='217'>
		<div class="light img-size" data-height='78'></div>
		<div class="lu img-size" data-width='213' data-height='95' data-left='233' data-top='114'></div>
	</div>
	<div class="textEffect">
		<div class="text img-size" data-width='571' data-height='284' data-marginLeft='87'></div>
		<div class="laoren img-size" data-width='137' data-height='109' data-top='52' data-left='67'></div>
		<div class="qiqiu img-size" data-width='115' data-height='123' data-left='105'></div>
		<div class="xueren img-size" data-width='111' data-height='145' data-left='560'></div>
	</div>
	<yaojingbi :islogin='islogin' :rafflechance.sync='rafflechance'></yaojingbi>
	<draw :islogin='islogin' :rafflechance.sync='rafflechance'></draw>
	<div class="Investment">
		<div class="btn img-size" @click='investment' data-width='451' data-height='73'></div>
	</div>
	<prizes :islogin='islogin' :list='list' :goldcount.sync = 'goldcount'></prizes>
	<rule></rule>
</div>
</template>
<script>
import T from '../../../../common/js/modules/global.js';
import Pop from '../../../../common/js/widgets/pop.js';
import yaojingbi from './yaojingbi.vue';
import draw from './draw.vue';
import prizes from './prizes.vue';
import rule from './rule.vue';
import HTTP from '../js/URL';

	export default {
		name : 'content',
		components : {
			yaojingbi : yaojingbi ,
			draw : draw ,
			prizes : prizes,
			rule : rule
		},
		data (){
			return {
				islogin : false ,
				status : activity.status,
				startTime : activity.startTime,
				getPrize : activity.getPrize ,
				list : null,
				rafflechance : 0, //我的抽奖次数
				goldcount : 0, //我的金币数量
			}
		},
		created(){
			var self = this ,
				timer = 0;
			$.extend(self,{
				getVip : function(callback){ //产品列表也在这里
					var self = this;
					if(void 0 != this.vipStatus){
						callback(self.vipStatus);
					}else{
						clearTimeout(timer);
						timer = setTimeout(function(){
							T.ajax({
								url : HTTP.prizes ,
								data : {
									activityId: 18 ,
									uId : T.uid
								},
								success : function( data ){
									try{
										self.$set('rafflechance',data.map.raffleChance);
										self.$set('goldcount',data.map.goldCoinCount);
									}catch(e){

									}
									if(data.success == true){
										self.vipStatus = true;
										self.$set('list',data.map.prizes);
									}else{
										self.vipStatus = false;
									}
									callback && callback(self.vipStatus);
								}
							});
						},300);
					}
				}
			});
			self.getVip();
		},
		ready(){
			var self = this , 
				http = 'http://www.duorongcf.com/activity/app/newYear/';
			T.init({
				duorongHttp : 'http://192.168.0.245:8888',
				loadding : {
					timing : 'spinner-loader',
					//加载 spinner , spinner-loader , loadingbar , lightLoader , square ,circles,circles1,circles2,circles3,circles4,line'
					fillColor : 'red',
					imgs : [ //需要加载的图片
<<<<<<< HEAD

=======
						 http+'d.png',
						 http+'btn1.png',
						 http+'btn10.png',
						 http+'f.png',
						 http+'haoli.png',
						 http+'laoren.png',
						 http+'m1.png',
						 http+'m2.png',
						 http+'m3.png',
						 http+'m4.png',
						 http+'m5.png',
						 http+'money.png',
						 http+'prize1.png',
						 http+'prize2.png',
						 http+'prize3.png',
						 http+'prize4.png',
						 http+'prize5.png',
						 http+'prize6.png',

						 http+'q.png',
						 http+'qiqiu.png',
						 http+'s.png',
						 http+'text.png',
						 http+'tit.jpg',
						 http+'tit1.jpg',
						 http+'topeffect.png',
						 http+'tree.png',
						 http+'xueren.png',
						 http+'z.png',
>>>>>>> c2966082c25da84b0723a063ecb44b3a8741d253
					],
					callback:function(){
						$('#Content').addClass('cur');
						self.$broadcast('elementDone',T,Pop);
						self.vipPop();
					}
				}
			});
			this.islogin = T.isLogin;
		},
		filters : {

		},
		methods : {
			updateMoeny : function( num ){
				this.$set('goldcount',num)
			},
			getStatus : function(callback){
				if(this.status == 2){ ///进行中
					callback();
				}else{//
					var txt;
					if(this.status == 1){ //未开始
						txt = "来早了！<br>活动将于"+this.startTime+"准时开始";
					}else{//已结束
						txt = "活动已结束！请于"+this.getPrize+"之前完成奖品兑换";
					}
					var pop = new Pop({
						title : '提示',
						content : txt,
						width: '70%',
						okBtn : true,
						cancelBtn:false,
						okTxt:'确定',
						superClass : 'exchange onebtn',
						timing : 'slideOutUp', //rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
					});
					pop.element.close.html('');
				}
			}
			,login : function(callback){
				this.getStatus(function(){
					T.login({url:window.location.href,callback:callback});
				})
			}
			,vipPop : function( callback ){// vip 无资格
				this.getVip(function(vipStatus){
					if(vipStatus==true){
						callback && callback();
					}else{
						var pop = new Pop({
							title : '提示',
							content : "<p>亲，由于您是渠道VIP用户<br>所以能参加此次活动<br>敬请谅解！</p>",
							width: '70%',
							okBtn : true,
							cancelBtn:false,
							okTxt:'确定',
							superClass : 'exchange onebtn',
							timing : 'slideOutUp', //rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
							okCallback : T.callApp.investment
						});
						pop.element.close.html('');
					}
				});
			}
			,investment : function(callback){//投资提示
				var inves = localStorage.getItem('investment');
				if(!inves){
					localStorage.setItem('investment', 'true');
					var text = "<p>①投资≤30天产品，不参加活动本次活动。</p>"
						+"<p><strong>②投资≥90天产品，可额外获得一笔金币；投资多少，即获得多少金币。</strong></p>"
						+'<p>③金币可以在兑换区兑换超值大礼。</p>';
					var pop = new Pop({
						title : '温馨提示',
						content : text,
						width: '70%',
						okBtn : true,
						cancelBtn:true,
						cancelCls : 'red',
						okTxt:'我知道了',
						cancelTxt:'去投资',
						cancelCallback : function(){
							T.callApp.investment();
						},
						superClass : 'exchange inves',
						timing : 'bounceIn', //rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
					});
					pop.element.close.html('');
				}else{
					T.callApp.investment();
				}
			}
			,noMoney : function(obj){ //金币不足
				var self = this;
				this.login(()=>{
					T.ajax({
						url : HTTP.exchange , 
						data : {
							activityId:17,
							uId:T.uid,
							prizeId:obj.id
						},
						success : function( _data ){
							if(_data.success==true){
								self.updateMoeny(_data.map.remainGoldCoin);
								obj.callback();
							}else{
								if(_data.errorCode == '9996'){ //金币不足
									var text = "<p>真遗憾，金币不足无法兑换</p>";
									var pop = new Pop({
										title : '奖品兑换',
										content : text,
										width: '70%',
										okBtn : true,
										cancelBtn:true,
										cancelCls : 'red',
										okTxt:'知道了',
										cancelTxt:'获取金币',
										cancelCallback : function(){
											T.callApp.investment();
										},
										superClass : 'exchange',
										timing : 'bounceIn', //rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
									});
									pop.element.close.html('');
								}else if(_data.errorCode == '9997'){ //奖品已兑换完
									self.noProduct(obj);
								}else if(_data.errorCode == '9998'){ //兑奖日期已结束
									self.timeOut(obj);
								}
							}
						}
					})
				});
			}
			,product : function(obj){//兑换产品
				var self = this;
				var text = "<p>兑换成功！<br>"
					+"兑换奖品将于活动结束后<br>"
					+"15个工作日内发放<br>"
					+"会提前与您联系，期间<br>"
					+"请保持手机畅通</p>";

				var pop = new Pop({
					title : '奖品兑换',
					content : text,
					width: '70%',
					okTxt:'知道了',
					cancelTxt:'填收货地址',
					cancelCallback : function(){
						this.close();
						setTimeout(self.address,300);
					},
					cancelCls : 'red',
					superClass : 'exchange',
					timing : 'flipInX', //rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
				});
				pop.element.close.html('');
			}
			,noProduct : function( obj ){ //奖品已兑换完
				var text = "<p>抱歉，您兑换的“"+obj.productName+"”,已被抢兑一空！</p><p>工作人员正在加紧补货中。</p>";
				var pop = new Pop({
					title : '奖品兑换',
					content : text,
					width: '70%',
					okBtn : true,
					cancelBtn:false,
					okCls : 'red',
					okTxt:'知道了',
					superClass : 'exchange',
					timing : 'flipInX', //rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
				});
				pop.element.close.html('');
			}
			,address:function(){ //填写地址
				var text = "<ul>"
					+"<li><input type='text' maxLength='12' placeholder='联系人姓名'></li>"
					+"<li><input type='tel' maxLength='11' placeholder='联系人电话'></li>"
					+"<li><input type='text' placeholder='联系人地址' ></li>"
				+"</ul>";

				var pop1 = new Pop({
					title : '奖品兑换',
					content : text,
					width: '70%',
					okTxt:'取消',
					cancelTxt:'完成',
					cancelCls : 'red',
					superClass : 'exchange address',
					timing : 'flipInX', //rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
					cancelCallback : function(){
						var input = $(this.element.content).find('input');
						input.unbind().focus(function(){
							pop1.hideError();
						});
						var val1 = $.trim(input.eq(0).val()),
							val2 = $.trim(input.eq(1).val()),
							val3 = $.trim(input.eq(2).val()) ;

						if(val1.length<2){
							pop1.error('请输入有效的联系人');
							return;
						}
						if(!(/^1[34578]\d{9}$/.test(val2))){
							pop1.error('手机号码有误，请重填');
							return;
						}
						if(val3.length<5){
							pop1.error('请填写正确有效的地址');
							return;
						}
						T.ajax({
							url : HTTP.address,
							data : {
								uId : T.uid,
								name : val1 ,
								phoneNumber : val2 ,
								address: val3
							},
							success : function( _data ){
								if(_data.success){
									pop1.succee({
										txt : '成功！' ,
										callback : function(){
											pop1.close();
										}
									})
								}else{
									pop1.error(_data.errorMsg);
								}
							}
						})
					}
				});
				pop1.element.close.html('');
				setTimeout(function(){
					T.body.css({overflowY:'hidden'});//多弹窗时 需手动隐藏高度
				},520);
			}
			,couponSuccess : function(){ //优惠券兑换成功
				var text = "<p>兑换成功，加息券已经发到送到您的账户。</p>";
				var pop = new Pop({
					title : '奖品兑换',
					content : text,
					width: '70%',
					okBtn : true,
					cancelBtn:false,
					okCls : 'red',
					okTxt:'知道了',
					superClass : 'exchange',
					timing : 'flipInY', //rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
				});
				pop.element.close.html('');
			}
			,hongbaoSuccess : function(){ //红包兑换成功
				var text = "<p>兑换成功，返现红包已经发到送到您的账户。</p>";
				var pop = new Pop({
					title : '奖品兑换',
					content : text,
					width: '70%',
					okBtn : true,
					cancelBtn:false,
					okCls : 'red',
					okTxt:'知道了',
					superClass : 'exchange',
					timing : 'flipInY', //rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
				});
				pop.element.close.html('');
			}
			,noOpportunity : function(){//剩余摇奖次数不足，快去获取次数吧！
				var text = "<p>剩余摇奖次数不足，快去获取次数吧！</p>";
				var pop = new Pop({
					title : '奖品兑换',
					content : text,
					width: '70%',
					okBtn : true,
					cancelBtn:false,
					okCls : 'red',
					okTxt:'知道了',
					superClass : 'exchange',
					okCallback : function(){
						T.callApp.investment();
					},
					timing : 'flipInY', //rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
				});
				pop.element.close.html('');
			}
			,timeOut : function(){
				var text = "<p>兑奖日期已结束</p>";
				var pop = new Pop({
					title : '奖品兑换',
					content : text,
					width: '70%',
					okBtn : true,
					cancelBtn:false,
					okCls : 'red',
					okTxt:'知道了',
					superClass : 'exchange',
					okCallback : function(){
						T.callApp.investment();
					},
					timing : 'flipInY', //rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
				});
				pop.element.close.html('');
			}
		},
		events : {
			'login' : function(callback){
				this.login(callback);
			},
			'vipPop' : function(callback){
				this.vipPop(callback);
			},
			'pop' : function( obj ){
				var self = this;
				this.vipPop(function(){
					switch(obj.name){
						case 'rule' : { //奖励规则
							var txt,
							td = '',
							list = [
								{name : '3个双蛋', num:'100万' },
								{name : '3个圣诞树', num:'10000' },
								{name : '3个日历', num:'10000' },
								//{name : '3个元旦', num:'10000' },
								{name : '3个钱袋', num:'1000' },
								{name : '3个招财猫', num:'500' },
								{name : '3个福袋', num:'100' },
								{name : '3个礼盒', num:'50' },
								{name : '不同图案', num:'10' }
							];
							list.map(( obj )=>{
								td += '<tr><td>'+obj.name+'</td><td>'+obj.num+'金币</td></tr>'
							})
							txt = "<h2>奖励规则</h2><div class='table'>"
								+"<table width='100%' cellspacing='0' cellpadding='0'>"
									+'<tr>'
										+'<th>摇奖结果</th>'
										+'<th>奖品</th>'
									+'</tr>'
									+td
								+'</table>'
							+'</div>'
							var p = new Pop({
								content : txt,
								okBtn : false,
								cancelBtn:false,
								superClass : 'jiangliguize border-box',
								timing : 'rotate3d', //rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
							}),
							footer = $('<div class="footer img-size" data-height="16"></div>');

							p.element.bg.addClass('img-size').attr('data-width',593)
							p.element.bg.append(footer);
							p.element.close.html('');
							T.setImgSize();
							break;
						}
						case 'mingxi' : { //明细
							require.ensure([], function() {
								let transaction = require('./transaction.vue');
								const pop = new Pop({
									name:'exchange',
									title : '金币明细',
									superClass : 'mingxi border-box',
									content : '<transaction></transaction>',
									okBtn : false,
									cancelBtn:false
								});
								var footer = $('<div class="footer img-size" data-height="16"></div>');

								pop.element.bg.addClass('img-size').attr('data-width',593)
								pop.element.bg.append(footer);
								pop.element.close.html('');
								new Vue({
								  el: pop.element.elem[0],
								  components : {
								  	transaction : transaction
								  }
								});
								T.setImgSize();
							});
							break;
						}
						case 'exchange' : { //兑换
							//无法兑换
							self.noMoney({
								type : obj.type,
								id : obj.id , 
								productName : obj.productName,
								callback : function(){
									if(obj.type==1){ //实物兑换 需填写地址
										self.product(obj);
									}else if(obj.type==2){ //返现专区
 										self.couponSuccess();
									}else if(obj.type==3){// 超值大礼
										self.hongbaoSuccess();
									}
								}
							});
							break;
						}
						case "winning" : { //中奖
							var img = require('../../images/money.png') ,
								text = "<div class='img'><img width='100%' src='"+img+"'></div><div class='num'></div>";
							var pop = new Pop({
								content : text,
								width: '70%',
								okBtn : false,
								cancelBtn:false,
								superClass : 'winning',
								timing : 'fadeIn', //rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
								closeCallback : function(){
									/*obj.obj.moenyMove.map(( obj , i )=>{
										setTimeout(function(){
											obj.clear();
											$('.money,.music').remove();
										}, 220*i);
									})*/
								}
							});
							pop.element.close.html('');
							obj.callback(pop)
							break;
						}
						case "noOpportunity" : { //没有抽奖机会
							self.noOpportunity();
							break;
						}
					}
				});
			},
			'updateMoeny' : function( num ){ //更新金币
				this.updateMoeny(num);
			}
		}
	}
</script>
<style scoped>

</style>