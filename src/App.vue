<template>
<div id="app">
  <global-header/>
  <part-header/>
  <div class="container">
    <div class="row flex-xl-nowrap">
      <router-view name="mainview" :categorySet="sortCategories"/>
      <div class="order-2 order-md-1 col-12 col-md-3 px-0 bd-sidebar">
        <item-search/>
        <router-view name="side" :categorySet="sortCategories"/>
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
        keywords: "建設機械,土木機械,掘削機,バックホー,油圧ショベル,レンタカー,道路機械,解体,林業,アタッチメント,高所作業車,整地,運搬機械",
        categories: []
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
      //meta
      this.$emit("updateHead")
      console.log("App mounted :" + this.title)
      console.log("App mounted :" + this.keywords)
      //categories
      var url = process.env.VUE_APP_URL + '/categories/search'
      var myToken = process.env.VUE_APP_TOKEN
      var myComId = process.env.VUE_APP_COMPANY_ID
      var params = {'limit': 1000, 'company_id': myComId}
      var myHeaders = {'Content-Type': 'application/json', 'Authorization': `Token ${myToken}` }
      fetch(url, {
        method: "POST",
        mode: "cors",
        headers : myHeaders,
        body: JSON.stringify(params)
      })
      .then(res => {
        return res.json()
      })
      .then(data => {
        this.categories = data
      })
      .catch(e => console.error(e))
    },
    computed: {
      sortCategories: function() {
        var cat = this.categories;
        var cat2h = {}; // idをキーにしたhash
        var mother_key = 0;
        for(var i=0;i<cat.length;i++){
          cat[i].show = false;
          cat[i].child = [];
          cat2h[cat[i].id] = cat[i];
        }
        for(i=0;i<cat.length;i++){
          mother_key = cat[i].category_id;
          if(mother_key){
            cat2h[mother_key].child.push(cat[i]);
          }
        }
        var catout = []
        for(var key in cat2h){
          //if(cat2h[key].position == 1){
          if(!cat2h[key].category_id){
            catout.push(cat2h[key]);
          }
        }
        return catout;
      }
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
