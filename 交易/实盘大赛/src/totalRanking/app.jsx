import '../css/totalRanking';
import RankList from './ranklist';
import { Link } from 'react-router';
import {hisranklist} from '../comment/URL';
import Mask from '../comment/mask.jsx'

module.exports = class App extends React.Component {
	constructor () {
		super();
		this.state ={
			 list : []
		}
	}
	componentDidMount(){
		document.title='来爱投顾实盘争霸赛 享百万奖金赢千万实盘';
		var wrap = $('.container');
        wrap.css({transform:'translateY(0px)',opacity:1});
        var self = this;
		$.ajax({
            url:hisranklist,
            dataType:'json',
            data:{
                matchId:window.matchId
            },
            headers:{
                passportId:passportId
            },
            type:'get',
            success:function(data){
                 self.setState({list: data.data.list});
            }
        });
	}
	showList(){
		return this.state.list.map((obj)=>{
			var type = {
				'WEEK':'周冠',
				'MONTH':'月冠',
				'TOTAL':'总冠'
			}
			if(obj.generated=='0'){
				return <li className={obj.generated=='0'?'unbind':''}>
					<a>
						<h3>{obj.rankTitle}</h3>
						<time>
							{obj.myRank==1?type[obj.rankListType]:obj.assetType?obj.myRank+'/'+obj.userCount:''}
							<i></i>
						</time>
					</a>
				</li>
			}
			return <li className={obj.generated=='0'?'unbind':''}>
				<Link to={{pathname:"/rankList",query:{date:obj.rankListDate,rankListType:obj.rankListType}}}>
					<h3>{obj.rankTitle}</h3>
					<time>
						{obj.myRank==1?type[obj.rankListType]:obj.assetType?obj.myRank+'/'+obj.userCount:''}
						<i></i>
					</time>
				</Link>
			</li>
		})
	}
	render(){
		if(this.state.list.length){
			return (
				<div class='app'>
					<div class='rank'>
						<div class="list">
							<ul>
								{ this.showList() }
							</ul>
						</div>
					</div>
				</div>
			);
		}else{
			return (
                <div id='loadding' style={{marginTop:'7rem'}}>
                    <i></i>
                    <p>加载中...</p>
                </div>
            );
		}
	}
}