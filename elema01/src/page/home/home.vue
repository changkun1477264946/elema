<template>
    <div class="city_title">
        <zhead>
            <div slot="logo">ele.me</div>
            <div slot="login" class="login">登录 | 注册</div>
        </zhead>
        <div >
            <div class="">
                <span class="pull-left">当前定位城市</span>
                <span class="pull-right">{{guessCityChange}}</span>
                <span class="clearfix"></span>
            </div>
            <a href="#" class="">
                <div class="pull-right"><Icon type="ios-arrow-forward" size="24" /></div>
                <span class="clearfix"></span>
            </a>
        </div>
        <div>
            <Row class="table">
                <Col span="6" v-for="(city,i) in hotCity" class="text-center city table-bordered" :key="i">
                    <router-link :to="{path:'/city'}">{{city.name}}</router-link>
                </Col>
            </Row>
            <div v-for="(citys,ss) in sortByKey">
                {{ss}}
                <Row class="table table2">
                    <Col span="6" v-for="(city,i) in citys" class="text-center city table-bordered" :key="i">
                        <router-link :to="{path:'/city'}">{{city.name}}</router-link>
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
                allCity:{},
                newAllCity:{},
                hotCity:{},
                guessCity:'定位不准时,请在城市列表中选择',
                cityInfor:{},
            }
        },
        computed:{
            sortByKey() {
                const newkey = Object.keys(this.allCity).sort();
                console.log(newkey,'11');
                for (var i = 0; i < newkey.length; i++) {
                    const k = newkey[i];
                    this.newAllCity[k] = this.allCity[k]
                }
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
            }).catch((error)=>{
                console.log('请求错误:' ,error);
            });
        },
    }
</script>

<style scoped>
    .login{
        font-size: 0.6rem;
    }
    .city_title{
        width: 100%;
        color: #666;
        font-weight: 400;
        text-indent: .45rem;
        border-top: 2px solid #e4e4e4;
        border-bottom: 1px solid #e4e4e4;
        font: .55rem/1.45rem Helvetica Neue;
        padding-top: 2.3rem;
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
