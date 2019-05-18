<template>
    <div class="city_title">
        <transition name="fade">
            <loading v-if="isLoading"></loading>
        </transition>
        <zhead>
            <div slot="logo" class="logo">ele.me</div>
            <div slot="login" class="login" v-if="!userInfoLogin" @click="goProfile">登录 | 注册</div>
            <div slot="login" class="login1" v-if="userInfoLogin" @click="goProfile">
                <Icon type="ios-person-outline" />
            </div>
        </zhead>
        <div >
            <div class="">
                <span class="pull-left">当前定位城市</span>
                <span class="pull-right">{{guessCityChange}}</span>
                <span class="clearfix"></span>
            </div>
            <router-link :to="{path:'/city'}">
                <div class="pull-right"><Icon type="ios-arrow-forward" size="24" /></div>
                <span class="clearfix"></span>
            </router-link>
        </div>
        <div>
            <Row class="table">
                <Col span="6" v-for="(city,i) in hotCity" class="text-center city table-bordered" :key="i">
                    <span @click="changeCity(city.id)" class="hotCitys">{{city.name}}</span>
                </Col>
            </Row>
            <div v-for="(citys,ss) in sortByKey">
                {{ss}}
                <Row class="table table2">
                    <Col span="6" v-for="(city,i) in citys" class="text-center city table-bordered" :key="i">
                        <span @click="changeCity(city.id)">{{city.name}}</span>
                    </Col>
                </Row>
            </div>

        </div>
    </div>

</template>
<script>
    import Vue from 'vue';
    import Zhead from "../../components/header/head";
    export default {
        name: "home",
        components: {Zhead},
        data(){
            return {
                isLoading: true,
                allCity:{},
                newAllCity:{},
                hotCity:{},
                guessCity:'定位不准时,请在城市列表中选择',
                cityInfor:{},
            }
        },
        computed:{
            userInfoLogin(){
                return this.$store.state.userInfo;
            },
            sortByKey() {
                const newkey = Object.keys(this.allCity).sort();
                console.log(newkey,'11');
                for (var i = 0; i < newkey.length; i++) {
                    const k = newkey[i];
                    this.newAllCity[k] = this.allCity[k]
                }
                this.isLoading = false
                console.log(this.newAllCity);
                return this.newAllCity;
            },
            guessCityChange(){
                if(this.$store.state.localCity){
                    this.guessCity = this.$store.state.localCity
                }
                return this.guessCity;
            }
        },
        mounted(){
            //  当组件挂载完毕时发起网络请求
            Vue.axios.get('https://elm.cangdu.org/v1/cities?type=group').then((res)=>{
                // console.log(res.data);
                this.allCity=res.data;
            }).catch((error)=>{
                console.log('请求错误:' ,error);
            });
            Vue.axios.get('https://elm.cangdu.org/v1/cities?type=hot').then((res)=>{
                // console.log(res.data);
                this.hotCity=res.data;
                this.isLoading = false
            }).catch((error)=>{
                console.log('请求错误:' ,error);
            });
        },
        methods:{
            goProfile(){
                this.$router.push({path:"/profile"});
            },
            changeCity(id){
                Vue.axios.get('https://elm.cangdu.org/v1/cities/'+id).then((res)=>{
                    console.log(res.data,'1589');
                    this.$store.commit('changeCityInfo',res.data);
                    this.cityInfor = res.data;
                    this.$router.push({path:"/goChooseCityPage"})
                    this.isLoading = false
                }).catch((error)=>{
                    console.log('请求错误:1' ,error);
                });
            },
        }
    }
</script>

<style scoped>
    .logo{
        text-align: left;
        font-size: 0.8rem;
    }
    .login1{
        font-size: 1.3rem;
        line-height: 2rem;
        text-align: right;
        padding-right: 0.5rem ;
    }
    .hotCitys{
        color: blue;
    }
    .city_title{
        width: 100%;
        color: #666;
        font-weight: 400;
        text-indent: .45rem;
        border-top: 2px solid #e4e4e4;
        border-bottom: 1px solid #e4e4e4;
        font: .55rem/1.45rem Helvetica Neue;
    }
    .pull-right{
        padding-right: .45rem;
    }
    .city{
        height: 1.8rem;
        line-height: 1.8rem;
        padding: 0 .2rem;
        text-indent: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .table2 a{
        color: black;
    }
</style>
