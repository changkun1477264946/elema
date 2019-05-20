<template>
    <div class="qq">
        <transition name="fade">
            <loading v-if="isLoading"></loading>
        </transition>
        <zhead>
            <router-link :to="{path:'/search'}" slot="logo" class="logo">
                <span class="glyphicon glyphicon-search
                "></span>
            </router-link>
            <router-link slot="title" :to="{path:'/home'}" class="tilte11">{{$store.state.localCity}}</router-link>
            <div slot="login"  class="login" v-if="Object.keys($store.state.userInfo).length<=3">
                <router-link :to="{path:'/login'}">登录 | 注册</router-link>
            </div>
            <div slot="login"  class="login1" v-if="Object.keys($store.state.userInfo).length>3">
                <router-link :to="{path:'/profile'}"><Icon type="ios-person-outline" /></router-link>
            </div>
        </zhead>
        <div>
            <swiper :options="swiperOption" class="swiperC">
                <!-- slides -->
                <swiper-slide>
                    <Row class="text-center">
                        <Col span="6"  v-for="(food,i) in foods1" :key="i" class="food" >
                            <div @click="zfoodclick(food.title,food.id)">
                                <div><img v-bind:src="'//fuss10.elemecdn.com/'+food.image_url"></div>
                                <div class="title">{{food.title}}</div>
                            </div>

                        </Col>
                    </Row>
                </swiper-slide>
                <swiper-slide>
                    <Row class="text-center">
                        <Col span="6"  v-for="(food,i) in foods2" :key="i" class="food" >
                            <div @click="zfoodclick(food.title,food.id)">
                                <div><img v-bind:src="'//fuss10.elemecdn.com/'+food.image_url"></div>
                                <div class="title">{{food.title}}</div>
                            </div>

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
            <Row class="store" v-for="(stores,i) in goodList" :key="i" >
                <div @click="goCtype(stores.id)">
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
                            <div class="pull-left fss1"  >
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
                            <span class="fs1 pull-left"> &nbsp;¥{{stores.float_minimum_order_amount}} 起送 / 配送费约 ¥{{stores.float_delivery_fee}}</span>
                            <span class="pull-right fs1">{{stores.distance}} {{stores.order_lead_time}}</span>
                        </p>
                    </Col>
                </div>

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
    import Loading from "../../components/common/loading";
    export default {
        name: "Food",
        components: {Loading, Zhead,footGuide},
        data(){
            return {
                isLoading: true,
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
                 console.log(res.data,"ffffffff");
                this.foods=res.data;
                this.foods1=res.data.slice(0, this.foods.length/2);
                this.foods2=res.data.slice(this.foods.length/2);
                this.isLoading = false
            }).catch((error)=>{
                console.log('请求错误:' ,error);
            });
        },
        methods:{
            goCtype(i){
                this.$router.push({path:'/ctype',query:{id:i}})
            },
            zfoodclick(a,b){
                this.$router.push({path:'/zfood',query:{title:a,restaurant_category_id:b}});
            }
        },
        computed:{
            getGoodsList(){
                Vue.axios.get('https://elm.cangdu.org/shopping/restaurants?latitude='+this.$store.state.latitude+'&longitude='+this.$store.state.longitude).then((res)=>{
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
    .logo{
        text-align: left;
        display: block;
        padding-left: 1rem;
    }
    .login1{
        font-size: 1.4rem;
        text-align: right;
        padding-right: 0.6rem;
        line-height: 2.1rem;
    }
    .tilte11{
        font-size: 0.85rem;
        font-weight: 400;
        padding: 0 0.6rem;
        margin-top: -0.1rem;
        margin-left: -0.2rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    a{
        color: white;
        list-style: none;
        text-decoration: none;
    }
    .qq{
        width: 100%;
        padding-top: 2.3rem;
        padding-bottom: 2.5rem;
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
    .fss1{
        position: relative;
        width: 100%;
    }
    .sc{
        transform: scale(0.45) ;
        /*translate(-50%,-50%)*/
        position: absolute;
        top:-.5rem;
        left: -1.8rem;
        bottom: -1.2rem;
        margin: 0;
        padding: 0;
    }
    /*.sc{*/
        /*transform: scale(0.45) ;*/
    /*!*translate(-50%,-50%)*!*/
        /*position: absolute;*/
        /*top:-8%;*/
        /*left: -16%;*/

    /*}*/
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
