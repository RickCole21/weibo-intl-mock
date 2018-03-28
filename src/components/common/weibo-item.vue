<template>
  <div class="weibo-item">

    <header>
      <div class="avatar">
        <img :src="weibo.avatar" alt="...">
      </div>
      <div class="content">
        <div class="row weibor">{{weibo.weibor}}</div>
        <div class="row status">
          <small>{{weibo.time}}</small>
          <small>{{weibo.via}}</small>
        </div>
      </div>
      <div class="more">
        <i class="fa fa-chevron-down"></i>
      </div>
    </header>

    <main>
      <p>{{weibo.text}}</p>
    </main>

    <div class="media">
      <img v-for="media in weibo.media" :src="media.src" alt="...">
    </div>

    <footer>
      <div class="tool">
        <i class="fa fa-heart-o"></i><span>{{weibo.like}}</span>
      </div>
      <div class="tool">
        <i class="fa fa-comment-o"></i><span>{{weibo.comment}}</span>
      </div>
      <div class="tool">
        <i class="fa fa-repeat"></i><span>{{weibo.repost}}</span>
      </div>
      <div class="tool">
        <i class="fa fa-share-alt"></i>
      </div>
    </footer>

  </div>
</template>

<script>
  export default {
    name: "weibo-item",
    props: ['weibo']
  }
</script>

<style scoped>
  .weibo-item {
    padding: 15px 15px 0 15px;
    background-color: #fff;
    margin-top: 10px;
    position: relative;
  }

  .weibo-item:first-child {
    margin-top: 0;
  }

  header {
    padding-bottom: 10px;
    display: flex;
    display: -webkit-flex;
  }

  .avatar {
    display: flex;
    display: -webkit-flex;
    justify-items: center;
    align-items: center;
  }

  .avatar img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid #ececec;
  }

  .content {
    flex: 1;
    padding-left: 15px;
  }

  .content .row {
    height: 50%;
    line-height: 18px;
  }

  .content .weibor {
    font-size: 1.4rem;
    font-weight: 500;
    padding-bottom: 2px;
  }

  .content .status {
    color: #9c9c9c;
    padding-top: 2px;
    font-size: 1.2rem;
    font-weight: 450;
  }

  .content .status small:last-child {
    margin-left: 5px;
  }

  .more {
    height: 30px;
    line-height: 30px;
    width: 30px;
    text-align: center;
    position: absolute;
    right: 10px;
    top: 5px;
    color: #9c9c9c;
    font-size: 1.2rem;
  }

  main {
    padding-bottom: 10px;
    font-size: 1.8rem;
    line-height: 2.2rem;
  }

  .media {
    display: flex;
    display: -webkit-flex;
    flex-wrap: wrap;
  }

  .media img {
    width: 33.3%;
    height: 33.3%;
    padding: 1px;
  }

  footer {
    display: table;
    position: relative;
    width: 100%;
    height: 45px;
    line-height: 45px;
    margin-top: 10px;
  }

  footer::before {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 1px;
    border-top: 1px solid #d9d9d9;
    color: #d9d9d9;
    transform-origin: 0 0;
    transform: scaleY(.5);
  }

  .tool {
    display: table-cell;
    padding-left: 20px;
    color: #808080;
  }

  .tool i {
    position: relative;
    top: 1px;
    font-size: 1.6rem;
  }

  .tool span {
    margin-left: 8px;
  }


</style>
