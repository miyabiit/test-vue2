<template>
  <main id="product" class="order-1 order-md-2 col-12 col-md-9 py-0 px-0 pl-md-5 mt-3 mt-md-0 mx-0 bd-content" role="main">
    <!-- h2 id="product_child" class="p-2 mb-0 d-none"><i class="icon-bulldozer"></i>掘削機械</h2 -->
    <!-- 並べ替え -->
    <!--div class="row my-2">
      <div class="col-12 px-0 text-center">
        <div class="btn-group btn-group-toggle head_sorter" data-toggle="buttons">
          <span class="d-inline-block p-2">メーカー名</span>
          <label class="btn btn-light">
            <input type="radio" name="sorter" id="company_sort_asc" autocomplete="off">▲
          </label>
          <label class="btn btn-light">
            <input type="radio" name="sorter" id="company_sort_desc" autocomplete="off">▼
          </label>
          <span class="d-inline-block p-2">型式</span>
          <label class="btn btn-light">
            <input type="radio" name="sorter" id="type_sort_asc" autocomplete="off">▲
          </label>
          <label class="btn btn-light">
            <input type="radio" name="sorter" id="type_sort_desc" autocomplete="off">▼
          </label>
          <span class="d-inline-block p-2"></span>
          <label class="btn btn-light active">
            <input type="radio" name="sorter" id="category_sort" autocomplete="off">カテゴリ順
          </label>
          <span class="d-inline-block p-2"></span>
        </div>
        <div class="form-check form-check-inline head_sorter">
          <input class="form-check-input" type="checkbox" id="charter" value="1">
          <label class="form-check-label" for="charter">チャーター品も含める</label>
        </div>
      </div -->
      <!-- pagination -->
      <!-- div class="col-12 text-center mt-2">
        <div class="btn-group btn-group-toggle head_sorter" data-toggle="buttons">
          <label class="btn btn-light">
            <input type="radio" name="pagination" id="pagination_prev" autocomplete="off">&lt;
          </label>
          <label class="btn btn-light">
            <input type="radio" name="pagination" id="pagination_1" autocomplete="off">1
          </label>
          <label class="btn btn-light">
            <input type="radio" name="pagination" id="pagination_2" autocomplete="off">2
          </label>
          <label class="btn btn-light">
            <input type="radio" name="pagination" id="pagination_3" autocomplete="off">3
          </label>
          <label class="btn btn-light">
            <input type="radio" name="pagination" id="pagination_next" autocomplete="off">&gt;
          </label>
        </div>
      </div>
    </div -->

    <div id="product_child_list" class="row p-3 mx-0">
      <div class="col-12">
        <div v-for="product in filtered" v-bind:key="product.id">
          <div v-if="!product.isCharter">            
            <router-link :to="{ name: 'single', params: {Id: product.id}}" class="btn btn-block text-left btn-child-list">    
              <div class="row align-items-center">
                <div class="col-5 col-sm-2">
                  <img :src="'/kenki_images/1/' + product.product.product_code + '-01.jpg'" class="d-block w-100 border" :alt="product.product.title">
                  <span class="d-block netis text-center" v-if="product.product.netis">NETIS</span>
                </div>
                <div class="col-7 col-sm-10">
                  <div class="row product_child_list_detail">
                    <div class="col-12 font-weight-bold pb-1">{{product.product.title}}</div>
                    <div class="col-12">メーカー：{{product.product.manufacture_name}}</div>
                    <div class="col-12">呼称：{{product.product.product_short_name}}</div>
                    <div class="col-12">型式：{{product.product.product_model_name}}</div>
                    <div class="col-12">商品コード：{{product.product.product_name}}</div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
          <div v-else>
            <router-link :to="{ name: 'singleCharter', params: {CharterId: product.id}}" class="btn btn-block text-left btn-child-list charter position-relative">    
              <div class="row align-items-center">
                <div class="col-5 col-sm-2">
                  <img :src="'/kenki_images/1/' + product.product.product_code + '-01.jpg'" class="d-block w-100 border" :alt="product.product.title">
                  <span class="d-block netis text-center" v-if="product.product.netis">NETIS</span>
                </div>
                <div class="col-7 col-sm-10">
                  <div class="row product_child_list_detail">
                    <div class="col-12 font-weight-bold pb-1">{{product.product.title}}</div>
                    <div class="col-12">メーカー：{{product.product.manufacture_name}}</div>
                    <div class="col-12">呼称：{{product.product.product_short_name}}</div>
                    <div class="col-12">型式：{{product.product.product_model_name}}</div>
                    <div class="col-12">商品コード：{{product.product.product_name}}</div>
                  </div>
                </div>
              </div>
              <!-- div class="position-absolute text-right comp">KL/DD/SA/CL/OT</div -->
            </router-link>            
          </div>
        </div>
      </div>
    </div>
    <!-- pagination -->
    <!--div class="row m-2 mt-3">
      <div class="col-12 text-center">
        <div class="btn-group btn-group-toggle head_sorter" data-toggle="buttons">
          <label class="btn btn-light">
            <input type="radio" name="pagination" id="pagination_prev" autocomplete="off">&lt;
          </label>
          <label class="btn btn-light">
            <input type="radio" name="pagination" id="pagination_1" autocomplete="off">1
          </label>
          <label class="btn btn-light">
            <input type="radio" name="pagination" id="pagination_2" autocomplete="off">2
          </label>
          <label class="btn btn-light">
            <input type="radio" name="pagination" id="pagination_3" autocomplete="off">3
          </label>
          <label class="btn btn-light">
            <input type="radio" name="pagination" id="pagination_next" autocomplete="off">&gt;
          </label>
        </div>
      </div>
    </div -->
  </main>
