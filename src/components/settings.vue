<template>
  <div>
    <m-header title="设置"></m-header>
    <section id="content">
      <cell-group>
        <cell text="账号" value="任口口和口" :showArrow="true"></cell>
        <cell text="账号与安全" :showArrow="true"></cell>
      </cell-group>

      <cell-group>
        <cell text="显示设置" :showArrow="true"></cell>
        <cell text="浏览设置" :showArrow="true"></cell>
        <cell text="消息设置" :showArrow="true"></cell>
        <cell text="音效" :showArrow="true"></cell>
        <cell text="隐私" :showArrow="true"></cell>
        <cell text="语言" value="中文简体" :showArrow="true"></cell>
        <cell text="翻译" value="跟随系统" :showArrow="true"></cell>
      </cell-group>

      <cell-group>
        <cell text="清除缓存" value="10.23M"></cell>
        <cell text="推荐给好友"></cell>
        <cell text="评分鼓励" value="任口口和口"></cell>
        <cell text="关于我们" :showArrow="true"></cell>
      </cell-group>

      <cell-group>
        <cell text="登出当前账号" :text-center="true" link="/login"></cell>
      </cell-group>

    </section>
  </div>
</template>

<script>
  import {CellGroup, Cell, MHeader} from './common'

  export default {
    name: "settings",
    components: {
      CellGroup,
      Cell,
      MHeader
    }
  }
</script>

<style scoped>

</style>
