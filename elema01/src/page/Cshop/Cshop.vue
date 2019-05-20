<template>
    <div class="goodsss" :style="contentStyleObj">
        <transition name="fade">
            <loading v-if="isLoading"></loading>
        </transition>
        <Col class="leftShop" span="6">
            <a :href="'#'+data.name+i" @click="changeA(i)" :class="{leftAa:changeAa===i}" class="left"  v-for="(data,i) in datas" :key="i">{{data.name}}</a>
        </Col>
        <Col class="rightShop" span="18">
            <div v-for="(data,i) in datas" :key="i" class="cshop">
                <div class="chead" :id="data.name+i">{{data.name}}<span class="fs111">{{data.description}}</span></div>
                <div class="cbody" v-for="(food,k) in data.foods" :key="k">
                    <Col  class="cleft" span="5" @click="goShoppingInfor(food)">
                        <img :src="'//elm.cangdu.org/img/'+food.image_path" alt="">
                    </Col >
                    <Col  class="cright" span="19">
                        <div  @click="goShoppingInfor(food)">
                            <div class="r1">{{food.name}}</div>
                            <div class="r2">{{food.description}}</div>
                            <!--<div class="r3">{{food.tips}}</div>-->
                            <div class="r3">月售{{food.rating_count}}份 &nbsp;&nbsp; 好评率{{food.satisfy_rate}}%</div> </div>
                        <div class="r5">
                            <span class="s1">¥{{food.specfoods[0].price}}</span>
                            <span class="s2">起</span>&nbsp;&nbsp;
                        </div>
                        <RbuttonA :foodT="food" :shop="$parent.datas" :ball="ballGoCart11"></RbuttonA>
                    </Col >
                </div>
            </div>
        </Col>
        <div v-if="show1 = $store.state.cartListNum > 0 ? show1 : false" class="goodsListTop">
            <div class="goodsList">
                <ul>
                    <li class="cartGoods">
                        <span class="span1">购物车</span>
                        <span class="span2" @click="clearList">
                            <Icon type="ios-trash-outline" class="span2_i"/>清空
                        </span>
                    </li>
                    <li v-for="(list,i) in $store.state.cartList" class="goodssli" v-if="list.count!==0">
                        <span class="sp1">{{list.f.name}}</span>
                        <span class="sp2">¥ {{list.f.specfoods[0].price*list.count}}</span>
                        <RbuttonA :foodT="list.f" class="rara"></RbuttonA>
                    </li>
                </ul>
            </div>
        </div>
        <div>
            <shopping-cart></shopping-cart>
        </div>

    </div>
</template>

<script>
    import Vue from 'vue';
    import ShoppingCart from "../../components/common/shoppingCart";
    import RbuttonA from "../../components/common/RbuttonA";
    import Loading from "../../components/common/loading";
    export default {
        name: "Cshop",
        components: {Loading, RbuttonA, ShoppingCart},
        data(){
            return {
                isLoading: true,
                show1:false,
                proArr:[],
                datas:[],
                changeAa:0,
                contentStyleObj:{
                    height:''
                },
            }
        },
        mounted(){
            Vue.axios.get('https://elm.cangdu.org/shopping/v2/menu?restaurant_id='+this.$parent.$route.query.id).then((res)=>{
                // console.log(res.data)
                this.datas=res.data;
                console.log(res.data,1111);
                this.isLoading = false
            }).catch((error)=>{
                console.log('请求错误:' ,error);
            });
            this.contentStyleObj.height=window.innerHeight-(2.6*20)-(5*20)+'px';
        },
        methods:{
            changeA(i){
                this.changeAa=i;
            },
            goShoppingInfor(food){
                this.$router.push({path:'/shoppinginfor',query:{data:food}})
            },
            showGoodsList(){
                if(this.$store.state.cartListNum >= 1){
                    this.show1 = !this.show1
                }
            },
            clearList(){
                this.$store.commit('clearCartList');
            },
        }
    }
</script>

