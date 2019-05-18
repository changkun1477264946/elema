<template>
    <div class="benefit">
        <zhead>
            <div slot="logo">
                <!--<router-link :to="{path:'/profile'}">-->
                <Icon type="ios-arrow-back"  color="white" size="35" @click="profile"/>
                <!--</router-link>-->
            </div>
            <div slot="title" class="benefit_my">我的优惠</div>
        </zhead>
        <div class="benefit_page">
            <div class="benefit_money">
                <p @click="hbclick" :class="{hbtype:typehb}">红包</p>
                <p @click="djqclick" :class="{djqtype:typedjq}">商家代金卷</p>
            </div>
            <div class="hb" v-if="showhb" >
                <div class="benefit_des">
                    <p>有<span>{{this.allInfor.length}}</span>个红包即将到期</p>
                    <div class="des">
                        <img src="../../images/description.png" alt="" class="benefit_img">
                        <span>红包说明</span>
                    </div>

                </div>
                <div class="benefit_border">
                    <div class="benefit_paper " v-for="(data,index) in allInfor">
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
                                {{data.description_map.validity_delta}}
                            </div>

                        </div>
                        <p class="benefit_type" v-if="data.limit_map">
                            {{data.limit_map.restaurant_flavor_ids}}
                        </p>
                    </div>
                </div>


                <p class="benefit_history">
                    <span @click="hbhistory">查看历史红包</span>
                    <Icon type="ios-arrow-forward" />
                </p>
                <div class="benefit_footer">
                    <span @click="exchange">兑换红包</span>
                    <span @click="commend">推荐有奖</span>
                </div>
            </div>
            <div class="djq" v-if="showdjq">
                <div class="djq_des">
                    <img src="../../images/description.png" alt="">
                    <span>商家代金券说明</span>
                </div>
                <div class="djq_no">
                    <img src="../../images/voucher.png" alt="">
                    <p class="no">无法使用代金券</p>
                    <p class="nodown">非客户端或客户端版本过低</p>
                    <router-link :to="{}">
                        下载或升级客户端
                    </router-link>
                </div>
            </div>

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
    import Vue from 'vue'
    export default {
        name: "benefit",
        data(){
            return{
                showhb:true,
                showdjq:false,
                typehb:true,
                typedjq:false,
                allInfor:{},

                // showbenefit:true,
            }
        },
        mounted(){
            if(this.$store.state.userInfo){
                Vue.axios.get('https://elm.cangdu.org/promotion/v2/users/'+this.$store.state.userInfo.user_id+'/hongbaos?limit=20&offset=0').then((response)=>{
                    this.allInfor=response.data;
                    console.log(this.allInfor);
                }).catch((error)=>{
                    console.log(error,'请求错误')
                })
            }
        },
        methods:{
            hbclick(){
                this.showhb=true;
                this.showdjq=false;
                this.typehb=true;
                this.typedjq=false
            },
            djqclick(){
                this.showhb=false;
                this.showdjq=true;
                this.typehb=false;
                this.typedjq=true
            },
            exchange(){

                this.$router.push({path:'/benefit/exchange'})
            },
            // exchange1(){
            //     this.showbenefit=true;
            //     this.$router.push({path:'/benefit'})
            // },
            profile(){
                this.$router.push({path:'/profile'})
            },
            hbhistory(){
                this.$router.push({path:'/benefit/hbhistory'})
            },
            commend(){
                this.$router.push({path:'/benefit/commend'})
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
    .benefit_my{
        font-weight: 600;
    }
    .benefit_page{
        width: 100%;
        margin-top: 2.3rem;
    }
    .benefit_money{
        width: 100%;
        height: 2rem;
        background: white;
        display: flex;
        justify-content: space-around;
        text-align: center;
        font-size: 0.7rem;
        line-height: 1.5rem;
    }
    /*.benefit_money p:nth-child(1){*/
    /*color: dodgerblue;*/
    /*border-bottom: 2px solid  dodgerblue;*/
    /*}*/
    .djqtype{
        color: dodgerblue;
        border-bottom: 0.1rem solid  dodgerblue;
    }
    .hbtype{
        color: dodgerblue;
        border-bottom: 0.1rem solid  dodgerblue;
    }
    .benefit_des{
        width: 15rem;
        height: 2rem;
        margin-left: 0.5rem;
        margin-top: 0.75rem;
        display: flex;
        justify-content: space-between;
    }
    .benefit_des p{
        font-size: 0.6rem;
        color: #666;
    }
    .benefit_des p span{
        color: #ff5340;
    }
    .benefit_des .des {
        margin-top: -0.35rem;
    }
    .benefit_des .des img{
        width: 0.7rem;
        height: 0.7rem;
    }
    .benefit_des .des span{
        font-size: 0.6rem;
        color: dodgerblue;
    }
    .benefit_border{
        margin-top: -1rem;
    }
    .benefit_paper{
        width: 15rem;
        height: 4.5rem;
        background: white;
        margin-left: 0.5rem;
        /*margin-top: 10px;*/
        border-radius: 0.25rem;
        margin-top: 0.5rem;
    }
    .paper_k{
        width: 15rem;
        height:0.5rem;
        border-radius: 0.25rem 0.25rem 0 0;
        background: url("../../images/hongbao.png") repeat-x;
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
        color: #ff5340;
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
        color: #ff5430;
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
    .benefit_history{
        margin-top: 3.5rem;
        text-align: center;
        font-size: 0.5rem;
        color: #999;
    }
    .benefit_footer{
        width: 100%;
        height: 2.3rem;
        background: white;
        position: fixed;
        left: 0;
        bottom: 0;
        display: flex;
        justify-content: space-around;
        line-height: 2.5rem;
        font-size: 0.8rem;

    }
    .benefit_footer span:nth-child(1){
        padding-right: 3rem;
        border-right: 0.05rem solid #f5f5f5;

    }
    .djq_des{
        text-align: right;
        font-size: 0.5rem;
        margin-top: 0.75rem;
        margin-right: 0.5rem;
    }
    .djq_des img{
        width: 0.7rem;
        height: 0.7rem;
    }
    .djq_des span{
        color: dodgerblue;
    }
    .djq_no{
        text-align: center;
        margin-top: 5rem;
    }
    .djq_no img{
        width: 7rem;
        height: 3.95rem;
    }
    .djq_no .no{
        font-size: 0.7rem;
        color: #666;
        margin-top: 1rem;
    }
    .djq_no .nodown{
        font-size: 0.6rem;
        color: #a0a0a0;
        margin-top: 0.5rem;
    }
    .djq_no a{
        background: #56d176;;
        width: 7.15rem;
        height: 2.5rem;
        padding:0.35rem;
        text-align: center;
        font-size: 0.7rem;
        color:white;
        border-radius: 0.25rem;
    }
    .router-slid-enter-active, .router-slid-leave-active {
        transition: all .4s;
    }
    .router-slid-enter, .router-slid-leave-active {
        transform: translate3d(2rem, 0, 0);
        opacity: 0;
    }
</style>
