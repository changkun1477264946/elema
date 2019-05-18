<template>
    <div class="infor">
        <div >
            <div class="infor_page" >
                <zhead>
                    <div slot="logo">
                        <router-link :to="{path:'/profile'}">
                            <Icon type="ios-arrow-back"  color="white" size="35"/>
                        </router-link>
                    </div>
                    <div slot="title" class="proflie_my">账户信息</div>
                </zhead>
            </div>
            <div class="infor_form1">
                <div class="infor_account1">
                    <input type="file" class="infor_img">
                    <div class="infor_head">
                        <p>头像</p>
                        <p class="img_photo">
                            <!--<img src="../../../images/qq.png" alt="" class="photo">-->
                            <img :src="'//elm.cangdu.org/img/'+imageurl"  alt="" class="photo">
                        </p>
                        <Icon type="ios-arrow-forward" size="25" color=" #bfc4c5"/>

                    </div>

                </div>
                <div class="infor_account2" >
                    <router-link :to="{path:'/profile/infor/setusername'}">
                        <span>用户名</span>
                        <span class="infor_username">
                         <span>{{$store.state.userInfo.username}}</span>
                         <Icon type="ios-arrow-forward" size="25" color="#bfc4c5" />
                    </span>

                    </router-link>
                </div>
                <div class="infor_account3" >
                    <router-link :to="{path:'/profile/infor/zaddress'}">
                        <span>收货地址</span>
                        <span class="infor_icon">
                          <Icon type="ios-arrow-forward" size="25" color="#bfc4c5"/>
                     </span>

                    </router-link>
                </div>
            </div>
            <p class="account">账号绑定</p>
            <div class="infor_form2" @click="showtel">
                <img src="../../../images/bindphone.png" alt="">
                <span>手机</span>
                <span class="tel_icon">
                 <Icon type="ios-arrow-forward" size="25" color="#bfc4c5"/>
            </span>
            </div>
            <p class="safe">安全设置</p>
            <div class="login">
                <router-link :to="{path:'/forget'}">
                    <span>登录密码</span>
                    <span class="login_upadate">
                     <span class="update">修改</span>
                    <Icon type="ios-arrow-forward" size="25" color="#bfc4c5"/>
                </span>
                </router-link>
            </div>
            <div class="quit" @click="quitshow">退出登录</div>
            <div class="login_warn" v-if="showWarn">
                <div class="warn_top">
                    <p class="warn_tb"><Icon type="ios-alert-outline" size="90" color="#f8cb86"/></p>
                    <p class="warn_prompt">{{showpropt}}</p>
                </div>
                <div class="warn_bottom" @click="warnclick">确认</div>
            </div>
            <div class="infor_warn" v-if="showQuit">
                <div class="infor_top">
                    <p class="warn_tb"><Icon type="ios-alert-outline" size="100" color="#f8cb86"/></p>
                    <p class="warn_prompt quit_login">是否退出登录</p>
                </div>
                <div class="quit_bottom">
                    <span @click="waitquit">再等等</span>
                    <span @click="$parent.infor2">退出登录</span>
                </div>
            </div>
        </div>
        <div>
            <transition name="router-slid" model="out-in">
                <router-view></router-view>
            </transition>
            <!--<router-view name="address"></router-view>-->
        </div>
    </div>
</template>

