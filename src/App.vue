<template>
<div id="app">
  <global-header/>
  <part-header/>
  <div class="container">
    <div class="row flex-xl-nowrap">
      <router-view name="mainview"/>
      <div class="order-2 order-md-1 col-12 col-md-3 px-0 bd-sidebar">
        <item-search/>
        <router-view name="side"/>
      </div>
    </div>
  </div>
  <global-footer/>
</div>
</template>

<script>
  import PartHeader from '@/components/PartHeader';
  import ItemSearch from '@/components/ItemSearch';
  import GlobalHeader from '@/components/GlobalHeader';
  import GlobalFooter from '@/components/GlobalFooter';

  export default {
    name: 'App',
    components: {
      PartHeader,
      ItemSearch,
      GlobalHeader,
      GlobalFooter
    },
    data: function () {
      return {
        title: "商品カタログ",
        description: "建設機械レンタルの甲陽建機リース株式会社です。当社で取り扱いのある商品のカタログを掲載しています。各種性能表が掲載されており、カタログPDFファイルをダウンロードすることもできます。機種一覧からカテゴリごとに分類された商品を選択することもできますし、フリーワード検索にも対応しております。",
        keywords: "建設機械,土木機械,掘削機,バックホー,油圧ショベル,レンタカー,道路機械,解体,林業,アタッチメント,高所作業車,整地,運搬機械"
      }
    },
    head: {
      title: function () {
        return {
          inner: this.title
        }
      },
      meta: function () {
        return [
          {hid: 'description', name: 'description', content: this.description},
          {hid: 'keywords', name: 'keywords', content: this.keywords}
        ]
      }
    },
    mounted : function () {
       this.$emit("updateHead");
       console.log("App mounted :" + this.title)
       console.log("App mounted :" + this.keywords)
    },
    watch: {
      'title': function (){
        console.log("App watch :" + this.title)
        console.log("App watch :" + this.keywords)
        this.$emit("updateHead");
      }
    }
  }
</script>
