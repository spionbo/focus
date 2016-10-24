const userImg = 'http://i0.jrjimg.cn/zqt-red-1000/focus/logo_100_100.png';
import PersonRank from './personalRanking.jsx';
import { Link } from 'react-router';
module.exports = class RankingList extends React.Component{
    constructor(...arg){
        super(...arg)
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
    getList(arr){
        if(!arr.length) return <div style={{textAlign:'center'}}>暂无数据</div>;
        return arr.map((obj , i)=>{
            let percent = (obj.income*100).toFixed(2) , 
                _num = ['one','two','three'] , 
                cls = obj.rank<4?_num[obj.rank-1]:'';
            return  <ul>
                    <Link to = {{pathname:"/detial",query:{userId:obj.userId}}}>
                        <li class="number"><span className={cls}>{obj.rank<10?'0'+obj.rank:obj.rank}</span></li>
                        <li class="img"><img src={obj.headIconUrl||userImg}/></li>
                        <li class="text">
                            <h2>{obj.userName||'爱投顾'}</h2>
                            {this.prize(obj)}
                        </li>
                        <li class="percent">
                            <em className={percent>0?'red':percent<0?'green':''}>{percent>0?'+'+percent:percent}%</em>
                        </li>
                    </Link>
                    </ul>
        });
    }
    render(){
        var self = this
            ,name = this.props.rank
            ,data = this.props.data.data
            ,checksignup = this.props.checksignup
            ,userInfo 
            ,ranksLessThan10W 
            ,ranksMoreThan10W;
        if(data && data[name]){
            $.each(data[name],function( key, arr ){
                if(key=='selfRank' ){
                    userInfo = arr;
                }
                if(key=='ranksLessThan10W'){
                    ranksLessThan10W = self.getList(arr);
                }else if(key=='ranksMoreThan10W'){
                    ranksMoreThan10W = self.getList(arr);
                }
            });
            return (
                <div class="option">
                    <PersonRank data={userInfo} userImg={userImg} checksignup={checksignup}/>
                    <div class="title">
                        <b>群雄并起</b>
                        <span>(资产10万以下)</span>
                    </div>
                    <div class="content">
                        {ranksLessThan10W}
                    </div>
                    <div class="title">
                        <b>逐鹿中原</b>
                        <span>(资产10万以上)</span>
                    </div>
                    <div class="content">
                        {ranksMoreThan10W}
                    </div>
                </div>
            )
        }else{
            if(this.props.loading){
                return (
                    <div id='loadding' style={{margin:'5rem 0 10rem'}}>
                        <i></i>
                        <p>加载中...</p>
                    </div>
                );
            }else{
                return (<div></div>);
            }
        }
    }
}