<style scoped>
    @import '../style/global.css';
    .modal-mask{
       .modal-header{
            .title-bg{
                .bg1{ @mixin contain '../images/txt1.png';}
            }
        }
        .modal-body{
            .c-pop{
                display:flex;
                flex-direction:column;
                padding:0 $s20;
                h2{ color:#fff600; text-align:center;}
                p{ text-align:center; }
                .cnt1{
                    position:relative;
                    display:flex;
                    flex-direction:row;
                    align-items:center;
                    justify-content:center;
                }
                .scenedobg1{ 
                    position:absolute;
                    top:30px;
                    @mixin contain '../images/l.png'; 
                    display:flex; 
                    flex-direaction:column;
                    justify-content:center;
                    align-items : center;
                    mix-blend-mode: screen;
                }
                .scenedo{ @mixin contain '../images/dice/004.png'; 
                    position:relative;
                    z-index:999;
                }
                span{ display:block; color:#fff600}
            }
        }
        .submit{
             position:relative;
            z-index:999;
            .btn1{ padding-top:5px; text-align:center; color:#fff600; text-decoration:underline;}
        }
    }
</style>
<template>
<pop ref='pop' :transition='transition'>
    <div slot="header" class='title-bg img-size' data-marginTop='25' data-width='391' data-height='79'>
        <i class='bg1 img-size' data-width='189' data-height='49'></i>
    </div>
    <div slot='body' class='c-pop'>
        <h2 class='img-size' data-paddingTop='10' data-paddingBottom='10' data-fontSize='34'>恭喜，获得1次掷骰子机会</h2>
        <div class='cnt1'>
            <span class='scenedo img-size' data-marginLeft='10' data-width='80' data-height='83'></span>
            <span class='img-size' data-fontSize='50'>X1</span>
            <div  class='scenedobg1 img-size' data-width='191' data-height='98'></div>
        </div>
    </div>
    <div slot='footer' class='submit img-size' data-marginTop='20'>
        <div class="btn img-size" data-width='327' data-height='60' data-lineHeight='60' @click='agin'>立即掷骰子</div>
        <div class='btn1' @click='close'>以后再掷</div>
    </div>
</pop>
</template>
<script>
    import pop from './pop.vue';
    import requirePop from './requirePop.js';
    export default {
        components : {
            pop
        },
        props : {
            transition : String,
        },
        mounted(){
            T.setImgSize();
        },
        methods : {
            close( fn ){
                this.$refs.pop.closePop(fn);
            },
            agin(){
                this.close(()=>{
                    requirePop('gameStart',{ 
                        props : {
                            transition : 'rotate3d'
                        }
                    },'selectScene');
                })
            }
        }
    }
</script>