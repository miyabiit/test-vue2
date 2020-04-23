<template>
    <main id="catalog" class="order-1 order-md-2 col-12 col-md-9 py-0 px-0 pl-md-5 mt-3 mt-md-0 mx-0 bd-content" role="main">
      <!-- h2 class="p-2"><i class="icon-search"></i> 特集から探す</h2 -->
      <!-- div id="special_search" class="row row-eq-height mt-1 mb-4 mx-0">
        <div class="col-4 border p-2">
          <router-link class="d-block text-center clearfix p-3" :to="{ name: 'catlist', params: { Name: '新入荷'}}"><img src="/images/special01.jpg" class="d-block mx-auto mb-2"><span class="d-block">新入荷商品</span></router-link>
        </div>
        <div class="col-4 border p-2">
          <router-link class="d-block text-center clearfix p-3" :to="{ name: 'catlist', params: { Name: 'おすすめ'}}"><img src="/images/special02.jpg" class="d-block mx-auto mb-2"><span class="d-block">おすすめ商品</span></router-link>
        </div>
        <div class="col-4 border p-2">
          <router-link class="d-block text-center clearfix p-3" :to="{ name: 'catlist', params: { Name: '災害'}}"><img src="/images/special03.jpg" class="d-block mx-auto mb-2"><span class="d-block">災害支援商品</span></router-link>
        </div>
      </div -->
      <h2 class="p-2"><i class="icon-search"></i> 機種一覧から探す</h2>
      <div id="category_search" class="row row-eq-height mt-1 mx-0">
        <div class="col-4 border p-2">
          <router-link class="d-block text-center clearfix h-100 p-3" :to="{ name: 'speclist', params: { Spec: '掘削機'}}">
          <img src="/images/category01.jpg" class="d-block mx-auto mb-2"><span class="d-block">掘削機（バックホー・油圧ショベル）</span></router-link>
        </div>
        <div class="col-4 border p-2">
          <router-link class="d-block text-center clearfix h-100 p-3" :to="{ name: 'speclist', params: { Spec: 'レンタカー'}}">
          <img src="/images/category02.jpg" class="d-block mx-auto mb-2"><span class="d-block">レンタカー</span></router-link>
        </div>
        <div class="col-4 border p-2">
          <router-link class="d-block text-center clearfix h-100 p-3" :to="{ name: 'speclist', params: { Spec: '道路機械'}}">
          <img src="/images/category03.jpg" class="d-block mx-auto mb-2"><span class="d-block">道路機械</span></router-link>
        </div>
        <div class="col-4 border p-2">
          <router-link class="d-block text-center clearfix h-100 p-3" :to="{ name: 'speclist', params: { Spec: '解体'}}">
          <img src="/images/category01.jpg" class="d-block mx-auto mb-2"><span class="d-block">解体・林業・アタッチメント</span></router-link>
        </div>
        <div class="col-4 border p-2">
          <router-link class="d-block text-center clearfix h-100 p-3" :to="{ name: 'speclist', params: { Spec: '高所'}}">
          <img src="/images/category04.jpg" class="d-block mx-auto mb-2"><span class="d-block">高所作業車</span></router-link>
        </div>
        <div class="col-4 border p-2">
          <router-link class="d-block text-center clearfix h-100 p-3" :to="{ name: 'speclist', params: { Spec: '整地'}}">
          <img src="/images/category03.jpg" class="d-block mx-auto mb-2"><span class="d-block">整地・運搬機械</span></router-link>
        </div>
      </div>
      
      <div id="category_search_s" class="row row-eq-height mb-4 mx-0">
        <div class="col-4 border p-2">
          <router-link class="d-block text-center text-lg-left clearfix" :to="{ name: 'speclist', params: { Spec: '発電'}}">
          <img src="/images/category05.jpg" class="d-block d-lg-inline-block mx-auto pr-0 pr-lg-1"><span class="d-block d-lg-inline-block">発電・溶接・照明機器</span></router-link>
        </div>
        <div class="col-4 border p-2">
          <router-link class="d-block text-center  text-lg-left clearfix" :to="{ name: 'speclist', params: { Spec: 'コンプレッサ'}}">
          <img src="/images/category06.jpg" class="d-block d-lg-inline-block mx-auto pr-0 pr-lg-1"><span class="d-block d-lg-inline-block">コンプレッサ・エア機械</span></router-link>
        </div>
        <div class="col-4 border p-2">
          <router-link class="d-block text-center text-lg-left clearfix" :to="{ name: 'speclist', params: { Spec: 'ハウス'}}">
          <img src="/images/category07.jpg" class="d-block d-lg-inline-block mx-auto pr-0 pr-lg-1"><span class="d-block d-lg-inline-block">ハウス・備品</span></router-link>
        </div>
        <div class="col-4 border p-2">
          <router-link class="d-block text-center text-lg-left clearfix" :to="{ name: 'speclist', params: { Spec: '水中ポンプ'}}">
          <img src="/images/category10.jpg" class="d-block d-lg-inline-block mx-auto pr-0 pr-lg-1"><span class="d-block d-lg-inline-block">水中ポンプ・水処理機械</span></router-link>
        </div>
        <div class="col-4 border p-2">
          <router-link class="d-block text-center text-lg-left clearfix" :to="{ name: 'speclist', params: { Spec: 'コンクリート機器'}}">
          <img src="/images/category11.jpg" class="d-block d-lg-inline-block mx-auto pr-0 pr-lg-1"><span class="d-block d-lg-inline-block">コンクリート機器</span></router-link>
        </div>
        <div class="col-4 border p-2">
          <router-link class="d-block text-center text-lg-left clearfix" :to="{ name: 'speclist', params: { Spec: '特定現場'}}">
          <img src="/images/category17.jpg" class="d-block d-lg-inline-block mx-auto pr-0 pr-lg-1"><span class="d-block d-lg-inline-block">特定現場仕様</span></router-link>
        </div>
      </div>
      
      <h2 class="p-2"><i class="icon-books"></i> 参考資料</h2>
      <div id="top_rental" class="row row-eq-height mt-1 mb-4 mx-0">
        <div class="col-4 border p-2">
          <a href="/../document/general-conditions/index.html" class="d-block text-center clearfix h-100 p-3"><img src="/images/rental.jpg" class="d-block mx-auto mb-2"><span class="d-block">レンタル約款</span></a>
        </div>
        <div class="col-4 border p-2">
          <a href="/../document/rental-support/index.html" class="d-block text-center clearfix h-100 p-3"><img src="/images/support.jpg" class="d-block mx-auto mb-2"><span class="d-block">レンタル物件サポート特約制度</span></a>
        </div>
        <div class="col-4 border p-2">
          <a href="/../document/special-contract/index.html" class="d-block text-center clearfix h-100 p-3"><img src="/images/guarantee.jpg" class="d-block mx-auto mb-2"><span class="d-block">レンタル保障制度</span></a>
        </div>
        <div class="col-4 border p-2">
          <a href="/../document/law/index.html" class="d-block text-center clearfix h-100 p-3"><img src="/images/law.jpg" class="d-block mx-auto mb-2"><span class="d-block">法規</span></a>
        </div>
        <div class="col-4 border p-2">
          <a href="/../document/qualification/index.html" class="d-block text-center clearfix h-100 p-3"><img src="/images/certificate.jpg" class="d-block mx-auto mb-2"><span class="d-block">資格</span></a>
        </div>
        <div class="col-4 border p-2">
          <a href="/../document/unit/index.html" class="d-block text-center clearfix h-100 p-3"><img src="/images/unit.jpg" class="d-block mx-auto mb-2"><span class="d-block">単位</span></a>
        </div>
        <div class="col-4 border p-2">
          <a href="/../document/guide/index.html" class="d-block text-center clearfix h-100 p-3"><img src="/images/guide.jpg" class="d-block mx-auto mb-2"><span class="d-block">ご利用ガイド</span></a>
        </div>
      </div>
    </main>
</template>

<script>
  export default {
    data: function () {
      return {
      }
    },
    mounted: function (){
      this.$parent.category_id = null
    },
    methods: {
    },
    watch: {
    }
  }
</script>
