<template>
  <div>
    <div className="avatar-wrapper">
      <div className="avatar">
        <img src="../assets/img/avatar.jpg" alt="..."/>
      </div>
      <div className="avatar-info">
        <h4>RickCole</h4>
        <p>已消费：345.5$</p>
      </div>
    </div>

    <CellGroup>
      <Cell icon="fa fa-cog" text="Settings"></Cell>
    </CellGroup>

    <CellGroup>
      <Cell icon="fa fa-moon-o" text="Night Mode"></Cell>
      <Cell icon="fa fa-star-o" text="Favourites"></Cell>
      <Cell icon="fa fa-qrcode" text="Scanning QR Code"></Cell>
      <Cell icon="fa fa-moon-o" text="Drafts"></Cell>
      <Cell icon="fa fa-hashtag" text="My Topics"></Cell>
      <Cell icon="fa fa-headphones" text="Help & Support"></Cell>
    </CellGroup>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
  export default {
    name: ""
  }
</script>

<style scoped>
  .avatar-wrapper {
    height: 90px;
    margin-top: 10px;
    display: flex;
    padding: 15px;
    background-color: #fff;
  }

  .avatar-wrapper:after {
    content: '>';
    position: absolute;
    right: 15px;
    top: 45px;
    color: #bdbdbd;
  }

  /*.avatar {*/
  /*width:;*/
  /*}*/

  .avatar img {
    width: 60px;
    height: 60px;
    border-radius: 5px;
  }

  .avatar-info {
    padding-left: 20px;
  }

</style>
