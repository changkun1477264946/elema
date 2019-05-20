<template>
    <div>
        <transition name="fade">
            <loading v-if="isLoading"></loading>
        </transition>
        <!-- 店铺信息-->
        <div ref="element" v-show="!aaa1">
            <div class="mineTitle" :style="bgc">
                <!--<Icon type="ios-arrow-back" />-->
                <div>
                    <Row>
                        <Col span="5">
                            <router-link :to="{path:'/food'}">
                                <img :src="'https://elm.cangdu.org/img/'+datas.image_path" alt="">
                            </router-link>
                        </Col>
                        <Col span="19">
                            <!--<router-link :to="{path:'/fooddetection',query:{id: datas.id}}">-->
                            <div class="mine_div1" @click="changeAaa">
                                <p class="mine_p1">{{datas.name}}</p>
                                <p class="mine_p2">商家配送 / 分钟送达 / {{datas1}}</p>
                                <p class="mine_p3">公告 : {{datas.promotion_info}}</p>
                            </div>
                            <!--</router-link>-->
                        </Col>
                    </Row>
                </div>
                <div class="mine_div2" @click="changeMeng">
                    <span class="mine_del">减</span>
                    {{datas2}} ( APP专享 )
                    <span class="pull-right fss">一个活动 ></span>
                </div>

            </div>
            <div class="head" ref="ele">
                <Row>
                    <Col span="12"  >
                        <div @click="changebgc(0)">
                            <router-link :to="{path:'/ctype/cshop',query:{id: datas.id}}" :class="{ah:change===0}">商品</router-link>
                        </div>
                    </Col>
                    <Col span="12">
                        <div @click="changebgc(1)">
                            <router-link :to="{path:'/ctype/evaluate',query:{id: datas.id}}"  :class="{ah:change===1}">评价</router-link>
                        </div>
                    </Col>
                </Row>
            </div>
            <router-view></router-view>
        </div>
        <transition name="ck">
            <div class="mengban" v-if="mengChang">
                <h3 class="mh3">{{datas.name}}</h3>
                <div class="youhui">
                    <div class="div11">
                        <div class="div11_top">优惠信息</div>
                        <div class="div11_down"><span class="mine_del">减</span> &nbsp;{{datas2}} ( APP专享 )</div>
                    </div>
                </div>
                <div class="youhui">
                    <div class="div11">
                        <div class="div11_top">商家公告</div>
                        <div class="div11_down">{{datas.description}}</div>
                    </div>
                </div>
                <span @click="changeMeng1"><Icon type="ios-close-circle-outline" class="tubiao"  /></span>
            </div>
        </transition>
        <transition name="cmp"  mode="out-in">
            <food-detection v-if="aaa1"></food-detection>
        </transition>
    </div>
</template>
<script>
    import Vue from 'vue';
    import FoodDetection from "../Cshop/foodSafeDetetion/foodDetection";
    import Loading from "../../components/common/loading";
    export default {
        name: "Ctype",
        components: {Loading, FoodDetection},
        data(){
            return {
                isLoading: true,
                change:0,
                datas:[],
                mengChang:false,
                aaa1:false,
                datas1:'',
                datas2:'',
                datas3:'',
                bgc:{},
            }
        },
        mounted(){
            //+this.$route.query.id

            let a = Math.floor(Math.random()*255);
            let b = Math.floor(Math.random()*255);
            let c = Math.floor(Math.random()*255);
            // e.target.style.backgroundColor= "rgb("+a+","+b+","+c+")";
            this.bgc={background:"rgba("+a+","+b+","+c+','+0.5+")"};

            Vue.axios.get('https://elm.cangdu.org/shopping/restaurant/'+this.$route.query.id).then((res)=>{
                console.log(res.data,'aaa3284');
                this.datas=res.data;
                this.datas1=this.datas.piecewise_agent_fee.tips;
                this.datas2=this.datas.activities[0].description;
                this.datas3=this.datas.delivery_mode.color;
            }).catch((error)=>{
                console.log('请求错误:' ,error);
            });
            this.$store.state.shopid=this.$route.query.id; // 注意:后期改
            this.isLoading = false
        },
        methods:{
            changeAaa(){
                this.aaa1 = true;
            },
            changeAaa1(){
                this.aaa1 = false;
            },
            changeMeng(){
                this.mengChang = true;
            },
            changeMeng1(){
                this.mengChang = false;
            },
            changebgc(d){
                this.change=d;
            },
        },
    }

</script>
<style scoped>
    .mengban{
        position: fixed;
        right: 0;
        top: 0;
        bottom: 0;
        left: 0;
        background-color: #262626;
        z-index: 500;
        padding: 1.25rem;
    }
    .mh3{
        text-align: center;
        font-size: .8rem;
        color: #fff;
    }
    .youhui{
        margin-top: 1.5rem;
        margin-bottom: 1rem;
        font-size: .5rem;
        color: #fff;
    }
    .div11{
        text-align: center;

    }
    .div11_top{
        display: inline-block;
        font-size: .5rem;
        color: #fff;
        border: .025rem solid #555;
        padding: .2rem .4rem;
        border-radius: .5rem;
        margin-bottom: 1rem;
    }
    .div11_down{
        color: #fff;
        line-height: .6rem;
    }
    .tubiao{
        position: absolute;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%);
        font-size: 3rem;
        color: rgba(153, 153, 153,0.8);
    }
    .mineTitle {
        background-size: cover;
        height: 5rem;
        font-size: 0.6rem;
        position: relative;
        z-index: 10;
        /*background-color: rgba(0,0,0,.8);*/
        padding: .4rem 0 .4rem .4rem;
        width: 100%;
        overflow: hidden;
    }
    .fss{
        font-size: 0.5rem;
    }
    .mineTitle img{
        width: 2.9rem;
        height: 2.9rem;
        display: block;
        border-radius: .15rem;
    }
    .mine_div1{
        padding-left: 0.2rem ;
    }
    .mine_div2{
        color: white;
        padding-top: .2rem;
        padding-right: 1rem;
        line-height: 1.2rem;
    }
    .mine_del{
        background-color: rgb(240, 115, 115);
        border-color: rgb(240, 115, 115);
    }
    .mine_p1{
        width: 100%;
        padding-bottom: .2rem;
        font-size: 0.8rem;
        color: white;
        font-weight: 700;
    }
    .mine_p2{
        font-size: .5rem;
        color: #fff;
        margin-bottom: .3rem;
    }
    .mine_p3{
        font-size: .5rem;
        color: #fff;
        width: 11.5rem;

    }
    p{
        margin: 0;
    }
    .head{
        width: 100%;
        height: 2.6rem;
        text-align: center;
        padding: 0.4rem 0;
        border-bottom:1px solid #f5f5f5 ;
        background-color: #fff;
    }
    .head a{
        color: #333;
        font-size: 0.65rem;
        display: inline-block;
        padding: 0.15rem 0.1rem;
        text-decoration: none;
    }
    .ah{
        list-style: none;
        color: #3190e8;
        border-bottom: 2px solid #3190e8;;
    }
    .ck-enter-active,.ck-leave-active{
        transition: opacity 0.5s;
    }
    .ck-enter,.ck-leave-to{
        opacity: 0;
    }
    @keyframes show {
        0%{
            opacity: 1;
            transform: translateX(0%);
        }
        50%{
            opacity: 0.5;
            transform: translateX(50%);
        }
        100%{
            opacity: 0;
            transform: translateX(100%);
        }
    }
    .cmp-leave-active{
        animation: show 0.1s;
    }
    .cmp-enter-active{
        animation: show 0.1s reverse;
    }
</style>
