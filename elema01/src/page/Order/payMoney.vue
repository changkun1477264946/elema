<template>
    <div class="container1">
        <zhead>
            <div  slot="logo" class="logo" @click="$router.back(-1)">
                <Icon type="ios-arrow-back" />
            </div>
            <div slot="title" class="title">在线支付</div>
        </zhead>
        <div class="time">
            <Icon type="ios-alert-outline" class="countDown icon1" />
            <div class="countDown time2">支付剩余时间</div>
            <div class="countDown time3">00:{{m}}:{{s}}</div>
        </div>
        <p class="p1">选择支付方式</p>
        <div class="type">
            <div class="choosePayMade" @click="choosePayMethon(1)">
                <span class="span1">
                    <img src="../../images/weixin.png" alt="">
                    微信
                </span>
                <Icon type="ios-checkmark-circle" :color="(icon1===1 ? '#4cdf64': '#bbb')" class="choosePayMade_icon" />
            </div>
            <div class="choosePayMade" @click="choosePayMethon(2)">
               <span class="span1">
                   <img src="../../images/zhifubao.png" alt="">
                   支付宝
               </span>
                <Icon type="ios-checkmark-circle" :color="icon1===2 ? '#4cdf64':'#bbb'" class="choosePayMade_icon" />
            </div>
            <div v-if="show1">
                <warn-frame>
                    <div slot="content">当前环境无法支付,请打开官方APP<br>进行付款</div>
                    <div slot="ensure" @click="submitBtn1">确认</div>
                </warn-frame>
            </div>
            <button class="submitBtn" @click="submitBtn">确定</button>
        </div>

    </div>
</template>

<script>
    import Zhead from "../../components/header/head";
    import WarnFrame from "../../components/common/warnFrame";
    export default {
        name: "payMoney",
        components: {WarnFrame, Zhead},
        data(){
            return{
                icon1:1,
                show1:false,
                m:15,
                s:'0'+0,
            }
        },
        mounted(){
            var end = new Date().getTime()+1000*60*15;
            var time1= setInterval(()=>{
                //获取当前时间
                var date = new Date();
                var mm =15;
                var ss =0;
                var now = date.getTime();
                var leftTime = end - now;
                if (leftTime >= 0) {
                    mm = Math.floor(leftTime / 1000 / 60 );
                    if(mm<10){
                        this.m ='0'+ mm;
                    }else {
                        this.m = mm;
                    }
                    ss = Math.floor(leftTime / 1000 % 60);
                    if(ss<10){
                        this.s ='0'+ ss;
                    }else {
                        this.s = ss;
                    }
                }else {
                   clearInterval(time1);
                }
            }, 1000);

        },
        methods:{
            choosePayMethon(i){
                this.icon1=i;
            },
            submitBtn(){
                this.show1 = true
            },
            submitBtn1(){
                this.show1 = false
            }
        }

    }
</script>

<style scoped>
    .container1{
        padding-top: 2.3rem;
        background-color: #fff;
        height: 100%;
        /*overflow: hidden;*/
    }
    p{
        margin: 0;
        padding: 0;
    }
    .logo{
        text-align: left;
        font-size: 1.3rem;
        line-height: 2rem;
        padding-left: 0.2rem;
    }
    .title{
        font-size: .8rem;
        color: #fff;
        text-align: center;
        font-weight: 700;
    }
    .submitBtn{
        display: block;
        width: 90%;
        background-color: #4cd964;
        font-size: .7rem;
        color: #fff;
        text-align: center;
        margin: 0.5rem auto;
        line-height: 1.8rem;
        border-radius: .2rem;
    }
    .time{
        background-color: #fff;
        padding-bottom: 0.3rem;
    }
    .countDown{
        padding: 0.2rem 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .icon1{
        font-size: 4rem;
        color:  #f8cb86;
    }
    .time2{
        font-size: 0.7rem;
    }
    .time3{
        font-size: 2rem;
    }
    .p1{
        padding: 0.6rem;
        font-size: 0.75rem;
        background-color: rgba(169, 169, 169, 0.2);;
    }


    .choosePayMade{
        display: flex;
        justify-content: space-between;
        padding: 0.3rem 1rem;
        line-height: 2.5rem;
        align-items: center;
        color: #333;
        font-size: .7rem;
    }
    .choosePayMade_icon{
        font-size: 1.2rem;
    }

    .choosePayMade img{
        height: 2rem;
        vertical-align: middle;
        margin-right: 0.5rem;
    }
</style>
