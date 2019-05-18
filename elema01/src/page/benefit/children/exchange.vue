<template>
    <div class="exchange">
        <zhead>
            <div slot="logo">
                <router-link :to="{path:'/benefit'}">
                    <Icon type="ios-arrow-back"  color="white" size="35" />
                </router-link>

            </div>
            <div slot="title" class="exchange_my">兑换红包</div>
        </zhead>
        <div class="exchange_page">
            <input type="text" placeholder="请输入兑换码" class="cade_input" v-model="inputcade" @input="cadekey">
            <div class="cade">
                <input type="text" placeholder="验证码" @input="cadekey" v-model="codeNumber">
                <div class="cade1">
                    <span class="cade_img">
                        <img :src="allCade" alt="">
                    </span>
                    <span class="cade_des" @click="codeclick">
                        <p>看不清</p>
                        <p>换一张</p>
                    </span>
                </div>
            </div>
            <div class="exchange_btn" :class="{btn:exchange}" @click="exchangeclick">兑换</div>
        </div>
        <div class="login_warn" v-if="showWarn">
            <div class="warn_top">
                <p class="warn_tb"><Icon type="ios-alert-outline" size="90" color="#f8cb86"/></p>
                <p class="warn_prompt">{{prot}}</p>
            </div>
            <div class="warn_bottom" @click="warnclick">确认</div>
        </div>
    </div>
</template>

<script>
    import zhead from '../../../components/header/head'
    import Vue from 'vue'
    export default {
        name: "exchange",
        data(){
            return{
                allCade:'',
                showWarn:false,
                exchange:false,
                inputcade:'',
                codeNumber:'',
                allexchange:'',
                prot:''
            }
        },
        created(){
            Vue.axios.post('https://elm.cangdu.org/v1/captchas').then((response)=>{
                this.allCade=response.data.code;
            });
            if(this.$store.state.userInfo){
                Vue.axios.post(' https://elm.cangdu.org/v1/users/:user_id/hongbao/exchange').then((response)=>{
                    this.allexchange=response.data;
                    console.log(this.allexchange.message)
                });
            }

        },
        // computed:{
        //     status(){
        //         if(/^[0-9]+$/.test(this.inputcade)){
        //             this.exchange=true
        //         }
        //     }
        // },
        // watch:{
        //     exchange:function () {
        //         this.exchange;
        //     }
        // },
        methods:{
            codeclick(){
                Vue.axios.post('https://elm.cangdu.org/v1/captchas').then((response)=>{
                    this.allCade=response.data.code;
                })
            },
            cadekey(){
                // if( (/^\d{4}$/.test(this.codeNumber)) ){
                //     this.exchange=true
                // }else{
                //     this.exchange=false
                // }
                if((/^[0-9]+$/.test(this.inputcade)) && (/^\d{4}$/.test(this.codeNumber))){
                    this.exchange=true
                }else{
                    this.exchange=false
                }
            },
            exchangeclick(){
                if(this.allexchange.message){
                    this.showWarn=true;
                    this.prot=this.allexchange.message
                }

            },
            warnclick(){
                this.showWarn=false
                // if(/^[0-9]+$/.test(this.inputcade)){
                //
                // }
            },

        },
        components:{
            zhead
        }
    }
</script>

<style scoped>
    input{
        outline: none;
    }
    .exchange{
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
    .exchange_my{
        font-weight: 600;
    }
    .exchange_page{
        margin-top: 3rem;
    }
    .cade_input{
        width: 15rem;
        height: 2.45rem;
        border-radius: 0.25rem;
        margin-left: 0.5rem;
        font-size: 0.6rem;
        padding: 0.5rem;
    }
    .cade{
        width: 15rem;
        height: 2.55rem;
        display: flex;
        justify-content: space-between;
        margin-top: 0.5rem;
        margin-left: 0.5rem;

    }
    .cade input{
        border-radius: 0.25rem;
        width: 8.5rem;
        height:2.5rem;
        font-size: 0.7rem;
        padding: 0.5rem;
    }
    .cade .cade1{
        width: 6rem;
        height:2.55rem;
        background: white;
        border-radius: 0.25rem;
        display: flex;
        justify-content: space-between;
    }
    .cade_img{
        padding: 0.5rem 0.25rem;
    }
    .cade_img img{
        width: 3rem;
        height: 1.75rem;
    }
    .cade_des{
        font-size: 0.6rem;
        margin-right: 0.2rem;
        padding-top: 0.5rem;
    }
    .cade_des p:nth-child(2){
        margin-top: -0.45rem;
        color: #3b95e9;
    }
    .exchange_btn{
        width: 15rem;
        height: 2.1rem;
        background: #ccc;
        border-radius: 0.25rem;
        text-align: center;
        color: white;
        margin-left: 0.5rem;
        margin-top: 0.75rem;
        line-height: 2.25rem;
        font-size: 0.7rem;
    }
    .login_warn{
        width:14.05rem ;
        height: 9.2rem;
        background:#4cd964 ;
        position: absolute;
        left: 1.05rem;
        top: 8.3rem;
        border-radius: 0.25rem;

    }
    .warn_top{
        width: 14.05rem;
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
    .btn{
        width: 17.1rem;
        height: 2.1rem;
        background: #4cd964 ;
        border-radius: 0.25rem;
        text-align: center;
        color: white;
        margin-left: 0.5rem;
        margin-top: 0.75rem;
        line-height: 1.5rem;
        font-size: 0.7rem;
    }
</style>
