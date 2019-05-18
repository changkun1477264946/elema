<template>
    <div class="points">
        <zhead>
            <div slot="logo">
                <router-link :to="{path:'/profile'}">
                    <Icon type="ios-arrow-back"  color="white" size="35"/>
                </router-link>
            </div>
            <div slot="title" class="proflie_my">我的积分</div>
        </zhead>
        <section class="balance_content">
            <section class="content" >
                <header class="content_header">
                    <span class="content_title">当前积分</span>
                    <span class="content_description">
                        <img src="../../images/description.png" alt="" class="description_img">
                            <router-link :to="{}">积分说明</router-link>
                    </span>
                </header>
                <p class="content_number">
                    <span>0</span>
                    <span>分</span>
                </p>
                <div class="content_btn">
                    积分兑换商品
                </div>
            </section>
        </section>
        <p class="deal_detail">最近30天积分记录</p>
        <div class="no_log">
            <img src="../../images/no-log.png" class="no_img">
            <p>最近30天无积分记录</p>
            <p>快去下单赚取大量积分吧</p>
        </div>
    </div>
</template>

<script>
    import zhead from '../../components/header/head'
    export default {
        name: "points",
        components:{
            zhead
        }
    }
</script>

<style scoped>
    .points{
        width: 100%;
        height: 100%;
        position: absolute;
        left:0;
        top:0;
        right: 0;
        bottom: 0;
        z-index: 1000;
        background:#f5f5f5;
    }
    .proflie_my{
        font-weight: 600;
    }
    .balance_content{
        width: 100%;
        height: 8.55rem;
        background:#3190e8;
        margin-top: 2.2rem;
    }
    .content{
        width:15rem;
        height: 7.85rem;
        background: white;
        margin: 0 auto;
        border-radius: 0.35rem;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }
    .content_header{
        padding-top: 0.5rem;
        font-size: 0.7rem;
        color: #666;
        display: flex;
        justify-content: space-between;
    }
    .description_img{
        width: 0.7rem;
        height: 0.7rem;
    }
    .content_number span:nth-child(1){
        font-size: 2rem;
        font-weight: 400;
    }
    .content_btn{
        width: 14rem;
        height: 2.3rem;
        background: #fe6d47;
        text-align: center;
        line-height: 2.25rem;
        border-radius: 0.2rem;
        color: white;

    }
    .deal_detail{
        font-size: 0.7rem;
        color: #999;
        margin-left: 0.5rem;
        margin-top: 0.5rem;
    }
    .no_log{
        text-align: center;
        margin: 0 auto;
        font-size: 0.8rem;
        color: #666;
        margin-top: 2rem;
    }
    .no_img{
        width:9.35rem;
        height: 5.85rem;
    }
    .no_log p{
        margin-top: 1rem;
        font-size: 0.7rem;
    }
    .no_log p:nth-child(3){
        font-size: 0.4rem;
        margin-top: -0.2rem;
        color: #999;
    }
</style>
