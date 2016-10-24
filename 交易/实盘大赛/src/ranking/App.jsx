import '../css/app';
import RankingList from '../comment/RankingList';
import Move from '../comment/moveEvent';
import callApp from '../comment/callApp.js'
import {checksignup,incomerank,userImg} from '../comment/URL';
import {getuserImg} from '../../../common/js/global';
import { Link } from 'react-router';
//var isMove = false;

module.exports = class App extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
          errorMsg : '敬请期待···',
          data : [],
          userInfo : null
        }
    }
    getUserInfo(obj , callback){
        if(obj.passportId.length>1){
            $.ajax({
                url:checksignup,
                dataType:'json',
                data:{
                    matchId:obj.matchId
                },
                type:'get',
                //contentType:'application/json; charset=utf-8',
                headers:{
                    passportId:obj.passportId,
                    accessToken:obj.accessToken
                },
                success:function(data){
                    callback(data);
                }
            });
        }else{
            callback(null);
        }
    }
    componentWillMount(){
        $('.share_btn').remove();
        $('#Down').remove();
        const self = this;
        this.getUserInfo(
            {
                matchId:window.matchId,
                passportId:window.passportId,
                accessToken:window.accessToken
            }
            ,function( userData ){
                $.ajax({
                    url : incomerank ,
                    data : {
                        matchId : matchId
                    },
                    headers:{
                        passportId:passportId
                    },
                    type : 'GET',
                    dataType : 'json',
                    success : function( _data ){
                        var data = _data.data ,
                            type = ['monthRanks','totalRanks','weekRanks'] ,
                            child = ['ranksLessThan10W','ranksMoreThan10W'] , 
                            _i = 0 , _j = 0;

                        type.map(( val , i )=>{
                            _i++;
                            child.map(( val1 , j )=>{
                                getuserImg(data[val][val1],function(){
                                    _j++;
                                    if(_i==3 && _j ==6){
                                        self.setState({
                                            data : _data ,
                                            userInfo : userData
                                       });
                                        //if(!isMove){
                                            var effect = $('.app .content .effect'),
                                                option = $('.app .content .option');
                                            //isMove = true;
                                            new Move({
                                                 nav : $('.app > article > nav li')
                                                ,effect : effect
                                                ,option : option
                                                ,optionHeight : true
                                            });
                                       // }
                                    }
                                },userImg)
                            })
                        })
                    }
                });
        });
    }
    componentDidMount(){
        document.title = '来爱投顾实盘争霸赛 享百万奖金赢千万实盘'
        $('.share_btn').remove();
        $('#Down').remove();
    }
    componentDidUpdate(){
        var effect = $('.app .content .effect'),
            option = $('.app .content .option');
        if(option.length){
            setTimeout(()=>{
                this.transition();
            },200);
        }else{
            effect.css({width:'100%'})
            this.transition();
        }
        $('.share_btn').remove();
        $('#Down').remove();
    }
    transition(){
        var wrap = $('.container');
        wrap.css({transform:'translateY(0px)',opacity:1});
        wrap.css({'-webkit-transform':'translateY(0px)',opacity:1});
        var banner = new Move({
             nav : $('.banner .nav .li')
            ,effect : $('.banner ul')
            ,option : $('.banner ul li')
            ,auto : true
            ,moveTime : 5000
            ,animate3d : true
            ,marginRight : 0
        });
    }
    link1(){
        //window.location.href='http://i0.jrjimg.cn/zqt-m/webview/transaction/firm/totalRanking.html?matchId='+matchId+'&passportId='+passportId+'&accessToken='+accessToken
        window.location.href='http://itougu.jrj.com.cn/marketing/redirect.jspa?url=http://i0.jrjimg.cn/zqt-red-1000/focus/focus20160924/app/';
    }
    render() {
        var data = this.state.data , 
            user = this.state.userInfo;
            return (
                <div class="app">
                    <div class="banner">
                        <ul>
                            <li onClick={this.link1} style={{backgroundImage:'url(banner.png)'}}></li>
                        </ul>
                        <div class='nav'>
                            <div class='li'></div>
                        </div>
                    </div>
                    <article>
                        <div class="rank-logo">
                            <i></i>
                            <p>参赛排行均为参赛期间数据</p>
                        </div>
                        <nav>
                            <li class='current'>周收益</li>
                            <li>月收益</li>
                            <li>总收益</li>
                        </nav>
                        <article id="Profit" class="content">
                            <div class='effect'>
                                <RankingList rank='weekRanks' data={data} checksignup={user}/>
                                <RankingList rank='monthRanks' data={data} checksignup={user} loading='true'/>
                                <RankingList rank='totalRanks' data={data} checksignup={user}/>
                            </div>
                        </article>
                    </article>
                </div>
            );
        
    }
}