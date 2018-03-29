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
    margin-bottom: 27px;
    background-color: #fff;
  }

  .cell-group:last-child {
    margin-bottom: 0;
  }
</style>
