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
        <div v-for="product in products" v-bind:key="product.id">
        <router-link :to="{ name: 'single', params: {Id: product.id}}" class="btn btn-block text-left btn-child-list">
          <div class="row align-items-center">
            <div class="col-5 col-sm-2">
              <img src="@/assets/images/product/img3.png" class="d-block w-100 border" :alt="product.product.title">
              <span class="d-block netis text-center" v-show="product.product.netis">NETIS</span>
            </div>
            <div class="col-7 col-sm-10">
              <div class="row product_child_list_detail">
                <div class="col-12 font-weight-bold pb-1">{{product.product.title}}</div>
                <div class="col-12">メーカー：{{product.product.maker}}</div>
                <div class="col-12">{{product.product.description_a}}</div>
                <div class="col-12">型式：{{product.product.type}}</div>
                <div class="col-12">商品コード：{{product.product_code}}</div>
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
  //import products from "@/assets/jsons/products.json"
  import products from "@/assets/jsons/stock_products.json"
  
  export default {
    data: function () {
      return {
        products: products
      }
    }
  }
</script>
