<style lang='sass'>
	@import '../../css/global.scss';
	.module1{
		position: relative; z-index: 2;
		height:100%; @include contain('../../images/module1/bg.jpg');
		.content-box{ position: relative; z-index: 9; }
	}
</style>
<template>
<div class='child-transition'>
	<div class='module-scroll'>
		<div class="module1 img-size" data-height='1334'>
			<div class="content-box">
				<Prize></Prize>
				<Road ref='road' page='1' image='/module1/b1.png'></Road>
			</div>
			<Scene ref='scene'></Scene>
			<Pipple :width='280' :height='800' :top='350' :left='0'></Pipple>
		</div>
	</div>
	<Progress-bar ref='progressBar' :current='10' :total='100'></Progress-bar>
	<My-prize></My-prize>
	<Dice ref='dice'></Dice>
	<goHome></goHome>
</div>
</template>
<script>
	
	import requirePop from '../../pop/requirePop.js';
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
				diceChance : -1,
				pointOnMap : -1,
			}
		},
		watch : {
			pointOnMap : function(newNum , oldNum){
				var self = this;
				newNum = info.map.pointOnMap!= void 0 ? info.map.pointOnMap : oldNum;
				T.goPage.call(this,newNum,1);
				/*if(newNum && newNum>24){
					router.push({ path: 'module2', query: {wap:T.wap,uid:T.uid,
						pointOnMap:self.$route.query.pointOnMap,
						diceChance : self.diceChance
					}});
					return;
				}
				this.$refs.road.setRoad( (void 0 != newNum)?newNum:oldNum,1,newNum)*/
			}
		},
		mounted(){
			var self = this , 
				firstGame;

			try{
				firstGame = T.localStorage.getItem(info.name);

				if(firstGame != 'true' ){
					T.localStorage.setItem(info.name,'true',{ expires : 9999});
					requirePop('tips');
				}
			}catch(e){
				
			}
      		this.$refs.scene.getType('rain');

			T.setImgSize();
			$.extend(self,self.$route.query); //更新 参数
			bus.$on('pointOnMap', function (val) { //获取抽奖点
			  	self.pointOnMap = val;
			  	info.map.pointOnMap = val;
			});
		}
	}
</script>