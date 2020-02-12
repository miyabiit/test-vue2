<template>
  <div id="app">
  <el-container>
    <el-header height="100px">
    <nav id="top-contact" class="d-none d-lg-block">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-9">
          お気軽にお問い合わせください。
          お電話の場合 <a href="tel:0552377801" id="top-contact-tel">055-237-7801</a>
          受付時間7:00〜18:30（日・祝日を除く）
          </div>
          <div class="col-12 col-md-3 text-left text-md-right w-auto">メールでのお問い合わせは<a href="contact/index.php">こちら<i class="icon-right-open"></i></a></div>
        </div>
      </div>
    </nav>
    <nav class="navbar navbar-expand-lg pt-0">
      <div class="container">
        <a id="logo" class="navbar-brand" href="index.html">甲陽建機</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarMenu">
          <ul class="navbar-nav nav nav-pills nav-fill w-100">
            <li class="nav-item active">
              <a class="nav-link active" href="products/index.html">取扱商品</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="company/outline/index.html">会社情報</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="office/index.html">営業所一覧</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact/index.php">お問い合わせ</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div id="sub-menu">
      <div id="sub-menu-content" class="container text-white">
        <ul class="list-group list-group-horizontal-sm py-2">
          <li class="list-group-item p-0"><a href="catalog.html" class="py-1 px-4 active">商品カタログ</a></li>
          <li class="list-group-item p-0"><a href="products/color-simulation/index.html" class="py-1 px-4">外装カラーシミュレーション</a></li>
          <li class="list-group-item p-0"><a href="products/used/index.html" class="py-1 px-4">中古機械・ハウス販売</a></li>
        </ul>
      </div>
    </div>

<div id="top_head" class="catalog_bg bg-center position-relative overflow-hidden py-3 py-md-5 mb-md-3 text-center">
  <div class="p-lg-5 mx-auto my-5">
    <h1 class="font-weight-normal">商品カタログ<span>CATALOG</span></h1>
  </div>
</div>

    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-col :span="24">
          <el-menu default-active="1">
            <el-menu-item index="1">
              <router-link to="/main"><span>main1</span></router-link>
            </el-menu-item>
            <el-menu-item index="2">
              <router-link to="/side"><span>main2</span></router-link>
            </el-menu-item>
            <el-menu-item index="3">
              <router-link to="/head"><span>main3</span></router-link>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
  </div>
</template>

<script>
</script>

<style>
    @import "assets/css/bootstrap.min.css";
    @import "assets/css/fontello.css";
    @import "assets/css/site1.css";
</style>
