import '../css/dyn.scss';
import Move from '../comment/moveEvent';
import {stock} from './callApp';
import {btnEvent} from '../../../common/js/global';

module.exports = class Dyn extends React.Component{
	constructor(...args){
		super(...args);
	}
	componentDidMount(){
		this.transition();
	}
	callStock( code ){
    	btnEvent(function(){
			stock(code);
    	});
	}
	componentDidUpdate(){
        
    }
    transition(){
    	new Move({
             nav : $('.dyn > nav li')
            ,effect : $('.dyn .effect')
            ,option : $('.dyn .option')
        });
    }
    getList( list , userId ){
    	var self = this;
    	if(list.length){
    		return list.map(( obj )=>{
				return <section onClick={self.callStock.bind(this,obj.stockCode)}>
					<div class="tit">
						<h2>
							<span className={obj.entrustBsName=='买入'?'tag':'tag blue'}>{obj.entrustBsName}</span>
							{obj.stockName}
						</h2>
						<time>{obj.dealTimeStr.substr(2)}</time>
					</div>
					<div class="price">
						<h3>{obj.preRate} → {obj.postRate}</h3>
						<em>参考成交价：{obj.dealPrice}</em>
					</div>
					<div class="submit">
						<div class="btn">{userId==window.passportId?'详情':'跟单'}</div>
					</div>
				</section>
			})
    	}else{
    		return <div style={{margin:'4rem 0',textAlign:'center'}}>暂无数据</div>
    	}
    }
    getHouse( list ){
    	if(list.length){
    		return list.map((obj)=>{
				var rate = (obj.incomeRate*100).toFixed(2);
				return <ul>
					<li class="name">{obj.stockName}</li>
					<li class="house">{(obj.holdPercent*100).toFixed(2)}%</li>
					<li class="price">{obj.costPrice}</li>
					<li class="rate"><em className={obj.incomeRate<0?'green':''}>{obj.incomeRate>0?'+'+rate:rate}%</em></li>
				</ul>
			})
    	}else{
    		return <div style={{margin:'4rem 0',textAlign:'center'}}>暂无数据</div>
    	}
    }
	render(){
		var data = this.props.data , 
			data1 = this.props.house ,
			userId = this.props.userId;
		if((data || data1)&&userId){
			var list = data.data.list , 
				house = data1.data.list;
			return (
				<aside class="dyn">
					<nav>
						<li class="current"><h2>交易动态</h2></li>
						<li><h2>当前持仓</h2></li>
					</nav>
					<div class="effect">
						<div class="option">
							<articel class="list">
								{this.getList(list,userId)}
							</articel>
						</div>
						<div class="option">
							<article class="listHouse">
								<div class="tit">
									<ul>
										<li class="name">名称</li>
										<li class="house">仓位</li>
										<li class="price">成本价</li>
										<li class="rate">收益率</li>
									</ul>
								</div>
								<div class="content">
									{this.getHouse(house)}
								</div>
							</article>
						</div>
					</div>
				</aside>
			);
		}else{
			return (
                <div id='loadding' style={{marginTop:'5rem'}}>
                    <i></i>
                    <p>加载中...</p>
                </div>
            );
		}
	}
}