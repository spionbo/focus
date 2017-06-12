<style scoped>
    .rank-list{
        border:1px solid #583fe3;
        box-shadow:0 0 8px #583fe3 inset;
        ul{ display:flex; }

        padding:10px;

        li{ text-align:center;}

        .tit{ padding-bottom:5px; font-weight:bold; }
        .c1{ width: 30px;}
        .c2{ flex:1;}
        .c3{ width:50px; }
        .c4{ flex:1;}

        .no-data{ text-align:center; padding:20px;}
    }
</style>
<template>
<div class='rank-list'>
    <div class='tit img-size' data-fontSize='26'>
        <ul>
            <li class='c1'>排名</li>
            <li class='c2'>手机号码</li>
            <li class='c3'>财富值</li>
            <li class='c4'>奖品</li>
        </ul>
    </div>
    <div class='cnt img-size' data-fontSize='24' data-lineHeight='40'>
        <div v-if='list && list.length'>
            <ul v-for="obj in list">
                <li class='c1'>{{obj.index}}</li>
                <li class='c2'>{{obj.mobilePhone}}</li>
                <li class='c3'>{{obj.fortune}}</li>
                <li class='c4'>{{obj.prize}}</li>
            </ul>
        </div>
        <div v-else class='no-data'>
            暂无数据
        </div>
    </div>
</div>
</template>
<script>
    export default {
        props : {
            list : Array
        },
        watch : {
            list : (newArr,old)=>{
                if(newArr && newArr.length){
                    newArr.map(obj=>{
                        if(obj.fortune>10000){
                            obj.fortune = String((obj.fortune/10000).toFixed(3)).match(/\w+\.\w{2}/)[0]+'万';
                        }
                    })
                }
            }
        }
    }
</script>