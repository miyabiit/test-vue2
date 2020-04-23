<template>
  <main id="product" class="order-1 order-md-2 col-12 col-md-9 py-0 px-0 pl-md-5 mt-3 mt-md-0 mx-0 bd-content" role="main">
    <h2 id="product_parent" class="p-2"><i class="icon-bulldozer"></i>{{myTopCategory.name}}</h2>
    <div v-for="child in myTopCategory.child" v-bind:key="child.id">
      <h3 class="product_child py-2 px-3 font-weight-bold" data-toggle="collapse" href="#category1" role="button" aria-expanded="true" aria-controls="category1">{{child.name}}</h3>
      <div v-if="child.child.length > 0" id="category1" class="collapse row p-3 mx-0 show">
        <div class="col-12 col-md-4">
          <a href=""><img :src="categoryImage[child.id]" class="d-block w-100 product_child_border" :alt="child.name"></a>
        </div>
        <div class="col-12 col-md-8 mt-3 mt-md-0">
          <div v-for="children in child.child" v-bind:key="children.id">
            <router-link :to="{name: 'list', params: {Id: children.id}}" class="btn btn-outline-warning btn-block text-left btn-child">{{children.name}}</router-link>
          </div>
        </div>
      </div>
      <div v-else id="category1" class="collapse row p-3 mx-0 show">
        <div class="col-12 col-md-4">
          <a href=""><img :src="categoryImage[child.id]" class="d-block w-100 product_child_border" :alt="child.name"></a>
        </div>
        <div class="col-12 col-md-8 mt-3 mt-md-0">
          <router-link :to="{name: 'list', params: {Id: child.id}}" class="btn btn-outline-warning btn-block text-left btn-child">{{child.name}}</router-link>
        </div>
      </div>
    </div>
  </main>
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
                'id': null,
                'name': null,
                'child': []
              }
            ]
          }
        ],
        categoryImage: {}
      }
    },
    // props: ['categorySet', 'Spec'],
    props: {
      categorySet: {
        type: Array,
        require: true
      }
    },
    mounted () {
      this.sortCategories = this.categorySet
      this.setMyTopCategory()
      for(var i=0; i<this.myTopCategory.child.length; i++){
        if(this.myTopCategory.child[i].child.length > 0){
          this.getImagePath(this.myTopCategory.child[i].id, this.myTopCategory.child[i].child[0].id)
        }else{
          this.getImagePath(this.myTopCategory.child[i].id, this.myTopCategory.child[i].id)
        }
      }
      this.$parent.category_id = this.myTopCategory.id
      this.$parent.active_page_name = ''
    },
    methods: {
      kenkiImagePath: function (product_code,n) {
        return '/kenki_images/1/' + product_code + '-' + ('00' + (n+1)).slice(-2) + '.jpg'
      },
      setMyTopCategory: function (){
        var target = {}
        var targetItems = []
        var specName = this.$route.params.Spec
        targetItems = this.sortCategories.filter(function(item){
          if((item.name).indexOf(specName)>=0) return true
        })
        target = targetItems[0]
        this.myTopCategory = target       
      },
      getImagePath: function (category_id, id) {
        var myId = id
        var url = process.env.VUE_APP_URL + '/stock_products/search'
        var myToken = process.env.VUE_APP_TOKEN
        var myComId = process.env.VUE_APP_COMPANY_ID
        var param = {}
        param = {
          'limit': 100,
          'stock_product': {
              'category_id': myId,
              'company_id': myComId
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
          this.$set(this.categoryImage, category_id, this.kenkiImagePath(data[0].product.product_code,0))
        })
        .catch(e => console.error(e))
      },
    },
    watch: {
      categorySet(newSet){
        this.sortCategories = newSet
        this.setMyTopCategory()
        for(var i=0; i<this.myTopCategory.child.length; i++){
          if(this.myTopCategory.child[i].child.length > 0){
            this.getImagePath(this.myTopCategory.child[i].id, this.myTopCategory.child[i].child[0].id)
          }else{
            this.getImagePath(this.myTopCategory.child[i].id, this.myTopCategory.child[i].id)
          }
        }
      }
    }
    
  }
</script>
