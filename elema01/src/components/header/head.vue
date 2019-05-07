<template>
    <div class="header-top">
      <slot name="logo"></slot>
      <span>
        登录|注册
      </span>
      <!--<router-link>-->
        <!--<span>登录|注册</span>-->
      <!--</router-link>-->
    </div>
</template>

<script>
    export default {
        name: "zhead"
    }
</script>

<style scoped>
  .header-top{
    width: 100%;
    height:7%;
    background: #3190e8;
  }

</style>
