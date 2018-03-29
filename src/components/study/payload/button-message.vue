<template>
  <div>
    <input type="text" v-model="message"/>
    <button v-on:click="handleSendMessage">Send</button>
  </div>
</template>

<script>
  export default {
    name: "button-message",
    data: function () {
      return {
        message: 'test message'
      }
    },
    methods: {
      handleSendMessage: function () {
        this.$emit('message', {message: this.message})
      }
    }
  }
</script>

<style scoped>

</style>