<script>
    import zhead from '../../../components/header/head'
    import Vue from 'vue'
    export default {
        name: "infor",
        data(){
            return{
                // show:true,
                username:'',//用户名
                imageurl:'',
                allUser:{},
                showWarn:false,
                showQuit:false,
                showpropt:'请在手机APP中设置'
            }
        },
        // mounted(){
        //     this.username=this.$store.state.userInfo.username;
        //     // Vue.axios.get('https://elm.cangdu.org/v1/user').then((response)=>{
        //     //     this.allUser=response.data
        //     //     this.username=response.data.username;
        //     //     console.log(this.allUser);
        //     // });
        //
        // },
        mounted(){
          this.imageurl=this.$store.state.userInfo.avatar
        },
        methods:{
            showtel() {
                this.showWarn=true
            },
            warnclick(){
                this.showWarn=false
            },
            quitshow(){
                this.showQuit=true
            },
            waitquit(){
                this.showQuit=false
            },
            // setusername(){
            //     this.show=true
            // },
            // setusername2(){
            //     this.show=true;
            //     this.username=this.$store.state.userInfo.username;
            // },
            // address(){
            //     this.show=false;
            //     this.$router.push({path:"/profile/infor/address"})
            // }
            // quit(){
            //     Vue.axios.get('https://elm.cangdu.org/v2/signout').then((response)=>{
            //         this.allUser=response.data
            //         console.log(this.allUser);
            //
            //     });
            //     this.$parent.infor2;
            // }
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
    .infor{
        overflow-x: hidden;
        position: absolute;
        left:0;
        top:0;
        right: 0;
        bottom: 0;
        z-index: 1000;
        background: #f5f5f5;
    }
    .proflie_my{
        font-weight: 600;
    }
    .infor_form1{
        margin-top: 3rem;
    }
    .infor_account1{
        width: 16rem;
        height: 2.6rem;
        background: white;
        border-top: 0.05rem solid #bfc4c5;
        font-size: 0.7rem;
    }
    .infor_img{
        width: 16rem;
        opacity: 0;
    }
    .infor_head{
        width: 15.5rem;
        display: flex;
        justify-content: space-between;
        margin-top:-0.5rem;
        margin-left: 0.5rem;
        /*margin-right: 0.3rem;*/
    }
    .img_photo{
        /*float: right;*/
        margin-top: -0.5rem;
    }
    .photo{
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        vertical-align: middle;
        margin-left:10.8rem;
    }
    .infor_account2{
        width: 16rem;
        height: 2.35rem;
        background: white;
        border-top: 0.05rem solid #bfc4c5;
        line-height: 2.25rem;
        padding-left: 0.5rem;
    }
    .infor_account2 a{
        color:#333 ;
        font-size: 0.7rem;
    }
    .infor_username{
        float: right;
    }
    .infor_username span{
        color: #bfc4c5;
    }
    .infor_account3{
        width: 16rem;
        height: 2.4rem;
        background: white;
        border-top: 0.05rem solid #bfc4c5;
        line-height: 2.25rem;
        padding-left: 0.5rem;
        border-bottom:  0.05rem solid #bfc4c5;
    }
    .infor_account3 a{
        color:#333 ;
        font-size: 0.7rem;
    }
    .infor_icon{
        float: right;
    }
    .account{
        margin-left: 0.5rem;
        margin-top: 0.5rem;
        font-size: 0.6rem;
        color: #919191;
    }
    .infor_form2{
        width: 16rem;
        height: 2.4rem;
        background: white;
        border-top: 0.05rem solid #bfc4c5;
        border-bottom:  0.05rem solid #bfc4c5;
        line-height: 2.25rem;
        padding-left: 0.5rem;
    }
    .infor_form2 span{
        font-size: 0.7rem;
    }
    .tel_icon {
        float: right;
    }
    .safe{
        margin-left: 0.5rem;
        margin-top: 0.5rem;
        font-size: 0.6rem;
        color: #919191;
    }
    .login{
        width: 16rem;
        height: 2.4rem;
        background: white;
        border-top: 0.05rem solid #bfc4c5;
        border-bottom:  0.05rem solid #bfc4c5;
        line-height: 2.25rem;
        padding-left: 0.5rem;
    }
    .login a{
        color:#333 ;
        font-size: 0.7rem;
    }

    .login_upadate{
        float: right;
    }
    .login_upadate{
        color:#bfc4c5 ;
    }
    .quit{
        width: 15rem;
        height: 1.75rem;
        background: #d8584a;
        color: white;
        text-align: center;
        font-size: 0.6rem;
        border-radius: 0.25rem;
        line-height: 1.75rem;
        margin-top: 1.5rem;
        margin-left: 0.5rem;
    }
    .login_warn{
        width: 14.05rem;
        height: 9.2rem;
        background:#4cd964 ;
        position: absolute;
        left: 1rem;
        top: 8.5rem;
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
    .infor_warn{
        width: 15rem;
        height: 14rem;
        background: #f0edf0;
        position: absolute;
        top:7rem;
        left:0.5rem;
        padding-top: 1.5rem;
        text-align: center;
        border-radius: 0.25rem;
    }
    .quit_login{
        font-size: 1.15rem;
    }
    .quit_bottom{
        margin-top: 3rem;
    }
    .quit_bottom span:nth-child(1){
        width: 5.35rem;
        height: 1.85rem;
        background: #c1c1c1;
        color: white;
        display: inline-block;
        font-size: 0.75rem;
        border-radius: 0.15rem;
        line-height: 2rem;
    }
    .quit_bottom span:nth-child(2){
        width: 4.6rem;
        height: 1.85rem;
        background: #d8584a;
        color: white;
        display: inline-block;
        font-size: 0.75rem;
        border-radius: 0.15rem;
        line-height: 2rem;
        margin-left:0.75rem ;
    }
    .router-slid-enter-active, .router-slid-leave-active {
        transition: all .4s;
    }
    .router-slid-enter, .router-slid-leave-active {
        transform: translate3d(2rem, 0, 0);
        opacity: 0;
    }
</style>
