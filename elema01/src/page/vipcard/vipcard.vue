<template>
    <div class="vipcard">

        <zhead>
            <div slot="logo">
                <router-link :to="{path:'/profile'}">
                    <Icon type="ios-arrow-back"  color="white" size="35"  />
                </router-link>
            </div>
            <div slot="title" class="vipcard_my">会员中心</div>
        </zhead>
        <div class="vipcard_page">
            <div class="vipcard_content">
                为账户<span>{{this.$store.state.userInfo.username}}</span>购买会员
            </div>
            <div class="vipcard_equal">
                <div class="equal_header">
                    <p>会员特权</p>
                    <p><router-link :to="{}">会员说明<Icon type="ios-arrow-forward" size="20" color="#999"/></router-link></p>
                </div>
                <div class="equal_middle">
                    <div class="middle_img">
                        <img src="../../images/sheng.jpeg" alt="">
                    </div>
                    <div class="middle_right">
                        <p>减免配送费</p>
                        <p>每月减免30单，每日可减免3单，每单最高减4元</p>
                        <p>蜂鸟专送专享</p>
                    </div>
                </div>
                <div class="equal_middle">
                    <div class="middle_img">
                        <img src="../../images/jifen.jpeg" alt="">
                    </div>
                    <div class="middle_right">
                        <p>减免配送费</p>
                        <p>每月减免30单，每日可减免3单，每单最高减4元</p>
                        <p>蜂鸟专送专享</p>
                    </div>
                </div>
            </div>
            <div class="vipcard_money">
                <p>开通会员</p>
                <div class="money">
                    <span>1个月<Icon type="logo-yen" color="#f60"/><span class="money_q">20</span></span>
                    <p class="money_r">购买</p>
                </div>
            </div>
            <router-link :to="{path:'/vipcard/usecart'}" class="kh">
                <div class="vipcard_kh" >

                    <p>兑换会员</p>
                    <p>使用卡号卡密<Icon type="ios-arrow-forward" color="#999"/></p>


                </div>
            </router-link>
            <router-link :to="{path:'/vipcard/invoiceRecord'}" class="gm">
                <div class="vipcard_kh">
                    <p>购买记录</p>
                    <p>开发票<Icon type="ios-arrow-forward" /></p>
                </div>
            </router-link>

        </div>
        <div>
            <transition name="router-slid" model="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
    import zhead from '../../components/header/head'
    export default {
        name: "vipcard",
        methods:{
            // userCard(){
            //     this.$router.push({path:'/vipcard/usecart'}) ;
            // }
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
    .vipcard{
        overflow-y: hidden;
    }
    .vipcard_my{
        font-weight: 600;
    }
    .vipcard_page{
        width: 100%;
        margin-top: 3rem;
    }
    .vipcard_content{
        margin-left: 0.5rem;
        font-size: 0.6rem;
        color: #666;
    }
    .vipcard_content span{
        color: black;
        font-weight: 600;
    }
    .vipcard_equal{
        width: 100%;
        background: white;
        margin-top: 0.5rem;
    }
    .equal_header{
        margin-left: 1.5rem;
        padding-top: 0.5rem;
        font-size: 0.7rem;
        /*line-height: 45px;*/
        display: flex;
        justify-content: space-between;
        border-bottom: 0.05rem solid #f0edf0;
    }
    .equal_header p:nth-child(2) a{
        color: #a9a9a9;
        margin-right: 0.5rem;
        font-size: 0.6rem;
    }
    .equal_middle{
        margin-left: 1.5rem;
        display: flex;
        padding-top: 0.5rem;
        justify-content: space-between;
        border-bottom: 1px solid #f0edf0;
    }
    .middle_img img{
        width: 1.85rem;
        height: 2rem;

    }
    .middle_right{
        font-size: 0.6rem;
        margin-left: 1rem;
    }
    .middle_right p:nth-child(1){
        font-size: 0.7rem;
    }
    .middle_right p:nth-child(2){
        color:#a9a9a9 ;
        margin-top: -0.5rem;
    }
    .middle_right p:nth-child(3){
        color:#a9a9a9 ;
        margin-top: -0.5rem;
    }
    .vipcard_money{
        width: 100%;
        background: white;
        margin-top: 0.5rem;
    }
    .vipcard_money p{
        margin-left:1.5rem;
        border-bottom: 0.05rem solid #f0edf0;
        line-height: 2rem;
        font-size: 0.7rem;
    }
    .money{
        margin-left: 1.5rem;
        display: flex;
        line-height: 2rem;
        justify-content: space-between;
    }
    .money span{
        font-size: 0.8rem;

    }
    .money .money_q{
        color: #f60;
        font-weight: 700;
    }
    .money .money_r{
        border: 0.05rem solid #f60;
        color: #f60;
        line-height: 0.5rem;
        padding:0.5rem;
        font-size: 0.7rem;
        margin-right: 0.5rem;
        border-radius: 0.25rem;
    }
    .vipcard_kh{
        width: 100%;
        background: white;
        display: flex;
        justify-content: space-between;
        margin-top: 0.5rem;
    }
    .kh{
        color: black;
    }
    .gm{
        color: black;
    }
    .vipcard_kh p{
        margin-left: 1.5rem;
        font-size: 0.7rem;
        padding-top: 0.55rem;
    }
    .vipcard_kh p:nth-child(2){
        margin-right: 0.5rem;
        color: #a9a9a9;
    }
    .router-slid-enter-active, .router-slid-leave-active {
        transition: all .4s;
    }
    .router-slid-enter, .router-slid-leave-active {
        transform: translate3d(2rem, 0, 0);
        opacity: 0;
    }
</style>
