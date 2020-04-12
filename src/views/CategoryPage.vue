<template>
  <main id="product" class="order-1 order-md-2 col-12 col-md-9 py-0 px-0 pl-md-5 mt-3 mt-md-0 mx-0 bd-content" role="main">
    <h2 id="product_parent" class="p-2"><i class="icon-bulldozer"></i> 掘削機（バックホー・油圧ショベル）</h2>
    <h3 class="product_child py-2 px-3 font-weight-bold" data-toggle="collapse" href="#category1" role="button" aria-expanded="true" aria-controls="category1">0.12m<span class="supText">3</span>（2.5ｔクラス）未満</h3>
    <div id="category1" class="collapse row p-3 mx-0 show">
      <div class="col-12 col-md-4">
        <a href="product_list.html"><img src="images/product/img1.png" class="d-block w-100 product_child_border" alt="0.12m3（2.5ｔクラス）未満"></a>
      </div>
      <div class="col-12 col-md-8 mt-3 mt-md-0">
        <a href="product_list.html" class="btn btn-outline-warning btn-block text-left btn-child">0.007m<span class="supText">3</span>（0.3ｔクラス）バックホー</a>
        <a href="product_list.html" class="btn btn-outline-warning btn-block text-left btn-child">0.03m<span class="supText">3</span>（0.9tクラス）バックホー</a>
        <a href="product_list.html" class="btn btn-outline-warning btn-block text-left btn-child">0.07m<span class="supText">3</span>（1.5ｔクラス）バックホー</a>
        <a href="product_list.html" class="btn btn-outline-warning btn-block text-left btn-child">0.1m<span class="supText">3</span>（2tクラス）バックホー</a>
      </div>
    </div>
    <h3 class="product_child py-2 px-3 font-weight-bold" data-toggle="collapse" href="#category2" role="button" aria-expanded="true" aria-controls="category2">0.12m<span class="supText">3</span>（2.5ｔクラス）～0.25m<span class="supText">3</span>（7ｔクラス）未満</h3>
    <div id="category2" class="collapse row p-3 mx-0 show">
      <div class="col-12 col-md-4">
        <a href="product_list.html"><img src="images/product/img3.png" class="d-block w-100 product_child_border" alt="0.12m3（2.5ｔクラス）～0.25m3（7ｔクラス）未満"></a>
      </div>
      <div class="col-12 col-md-8 mt-3 mt-md-0">
        <a href="product_list.html" class="btn btn-outline-warning btn-block text-left btn-child">0.12m<span class="supText">3</span>（2.5tクラス）バックホー</a>
        <a href="product_list.html" class="btn btn-outline-warning btn-block text-left btn-child">0.14m<span class="supText">3</span>（3tクラス）バックホー</a>
        <a href="product_list.html" class="btn btn-outline-warning btn-block text-left btn-child">0.18m<span class="supText">3</span>（4tクラス）バックホー</a>
        <a href="product_list.html" class="btn btn-outline-warning btn-block text-left btn-child">0.2m<span class="supText">3</span>（5tクラス）バックホー</a>
      </div>
    </div>
    <h3 class="product_child py-2 px-3 font-weight-bold" data-toggle="collapse" href="#category3" role="button" aria-expanded="true" aria-controls="category3">0.25m<span class="supText">3</span>（7ｔクラス）以上</h3>
    <div id="category3" class="collapse row p-3 mx-0 show">
      <div class="col-12 col-md-4">
        <a href="product_list.html"><img src="images/product/img1.png" class="d-block w-100 product_child_border" alt="0.25m3（7ｔクラス）以上"></a>
      </div>
      <div class="col-12 col-md-8 mt-3 mt-md-0">
        <a href="product_list.html" class="btn btn-outline-warning btn-block text-left btn-child">0.25m<span class="supText">3</span>（7ｔクラス）バックホー</a>
        <a href="product_list.html" class="btn btn-outline-warning btn-block text-left btn-child">0.4m<span class="supText">3</span>（12ｔクラス）バックホー</a>
        <a href="product_list.html" class="btn btn-outline-warning btn-block text-left btn-child">0.45m<span class="supText">3</span>（13ｔクラス）バックホー</a>
        <a href="product_list.html" class="btn btn-outline-warning btn-block text-left btn-child">0.7m<span class="supText">3</span>（20tクラス）バックホー</a>
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    data: function () {
      return {
        categories: [],
        
      }
    }
  }
</script>