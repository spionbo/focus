<style lang='sass'>
	@import '../../css/global.scss';
	.header{
		position: relative; z-index: 1; overflow:hidden;
		.bg1{
			@include contain('../../images/main/header-bg.jpg');
		}
		.header-bg{
			position: absolute; z-index: 3; left:0; bottom:0; width:100%;
			@include contain('../../images/main/header-bg1.png');
		}
		.light{
			position: absolute; z-index: 2; top:-100%; left:-50%; width:200%;
			@include contain('../../images/main/light.png');
			@include animation(rotation,33s,linear,infinite);
			@include keyframes(rotation){
				from {-webkit-transform: rotate(0deg);}
				to {-webkit-transform: rotate(360deg);}
			}
		}
	}
</style>
<template>
<div class="header">
	<div class="bg1 img-size" data-height='441'></div>
	<div class="light img-size" data-height='1500'></div>
	<div class="header-bg img-size" data-height='429'></div>
</div>
</template>