<template>
    <div class="footer">
        <div class="footer-icon">
            <router-link :to="{path:'/food'}" @click="changebgc(1)">
                <Icon type="ios-basket" size="25" :color="$router.currentRoute.path === '/food' ? '#2598e8':'black'" />
                <p>外卖</p>
            </router-link>
            <router-link :to="{path:'/search'}" @click="changebgc(2)">
                <Icon type="ios-compass-outline" size="25" :color="$router.currentRoute.path === '/search'? '#2598e8':'black'"/>
                <p>搜索</p>
            </router-link>
            <router-link :to="{path:'/orderList'}" @click="changebgc(3)">
                <Icon type="md-copy" size="25"  :color="$router.currentRoute.path === '/orderList'? '#2598e8':'black'"/>
                <p>订单</p>
            </router-link>
            <router-link :to="{path:'/profile'}" @click="changebgc(4)">
                <Icon type="ios-contact" size="25" :color="$router.currentRoute.path === '/profile' ? '#2598e8':'black'"/>
                <p>我的</p>
            </router-link>
        </div>

    </div>
</template>

<script>
    export default {
        name: "footGuide",
        data(){
            return {
                bgc:'#28b0ff',
                arr:0
            }
        }
    }
</script>

<style scoped>
    .footer{
        width: 100%;
        height: 2.3rem;
        background: #fff;
        border-top:1px solid #f1f1f1;
        position: fixed;
        bottom: 0;
        left:0;
        z-index:100;
    }
    .footer-icon{
        display: flex;
        text-align: center;
        justify-content: space-around;
    }
    a{
        text-decoration: none;
        color: black;
    }
    p{
        font-size: 0.6rem;
    }
</style>
