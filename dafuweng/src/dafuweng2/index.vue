<style lang='sass'>
    @import '../css/global.scss';
    .dafuweng2{
        background:#f7e2a3;
        .banner{
            position:relative; z-index:1;
            @include contain('../images/dafuweng2/banner.jpg');
            .text{
                position:absolute; right:0; top:0; width:5rem; height:5rem;
                font-size:$s12; color:#cc3300;
            }
        }
        .submit{
            padding:$s25 $s10; 
            .btn{ margin:0 auto; @include transition-duration;
                @include contain('../images/main/btn1.jpg');
                &:hover{ @include contain('../images/main/btn7.jpg'); };
                &.btn-login{
                    @include contain('../images/main/login_btn.jpg');
                    &:hover{ @include contain('../images/main/login_btn_hover.jpg'); };
                }
            }
        }
        .list{ @include contain('../images/dafuweng2/list.jpg');
            position:relative; z-index:1;
            line-height:$s20;
            h2{ font-weight:normal; @include font-size(15px); color:#5b3000; }
            p{ @include font-size(12px); color:#cc3300;}
            .box{ 
                .login{ float:right; display:inline-block; margin-top:$s18; background:#ff6000; box-shadow:0 3px 3px rgba(0,0,0,.3); padding:$s2 $s10; color:#fff; border-radius:1.25rem; @include font-size(12px);}
            }
            .out{
                position:absolute;
                @include contain('../images/dafuweng2/out.png');
            }
        }
        .activity{
            padding:$s20; background:#fff2c4;
            .title{ @include contain('../images/dafuweng2/tit.jpg')}
            dl{ @include box; padding:$s5 0; }
            dd{ margin-top:$s3; @include contain('../images/dafuweng2/start.jpg');  }
            dt{ padding-left:$s10; @include box-flex; font-size:$s12; line-height:$s18; color:#5b3000;}
        }
    }
</style>
<template>
<div class='child-transition'>
    <section class='module-scroll dafuweng2'>
        <div class='banner img-size' data-height='568'>
            <div class='text' @click='scroll'>
                
            </div>
        </div>
        <div class="submit">
            <div v-if='islogin'>
                <div class="btn img-size" @click='investment' data-width='559' data-height='98'></div>
            </div>
            <div v-else>
                <div class="btn btn-login img-size" @click='login' data-width='559' data-height='98'></div>
            </div>
        </div>
        <div class='list img-size' data-height='1321'>
            <div class='text img-size' data-paddingTop='64' data-paddingLeft='62' data-paddingRight='62'>
                <div v-if='info.status!=0'>
                    <h2>活动期间您累计财富值为 ：{{P.money}}</h2>
                    <h2>获得：{{P.prize}}</h2>
                    <div class='out img-size' data-width='210' data-height='156' data-top='40' data-right='50'></div>
                </div>
                <div v-else>
                    <div v-if='islogin'>
                        <h2>您的当前财富值为：{{P.money}}</h2>
                        <h2>预计获得：{{P.expectedPrize}}</h2>
                        <p v-if='!P.full'>再累计 {{P.cumulative}} 财富值，可获得：{{P.available}}</p>
                    </div>
                    <div v-else class='box'>
                        <div class='login'>登录查看</div>
                        <h2>您的当前财富值为：******</h2>
                        <h2>预计获得：******奖品</h2>
                    </div>
                </div>
            </div>
        </div>
        <aside class='activity'>
            <div class='title img-size' data-height='44'></div>
            <dl>
                <dd class='img-size' data-width='27' data-height='27'></dd>
                <dt>活动时间 ：截至20{{(info.endTime.substr(0,8)).replace(/\//g,'-')}}</dt>
            </dl>
            <dl>
                <dd class='img-size' data-width='27' data-height='27'></dd>
                <dt>投资30天以上产品（包含30天）获赠财富值，财富值计算方法：投资金额*产品期限/360。小于30天产品不参与此活动，不计入财富值。达到大富翁终点（第118步）之前的投资，同样不计入财富值。</dt>
            </dl>
            <dl>
                <dd class='img-size' data-width='27' data-height='27'></dd>
                <dt>累计财富值可获得奖品，详见上方表格。活动奖品以可获得的最高奖项为准，不重复获得，平台将在活动结束后的15个工作日内完成礼品的发放</dt>
            </dl>
            <dl>
                <dd class='img-size' data-width='27' data-height='27'></dd>
                <dt>本活动最终解释权归多融财富所有</dt>
            </dl>
        </aside>
    </section>
</div>
</template>
<script>
    import P from './public';
    import requirePop from '../pop/requirePop.js';
    export default {
        components : {},
        props : {

        },
        data (){
            return {
                islogin : T.isLogin , 
                P : P,
                info : info
            }
        },
        mounted(){
            T.setImgSize();
            info.onmap(()=>{
                if(info.map.pointOnMap<info.mapLength){
                    requirePop('dafuwenghome',{
                        props: {
                            content : '您没有完成大富翁任务，<br>不能参加此活动！',
                            transition : 'bounceIn',
                            okTxt : '去做大富翁任务',
                            closeCallback : function(){
                                router.replace({ path: '/', query: {
                                    wap:T.wap,uid:T.uid
                                }})
                            }
                        }
                    },'publicTips');
                }else{
                    P.getPrize();
                }
            });
        },
        methods : {
            login : function( callback ){
                T.login(callback);
            },
            investment : function(){
                T.callApp.investment();
            },
            scroll : function(){
                var demo = $('.dafuweng2') , 
                    height = demo[0].scrollHeight,
                    index = 10;

                function go(){
                    index += 50;
                    if(index>=height){
                        $(demo).scrollTop(height);
                    }else{
                        setTimeout(go,20);
                    }
                    $(demo).scrollTop(index);
                };

                go();
            },

        }
    }
</script>