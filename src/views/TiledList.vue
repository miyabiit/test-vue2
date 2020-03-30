<template>
  <main id="product" class="order-1 order-md-2 col-12 col-md-9 py-0 px-0 pl-md-5 mt-3 mt-md-0 mx-0 bd-content" role="main">
    <!-- h2 id="product_child" class="p-2 mb-0 d-none"><i class="icon-bulldozer"></i>掘削機械</h2 -->
    <!-- 並べ替え -->.
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
        <!-- a href="product.html" class="btn btn-block text-left btn-child-list">
          <div class="row align-items-center">
            <div class="col-5 col-sm-2"><img src="@/assets/images/product/img3.png" class="d-block w-100 border" alt="バックホー後方小旋回"><span class="d-block netis text-center">NETIS</span></div>
            <div class="col-7 col-sm-10">
              <div class="row product_child_list_detail">
                <div class="col-12 font-weight-bold pb-1">0.007m3バックホー後方小旋回 PC01</div>
                <div class="col-12">メーカー：ヤンマー</div>
                <div class="col-12">呼称：0.03</div>
                <div class="col-12">型式：SV08-1</div>
                <div class="col-12">商品コード：VBA 030AB</div>
              </div>
            </div>
          </div>
        </a -->
        <!-- a href="product.html" class="btn btn-block text-left btn-child-list charter position-relative">
          <div class="row align-items-center">
            <div class="col-5 col-sm-2"><img src="/images/product/img3.png" class="d-block w-100 border" alt="バックホー後方小旋回"><span class="d-block netis text-center">NETIS</span></div>
            <div class="col-7 col-sm-10">
              <div class="row product_child_list_detail">
                <div class="col-12 font-weight-bold pb-1">0.007m3バックホー後方小旋回 PC01</div>
                <div class="col-12">メーカー：キャタピラージャパン	</div>
                <div class="col-12">呼称：0.25</div>
                <div class="col-12">型式：RX-505</div>
                <div class="col-12">商品コード：VBA 250NC</div>
              </div>
            </div>
          </div>
          <div class="position-absolute text-right comp">KL/DD/SA/CL/OT</div>
        </a -->
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
  //import products from "@/assets/jsons/stock_products.json"
  
  export default {
    data: function () {
      return {
        // products: [],
        filtered: []
      }
    },
    methods: {
      setParams: function (searchClass = 'stock_product' , comId = 1, key = '', id = '', name = '', spec = ''){
        // key -- search box
        // id --- category_id
        // name - sub_categories ex) tag 
        // spec - special (array[category_id,xxxx] , second category layer)
        var param = {};
        if(id){
          param = {
            'limit': 100,
            searchClass: {
                'category_id': id,
                'company_id': comId
            }
          }
        }
        else if(name){
          param = {
            'limit': 100, 
            searchClass: {
              'sub_categories': {
                'name': name
              },
              'company_id': comId
            }
          }          
        }
        else if(spec){
          var specArray = [];
          switch(spec) {
            case '掘削機' :
              specArray = [415,416,417,418,420,421,422,423,425,426,427,428];
              break;
            case 'レンタカー' :
              specArray = [458,459,460,462,463,464,467,468,469,471,472,473,475,476,477];
              break;
            case '道路機械' :
              specArray = [492,493,494,495,497,499,500,502,503,504,505,506,507];
              break;
            case '解体' :
              specArray = [431,432,433,434,435,436,438,439,440,441,442,444,445,446,447,448,449,450,451,452,453,454,455];
              break;
            case '高所' :
              specArray = [480,481,482,483,485,487,488,489];
              break;
            case '整地' :
              specArray = [510,512,513,514,515];
              break;
            case '発電' :
              specArray = [527,528,529,530,531,533,535,536,537];
              break;
            case 'コンプレッサ' :
              specArray = [540,541,543,545];
              break;
            case 'ハウス' :
              specArray = [548,549,550,551,553,554,555];
              break;
            case '水中ポンプ' :
              specArray = [518,519,520,521,522,524];
              break;
            case 'コンクリート機器' :
              specArray = [576,577,579,581,582,583,584];
              break;
            default :
              specArray = [];
          }
          param = {
            'limit': 100,
            searchClass: {
                'category_id': specArray
                'company_id': comId
            },
          }
        /*
        掘削機（バックホー・油圧ショベル） 415,416,417,418,420,421,422,423,425,426,427,428
        レンタカー 458,459,460,462,463,464,467,468,469,471,472,473,475,476,477
        道路機械 492,493,494,495,497,499,500,502,503,504,505,506,507
        解体・林業・アタッチメント 431,432,433,434,435,436,438,439,440,441,442,444,,445,446,447,448,449,450,451,452,453,454,455
        高所作業車 480,481,482,483,485,487,488,489
        整地・運搬機械 510,512,513,514,515
        発電・溶接・照明機器 527,528,529,530,531,533,535,536,537
        コンプレッサ・エア機械 540,541,543,545
        ハウス・備品 548,549,550,551,553,554,555
        水中ポンプ・水処理機械 518,519,520,521,522,524
        コンクリート機器 576,577,579,581,582,583,584
        */
        }
        else{
          param = {
            'limit': 100, 
            searchClass: {
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
        var mySpec = this.$route.params.Spec;
        var param = {};
        param = setParams('stock_product', myComId, myKey, myId, myName, mySpec)
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
          this.filtered = data
        })
        .catch(e => console.error(e))
        
        //add chartered_stock_product
        var url = process.env.VUE_APP_URL + '/chartered_stock_products/search';
        param = setParams('chartered_stock_product', myComId, myKey, myId, myName, mySpec)
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
          this.filtered += data
        })
        .catch(e => console.error(e))
        
      }
    },
    mounted () {
      this.filterProducts();
    },
    watch: {
      '$route': 'filterProducts'
    }
  }
</script>
