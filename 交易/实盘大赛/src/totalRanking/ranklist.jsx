const _userImg = 'http://i0.jrjimg.cn/zqt-red-1000/focus/logo_100_100.png';
import Move from '../comment/moveEvent';
import { Link , IndexLink } from 'react-router';
import {ranklistdetail,userImg} from '../comment/URL';
import {getHash,getuserImg} from '../../../common/js/global';
var timer1 = 1  , dataIndex=0 , 
    cath = {data1:[],data2:[]};
module.exports = class RankList extends React.Component{
	constructor(...args){
		super(...args);
        this.state = {
            data1 : null , 
            data2 : null ,
            loadData : false
        }
        this.move = null;
        this.lessNum = 1;
        this.moreNum = 1;
        this.lessThan10W();
        this.moreThan10W();
	}
	componentDidMount(){
        document.title='来爱投顾实盘争霸赛 享百万奖金赢千万实盘';
        $('.share_btn').remove();
        
    }
    componentDidUpdate(){
        var data1 = this.state.data1 , 
            data2 = this.state.data2; 
        if(data1.length || data2.length){
            if(!this.move){
                this.move = new Move({
                     nav : $('.ranklist > nav li')
                    ,effect : $('.ranklist .effect')
                    ,option : $('.ranklist .option')
                    ,optionHeight : true
                });
            }
            this.move.update();
            setTimeout(
                this.transition
            ,500);
            $('.share_btn').remove();
            this.loadding();
        }

    }
	transition(){
        var wrap = $('.ranklist');
        wrap.css({transform:'translateY(0px)',opacity:1});
        wrap.css({'-webkit-transform':'translateY(0px)',opacity:1});
    }

    loadding(){
        var self = this;
        $('.ranklist .option .content').each(function( i , ele ){
            var scrllTop , height;
            $(ele).scroll(function(){
                scrllTop = $(ele).scrollTop()
                height = $(ele).height();
                if(scrllTop+150>=height){
                    clearTimeout(timer1);
                    if(i==0){//10万以上
                        timer1 = setTimeout(function(){
                            self.moreThan10W(self.moreNum++,true)
                        },300)
                    }else{//10万以下
                        timer1 = setTimeout(function(){
                            self.lessThan10W(self.lessNum++,true)
                        },300)
                    }
                }
            })
        })
    }
    prize( obj ){
        let txt;
        if(obj.rank==1){
            txt = '冠军';
        }else if(obj.rank==2){
            txt = '亚军';
        }else if(obj.rank==3){
            txt = '季军';
        }else{
            txt = '第'+obj.rank+'名'
        }
        return obj.bonusOfRank ? <p>{txt}将获得{obj.bonusOfRank}元奖励</p> : '';
    }
    lessThan10W(num , b){ //10万以下
        num = num || 1;
        this.moreThan10W(num,2 , b);
    }
    moreThan10W(num , type , b){//10万以上
        num = num || 1;
        type = type || 3;
        var self = this , 
            date = getHash('date'),
            listName = {'TOTAL':4,'WEEK':2,'MONTH':3},
            rankListType = getHash('rankListType'),
            arr1 = self.state.data1 ,
            arr2 = self.state.data2 ;

        arr1 = arr1 || [];
        arr2 = arr2 || [];

        rankListType = listName[rankListType];

        $.ajax({
            url:ranklistdetail,
            dataType:'json',
            data:{
                initDate : date , 
                rankListType:rankListType,
                pageSize : 20,
                pageNumber : num,
                assetType : type
            },
            type:'get',
            success:function(data){
                if(type == 3){//10万以上
                    arr1 = arr1.concat(data.data.list);
                    cath.data1 = cath.data1.concat(arr1);
                }else if(type==2){//10万以下
                    arr2 = arr2.concat(data.data.list) ;
                    cath.data2 = cath.data2.concat(arr2);
                }
                getuserImg(data.data.list,function(){
                    dataIndex++;
                    if(!b && dataIndex ==2){
                        dataIndex = 0;
                        self.setState({data1:cath.data1,data2:cath.data2});
                        cath = {data1:[],data2:[]};
                    }else if(b){
                        self.setState({data1:cath.data1,data2:cath.data2})
                        cath = {data1:[],data2:[]};
                    }
                },userImg)
            }
        });
    }
    getList(arr){
        if(arr.length){
            return arr.map((obj , i)=>{
                let percent = (obj.income*100).toFixed(2) , 
                    _num = ['one','two','three'] , 
                    cls = obj.rank<4?_num[obj.rank-1]:'';
                return  <ul>
                            <Link to = {{pathname:"/detial",query:{userId:obj.userId}}}>
                                <li class="number"><span className={cls}>{obj.rank<10?'0'+obj.rank:obj.rank}</span></li>
                                <li class="img"><img src={obj.headIconUrl||_userImg}/></li>
                                <li class="text">
                                    <h2>{obj.userName||'爱投顾'}</h2>
                                    {this.prize(obj)}
                                </li>
                                <li class="percent">
                                    <em className={percent>0?'red':'green'}>{percent>0?'+'+percent:percent}%</em>
                                </li>
                            </Link>
                        </ul>
            });
        }else{
            return (
                <div style={{marginTop:'7rem',textAlign:'center'}}>
                    暂无数据
                </div>
            );
        }
    }
	render(){
        var data1 = this.state.data1 , 
            data2 = this.state.data2 ,
            self = this;
        if(!data1 && !data2){
            return (
                <div id='loadding' style={{marginTop:'5rem'}}>
                    <i></i>
                    <p>加载中...</p>
                </div>
            );
        }else if(data1 && data2 && !data1.length && !data2.length){
            return (
                <div style={{marginTop:'7rem',textAlign:'center'}}>
                    暂无数据
                </div>
            );
        }

		return (
			<article class="ranklist">
				<nav>
					<li class="current">
						<i></i>
						<p>资产10万以上</p>
					</li>
					<li>
						<i></i>
						<p>资产10万以下</p>
					</li>
				</nav>
				<div class='rank-content'>
                    <Link to='/' activeClassName='back'>点击查看历史榜单</Link>
					<div class="effect">
						<div class="option">
							<div class="content">
								{this.getList(data1)}
							</div>
						</div>
						<div class='option'>
							<div class='content'>
								{this.getList(data2)}
							</div>
						</div>
					</div>
				</div>
			</article>
		);
	}
}