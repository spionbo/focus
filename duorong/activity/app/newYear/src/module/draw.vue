<template>
<div class="draw-demo img-size" data-width='668'>
	<div class="draw img-size" data-height='508'>
		<div class="redbg img-size" v-if='status==1' data-marginLeft='55' data-marginTop='50' data-width='558' data-height='240'>
			<h2>来早了！</h2>
			<h3>活动将于</h3>
			<h3>{{startTime}}<em>准时开始</em></h3>
		</div>
		<div v-if='status==2' class="transtion-box img-size" data-paddingLeft='65' data-paddingTop='57'>
			<div class="box img-size" data-width='170' data-height='215' data-marginRight='15'>
				<ul>
					<li class="bg1 img-size" data-height='215'></li>
					<li class="bg2 img-size" data-height='215'></li>
					<li class="bg3 img-size" data-height='215'></li>
					<li class="bg4 img-size" data-height='215'></li>
					<li class="bg5 img-size" data-height='215'></li>
					<li class="bg6 img-size" data-height='215'></li>
					<li class="bg7 img-size" data-height='215'></li>
				</ul>
			</div>
		</div>
		<div class="redbg img-size" v-if='status==3' data-marginLeft='55' data-marginTop='50' data-width='558' data-height='240'>
			<h2>活动已结束！</h2>
			<h3>请于<em>{{getPrize}}</em></h3>
			<h3>之前完成奖品兑换</h3>
		</div>
		<div class="submit img-size" data-top='355' data-width='615' data-left='25'>
			<div class="btn btn1 img-size" data-width='180' data-height='93'></div>
			<div class="btn btn10 img-size" data-width='180' data-height='93'></div>
		</div>
	</div>
	<div class="draw-footer">
		<div class="clearfix">
			<div class="text">投资单笔满1000元即<br>获得1次机会</div>
			<div class="btn img-size" data-width='213' data-height='59' @click='rule'></div>
		</div>
		<p>投资产品期限越长，摇到好礼的几率越高</p>
	</div>
</div>
</template>
<script>
	import T from '../../../../common/js/modules/global.js';
	import {raffle} from '../js/URL';
	import '../js/draw';
	export default {
		name : 'draw',
		data(){
			return {
				status : activity.status
				,startTime : activity.startTime
				,getPrize : activity.getPrize
				,raffleResult : null
				,rafflechance : [parseInt , String] //抽奖次数
			}
		},
		methods : {
			rule : function(){
				this.$dispatch('pop',{name:'rule'});
			}
		},
		ready(){
			var self = this , 
				money;
			this.$once('elementDone', function(T,Pop){
				var tenList = [];
				var d = new draw({
					element : $('.draw .box') , //元素
					ul : $('.draw .box ul'),
					child : $('.draw .box ul li'),
					length : 3,
					oneBtn : $('.draw .submit .btn1') , //玩一次按钮
					oneBtnPrvCallback : function(fn){ //点击按钮前是否登录
						self.$dispatch('login',function(){
							self.$dispatch('vipPop',function(){
								T.ajax({
									url : raffle , 
									data : {
										activityId : 17 ,
										uId : T.uid , 
										raffleTimes : 1
									},
									success : function( _data ){
										if(_data.success==true){
											try{
												self.$set('raffleResult',_data.map.raffleResult.icons);
												fn();
												money = _data.map.remainGoldCoin;
											}catch(e){
												self.$dispatch('pop',{
													name : 'noOpportunity'
												});
											}
										}else{
											self.$dispatch('pop',{
												name : 'noOpportunity' 
											});
										}
									}
								});
							});
						});
					},
					tenBtnPrvCallback : function(fn){
						self.$dispatch('login',function(){
							self.$dispatch('vipPop',function(){
								T.ajax({
									url : raffle , 
									data : {
										activityId : 17 ,
										uId : T.uid , 
										raffleTimes : 10
									},
									success : function( _data ){
										if(_data.success==true){
											try{
												self.$set('raffleResult',_data.map.raffleResult.icons)
												fn();
												money = _data.map.remainGoldCoin;
											}catch(e){
												self.$set('raffleResult','234234')
												self.$dispatch('pop',{
													name : 'noOpportunity'
												});
											}
										}else{
											self.$dispatch('pop',{
												name : 'noOpportunity' 
											});
										}
									}
								});
							});
						});
					},
					oneBtnCallback : function(){ // 回掉
						d.getDraw(self.raffleResult[0].id);
						tenList = self.raffleResult[0].goldCoin;

						self.$delete(self,'raffleResult');
						self.$parent.rafflechance -= 1;

					},
					tenBtn : $('.draw .submit .btn10'),  //玩十次按钮
					tenBtnCallback : function(){// 回掉
						tenList = [];
						var lastID = 0;
						self.raffleResult.map(( obj , i )=>{
							if(obj.goldCoin){
								tenList.push(obj.goldCoin);
								lastID = obj.id
							}
						})
						d.getDraw(lastID,true);

						self.$delete(self,'raffleResult'); //删除答案
						self.$parent.rafflechance -= 10;
					},
					callback : function(){ //中奖弹窗
						self.$dispatch('pop',{
							name:'winning',
							obj : d,
							callback : function( pop ){ //回掉弹窗
								self.$dispatch('updateMoeny',money);
								const content = pop.element.content;
								if(d.btnStatus == 'ten'){ //中奖10次
									//1-3个双蛋100万金币  2-3个圣诞10000金币 3-3元旦10000金币 4-3个钱袋1000金币 5-3个招财猫500金币 6-3个福袋100金币 7-3个礼盒50金币 8-3个不同图案10金币;
									var num = 0;
									tenList.map((val , i)=>{
										setTimeout(function(){
											var left = content.width()*Math.random() - 50;
											var m = $('<div class="m" style="left:'+left+'px">+'+val+'金币</div>').appendTo(content);
											setTimeout(function(){
												m.css({'transform':'translateY(-200px)','-webkit-transform':'translateY(-200px)',opacity:0});
												setTimeout(function(){
													m.remove();
												},2100)
												val = val == '100万'?'1000000':val;
												num += parseInt(val) ;
												//num = num>=1000000? (num/10000)+'万':num;
												content.find('.num').html('+'+num+'金币')
											},50)
										},i*300);

									});
								}else{
									content.find('.num').html('+'+tenList+'金币')
								}
							}
						});
					}
				});

				
			});
		}
	}
</script>
<style scoped>
</style>