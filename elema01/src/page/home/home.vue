<template>
    <div class="city_title">
        <div class="table">
            <span>当前定位城市</span>
            <span>定位不准时,请在城市列表中选择</span>
        </div>
        <a href="#" class="">
            <span></span>
            <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
        </a>
    </div>
</template>

<script>
    import Vue from 'vue';
    export default {
        name: "home",
        data(){
            return {
                allCity:[],
            }
        },
        mounted(){
            //  当组件挂载完毕时发起网络请求
            Vue.axios.get('https://elm.cangdu.org/v1/cities?type=group').then((res)=>{
                console.log(res.data);
                this.allCity=res.data;
            }).catch((error)=>{
                console.log('请求错误:' ,error);
            });

        },
    }
</script>

<style scoped>
    .city_title{
        color: #666;
        font-weight: 400;
        text-indent: .45rem;
        border-top: 2px solid #e4e4e4;
        border-bottom: 1px solid #e4e4e4;
        font: .55rem/1.45rem Helvetica Neue;
    }
</style>
