<style lang='sass'>
@import '../css/global.scss';
	.my-prize{
		position: fixed; z-index: 996; left:0.625rem;
		background:url('../images/myPrize.png');
		background-size: contain;
		@include transition-duration;
		@include transform(translateX(-50px));
		opacity:0;
		&.cur{
			@include transform(translateX(0));
			opacity:1;
		}

		

		&.position{ position:absolute; background:none;}
	}
</style>
<template>
<div v-if='position!="absolute"' class="my-prize prizesit img-size" data-width='232' data-height='73' data-bottom='51' @click='open'>
</div>
<div v-else class="my-prize position img-size" :data-top='top' :data-left='left' :data-width='width' :data-height='height' @click='open'>
</div>

</template>
<script>
	export default {
		props : {
			position : String ,
			left : String,
			top : String,
			width : String,
			height : String,
		},
		mounted(){
            setTimeout(function(){
                $('.prizesit').addClass('cur')
            },1200)
		},
		methods : {
			open : function(){
				var pop = require('../pop/requirePop.js');
                pop.call(this,'mypPrize',{
                	props: {
						transition : 'mask'//rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
					}
                });
			}
		}
	}
</script>