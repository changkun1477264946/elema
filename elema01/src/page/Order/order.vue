<template>
    <div class="container1">
        <!--头部-->
        <zhead>
            <div  slot="logo" class="logo" @click="goCtype()">
                <Icon type="ios-arrow-back" />
            </div>
            <div slot="title" class="title">确认订单</div>
            <div slot="login"  class="login"><router-link :to="{path:'/login'}">
                <Icon type="ios-person-outline" />
            </router-link></div>
        </zhead>
        <!--增加和选择地址-->
        <div @click="goAddAddress">
            <div class="addressUser" >
                <span class="addressUser_up">
                    <Icon type="ios-pin-outline" class="addressUser_up_i"/>
                    <span class="dd" v-if="$store.state.searchAddress">
                        <span class="sp1">{{$store.state.searchAddress.name}}</span>
                        <span class="sp2">{{$store.state.searchAddress.sex === 1?'先生':'女士'}}</span>
                        <span class="sp3">{{$store.state.searchAddress.phone}}</span><br>
                        <span class="sp4">{{$store.state.searchAddress.tag}}</span>
                        <span class="sp5">{{$store.state.searchAddress.address_detail}}</span>
                    </span>
                    <span v-if="!$store.state.searchAddress">请添加一个收货地址</span>
                </span>
                <span class="addressUser_down"><Icon type="ios-arrow-forward" color="#999"/></span>
            </div>
        </div>

        <!--送达时间-->
        <div class="timePath">
            <div class="address_left">送达时间</div>
            <div class="address_right">
                <span class="address_right_up">尽快送达 | 预计 {{getTime}}</span>
                <span class="address_right_down">蜂鸟专送</span>
            </div>
        </div>
        <!--支付方式-->
        <div class="payMade">
            <div class="payMade_up">
                <span class="payMade_up_left">支付方式</span>
                <span class="payMade_up_right" @click="appearMadeM">在线支付 &nbsp;<Icon type="ios-arrow-forward" /></span>
            </div>
            <div class="payMade_down">
                <span class="payMade_down_left">红包</span>
                <span class="payMade_down_right">暂时只在饿了吗APP中支付</span>
            </div>
        </div>
        <!--显示选择支付方式模块 -->
        <div class="choosePayMade" @click="appearMadeM" v-if="show1">
            <div class="cover" @click.stop="appearMadeM1">
                <div class="choosePayMade_head">支付方式</div>
                <div class="choosePayMade_1" @click="choosePayMethon(1)">货到付款()
                    <Icon type="ios-checkmark-circle" :color="(icon1===1 ? '#4cd964': '#ccc')" class="choosePayMade_icon" />
                </div>
                <div class="choosePayMade_2" @click="choosePayMethon(2)">在线支付
                    <Icon type="ios-checkmark-circle" :color="icon1===2 ? '#4cd964':'#333'" class="choosePayMade_icon" />
                </div>
            </div>
        </div>
        <!--商品-->
        <div class="shop" v-for="(item,key,i) in shopss" :key="i">
            <div class="shop_head">{{key}}</div>
            <div class="good div1" v-for="(vvv,k) in item" :key="k">
                <span>{{vvv.f.name}}</span>
                <div class="good_right">
                    <span class="good_right_r">×{{vvv.count}}</span>
                    <span>¥{{vvv.f.specfoods[0].price}}</span>
                </div>
            </div>
            <div class="diningBox div1">
                <span>餐盒</span>
                <span>¥ {{10*goodsNum[i]}}</span>
            </div>
            <div class="pathPrice div1">
                <span>配送费</span>
                <span>¥ 5</span>
            </div>
            <div class="allPrice">
                <Col span="16">
                    <div>订单 &nbsp; ¥ {{goodPrice[i]}}</div>
                </Col>
                <Col span="8">
                    <div class="allPrice_down">
                        <div class="allPrice_down_up">待支付</div>
                        <div class="allPrice_down_dowm">¥ {{goodPrice[i]+10*goodsNum[i]+5}}</div>
                    </div>
                </Col>
            </div>
        </div>
        <!--订单备注-->
        <div class="orderRemark">
            <div class="orderRemark_up">
                <span class="orderRemark_up_left">订单备注</span>
                <span class="orderRemark_up_right ellipsis" @click="goOrderRemake">
                    <span class="">{{remarkText}}</span>
                    <Icon type="ios-arrow-forward" class="orderRemark_icon"/>
                </span>
            </div>
            <div class="orderRemark_down">
                <span class="orderRemark_down_left">发票抬头</span>
                <span class="orderRemark_down_right" @click="goOrderBill">{{$store.state.invoice}}
                     <Icon type="ios-arrow-forward" class="orderRemark_icon"/>
                </span>
            </div>
        </div>
        <router-view></router-view>
        <!--底部 确认支付-->
        <div class="confirm_Pay">
            <Col span="17">
                <span class="confirm_Pay_left">待支付 &nbsp;¥{{$store.state.cartListPrice+($store.state.cartListNum*10)+(goodPrice.length*5)}}</span>
            </Col>
            <Col span="7">
                <span class="confirm_Pay_right" @click="goPayMoney()">确认下单</span>
            </Col>
        </div>
    </div>
