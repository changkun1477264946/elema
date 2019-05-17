<template>
    <div class="container1">
        <zhead>
            <div @click="$router.back(-1)" slot="logo" class="logo">
                <Icon type="ios-arrow-back" />
            </div>
            <div slot="title" class="title">{{data.name}}</div>
            <!--<div slot="login">登录 | 注册</div>-->
        </zhead>
        <div>
            <img :src="'https://elm.cangdu.org/img/'+data.image_path" alt="">
        </div>
        <div class="p_all">
            <p class="p1">{{data.description}}</p>
            <p class="p2">{{data.name}}</p>
            <p class="p3">评分:
                <Rate show-text allow-half v-model="data.rating" disabled class="star">
                    <span style="color: #f5a623">{{data.rating}}</span>
                </Rate>
            </p>
            <p class="p4">月售{{data.month_sales}}单 售价{{data.satisfy_rate}}元起</p>
            <p class="p5">{{data.tips}}</p>

        </div>
        <shopping-cart></shopping-cart>
    </div>
</template>

<script>

    import Zhead from "../../components/header/head";
    import ShoppingCart from "../../components/common/shoppingCart";
    export default {
        name: "shoppingInfor",
        components: {ShoppingCart, Zhead},
        data(){
            return {
                data:{},
            }
        },
        mounted(){
            this.data = this.$route.query.data;
            console.log(this.data,'12315646');
        }
    }
</script>

<style scoped>
    .container1{
        padding-top: 2.3rem;
    }
    p{
        margin: 0;
        padding: 0;
    }
    .p_all{
        padding-left: .5rem ;
    }

    .p1{
        font-size: .6rem;
        color: #666;
        margin: .3rem 0;
        line-height: .8rem;
        bottom: .2rem;
        padding:  .4rem .4rem .4rem 0;
    }
    .p2{
        font-size: .7rem;
        color: #333;
        margin-bottom: .2rem;

    }
    .p3,.p4,.p5{
        font-size: .6rem;
        color: #666;
        margin-right: .2rem;
        position: relative;
        line-height: 1rem;
    }
    a{
        color: white;
    }
    .star{
        display: block;
        transform: scale(0.5);
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
    }
    img{
        width: 100%;
    }
    .title{
        font-size: .8rem;
        font-weight: 700;
    }
    .logo{
        font-size: 1.4rem;
        text-align: left;
        line-height: 2rem;
        padding-left: 0.5rem;
    }
</style>
