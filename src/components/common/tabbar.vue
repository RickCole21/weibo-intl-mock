<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "tabbar"
  }
</script>

<style scoped>
  .tab-bar {
    display: table;
    height: 50px;
    width: 100%;
    line-height: 50px;
    position: fixed;
    bottom: 0;
    /*border-top: 1px solid #d9d9d9;*/
    background-color: #fff;
  }

  .tab-bar::before {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 1px;
    border-top: 1px solid #d9d9d9;
    color: #d9d9d9;
    transform-origin: 0 0;
    transform: scaleY(.5);
  }
</style>
