<template>
  <div class="tab-bar-vue">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "tabbar"
  }
</script>

<style scoped>
  .tab-bar-vue {
    display: table;
    height: 40px;
    width: 100%;
    line-height: 40px;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #d9d9d9;
    background-color: #fff;
  }

</style>
