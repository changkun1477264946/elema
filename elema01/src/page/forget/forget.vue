<template>
    <div class="forget_page">
        <zhead>
            <div slot="logo">
                <router-link :to="{}">
                    <Icon type="ios-arrow-back"  color="white" size="35" @click="$router.go(-1)"/>
                </router-link>
            </div>
            <div slot="title"  class="forget_titile">重置密码</div>
        </zhead>
        <section class="forget_container">
            <form class="forget_form">
                <input type="text" placeholder="账号" v-model="userName">
                <input type="text" placeholder="旧密码" v-model="oldPassword">
                <input type="text" placeholder="请输入新密码" v-model="newPassword">
                <input type="text" placeholder="请输入密码" v-model="nextPassword">
                <input type="text" placeholder="验证码" v-model="cade">
                <div class="cade">
                    <span class="cade_img">
                        <img :src="allCade" alt="">
                    </span>
                    <span class="cade_des"  @click="codeclick">
                        <p>看不清</p>
                        <p>换一张</p>
                    </span>
                </div>
            </form>
            <div class="forget_update" @click="updateClick">确认修改</div>
            <div class="login_warn" v-if="showWarn">
                <div class="warn_top">
                    <p class="warn_tb"><Icon type="ios-alert-outline" size="90" color="#f8cb86"/></p>
                    <p class="warn_prompt">{{showpropt}}</p>
                </div>
                <div class="warn_bottom" @click="warnclick">确认</div>
            </div>
        </section>
    </div>
</template>

<script>
    import zhead from '../../components/header/head'
    import Vue from 'vue'
    export default {
        name: "forget",
        data(){
            return{
                allCade:'',
                showWarn:false,
                showpropt:'',
                userName: null,
                oldPassword:null,
                newPassword:null,
                nextPassword:null,
                cade:null,
                allUser:{}
            }
        },
        components:{
            zhead
        },
        mounted(){
            Vue.axios.post('https://elm.cangdu.org/v1/captchas').then((response)=>{
                this.allCade=response.data.code;
            });
        },
        methods:{
            codeclick(){
                Vue.axios.post('https://elm.cangdu.org/v1/captchas').then((response)=>{
                    this.allCade=response.data.code;
                })
            },
            updateClick(){
                if(!this.userName){
                    this.showWarn=true;
                    this.showpropt='请输入正确的账号'
                }else if(!this.oldPassword){
                    this.showWarn=true;
                    this.showpropt='请输入旧密码'
                }else if(!this.newPassword){
                    this.showWarn=true;
                    this.showpropt='请输入新密码'
                }else if(!this.nextPassword){
                    this.showWarn=true;
                    this.showpropt='请确认密码'
                }else if(this.newPassword != this.nextPassword){
                    this.showWarn=true;
                    this.showpropt='两次输入的密码不一致'
                }else if(!this.cade){
                    this.showWarn=true;
                    this.showpropt='请输验证码'
                }else{
                    Vue.axios.post('https://elm.cangdu.org/v2/changepassword',{
                        'username':this.userName,
                        'oldpassWord':this.oldPassword,
                        'newpassword':this.newPassword,
                        'confirmpassword':this.nextPassword,
                        'captcha_code':this.cadenum
                    }).then((response)=>{
                        this.allUser=response.data;
                        console.log(this.allUser);
                    });
                    if(this.allUser.message){
                        this.showWarn=true;
                        this.showpropt=this.allUser.message;
                        return
                    }else{
                        this.showWarn=true;
                        this.showpropt='密码修改成功';
                    }
                }
            },
            warnclick(){
                this.showWarn=false
            }
        }
    }
</script>

<style scoped>
    .forget_page{
        display: block;
        width: 100%;
        height: 100%;
        background: #f5f5f5;
        overflow-y: hidden;
    }
    .forget_titile{
        font-weight: 600;
    }
    .forget_container{
        width: 18.75rem;
        height: 18.25rem;
        margin-top: 3rem;

    }
    .forget_form{
        width: 18.75rem;
        height: 13rem;
        background: white;
        margin-top: 2rem;
    }
    .forget_form input{
        width: 18.75rem;
        height: 2.65rem;
        border-bottom: 0.05rem solid #f5f5f5;
        padding-left: 0.5rem;
        font-size: 0.7rem;
        outline: none;
    }
    .cade{
        width: 6.65rem;
        height: 1.75rem;
        position: absolute;
        right: 1rem;
        top: 14rem;
    }
    .cade_img{
        width: 4.25rem;
        height: 1.75rem;
        position: absolute;
    }
    .cade_img img{
        width: 4.25rem;
        height:1.75rem;
    }
    .cade_des{
        width: 2rem;
        height: 1.75rem;
        position: absolute;
        right: 0;
    }
    .cade_des p{
        font-size:0.6rem;
    }
    .cade_des p:nth-child(1){
        color: #666;;
    }
    .cade_des p:nth-child(2){
        color: #3b95e9;
        margin-top: -0.25rem;
    }
    .forget_update{
        width: 15.55rem;
        height: 2.2rem;
        background: #4cd964;
        color: white;
        text-align: center;
        font-size: 0.8rem;
        line-height: 2.15rem;
        border-radius: 0.15rem;
        margin-left: 0.2rem;
        margin-top: 1rem;
    }
    .login_warn{
        width: 14.05rem;
        height: 9.2rem;
        background:#4cd964 ;
        position: absolute;
        left: 1rem;
        top: 10.5rem;
        border-radius: 0.25rem;
        animation: tipMove .4s;
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
    @keyframes tipMove{
        0%   { transform: scale(1) }
        35%  { transform: scale(.8) }
        70%  { transform: scale(1.1) }
        100% { transform: scale(1) }
    }
</style>
