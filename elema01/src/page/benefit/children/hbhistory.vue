<template>
    <div class="hbhistory">
        <zhead>
            <div slot="logo">
                <router-link :to="{path:'/benefit'}">
                    <Icon type="ios-arrow-back"  color="white" size="35" />
                </router-link>
            </div>
            <div slot="title" class="hbhistory_my">历史红包</div>
        </zhead>
        <div class="hbhistory_content">
            <div class="benefit_paper " v-for="(data,i) in allhistory">
                <div class="paper_k"></div>
                <div class="paper_des">
                    <div class="des_left">
                        <p><Icon type="logo-yen" /><span>{{String(data.amount).split('.')[0]}}</span>.{{String(data.amount).split('.')[1]||0}}</p>
                        <p>{{data.description_map.sum_condition}}</p>
                    </div>
                    <div class="des_line"></div>
                    <div class="des_middle">
                        <p>{{data.name}}</p>
                        <p>{{data.description_map.validity_periods}}</p>
                        <p>{{data.description_map.phone}}</p>
                    </div>
                    <div class="des_right">
                        <img src="../../../images/guoqi.png" alt="">
                    </div>
                </div>
                <p class="benefit_type" v-if="data.limit_map">

                    {{data.limit_map.restaurant_flavor_ids}}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import zhead from '../../../components/header/head'
    import Vue from 'vue'
    export default {
        name: "hbhistory",
        data(){
            return{
                allhistory:{}
            }

        },
        mounted(){
            if(this.$store.state.userInfo){
                Vue.axios.get('https://elm.cangdu.org/promotion/v2/users/'+this.$store.state.userInfo.user_id+'/expired_hongbaos?limit=20&offset=0').then((response)=>{
                    this.allhistory=response.data;
                    console.log(this.allhistory);
                }).catch((error)=>{
                    console.log(error,'请求错误')
                })
            }
        },
        components:{
            zhead
        }
    }
</script>

<style scoped>
    .hbhistory{
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
    .hbhistory_my{
        font-weight: 600;
    }
    .hbhistory_content{
        margin-top: 3rem;
    }

    .benefit_paper{
        width: 15rem;
        height: 4.5rem;
        background: white;
        margin-left: 0.5rem;
        /*margin-top: 10px;*/
        border-radius: 0.25rem;
        margin-top: 2.3rem;
    }
    .paper_k{
        width: 15rem;
        height:0.5rem;
        border-radius: 0.25rem 0.25rem 0 0;
        background: url("../../../images/expired.png") repeat-x;
        /*background-size: cover;*/
        background-position: center;
    }
    .paper_des{
        width: 15rem;
        height: 4.5rem;
        margin-top: 0.6rem;
        display: flex;
        justify-content: space-around;
    }
    .des_line{
        width: 0.05rem;
        height: 3rem;
        background: gainsboro;

    }
    .des_left{
        padding-top: -1.5rem;
    }
    .des_left p{
        font-size: 0.5rem;
        margin-left: 0.5rem;
        color: #999;
    }
    .des_left p:nth-child(1){
        color:#999;
        font-weight: 500;
    }
    .des_left p:nth-child(1) span{
        font-size: 2rem;
    }
    .des_left p:nth-child(2){
        margin-top: -0.75rem;
    }

    .des_middle p{
        font-size: 0.5rem;
        color: #999;
    }
    .des_middle p:nth-child(1){
        font-size: 0.7rem;
        color: black;
    }
    .des_middle p:nth-child(2){
        margin-top: -0.5rem;
    }
    .des_middle p:nth-child(3){
        margin-top: -0.5rem;
    }
    .des_right {
        margin-top: -10px;
    }
    .benefit_type{
        width: 15rem;
        height: 2.25rem;
        border-radius: 0 0 0.25rem 0.25rem;
        background: #ededed;
        font-size: 0.5rem;
        color: #999;
        /*margin-left: 0px;*/
        padding:0.5rem;
        margin-top: -1.2rem;
    }
</style>
