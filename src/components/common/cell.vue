<template>
  <div class="cell" @click="onClick">
    <i class="icon" :class="icon" v-if="icon"></i>
    <div class="cell-body" :class="{'align-center':textCenter}">{{text}}</div>
    <div class="cell-value">{{value}}</div>
    <i class="fa fa-chevron-right arrow" v-if="showArrow"></i>
  </div>
</template>

<script>
  export default {
    name: "cell",
    props: ['icon', 'text', 'value', 'showArrow', 'link', 'textCenter'],
    methods: {
      onClick() {
        if (!this.link) return;
        
        this.$router.push(this.link);
      }
    }
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

  .cell .icon {
    font-size: 2rem;
    margin-right: 20px;
  }

  .cell .arrow {
    font-size: 1.2rem;
    padding-left: 10px;
    color: #bdbdbd;
  }

  .cell-body {
    font-size: 1.6rem;
    flex: 1;
  }

  .cell-value {
    color: #9c9c9c;
    font-size: 1.4rem;
  }
</style>
