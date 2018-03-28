<template>
  <div class="cell">
    <i :class="icon"></i>
    <div class="cell-body">{{text}}</div>
  </div>
</template>

<script>
  export default {
    name: "cell",
    props: ['icon', 'text']
  }
</script>

<style scoped>
  .cell {
    position: relative;
    height: 4rem;
    line-height: 4rem;
    padding: 15px;
    display: flex;
    align-items: center;
  }

  .cell i {
    font-size: 1.8rem;
  }

  .cell::after {
    content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    border-top: 1px solid #d9d9d9;
    color: #d9d9d9;
    transform-origin: 0 0;
    transform: scaleY(.5);
  }

  .cell-body {
    margin-left: 20px;
    font-size: 1.6rem;
    flex: 1;
  }
</style>
