<template>
    <div class="balance_page">
        <zhead>
            <div slot="logo">
                <router-link :to="{}">
                    <Icon type="ios-arrow-back"  color="white" size="35"/>
                </router-link>
            </div>
            <div slot="title" class="proflie_my">我的余额</div>
        </zhead>
        <section class="balance_content">
            <section class="content">
                <header class="content_header">
                    <span class="content_title">当前余额</span>
                    <span class="content_description">
                        <img src="../../images/description.png" alt="" class="description_img">
                        <router-link :to="{}">余额说明</router-link>
                    </span>
                </header>
                <p class="content_number">
                    <span>0.00</span>
                    <span>元</span>
                </p>
                <div class="content_btn">
                    提现
                </div>
            </section>
        </section>
        <p class="deal_detail">交易明细</p>
        <div class="no_log">
            <img src="../../images/no-log.png" class="no_img">
            <p>暂无明细记录</p>
        </div>
    </div>
</template>

<script>
    import zhead from "../../components/header/head"
    export default {
        name: "balance",
        components:{
            zhead
        }
    }
</script>

<style scoped>
    a{
        text-decoration: none;
    }
    .balance_page{
        width: 100%;
        height: 100%;
        background: #f5f5f5;
    }
    .proflie_my{
        font-weight: 600;
        color: white;
    }
    .balance_content{
        width: 100%;
        height: 171px;
        background:#3190e8;
        margin-top: 2.2rem;
    }
    .content{
        width:360px;
        height: 157px;
        background: white;
        margin: 0 auto;
        border-radius: 7px;
        padding-left: 10px;
        padding-right: 10px;
    }
    .content_header{
        padding-top: 10px;
        font-size: 14px;
        color: #666;
        display: flex;
        justify-content: space-between;
    }
    .description_img{
        width: 14px;
        height: 14px;
    }
    .content_number span:nth-child(1){
        font-size: 40px;
        font-weight: 400;
    }
    .content_btn{
        width: 342px;
        height: 46px;
        background: #ccc;
        text-align: center;
        line-height: 45px;
        border-radius: 4px;
        color: white;
    }
    .deal_detail{
        font-size: 14px;
        color: #999;
        margin-left: 10px;
        margin-top: 10px;
    }
    .no_log{
        text-align: center;
        margin: 0 auto;
        font-size: 16px;
        color: #666;
        margin-top: 40px;
    }
    .no_img{
        width:187px;
        height: 117px;
    }
    .no_log p{
        margin-top: 20px;
    }
</style>
