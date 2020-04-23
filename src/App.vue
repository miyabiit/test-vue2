<template>
<div id="app">
  <global-header/>
  <part-header/>
  <div class="container">
    <nav v-if="category_id" aria-label="breadcrumb" class="mt-3 mt-md-0 row">
      <ol class="breadcrumb col rounded-0">
        <div v-for="crumb in breadcrumbs" :key="crumb.name">
        <li v-if="!crumb.active" class="breadcrumb-item"><router-link :to="crumb.path">{{crumb.name}}</router-link>&nbsp;/&nbsp;</li>
        <li v-else class="breadcrumb-item active" aria-current="page">{{crumb.name}}</li>
        </div>
      </ol>
    </nav>
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
        categories: [],
        breadcrumbs: [{
          name: 'HOME',
          path: '',
          active: true
        }],
        category_id: null,
        active_page_title: null
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
    created: function () {
    },
    methods : {
      setBreadcrumbs: function (id) {
        for(var i=0; i<this.sortCategories.length; i++){
          if(this.sortCategories[i].id == id){
            this.breadcrumbs = [
              {
                name: 'HOME',
                path: '/',
                active: false
              },
              {
                name: this.sortCategories[i].name,
                path: '/speclist/' + this.sortCategories[i].name,
                active: true
              }
            ]
            break
          }
          for(var j=0; j<this.sortCategories[i].child.length; j++){
            if(this.sortCategories[i].child[j].id == id){
              this.breadcrumbs = [
                {
                  name: 'HOME',
                  path: '/',
                  active: false
                },
                {
                  name: this.sortCategories[i].name,
                  path: '/speclist/' + this.sortCategories[i].name,
                  active: false
                },
                {
                  name: this.sortCategories[i].child[j].name,
                  path: '',
                  active: true
                },
              ]
              break
            }
            for(var k=0; k<this.sortCategories[i].child[j].child.length; k++){
              if(this.sortCategories[i].child[j].child[k].id == id){
                this.breadcrumbs = [
                  {
                    name: 'HOME',
                    path: '/',
                    active: false
                  },
                  {
                    name: this.sortCategories[i].name,
                    path: '/speclist/' + this.sortCategories[i].name,
                    active: false
                  },
                  {
                    name: this.sortCategories[i].child[j].child[k].name,
                    path: '/list/' + this.sortCategories[i].child[j].child[k].id,
                    active: false
                  },
                  {
                    name: this.active_page_title,
                    path: '',
                    active: true
                  },
                ]
                break
              }   
            }
          }
        }
      }
    },
    computed: {
      sortCategories: function() {
        var cat = this.categories
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
          if(!cat2h[key].category_id){
            catout.push(cat2h[key]);
          }
        }
        return catout;
      }
    },
    watch: {
      'title': function (){
        this.$emit("updateHead")
      },
      'category_id': function () {
        this.setBreadcrumbs(this.category_id)
      },
      'active_page_title': function () {
        this.setBreadcrumbs(this.category_id)
      }
    }
  }
</script>
