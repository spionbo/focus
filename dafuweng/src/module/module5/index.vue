<style lang='sass'>
	@import '../../css/global.scss';
	.module5{
		position: relative; z-index: 2;
		height:100%; @include contain('../../images/module5/bg.jpg');
		.content-box{ position: relative; z-index: 9; }
	}
</style>
<template>
<div class='child-transition'>
	<div class='module-scroll'>
		<div class="module5 img-size" data-height='1334'>
			<div class="content-box">
				<Prize></Prize>
				<Road ref='road' page='5' image='/module5/b5.png'></Road>
			</div>
			<Scene ref='scene'></Scene>
			<Pipple width='255' height='383' top='530' left='-64'></Pipple>
		</div>
	</div>
	<Progress-bar ref='progressBar' :current='50' :total='100'></Progress-bar>
	<My-prize></My-prize>
	<Dice ref='dice'></Dice>
	<goHome></goHome>
</div>
</template>
<script>
	import Prize from '../prize';
	import Road from '../Road';
	import Scene from '../../scene/index';
	import Pipple from '../../scene/pipple';
	import ProgressBar from '../../components/ProgressBar';
	import MyPrize from '../../components/myPrize';
	import Dice from '../../components/dice';
	import goHome from '../../components/homeIcon';

	export default {
		components : {
			Prize , Road ,
			Scene ,
			Pipple , 
			ProgressBar , 
			MyPrize , 
			Dice,
			goHome
		},
		props : {

		},
		data (){
			return {
				diceChance : 0,
				pointOnMap : 0,
			}
		},
		watch : {
			pointOnMap : function(newNum , oldNum){
				var num = info.map.pointOnMap || oldNum ,
					num = num-96;

				T.goPage.call(this,num,97);
					/* , 
					query = {wap:T.wap,uid:T.uid,
						pointOnMap:this.pointOnMap,
						diceChance:this.diceChance
					};
				if(num>23 || num<0 ){
					router.push({ path: 'module1', query:query })
				}else{
					this.$refs.road.setRoad(num,97,newNum)
				}*/
			}
		},
		mounted(){
			var self = this;
      		this.$refs.scene.getType('snow');

			T.setImgSize();
			$.extend(self,self.$route.query);
			bus.$on('pointOnMap', function (val) { //获取抽奖点
			  	self.pointOnMap = val;
			  	info.map.pointOnMap = val;
			})
		}
	}
</script>