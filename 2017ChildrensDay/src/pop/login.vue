<style>
    @import '../style/global';
    .modal-mask{
        &.loginpop{
            .modal-container{
                background: linear-gradient(to right bottom, #ffb68b , #ff584b);
                border-radius:10px;
                .close{

                }
                .content{
                    padding:30px 0;
                    h2{text-align:center;}
                    p{ padding:0 20px 10px; color:#fff; }
                }
            }
            .modal-footer{
                background:#fff;
                padding-top:20px;
                border-bottom-left-radius:10px; border-bottom-right-radius:10px;

                .btn{
                    background:#f99d15;
                    border-radius:15px;
                    padding:5px 40px;
                    color:#fff; 
                    font-size:14px;
                }
            }
        }
    }
</style>
<template>
<pop ref='pop' :transition='transition' :closeCallback='closeCallback' superClass='loginpop'>
    <div slot="header">
    </div>
    <div slot='body' class='content'>
        <h2>恭喜您获取一份大礼包</h2>
        <p>请登录至多融APP平台或者官网查看您的优惠信息</p>
    </div>
    <div slot='footer' class='submit'>
        <div class='btn' @click='login'>登录APP</div>
    </div>
</pop>
</template>
<script>
    import pop from './pop.vue';
    export default {
        components : {
            pop
        },
        props : {
            transition : String,
            closeCallback : Function,
        },
        methods : {
            close(){
                this.$refs.pop.closePop();
            },
            login(){
                var url = 'http://app.duorongcf.com/html/2weima.html' , 
                    weixin = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.yz.dr_app';
                if(T.wap) {
                    if (T.weixin == true) {
                        window.location.href = weixin;
                    } else if (T.ios_weixin == true) {
                        window.location.href = weixin;
                    } else if (T.qq) {
                        window.location.href = weixin;
                    } else if (T.Iphone && T.weibo) {
                        window.location.href = url;
                    } else if (T.Iphone) {

                        var iFrame = document.createElement('iframe');
                        iFrame.style.display = "none";
                        iFrame.src = 'duorong://';

                        document.body.appendChild(iFrame);

                        setTimeout(function () {
                            if (!document.webkitHidden) {
                                window.location.href = url;
                            }

                        }, 25);

                    } else if (T.Android) {
                        location.href = 'duorongcf://duorong/';
                        setTimeout(function(){
                            window.location.href = url;
                        },20);
                    }
                    
                }else {
                    T.login();
                }
            }
        }
    }
</script>