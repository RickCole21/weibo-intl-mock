<template>
  <div class="login-vue">
    <nav class="reg-text">
      <router-link to="/foo">注册</router-link>
    </nav>

    <img class="icon-img" src="../assets/img/icon-weibo.jpg" alt="...">

    <div class="form">
      <div class="input">
        <input type="text" v-model="username" placeholder="输入邮箱或者手机号" autocomplete="new-password">
        <i class="fa fa-times-circle" v-show="username" @click="username = ''"></i>
      </div>
      <div class="input">
        <input type="password" v-model="password" placeholder="输入密码" autocomplete="new-password">
        <i class="fa fa-times-circle" v-show="password" @click="password = ''"></i>
      </div>

      <div class="btn">
        <button :disabled="btnDisabled" @click="login">登入</button>
      </div>

      <div class="below">
        <nav>
          <router-link to="/foo">登录遇到问题？</router-link>
        </nav>
        <nav>
          <router-link to="/bar">手机短信登录</router-link>
        </nav>
      </div>
    </div>

    <divider>其他登录方式</divider>

    <footer>
      <div class="other">
        <img src="../assets/img/icon-qq.png" alt="...">
        <p>QQ</p>
      </div>
      <div class="other">
        <img src="../assets/img/icon-facebook.png" alt="">
        <p>Facebook</p>
      </div>
    </footer>

  </div>
</template>

<script>
  import Divider from './common/divider'

  export default {
    name: "login",
    components: {
      Divider
    },
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
    },
    methods: {
      login() {
        var loginData = {
          username: this.username,
          password: this.password
        };

        setTimeout(() => {
          this.$router.push('/');
        }, 500);
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
    margin-top: 150px;
  }

  .input {
    position: relative;
    display: flex;
    display: -webkit-flex;
    margin: 0px 25px;
    padding-right: 15px;
  }

  .input input {
    flex: 1;
    -webkit-flex: 1;
    padding: 10px 10px 10px 5px;
  }

  .input i {
    font-size: 1.4rem;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    color: #9c9c9c;
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

  .btn {
    position: relative;
    margin: 0 25px;
    padding: 20px 0;
  }

  .btn button {
    width: 100%;
    line-height: 45px;
    background-color: coral;
    color: #fff;
    font-weight: bold;
    border-radius: 2px;
    transition: background-color .15s;
    -webkit-transition: background-color .15s; /* Safari */
  }

  .btn button:disabled {
    background-color: #d3d6dc;
  }

  .btn button:active {
    background-color: #bf3300;
  }

  .below {
    position: relative;
    display: flex;
    display: -webkit-flex;
    margin: 0 25px;
  }

  .below nav {
    flex: 1;
    -webkit-flex: 1;
    font-size: 1.2rem;
  }

  .below nav a {
    color: #0070c7;
  }

  .below nav:last-child {
    text-align: right;
  }

  .divider {
    position: absolute;
    bottom: 140px;
  }

  footer {
    position: absolute;
    bottom: 0;
    height: 140px;
    width: 100%;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
  }

  .other {
    height: 50px;
    width: 50px;
    text-align: center;
    font-size: 1rem;
    color: #9c9c9c;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid transparent;
  }

  .other:active {
    background-color: #f5f5f500;
    border-color: #e6e6e6;
  }

  .other p {
    margin-top: 5px;
    font-size: 1rem;
  }

  .other:first-child {
    margin-right: 20px;
  }

  .other:last-child {
    margin-left: 20px;
  }

  .other img {
    width: 30px;
    height: 30px;
  }
</style>
