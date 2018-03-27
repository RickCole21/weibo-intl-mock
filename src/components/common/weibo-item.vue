<!--<template>-->
<!--<div class="weibo-item-vue">-->
<!--<header>-->
<!--<div class="avatar">-->
<!--<img src="../../assets/img/avatar.jpg" alt="...">-->
<!--</div>-->
<!--<div class="content">-->
<!--<div class="row weibor">NFL橄榄球</div>-->
<!--<div class="row status">-->
<!--<small>6分钟前</small>-->
<!--<small>iPhone客户端</small>-->
<!--</div>-->
<!--</div>-->
<!--<div class="more">-->
<!--<i class="fa fa-chevron-down"></i>-->
<!--</div>-->
<!--</header>-->
<!--<main>-->
<!--<p>有关小奥德尔-贝克汉姆（Odell Beckham Jr.）在纽约巨人未来的问题暂时还会持续发酵。贝克汉姆的场外问题和交易流言现在成为人们谈论的话题，他的续约进展将会成为休赛期最值得关注的发展。-->
<!--NFL官网记者伊恩-拉波波特（Ian Rapoport）周一报道称小贝在签下长约前不会出场打球。“奥德尔-贝克汉姆在没有签下新合同的情况下不会出场，无论是和巨人还是和其他球队，”-->
<!--而昨天巨人老板约翰-玛拉（John Mara）刚刚表示过队中没有球员是不能被交易的。玛拉还表示球队将会一直听取交易报价，但是他个人并不希望交易小贝。-->
<!--拉波波特指出如果巨人最终决定交易这位他们最具天赋的球员，那么付出巨大代价得到小贝的新球队必须首先和小贝签下长约。-->
<!--在巨人本赛季仍然能够便宜使用小贝并且在之后两年能够对他打上特权标签的情况下，威胁罢训罢赛是小贝这方现在唯一的筹码。-->
<!--据纽约当地媒体报道洛杉矶公羊已经对交易小贝表达了兴趣，而小贝大学时代的队友，目前效力于克利夫兰布朗的外接手贾维斯-兰德里（Jarvis-->
<!--Landry）则在推特上希望小贝能够加入布朗。但是据知情人士透露目前巨人无意交易小贝。</p>-->
<!--</main>-->
<!--<div class="media">-->
<!--<img src="../../assets/img/avatar.jpg" alt="...">-->
<!--<img src="../../assets/img/avatar.jpg" alt="...">-->
<!--<img src="../../assets/img/avatar.jpg" alt="...">-->
<!--<img src="../../assets/img/avatar.jpg" alt="...">-->
<!--<img src="../../assets/img/avatar.jpg" alt="...">-->
<!--<img src="../../assets/img/avatar.jpg" alt="...">-->
<!--<img src="../../assets/img/avatar.jpg" alt="...">-->
<!--<img src="../../assets/img/avatar.jpg" alt="...">-->
<!--<img src="../../assets/img/avatar.jpg" alt="...">-->
<!--</div>-->
<!--<footer>-->
<!--<div class="tool">-->
<!--<i class="fa fa-heart-o"></i><span>25</span>-->
<!--</div>-->
<!--<div class="tool">-->
<!--<i class="fa fa-comment-o"></i><span>5454</span>-->
<!--</div>-->
<!--<div class="tool">-->
<!--<i class="fa fa-repeat"></i><span>54</span>-->
<!--</div>-->
<!--<div class="tool">-->
<!--<i class="fa fa-share-alt"></i>-->
<!--</div>-->
<!--</footer>-->
<!--</div>-->
<!--</template>-->

<template>
  <div class="weibo-item-vue">

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
  .weibo-item-vue {
    padding: 15px 15px 0 15px;
    background-color: #fff;
    margin-top: 10px;
    position: relative;
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
  }

  .content .status small:last-child {
    margin-left: 15px;
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
