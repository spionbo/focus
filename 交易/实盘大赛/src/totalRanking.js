import App from './totalRanking/App';
import RankList from './totalRanking/ranklist';
import {getQueryString} from '../../common/js/global';
import { Router, Route, hashHistory } from 'react-router';
import Detail from './comment/detial.jsx'
import Mask from './comment/mask.jsx'

window.matchId = getQueryString('matchId')||1
window.passportId = getQueryString('passportId')||'';
window.accessToken = decodeURIComponent(getQueryString('accessToken'))||'';

class Routes extends React.Component {
	constructor () {
		super();
	}
	render() {
		return (
			<Router history={hashHistory} >
			  	<Route path="/" component={App}/>
			  	<Route path='/' component={Mask}>
			  		<Route path='/rankList' component={RankList}/>
			   		<Route path="/detial" component={Detail}/>
			  	</Route>
			 </Router>
		);
	}
}
ReactDOM.render((
  <Routes/>
), document.getElementById('APP'));