<style scoped>
@import '../style/global';
    .main-rank{
        overflow:hidden;
        background-image: linear-gradient(to top,#5a6bd4,#2d2383 90%);
        padding-bottom:20px; 
        color:#fff;

        .bg{ @mixin contain '../images/img1.jpg',100% auto; }

        .title{
            @mixin contain '../images/tit1.png';
            margin:0 auto;
        }
        .userInfo{
            ul{ overflow:hidden;
            }
            li{
                float:left; color:#fde41d; width:49%; box-sizing:border-box;
                &:nth-child(1){width:60%;}
                &:nth-child(2){ width:39%;padding-left:15px; }
            }
            margin-bottom:10px;
        }
        >nav{
            display:flex;
            margin:0 20px;
            background:#783efb;
            border-radius:10px;
            overflow:hidden;
            color:#d793ff;
            .tab{
                flex:1;
                text-align:center;
                transition-duration:.3s;
                &.current{ color:#fff; 
                    background: linear-gradient(to top,#ff76b7,#ffcbe3);
                }
            }
        }
        .nav-text{
            padding-top:15px; text-align:center; color:#fde419;
        }
        .content{
            padding:20px;
            margin:0 20px;
            background:#664aec;
            margin-bottom:20px;
            box-shadow:0 0 5px rgba(0,0,0,.5);
            .effect-content{ overflow:hidden;}

            .btn{ float:right; line-height:18px; padding:2px 15px; border-radius:10px; background:#ffcd3f; color:#fe5100; box-shadow:0 1px 3px rgba(0,0,0,.5); margin-bottom:4px; font-size:12px;}
        }
        .btn{
            margin:0 auto;
            @mixin contain '../images/btn2.png';
            text-align:center;
        }
        .footer{
            margin-top:10px;
            text-align:center;
            .info{ color:#ffba00;}
        }
    }
</style>
<template>
<div class='main-rank indexRank'>
    <div class='bg img-size' data-height='40'></div>
    <div class='title img-size' data-marginTop='50' data-width='402' data-marginBottom='40' data-height='56'></div>
    <nav v-if='P.status!=1' class='img-size' data-fontSize='30' data-height='52' data-lineHeight='52'>
        <div class='tab active'>每日榜单</div>
        <div class='tab'>总榜单</div>
    </nav>
    <div v-if='P.status!=1' class='nav-text img-size' data-fontSize='30'>{{message}}</div>
    <div v-if='P.status!=1' class='content img-size' data-fontSize='30' data-marginTop='30'>
        <div class='userInfo img-size' data-fontSize='30' data-lineHeight='56'>
            <ul>
                <li class='img-size' data-fontSize='24'>您的当前财富值：{{user.fortune}}</li>
                <li class='img-size' data-fontSize='24'>排名：{{user.index==-1?'--':user.index>100?'>100':user.index}}名</li> 
            </ul>
            <ul>
                <li class='img-size' data-fontSize='24'>预计获得：{{user.prize}} 奖品</li>
                <li v-if='!login' class='img-size' data-fontSize='24'>
                    <div class='btn' @click='gologin'>登陆查看</div>
                </li>
            </ul>
        </div>
        <div class='effect-content'>
            <div class='effect'>
                <div class='option'>
                    <list :list='list'></list>
                </div>
                <div class='option'>
                    <list :list='list1'></list>
                </div>
            </div>
        </div>
        <div class='footer'>
            <time class='img-size' data-fontSize='26'>更新时间： {{time}}</time>
            <div class='info img-size' data-fontSize='30'>财富值=投资金额*投资期限/360</div>
        </div>
    </div>
    <div v-if='P.status==1' class='content img-size' data-fontSize='30' data-marginTop='30'>
        <p>本次活动已结束！</p>
        <br>
        <p>排名获得的京东卡及实体奖品将统一于活动结束后15个工作日内发放，加息券将于活动结束后7个工作日内发放到您的多融账户，可登录多融财富APP或官网查看</p>
    </div>
    <div class='btn img-size' :class='{gray:P.status==1}' data-width='302' data-height='61' data-lineHeight='61' data-fontSize='36' @click='refresh($event)'>{{P.status==1?'活动已结束':'刷新'}}</div>
</div>
</template>
<script>
import list from './rank-list';
import Public from '../common/public';
import {walkRank} from '../common/URL';
import Move from '../widgets/moveEvent';

var messages = Public.messages;

    export default {
        components : {
            list
        },
        data(){
            return {
                P : Public,
                isRefresh : true , 
                time : 0,
                user : {
                    index : '***',
                    gotCardCount : '***',
                    prize : '***',
                },
                users : [],
                list : [],
                list1 : [],
                istrue : false,
                login : T.uid , 
                message : messages[0]
            }
        },
        mounted(){
            T.init();
            this.login = T.uid;
            this.updateMove();
        },
        watch : {
            'P.status' : function( newArr , old ){
                if(newArr==0){
                    /*this.$watch('P.vip',arr1=>{
                        if(arr1){*/
                            this.istrue = true;
                            this.getRank(0);
                            this.getRank(1);
                        /*}
                    })*/
                }
            }
        },
        methods : {
            gologin(){
                T.login();
            },
            Investment(){
                T.callApp.investment();
            },
            updateMove(){
                var self = this;
                if(!this.Move){
                    this.Move = new Move({
                         nav : $('.indexRank nav .tab')
                        ,effect : $('.indexRank .effect')
                        ,option : $('.indexRank .option')
                        ,animate3d : false
                        ,tabCallback : function(i){
                            self.user = self.users[i];
                            if(!self.user || $.type(self.user.index) == 'string'){
                                self.user = {
                                    fortune : '***',
                                    index : '***',
                                    prize : '***'
                                }
                            }
                            self.message = messages[i];
                        }
                    });
                }else{
                    this.Move.update();
                }
            },
            getRank( type ){ //0为当天  1 为每周
                if(!this.istrue) return;
                var self = this , 
                    myDate = new Date() , 
                    year = myDate.getFullYear() ,
                    month = myDate.getMonth()+1,
                    date = myDate.getDate(),
                    hours = myDate.getHours(),
                    minutes = myDate.getMinutes(),
                    seconds = myDate.getSeconds();

                month = month>9?month:'0'+month;
                date = date>9?date:'0'+date;
                hours = hours>9?hours:'0'+hours;
                minutes = minutes>9?minutes:'0'+minutes;
                seconds = seconds>9?seconds:'0'+seconds;

                self.time = year+'-'+month+'-'+date+' '+hours+':'+minutes+':'+seconds;

                T.ajax({
                    url : walkRank ,
                    data : { uid : T.uid , dayOrWeek :  type },
                    callback : true //接口问题
                }).then(data=>{
                    if(type==0){
                        self.$set(self,'list',data.map.prizeRanks);
                        self.users[0] = data.map.funtuneOfUser;
                    }else{
                        self.$set(self,'list1',data.map.prizeRanks);
                        self.users[1] = data.map.funtuneOfUser;
                        self.user = data.map.funtuneOfUser;
                        if(!self.user){
                            self.user = {
                                fortune : '***',
                                index : '***',
                                prize : '***'
                            }
                        }
                    }
                    self.$nextTick(()=>{
                        self.updateMove();
                    })
                })
                
            },
            refresh($event){
                if(this.P.status==1) return;
                const tag = $($event.currentTarget);
                tag.addClass('gray');
                if(this.isRefresh){
                    this.getRank(0);
                    this.getRank(1);
                    this.isRefresh = false;
                }
                setTimeout(()=>{
                    tag.removeClass('gray');
                    this.isRefresh = true;
                },3000)
            }
        }
    }
</script>