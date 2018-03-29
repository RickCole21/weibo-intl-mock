<template>
  <div>
    <p v-for="msg in messages">{{ msg }}</p>
    <button-message v-on:message="handleMessage"></button-message>
  </div>
</template>

<script>
  import ButtonMessage from './button-message'

  export default {
    name: "study",
    components: {
      ButtonMessage
    },
    data() {
      return {
        messages: []
      }
    },
    methods: {
      handleMessage(payload) {
        this.messages.push(payload.message);
      }
    }
  }
</script>

<style scoped>

</style>