</template>

<script>
    import Zhead from "../../components/header/head";
    export default {
        name: "order",
        components: {Zhead},
        data(){
            return {
                show1:false,
                icon1:2,
                shops:[],
                goods:{},
                goodsNum:[],
                goodPrice:[],
            }
        },
        mounted(){
            console.log(this.$store.state.cartList);
            console.log(this.$store.state.searchAddress,125);
        },
        computed:{
            // 得到当前地址信息
            getAddressData(){
                return this.$store.state.searchAddress;
            },
            // 订单备注
            remarkText(){
                let a = '';
                let aaa = this.$store.state.remarkText.some((v)=>{
                   return v.length>0
                });
                if(!aaa && this.$store.state.inputText.length ===0){
                    a += '口味,偏好等';
                    return  a;
                }
                if(this.$store.state.remarkText.length>0 || this.$store.state.inputText.length>0){
                    this.$store.state.remarkText.map((v)=>{
                        if(v){
                            a += v+' ';
                        }
                    });
                    return a+this.$store.state.inputText;
                }else{
                    a += '口味,偏好等';
                    return  a;
                }
            },
            // 预计送达时间
            getTime(){
                // let year = new Date(timeStamp).getFullYear();
                // let month =new Date(timeStamp).getMonth() + 1 < 10? "0" + (new Date(timeStamp).getMonth() + 1): new Date(timeStamp).getMonth() + 1;
                // let date =new Date(timeStamp).getDate() < 10? "0" + new Date(timeStamp).getDate(): new Date(timeStamp).getDate();     year + "年" + month + "月" + date +"日"+" "+this.nowTime = hh+":"+mm ;
                let hh =new Date(new Date()).getHours() < 10? "0" + new Date(new Date()).getHours(): new Date(new Date()).getHours();
                let mm =new Date(new Date()).getMinutes() < 10? "0" + new Date(new Date()).getMinutes(): new Date(new Date()).getMinutes();
                return hh+1+":"+mm;
            },
            //
            shopss(){
                this.$store.state.cartList.map((v)=>{
                    if(!this.shops.includes(v.shop.name) ) {
                        this.shops.push(v.shop.name)
                    }
                });
                this.shops.map((v)=>{
                    this.goods[v] = this.$store.state.cartList.filter((a)=>{
                        return v === a.shop.name;
                    });
                    let p = 0;
                    let p1 = 0;
                    this.goods[v].map((a)=>{
                        p1 += a.count;
                        p +=(a.count*(a.f.specfoods[0].price));
                    });
                    this.goodsNum.push(p1);
                    this.goodPrice.push(p);
                    console.log(this.goodPrice,'123141')
                });
                return this.goods;
            },
        },
        methods:{
            // 去选择地址页面
            goAddAddress(){
                this.$router.push({path:'/order/searchAddressPage'})
            },
            // 显示选择支付方式模块
            appearMadeM(){
                this.show1 = !this.show1;
            },
            appearMadeM1(){
                this.show1 = true;
            },
           // 选择支付方式
            choosePayMethon(i){
                this.icon1 = i
            },
            // 去OrderRemake页面
            goOrderRemake(){
                this.$router.push({path:'/order/orderRemake'})
            },
            // 去发票页面
            goOrderBill(){
                this.$router.push({path:'/order/orderBill'})
            },
            // 去ctype页面
            goCtype(){
                if(this.$store.state.cartList.length>0){
                    let shopList = this.$store.state.cartList.slice(-1)[0].shop.id;
                    this.$router.push({path:'/ctype',query:{id:shopList}});
                }else {
                    this.$router.push({path:'/food'});
                }
            },
            // 去支付页面
            goPayMoney(){
                this.$router.push({path:'/payMoney'})
            }
        },

    }
