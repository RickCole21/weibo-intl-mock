<template>
  <router-link :to="to"><i :class="icon"></i></router-link>
</template>

<script>
  export default {
    name: "tabbar-item",
    props: ['icon', 'to']
  }
</script>

<style scoped>
  a {
    display: table-cell;
    height: 100%;
    text-align: center;
    font-size: 2.2rem;
  }
</style>
