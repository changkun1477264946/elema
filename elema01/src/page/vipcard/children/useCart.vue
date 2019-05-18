<template>
    <div class="userCart">
        <zhead>
            <div slot="logo">
                <router-link :to="{path:'/vipcard'}">
                    <Icon type="ios-arrow-back"  color="white" size="35"/>
                </router-link>
            </div>
            <div slot="title" class="vipcard_my">兑换会员</div>
        </zhead>
        <div class="userCart_container">
            <div class="usercart_zh">
                成功兑换后将关联到当前账号：<span>{{$store.state.userInfo.username}}</span>
            </div>
            <div class="usecart_input">
                <input type="text" placeholder="请输入10位卡号" maxlength="10" v-model="inputkh" @input="dhclick">
                <input type="text" placeholder="请输入6位卡密" maxlength="6" v-model="inputkm" @input="dhclick">
            </div>
            <button  :disabled="disabled"  :class="{usercart_btn:btn}" @click="btnkh">兑换</button>
            <div class="usercart_ts">——温馨提示——</div>
            <div class="usercart_content">

                <p>新兑换的会员服务，权益以「会员说明」为准。</p>
                <p>月卡：30次减免配送费。</p>
                <p>季卡：90次减免配送费。</p>
                <p>年卡：360次减免配送费。</p>
                <p>＊仅限蜂鸟专送订单，每日最多减免3单，每单最高减免4元（一个月按31天计算）</p>
            </div>

        </div>
        <div class="login_warn" v-if="showWarn">
            <div class="warn_top">
                <p class="warn_tb"><Icon type="ios-alert-outline" size="90" color="#f8cb86"/></p>
                <p class="warn_prompt">无效的卡号</p>
            </div>
            <div class="warn_bottom" @click="warnclick">确认</div>
        </div>
    </div>
</template>

<script>
    import zhead from '../../../components/header/head'
    export default {
        name: "useCart",
        data(){
            return{
                disabled:true,
                inputkh:'',
                inputkm:'',
                btn:false,
                showWarn:false
                // kh:false
            }
        },
        methods:{
            dhclick(){
                console.log("aaa");
                if((/^\d{10}$/.test(this.inputkh)) && (/^\d{6}$/.test(this.inputkm))){
                    this.disabled=false;
                    this.btn=true
                }else{
                    this.disabled=true;
                    this.btn=false
                }
            },
            btnkh(){
                this.showWarn=true
            },
            warnclick(){
                this.showWarn=false
            }
        },
        components:{
            zhead
        }
    }
</script>

<style scoped>
    a{
        text-decoration: none;
    }
    input{
        outline: none;
    }
    .userCart{
        position: absolute;
        left:0;
        top:0;
        right: 0;
        bottom: 0;
        z-index: 1000;
        background:#f5f5f5;
    }
    .userCart_container{
        margin-top: 2.3rem;
    }
    .usercart_zh{
        font-size: 0.7rem;
        color: #666;
        line-height: 2.5rem;
        margin-left: 0.5rem;
    }
    .usercart_zh span{
        color: black;
        font-weight: 600;
        font-size: 0.8rem;
    }

    .usecart_input input{
        width: 100%;
        height: 2.3rem;
        font-size: 0.6rem;
        padding-left: 0.5rem;
    }
    .usecart_input input:nth-child(1){
        border-bottom: 0.05rem solid #f5f5f5;
    }
    .usercart_btn{

        background: #4cd964;

    }
    button{
        width: 15rem;
        height: 2rem;
        margin-top: 1rem;
        margin-left: 0.75rem;
        font-size: 0.7rem;
        text-align: center;
        line-height: 2rem;
        color: white;
        border-radius:0.25rem ;
    }
    .usercart_ts{
        margin: 1.5rem;
        text-align: center;
        font-size: 0.7rem;
        color: #aaa;
    }
    .usercart_content{
        margin-left: 3rem;
        font-size: 0.5rem;
        color: #aaa;
    }
    .login_warn{
        width: 13.05rem;
        height: 9.2rem;
        background:#4cd964 ;
        position: absolute;
        left: 1.2rem;
        top: 9rem;
        border-radius: 0.25rem;

    }
    .warn_top{
        width: 13.05rem;
        height: 7.1rem;
        background: white;
        text-align: center;
        padding-top:0.5rem;
        border-radius: 0.25rem 0.25rem 0 0/0.25rem 0.25rem 0 0;
    }
    .warn_prompt{
        font-size: 0.8rem;
        color: #333;
    }
    .warn_bottom{
        text-align: center;
        color: white;
        line-height: 2rem;
    }
    /*.kh{*/
    /*background: #4cd964;*/
    /*}*/
</style>
