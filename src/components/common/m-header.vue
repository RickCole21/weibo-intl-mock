<template>
  <div class="m-header">

    <div class="section header-left">
      <!--<img src="../../assets/img/avatar-me.jpg" alt="...">-->
      <slot name="header-left"></slot>
    </div>

    <div class="section header-center">
      <!--<span class="title">{{title}}</span>-->
      <slot name="header-center"></slot>
    </div>

    <slot></slot>

    <div class="section header-right">
      <slot name="header-right"></slot>
    </div>

  </div>
</template>

<script>
  export default {
    name: "m-header",
    props: {},
    methods: {},
    created() {
    }
  }
</script>

<style scoped>
  .m-header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 45px;
    display: flex;
    align-items: center;
    line-height: 45px;
    font-size: 1.6rem;
    font-weight: bold;
    background-color: #fff;
    z-index: 10;
  }

  .m-header::after {
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

  .m-header i {
    font-size: 2rem;
  }

  .m-header > .section {
    height: 100%;
    position: absolute;
  }

  .header-left {
    left: 10px;
  }

  .header-center {
    left: 50%;
    transform: translateX(-50%);
  }

  .header-right {
    right: 10px;
  }


</style>
