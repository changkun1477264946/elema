// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import './assets/resize';



import animated from 'animate.css' // npm install animate.css --save安装，在引入
Vue.use(animated);

import Vuex from "vuex";
Vue.use(Vuex);
axios.defaults.withCredentials = true
const store = new Vuex.Store({
    state:{
        guessCity:{},  //当前城市信息 name id
        localCity:'', // 当前城市名字
        latitude: '', // 当前位置纬度
        longitude: '', // 当前位置经度
        cartListNum:0, //
        cartListPrice:0,
        cartList: [], // 加入购物车的商品列表
        shopDetail: null, //商家详情信息
        userInfo: {}, //用户信息
        shopid: null,//商铺id
        remarkText: [],//可选备注内容
        inputText: '',//输入备注内容
        invoice: '不需要开发票',//开发票
        searchAddress: null,//搜索并选择的地址
        choosedAddress: null,//选择地址
        newAddress: [], //确认订单页新的地址

        name1:"",
        changeIcon:1,
        iphone:'',
        iphone1:'',
        address_detail:'',
        tag:'',

        cartLBSX:'',   // 购物车的横坐标
        cartLBSY:'',  // 购物车的纵坐标

        iconColor:1,

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


        geohash: '31.22299,121.36025',//地址geohash值
    },
    getters:{
        productCount:(state)=>{
            let num=0;
            for(let i in state.cartList) {
                num += state.cartList[i].count;
            }
            return num;
        },
        // ball:(state)=>{
        //     let num=0;
        //     for(let i in state.cartList) {
        //         num += state.cartList[i].count;
        //     }
        //     return num;
        // },
    },
    mutations: {
        removeProduct(state,obj){
            state.cartList = state.cartList.filter((v)=>{
                if(v.f._id === obj.f._id){
                    v.count = obj.count
                }
                return v.count >=0;
            });
        },
        addProduct(state,obj){
            if(state.cartList.length===0){
                state.cartList.push(obj)
            }else{
                let isHas = state.cartList.some((v)=>{
                    return (v.f._id === obj.f._id);
                });
                if (isHas) {
                    state.cartList.map((v)=>{
                        if(v.f._id === obj.f._id){
                            v.count = obj.count
                        }
                    });
                }else {
                    // 创建新的obj对象, count=1
                    state.cartList.push(obj);

                }
            }
        },
        byRemarkText(state,obj){
            state.remarkText =obj;
        },
        byInputText(state,obj){
            state.inputText = obj;
        },
        byInvoice(state,obj){
            state.invoice =obj;
        },
        clearCartList(state){
            state.cartList = [];
            state.cartListPrice= 0;
            state.cartListNum= 0;
        },
        mainDelShoppingCart(state,num){
            state.cartListNum --;
            state.cartListPrice -= num;
        },
        mainAddShoppingCart(state,num){
            state.cartListNum++;
            state.cartListPrice += num;
        },
        byUserInfo(state,data){
            state.userInfo=data
        },
        byUserInfo1(state,data){
            state.userInfo.username=data
        },
        byChoosedAddress(state,data){
            state.choosedAddress = data
        },
        bySearchAddress(state,data){
            state.searchAddress = data
        },
        changeAddressData(state,datas){
            state.name1=datas[0];
            state.changeIcon=datas[1];
            state.iphone=datas[2];
            state.iphone1=datas[3];
            state.address_detail=datas[4];
            state.tag=datas[5];
        },
        deleteAddressData1(state){
            state.name1="";
            state.changeIcon=1;
            state.iphone="";
            state.iphone1="";
            state.address_detail="";
            state.tag="";
        },
        ChangeIconColor(state,i){
            state.iconColor = i;
        },
        changeCityInfo(state,a){
            state.latitude = a.latitude;
            state.longitude = a.longitude;
            state.localCity = a.name;
            state.guessCity = a;
        },
        changeCityInfo1(state,a){
            state.latitude = a.latitude;
            state.longitude = a.longitude;
            state.localCity = a.name;
            state.guessCity = a;
        },
        clearUserInfo(state){
            state.userInfo={};
        }

    },
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
