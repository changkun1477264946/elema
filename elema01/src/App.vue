<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    import Vue from 'vue';
    import home from "./page/home/home";
    import Food from "./page/food/Food";
    import Ctype from "./page/Ctype/Ctype";
    import FootGuide from "./components/footer/footGuide";
    import Evaluate from "./page/Cshop/Evaluate";
    import Score from "./components/common/score";
    import FoodSafe from "./components/common/foodSafe";
    import Search from "./page/search/search";
    export default {
        name: 'App',
        methods:{
            // 获取当前城市的信息
            getCityInfor(id){
                Vue.axios.get("https://elm.cangdu.org/v1/cities/"+id).then((res)=>{
                    // console.log(res.data);
                    this.cityInfor = res.data;
                    this.$store.state.latitude = this.cityInfor.latitude;
                    this.$store.state.longitude = this.cityInfor.longitude;
                    this.$store.state.localCity = this.cityInfor.name;
                    // console.log(this.$store.state.latitude,this.$store.state.longitude,this.$store.state.localCity)"https://elm.cangdu.org/shopping/restaurants?latitude="+this.$store.state.latitude+"&longitude="+this.$store.state.longitude
                }).catch((error)=>{
                    console.log('请求错误:1' ,error);
                });
            }
        },
        mounted(){
            // 获取当前城市
            Vue.axios.get('https://elm.cangdu.org/v1/cities?type=guess').then((res)=>{
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
        background-color: #f5f5f5;
    }
    #app{
        width: 100%;
        height: 100%;
    }
</style>


