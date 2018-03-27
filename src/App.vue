<template>
  <div id="app">
    <router-view/>

    <tabbar>
      <tabbar-item to="/" icon="fa fa-home"></tabbar-item>
      <tabbar-item to="/discovery" icon="fa fa-globe"></tabbar-item>
      <tabbar-item to="/message" icon="fa fa-bell"></tabbar-item>
      <tabbar-item to="/mine" icon="fa fa-user"></tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import './assets/css/reset.css'
  import './assets/css/style.css'

  import Tabbar from './components/common/tabbar'
  import TabbarItem from './components/common/tabbar-item'

  export default {
    name: 'App',
    components: {
      Tabbar,
      TabbarItem
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #3c3c3c;
    height: 100%;
  }
</style>
