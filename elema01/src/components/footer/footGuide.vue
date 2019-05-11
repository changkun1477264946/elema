<template>
    <div class="footer">
        <div class="footer-icon">
            <section  @click="changebgc(arr[0])">
                <router-link :to="{path:'/food'}">
                    <Icon type="ios-basket" size="25" :class="{icon:change === 1? true : false}" />
                    <p>外卖</p>
                </router-link>
            </section>
            <section @click="changebgc(arr[1])">
                <router-link :to="{}" >
                    <Icon type="ios-compass-outline" size="25"  :class="{icon:change === 2? true :false}"/>
                    <p>搜索</p>
                </router-link>
            </section>
            <section @click="changebgc(arr[2])">
                <router-link :to="{}" >
                    <Icon type="md-copy" size="25" :class="{icon:change === 3? true :false}"/>
                    <p>订单</p>
                </router-link>
            </section>
            <section @click="changebgc(arr[3])">
                <router-link :to="{path:'/profile'}" >
                    <Icon type="ios-contact" size="25" :class="{icon:change === 4? true :false}"/>
                    <p>我的</p>
                </router-link>
            </section>
        </div>

    </div>
</template>

<script>
    export default {
        name: "footGuide",
        data(){
            return {
                bgc:'#28b0ff',
                change:'',
                arr:[1,2,3,4]
            }
        },
        methods: {
            changebgc(a) {
                this.change = a
            },
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
        z-line:100;
    }
    .footer-icon{
        display: flex;
        text-align: center;
        justify-content: space-around;
    }
    section a{
        text-decoration: none;
        color: black;
    }
    .icon{
        color: #2598e8;
    }
    p{
        font-size: 0.6rem;
    }
</style>
