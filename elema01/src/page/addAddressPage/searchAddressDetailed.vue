<template>
    <div class="container1">
        <!--头部-->
        <zhead>
            <div  slot="logo" class="logo" @click="$router.back(-1)">
                <Icon type="ios-arrow-back" />
            </div>
            <div slot="title" class="title">搜索</div>
        </zhead>
        <div class="body">
            <input type="text" class="inp" v-model="vul" placeholder="请输入小区/写字楼/学校等">
            <button class="btn1" @click="searchAdd">搜索</button>
        </div>
        <div class="tip" v-if="datas.length===0">
            <p>找不到地址 ?</p>
            <p>尝试输入小区 / 写字楼 / 学校等</p>
            <p>详细地址 ( 如门牌号等 ) 可稍后输入哦</p>
        </div>

        <ul class="addressSearched">
            <li v-for="(data,i) in datas" :key="i" @click="backAddAddressPage(data)">
                <p class="p1">{{data.name}}</p>
                <p class="p2">{{data.address}}</p>
            </li>
        </ul>

    </div>
</template>

<script>
    import Vue from 'vue';
    import Zhead from "../../components/header/head";
    export default {
        name: "searchAddressDetailed",
        components: {Zhead},
        data(){
          return {
              vul:'',
              datas:[],
          }
        },
        methods:{
            searchAdd(){
                // 搜索地址
                Vue.axios.get('https://elm.cangdu.org/v1/pois?city_id='+this.$store.state.guessCity.id+'&keyword='+this.vul+'&type=search').then((res)=>{
                    this.datas = res.data;
                   console.log(res.data)
                }).catch((error)=>{
                    console.log('请求错误:' ,error);
                });
            },
            backAddAddressPage(data){
                this.$router.push({path:'/addAddressPage',query:{address:data}})
            }
        }
    }
</script>

<style scoped>
    .container1{
        padding-top: 2.3rem;
        background-color: #fff;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 204;
        overflow-y: auto;
    }
    .tip{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 100%;
    }
    p{
        padding: 0;
        margin: 0;
    }
    .tip p{
        font-size: .5rem;
        color: #aaa;
        line-height: .75rem;
        text-align: center;
    }
    .logo{
        text-align: left;
        font-size: 1.3rem;
        line-height: 2rem;
        padding-left: 0.5rem;
    }
    .title{
        font-size: .8rem;
        color: #fff;
        text-align: center;
        font-weight: 700;
    }
    .body{
        display: flex;
        padding: .7rem;
    }
    .inp{
        font-size: .65rem;
        color: #999;
        -ms-flex: 4;
        flex: 4;
        background-color: #f1f1f1;
        margin-right: .6rem;
        height: 1.5rem;
        border-radius: .15rem;
        padding: 0 .4rem;
    }
    .btn1{
        flex: 1;
        font-size: .65rem;
        color: #fff;
        background-color: #3190e8;
        border-radius: .15rem;
    }
    .addressSearched{
        padding: .7rem;
    }
    li{
        padding: .7rem 0;
        border-bottom: .025rem solid #f5f5f5;
        line-height: 1rem;
    }
    .p1{
        font-size: .75rem;
        color: #555;
    }
    .p2{
        font-size: .65rem;
        color: #999;
    }
</style>



