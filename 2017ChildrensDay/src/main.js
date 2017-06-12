import './style/main.css';
import Content from './module/index.vue';
import store from './store';

new Vue({
    el : '#app',
    store,
    mounted(){
        this.$store.commit('getInfo',()=>{
            this.$store.commit('vip');
        });
        const url = T.imgsrc+'/activity/app/2017ChildrensDay/images/';
        T.init({
            loadding : {
                timing : 'spinner-loader', //加载 spinner , spinner-loader , loadingbar , lightLoader , square ,circles,circles1,circles2,circles3,circles4,line' 
                fillColor : 'rgba(150,213,0,1)',
                imgs : [
                    url+'banner.jpg',
                    url+'bg.jpg',
                    url+'bg1.jpg',
                    url+'btn1.jpg',
                    url+'liping1.jpg',
                    url+'number1.png',
                    url+'number2.png',
                    url+'number3.png',
                    url+'number4.png',
                    url+'liping2.jpg',
                    url+'btn1.png',
                    url+'liping.png',
                    url+'btn2.png',
                    url+'btn3.png',
                    url+'2liping.png',
                    url+'people1.png',
                    url+'people2.png',
                    url+'people3.png',
                    url+'people4.png',
                    url+'people5.png',
                    url+'text1.png',
                    url+'title.png',
                    url+'wing.jpg',
                ],
                callback:()=>{
                    setTimeout(()=>{
                        $('#app').addClass('active');
                    },300)
                }
            }
        });
    },
    components : {
        Content
    },
    methods : {
        
    },
    render(h){
        return (
            <div id="app">
                <Content></Content>
            </div>
        )
    }
});
