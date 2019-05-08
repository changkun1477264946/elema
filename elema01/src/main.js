// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import './assets/resize';

import Vuex from "vuex";
Vue.use(Vuex);
const store = new Vuex.Store({
    state:{
        latitude: '123', // 当前位置纬度
        longitude: '', // 当前位置经度
        cartList: {}, // 加入购物车的商品列表
        shopDetail: null, //商家详情信息
        userInfo: null, //用户信息
        shopid: null,//商铺id
        remarkText: null,//可选备注内容
        inputText: '',//输入备注内容
        invoice: false,//开发票
        newAddress: [], //确认订单页新的地址
        searchAddress: null,//搜索并选择的地址
        geohash: '31.22299,121.36025',//地址geohash值
        choosedAddress: null,//选择地址
        addressIndex: null,//选择地址的索引值
        needValidation: null,//确认订单时是否需要验证
        cartId: null, //购物车id
        sig: null,//购物车sig
        orderParam: null,//订单的参数
        orderMessage: null, //订单返回的信息
        orderDetail: null, //订单详情
        login: true,//是否登录
        imgPath:null,//头像地址
        removeAddress:[],//移除地址
        addAddress:'',		//新增地址
        question: null,//问题详情
        cartPrice: null, //会员卡价格
    },
    // getters:{
    //
    // },
    // mutations:{
    //
    // },
    // actions:{
    //
    // }
});

import iView from 'iview';
import '../node_modules/iview/dist/styles/iview.css';
Vue.use(iView);

Vue.config.productionTip = false;

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);

import vueSwiper from 'vue-awesome-swiper'
import '../node_modules/swiper/dist/css/swiper.min.css';
Vue.use(vueSwiper);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
});
