<template>
    <div class="profile_page">
        <div >
            <zhead>
                <div slot="logo">
                    <router-link :to="{}">
                        <Icon type="ios-arrow-back"  color="white" size="35"  @click="$router.go(-1)"/>
                    </router-link>
                </div>
                <div slot="title" class="proflie_my">我的</div>
            </zhead>

            <div class="profile_infor"  >
                <router-link :to="{path:(allUser.username?'/profile/infor':'login')}">
                    <div class="profile_img">
                        <img  :src="'//elm.cangdu.org/img/'+imageurl" alt="" class="img">
                        <img src="../../images/qq.png" alt="" class="img1" v-if="showimg">
                    </div>
                    <div class="profile_details ">
                        <p class="details_infor" >{{$store.state.userInfo.username}}</p>
                        <p class="details_tel">
                            <Icon type="ios-phone-portrait" color="white" size="20"/>
                            <span class="details_number">{{tel}}</span>
                        </p>
                    </div>
                    <div class="profile_return">
                        <Icon type="ios-arrow-forward"  color="white"/>
                    </div>
                    <div class="empty"></div>
                </router-link>
            </div>
            <div class="profile_content">
                <div class="profile_data">
                    <router-link :to="{path:'/balance'}" class="data_line">
                        <p class="data">{{count}} <span class="data_hz">元</span></p>
                        <p class="data_hz">我的余额</p>
                    </router-link>
                    <router-link :to="{path:'/benefit'}" class="data_line">
                        <p class="data data_yh">{{gift}} <span class="data_hz">个</span></p>
                        <p class="data_hz">我的优惠</p>
                    </router-link>
                    <router-link :to="{path:'/points'}">
                        <p class="data data_jf">{{point}} <span class="data_hz">分</span></p>
                        <p class="data_hz">我的积分</p>
                    </router-link>
                </div>
            </div>
            <div class="profile_1reTe">
                <ul>
                    <li  class="order">
                        <router-link :to="{path:'/orderList'}">
                            <Icon type="md-reorder" class="icon" color="gray" size="23"/>
                            <p class="order_my">我的订单</p>
                            <Icon type="ios-arrow-forward" class="icon_black" color="#bfc4c5"/>
                            <div class="empty"></div>
                        </router-link>
                    </li>
                    <li class="order">
                        <router-link :to="{}">
                            <Icon type="ios-archive" class="icon" color=" #ff5f3e" size="23"/>
                            <p class="order_my">积分商城</p>
                            <Icon type="ios-arrow-forward" class="icon_black" color="#bfc4c5"/>
                            <div class="empty"></div>
                        </router-link>
                    </li>
                    <li class="order">
                        <router-link :to="{path:'/vipcard'}">
                            <Icon type="md-ribbon" class="icon" color="#ffc52f" size="23"/>
                            <p class="order_my">饿了么会员卡</p>
                            <Icon type="ios-arrow-forward" class="icon_black" color="#bfc4c5"/>
                            <div class="empty"></div>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="profile_1reTe">
                <ul>
                    <li  class="order">
                        <router-link :to="{path:'/service'}">
                            <Icon type="md-square" class="icon" color="#28b0ff" size="23"/>
                            <p class="order_my">服务中心</p>
                            <Icon type="ios-arrow-forward" class="icon_black" color="#bfc4c5"/>
                            <div class="empty"></div>
                        </router-link>
                    </li>
                    <li class="order">
                        <router-link :to="{path:'/download'}">
                            <Icon type="ios-basket" class="icon" color="#28b0ff" size="23"/>
                            <p class="order_my">下载饿了么APP</p>
                            <Icon type="ios-arrow-forward" class="icon_black" color="#bfc4c5"/>
                            <div class="empty"></div>
                        </router-link>
                    </li>
                </ul>
            </div>

            <footGuide></footGuide>
        </div>

        <div>
            <transition name="router-slid" model="out-in">
                <router-view></router-view>
            </transition>

        </div>

    </div>

</template>

