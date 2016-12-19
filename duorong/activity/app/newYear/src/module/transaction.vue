<template>
	<ul class="nav">
		<li class="current">金币获得</li>
		<li>兑换奖品</li>
	</ul>
	<div id="jingbi" class="cnt">
		<div class="effect" v-if='option1'>
			<div class="option">
				<ul>
					<li v-for='obj in evenOption1'>
						<h3>{{obj.Opt}}+{{obj.count}}</h3>
						<time>{{obj.updateTime}}</time>
					</li>
				</ul>
			</div>
			<div class="option" >
				<ul>
					<li v-for='obj in evenOption2'>
						<h3>兑换{{obj.name}}-{{obj.needGoldCoin}}</h3>
						<time>{{obj.updateTime}}</time>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
import T from '../../../../common/js/modules/global.js';
import Move from '../../../../common/js/widgets/moveEvent';
import {goldcoin,goldcoinget} from '../js/URL';
export default {
	name : 'transaction',
	data(){
		return {
			option1 : [] ,
			option2 : [] , 
			getDataing : true,
		}
	},
	ready(){
		var self = this , 
			page = 10 , 
			count = 10 , 
			current = 1;

		/*T.ajax({
			type : 'get' , 
			url : goldcoinget , 
			data : {
				incomeOrExpenses : 'income',
				uId : T.uid, 
				pageOn : page, 
				pageSize : count
			},
			success : function( _data ){
				debugger;
			}
		})*/

		function getPage(obj){
			if(self.getDataing){
				self.$set('getDataing',false);
				var name = ['income','expenses']
				T.ajax({
					url : goldcoin , 
					data : {
						activityId : 17 , 
						uId : T.uid ,
						incomeOrExpenses : name[obj.type] , 
						pageOn : page ,
						pageSize : count
					},
					success : function(_data){
						self.$set('getDataing',true);
						var option1 = self.option1 , 
							option2 = self.option2;
						if(obj.type==0){ //金币明细
							option1 = option1.concat(_data.map.page.rows);
						}else if(obj.type==1){ //兑换奖品
							option2 = option2.concat(_data.map.page.rows);
						}else{
							option1 = [];
							option2 = [];
						}
						self.$set('option1',option1);
						self.$set('option2',option2);
						obj.callback && obj.callback();
					}
				})
			};
		}
		getPage({type : 0,callback:function(){
			getPage({type : 1});
		}});
		
		setTimeout(function(){
			self.tab = new Move({
	             nav : $('.mingxi .nav li')
	            ,effect : $('.mingxi .effect')
	            ,option : $('.mingxi .option')
	        });
			$('#jingbi').scroll(function(){
				var scrollTop = this.scrollTop ,
					offsetHeight = this.offsetHeight ,
					scrollheight = this.scrollHeight;
				current = self.tab.config.current;
				if((scrollTop+offsetHeight+50) > scrollheight){
					getPage({type:current});
				}
			});
		},610);
	},
	computed:{
		evenOption1 : function(){
			if(this.tab){
				this.tab.update();
			}
			return this.option1;
		},
		evenOption2 : function(){
			if(this.tab){
				this.tab.update();
			}
			return this.option2;
		}
	}
}
</script>
<style scoped>
.mingxi .cnt{ overflow:hidden; }
</style>