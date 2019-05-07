<template>
    <div id="app">
        <home></home>
        <router-view/>
    </div>
</template>

<script>
    import home from './page/home/home'
    export default {
        name: 'App',
        components:{
            home
        }

    }
</script>

<style>
    @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
    *{
        margin: 0;
        padding: 0;
        text-decoration: none;
    }
    html,body{
        width: 100%;
        height: 100%;
        font-size: 20px;
    }
    #app{
        width: 100%;
        height: 100%;
        padding-top: 2.3rem;
    }
</style>
