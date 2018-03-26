<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import './assets/css/reset.css';
  import './assets/css/style.css';

  export default {
    name: 'App'
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
