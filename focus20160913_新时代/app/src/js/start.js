module.exports = class star{
	constructor( obj ){
		this.config = {
			num : 50 //
			,spend : 10000
			,dome : $()
			,div : $('<div class="star"></div>')
			,children : []
			,color : ['#d823ff','#ffffff','#fff001','#00ff42','#ffe300']
			,height : 255
		}
		$.extend( this.config , obj );
		this.init();
	}
	init(){
		this.width = this.config.dome.width();
		this.height = this.config.dome.height();
		this.clone();
		setInterval( ()=>{this.position} , this.config.spend )
	}
	clone(){
		var i = 0
			,xin;
		for( ; i< this.config.num ; i++ ){
			xin = this.config.div.clone();
			xin.appendTo(this.config.dome);
		}
		this.config.children = this.config.dome.children();
		this.position();
	}
	position(){
		const config = this.config;
		if(this.config.children.length){
			$.each(this.config.children,function( i , ele ){
				var  width = $(window).width()/2
					,left = Math.random()*width*([1,-1][Math.round(Math.random())])
					,top = Math.random()*config.height
					,d = Math.random()*5
					,o = Math.random()*1
					,c = config.color[Math.round(Math.random()*4)]
				$(ele).css({width:d+'px',height:d+'px',left:left+'px',top:top+'px',opacity:o,background:c})
			})
		}
	}
}