<template>
  <div class="header-vue">
    <div class="header-left">
      <img src="../../assets/img/avatar.jpg" alt="...">
    </div>
    <span class="title">{{title}}</span>
    <div class="header-right">
      <i class="fa fa-search"></i>
      <i class="fa fa-pencil"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: "header",
    props: ['title']
  }
</script>

<style scoped>
  .header-vue {
    position: fixed;
    top: 0;
    width: 100%;
    height: 45px;
    display: flex;
    display: -webkit-flex;
    line-height: 45px;
    font-size: 1.6rem;
    font-weight: bold;
    border-bottom: 1px solid #d9d9d9;
    background-color: #ffffffd4;
  }

  .header-left {
    display: flex;
    display: -webkit-flex;
    justify-items: center;
    align-items: center;
    padding: 0 10px;
  }

  .header-left img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }

  .title {
    flex: 1;
    text-align: center;
  }

  .header-right {
    display: inline-block;
    right: 0;
  }

  .header-right i {
    font-size: 2rem;
    margin-right: 13px;
  }
</style>
