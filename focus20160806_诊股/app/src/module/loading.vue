<template>
	<!-- <div class='share-img'>
		<img  width='1' height='1' src='http://i0.jrjimg.cn/zqt-red-1000/focus/focus20160714/app/banner.png'>
	</div> -->
	<div class="loading-box">
		<div class="track" id="track">
			<div id="txt" class="txt"><span></span></div>
			<div class="bar"></div>
		</div>
	</div>
</template>
<style scoped>
.share-img{ display: none; }
.focus-cont { padding-bottom: 0; /*max-width: 640px;*/ margin: 0 auto; position: relative; }
.loading-box { width: 100%; height:100%; background: rgba(0,0,0,0.8); position: fixed; left: 0; top: 0; bottom:0;  color: #fff; overflow: hidden; z-index: 3000;}
.track { position: absolute; top: 50%; left: 50%; width: 0px; height: 2px; }
	.track .txt { position: absolute; top: -30px; left: 0; width: 300px; text-align: center; }
		.track .txt span, .track .bar { position: relative; left: -50%; }
	.track .bar { position: absolute; top: -50%; width: 100%; height: 100%; background: #f1f1f1; }
.layout-img { display:none; }
.bgbig { width: 100%; height: 100%; background: url('http://i0.jrjimg.cn/wap2014/wxbug/bgbig.png') repeat; position: fixed; top: 0; left: 0; z-index: 9998; }
	.tsbox { position: fixed; top: 0; right: 0; z-index: 9999; }
		.tsbox img { width: 98%; height: auto; display: block; margin: 0 auto; }
</style>