<template>
    <div class="service">
        <zhead>
            <div slot="logo">
                <router-link :to="{path:'/profile'}">
                    <Icon type="ios-arrow-back"  color="white" size="35" />
                </router-link>
            </div>
            <div slot="title" class="proflie_my">服务中心</div>
        </zhead>
        <div class="service_content">
            <div class="inter">
                <div class="service_inter1">
                    <Icon type="ios-color-filter" color="orange"size="30"/>
                    <p>在线客服</p>
                </div>
                <div class="service_inter1">
                    <Icon type="ios-call" color="green" size="30"/>
                    <p>在线客服</p>
                </div>
            </div>
            <p class="hot">热门问题</p>
            <ul>
                <li>
                    <p>超级会员权益说明</p>
                    <Icon type="ios-arrow-forward" color="#666" size="20"/>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import zhead from '../../components/header/head'
    import Vue from 'vue'
    export default {
        name: "service",
        data(){
            return{
                allService:{}
            }
        },
        mounted(){
            Vue.axios.get('https://elm.cangdu.org/v3/profile/explain').then((response)=>{
                this.allService=response.data
                console.log(this.allService);

            })
        },
        components:{
            zhead
        }
    }
</script>

<style scoped>
    .service{
        width: 100%;
        height: 100%;
        background: white;
    }
    .service_content{
        background: white;
        margin-top: 2.3rem;
    }
    .inter{
        width: 100%;
        height: 4.65rem;
        display: flex;
        justify-content: space-between;
        text-align: center;
        border: 0.05rem solid #f5f5f5;
    }
    .service_inter1{
        font-size: 0.6rem;
        text-align: center;
        width: 9.4rem;
        height: 4.65rem;
        padding: 1rem;
        color: #333;
        border-right:0.05rem solid #f5f5f5;
    }
    .hot{
        line-height: 3rem;
        padding-left: 1rem;
        font-size: 0.8rem;
        color: #333;
        border-bottom: 0.05rem solid #f5f5f5;
    }
    ul li{
        display: flex;
        justify-content: space-between;
        color: #666;
        font-size: 0.6rem;
        padding-left: 1rem;
        border-bottom: 0.05rem solid #f5f5f5;
    }
</style>
