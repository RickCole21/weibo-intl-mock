<template>
  <div class="weibo">
    <m-header title="全部"></m-header>

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
    created() {
      this.weiboList = weiboList;
    }
  }
</script>

<style scoped>

</style>


