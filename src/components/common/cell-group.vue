<template>
  <div class="cell-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "cell-group"
  }
</script>

<style scoped>
  .cell-group {
    margin-top: 27px;
    background-color: #fff;
  }
</style>
