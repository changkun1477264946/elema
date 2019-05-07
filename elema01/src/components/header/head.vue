<template>
    <div class="header-top">
        <slot name="logo"></slot>
        <slot name="title"></slot>
        <slot name="login"></slot>
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

</style>
