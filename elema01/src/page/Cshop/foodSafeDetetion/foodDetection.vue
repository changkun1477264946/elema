<template>
    <div>
        <div class="wrapper">
            <Zhead>
                <div slot="logo"  @click="$parent.changeAaa1">
                    <!--<router-link :to="{}">-->
                        <Icon type="ios-arrow-back"  size="30" color="white"/>
                    <!--</router-link>-->
                </div>
                <div slot="title">商家详情</div>
            </Zhead>
            <div class="header_top">
                <div class="head">
                    <header>活动与属性</header>
                    <ul class="header_ul">
                        <li>
                            <span style="background-color: rgb(240, 115, 115);">减</span>
                            <span>{{datas2[0].description}}(APP专享)</span>
                        </li>
                        <li>
                            <span style="background-color: rgb(153, 153, 153);">保</span>
                            <span>{{datas1[0].description}}(APP专享)</span>
                        </li>
                        <li>
                            <span style="background-color: rgb(87, 169, 255);">准</span>
                            <span>{{datas1[1].description}}(APP专享)</span>
                        </li>
                        <li>
                            <span style="background-color: rgb(188, 188, 188);">票</span>
                            <span>{{datas1[2].description}}(APP专享)</span>
                        </li>
                    </ul>
                </div>
            </div>
            <food-safe >
                <span slot="title" @click="insafety">企业认证详情</span>
            </food-safe>
            <div class="header_top">
                <div class="footer">
                    <header>商家信息</header>
                    <p>{{datas.name}}</p>
                    <p>地址：{{datas.address}}</p>
                    <p>营业时间：{{datas.opening_hours[0]}}</p>
                    <p>营业执照 <span> ＞</span></p>
                    <p>餐饮服务许可证 <span> ＞</span></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Zhead from "../../../components/header/head";
    import foodSafe from "../../../components/common/foodSafe";
    export default {
        name: "foodDetection",
        components: {Zhead,foodSafe},
        data(){
            return {
                datas:{},
                datas1:[],
                datas2:[],
            }
        },
        mounted(){
            //+this.$route.query.id
            Vue.axios.get('https://elm.cangdu.org/shopping/restaurant/3301').then((res)=>{
                this.datas=res.data;
                this.datas1=res.data.supports;
                this.datas2=res.data.activities;
            }).catch((error)=>{
                console.log('请求错误:' ,error);
            });
        },
        methods:{
            insafety(){
                this.$router.push({path:"safety",query:{}});
            }
        }
    }
</script>

<style scoped>
    .wrapper{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
    }
    .head{
        margin-top: 2.6rem;
        background-color: #fff;
    }
    .wrapper header{
        font-size: .75rem;
        color: #333;
        line-height: 1.8rem;
        padding-left: .6rem;
        border-bottom: 1px solid #f1f1f1;
        margin-bottom: .3rem;
    }
    .header_ul{
        margin-left: 0.6rem;
    }
    .header_ul li{
        margin: 0.3rem 0;
    }
    .header_ul li span:nth-child(1){
        font-size: .45rem;
        color: #fff;
        padding: .1rem;
        border: 1px;
        border-radius: .1rem;
        margin-right: .2rem;
    }
    .header_ul li span:nth-child(2){
        font-size: .6rem;
        font-weight: 400;
        color: #666;
    }
    .footer{
        background-color: #fff;
        margin-top: 0.6rem;
    }
    .footer p{
        font-size: .6rem;
        color: #666;
        padding: .7rem .6rem .7rem 0;
        margin-left: .6rem;
        border-bottom: .025rem solid #f5f5f5;
    }
</style>


