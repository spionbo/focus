<template>
	<div class="topbar-1 img-size" data-height='780' v-show='status'>
		<div class="timeText img-size" data-bottom='198'>{{timeText}}</div>
		<div class="start-time img-size" data-left='50' data-top='413'>
			<p class="p1">
				<em>{{month}}</em>月
				<em>{{day}}</em>日
			</p>
			<p class="p2">
				{{time}}
			</p>
		</div>
		<div class="time img-size" data-left='106' data-top='603' >
			<ul class="img-size" data-width='532' data-height='81' data-lineHeight='81'> <!-- d+':'+h+':'+m+':'+s -->
				<li>0</li>
				<li>0</li>

				<li class="img-size" data-width='65'></li>

				<li>0</li>
				<li>0</li>

				<li class="img-size" data-width='70'></li>

				<li>0</li>
				<li>0</li>
			</ul>
		</div>
	</div>
	<div class="topbar-2 img-size" data-height='807' v-show='!status'></div>
</template>
<script>
	

	export default {
		name : 'top',
		props : {
			status: Boolean,
			month : String,
			day : String,
			time : String,
			timeText : String
		},
		ready (){
			this.$dispatch('timeElement', '.time ul li')
		}
	}
</script>
<style scoped>
.topbar-1{ position: relative; z-index: 2; background: url('http://i0.jrjimg.cn/zqt-red-1000/focus/focus20160806/app/top1.jpg') no-repeat; background-size: 100% auto; }
.topbar-2{ background: url('http://i0.jrjimg.cn/zqt-red-1000/focus/focus20160806/app/top2.jpg') no-repeat; background-size: 100% auto; }

.timeText{ position: absolute; left: 0; width: 100%; text-align: center; color: #fff; font-size: .9375rem; font-weight: bold; }

.start-time{ position: absolute; }
.start-time .p1{ font-size: .7rem; }
.start-time .p1 em{ font-size: 1.25rem; font-weight: bold; }
.start-time .p2{ font-size: .5rem; }
.start-time .p2 em{ font-size: .625rem; }

.time{ position: absolute; font-size: 1.33rem; }
.time ul{ width: 100%; display: box; display: -webkit-box; box-orient: horiznotal;  -webkit-box-orient:horiznotal;  }
.time li{ width:12.5% ; box-flex: 1; -webkit-box-flex: 1; text-align: center; color: #fff; }
</style>