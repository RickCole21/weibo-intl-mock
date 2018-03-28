<template>
  <div class="toast" v-show="show">
    <span class="toast-content" v-show="show">{{text}}</span>
  </div>
</template>

<script>
  export default {
    name: "toast",
    props: {
      text: {
        type: String,
        default: '未知错误'
      },
      time: {
        type: Number,
        default: 1000
      },
    },
    data() {
      return {
        show: false
      }
    },
    watch: {
      show(val) {
        if (val) {
          clearTimeout(this.timeout);
          this.timeout = setTimeout(() => {
            this.show = false;
          }, this.time)
        }
      }
    }
  }
</script>

<style scoped>
  .toast {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: transparent;
    z-index: 9999;
  }

  .toast-content {
    background-color: #e2e2e2;
    color: #3c3c3c;
    padding: 15px 25px;
    font-size: 1.4rem;
    font-weight: bold;
    border-radius: 5px;
    max-width: 50%;
    /* 渐变 */
  }
</style>
