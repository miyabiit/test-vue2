<!--


-->
<template>
    <main id="product" class="order-1 order-md-2 col-12 col-md-9 py-0 px-0 pl-md-5 mt-3 mt-md-0 mx-0 bd-content" role="main">
      <h2 id="product_name" class="p-2 px-lg-0 border-bottom">{{product.product.title}}</h2>
      <div class="row mx-0">
        <div id="appeal_icons" class="col-12 col-md-8">
          <span class="bg-primary d-inline-block px-2 mr-1 mb-1" v-if="product.product.netis">NETIS商品</span><br>
          <span class="bg-success d-inline-block px-2 mr-1 mb-1" v-if="isNew(product)">新入荷商品</span>
          <span class="bg-warning d-inline-block px-2 mr-1 mb-1" v-if="isRec(product)">おすすめ商品</span>
          <span class="bg-danger d-inline-block px-2 mr-1 mb-1" v-if="isDes(product)">災害支援商品</span>
        </div>
        <div id="license_icons" class="col-12 col-md-4 text-left text-md-right mt-2 mt-md-0">
          <span class="badge badge-warning px-2 mr-1 align-top" v-if="product.product.qualification_sp_teach">特教</span>
          <span class="badge badge-warning px-2 mr-1 align-top" v-if="product.product.qualification_skill">技</span>
          <span class="badge badge-info px-2 mr-1 align-top" v-if="product.product.driver_license">公道運転免許</span>
          <span class="badge badge-info px-2 mr-1 align-top" v-if="product.product.checking_tokujiken">特自検</span>
          <span class="badge badge-info px-2 mr-1 align-top" v-if="product.product.checking_denhou">電訪</span>
          <span class="badge badge-info px-2 mr-1 align-top" v-if="product.product.checking_shaken">車検</span>
          <span class="badge badge-info px-2 mr-1 align-top" v-if="product.product.checking_souken">送検</span>
          <span class="badge badge-info px-2 mr-1 align-top" v-if="product.product.checking_teiji">定時</span>
          <span id="license_icons_desc" class="d-block"><a href="../../document/about-icon/index.html"><i class="icon-faq"></i>アイコンについて</a></span>
        </div>
      </div>
      <div class="row p-3 mx-0">
        <div class="col-12">
          <!-- p>{{product.product.qualification_comment}}</p -->
        </div>
        <div class="col-12">
          <img id="product_image" :src="mainImage" class="d-block w-100" :alt="product.product.title">
        </div>
      </div>
      <div class="row p-3 mx-0">
        <div class="col-4 col-md-3 col-lg-2 mb-2" v-if="loadImage[0]">
            <a v-on:click="changeMainImage(kenkiImagePath(0))" class="product_thumbnails d-block border border-primary"><img :src="kenkiImagePath(0)" class="d-block w-100"></a>
        </div>
        <div class="col-4 col-md-3 col-lg-2 mb-2" v-if="loadImage[1]">
            <a v-on:click="changeMainImage(kenkiImagePath(1))" class="product_thumbnails d-block border border-primary"><img :src="kenkiImagePath(1)" class="d-block w-100"></a>
        </div>
        <div class="col-4 col-md-3 col-lg-2 mb-2" v-if="loadImage[2]">
            <a v-on:click="changeMainImage(kenkiImagePath(2))" class="product_thumbnails d-block border border-primary"><img :src="kenkiImagePath(2)" class="d-block w-100"></a>
        </div>
        <div class="col-4 col-md-3 col-lg-2 mb-2" v-if="loadImage[3]">
            <a v-on:click="changeMainImage(kenkiImagePath(3))" class="product_thumbnails d-block border border-primary"><img :src="kenkiImagePath(3)" class="d-block w-100"></a>
        </div>
        <div class="col-4 col-md-3 col-lg-2 mb-2" v-if="loadImage[4]">
            <a v-on:click="changeMainImage(kenkiImagePath(4))" class="product_thumbnails d-block border border-primary"><img :src="kenkiImagePath(4)" class="d-block w-100"></a>
        </div>
      </div>
      <h2 class="p-2 mt-5"><i class="icon-books"></i> 仕様</h2>
      <div id="spec" class="table-responsive">
        <table id="product-spec-table" class="table">
          <thead><tr>
            <th width="1%">商品コード</th>
            <th width="10%" v-for="item in lelatedProducts" :key="item.id">
              <router-link :to="{name: 'singleCode' ,params: {Code: item.code}}">{{item.name}}</router-link>
            </th>
          </tr></thead>
          <tbody id="product-spec-table" class="table" v-html="specPage">
          </tbody>
        </table>
      </div>
      <p class="p-2" v-html="brbr(product.spec_comment)"></p>
      
      <!-- h2 class="p-2 mt-5"><i class="icon-compare"></i> 比較検討商品</h2>
       <div class="recommend-items">
         <a href="#" class="bg-white m-2">
           <img src="/images/product/img1.png" class="w-100 border">
           <div class="d-block recommend-item-title text-center p-2">0.07<br>クボタ<br>U-17</div>
         </a>
         <a href="#" class="bg-white m-2">
           <img src="/images/product/img2.png" class="w-100 border">
           <div class="d-block recommend-item-title text-center p-2">0.07<br>クボタ<br>U-17</div>
         </a>
         <a href="#" class="bg-white m-2">
           <img src="/images/product/img1.png" class="w-100 border">
           <div class="d-block recommend-item-title text-center p-2">0.07<br>クボタ<br>U-17</div>
         </a>
         <a href="#" class="bg-white m-2">
           <img src="/images/product/img2.png" class="w-100 border">
           <div class="d-block recommend-item-title text-center p-2">0.07<br>クボタ<br>U-17</div>
         </a>
         <a href="#" class="bg-white m-2">
           <img src="/images/product/img2.png" class="w-100 border">
           <div class="d-block recommend-item-title text-center p-2">0.07<br>クボタ<br>U-17</div>
         </a>
       </div -->
      
      <div v-if="product.product.description_b">
        <h2 class="p-2 mt-5"><i class="icon-spec"></i> 商品説明</h2>
        <p class="p-2" v-html="brbr(product.product.description_a)"></p>
        <p class="p-2" v-html="brbr(product.product.description_b)"></p>
      </div>
      
      <!-- h2 class="p-2 mt-5"><i class="icon-link"></i> 関連商品（オプション・販売品など）</h2 -->
      <!-- div class="related-items">
         <a href="#" class="bg-white m-2">
           <img src="/images/product/img1.png" class="w-100 border">
           <div class="d-block recommend-item-title text-center p-2">組合せ品<br>業務用無線機（特定小電力無線機） ヘルメット用ヘッドセット R9C 00007</div>
         </a>
         <a href="#" class="bg-white m-2">
           <img src="/images/product/img2.png" class="w-100 border">
           <div class="d-block recommend-item-title text-center p-2">組合せ品<br>業務用無線機（特定小電力無線機） ヘルメット用ヘッドセット R9C 00007</div>
         </a>
         <a href="#" class="bg-white m-2">
           <img src="/images/product/img1.png" class="w-100 border">
           <div class="d-block recommend-item-title text-center p-2">組合せ品<br>業務用無線機（特定小電力無線機） ヘルメット用ヘッドセット R9C 00007</div>
         </a>
         <a href="#" class="bg-white m-2">
           <img src="/images/product/img2.png" class="w-100 border">
           <div class="d-block recommend-item-title text-center p-2">組合せ品<br>業務用無線機（特定小電力無線機） ヘルメット用ヘッドセット R9C 00007</div>
         </a>
         <a href="#" class="bg-white m-2">
           <img src="/images/product/img2.png" class="w-100 border">
           <div class="d-block recommend-item-title text-center p-2">組合せ品<br>業務用無線機（特定小電力無線機） ヘルメット用ヘッドセット R9C 00007</div>
         </a>
      </div -->
      
      <div v-if="product.staff_comment">
        <div v-if="product.staff_comment_published"> 
          <h2 class="p-2 mt-5"><i class="icon-comment"></i> 担当者より</h2>
          <p class="p-2">{{product.staff_comment}}</p>
        </div>        
      </div>

      <div v-if="product.price_info">
        <div v-if="product.price_info_published">
          <h2 class="p-2 mt-5"><i class="icon-price"></i> 参考価格</h2>
          <div id="price" class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>レンタル料金（日割）</th>
                  <th>基本料金 / サポート料金（日割）</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td>{{product.price_info}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>        
      </div>
      
      <div v-if="product.video_license_published && product.video_license_valid">
        <h2 class="p-2 mt-5"><i class="icon-video"></i> 動画</h2>
        <div class="videoWrapper"><iframe width="560" height="315" :src="product.video_url" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <p class="p-2">{{product.video_comment}}</p>
      </div>

      <div v-if="product.file_props.length">
        <h2 class="p-2 mt-5"><i class="icon-download"></i> ダウンロード</h2>
        <div class="row mx-0">
         <div v-for="(file,index) in product.file_props" v-bind:key="index">
           <div class="col-6 mb-2">
             <a href="file.url" class="btn btn-outline-info btn-block" download><i class="icon-pdf"></i>{{file.name}}</a>
           </div>
         </div>
        </div>
      </div>
      
      <div v-if="product.link_props">
        <h2 class="p-2 mt-5"><i class="icon-link"></i> 関連サイト</h2>
        <div id="links" class="row px-3 mx-0">
         <div v-for="(myLink,index) in product.link_props" v-bind:key="index">
           <a href="myLink.url" class="btn btn-outline-info btn-block text-left" target="_blank">{{myLink.name}}</a>    
         </div>
        </div>        
      </div>
      
      <div v-if="product.faq">
        <div v-if="product.faq_published">
          <h2 class="p-2 mt-5"><i class="icon-faq"></i> FAQ</h2>
          <div class="faq px-3 mb-4" v-html="brbr(product.faq)">
          </div>
          <!-- div class="faq px-3 mb-4">
             <div class="faq_q mb-2">個人でも借りることはできますか？</div>
             <div class="faq_a mb-2">はい。個人の方もご利用いただけます。レンタル手続きの流れに従って連絡ください。</div>
          </div>
          <div class="faq px-3 mb-4">
             <div class="faq_q mb-2">借りた営業所とは違う営業所に返却してもいいですか?</div>
             <div class="faq_a mb-2">お借りいただいた営業所で精算いたしますので、別の営業所への返却はできません。</div>
          </div -->
        </div>        
      </div>
       
      <div v-if="product.description">
        <div v-if="product.description_published">
        <h2 class="p-2 mt-5"><i class="icon-comment-ex"></i> 備考</h2>
        <p class="p-2">{{product.description}}</p>
        </div>        
      </div>
      
      <div v-if="product.address_info">
        <div v-if="product.address_info_published">
           <h2 class="p-2 mt-5"><i class="icon-contact"></i> お問い合わせ</h2>
           <div class="row px-3 mb-5 mx-0">
             <div class="col-12 col-md-6">
               <!-- p><span class="font-weight-bold d-block">甲陽建機リース株式会社</span>甲府営業所<br>担当：山田</p -->
               <p><span class="font-weight-bold d-block">{{product.address_info}}</span></p>
             </div>
             <div class="col012 col-md-6">
               <!-- p class="contact_tel mb-0">055-237-7821</p -->
               <p>お気軽にお問い合わせください</p>
             </div>
           </div>
        </div>        
      </div>
       
       <!-- h2 class="p-2 mt-5"><i class="icon-excavator"></i> 商品バックナンバー</h2 -->
       <!-- div class="backnumber-items">
           <a href="#" class="bg-white m-2">
             <img src="/images/product/img1.png" class="w-100 border">
             <div class="d-block recommend-item-title text-center p-2">0.007m3 バックホー後方小旋回 PC01</div>
           </a>
           <a href="#" class="bg-white m-2">
             <img src="/images/product/img1.png" class="w-100 border">
             <div class="d-block recommend-item-title text-center p-2">0.007m3 バックホー後方小旋回 PC01</div>
           </a>
           <a href="#" class="bg-white m-2">
             <img src="/images/product/img1.png" class="w-100 border">
             <div class="d-block recommend-item-title text-center p-2">0.007m3 バックホー後方小旋回 PC01</div>
           </a>
           <a href="#" class="bg-white m-2">
             <img src="/images/product/img1.png" class="w-100 border">
             <div class="d-block recommend-item-title text-center p-2">0.007m3 バックホー後方小旋回 PC01</div>
           </a>
           <a href="#" class="bg-white m-2">
             <img src="/images/product/img1.png" class="w-100 border">
             <div class="d-block recommend-item-title text-center p-2">0.007m3 バックホー後方小旋回 PC01</div>
           </a>
       </div -->
    </main>
</template>

<script>
  //import products from "@/assets/jsons/stock_products.json"
  
  export default {
    data: function () {
      return {
        //params
        product_id: this.$route.params.Id,
        chartered_product_id: this.$route.params.CharterId,
        product_code: this.$route.params.Code,
        //
        product: {
            'product': {
              'product_code': ''
            },
            'image_props': [],
            'file_props': [],
            'link_props': []
        },
        mainImage: '',
        specPage: '',
        specFile: {
          isLoad: false,
          loadedCsv: ''
        },
        lelatedProducts: [],
        // meta
        title: '商品カタログ',
        description: '',
        keywords: '',
        // image load
        loadImage: [true, true, true, true, true],
      }
    },
    methods: {
      kenkiImagePath: function (n) {
        return '/kenki_images/1/' + this.product.product.product_code + '-' + ('00' + (n+1)).slice(-2) + '.jpg'
      },
      loadKenkiImage: function (n) {
        this.axios.get(this.kenkiImagePath(n))
        .then(res => {
          this.$set(this.loadImage, n, true)
        })
        .catch(e => {
          this.$set(this.loadImage, n, false)
        })          
      },
      isNew: function (p) {
        if(!p.sub_categories) return false;
        var news = [];
        news = p.sub_categories.filter(function(item){
          if((item.name).indexOf("新入荷") >= 0) return true;
        })
        return news.length;
      },
      isRec: function (p) {
        if(!p.sub_categories) return 0;
        var recs =[];
        recs = p.sub_categories.filter(function(item){
          if((item.name).indexOf("おすすめ") >= 0) return true;
        })
        return recs.length;
      },
      isDes: function (p) {
        if(!p.sub_categories) return 0;
        var dess = [];
        dess = p.sub_categories.filter(function(item){
          if((item.name).indexOf("災害") >= 0) return true;
        })
        return dess.length;
      },
      changeMainImage: function (path) {
        this.mainImage = path;
      },
      makeSpec: function (d, name, code) {      
        const dataArray = this.parseCSV(d,',');
        var strongPos = -1
        var tableType = 'old'
        var items = []
        if(dataArray[1][0]=='' || dataArray[1][0] == 'product_tag'){
          tableType = 'new'
          strongPos = dataArray[1].indexOf(code)
        }else{
          tableType = 'old'
          strongPos = dataArray[1].indexOf(name)
        }
        let insertElement = ''
        for(var i=0; i < dataArray.length; i++){
         if(i==0) continue;
         if(i==1 && (dataArray[i][0] == '' || dataArray[i][0] == 'product_tag')) continue;
         insertElement += '<tr>';
         for(var j=0; j<dataArray[i].length; j++){
           if(i==1){
             if(j>0) items.push({'id': j, 'code': dataArray[i][j], 'name': dataArray[i][j]})
           }else if(i==2 && tableType=='new'){
             if(j>0) items.push({'id': j, 'code': dataArray[1][j], 'name': dataArray[i][j]})
           }else{
             if(j==0){
               insertElement += `<th width="10%">${dataArray[i][j]}</th>`;
             }else if(j==strongPos){
               insertElement += `<td class="go-red">${dataArray[i][j]}</td>`;
             }else{
               insertElement += `<td>${dataArray[i][j]}</td>`;
             }
           }     
         }
         insertElement += '</tr>';
        }
        //insertElement += '</tbody>'
        this.specPage = insertElement
        this.lelatedProducts = items
      },
      parseCSV: function(text = '',delim) {
        if (!delim) delim = ',';
        var tokenizer = new RegExp(delim + '|\r?\n|[^' + delim + '"\r\n][^' + delim + '\r\n]*|"(?:[^"]|"")*"', 'g');
        var record = 0, field = 0, data = [['']], qq = /""/g;
        text.replace(/\r?\n$/, '').replace(tokenizer, function(token) {
          switch (token) {
            case delim: 
              data[record][++field] = '';
              break;
            case '\n': case '\r\n':
              data[++record] = [''];
              field = 0;
              break;
            default:
              data[record][field] = (token.charAt(0) != '"') ? token : token.slice(1, -1).replace(qq, '"');
          }
        });
        return data;
      },
      loadCsvFile: function (file) {
        this.axios.get(file)
        .then(res => {
          this.specFile.loadedCsv = res.data
          this.$set(this.specFile,'isLoad',true)
          if(this.specFile.isLoad) this.makeSpec(this.spcFile.loadedCsv, this.product.product.product_name, this.product.product.product_code)
        })
        .catch(e => {
          this.specFile.loadedCsv = this.product.spec
          this.$set(this.specFile,'isLoad',false)
          this.makeSpec(this.product.spec, this.product.product.product_name, this.product.product.product_code)
        })
      },
      brbr: function(text){
        if(!text) text ='';
        var brtext = text.replace(/\r?\n/g, '<br>');
        return brtext;
      },
      getProduct: function () {
        this.lelatedProducts = []
        var myToken = process.env.VUE_APP_TOKEN
        var myComId = process.env.VUE_APP_COMPANY_ID
        var filter_id = this.product_id
        var params = {}
        var url = process.env.VUE_APP_URL + '/stock_products/' + filter_id
        if(this.product_code){
          url = process.env.VUE_APP_URL + '/stock_products/search/'
          params = {
            'limit': 1, 
            'stock_product': {
              'product': {
                'product_code': this.product_code
              },
              'company_id': myComId
            }
          }
          fetch(url, {
            method: "POST",
            mode: "cors",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${myToken}`              
            },
            body: JSON.stringify(params)
          })
          .then(res => {
            return res.json()
          })
          .then(data =>{
            this.product = data[0]
            this.changeMainImage(this.kenkiImagePath(0))
            for(var i=0;i<5;i++) this.loadKenkiImage(i)
            this.loadCsvFile('/spec_csv/' + this.product.category.name + '.csv')
            this.title = this.product.product.title
          })
          .catch(e => console.error(e))          
        }else{
          if(this.chartered_product_id){
            filter_id = this.chartered_product_id;
            url = process.env.VUE_APP_URL + '/chartered_stock_products/' + filter_id;          
          }
          fetch(url, {
            method: "GET",
            mode: "cors",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${myToken}`
            }
          })
          .then(res => {
            return res.json()
          })
          .then(data =>{
            this.product = data
            this.changeMainImage(this.kenkiImagePath(0))
            for(var i=0;i<5;i++) this.loadKenkiImage(i)
            this.loadCsvFile('/spec_csv/' + this.product.category.name + '.csv')
            this.title = this.product.product.title
          })
          .catch(e => console.error(e))          
        }
      }
    },
    created () {
      this.getProduct()
    },
    mounted () {
      this.$parent.category_id = this.product.category_id
      this.$parent.active_page_title = this.product.product.title
    },
    watch: {
      '$route': 'getProduct',
      'title': function (){
          this.$parent.title = this.product.product.title
          this.$parent.description = this.product.meta_description
          this.$parent.keywords = this.product.meta_keywords
          //breadcrumbs
          this.$parent.category_id = this.product.category_id
          this.$parent.active_page_title = this.product.product.title
      },
      'specFile.isLoad': function(){
          if(this.specFile.isLoad){
            this.makeSpec(this.specFile.loadedCsv, this.product.product.product_name, this.product.product.product_code)
          }else{
            this.makeSpec(this.product.spec, this.product.product.product_name, this.product.product.product_code)
          }
      }
    },
    beforeRouteUpdate(to, from, next){
      this.product_code = to.params.Code
      this.product_id = null
      this.chartered_product_id = null
      this.specPage = ''
      //this.getProduct()
      next()
      this.$parent.category_id = this.product.category_id
      this.$parent.active_page_title = this.product.product.title
    },
    beforeRouteLeave(to, from, next){
      if(to.params.Code){
        this.product_code = to.params.Code
        this.product_id = null
        this.chartered_product_id = null
        this.specPage = ''
        //this.getProduct()
        next()
        this.$parent.category_id = this.product.category_id
        this.$parent.active_page_title = this.product.product.title
      }else{
        next()
      }
    }
  }
</script>
