<template>
    <div class="profile_page">
        <zhead>
            <div slot="logo">
                <router-link :to="{}">
                    <Icon type="ios-arrow-back"  color="white" size="35"/>
                </router-link>
            </div>
            <div slot="title" class="proflie_my">我的</div>
        </zhead>
        <div class="profile_infor">
            <router-link :to="{}">
                <div class="profile_img">
                    <img src="../../images/qq.png" alt="" class="img">
                </div>
                <div class="profile_details ">
                    <p class="details_infor">登录/注册</p>
                    <p class="details_tel">
                        <Icon type="ios-phone-portrait" color="white" size="20"/>
                        <span class="details_number">暂无绑定手机号</span>
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
                       <p class="data">0.00 <span class="data_hz">元</span></p>
                       <p class="data_hz">我的余额</p>
                   </router-link>
               <router-link :to="{}" class="data_line">
                   <p class="data data_yh">0 <span class="data_hz">个</span></p>
                   <p class="data_hz">我的优惠</p>
               </router-link>
               <router-link :to="{}">
                   <p class="data data_jf">0 <span class="data_hz">分</span></p>
                   <p class="data_hz">我的积分</p>
               </router-link>
           </div>
        </div>
        <div class="profile_1reTe">
            <ul>
                <li  class="order">
                    <router-link :to="{}">
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
                    <router-link :to="{}">
                        <Icon type="md-ribbon" class="icon" color="#ffc52f" size="23"/>
                        <p class="order_my">我的订单</p>
                        <Icon type="ios-arrow-forward" class="icon_black" color="#bfc4c5"/>
                        <div class="empty"></div>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="profile_1reTe">
            <ul>
                <li  class="order">
                    <router-link :to="{}">
                        <Icon type="md-square" class="icon" color="#28b0ff" size="23"/>
                        <p class="order_my">服务中心</p>
                        <Icon type="ios-arrow-forward" class="icon_black" color="#bfc4c5"/>
                        <div class="empty"></div>
                    </router-link>
                </li>
                <li class="order">
                    <router-link :to="{}">
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

</template>

<script>
    import zhead from "../../components/header/head"
    import footGuide from "../../components/footer/footGuide"
    export default {
        name: "profile",
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

    }
    .proflie_my{
        font-weight: 600;
        color: white;
    }
    .profile_infor{
        width: 100%;
        height: 4rem;
        background: #3190e8;
        margin-top: 2.2rem;
        padding-top: 0.75rem;
    }
    .profile_img{
        float: left;
    }
    .profile_img .img{
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        margin-left: 0.5rem;
    }
    .profile_details{
        float: left;
        margin-left: 0.5rem;
    }
    .profile_details .details_infor{
        color: white;
        font-weight: 600;
        margin: 0;
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
        /*height: 30%;*/
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
</style>
