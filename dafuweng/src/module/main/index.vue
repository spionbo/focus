<style lang='sass'>
	@import '../../css/global.scss';
	.main-section{
		 height:100%; overflow-y:scroll; background:#ffbc51;
		 .activity{
		 	position:relative; z-index:2;
		 	background:url(../../images/main/bg-line.jpg) #ffbc51 repeat-x; background-size:auto $s6;
		 	margin-top:-$s10; padding-top:$s20; padding-bottom:$s20;
		 	.tit{ margin:0 auto; @include contain('../../images/main/tit1.jpg'); }
		 	.bg-box{ margin:$s20 auto; @include contain('../../images/main/prize.jpg');  position: relative; z-index: 1;
		 		.activity-btn{ position:absolute;}
		 	}
		 	.btn{ position: relative; margin:$s20 auto 0; @include contain('../../images/main/btn6.jpg'); }
		 }
	}
</style>
<script>
	import Top from './head';
	import Main from './main.vue';
	import myPrize from '../../components/myPrize.vue';
	import { prizes } from '../../common/URL';
	import requirePop from '../../pop/requirePop.js';
	export default {
		components : {
			Top,
			Main,
			myPrize
		},
		mounted(){
			T.setImgSize();
	        T.mobile();
	        T.getAppInfo();
			/*T.init({
				loadding : {
					imgs : [
						
					]
				}
			});*/
		},
		methods : {
			activity : function(){
				requirePop('explain')
				/*require.ensure([],function( require ){
					var explain = require('../../pop/explain.js');
					explain.open();
				},'activity')*/
			}
		}
	}
</script>
<template>
<div class="main-section">
	<Top></Top>
	<Main></Main>
	<div class="activity">
		<div class="tit img-size" data-width='718' data-height='51'></div>
		<div class="bg-box img-size" data-width='720' data-height='440'>
			<div class="activity-btn img-size" data-left='206' data-top='35' data-width='287' data-height='41' @click='activity'></div>
		</div>
		<div class="btn img-size" data-width='190' data-height='55'>
			<my-Prize position='absolute' left='112' top='0' width='193' height='47'></my-Prize>
		</div>
	</div>
</div>
</template>