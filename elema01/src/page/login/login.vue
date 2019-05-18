<template>
    <div class="login_page">
        <zhead>
            <div slot="logo">
                <router-link :to="{}">
                    <Icon type="ios-arrow-back"  color="white" size="35" @click="$router.go(-1)"/>
                </router-link>
            </div>
            <div slot="title"  class="login_titile">密码登录</div>
        </zhead>
        <section class="login_container">
            <form class="login_form">
                <input type="text" placeholder="账号" v-model="userName">
                <input type="password" placeholder="密码" v-if="!show" class="login_password" v-model="userPassword">
                <input type="text" placeholder="密码" v-else class="login_password" v-model="userPassword">
                <div class="password_btn" :class="{password_change:show}">
                    abc...
                    <section class="btn_an" @click="btnclick" :class="{change_tran:show}"></section>
                </div>
                <input type="text" placeholder="验证码" class="login_cade" v-model="cadenum">
                <div class="cade">
                    <span class="cade_img">
                        <img :src="allCade" alt="">
                    </span>
                    <span class="cade_des" @click="codeclick">
                        <p>看不清</p>
                        <p>换一张</p>
                    </span>
                </div>
            </form>
            <p class="login_tips">
                温馨提示：未注册过的账号，登录时将自动注册
            </p>
            <p class="login_tips">
                注册过的用户可凭账号密码登录
            </p>
            <div class="login_btn" @click="loginclick">登录</div>
            <div class="login_forget"><router-link :to="{path:'/forget'}">重置密码?</router-link></div>
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
        name: "login",
        data(){
            return{
                show:false,
                allCade:'',
                allUser:{},
                userName:null,
                userPassword:null,
                cadenum:null,
                showpropt:null,
                showWarn:false,

            }
        },
        methods:{
            btnclick(){
                this.show=!this.show
            },
            codeclick(){
                Vue.axios.post('https://elm.cangdu.org/v1/captchas').then((response)=>{
                    this.allCade=response.data.code;
                })
            },
            loginclick(){
                if(!this.userName){
                    this.showWarn=true;
                    this.showpropt='请输入手机号/邮箱/用户名';
                }else if(!this.userPassword){
                    this.showWarn=true;
                    this.showpropt='请输入密码';
                }else if(!this.cadenum){
                    this.showWarn=true;
                    this.showpropt='请输入验证码';
                }else  if(this.userName || this.userPassword || this.cadenum) {
                    Vue.axios.post('https://elm.cangdu.org/v2/login', {
                        'username': this.userName,
                        'password': this.userPassword,
                        'captcha_code': this.cadenum
                    }).then((response) => {
                        this.allUser = response.data;
                        if (this.allUser.message) {
                            this.showWarn = true;
                            this.showpropt = this.allUser.message;
                            return
                        } else {
                            this.$store.commit('byUserInfo1',this.userName);
                            this.$router.push({path: '/profile', query: {name: this.$store.state.userInfo.username}});
                            console.log(this.$store.state.userInfo.username);
                        }
                    });
                }
            },
            warnclick(){
                this.showWarn=false
            }
        },
        created(){
            Vue.axios.post('https://elm.cangdu.org/v1/captchas').then((response)=>{
                this.allCade=response.data.code;
            });
        },
        components:{
            zhead
        }
    }
</script>

<style scoped>
    .login_page{
        display: block;
        width: 100%;
        height: 100%;
        background: #f5f5f5;
        overflow-y: hidden;
    }
    .login_titile{
        font-weight: 600;
    }
    .login_container{
        margin-top: 2.3rem;
    }
    .login_form{
        width: 100%;
        height: 7.5rem;
        padding-top: 0.5rem;
    }
    .login_form input{
        width: 100%;
        height: 2.45rem;
        border-bottom: 0.05rem solid #f5f5f5;
        padding-left: 0.5rem;
        font-size: 0.8rem;
        outline: none;
    }
    .login_form .login_password{
        position: relative;
    }
    .password_btn{
        width: 2.5rem;
        height: 0.8rem;
        background: #ccc;
        position: absolute;
        right: 1rem;
        top: 6rem;
        border-radius: 1.5rem;
    }
    .btn_an{
        width: 1.45rem;
        height: 1.45rem;
        border-radius: 50%;
        background: #f5f5f5;
        position: absolute;
        top:-0.35rem;
        transition: all .3s;
    }
    .password_btn {
        font-size: 0.7rem;
        line-height: 0.8rem;
        text-align: center;
        color: white;
    }
    .login_form .login_cade{
        position: relative;
    }
    .cade{
        width: 6.65rem;
        height: 1.75rem;
        position: absolute;
        right: 1rem;
        top:8rem;
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
        color: #666;
    }
    .cade_des p:nth-child(2){
        color: #3b95e9;
        margin-top: -0.25rem;
    }
    .login_tips{
        margin-top: 0.75rem;
        padding-left: 0.5rem;
        color: red;
        font-size: 0.6rem;
    }
    .login_btn{
        width: 14.85rem;
        height: 2.25rem;
        background: #4cd964;
        color: white;
        text-align: center;
        font-size: 0.8rem;
        line-height: 2.25rem;
        border-radius: 0.15rem;
        margin-left: 0.5rem;
    }
    .login_forget{
        text-align: right;
        font-size: 0.6rem;
        margin-right: 0.75rem;
        margin-top: 0.5rem;
    }
    .login_forget a{
        color:  #3b95e9;
    }

    .password_change{
        background: #4cd964;
    }
    .change_tran{
        transform: translateX(1.1rem);
    }
    .login_warn{
        width: 14.05rem;
        height: 9.2rem;
        background:#4cd964 ;
        position: absolute;
        left: 1rem;
        top: 9rem;
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
