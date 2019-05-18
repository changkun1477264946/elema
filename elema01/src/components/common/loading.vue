<template>
    <div class="loading">
        <div class="img">
            <img src="../../images/icon_loading.png" alt="" :style="{transform:'translateY('+i+'rem)'}">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'loading', // 定义的组件名称 使用时写法：loading
        data(){
            return {
                trans:{},
                i:0,
            }
        },
        created(){
            var k=0;
            setInterval(()=>{
                k++;
                this.i -= 3;
                if(k >=7 ){
                    k=0;
                    this.i=0
                }
            },1000)
        }
    }
</script>

<style scoped>
    .loading {
        position: fixed;
        left: 0;
        top: 0;
        background: url('../../images/shop_back_svg.svg') center center no-repeat #fff;
        width: 100%;
        height: 100%;
        z-index: 1000;
        overflow: hidden;
    }
    .img{
        width: 3rem;
        height: 3rem;
        position: absolute;
        overflow: hidden;
        top: 44%;
        left: 43%;
        /*transform: translate(-50% -50%);*/
        animation: aaa .32s alternate infinite forwards;
        /*transition: linear 1s;*/

    }
    .img img{
        width: 100%;
        animation: bbb .5s alternate infinite forwards linear;
    }
    @keyframes aaa {
        from{
            transform: translateY(0);
        }
        to{
            transform: translateY(-4rem);
        }
    }
    @keyframes bbb {
        from{
            opacity: 1;
        }
        to{
            opacity: 0;
        }
    }
</style>
