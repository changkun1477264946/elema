<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
  html,body{
    width: 100%;
    height: 100%;
  }
  #app{
    width: 100%;
    height: 100%;
  }
</style>
