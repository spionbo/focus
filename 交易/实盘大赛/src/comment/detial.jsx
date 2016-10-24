import '../css/detail.scss';
import Dyn from './transactionWarehouse'
import Chart from './chart'
import {accountinfo , record , current , userImg} from './URL';
import {getHash , getuserImg} from '../../../common/js/global';
import Down from './down.jsx'
import callApp from './callApp';

module.exports = class Detail extends React.Component{
	constructor(...args){
        super(...args);
        this.state = {
          data : null ,
          dynData : null ,
          house : null , 
          userId : null
        }
    }
    dyns(userId ,house){
    	var self = this;
    	if(window.passportId && window.passportId==userId){//看自己
	        $.ajax({
	            url:record,
	            dataType:'json',
	            data:{
	                matchId:window.matchId 
	            },
	            type:'get',
	            contentType:"charset=UTF-8",
	            headers:{
	                passportId:window.passportId , 
	                accessToken:window.accessToken
	            },
	            success:function(data){
	            	self.setState({
	                    house : house , 
	                    dynData : data
	               	});
	            }
	        });
		}else{//看别人
			$.ajax({
	            url:record,
	            dataType:'json',
	            data:{
	                matchId:window.matchId ,
	                userId:userId
	            },
	            type:'get',
	            //contentType:"charset=UTF-8",
	            success:function(data){
	            	self.setState({
	                    house : house , 
	                    dynData : data
	               	});
	            }
	        });
		}
    }
    componentDidMount(){
    	var self = this ,
			userId = getHash('userId');

		self.setState({userId:userId});

		$.ajax({
            url:accountinfo,
            dataType:'json',
            data:{
                matchId:window.matchId ,
                userId : userId
            },
            type:'get',
            success:function(_data){
            	self.setState({
                    data : _data 
               	});
				$.ajax({
					url : current,
					dataType:'json',
					data : {
						userId : userId
					},
					type:'get',
					//contentType:"charset=UTF-8",
		            success:function(data){
		            	_data.data.userId = userId;
		            	getuserImg([_data.data],function(){
		            		self.dyns(userId , data);
                        },userImg);
		            }
				});
            }
        });
        this.transition();
    }
    componentDidUpdate(){
    	var obj = this.state.data ,
			dynData = this.state.dynData,
			house = this.state.house;
    	this.share();
    	if(obj && house && dynData && this.state.userId){
    		this.transition();
    	}
    }
    share(){
    	var obj = this.state.data ,
			dynData = this.state.dynData,
			house = this.state.house;
		function is_weixin() {
			var ua = navigator.userAgent.toLowerCase();
			if (ua.match(/micromessenger/i) == "micromessenger") {
				return true;
			} else {
				return false;
			}
		}
		if(obj && house && dynData && this.state.userId){
			obj = obj.data;
	        const share = {
				 title : obj.userName+'在爱投顾实盘大赛中打败了'+(((obj.totalUser-obj.rank)/obj.totalUser)*100).toFixed(2)+'％的人，来围观神操作！'
				,content : '总收益'+((obj.totalIncome*100).toFixed(2))+'％，周收益：'+((obj.weekIncome*100).toFixed(2))+'，月收益：'+((obj.monthIncome*100).toFixed(2))
				,pic : obj.Img
				,url : 'http://i0.jrjimg.cn/zqt-m/webview/transaction/firm/index.html#/detial?userId='+this.state.userId+'&itougu=false'
			}
			var itougu = getHash('itougu') || '' , 
				share_btn = $('#Deital .share_btn');

			share_btn.appendTo($('#Deital').parent().parent());

			if(itougu.indexOf('false')>-1){
				share_btn.remove();
				if(is_weixin()){//微信平台分享
					setTimeout(()=>{
						require.ensure([],()=>{
							const InitWeChatShare = require('./wechat-share.js');
							InitWeChatShare({
								shareTitle: share.title,
								shareLink: share.url,
								shareDesc:  share.content,
								shareImg: share.pic
							})
						});
					},1000);
				}else{
					/*const p = new pop();
					p.share('.window .share',share);*/
				}
			}else{
				share_btn.click(function(){
					callApp.share(share);
				})	
			}
		}
    }
    transition(){
        var wrap = $('#Deital');
        wrap.css({transform:'translateY(0px)',opacity:1});
        wrap.css({'-webkit-transform':'translateY(0px)',opacity:1});
    }
    getHeader( obj ){//{obj.asset>10000?(obj.asset/10000).toFixed(2)+'万':obj.asset}
		return <section>
			<span class="tag-shipan"></span>
			<div class="count">
				<h4>参赛总收益</h4>
				<em className={obj.totalIncome<0?'green':obj.totalIncome>0?'red':''}>{(obj.totalIncome*100).toFixed(2)}%</em>
				<p>{obj.rank}/{obj.totalUser}</p>
			</div>
			<div class="num">
				<ul>
					<li>总资产</li>
					<li>
						<div class="line"></div>
						
						{obj.asset>100000?'10万以上':'10万以下'}
					</li>
				</ul>
				<ul>
					<li>交易次数</li>
					<li>
						<div class="line"></div>
						{obj.tradeCount}
					</li>
				</ul>
				<ul>
					<li>周收益</li>
					<li>
						<div class="line"></div>
						<em className={obj.weekIncome<0?'green':obj.weekIncome>0?'red':''}>{(obj.weekIncome*100).toFixed(2)}%</em>
					</li>
				</ul>
				<ul>
					<li>月收益</li>
					<li>
						<div class="line"></div>
						<em className={obj.monthIncome<0?'green':obj.monthIncome>0?'red':''}>{(obj.monthIncome*100).toFixed(2)}%</em>
					</li>
				</ul>
			</div>
		</section>
    }
	render(){
		var obj = this.state.data ,
			dynData = this.state.dynData,
			house = this.state.house;
		if(obj && house && dynData && this.state.userId){
			document.title = obj.data.userName;
			return (
				<article id='Deital' class="detail">
					{this.getHeader(obj.data)}
					<Chart/>
					<Dyn data={dynData} house={house} userId={this.state.userId}/>
					<div class='share_btn'></div>
					<Down/>
				</article>
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