<template>
  <main id="product" class="order-1 order-md-2 col-12 col-md-9 py-0 px-0 pl-md-5 mt-3 mt-md-0 mx-0 bd-content" role="main">
    <h2 id="product_parent" class="p-2"><i class="icon-bulldozer"></i>{{myTopCategory.name}}</h2>
    <div v-for="child in myTopCategory" v-bind:key="child.id">
      <h3 class="product_child py-2 px-3 font-weight-bold" data-toggle="collapse" href="#category1" role="button" aria-expanded="true" aria-controls="category1">{{child.name}}</h3>
      <div id="category1" class="collapse row p-3 mx-0 show">
        <div class="col-12 col-md-4">
          <a href=""><img :src="child.image" class="d-block w-100 product_child_border" :alt="child.name"></a>
        </div>
        <div class="col-12 col-md-8 mt-3 mt-md-0">
          <router-link v-for="childlen in child.child" :to="{ name: 'list', params: {Id: childlen.id}}" class="btn btn-outline-warning btn-block text-left btn-child">{{childlen.name}}</router-link>
        </div>
      </div>
    </div>
  </main>
  <!-- main id="product" class="order-1 order-md-2 col-12 col-md-9 py-0 px-0 pl-md-5 mt-3 mt-md-0 mx-0 bd-content" role="main">
    <h2 id="product_parent" class="p-2"><i class="icon-bulldozer"></i>dddddddddd</h2>
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
  </main -->
</template>

<script>
  export default {
    data: function () {
      return {
        categoryImages: [],
        sortCategories: [],
        myTopCategory: [
          {
            'id': null,
            'name': null,
            'image': '',
            'child': [
              {
                'id': null
                'name': null
              }
            ]
          }
        ],
      }
    },
    props: {
      categorySet: {
        type: Array,
        require: true
      },
      Spec: {
        type: String,
        require: true
      }
    },
    mounted () {
      this.sortCategories = this.categorySet
      setImages()
    },
    methods: {
      kenkiImagePath: function (product_code,n) {
        return '/kenki_images/1/' + product_code + '-' + ('00' + (n+1)).slice(-2) + '.jpg'
      },
      setImages: function () {
        var myId = null
        var url = process.env.VUE_APP_URL + '/stock_products/search'
        var myToken = process.env.VUE_APP_TOKEN
        var myComId = process.env.VUE_APP_COMPANY_ID
        var param = {}
        for(var i=0; i<this.myTopCategory.length; i++){
          myId = this.myTopCategory.child[i].child[0].id
          param = {
            'limit': 1,
            'stock_product': {
                'category_id': myId,
                'company_id': comId
            }
          }
          fetch(url, {
            method: "POST",
            mode: "cors",
            headers:  {
              'Content-Type': 'application/json',
              'Authorization': `Token ${myToken}`
            },
            body: JSON.stringify(param)
          })
          .then(res => {
            return res.json()
          })
          .then(data => {
            this.myTopCategory.child[i].image = kenkiImagePath(data.product.product_code,1)
          })
          .catch(e => console.error(e))
        }    
      }
    },
    computed: {
      myTopCategory: function (){
        var target = {}
        var targetItems = []
        var specName = this.Spec
        targetItems = this.sortCategories.filter(function(item){
          if((item.name).indexOf(specName)>=0) return true
        })
        target = targetItems[0]
        return target        
      }
    },
    watch: {
      categorySet(newSet){
        this.sortCategories = newSet
        setImages()
      }
    }
    
  }
</script>