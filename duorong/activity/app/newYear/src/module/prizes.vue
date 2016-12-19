<template>
<div class="prizes img-size" data-paddingTop='80'>
	<div class="bg img-size" data-height='114' data-top='-66'></div>
	<div v-if='islogin' class='my-money img-size' data-height='86'  data-lineHeight='66'>
		<div class="btn img-size" @click='mingxi' data-width='212' data-height='66'></div>
		我的金币数量：{{goldcount}}
	</div>
	<div class="tit img-size" data-height='142'></div>
	<div class="border-box">
		<div class="top img-size" data-height='40'></div>
		<div class="content clearfix">
			<ul class="nav">
				<li class="current">加息专区</li>
				<li>返现专区</li>
				<li>超值大礼</li>
			</ul>
			<div class="cnt">
				<div class="options effect" v-if='options'>
					<div class="option jiaxi">
						<ul v-for="arr in options.option2">
							<li v-for="obj in arr">
								<div class="img img-size" data-width='275' data-height='200'>
									<em>+{{obj.raisedRates}}%</em>
								</div>
								<p><em>{{obj.needGoldCoin}}</em>金币</p>
								<div class="btn" @click='exchange({id:obj.id,name:obj.giftName},2)'>兑换</div>
							</li>
						</ul>
						<div class="last">
							<div class="pic img-size" data-width='392' data-height='316'>
								<img class='load-img' src='../../images/laoren.png'>
							</div>
						</div>
					</div>
					<div class="option hongbao">
						<ul v-for="arr in options.option3">
							<li v-for="obj in arr">
								<div class="img img-size" data-width='228' data-height='240'>
									<em>{{obj.amount}}元</em>
								</div>
								<p><em>{{obj.needGoldCoin}}</em>金币</p>
								<div class="btn" @click='exchange({id:obj.id,name:obj.giftName},3)'>兑换</div>
							</li>
						</ul>
						<div class="last">
							<div class="pic img-size" data-width='392' data-height='316'>
								<img class='load-img' src='../../images/laoren.png'>
							</div>
						</div>
					</div>
					<div class="option">
						<ul v-for="arr in options.option1">
							<li v-for="obj in arr" class="{{obj.superCls}}">
								<div v-if='!obj.superCls'>
									<div class="img img-size" data-height='200'>
										<div class="pic img-size {{obj.cls}}" data-width='{{obj.width}}' data-height='{{obj.height}}'>
											<img v-if='!obj.cls' class='load-img' v-bind:src='obj.img'>
											<em v-else>{{obj.amount}}</em>
										</div>
									</div>
									<div>
										<p><em>{{obj.needGoldCoin | setPrice }}</em>金币</p>
										<div class="btn" @click='exchange({id:obj.id,name:obj.giftName},1)'>兑换</div>
									</div>
								</div>
								<div v-else class="pic img-size" data-width='330' data-height='266'>
									<img class='load-img' :src='obj.img'>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="footer img-size" data-height='42'></div>
	</div>
</div>
</template>
<script>
	import T from '../../../../common/js/modules/global.js';
	import Move from '../../../../common/js/widgets/moveEvent';
	export default {
		name : 'prizes',
		props : {
			islogin : Boolean , 
			list : Object , 
			goldcount : [parseInt,String]
		},
		data (){
			return {
				options : null
			}
		},
		ready(){
			var self = this;
			this.$watch('list',function(obj){
				var realPrizeList = obj.realPrizeList ,  //实物
					cashCouponList = obj.cashCouponList,	//红包
					addInerestCouponList = obj.addInerestCouponList, //加息券
					arr1 = [], arr2 = [] , arr3 = [],
					ul =[],
					productName = [
						{
							name:'iPhone' , pic : 'prize1',
							width : 165,height : 175,
						},
						{
							name:'IPad' , pic : 'prize2',
							width : 175,height : 170,
						},
						{
							name:'Sony' , pic : 'prize3',
							width : 179,height : 172,
						},
						{
							name:'古奇米' , pic : 'prize4',
							width : 134,height : 172,
						},
						{
							name:'博朗' , pic : 'prize5',
							width : 179,height : 195,
						},
						{
							name:'京东卡1000' , pic : 'prize6',
							width : 176,height : 176,
						},
						{
							name:'京东卡100' , pic : 'prize6',
							width : 176,height : 176,
						}
					];

				function setImg(obj , product){
					if(obj.giftName.indexOf(product.name)>-1){
						obj.img = require('../../images/'+product.pic+'.png');
						obj.width = product.width;
						obj.height = product.height;
						if(product.pic=='prize6'){
							obj.cls = 'quan'
						}
					}
				}
				realPrizeList.map((obj , i)=>{
					setImg(obj,productName[i]);
					ul.push(obj);
					if((i+1)%3==0){
						arr1.push(ul);
						ul = [];
					}
				});
				ul.push({
					superCls : 'last',
					width : 330,
					height : 266,
					img :  require('../../images/laoren.png')
				})
				arr1.push(ul);
				ul = [];

				addInerestCouponList.map((obj,i)=>{
					ul.push(obj);
					if((i+1)%2==0){
						arr2.push(ul);
						ul = [];
					}
				});
				arr2.push(ul);
				ul = [];

				cashCouponList.map((obj,i)=>{
					ul.push(obj);
					if((i+1)%2==0){
						arr3.push(ul);
						ul = [];
					}
				});
				arr3.push(ul);
				ul = [];

				self.$set('options',{
					option1 : arr1,
					option2 : arr2,
					option3 : arr3,
				});

				setTimeout(function(){
					T.setImgSize();
					new Move({
			             nav : $('.prizes .nav li')
			            ,effect : $('.prizes .effect')
			            ,option : $('.prizes .option')
			            
			        });
				},500);
			});
			
			this.$once('elementDone', function(T,Pop){
				T.setImgSize();
			});
		},
		filters : {
			setPrice : function( num ){
				num = parseInt(num);
				if(num>10000){
					num = parseInt(num/10000)+'万'
				}
				return num;
			}
		},
		methods : {
			mingxi : function(){
				this.$dispatch('pop',{name:'mingxi'});
			},
			exchange : function( obj , type ){
				this.$dispatch('pop',{
					type : type,
					id : obj.id,
					productName : obj.name,
					name:'exchange'
				});
			}
		}
	}
</script>
<style scoped>

</style>