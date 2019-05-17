<template>
    <div class="container11">
        <!--头部-->
        <zhead>
            <div  slot="logo" class="logo" @click="$router.back(-1)">
                <Icon type="ios-arrow-back" />
            </div>
            <div slot="title" class="title">选择发票抬头</div>
        </zhead>
        <div class="body">
            <span class="span1">需要开发票</span>
            <span @click="icon1 = '需要开发票'">
                <Icon type="ios-checkmark-circle" :color="icon1==='需要开发票' ? '#4cd964':'#aaa'"/>
            </span>
        </div>
        <div class="body body1">
            <span class="span1">不需要开发票</span>
            <span @click="icon1 = '不需要开发票'">
                <Icon type="ios-checkmark-circle" :color="icon1==='不需要开发票' ? '#4cd964':'#aaa'"/>
            </span>
        </div>
        <button class="submitBtn" @click="submitBtn">确定</button>
    </div>
</template>

<script>
    import Zhead from "../../components/header/head";
    export default {
        name: "orderBill",
        components: {Zhead},
        data(){
          return {
              icon1:'不需要开发票',
          }
        },
        methods:{
            submitBtn(){
                this.$store.commit('byInputText',this.icon1);
                this.$router.push({path:'/order'})
            }
        }
    }
</script>

<style scoped>
    .container11{
        position: fixed;
        top: 2.3rem;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: #f5f5f5;
        z-index: 111;
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
    .body{
        display: flex;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -ms-flex-align: center;
        align-items: center;
        background-color: #fff;
        line-height: 2.5rem;
        margin-top: .5rem;
        padding: 0 .7rem;
        /*border-radius: 0.3rem;*/
    }
    .span1{
        font-size: .75rem;
        color: #333;
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
    .body1{
        border-top: 0.025rem solid #ccc;
        margin-top: 0rem;
    }
</style>
