import '../css/mask';
import {loadding} from '../../../common/js/global';
module.exports = class Mask extends React.Component{
	constructor(...args){
		super(...args)
	}
	componentDidMount(){
		var wrap = $('.container');
        wrap.css({transform:'translateY(0px)',opacity:1});
        wrap.css({'-webkit-transform':'translateY(0px)',opacity:1});
		setTimeout(
			this.transtion
		,100)
	}
	transtion(){
		let mask = $('#Mask')
		mask.css({transform:'translateX(0px)',opacity:1});
        mask.css({'-webkit-transform':'translateX(0px)',opacity:1});
	}
	render(){
		return (
			<div id='Mask' class='mask'>
				{this.props.children}
			</div>
		);
	}
}