<style scoped>
  /*  .ball1{
        display: inline-block;
    }
    .ball1 button{
        opacity: 0.7;
        border-radius: 50%;
        width: .8rem;
        height: .8rem;
        color: white;
        background: #3190e8;
        font-size: 0.7rem;
        outline: none;
        text-align: center;
        line-height: 0.6rem;
        border: 1px solid #3190e8;
        position: fixed;
        !*bottom: 0;*!
        !*left: 0;*!
        !*transform: translateZ(1555px);*!
        z-index: 1121;
    }*/
    .goodsss{
        padding-bottom: 2.5rem;
    }
    .goodsListTop{
        position: fixed;
        z-index: 10;
        top: 0;
        left: 0;
        right: 0;
        bottom: 2.2rem;
        background: rgba(0,0,0,0.6);
    }
    .goodsList{
        position: fixed;
        left: 0;
        right: 0;
        bottom: 2.2rem;
        margin: 0;
        padding: 0;
    }
    ul{
        margin: 0;
    }
    .rara{
        vertical-align: middle;
    }
    .cartGoods{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .3rem .6rem;
        background-color: #eceff1;
    }
    .cartGoods .span1{
        font-size: .7rem;
        color: #666;
    }
    .cartGoods .span2{
        font-size: .6rem;
        color: #666;
    }
    .span2_i{
        font-size: 0.7rem;
        vertical-align: text-top;
    }
    .goodssli{
        padding: .0rem .6rem;
        line-height: 2rem;
        background: #fff;
        position: relative;
    }
    .sp1{
        display: inline-block;
        height: 2rem;
        padding: 0;
        margin: 0;
        vertical-align: middle;
        /*line-height: 2rem;*/
        width: 40%;

        overflow: hidden;

        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: .8rem;
        color: #666;
        font-weight: 700;
    }
    .sp2{
        font-size: .7rem;
        color: #f60;
        font-weight: 700;
        position: absolute;
        left: 57%;
    }
    .fs111{
        width: 100%;
        height: 100%;
        font-size: 0.4rem;
        margin-left: 0.6rem;
        font-weight: 200;
        color: #999;
    }
    .leftShop{
        font-size: 0.7rem;
        font-family: Microsoft Yahei,serif;
        text-overflow: ellipsis;
        white-space: nowrap;
        height: 100%;
        overflow-x: hidden;
        overflow-y: scroll;
    }
    .rightShop{
        height: 100%;
        overflow-y: scroll;
    }
    .left{
        color: #666;
        font-weight: 500;
        display: block;
        /*text-align: center;*/
        text-indent: 0.4rem;
        padding: 0.7rem 0;
        border-bottom: solid #ededed 1px;
        border-left: solid transparent 0.15rem;
    }
    .leftAa{
        font-weight: 800;
        background-color: #fff;
        color: #333;
        text-decoration: none;
        border-left: solid #3190e8 0.15rem;

    }
    .cshop{
        border-bottom: 1px solid #f8f8f8;
        position: relative;
    }
    .cshop .chead{
        padding: .4rem .4rem;
        font-size: .7rem;
        color: #666;
        font-weight: 700;
        white-space: nowrap;
        overflow: hidden;
        font-family: Microsoft Yahei,sans-serif;
    }
    .cbody{
        background-color: #fff;
        padding: .6rem .4rem;
        border-bottom: 1px solid #f8f8f8;
        position: relative;
        overflow: scroll;
        /*asdsadasdsadasdasdsadsadsadasdsadsadasawdad*/
    }
    .cleft img{
        width: 100%;
    }
    .cright{
        text-indent: 0.4rem;
    }
    .r1{
        font-size: .9rem;
        color: #333;
        font-weight: 600;
    }
    .r2{
        font-size: .6rem;
        color: #999;
        line-height: .8rem;
    }
    .r3{
        line-height: 1rem;
        font-size: 0.6rem;
    }
    /*    .r4{
            line-height: .5rem;
            padding: .08rem;
            margin-left: -.35rem;
        }*/
    .r4 span{
        color: rgb(241, 136, 79);
        /*border-color: rgb(240, 115, 115);*/
        font-size: .4rem;
        padding: .1rem;
        border: 1px solid currentColor;
        border-radius: .5rem;
        text-indent: 0;
        display: inline-block;
        /*transform: scale(.8);*/
        text-align: center;
    }
    .r5 .s2{
        font-size: .5rem;
        color: #666;
    }
    .r5 .s1{
        font-size: .7rem;
        color: #f60;
        font-weight: 700;
        margin-right: .1rem;

    }
</style>
