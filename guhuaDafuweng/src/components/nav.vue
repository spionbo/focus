<template>
<nav class='nav'>
   <ul>
        <li class='img-size' data-width='188' data-height='164' data-fontSize='30'>
            <router-link  to="/main" replace class='img-size' data-paddingTop='36'>
                活动首页
            </router-link>
        </li>
        <li class='img-size' data-width='188' data-height='164' data-fontSize='30'>
            <router-link to="/rank" replace class='img-size' data-paddingTop='36'>大富翁<br>排行榜</router-link>
        </li>
        <li class='img-size' data-width='188' data-height='164' data-fontSize='30'>
            <a class='img-size' data-paddingTop='36' @click='integral'>
                积分兑换
            </a>
        </li>
        <li class='img-size' data-width='188' data-height='164' data-fontSize='30'>
            <router-link to="/prize" replace class='img-size' data-paddingTop='36'>
                我的奖品
            </router-link>
        </li>
   </ul>
</nav>
</template>
<script>
export default {
    data (){
        return {
            
        }
    },
    mounted(){

    },
    afterEach(){
        debugger;
    },
    methods : {
        integral(){
            T.callApp.integral();
        }
    }
}
</script>