<style lang='sass'>
	@import '../css/global.scss';
	.canvas-light{ position: fixed; z-index: 991; left:0; top:0; width:100%; height:100%; 
		#canvas{ display:block;  width:100%; height:100%; }
	}
</style>
<template>
<div class="canvas-light">
	<canvas id="canvas"></canvas>
</div>
</template>
<script>
	export default {
		methods : {
			getType : function( type ){
				setTimeout(function(){
					if( type == 'rain' ){
						require.ensure([],function(require){
							try{
								var rain = require('./rain.js');
								rain();
							}catch(e){
								
							}
						})
					}else if( type =='snow' ){
						require.ensure([],function(require){
							try{
								var snow = require('./snow.js');
								snow(2,20,100);
							}catch(e){
								
							}
						})
					}
				},500);
			}
		}
	}
</script>