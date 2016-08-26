import $ from 'webpack-zepto';
export default ( self , obj ) => {
	//console.dir(obj);
	var index = 0,
		len = obj.data.length,
		fistList = [],
		secondList = [],
		timer = 0 , _tim = 5000;
	function animate( callback ){
		//return callback();
		var li = $(obj.li)
		li.addClass('animated flip');
		setTimeout(()=>{
			li.removeClass('animated flip');
			callback();
		},1050)
	};
	function move( num ){
		animate(function(){
			index = num==1? (index+1) : (index-1);
			if(index>=len){
				index = 0;
			}else if(index<0){
				index = len-1
			}
			fistList = obj.data[index].slice(0, 3);
			secondList = obj.data[index].slice(3);
			self.firstList = fistList;
			self.secondList = secondList;
		});
	}
	function clear(){
		$(this).mouseover(function(event) {
			clearInterval(timer);
			$(this).mouseout(function(){
				timer = setInterval(()=>{
					move(1)
				},_tim)
			})
		});
	}
	clear.call(obj.left);
	clear.call(obj.right);
	obj.left.click(function(event) {
		move( 0 )
	});
	obj.right.click(function(event) {
		move( 1 )
	});

	timer = setInterval(()=>{
		move(1)
	},_tim)
}