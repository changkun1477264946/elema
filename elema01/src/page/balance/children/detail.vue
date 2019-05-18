<template>
    <div class="detail">
        <div class="detail_page">
            <zhead>
                <div slot="logo">
                    <router-link :to="{}">
                        <Icon type="ios-arrow-back"  color="white" size="35" @click="$router.go(-1)"/>
                    </router-link>
                </div>
                <div slot="title"  class="login_titile">余额问题</div>
            </zhead>
            <div class="detail_content">
                <h3>Q1: 使用余额的条件</h3>
                <p>为了保护账户安全，使用余额前必须先绑定手机号。</p>
                <h3>Q2: 余额可以怎么用？</h3>
                <p>余额可以在饿了么平台上提现，当余额大于等于待支付金额时可以在支持在线支付的商家中进行消费。提现功能将于2016年12月25日00:00全面开放。</p>
                <h3>Q3:我要如何提现？</h3>
                <p>为了保护账户和资金安全，您在提现前需要输入真实姓名和用该姓名开通的银行卡号、选择开户行，并验证已绑定饿了么账号的手机号。每日只能提现1次，每次限额50元。若提现金额超过50元，点击【提现】时系统会提示您已超额，请您修改提现金额。</p>
                <h3>Q4:为什么会提现失败？</h3>
                <p>可能原因有：您的姓名、开户行、银行卡号等信息不匹配；您当日的提现次数和金额超过限制；您的账户存在异常，被风控拦截。</p>
            </div>
        </div>


    </div>


</template>

<script>
    import zhead from '../../../components/header/head'
    import  Vue from 'vue'
    export default {
        name: "detail",
        data(){
            return{
                allDetail:[]
            }
        },
        components:{
            zhead
        },
        mounted(){
            Vue.axios.get('https://elm.cangdu.org/v3/profile/explain').then((res)=>{
                this.allDetail=res.data;
                console.log(this.allDetail);
                console.log(this.allDetail.balanceContent)
            }).catch((error)=>{
                console.log(error,'请求错误')
            })
        }
    }
</script>

<style scoped>
    .detail{
        overflow-x: hidden;
        position: absolute;
        left:0;
        top:0;
        right: 0;
        bottom: 0;
        z-index: 1000;
        background: white;
    }
    .login_titile{
        font-weight: 600;
    }
    .detail_content{
        padding-top: 2rem;
        margin-left: 0.5rem;

    }
    .detail_content h3{
        font-size: 0.7rem;
    }
    .detail_content p{
        font-size: 0.6rem;
        color: #666;
    }
</style>
