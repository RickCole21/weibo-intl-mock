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
    height: 5.5rem;
    line-height: 5.5rem;
    padding: 15px;
    display: flex;
    align-items: center;
  }

  /* 除了第一项和最后一项，其他项添加伪元素1px边框 */
  .cell:not(:first-child)::after, .cell:not(:last-child)::after {
    content: " ";
    position: absolute;
    left: 0;
    bottom: -2px;
    right: 0;
    height: 1px;
    border-top: 1px solid #d9d9d9;
    color: #d9d9d9;
    transform-origin: 0 0;
    transform: scaleY(.5);
  }

  .cell i {
    font-size: 2rem;
  }

  /*.cell::after {*/
  /*content: " ";*/
  /*position: absolute;*/
  /*left: 0;*/
  /*bottom: -2px;*/
  /*right: 0;*/
  /*height: 1px;*/
  /*border-top: 1px solid #d9d9d9;*/
  /*color: #d9d9d9;*/
  /*transform-origin: 0 0;*/
  /*transform: scaleY(.5);*/
  /*}*/

  .cell-body {
    margin-left: 20px;
    font-size: 1.6rem;
    flex: 1;
  }
</style>
