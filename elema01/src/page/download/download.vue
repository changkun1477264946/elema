<template>
    <div class="download">
        <zhead>
            <div slot="logo">
                <router-link :to="{path:'/profile'}">
                    <Icon type="ios-arrow-back"  color="white" size="35"  />
                </router-link>
            </div>
            <div slot="title" class="download_my">下载</div>
        </zhead>
        <div class="download_content">
            <img src="../../images/elmlogo.jpeg" alt="">
            <p>下载饿了么APP</p>
        </div>
        <div class="download_btn" @click="downclick">下载</div>
        <div class="login_warn" v-if="showWarn">
            <div class="warn_top">
                <p class="warn_tb"><Icon type="ios-alert-outline" size="90" color="#f8cb86"/></p>
                <p class="warn_prompt">IOS用户请前往AppStore下载</p>
            </div>
            <div class="warn_bottom" @click="warnclick">确认</div>
        </div>
    </div>
</template>

<script>
    import zhead from '../../components/header/head'
    export default {
        name: "download",
        data(){
            return{
                showWarn:false
            }
        },
        methods:{
            downclick(){
                this.showWarn=true
            },
            warnclick(){
                this.showWarn=false
            }
        },
        components:{
            zhead
        }
    }
</script>

<style scoped>
    .download{
        width: 100%;
        height: 100%;
        background: white;
        position: absolute;
        top:0;
        left:0;
        right: 0;
        bottom:0;
        z-index: 1000;
    }
    .download_my{
        font-weight: 600;

    }
    .download_content{
        margin-top: 3.5rem;
        text-align: center;
    }
    img{
        border-radius: 1rem;
    }
    .download_content p{
        color: #666;
        font-size: 0.8rem;
        margin-top: 0.5rem;
    }
    .download_btn{
        width: 15rem;
        height: 2rem;
        background: #4cd964;
        color: white;
        text-align: center;
        font-size: 0.7rem;
        margin-left: 0.55rem;
        margin-top: 0.75rem;
        line-height: 2rem;
        border-radius: 0.25rem;
    }
    .login_warn{
        width: 12.05rem;
        height: 8.2rem;
        background:#4cd964 ;
        position: absolute;
        left: 1.8rem;
        top: 8rem;
        border-radius: 0.25rem;

    }
    .warn_top{
        width: 12.05rem;
        height: 6.1rem;
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
</style>
