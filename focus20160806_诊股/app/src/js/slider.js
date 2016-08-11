import $ from 'webpack-zepto';
export default ( self , obj ) => {
	//console.dir(obj);
	var index = 0,
		len = obj.data.length,
		fistList = [],
		secondList = [];
	function animate( callback ){
		var li = $(obj.li)
		li.addClass('animated flip');
		setTimeout(()=>{
			li.removeClass('animated flip');
			callback();
		},1050)
	};
	obj.left.click(function(event) {
		animate(function(){
			index++;
			if(index>=len){
				index = 0;
			}
			fistList = obj.data[index].slice(0, 3);
			secondList = obj.data[index].slice(3);
			self.firstList = fistList;
			self.secondList = secondList;
		});
	});
	obj.right.click(function(event) {
		animate(function(){
			index--;
			if(index<=0){
				index = len-1;
			}
			fistList = obj.data[index].slice(0, 3);
			secondList = obj.data[index].slice(3);
			self.firstList = fistList;
			self.secondList = secondList;
		});
	});
}