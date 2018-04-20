<template>
  <div>
    <m-header>
      <div slot="header-left">
        <i class="fa fa-search"></i>
      </div>

      <div slot="header-center">
        <span class="title">我的</span>
      </div>

      <div slot="header-right">
        <i class="fa fa-search" style="margin-right: 15px"></i>
        <i class="fa fa-pencil"></i>
      </div>
    </m-header>

    <section id="content">

      <div class="avatar">
        <img src="../assets/img/avatar-me.jpg" alt="..."/>
        <div class="avatar-info">
          <h4>{{name}}</h4>
          <p>{{fans}}&nbsp粉丝</p>
        </div>

        <i class="fa fa-chevron-right"></i>
      </div>

      <CellGroup>
        <Cell icon="fa fa-cog" text="设置" link="/settings"></Cell>
      </CellGroup>

      <CellGroup>
        <Cell icon="fa fa-moon-o" text="夜间模式"></Cell>
        <Cell icon="fa fa-star-o" text="我的收藏"></Cell>
        <Cell icon="fa fa-qrcode" text="扫一扫"></Cell>
        <Cell icon="fa fa-moon-o" text="草稿箱"></Cell>
        <Cell icon="fa fa-hashtag" text="关注的话题"></Cell>
        <Cell icon="fa fa-headphones" text="客服中心" @click.native="foo"></Cell>
      </CellGroup>

      <CellGroup>
        <Cell icon="fa fa-gift" text="每日福利"></Cell>
      </CellGroup>
    </section>
  </div>
</template>

<script>
  import {MHeader, CellGroup, Cell} from './common'

  export default {
    name: "mine",
    components: {
      MHeader,
      CellGroup,
      Cell
    },
    data() {
      return {
        name: '',
        fans: 0
      }
    },
    methods: {
      foo() {
        this.$wui.toast({
          text: '测试文字',
        });
      }
    },
    created() {
      var user = {
        name: '任口口和口',
        fans: 74
      }

      this.name = user.name;
      this.fans = user.fans;
    }
  }
</script>

<style scoped>
  .avatar {
    position: relative;
    height: 88px;
    display: flex;
    padding: 15px;
    background-color: #fff;
    margin-bottom: 27px;
  }

  .avatar i {
    position: absolute;
    right: 15px;
    top: 50%;
    color: #bdbdbd;
    transform: translateY(-50%);
  }

  .avatar img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  .avatar-info {
    padding-left: 20px;
    flex: 1;
  }

  .avatar-info h4, .avatar-info p {
    line-height: 30px;
  }

  .avatar-info h4 {
    font-size: 1.8rem;
    font-weight: bold;
  }

  .avatar-info p {
    font-size: 1.3rem;
    font-weight: 500;
  }

</style>
