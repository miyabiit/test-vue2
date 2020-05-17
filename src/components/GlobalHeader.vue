<template>
<div>
    <nav id="top-contact" class="d-none d-lg-block">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-9">
          お気軽にお問い合わせください。
          お電話の場合 <a href="tel:0552377801" id="top-contact-tel">055-237-7801</a>
          受付時間7:00〜18:30（日・祝日を除く）
          </div>
          <div class="col-12 col-md-3 text-left text-md-right w-auto">メールでのお問い合わせは<a href="/../contact/index.php">こちら<i class="icon-right-open"></i></a></div>
        </div>
      </div>
    </nav>
    <nav class="navbar navbar-expand-lg pt-0">
      <div class="container">
        <a id="logo" class="navbar-brand" href="/../index.html">甲陽建機</a>
        <button class="navbar-toggler" v-on:click="toggleList(menu)" type="button">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div v-if="mobileShow(menu.show)" class="expand navbar-collapse" :aria-expanded="menu.show" id="navbarMenu">
          <ul class="navbar-nav nav nav-pills nav-fill w-100">
            <li class="nav-item active">
              <a class="nav-link active" href="/products/">取扱商品</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/../company/outline/index.html">会社情報</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/../office/index.html">営業所一覧</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/../contact/index.php">お問い合わせ</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</div>
</template>

<script>
  export default {
    data: function (){
      return {
        menu : {
          show: false
        }
      }
    },
    methods: {
      toggleList: function (menu){
        menu.show = !menu.show
      },
      mobileShow: function (status){
        var mq_mode = this.$mq
        console.log("vue-mq",this.$mq)
        if(mq_mode==='pc'){
          return true
        }else{
          return status
        }
      }
    }
  }
</script>

