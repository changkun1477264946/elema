<template>
    <div>
        <div class="container1" ref="container1">
            <Row >
                <div  @click ="$parent.showGoodsList"  ref="cart" >
                    <Col span="4" class="cart"  :style="{background:($store.state.cartListNum===0?'#3d3d3f':'#3190e8')}">
                        <Icon type="md-cart" />
                        <span class="numGoods" v-show="$store.getters.productCount !==0">{{$store.getters.productCount}}</span>

                    </Col>
                    <Col span="12" class="price">
                        <div class="sumPrice">¥&nbsp;{{$store.state.cartListPrice}}.00</div>
                        <div class="travellingPrice">配送费$5</div>

                    </Col>
                </div>
                <Col span="8" class="submitPrice"  v-if="$store.state.cartListPrice < 20">
                    还差{{$parent.$parent.datas.float_minimum_order_amount - this.$store.state.cartListPrice}}起送
                </Col>
                    <Col span="8" class="submitPrice submitPrice1" v-else>
                        <div  @click="goOrder">
                            去结算
                        </div>
                    </Col>
            </Row>
        </div>
    </div>

</template>

<script>
    export default {
        name: "shoppingCart",
        methods:{
            goOrder(){
                this.$router.push({path:'/order'});

            }
        },
    }
</script>

<style scoped>
    .container1{
        position: fixed;
        z-index: 101;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 0;
        background-color: #3d3d3f;
        height: 2.2rem;
        color: #fff;
    }
    .cart{
        background-color: #3d3d3f;
        position: absolute;
        padding: .1rem;
        border: .18rem solid #444;
        border-radius: 50%;
        left: .5rem;
        top: -1rem;
        z-index: 111;
        font-size: 1.5rem;
        text-align: center;
    }
    .numGoods{
        padding: 0;
        position: absolute;
        top: -.25rem;
        right: -.25rem;
        background-color: #ff461d;
        line-height: .8rem;
        text-align: center;
        border-radius: 50%;
        border: .025rem solid #ff461d;
        min-width: .9rem;
        height: .9rem;
        font-size: .5rem;
        color: #fff;
        font-family: Helvetica Neue,Tahoma,Arial,serif;

    }
    .price{
        padding-top: 0.1rem;
        padding-left: 4.5rem;
        background-color: #3d3d3f;
    }
    .sumPrice{
        font-size: .8rem;
        font-weight: 700;
        margin-bottom: .1rem;
    }
    .travellingPrice{
        font-size: .4rem;
    }
    .submitPrice{
        display: inline-block;
        font-size: .7rem;
        font-weight: 700;
        position: absolute;
        right: 0;
        top: 0;
        background-color: #535356;
        line-height: 2.2rem;
        padding: 0;
        text-align: center;
    }
    .submitPrice1{
        background-color: #4cd964;
    }
</style>
