import './style/main';
import Public from './common/public'; //获取项目信息

/*import { participate } from './common/URL';*/
import requirePop from './pop/requirePop.js';
import nav from './components/nav';
import './pop/index.js';
import store from './store';


Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'hash',
    base: __dirname,
    linkActiveClass: "active",
    routes: [{
        path: '/',
        redirect: '/main'
    }, {
        path: '/main',
        component: function(resolve) {
            require(['./module'], resolve)
        }
    }, {
        path: '/rank',
        component: function(resolve) {
            require(['./rank'], resolve)
        },
    }, {
        path: '/history',
        component: function(resolve) {
            require(['./components/history'], resolve)
        }
    }, {
        path: '/integral',  //33
        component: function(resolve) {
            require(['./integral'], resolve)
        }
    }, {
        path: '/prize',
        component: function(resolve) {
            require(['./prize'], resolve)
        }
    }]
});


window.router = router;
window.Public = Public;

new Vue({
    router,
    store,
    data() {
        return {
            transitionName: 'left',
            home: false
        }
    },
    components: {
        navtab: nav
    },
    mounted(){
        const url = T.imgsrc+'/activity/app/guhuaDafuweng/images/'
        T.init({
            loadding : {
                timing : 'spinner-loader', //加载 spinner , spinner-loader , loadingbar , lightLoader , square ,circles,circles1,circles2,circles3,circles4,line' 
                fillColor : 'rgba(150,213,0,1)',
                imgs : [
                    url+'001.png',
                    url+'002.png',
                    url+'003.png',
                    url+'004.png',
                    url+'005.png',
                    url+'006.png',
                    url+'1.png',
                    url+'2.png',
                    url+'3.png',
                    url+'4.png',
                    url+'5.png',
                    url+'6.png',
                    url+'7.png',
                    url+'8.png',
                    url+'9.png',
                    url+'10.png',
                    url+'11.png',
                    url+'12.png',
                    url+'dicedo.gif',
                    url+'bg.jpg',
                    url+'bg1.jpg',
                    url+'bg-repeat.jpg',
                    url+'book.png',
                    url+'bottom.png',
                    url+'bottom-left-num.png',
                    url+'bottom-num.png',
                    url+'bottom-num1.png',
                    url+'bottom-right-num.png',
                    url+'box.png',
                    url+'btn.jpg',
                    url+'close.png',
                    url+'coupon.jpg',
                    url+'defualt-btn.png',
                    url+'dice-bg.png',
                    url+'dice-btn.png',
                   // url+'dice-btn-hover.png',
                    url+'dice-do.png',
                    url+'explain.png',
                    url+'first.png',
                    url+'l.png',
                    url+'left-num.png',
                    url+'left-num1.png',
                    url+'me.jpg',
                    url+'one.jpg',
                    url+'money.jpg',
                    url+'tree.jpg',
                    url+'two.jpg',
                    url+'nav.png',
                    url+'nav-cur.png',
                    url+'pop.png',
                    url+'selectone.png',
                    url+'selecttwo.png',
                    url+'tit1.jpg',
                    url+'sunlight.png',
                    url+'tit.png',
                    url+'prize-bg.png',
                    url+'title.png',
                    url+'top-left-num.png',
                    url+'top-num.png',
                    url+'top-num1.png',
                    url+'top-right-num.png',
                    url+'txt1.png',
                    url+'txt2.png',
                    url+'laba.png',
                ],
                callback:()=>{}
            }
        });
        T.getInfo(this);
        this.$store.commit('userMessage');
    },
    watch: {
        '$route' (to, from) {
            this.transitionName = this.getTransition(to,from);
            if(!T.uid && to.path!='/main'){
                requirePop('gologin',{
                    props: {
                        content : '对不起，请登录后再操作。',
                        transition : 'rotate3d',
                        okTxt : '马上去登录',
                        okCallback : function(){
                            T.login();
                        },
                        closeCallback : function(){
                            router.push('/main')
                        }
                    }
                },'publicTips');
            }
        }
    },
    methods : {
        getTransition(to,from){
            var text = 'left' , 
                arr = ['/main','/rank','/history','/integral'];

            for(let i=0;i<arr.length;i++){
                if(to.path==arr[i]){
                    text = 'right';
                    break;
                }else if(from.path==arr[i]){
                    text = 'left';
                    break;
                }else{
                    text = 'left';
                }
            }
            return text;
        }
    },
    template: `
        <div id="app">
            <transition :name="transitionName">
                <router-view class="child-view"></router-view>
            </transition>
            <navtab></navtab>
            <div id='pop'></div>
        </div>
    `
}).$mount('#app');