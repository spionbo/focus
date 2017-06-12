<style scoped>
.ladder{
    display:flex;
    flex-direction:column;
    .top,.footer{
        display:flex;
        flex-direction:row;
    }
    .left,.right{
        position:relative; z-index:8;
        display:flex;
        flex-direction:column;
    }
    .right{
        align-items:flex-end;
    }
    .middle{
        display:flex;
        flex-direction:row;
        justify-content: space-between;
    }
}
</style>
<template>
<section class='ladder img-size' data-width='660'>
    <div class='top'>
        <step v-for="index in 5" :num='17-index'></step>
    </div>
    <div class='middle'>
        <div class='left'>
            <step v-for="index in 7" :num='index+16'></step>
        </div>
        <div class='right'>
            <step v-for="index in 7" :num='12-index'></step>
        </div>
    </div>
    <div class='footer'>
        <step num='24'></step>
        <step v-for="index in 4" :num='index'></step>
    </div>
</section>
</template>
<script>
import step from '../components/step';
export default {
    components : {
        step : step
    },
}
</script>