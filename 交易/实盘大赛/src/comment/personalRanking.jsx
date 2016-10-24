import { Link } from 'react-router';
import {getuserImg} from '../../../common/js/global';
import {userImg} from '../comment/URL';
import {openList} from './callApp';
module.exports = class PersonRank extends React.Component{
	constructor(...args) {
        super(...args);
        this.state = {
            userImg : null
        }
    }
    componentDidMount(){
        var self = this ,
            obj = this.props.data;
        if(obj && obj.userId){
            getuserImg([obj],function(){
                self.setState({userImg : true});
            },userImg)
        }
    }
    renderType(obj , userInfo ){
        if(String(obj.assetType)!='1'){
            return <span class='red'>{obj.rank<10?'0'+obj.rank:obj.rank>99?99:obj.rank}</span>
        }else if(String(obj.assetType)=='1'){
            return <i class="q">?</i>
        }
    }
    renderRank( obj , userInfo ){
        if(userInfo.bind==false){
            return <p>绑定平安账户才能进入排名哦~</p>
        }
        if(String(obj.assetType)!='1'){
            return '';
        }else if(String(obj.assetType)=='1'){
            return <p>总资产≥1w才能进入排名哦~</p>
        }
    }
    tobind(event){
        event.stopPropagation();
        event.preventDefault();
        openList();
    }
    toPay(event){
        event.stopPropagation();
        event.preventDefault();
        openList();
        //window.location.href='http://jrj.yun.pingan.com/sapi/page/banktrans.jspa'
    }
    renderPercent( obj , userInfo ){ //return <span class="blue" onClick={this.toPay.bind(this)}>去转账</span>
        if(userInfo.bind==false){
            return <span class="blue" onClick={this.tobind.bind(this)}>去绑定</span>
        }
        let percent = (obj.income*100).toFixed(2) ;
        if(obj.assetType!='1'){
            return <em className={percent>0?'red':'green'}>{percent>0?'+'+percent:percent}%</em>;
        }else{
            return <span class="blue"></span>;
        }
    }
    toDetial(obj , user , b){
        if(user.bind==false || !(obj.assetType!='1')){
            return <a>
                <li class="number">{this.renderType(obj)}</li>
                <li class="img"><img src={obj.headIconUrl||userImg}/></li>
                <li class="text">
                    <h2>{obj.userName||'爱投顾'}</h2>
                    {this.renderRank(obj,user.data)}
                </li>
                <li class="percent">
                    {this.renderPercent(obj,user.data)}
                </li>
            </a>;
        }
        return <Link to={{pathname:"/detial",query:{userId:obj.userId}}}>
                            <li class="number">{this.renderType(obj)}</li>
                            <li class="img"><img src={obj.headIconUrl||userImg}/></li>
                            <li class="text">
                                <h2>{obj.userName||'爱投顾'}</h2>
                                {this.renderRank(obj,user.data)}
                            </li>
                            <li class="percent">
                                {this.renderPercent(obj,user.data)}
                            </li>
                        </Link>
    }
    render() {
        let obj = this.props.data , 
            user = this.props.checksignup ,
            userImg = this.props.userImg;
        if(user && obj && user.data.signup==true && this.state.userImg){
            let _num = ['one','two','three'] , 
                cls = obj.rank<4?_num[obj.rank-1]:'';
                
            return (
                 <section class="user">
                    <ul>
                        {this.toDetial(obj,user)}
                        
                    </ul>
                </section>
            );
        }else{
            return (<div style={{display:'none'}}></div>);
        }
    }
}