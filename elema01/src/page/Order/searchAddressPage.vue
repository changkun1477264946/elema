<template>
    <div class="container11">
        <zhead>
            <div  slot="logo" class="logo" @click="$router.push({path:'/order'})">
                <Icon type="ios-arrow-back" />
            </div>
            <div slot="title" class="title">选择收货地址</div>
        </zhead>
        <div class="AddressInfo" v-for="(datas,i) in getaddressDatas" :key="i" @click="chooseAddree(i)">
            <Icon type="md-checkmark-circle" class="DDicon" :color="changeIcon===i ? '#4cd964':'transparent'"/>
            <div class="dd">
                <div class="div1">
                    <span class="sp1">{{datas.name}}</span>
                    <span class="sp2">{{datas.sex === 1?'先生':'女士'}}</span>
                    <span class="sp3">{{datas.phone}}</span>
                </div>
                <div class="div2">
                    <span class="sp4">{{datas.tag}}</span>
                    <span class="sp5">{{datas.address_detail}}</span>
                </div>
           </div>
        </div>

        <div class="addAddress">
            <router-link :to="{path:'/addAddressPage',query:{address:{name:''}}}">
                <Icon type="ios-add-circle-outline" class="addIcon" />
                <span class="addFont">新增收货地址</span>
            </router-link>
        </div>

    </div>
</template>

<script>
    import Vue from 'vue';
    import Zhead from "../../components/header/head";
    export default {
        name: "searchAddressPage",
        components: {Zhead},
        data(){
            return{
                addressDatas:[],
                changeIcon:0,
            }
        },
        computed:{
            getaddressDatas(){
                Vue.axios.get('https://elm.cangdu.org/v1/users/'+this.$store.state.userInfo.id+'/addresses').then((res)=>{
                    this.$store.commit('byChoosedAddress',res.data);
                    this.$store.commit('bySearchAddress',res.data[0]);
                }).catch((error)=>{
                    console.log('请求错误:' ,error);
                });
                this.addressDatas = this.$store.state.choosedAddress;
                return this.$store.state.choosedAddress;
            }

        },
        methods:{
            chooseAddree(i){
                this.changeIcon = i;
                this.$store.commit('bySearchAddress',this.addressDatas[i]);
                setTimeout(()=>{
                    this.$router.push({path:'/order'});
                },200);

            }
        }
    }
</script>

<style scoped>
    .container11{
        position: fixed;
        top: 2.3rem;
        right: 0;
        left: 0;
        bottom: 2.5rem;
        overflow-y: auto;
        background-color: #fff;
        z-index: 111;
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
    .DDicon{

        display: block;
        float: left;
    }
    .dd{
        margin-left:.5rem;
    }
    .AddressInfo{
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        border-bottom: .025rem solid #f5f5f5;
        padding: .7rem;
        line-height: 1rem;
    }
    .div1{
        font-size: .7rem;
        color: #333;
    }
    .sp1{
        font-size: .8rem;
        font-weight: 700;
    }
    .div2{
        width: 100%;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        font-size: .7rem;
        color: #333;
    }
    .sp4{
        font-size: .5rem;
        color: #fff;
        border-radius: .15rem;
        background-color: #ff5722;
        height: .6rem;
        line-height: .6rem;
        padding: 0 .2rem;
        margin-right: .3rem;
    }
    .sp5{
        font-size: .6rem;
        color: #777;
    }
    .addAddress{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 2.5rem;
        line-height: 2.5rem;
        background-color: #fff;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
        z-index: 204;
    }
    .addIcon{
        font-size: 1.4rem;
    }
    .addFont{
        font-size: .7rem;
        color: #3190e8;
        /*margin-left: .3rem;*/
    }
</style>
