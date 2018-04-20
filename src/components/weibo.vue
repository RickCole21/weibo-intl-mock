<template>
  <div class="weibo">
    <m-header>
      <div slot="header-left" class="icon">
        <img src="../assets/img/avatar-me.jpg" alt="...">
      </div>

      <div slot="header-center">
        <span class="title">全部</span>
      </div>

      <div slot="header-right">
        <i class="fa fa-search" style="margin-right: 15px"></i>
        <i class="fa fa-pencil" @click="postWeibo"></i>
      </div>
    </m-header>

    <section id="content">

      <div class="weibo-list">
        <weibo-item v-for="weibo in weiboList" :key="weibo.id" :weibo="weibo"></weibo-item>
      </div>

    </section>

  </div>
</template>

<script>
  import MHeader from './common/m-header'
  import WeiboItem from './common/weibo-item'

  import weiboList from '../assets/data/weibo-list';

  export default {
    name: 'weibo',
    components: {
      MHeader,
      WeiboItem
    },
    data() {
      return {
        weiboList: []
      }
    },
    methods: {
      postWeibo() {
        this.$socket.emit('post weibo', {
          title: '小贝被交易至布朗'
        });
        console.log('发布了一条微博');
      }
    },
    created() {
      this.weiboList = weiboList;
    }
  }
</script>

<style scoped>
  .icon {
    display: flex;
    justify-items: center;
    align-items: center;
    padding: 0 10px;
    position: absolute;
    left: 0;
    height: 100%;
  }

  .icon img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }

</style>