</template>

<script>
  export default {
    data: function () {
      return {
        filtered: []
      }
    },
    methods: {
      setParams: function (searchClass, comId = 1, key = '', id = '', name = ''){
        // key -- search box
        // id --- category_id
        // name - sub_categories ex) tag 
        var param = {};
        if(id){
          param = {
            'limit': 100,
            [searchClass]: {
                'category_id': id,
                'company_id': comId
            }
          }
        }
        else if(name){
          param = {
            'limit': 100, 
            [searchClass]: {
              'sub_categories': {
                'name': name
              },
              'company_id': comId
            }
          }          
        }
        else{
          param = {
            'limit': 100, 
            [searchClass]: {
              'product': {
                'title': key
              },
              'company_id': comId
            }
          }
        }
        return param 
      },
      filterProducts: function () {
        var url = process.env.VUE_APP_URL + '/stock_products/search';
        var myToken = process.env.VUE_APP_TOKEN;
        var myComId = process.env.VUE_APP_COMPANY_ID;
        var myKey = this.$route.params.Keyword;
        var myId = this.$route.params.Id;
        var myName = this.$route.params.Name;
        var param = {};
        param = this.setParams('stock_product', myComId, myKey, myId, myName)
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
          for(var i=0;i<data.length;i++){
            data[i]['isCharter'] = false
          }
          this.filtered = data
        })
        .catch(e => console.error(e))
        
        //add chartered_stock_product
        url = process.env.VUE_APP_URL + '/chartered_stock_products/search';
        param = this.setParams('stock_product', myComId, myKey, myId, myName)
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
          for(var i=0;i<data.length;i++){
            data[i]['isCharter'] = true
          }
          this.filtered = this.filtered.concat(data)
        })
        .catch(e => console.error(e))
      }
    },
    mounted () {
      this.filterProducts()
      this.$parent.category_id = this.$route.params.Id
      this.$parent.active_page_title = ''
    },
    watch: {
      '$route': 'filterProducts'
    },
    beforeRouteUpdate(to, from, next){
      next()
      this.$parent.category_id = this.$route.params.Id
      this.$parent.active_page_title = ''
    }
  }
</script>
