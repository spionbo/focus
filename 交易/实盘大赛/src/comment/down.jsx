import '../css/detail.scss';
import Dyn from './transactionWarehouse'
import {yieldcurve} from './URL';
import {getHash,btnEvent} from '../../../common/js/global';

module.exports = class Down extends React.Component{
	constructor(...args){
        super(...args);
    }
    scrollEvent(down){
    	var elem = $('#Deital') , height ;
		$(elem).bind('touchmove touchend scroll', function () {
			height= $(elem)[0].scrollHeight;
			if ( $(elem).scrollTop() !=0 && ($(elem).scrollTop() + $(window).height() >= height - down.height()) ) {
				down.addClass('hide');
			} else {
				down.removeClass('hide');
			}
		});
    }
    componentDidMount(){
    	var down = $('#Down');
    	var itougu = getHash('itougu') || '';
		if(itougu.indexOf('false')>-1){
	    	down.appendTo('#APP')
	    	this.scrollEvent(down);
		}else{
			down.remove();
		}
    }
    downLoad(){
    	btnEvent(function(){});
    }
	render(){
		return (
			<div id='Down' class="app-download">
				<div class='text'>更多牛人实盘收益免费看</div>
				<span class='submit'><a class="btn" onClick={this.downLoad}>立即查看</a></span>
		    </div>
		);
	}
}