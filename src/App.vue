<template>
  <div id="app">
    <transition>
      <router-view/>
    </transition>

    <tabbar>
      <tabbar-item to="/" icon="fa fa-home"></tabbar-item>
      <tabbar-item to="/discovery" icon="fa fa-globe"></tabbar-item>
      <tabbar-item to="/message" icon="fa fa-bell"></tabbar-item>
      <tabbar-item to="/mine" icon="fa fa-user"></tabbar-item>
    </tabbar>

  </div>
</template>

<script>
  /* ========== 样式部分 ========== */
  import './assets/css/reset.css'
  import './assets/css/style.css'

  /* ========== 组件 ========== */
  import Tabbar from './components/common/tabbar'
  import TabbarItem from './components/common/tabbar-item'

  /* ========== 插件部分 ========== */
  import Vue from 'vue'
  import Toast from './plugins/toast/index'

  Vue.use(Toast);

  /* ========== socket.io部分 ========== */
  // import io from 'socket.io'

  export default {
    name: 'App',
    components: {
      Tabbar,
      TabbarItem
    },
    created() {
    },
    mounted() {
      // var socket = io('http://localhost:4001');
    }
  }
</script>

<style>


</style>
