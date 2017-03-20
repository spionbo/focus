<style lang='sass'>
	@import '../css/global';
	.prize-box{ margin:0 auto;
		@include transform(translateY(-300px));
		@include transition-duration;
		@include contain('../images/prize-box.png'); @include box-sizing;
		&.cur{ @include transform(translateY(0));  }
		ul{
			li{ float:left; text-align: center; }
			h2{ @include size(height,16px); @include size(line-height,16px); @include font-size(7px); color:#cc0000; font-weight: normal; }
			h3{ @include size(height,15px); @include size(line-height,15px); @include font-size(9px); color:#fff; font-weight: normal;}
		}
	}
</style>
<template>
<div class="prize-box img-size" data-width='580' data-height='200' data-paddingTop='64' data-paddingLeft='26'>
	<ul class="img-size" data-paddingTop='60'>
		<li class="img-size" data-marginRight='15' data-width='121'>
			<h2>3000元京东卡</h2>
			<h3>{{list[0]}}</h3>
		</li>
		<li class="img-size" data-marginRight='15' data-width='121'>
			<h2>iPad mini2</h2>
			<h3>{{list[1]}}</h3>
		</li>
		<li class="img-size" data-marginRight='15' data-width='121'>
			<h2>1000元携程卡</h2>
			<h3>{{list[2]}}</h3>
		</li>
		<li class="img-size" data-marginRight='15' data-width='121'>
			<h2>300元京东卡</h2>
			<h3>{{list[3]}}</h3>
		</li>
	</ul>
</div>
</template>
<script>
	export default {
		data (){
			return {
				list : [
					'虚位以待',
					'虚位以待',
					'虚位以待',
					'',
				]
			}
		},
		mounted(){
			var self = this;
			info.onmap((_data)=>{
				try{
					_data.map.rank.map(( val , i )=>{
						self.list[i] = val;
						self.$set(self.list,i,val);
					})
				}catch(e){}
			});
			setTimeout(()=>{
				$('.prize-box').addClass('cur');
			},2000);
		}
	}
</script>