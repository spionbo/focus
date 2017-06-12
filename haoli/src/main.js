import './style/main.css';
import Public from './common/public';
import Content from './module/index.vue';

window.Public = Public;
new Vue({
    el : '#app',
    mounted(){
        const url = T.imgsrc+'/activity/app/tianTianQiangPaimin/images/'
        T.init({
            loadding : {
                timing : 'spinner-loader', //加载 spinner , spinner-loader , loadingbar , lightLoader , square ,circles,circles1,circles2,circles3,circles4,line' 
                fillColor : 'rgba(150,213,0,1)',
                imgs : [
                    url+'banner.jpg',
                    url+'btn1.png',
                    url+'btn2.png',
                    url+'close.png',
                    url+'img1.jpg',
                    url+'star.jpg',
                    url+'tit-bg.png',
                    url+'tit1.png',
                    url+'tit2.png',
                    url+'tit3.png',
                    url+'tit4.png',
                ],
                callback:()=>{}
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
                <div id='pop'></div>
            </div>
        )
    }
});
