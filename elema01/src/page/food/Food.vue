<template>
    <div class="qq">
        <zhead>
            <div slot="logo" >
                <span class="glyphicon glyphicon-search
                "></span>
            </div>
            <div slot="title">郑州站</div>
            <div slot="login"><router-link :to="{path:'/login'}">登录 | 注册</router-link></div>
        </zhead>
        <div>
            <swiper :options="swiperOption" class="swiperC">
                <!-- slides -->
                <swiper-slide>
                    <Row class="text-center">
                        <Col span="6"  v-for="(food,i) in foods1" :key="i" class="food">
                            <div><img v-bind:src="'//fuss10.elemecdn.com/'+food.image_url"></div>
                            <div class="title">{{food.title}}</div>
                        </Col>
                    </Row>
                </swiper-slide>
                <swiper-slide>
                    <Row class="text-center">
                        <Col span="6"  v-for="(food,i) in foods2" :key="i" class="food">
                            <div><img v-bind:src="'//fuss10.elemecdn.com/'+food.image_url"></div>
                            <div class="title">{{food.title}}</div>
                        </Col>
                    </Row>
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
        {{getGoodsList}}
        <div class="stores fs">
            <h2>
                <Icon type="md-filing"/>
                附近商家
            </h2>
            <Row class="store" v-for="(stores,i) in goodList" :key="i">
                <Col span="5">
                    <img :src="'//elm.cangdu.org/img/'+stores.image_path" alt="">
                </Col>
                <Col span="19" class="storeBody">
                    <div class="roww">
                        <span class="pingpai pull-left">品牌</span>
                        <span class="fs2">{{stores.name}}</span>
                        <span class="pull-right">保准票</span>
                    </div>
                    <div class="fs1 text-right">
                        <div class="pull-left">
                            <span  class="sc">
                                <Rate disabled  show-text allow-half v-model="valueCustomText" class="v">
                                     <span style="color: #f5a623">{{ valueCustomText }}</span>
                                </Rate>
                            </span>
                            <span class="fs11">月售{{stores.recent_order_num}}单</span>
                        </div>
                        <span class="bird pull-right">
                            蜂鸟专送
                        </span>
                        <div class="clearfix"></div>
                    </div>
                    <p>
                        <span class="fs1 pull-left">¥{{stores.float_minimum_order_amount}}起送 / 配送费约¥{{stores.float_delivery_fee}}</span>
                        <span class="pull-right fs1">{{stores.distance}}{{stores.order_lead_time}}</span>
                    </p>
                </Col>
            </Row>
        </div>
        <footGuide></footGuide>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Zhead from "../../components/header/head";
    import footGuide from "../../components/footer/footGuide";
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
    export default {
        name: "Food",
        components: {Zhead,footGuide},
        data(){
            return {
                value: 0,
                valueCustomText: 4.5,
                swiperOption: {
                    //显示分页
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true //允许分页点击跳转
                    },
                    //自动轮播
                    // autoplay: {
                    //     delay: 4000
                    // },
                    //开启循环模式
                    // loop: true,
                    //开启鼠标滚轮控制Swiper切换
                    mousewheel: true,
                },
                foods:[],
                foods1:[],
                foods2:[],
                goodList:[],
            }
        },
        mounted(){
            Vue.axios.get('https://elm.cangdu.org/v2/index_entry').then((res)=>{
                // console.log(res.data);
                this.foods=res.data;
                this.foods1=res.data.slice(0, this.foods.length/2);
                this.foods2=res.data.slice(this.foods.length/2);
            }).catch((error)=>{
                console.log('请求错误:' ,error);
            });
        },
        methods:{

        },
        computed:{
            getGoodsList(){
                Vue.axios.get('https://elm.cangdu.org/shopping/restaurants?latitude='+this.$store.state.latitude+'&longitude='+this.$store.state.longitude).then((res)=>{
                    console.log(res.data,'11');
                    this.goodList = res.data
                }).catch((error)=>{
                    console.log('请求错误:' ,error);
                });
                // return this.goodList;
            }
        }
    }
</script>

<style scoped>
    .login a{
        color: white;
    }
    .qq{
        width: 100%;
        padding-top: 2.3rem;
    }
    .bird{
        margin-left: 1.6rem;
    }
    .pull-right{
        padding-right: 0.5rem;
    }
    .fs11{
        position: absolute;
        left: 40%;
    }
    .fs2{
        display: inline-block;
        width: 5rem;
        font-size: 0.8rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding-left: 0.2rem;
    }
    .roww{
        /*padding: 0.1rem 0;*/
    }
    .fs{
        font-size: 0.6rem;
    }
    .fs1{
        font-size: 0.5rem;
        position: relative;
        /*height: 1rem;*/
        padding: 0.3rem 0;
    }
    .v{
        vertical-align: 0;

    }
    .sc{
        transform: scale(0.5);
        position: absolute;
        top: -0rem;
        left: -1.5rem;

    }
    .store{
        border-bottom: 0.05px solid #f1f1f1;
        padding: 0.5rem 0.2rem 0.2rem;
    }
    .storeBody{
     padding-left: 0.3rem;
    }
    .pingpai{
        background: #ffd930;
        color: white;
        padding: 2px 2px;
        margin-right: 5px;
    }
    .food{
        font-size: 0.6rem;
        padding: 5px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .swiperC img{
        width: 50%;
    }
    .title{
        padding-top: 10px;
    }
    .swiper-pagination{
        position: relative;
        top: 0px;
        left: 0;
    }
    .stores h2{
        color: #999;
        font: 0.7rem Microsoft YaHei;
        margin-left: .6rem;
    }
    .stores img{
        width: 100%;
    }

</style>
