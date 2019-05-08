<template>
    <div id="app">
        <!--<home></home>-->
        <Food></Food>
        <router-view/>
    </div>
</template>

<script>
    import Vue from 'vue';
    import home from "./page/home/home";
    import Food from "./page/food/Food";
    export default {
        name: 'App',
        components:{
            Food,home
        },
        methods:{
            // 获取当前城市的信息
            getCityInfor(id){
                Vue.axios.get("https://elm.cangdu.org/v1/cities/"+id).then((res)=>{
                    // console.log(res.data);
                    this.cityInfor = res.data;
                    this.$store.state.latitude = this.cityInfor.latitude;
                    this.$store.state.longitude = this.cityInfor.longitude;
                    this.$store.state.localCity = this.cityInfor.name;
                    // console.log(this.$store.state.latitude,this.$store.state.longitude,this.$store.state.localCity)
                }).catch((error)=>{
                    console.log('请求错误:1' ,error);
                });
            }
        },
        mounted(){
            // 获取当前城市
            Vue.axios.get('https://elm.cangdu.org/v1/cities?type=guess').then((res)=>{
                // console.log(res.data,'222');
                this.$store.state.guessCity = res.data;
                this.getCityInfor(res.data.id)
            }).catch((error)=>{
                console.log('请求错误:' ,error);
            });
        },
    }
</script>

<style>
    @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
    *{
        margin: 0;
        padding: 0;
        text-decoration: none;
        list-style: none;
        border: none;
        box-sizing: border-box;
    }
    html,body{
        width: 100%;
        height: 100%;
        font-size: 20px;
        /*overflow-x: hidden;*/
        /*overflow-y: scroll;*/
    }
    #app{
        width: 100%;
        height: 100%;
        padding-top: 2.3rem;
    }
</style>
