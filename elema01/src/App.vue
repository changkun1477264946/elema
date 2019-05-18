<template>
    <div id="app">
        <transition name="fade">
            <loading v-if="isLoading"></loading>
        </transition>
        <router-view/>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Loading from "./components/common/loading";
    export default {
        name: 'App',
        components: {Loading},
        data(){
            return{
                isLoading: true
            }
        },
        methods:{
            // 获取当前城市的信息
            getCityInfor(id){
                Vue.axios.get("https://elm.cangdu.org/v1/cities/"+id).then((res)=>{
                    this.$store.commit('changeCityInfo1',res.data);
                    this.isLoading = false
                }).catch((error)=>{
                    console.log('请求错误:1' ,error);
                });
            }
        },
        created(){
            Vue.axios.get('https://elm.cangdu.org/v1/user').then((res)=>{
                console.log(res.data,'111UserInfo');
                console.log(res.data,888)
                // this.$store.commit('byUserInfo',res.data.username);
                this.$store.commit('byUserInfo',res.data);
                if(this.$store.state.userInfo){
                    Vue.axios.get('https://elm.cangdu.org/v1/users/'+res.data.id+'/addresses').then((res)=>{
                        this.$store.commit('byChoosedAddress',res.data);
                        this.$store.commit('bySearchAddress',res.data[0]);
                    }).catch((error)=>{
                        console.log('请求错误:' ,error);
                    });
                }
                console.log(res.data,123113)
            });
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
        outline: none;
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


