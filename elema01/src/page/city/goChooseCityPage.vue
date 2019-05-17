<template>
    <div class="container1">
        <!--头部-->
        <zhead>
            <div  slot="logo" class="logo" @click="$router.back(-1)">
                <Icon type="ios-arrow-back" />
            </div>
            <div slot="title" class="title">{{$store.state.localCity}}</div>
        </zhead>
        <div class="cbody">
            <Row>
                <Col span="19">
                    <label>
                        <input type="text" v-model="vul" class="ctext">
                        <span class="sp1" @click="clearInput">
                                <Icon type="md-close" class="i2"/>
                        </span>
                    </label>
                </Col>
                <Col span="5">
                    <button class="cbtn" @click="searchAdd">搜索</button>
                </Col>
            </Row>
        </div>
        <div class="searchHostory">搜索历史</div>
        <ul v-if="show1">
            <li v-for="(data,i) in datas" :key="i" class="searchshop" @click="setCityInfo(data)">
                <p class="p1">{{data.name}}</p>
                <p class="p2">{{data.address}}</p>
            </li>
            <li v-if="datas.length===0" class="li1">
                很抱歉 ! &nbsp; 无搜素结果
            </li>
        </ul>
        <ul v-if="!show1">
            <li v-for="(data,i) in hostoryInfor" :key="i" class="li0">
                <p class="pp1">
                    {{data}}
                </p>
                <p class="pp2"><Icon type="md-close"  @click="clearInfor(i)" /></p>
            </li>
            <li class="footer11" @click="clearAllInfor" v-if="hostoryInfor.length>0">
                清空搜索历史
            </li>
        </ul>

    </div>
</template>

<script>
    import Vue from 'vue';
    import Zhead from "../../components/header/head";
    export default {
        name: "goChooseCityPage",
        components: {Zhead},
        data(){
            return {
                vul:'',
                datas:[],
                hostoryInfor:[],
                show1:false,
            }
        },
        methods:{
            searchAdd(){
                if(this.vul === ''){
                    return;
                }
                if(this.hostoryInfor.length===0){
                    this.hostoryInfor.push(this.vul);
                }else{
                    if(!this.hostoryInfor.some((item)=>{return item === this.vul;})){
                        this.hostoryInfor.push(this.vul);
                    }
                }
                this.show1 = true;
                // 搜索地址
                Vue.axios.get('https://elm.cangdu.org/v1/pois?city_id='+this.$store.state.guessCity.id+'&keyword='+this.vul+'&type=search').then((res)=>{
                    this.datas = res.data;
                    console.log(res.data,111)
                }).catch((error)=>{
                    console.log('请求错误:' ,error);
                });
            },
            clearInput(){
                this.vul='';
                this.datas =[];
                this.show1 = false
            },
            clearAllInfor(){
                this.hostoryInfor=[];
            },
            clearInfor(i){
                this.hostoryInfor.splice(i,1)
            },
            setCityInfo(data){
                this.$store.commit('changeCityInfo1',data);
                this.$router.push({path:'/food'});
            }
        }
    }
</script>

<style scoped>
    .container1{
        padding-top: 2.4rem;
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
    .cbody{
        background-color: #fff;
        padding: .5rem;
        width: 100%;
    }
    .p1{
        font-size: .75rem;
        color: #555;
        margin-bottom: 0.4rem;
    }
    .p2{
        font-size: .6rem;
        color: #999;
    }
    li{
        background-color: #fff;
        border-bottom: .025rem solid #e4e4e4;
        font: .7rem/2rem Microsoft YaHei;
        line-height: 1rem;
    }
    .li1{
        padding: 0.5rem 0.6rem;
        font-size: 0.65rem;
        /*text-align: center;*/
    }
    .li0{
        display: flex;
        justify-content: space-around;
        padding: 0.55rem 0.6rem;
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
