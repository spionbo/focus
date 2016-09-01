import $ from 'webpack-zepto';
export default function( callback){
	var  oLoadingBox = $('.loading-box')
		,oLoading = $('#track')
		,oTxt = $('#txt')
		,count = 0
		,timer = null
		,imgUrlArr = []
		,img = $('.layout-img')
		,len = img.length;
		
	img.each(function () {
		var imgUrl = $(this).attr('data-src');
		imgUrlArr.push(imgUrl);
	});
	if (len) {
		var body = $('body'),
			height = $(window).height();

		body.css({height:height+'px'});
		img.each(function( i ){
			var  oImage = new Image()
				,self = $(this)
				,src = self.attr('data-src');
			oImage.src = src;
			oImage.onload = function () {
				count++;
				oLoading.width(Math.round(count / imgUrlArr.length * 300));
				oTxt.children('span').html('Loading&nbsp;' + Math.round(count / imgUrlArr.length * 100) + '%');
				if (count == len) {
					oLoadingBox.remove();
					body.css({ 'height': 'auto', 'overflowY': 'auto' });
					img.each(function(){
						this.src = $(this).attr('data-src');
					});
					callback();
			   }
		   }
		});
	} else {
		callback();
		oLoadingBox.remove();
	}
};