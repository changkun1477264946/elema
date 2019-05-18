<template>
    <div class="invoice">
        <zhead>
            <div slot="logo">
                <router-link :to="{path:'/vipcard'}">
                    <Icon type="ios-arrow-back"  color="white" size="35"/>
                </router-link>
            </div>
            <div slot="title" class="vipcard_my">购买记录</div>
        </zhead>
        <div class="invoice_content">
            <img src="../../../images/no-log.png" alt="">
            <p>没有购买记录</p>
        </div>
    </div>
</template>

<script>
    import zhead from '../../../components/header/head'
    export default {
        name: "invoiceRecord",
        components:{
            zhead
        }
    }
</script>

<style scoped>
    .invoice{
        width: 100%;
        height: 100%;
        background: white;
        position: absolute;
        left:0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 1000;
    }
    .vipcard_my{
        font-weight: 600;
    }
    .invoice_content{
        text-align: center;
        margin-top: 2.5rem;
    }
    .invoice_content img{
        margin-top: 5rem;
        width: 9.35rem;
        height: 5.85rem;
    }
    .invoice_content p{
        margin-top:1rem;
        font-size: 0.7rem;
        color: #999;
    }
</style>