</script>

<style scoped>
    .container1{
        padding-top: 2.3rem;
        padding-bottom: 2.7rem;
    }
    .ellipsis {
        overflow: hidden;
        /*text-overflow: ellipsis;*/
        white-space: nowrap;
    }
    .logo{
        text-align: left;
        font-size: 1.3rem;
        line-height: 2rem;
        padding-left: 0.5rem;
    }
    .title{
        font-size: .8rem;
        color: #fff;
        text-align: center;
        font-weight: 700;
    }
    .login{
        font-size: 1.4rem;
        text-align: right;
        padding-right: 0.6rem;
        line-height: 2.1rem;
    }
    a{
        color: white;
    }
    .addressUser{
        min-height: 3.5rem;
        justify-content: space-between;
        padding: 0 .6rem;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        background: url("../../images/address_bottom.png") 0 100% repeat-x;
        background-color: #fff;
        background-size: auto .12rem;
        /*background-color: #fff;*/

    }
    .addressUser_up{
        font-size: .7rem;
        color: #333;
    }
    .addressUser_up_i{
        font-size: 1rem;
        color: #3190e8;
        margin-right: .2rem;
    }
    .timePath{
        background-color: #fff;
        margin-top: .4rem;
        padding: 0 .7rem;
        border-left: .2rem solid #3190e8;
        min-height: 4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .address_left{
        font-size: .8rem;
        color: #333;
        font-weight: 700;
        padding-left: .3rem;
    }
    .address_right{
        display: -ms-flexbox;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
    .address_right_up{
        font-size: .7rem;
        color: #3190e8;
    }
    .address_right_down{
        font-size: .5rem;
        color: #fff;
        background-color: #3190e8;
        width: 2.4rem;
        margin-top: .5rem;
        text-align: center;
        border-radius: .12rem;
        padding: .1rem;
    }
    .payMade{
        background-color: #fff;
        margin-top: .4rem;
        padding: 0 .7rem;
    }
    .payMade_up{
        display: flex;
        justify-content: space-between;
        line-height: 2rem;
    }
    .payMade_up_left{
        font-size: .7rem;
        color: #666;
    }
    .payMade_up_right{
        font-size: .6rem;
        color: #aaa;
        width: 10rem;
        display: inline-block;
        text-align: right;
        vertical-align: middle;
    }
    .payMade_down{
        display: flex;
        justify-content: space-between;
        border-top: .025rem solid #f5f5f5;
    }
    .payMade_down_left{
        font-size: .6rem;
        color: #aaa;
        line-height: 2rem;
    }
    .payMade_down_right{
        color: #aaa;
        font-size: .6rem;
        line-height: 2rem;
    }
    .shop{
        background-color: #fff;
        margin-top: 0.4rem;
    }
    .shop_head{
        padding: .7rem;
        border-bottom: .025rem solid #f5f5f5;
        font-size: .8rem;
        color: #333;
    }
    .div1{
        display: flex;
        justify-content: space-between;
        line-height: 1.8rem;
        padding: 0 .7rem;
        font-size: .65rem;
        color: #666;
    }
    .good_right_r{
        padding-right: 1rem;
        color: #f60;
    }
    .diningBox,.pathPrice{
        padding-top: .5rem;
    }
    .allPrice{
        display: flex;
        justify-content: space-between;
        line-height: 1.8rem;
        padding: 0 .7rem;
        border-top: .025rem solid #f5f5f5;
        font-size: .65rem;
        color: #666;
    }
    .allPrice_down{
        color: #f60;
        font-size: .65rem;
    }
    .allPrice_down_up{
        text-indent: 0.5rem;
    }
    .orderRemark{
        background-color: #fff;
        margin-top: .4rem;
        padding: 0 .7rem;
    }
    .orderRemark_up,.orderRemark_down{
        display: flex;
        justify-content: space-between;
        line-height: 2rem;
    }
    .orderRemark_up_left{
        font-size: .7rem;
        color: #666;
        font-family: Helvetica Neue,Tahoma,Arial,sans-serif;
    }
    .orderRemark_up_right{
        font-size: .6rem;
        color: #aaa;
        width: 10rem;
        display: inline-block;
        text-align: right;
        vertical-align: middle;
    }
    .orderRemark_down_left{
        font-size: .6rem;
        color: #666;
        line-height: 2rem;
    }
    .orderRemark_down_right{
        font-size: .6rem;
        color: #aaa;
        line-height: 2rem;
        position: relative;
    }
    .orderRemark_icon{
        font-size: .7rem;
        vertical-align: text-top;
    }
    .confirm_Pay{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        line-height: 2rem;
        font-size: .75rem;
        color: #fff;
        background-color: #3c3c3c;
        flex: 5;
        padding-left: .7rem;
    }
    .confirm_Pay span{
        display: inline-block;
    }
    .confirm_Pay_left{

    }
    .confirm_Pay_right{
        flex: 2;
        background-color: #56d176;
        text-align: center;
        height: 100%;
        width: 100%;
        text-align: center;
    }
    .choosePayMade{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0,0,0,.3);
        z-index: 203;
    }
    .cover{
        min-height: 10rem;
        background-color: #fff;
        position: fixed;
        bottom: 0;
        width: 100%;
        z-index: 204;
    }
    .choosePayMade_head{
        background-color: #fafafa;
        font-size: .7rem;
        color: #333;
        text-align: center;
        line-height: 2rem;
    }
    .choosePayMade_1{
        display: flex;
        justify-content: space-between;
        padding: 0 .7rem;
        line-height: 2.5rem;
        align-items: center;
        font-size: .7rem;
        color: #ccc;
    }
    .choosePayMade_2{
        display: flex;
        justify-content: space-between;
        padding: 0 .7rem;
        line-height: 2.5rem;
        align-items: center;
        color: #333;
        font-size: .7rem
    }
    .choosePayMade_icon{
        font-size: 1rem;
    }
    .addressUser_up{
        display: flex;
        -ms-flex-align: center;
        align-items: center;
    }
    .dd{
        padding-left: .2rem;
        display: inline-block;
        line-height: 0.8rem;
    }

    .sp1{
        font-size: .8rem;
        font-weight: 700;
    }
    .sp4{
        font-size: .5rem;
        color: #fff;
        border-radius: .15rem;
        background-color: #ff5722;
        height: .6rem;
        line-height: .6rem;
        padding: 0 .2rem;
        margin-right: .3rem;
    }
    .sp5{
        font-size: .6rem;
        color: #777;
    }
</style>
