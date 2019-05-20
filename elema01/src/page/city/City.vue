<template>
    <div class="cc">
        <zhead>
            <div slot="logo"  class="logo" @click="backHome">
                <Icon type="ios-arrow-back"/>
            </div>
            <div slot="title" class="title">搜索</div>
            <!--<div slot="login">登录 | 注册</div>-->
        </zhead>
        <div class="cbody">
            <form action="">
                <Row>
                    <Col span="19">
                        <label>
                            <input type="text" v-model="value1" @keyup="aaa"  placeholder="请输入地址" class="ctext">
                            <span class="sp1" @click="clearInput">
                                <Icon type="md-close" class="i2"/>
                            </span>
                        </label>
                    </Col>
                    <Col span="5">
                        <button class="cbtn" @click="submitData">提交</button>
                    </Col>
                </Row>
            </form>
        </div>
        <div class="searchHostory">搜索历史</div>
        <ul>
            <li v-if="datasName" v-for="(data,i) in datasName" :key="i" class="searchshop">
                <div class="searchshopRight">
                    <p class="spp1" @click="changeCity(data.id)">{{data.name}}</p>
                </div>
            </li>
        </ul>
        <ul v-show="hostoryInfor.length>0">
            <li v-for="(data,i) in hostoryInfor" :key="i">
                <p class="pp1">
                    {{data}}
                </p>
                <p class="pp2"><Icon type="md-close"  @click="clearInfor(i)" /></p>
            </li>
            <li class="footer11" @click="clearAllInfor">
                清空搜索历史
            </li>
        </ul>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Zhead from "../../components/header/head";
    export default {
        name: "City",
        components: {Zhead},
        data(){
            return {
                value1:'',
                allCity:{},
                getDatas:[],
                datasName:[],
                hostoryInfor:[],
                cityInfor:{},
            }
        },
        mounted(){
            Vue.axios.get('https://elm.cangdu.org/v1/cities?type=group').then((res)=>{
                this.allCity = res.data;
            }).catch((error)=>{
                console.log('请求错误:1' ,error);
            });
        },
        methods:{
            aaa(){
                if(this.value1===''){
                    this.datasName=[]
                }
                if(this.value1.length>0){
                    for(var i in this.allCity) {
                        this.allCity[i].map((data)=>{
                            if(data.name.match(this.value1)||data.pinyin.match(this.value1)){
                                this.datasName.push(data);
                            }
                        });
                    }
                }
            },
            changeCity(id){
                Vue.axios.get('https://elm.cangdu.org/v1/cities/'+id).then((res)=>{
                    console.log(res.data,'1589');
                    this.cityInfor = res.data;
                    this.$store.state.latitude = this.cityInfor.latitude;
                    this.$store.state.longitude = this.cityInfor.longitude;
                    this.$store.state.localCity = this.cityInfor.name;
                    this.$router.push({path:"/home"})
                }).catch((error)=>{
                    console.log('请求错误:1' ,error);
                });
            },
            backHome(){
                this.$router.push({path: '/home'})
            },
            submitData(){
                if(this.value1 === ''){
                    return;
                }
                if(this.value1.length>0){
                    if( this.hostoryInfor.length===0){
                        this.hostoryInfor.push(this.value1);
                    }else{
                        if(!this.hostoryInfor.some((item)=>{return item === this.value1;})){
                            this.hostoryInfor.push(this.value1);
                        }
                    }
                }
            },
            clearInput(){
                this.datasName=[];
                this.value1='';
            },
            clearInfor(i){
                this.hostoryInfor.splice(i,1)
            },
            clearAllInfor(){
                this.hostoryInfor=[]
            }
        },


    }
</script>

<style scoped>
    .cc{
        padding-top: 2.3rem;
        width: 100%;
    }
    .title{
        font-size: .9rem;
        font-weight: 700;
    }
    .logo{
        font-size: 1.4rem;
        text-align: left;
        padding-left: 0.3rem;
        line-height: 2.2rem;
    }
    .cbody{
        background-color: #fff;
        padding: .5rem;
        width: 100%;
    }
    .ctext{
        border: .025rem solid #e4e4e4;
        font-size: .65rem;
        color: #333;
        border-radius: .125rem;
        background-color: #f2f2f2;
        font-weight: 700;
        padding: 0.3rem 0.4rem;
        display: block;
        width: 100%;
        outline: none;
        padding-right: 1.1rem;
    }
    label{
        width: 100%;
        /*padding: 0 0.5rem;*/
        padding-right: 0.2rem;
        position: relative;
    }
    .sp1{
        position: absolute;
        right: 0.4rem;
        top: 0;
    }
    .spp1{
        line-height: .8rem;
        font-size: 0.5rem;
        padding-left:0.2rem;
    }
    .searchshop{
        padding: .5rem;
        /*border-bottom: .025rem solid #e4e4e4;*/
    }
    .searchshop img{
        width: 80%;
        /*padding: 0.2rem;*/
    }
    .searchshopRight{
        padding: 0.2rem 0;
        border-bottom: 1px solid #eee;
    }
    .i2{
        font-size: 0.8rem;
    }
    .cbtn{
        display: block;
        width: 100%;
        padding: 0.3rem 0.8rem;
        border: .025rem solid #3190e8;
        font-size: .65rem;
        color: #fff;
        border-radius: .125rem;
        background-color: #3190e8;
        font-weight: 700;
        /*padding: 0 .25rem;*/
    }
    .cbody form{
        width: 100%;
    }
    .searchHostory{
        font-size: .6rem;
        line-height: 2rem;
        text-indent: .5rem;
        font-weight: 700;
        color: #666;
    }
    p{
        margin: 0;
    }
    li{
        background-color: #fff;
        border-bottom: .025rem solid #e4e4e4;
        font: .7rem/2rem Microsoft YaHei;
        padding: 0 .3rem;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -ms-flex-align: center;
        align-items: center;
    }
    .pp1{
        display: inline-block;
        width: 80%;
    }
    .pp2{
        display: inline-block;
        width: 20%;
        text-align: right;
        font-size: 1rem;
    }
    .footer11{
        background-color: #fff;
        color: #3190e8;
        font: .7rem/2rem Microsoft YaHei;
        font-weight: 700;
        text-align: center;
        display: block;
    }
</style>
