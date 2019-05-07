<template>
  <div id="app">
    <zhead></zhead>
    <router-view/>
  </div>
</template>

<script>
  import zhead from './components/header/head'
export default {
  name: 'App',
  components:{
    zhead
  }
}
</script>

<style>
  @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
  html,body{
    width: 100%;
    height: 100%;
    font-size: 20px;
  }
  #app{
    width: 100%;
    height: 100%;
  }
</style>
