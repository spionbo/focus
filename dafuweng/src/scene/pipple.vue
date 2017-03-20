<style lang='sass'>
.pipple{ 
	position: absolute; z-index: 3;
	.circle-range {
		position:absolute;
		background:none;
		height: 25px;
		width: 50px;
		
	}

	.circle {
		position:absolute;
		left:0;
		right:0;
		top:0;
		bottom:0;
		 width:0; height:0;
		margin:auto;
		background:none;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		border: 1px solid #FFF;
		border-radius: 50%;
		-webkit-animation:circle 1s ease-out infinite ;
		animation:circle 1s ease-out infinite;
		opacity:0;
		&.c2{
			animation:circle2 1s ease-out infinite;
			-webkit-animation:circle2 2s ease-out infinite;
		}
		&.c3{
			-webkit-animation:circle3 2.5s ease-out infinite;
		}
	}
}

@keyframes circle {
	0% { opacity:0; width:0; height:0; }
	50% { opacity:1; width:100%; height:100%; }
	100% { opacity:0; width:100%; height:100%; }
}

@-webkit-keyframes circle {
	0% { opacity:0; width:0; height:0; }
	50% { opacity:1; width:100%; height:100%; }
	100% { opacity:0; width:100%; height:100%; }
}
@keyframes circle2 {
	0% { opacity:0; width:0; height:0; }
	60% { opacity:1; width:100%; height:100%; }
	100% { opacity:0; width:150%; height:150%; }
}

@-webkit-keyframes circle2 {
	0% { opacity:0; width:0; height:0; }
	60% { opacity:1; width:100%; height:100%; }
	100% { opacity:0; width:150%; height:150%; }
}
@keyframes circle3{
	0% { opacity:0; width:0; height:0; }
	60% { opacity:1; width:100%; height:100%; }
	100% { opacity:0; width:150%; height:150%; }
}

@-webkit-keyframes circle3{
	0% { opacity:0; width:0; height:0; }
	60% { opacity:1; width:100%; height:100%; }
	100% { opacity:0; width:150%; height:150%; }
}
</style>
<template>
<div class="pipple img-size" :data-width='width' v-bind:data-height='height' :data-top='top' :data-left='left'>
	<div style="left: 1%; top: 7%; opacity: 0.2;" class="circle-range">
		<div class="circle c3"></div>
	</div>
	<div style="left: 17%; top: 74%; opacity: 0.2;" class="circle-range">
		<div class="circle c1"></div>
	</div>
	<div style="left: 11%; top: 24%; opacity: 0.1;" class="circle-range">
		<div class="circle"></div>
	</div>
	<div style="left: 31%; top: 88%; opacity: 0.1;" class="circle-range">
		<div class="circle c2"></div>
	</div>
	<div style="left: 23%; top: 15%; opacity: 0.2;" class="circle-range">
		<div class="circle"></div>
	</div>
	<div style="left: 62%; top: 74%; opacity: 0.3;" class="circle-range">
		<div class="circle c3"></div>
	</div>
	<div style="left: 28%; top: 81%; opacity: 0.2;" class="circle-range">
		<div class="circle c2"></div>
	</div>
</div>
</template>
<script>
	export default {
		props : {
			width:280,
			height:805,
			left : 0 ,
			top : 353
		}
	}
</script>