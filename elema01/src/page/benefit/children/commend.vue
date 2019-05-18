<template>
    <div class="commend">
        <zhead>
            <div slot="logo">
                <router-link :to="{path:'/benefit'}">
                    <Icon type="ios-arrow-back"  color="white" size="35"/>
                </router-link>
            </div>
            <div slot="title" class="vipcard_my">推荐有奖</div>
        </zhead>
        <div class="commend_content">
            <img src="../../../images/activity.png" alt="" class="activity_img">
            <div class="commend_type" @click="show">
                <div class="commend_wx">
                    <img src="../../../images/weixin.png" alt="">
                    <p>邀请微信好友</p>
                </div>
                <div class="commend_qq">
                    <img src="../../../images/qq.png" alt="">
                    <p>邀请QQ好友</p>
                </div>
                <div class="commend_mdm">
                    <img src="../../../images/fenxiang.png" alt="">
                    <p>面对面邀请</p>
                </div>
            </div>
            <div class="commend_rote">
                <div class="rote_sy">
                    <p>累计收益</p>
                    <p><span>0</span>元</p>
                </div>
                <div class="rote_success">
                    <p>成功邀请</p>
                    <p><span class="yq">0</span>人</p>
                </div>
            </div>
            <p class="definite">-收益明细-</p>
            <div class="yqhy">
                <img src="../../../images/qianbao.png" alt="" class="money">
                <p>还不赶紧去邀请好友</p>
            </div>

        </div>
        <div class="login_warn" v-if="showWarn">
            <div class="warn_top">
                <p class="warn_tb"><Icon type="ios-alert-outline" size="90" color="#f8cb86"/></p>
                <p class="warn_prompt">请在饿了么APP中打开</p>
            </div>
            <div class="warn_bottom" @click="warnclick">确认</div>
        </div>
    </div>
</template>

<script>
    import zhead from '../../../components/header/head'
    export default {
        name: "commend",
        data(){
            return{
                showWarn:false
            }
        },
        methods:{
            show(){
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
    .commend{
        width: 100%;
        height: 100%;
        background: #f5f5f5;
        position: absolute;
        left:0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 1000;
        overflow-y: hidden;
    }
    .vipcard_my{
        font-weight: 600;
    }
    .commend_content{
        width: 100%;
        margin-top: 2.3rem;
    }
    .activity_img{
        width: 100%;
        height: 7rem;
    }
    .commend_type{
        margin-top: 0.5rem;
        width: 100%;
        height: 6.35rem;
        background: white;
        display: flex;
        justify-content: space-around;
        text-align: center;
        padding-top: 1rem;
    }
    .commend_type img{
        width: 2.9rem;
        height: 2.9rem;
    }
    .commend_type p{
        font-size: 0.5rem;
        color: #333;
        margin-top: 0.5rem;
    }
    .commend_rote{
        display: flex;
        justify-content: space-around;
        margin-top: 1rem;
        text-align: center;
    }
    .commend_rote .rote_sy{
        border-right: 0.05rem solid #a9a9a9;
        padding-right: 4rem;
    }
    .commend_rote p{
        font-size: 0.6rem;
        color: #666;
    }
    .commend_rote p span{
        color: #ff5633;
        font-weight: 600;
        font-size: 0.7rem;
    }
    .commend_rote p .yq{
        color: #666;
    }
    .definite{
        margin-top: 1rem;
        font-size: 0.5rem;
        color: #666;
        text-align: center;
    }
    .yqhy{
        text-align: center;
        margin-top: 1rem;
    }
    .money{
        width: 1.5rem;
        height: 1.85rem;
    }
    .yqhy p{
        font-size: 0.5rem;
        color: #666;
        margin-top: 0.5rem;
    }
    .login_warn{
        width: 13.05rem;
        height: 9.2rem;
        background:#4cd964 ;
        position: absolute;
        left: 1.5rem;
        top: 7rem;
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
</style>
