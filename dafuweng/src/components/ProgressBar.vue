<style lang='sass'>
	@import '../css/global.scss';
	.progressbar{ @include box; @include boxMiddle;
		position: fixed; z-index: 997; left:0; bottom:0;
		width:100%; @include font-size(12px);
		@include transition-duration;
		@include contain('../images/progressbar.jpg');
		@include transform(translateY(50px));
		opacity:0;
		&.cur{
            @include transform(translateY(0));
            opacity:1;
        }
		.current-num{ width:$s40; color:#fff600; text-align:center; }
		.total{ width:$s50; color:#fff600; text-align:center; }
		.jian{ position: absolute; left:2.625rem;
			@include contain('../images/progress-jian.png');
			color: #000; font-size: 7px; text-align: center;
			@include transition-duration(.5s);
		}
		.progress{ @include box-flex; height: $s4; font: 0/0 arial; border:$s1 solid #7aeafd; border-radius: $s3; overflow:hidden; padding:0 $s2;
			background:#155da4; box-shadow:0 1px 1px rgba(0,0,0,.3) inset;
			
		}
		.percent{ float:left; width:$s3; height: $s2; margin-top:$s1; background:#fff600;
			@include transition-duration(.5s);
		}
	}
</style>
<template>
<div class="progressbar img-size" data-height='50'>
	<div class="current-num">{{current}}</div>
	<div class="progress">
		<div class="jian img-size" data-width='29' data-height='32' data-lineHeight='29' data-bottom='25'>{{current}}</div>
		<div class="percent" :style="{width:percent+'%'}"></div>
	</div>
	<div class="total">END</div>
</div>
</template>
<script>
	export default {
		data(){
			return {
				percent : '1%',
				total : 118 ,
				current : 0
			}
		},
		mounted(){
			this.upstep();
            setTimeout(function(){
                $('.progressbar').addClass('cur')
            },1000)
		},
		methods : {
			upstep : function(){
				var self = this;
				info.onmap(()=>{
					self.current = info.map.pointOnMap;
					var progress = $('.progressbar .progress'),
						jian = progress.find('.jian'), 
						percent = self.current/self.total,
						left = 40 + percent*progress.width()-jian.width()/1.5;
					setTimeout(()=>{
						jian.css({left:left});
						self.$set(self,'percent',percent*100);
					},500);
				})
			}
		}
	}
</script>