<script>
    import zhead from "../../components/header/head"
    import footGuide from "../../components/footer/footGuide"
    import Vue from 'vue'
    export default {
        name: "profile",
        data(){
            return{
                name:'',
                count:0,
                gift:0,
                tel:'',
                point:0,
                allUser:{},
                imageurl:'',
                show:true,
                showimg:false,
            }
        },
        mounted(){
            // this.name=this.$route.query.name
            // console.log(this.name)

            Vue.axios.get('https://elm.cangdu.org/v1/user').then((response)=>{
                if(Object.keys(response.data).length>5) {
                    this.allUser = response.data
                    console.log(response.data.username);
                    this.imageurl = this.allUser.avatar
                    // this.name = this.allUser.username;
                    this.tel = this.allUser.mobile || '暂无绑定手机号'
                    this.count = this.allUser.balance
                    this.gift = this.allUser.gift_amount
                    this.point = this.allUser.point
                }else{
                    // this.name='登录/注册'
                    this.$store.commit('byUserInfo1','登录/注册');
                    this.tel='暂无手机号';
                    this.showimg=true;
                }
            });

            // this.name=this.$store.state.userInfo.username;


        },



        methods:{
            // infor(){
            //     this.show = true;
            // },
            // infor1(){
            //     this.show = true;
            //     this.$router.push({path:"/profile"});
            //
            // },


            infor2(){
                Vue.axios.get('https://elm.cangdu.org/v2/signout').then((response)=>{
                    this.$store.commit('clearUserInfo');
                    this.$store.commit('byUserInfo1','登录/注册');
                    this.allUser=response.data;
                    console.log(this.allUser);
                });
                // this.name='登录/注册'
                this.$store.commit('byUserInfo1','登录/注册');
                this.show = true;
                this.$router.push({path:"/profile"});
                // window.localStorage.removeItem(this.allUser.username)
            },
            // getUser(){
            //     Vue.axios.get('https://elm.cangdu.org/v1/user').then((response)=>{
            //         console.log(response.data)
            //     }).catch((error)=>{
            //         console.log('请求错误',error)
            //     })
            // }
        },
        // beforeRouteUpdate(to, from, next) {
        //     this.getUser();
        //     next()
        // },

        components:{
            zhead,footGuide
        }
    }
</script>

<style scoped>
    a{
        text-decoration: none;
    }
    .profile_page{
        width: 100%;
        height: 100%;
        background: #f5f5f5;
        overflow-y: hidden;
    }
    .proflie_my{
        font-weight: 600;
        color: white;
    }
    .profile_infor{
        width: 100%;
        height: 4.3rem;
        background: #3190e8;
        /*background: red;*/
        margin-top: 2.2rem;
        padding-top: 0.75rem;
    }
    .profile_img{
        float: left;
        width: 3rem;
        height: 3rem;
        margin-left: 0.75rem;
        border-radius: 50%;
    }
    .profile_img .img{
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
    }
    .profile_img .img1{
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        margin-top: -1.25rem;
    }
    .profile_details{
        float: left;
        margin-left: 0.8rem;
    }
    .profile_details .details_infor{
        color: white;
        font-weight: 600;
        margin: 0;
        padding-top: 0.35rem;
    }
    .profile_details .details_tel{
        font-size: 0.6rem;
        color: white;
    }
    .profile_details .details_number{
        vertical-align: -0.1rem;
    }
    .profile_return{
        float: right;
        margin-top: 0.5rem;
        margin-right: 0.5rem;
    }

    .profile_data{
        width: 100%;
        height: 4.6rem;
        background: white;
        text-align: center;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .data_line{
        border-right: 0.05rem solid #f5f5f5;
        padding-right: 1.25rem;
    }
    .data{
        padding-top: 0.5rem;
        font-size: 1.3rem;
        font-weight: 900;
        color: #f90;
    }
    .data_yh{
        color: #ff5f3e;
    }
    .data_jf{
        color: #6ac20b;
    }
    .data_hz{
        font-size: 0.6rem;
        font-weight: 100;
        padding: 0;
        margin: 0;
        color: black;
    }
    .profile_1reTe{
        margin-top: 0.5rem;
        width: 100%;
        background: white;
    }
    .order{
        list-style: none;
        padding-top: 0.5rem;
        margin-left: 1rem;
        border-bottom:0.05rem solid #f5f5f5;
    }
    .icon{
        float: left;
    }
    .order_my{
        float: left;
        font-size: 0.7rem;
        color: black;
        margin-left: 0.5rem;
    }
    .icon_black{
        float: right;
        margin-right: 0.5rem;
    }

    .empty{
        clear: both;
    }
    .infor{
        width: 100%;
        height: 100%;
        background: #f5f5f5;
    }
    .router-slid-enter-active, .router-slid-leave-active {
        transition: all .4s;
    }
    .router-slid-enter, .router-slid-leave-active {
        transform: translate3d(2rem, 0, 0);
        opacity: 0;
    }
</style>
