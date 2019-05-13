<template>
    <div class="header-top">
        <div class="row">
            <div class="header col-xs-3">
                <slot name="logo" class="logo"></slot>
            </div>
            <div class="header col-xs-6">
                <slot name="title"></slot>
            </div>
            <div class="header col-xs-3 header-login">
                <slot name="login"></slot>
            </div>
        </div>
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
      height: 2.3rem;
      background: #3190e8;
      position: fixed;
      top:0;
      left: 0;
      z-index: 100;
  }
  .header{
      color: white;
      text-align: center;
      line-height: 2.4rem;
  }
  .header-login{
      font-size: 0.5rem;
  }
</style>
