<template>
    <div class="addetail_page">
        <zhead>
            <div slot="logo">
                <!--<router-link :to="{path:'/proflie/infor'}">-->
                <Icon type="ios-arrow-back"  color="white" size="35" @click="$router.go(-1)"/>
                <!--</router-link>-->
            </div>
            <div slot="title" >搜索地址</div>
        </zhead>
        <div class="addetail_content">
            <div class="addetail_top">
                <div class="addetail_input">
                    <input type="text" placeholder="请输入小区/写字楼/学校等" v-model="inputvalue">
                    <button @click="comfirclick">确认</button>
                </div>
                <div class="addetail_des">为了满足商家的送餐要求，建议您从列表中选择地址</div>
            </div>
            <div class="addetail_add" v-if="addshow">
                <p>找不到地址?</p>
                <p>请尝试输入小区、写字楼或学校名</p>
                <p>详细地址(如门牌号)可稍后输入哦。</p>
            </div>
            <div class="addetail_add2" v-if="addshow1" >
                <div class="addetail_p" v-for="(data,index) in allAdd" @click="addressclick(data)">

                    <p>{{data.name}}</p>
                    <p>{{data.address}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import zhead from '../../../../../../components/header/head'
    import Vue from 'vue'
    export default {
        name: "addDetail",
        data(){
            return{
                addshow:true,
                addshow1:false,
                inputvalue:'',
                allAdd:{}
            }
        },
        // created(){
        //
        //         Vue.axios.get('https://elm.cangdu.org/v1/users/'+this.$store.state.userInfo.user_id+'/addresses').then((response)=>{
        //             this.$store.state.addAddress=response.data;
        //             console.log( this.$store.state.addAddress+'jj')
        //         }).catch((error)=>{
        //             console.log('请求错误',error)
        //         });
        //
        //
        // },
        methods:{
            comfirclick(){
                // console.log("aaa")
                if(this.inputvalue || this.allAdd.length >0 ){
                    this.addshow=false;
                    this.addshow1=true;
                    Vue.axios.get('https://elm.cangdu.org/v1/pois?city_id='+this.$store.state.guessCity.id+'&keyword='+this.inputvalue+'&type=search').then((response)=>{
                        this.allAdd=response.data;
                    })
                }
            },
            addressclick(data){

                localStorage.setItem('data', JSON.stringify(data));
                // console.log(JSON.parse(localStorage.getItem("data")))

                this.$router.push({path:'/profile/infor/zaddress/add'});


                // this.$store.commit('byGuessCity',this.allAdd[index].name);
                // console.log(this.allAdd[index].name+'dddd');
                //  localStorage.setItem('data', JSON.stringify(data));
                //  console.log(JSON.parse(localStorage.getItem("data")))
                // console.log(this.$store.state.addAddress.address)
                // this.$router.push({path:'/profile/infor/zaddress/add'})
                // Vue.axios.get('https://elm.cangdu.org/v1/users/'+this.$store.state.userInfo.user_id+'/addresses').then((response)=>{
                //     this.$store.state.addAddress=response.data;
                //     console.log( this.$store.state.addAddress+'bb')
                // })
            },



        },
        components:{
            zhead
        }
    }
</script>

<style scoped>
    input,button{
        outline: none;
    }
    .addetail_page{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 1000;
        width: 100%;
        height: 100%;
        background: #f5f5f5;
    }

    .addetail_content{
        margin-top: 2.3rem;
    }
    .addetail_input{
        width: 18.75rem;
        height: 3.15rem;
        background: white;
    }
    .addetail_input input{

        width: 11.5rem;
        height: 1.95rem;
        background: #f2f2f2;
        border: 0.05rem solid #ddd;
        border-radius: 0.15rem;
        font-size: 0.6rem;
        padding: 0.5rem;
        margin: 0.4rem;
    }
    .addetail_input button{
        width: 3.5rem;
        height: 1.95rem;
        background: #3199e8;
        border-radius: 0.25rem;
        margin-left: -0.3rem;
        color: white;
        font-size: 0.7rem;
        line-height: 2rem;
    }
    .addetail_des{
        width: 18.75rem;
        height: 1.4rem;
        background: #fff6e4;
        color: #ff883f;
        font-size: 0.6rem;
        /*text-align: center;*/
        line-height: 1.5rem;
        padding-left: 1rem;
    }
    .addetail_add{
        text-align: center;
        margin-top: 7.5rem;
    }
    .addetail_add p{
        font-size: 0.6rem;
        color: #969696;
    }
    .addetail_add2 {
        display: flex;
        flex-wrap: wrap;
        /*margin-top: 10px;*/
        /*margin-right: 10px;*/
        /*padding-right: 10px;*/
    }
    .addetail_p{
        border-bottom: 0.05rem solid #969696;
        margin-top: 0.5rem;
        /*margin-right: 10px;*/
        /*padding-right: 10px;*/
        /*margin-right: 80px;*/
    }
    .addetail_add2 p{
        width: 17.8rem;
        font-size: 0.6rem;
        color: #969696;
        margin-left: 0.5rem;
        padding-right: 3rem;
    }
</style>
