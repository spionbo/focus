import './css/main';
import info from './common/info'; //获取项目信息
import {participate} from './common/URL';
import requirePop from './pop/requirePop.js';
Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'hash',
    base: __dirname,
    routes: [
        {
            path: '/', 
            component : function(resolve){
                /*return require.ensure([],(require)=>{
                    return require('./module/main/index');
                })*/
                require(['./module/main/index'],resolve)
            }
        },
        {
            path: '/module1', 
            component : function( resolve){
                /*return require.ensure([],(require)=>{
                    return require('./module/module1/index');
                })*/
                require(['./module/module1/index'],resolve)
            }
        },
        {
            path: '/module2', 
            component : function( resolve){
                /*return require.ensure([],(require)=>{
                    return require('./module/module2/index');
                })*/
                require(['./module/module2/index'],resolve)
            }
        },
        {
            path: '/module3', 
            component : function( resolve){
                /*return require.ensure([],(require)=>{
                    return require('./module/module3/index');
                })*/
                require(['./module/module3/index'],resolve)
            }
        },
        {
            path: '/module4', 
            component : function( resolve){
                /*return require.ensure([],(require)=>{
                    return require('./module/module4/index');
                })*/
                require(['./module/module4/index'],resolve)
            }
        },
        {
            path: '/module5', 
            component : function( resolve){
                /*return require.ensure([],(require)=>{
                    return require('./module/module5/index');
                })*/
                require(['./module/module5/index'],resolve)
            }
        }
    ]
});
/*router.beforeEach((to, from, next) => {
    $('#pop').html('<div class="child"></div>')
    next(vm => {});
});*/

info.init();
window.router = router;
window.info = info;
window.bus = new Vue();
new Vue({
    router,
    data () {
        return {
            transitionName: 'slide-left' , 
            home : false
        }
    },
    watch: {
        '$route' (to, from) {
            this.home = to.path!='/';
            const toDepth = to.path.split('/').length
            const fromDepth = from.path.split('/').length
            this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
        }
    },
    mounted(){
        const http = T.imgsrc+"/activity/app/dafuweng/src/images/"
        T.init({
            loadding : {
                imgs : [
                    http+'l.png',
                    http+'light-bg.png',
                    http+'loading.gif',
                    http+'myPrize.png',
                    http+'myPrize-pop.jpg',
                    http+'people.png',
                    http+'people-light.png',
                    http+'people-light1.png',
                    http+'prize-box.png',
                    http+'prizedo.png',
                    http+'home.png',
                    http+'sunlight.png',
                    http+'sunlight.png',
                    http+'module1/b1.png',
                    http+'module1/bg.jpg',
                    http+'module2/b2.png',
                    http+'module2/bg.jpg',
                    http+'module3/b3.png',
                    http+'module3/bg.jpg',
                    http+'module4/b4.png',
                    http+'module4/bg.jpg',
                    http+'module5/b5.png',
                    http+'module5/bg.jpg',
                    http+'pop/btn.png',
                    http+'pop/btn1.png',
                    http+'pop/btn2.png',
                    http+'pop/btn3.png',
                    http+'pop/defualt-btn.png',
                    http+'pop/img1.png',
                    http+'pop/pop.png',
                    http+'pop/txt1.png',
                    http+'pop/txt2.png',
                    http+'pop/txt3.png',
                    http+'pop/txt4.png',
                    http+'dice/001.png',
                    http+'dice/002.png',
                    http+'dice/003.png',
                    http+'dice/004.png',
                    http+'dice/005.png',
                    http+'dice/006.png',
                    http+'dice/1.png',
                    http+'dice/2.png',
                    http+'dice/3.png',
                    http+'dice/4.png',
                    http+'dice/5.png',
                    http+'dice/6.png',
                    http+'dice/dicedo.gif',
                    http+'dice/selectone.png',
                    http+'dice/selecttwo.png',
                    http+'dice/gun.png',
                    http+'main/btn1.jpg',
                    http+'main/btn2.jpg',
                    http+'main/btn3.jpg',
                    http+'main/car.gif',
                    http+'main/header-bg.jpg',
                    http+'main/header-bg1.png',
                    http+'main/login_btn.jpg',
                    http+'main/login_btn_hover.jpg',
                    http+'main/prize.jpg',
                ],
                callback : function(){

                    info.click(()=>{
                        if( !T.uid ){
                            router.replace({ path: '/', query: {
                                wap:T.wap,uid:T.uid
                            }});
                            return;
                        };
                        T.ajax({
                            url : participate , 
                            data : { uid : T.uid },
                            callback : true,
                            success : function( _data ){
                                if(!_data.flag){
                                   /* var pop = new Pop({
                                        title : '&nbsp;',
                                        content : '渠道用户不能参加此活动！',
                                        okBtn : true,
                                        cancelBtn:false,
                                        timing : 'bounceIn', //rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
                                        okTxt : '去投资列表',
                                        closeCallback : function(){
                                            T.callApp.investment();
                                        }
                                    });*/
                                    requirePop('juedao',{
                                        props: {
                                            content : '渠道用户不能参加此活动！',
                                            transition : 'bounceIn',
                                            okTxt : '回首页',
                                            closeCallback : function(){
                                                T.callApp.home();
                                            }
                                        }
                                    },'publicTips');


                                    /*return;
                                    require.ensure([],(require)=>{
                                        var Pop = require('./pop/index.js');
                                        var pop = new Pop({
                                            title : '&nbsp;',
                                            content : '渠道用户不能参加此活动！',
                                            okBtn : true,
                                            cancelBtn:false,
                                            timing : 'slideOutUp', //rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
                                            okTxt : '回首页',
                                            closeCallback : function(){
                                                T.callApp.home();
                                            }
                                        });
                                    },'pop');*/
                                }else{ //更新栏目数据
                                    var hash = window.location.hash;
                                    if(hash.search(/#\/\module\d/)>=0){
                                        info.onmap(function(){
                                            info.getDice(function(){
                                                bus.$emit('pointOnMap', info.map.pointOnMap);
                                                //T.goPage();
                                               /* var num = info.map.pointOnMap , 
                                                    diceChance = info.diceChance ,
                                                    module = 'module1';
                                                if(num>24 && num<48){
                                                    module = 'module2'
                                                }else if(num>48 && num<72){
                                                    module = 'module3'
                                                }else if(num>72 && num<96){
                                                    module = 'module4'
                                                }else if(num>96 && num<119){
                                                    module = 'module5'
                                                }
                                                if(num>=118){
                                                    module = '/';
                                                }
                                                //if(hash.match(/#\/\module\d/)[0].substr(2)==module) return;
                                                router.replace({ path: module, query: {
                                                    wap:T.wap,uid:T.uid,
                                                    pointOnMap:num,
                                                    diceChance : diceChance
                                                }});*/
                                            })
                                        })
                                    }else{
                                        console.log('多融欢迎您！')
                                    }
                                }
                            }
                        });
                    })
                }
            }
        })
    },
    template: `
        <div id="app">
            <transition name="left">
                <router-view class="child-view"></router-view>
            </transition>
            <div id='pop'><div class='child'></div></div>
        </div>
    `
}).$mount('#app')