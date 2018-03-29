<template>
  <div>
    <p>{{ count }}</p>
    <button-counter v-on:increment="asyncIncrementTotal">
      异步调用
    </button-counter>
    <button-counter v-on:increment="syncIncrementTotal">
      同步调用
    </button-counter>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  import ButtonCounter from './button-counter'

  export default {
    name: "study",
    components: {
      ButtonCounter
    },
    data() {
      return {}
    },
    computed: {
      ...mapGetters(['count'])
    },
    methods: {
      asyncIncrementTotal() {
        this.$store.dispatch('asyncIncrement');
      },
      syncIncrementTotal() {
        this.$store.commit('increment', 10);
      }
    },
    created() {
      console.log(this.$store);
    }
  }
</script>

<style scoped>

</style>
