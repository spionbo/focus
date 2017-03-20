<style lang='sass'>
	@import '../../css/global.scss';
	.module4{
		position: relative; z-index: 2;
		height:100%; @include contain('../../images/module4/bg.jpg');
		.content-box{ position: relative; z-index: 9; }
	}
</style>
<template>
<div class='child-transition'>
	<div class='module-scroll'>
		<div class="module4 img-size" data-height='1334'>
			<div class="content-box">
				<Prize></Prize>
				<Road ref='road' page='4' image='/module4/b4.png'></Road>
			</div>
			<Scene ref='scene'></Scene>
			<Pipple :width='280' :height='800' :top='350' :left='0'></Pipple>
			<Pipple :width='280' :height='800' :top='450' :left='280'></Pipple>
			<Pipple :width='280' :height='1000' :top='150' :left='360'></Pipple>
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
			Scene,
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
					num = num-72;

				T.goPage.call(this,num,73);
					/* , 
					query = {wap:T.wap,uid:T.uid,
						pointOnMap:this.pointOnMap,
						diceChance:this.diceChance
					};
				if(num>24){
					router.push({ path: 'module5', query:query })
				}else if(num<0){
					router.push({ path: 'module3', query:query })
				}else{
					this.$refs.road.setRoad(num,73,newNum)
				}*/
			}
		},
		mounted(){
			var self = this;
      		this.$refs.scene.getType('rain');

			T.setImgSize();
			$.extend(self,self.$route.query);
			bus.$on('pointOnMap', function (val) { //获取抽奖点
			  	self.pointOnMap = val;
			  	info.map.pointOnMap = val;
			})
		}
	}
</script>