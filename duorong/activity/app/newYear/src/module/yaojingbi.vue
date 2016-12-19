<template>
<div class="yaojinbi">
	<div class="product">
		<ul>
			<li class="img-size" data-width='126' data-height='135'></li>
			<li class="img-size" data-width='135' data-height='131'></li>
			<li class="img-size" data-width='138' data-height='132'></li>
		</ul>
	</div>
	<div class="haoli img-size" data-width='616' data-height='232' data-marginTop='-8'>
		<div class='text img-size' data-width='545' data-left='50' data-top='140'>
			我的剩余摇奖次数：
			<div class="btn img-size" v-if='!islogin' data-width='212' data-height='59' @click='login'></div>
			<div class="num img-size" v-else data-lineHeight='59'><em>{{rafflechance}}</em>次</div>
		</div>
	</div>
</div>
</template>
<script>
import T from '../../../../common/js/modules/global.js';
	export default {
		name : 'yaojingbi',
		props : {
			islogin : Boolean , 
			rafflechance : [parseInt , String]
		},
		ready(){
			
		},
		methods : {
			login : function(){
				this.$dispatch('login');
			}
		}
	}
</script>
<style scoped>

</style>