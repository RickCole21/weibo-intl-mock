<template>
  <div class="login-vue">
    <nav class="reg-text">注册</nav>

    <img class="icon-img" src="../assets/img/weibo-icon.jpg" alt="weibo-icon">

    <div class="form">
      <div class="input">
        <input type="text" v-model="username" placeholder="输入邮箱或者手机号">
        <i class="icon-clear" v-show="iconClearIsShow">X</i>
      </div>
      <div class="input">
        <input type="password" v-model="password" placeholder="输入密码">
        <i class="icon-clear" v-show="iconClearIsShow">X</i>
      </div>

      <div class="btn">
        <button :disabled="btnDisabled">登入</button>
      </div>

      <div class="below">
        <nav>登录遇到问题？</nav>
        <nav>手机短信登录</nav>
      </div>

    </div>
    <footer>

    </footer>

  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        username: '',
        password: '',

        iconClearIsShow: true,
      }
    },
    computed: {
      btnDisabled() {
        return !(this.username && this.password);
      }
    }
  }
</script>

<style scoped>
  .login-vue {
    position: relative;
    height: 100%;
    font-size: 1.6rem;
  }

  .reg-text {
    position: absolute;
    top: 40px;
    right: 20px;
  }

  .icon-img {
    width: 50px;
    height: 50px;
    position: relative;
    top: 100px;
    left: 50%;
    margin-left: -25px;
  }

  .form {
    position: relative;
    top: 150px;
  }

  .input {
    position: relative;
    display: flex;
    display: -webkit-flex;
    margin: 0px 25px;
    padding: 10px 20px 10px 0;
  }

  .input input {
    flex: 1;
    -webkit-flex: 1;
  }

  .input::before {
    content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    border-top: 1px solid #d9d9d9;
    color: #d9d9d9;
    transform-origin: 0 0;
    transform: scaleY(.5);
  }

  .icon-clear {
    display: inline-block;
    margin-left: 10px;
    line-height: 20px;
  }

  .btn {
    position: relative;
    top: 20px;
    margin: 0 25px;
  }

  .btn button {
    width: 100%;
    line-height: 45px;
    background-color: coral;
    color: #fff;
    font-weight: bold;
    border-radius: 2px;
  }

  .btn button:disabled {
    background-color: #d3d6dc;
  }

  .below {
    position: relative;
    display: flex;
    display: -webkit-flex;
    top: 40px;
    margin: 0 25px;
  }

  .below nav {
    flex: 1;
    -webkit-flex: 1;
    font-size: 1.4rem;
  }

  .below nav:last-child {
    text-align: right;
  }
</style>
