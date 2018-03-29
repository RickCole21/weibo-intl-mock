<template>
  <button v-on:click="incrementCounter">
    <slot></slot>
    {{ counter }}
  </button>
</template>

<script>
  export default {
    name: "button-counter",
    data() {
      return {
        counter: 0
      }
    },
    methods: {
      incrementCounter() {
        this.counter += 1;
        this.$emit('increment');
      }
    }
  }
</script>

<style scoped>

</style>
