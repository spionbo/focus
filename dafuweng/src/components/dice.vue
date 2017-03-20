<style lang='sass'>
@import '../css/global.scss';
	.dice-do{
		position: fixed; z-index:996; right:0.625rem;
		background:url('../images/prizedo.png');
		background-size: contain;
		box-sizing:border-box;
		-webkit-box-sizing:border-box;
		font-size:1.125rem; color:#ffffcc;
		@include transition-duration;
		@include transform(translateX(50px));
		opacity:0;
		&.cur{
			@include transform(translateX(0));
			opacity:1;
		}
		.prize-icon{
			position:absolute;
			@include contain('../images/dice/gun.png');
			@include animation(prizemation,13s,linear,infinite);
			@include keyframes(prizemation){
				from {
					-webkit-transform: rotate(0deg);
				}
				to {
					-webkit-transform: rotate(360deg);
				}
			}
		}
		.num{ 
			position:absolute;
			text-align:center;
			&.len3{ font-size:.875rem; padding-top:0.1875rem;}
			@include size(line-height,16px);
			.small{ @include font-size(12px); }
		}
	}
</style>
<template>
<div class="dice-do img-size" data-width='209' data-height='99' data-bottom='51' data-paddingLeft='100' data-paddingTop='10' @click='dicedo'>
	<div class='prize-icon img-size' data-left='0' data-top='0' data-width='119' data-height='102'></div>
	<div class='num img-size' :class='{len3:len3}' data-width='100' data-paddingTop='15'>
		<p>{{diceChance}}</p>
		<p class='small'>请点击</p>
	</div>
</div>
</template>
<script>
	import requirePop from '../pop/requirePop.js';
	export default {
		props : {

		},
		components : {
			
		},
		data(){
			return {
				map : info.map,
				diceChance : 0,
				len3 : false
			}
		},
		mounted(){
			this.update();
			setTimeout(function(){
                $('.dice-do').addClass('cur')
            },1200)
		},
		methods : {
			dicedo : function(){
				if(info.diceChance>0 || info.map.pointOnMap>=info.mapLength){
                    var map = info.map;
                    if(map.pointOnMap>=info.mapLength){
                    	info.onmap(()=>{
	                        return requirePop('goEnd',{
	                            props: {
	                                num : map.userRank,
	                                name : map.prizeOfRank,
	                                transition : 'bounceIn'
	                            }
	                        });
                    	});
                    	return;
                    }
					requirePop('selectScene',{
	                	props: {
							transition : 'bounceIn'//rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
						}
	                });
				}else{
					requirePop('choujiangjihui',{
                        props: {
							content : '您已经没有投骰子的机会！',
							transition : 'bounceIn',
							okTxt : '投资获取机会',
							okCallback : function(){
	                            T.callApp.investment();
	                        }
                        }
                    },'publicTips');
				}
			},
			update : function(){
				var self = this;
				info.getDice(()=>{
					self.diceChance = info.diceChance;
					self.len3 = self.diceChance>=100;
				})
			}
		}
	}
</script>