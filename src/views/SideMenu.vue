

<template>
<div>
      <a class="side_menu mt-2" v-on:click="toggleList(specialNavi)" v-bind:aria-expanded="specialNavi.show"><i class="icon-search"></i>特集から探す</a>
      <transition>
      <div id="side_navi" v-show="specialNavi.show">
        <router-link :to="{ name: 'list', params: {Id: 5}}">新入荷商品</router-link>
        <router-link :to="{ name: 'list', params: {Id: 3}}">おすすめ商品</router-link>
        <router-link :to="{ name: 'list', params: {Id: 2}}">災害支援商品</router-link>
      </div>
      </transition>
			<a class="side_menu mt-2" v-on:click="toggleList(mainNavi)" v-bind:aria-expanded="mainNavi.show"><i class="icon-search"></i>機種一覧から探す</a>
			<transition>
			<div id="accordion" v-show="mainNavi.show">
        <div v-for="category in sortCategories" v-bind:key="category.id">
          <div class="card" v-show="category.position == 1">
            <div class="card-body" id="heading-1">
              <router-link :to="{ name: 'list', params: {Id: 4}}">{{category.name}} - {{category.category_id}} - {{category.position}}</router-link>
            </div>
          </div>
          <div class="card-body" v-if="category.position == 2">
            <div class="card child">
              <div class="card-body" id="heading-1-1">
                <router-link :to="{ name: 'list', params: {Id: 4}}">{{category.name}} - {{category.category_id}} - {{category.position}}</router-link>
              </div>              
              <div class="card" v-if="category.position == 3">
                  <router-link class="product" :to="{ name: 'list', params: {Id: 4}}">{{category.name}} - {{category.category_id}} - {{category.position}}</router-link>
              </div>
            </div>
          </div>
        </div>
			</div>
			</transition>
			<a class="side_menu mt-2" data-toggle="collapse" href="#accordion" role="button" aria-expanded="true" aria-controls="side_navi"><i class="icon-search"></i> 機種一覧から探す</a>
      <div id="accordion" class="ccollapse">
        <div class="card">
          <div class="card-body" id="heading-1">
              <a role="button" data-toggle="collapse" href="#collapse-1" aria-expanded="true" aria-controls="collapse-1">
                掘削・運搬・解体・林業
              </a>
          </div>
          <div id="collapse-1" class="ccollapse" data-parent="#accordion" aria-labelledby="heading-1">
            <div class="card-body">
              <div id="accordion-1">
                <div class="card child">
                  <div class="card-body" id="heading-1-1">
                      <a class="collapsed" role="button" data-toggle="collapse" href="#collapse-1-1" aria-expanded="true" aria-controls="collapse-1-1">
                        掘削機械
                      </a>
                  </div>
                  <div id="collapse-1-1" class="ccollapse" data-parent="#accordion-1" aria-labelledby="heading-1-1">
                    <div class="card">
                        <a href="product_list.html" class="product">バックホー後方小旋回</a>
                    </div>
                    <div class="card">
                        <a href="product_list.html" class="product">クレーン機能付バックホー後方小旋回</a>
                    </div>
                    <div class="card">
                        <a href="product_list.html" class="product">バックホー小旋回</a>
                    </div>
                    <div class="card">
                        <a href="product_list.html" class="product">クレーン機能付バックホー小旋回</a>
                    </div>
                    <div class="card">
                        <a href="product_list.html" class="product">バックホー</a>
                    </div>
                    <div class="card">
                        <a href="product_list.html" class="product">クレーン機能付バックホー</a>
                    </div>
                    <div class="card">
                        <a href="product_list.html" class="product">バックホー配管仕様</a>
                    </div>
                    <div class="card">
                        <a href="product_list.html" class="product">クレーン機能付バックホー配管仕様</a>
                    </div>
                    <div class="card">
                        <a href="product_list.html" class="product">電動バックホー</a>
                    </div>
                  </div>
                  <div class="card-body" id="heading-1-2">
                      <a class="collapsed child" role="button" data-toggle="collapse" href="#collapse-1-2" aria-expanded="false" aria-controls="collapse-1-2">
                        運搬機械
                      </a>
                  </div>
                  <div id="collapse-1-2" class="collapse" data-parent="#accordion-1" aria-labelledby="heading-1-2">
                    <div class="card">
                        <a href="product_list.html" class="product">ベルトコンベア</a>
                    </div>
                    <div class="card">
                        <a href="product_list.html" class="product">アルミコンベア</a>
                    </div>
                    <div class="card">
                        <a href="product_list.html" class="product">ホイールローダ</a>
                    </div>
                    <div class="card">
                        <a href="product_list.html" class="product">キャリアダンプ</a>
                    </div>
                  </div>
                  <div class="card-body" id="heading-1-3">
                      <a class="collapsed child" role="button" data-toggle="collapse" href="#collapse-1-3" aria-expanded="false" aria-controls="collapse-1-3">
                        解体機械
                      </a>
                  </div>
                  <div id="collapse-1-3" class="collapse" data-parent="#accordion-1" aria-labelledby="heading-1-3">
                    <div class="card">
                        <a href="product_list.html" class="product">解体ロングバックホー</a>
                    </div>
                    <div class="card">
                        <a href="product_list.html" class="product">解体ショートリーチバックホー</a>
                    </div>
                    <div class="card">
                        <a href="product_list.html" class="product">解体用アタッチメント類</a>
                    </div>
                    <div class="card">
                        <a href="product_list.html" class="product">解体用搭乗式床材剥がし機</a>
                    </div>
                    <div class="card">
                        <a href="product_list.html" class="product">ミニローダー</a>
                    </div>
                  </div>
                </div>
                
              </div>

            </div>
          </div>
          <div class="card-body" id="heading-2">
              <a role="button" data-toggle="collapse" href="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
                レンタカー・車両機械
              </a>
          </div>
          <div id="collapse-2" class="collapse" data-parent="#accordion" aria-labelledby="heading-2">
            <div class="card-body">
              <div id="accordion-2">
                <div class="card child">
                  <div class="card-body" id="heading-2-1">
                      <a class="collapsed" role="button" data-toggle="collapse" href="#collapse-2-1" aria-expanded="false" aria-controls="collapse-2-1">
                        レンタカー
                      </a>
                  </div>
                  <div id="collapse-2-1" class="collapse" data-parent="#accordion-2" aria-labelledby="heading-2-1">
                    <div class="card">
                        <a href="product_list.html" class="product">2～4tダンプ</a>
                    </div>
                    <div class="card">
                        <a href="product_list.html" class="product">三転ダンプ</a>
                    </div>
                    <div class="card">
                        <a href="product_list.html" class="product">スライドダンプ</a>
                    </div>
                    <div class="card">
                        <a href="product_list.html" class="product">2t・4tトラッククレーン付</a>
                    </div>
                    <div class="card">
                        <a href="product_list.html" class="product">2t・4tトラック</a>
                    </div>
                    <div class="card">
                        <a href="product_list.html" class="product">2tトラックリフトゲート付</a>
                    </div>
                    <div class="card">
                        <a href="product_list.html" class="product">軽ダンプ4WD・軽トラック</a>
                    </div>
                    <div class="card">
                        <a href="product_list.html" class="product">ライトバン・軽バン</a>
                    </div>
                    <div class="card">
                        <a href="product_list.html" class="product">Wキャブトラック</a>
                    </div>
                    <div class="card">
                        <a href="product_list.html" class="product">1BOX</a>
                    </div>
                  </div>
                  <div class="card-body" id="heading-2-2">
                      <a class="collapsed" role="button" data-toggle="collapse" href="#collapse-2-2" aria-expanded="false" aria-controls="collapse-2-2">
                        車両関連機器
                      </a>
                  </div>
                  <div id="collapse-2-2" class="collapse" data-parent="#accordion-2" aria-labelledby="heading-2-2">
                    <div class="card">
                        <a href="product_list.html" class="product">カーナビ</a>
                    </div>
                    <div class="card">
                        <a href="product_list.html" class="product">ドラレコ</a>
                    </div>
                    <div class="card">
                        <a href="product_list.html" class="product">トラックスケール ポータブル車両重量計</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
			<a class="side_menu mt-2" v-on:click="toggleList(docsNavi)" v-bind:aria-expanded="docsNavi.show"><i class="icon-books"></i>参考資料</a>
			<transition>
      <div id="side_docs" v-show="docsNavi.show">
        <a href="document/general-conditions/index.html">レンタル約款</a>
        <a href="document/rental-support/index.html">レンタル物件サポート特約制度</a>
        <a href="document/special-contract/index.html">レンタル保障制度</a>
        <a href="document/law/index.html">法規</a>
        <a href="document/qualification/index.html">資格</a>
        <a href="document/unit/index.html">単位</a>
        <a href="document/guide/index.html">ご利用ガイド</a>
      </div>
			</transition>
</div>
</template>

<script>
	import categories from "@/assets/jsons/categories.json"
	
  export default {
    data: function () {
      return {
				specialNavi: {
					show: false
				},
				mainNavi: {
					show: false
				},
				docsNavi: {
					show: false
				},
        categories: categories
      }
    },
    methods: {
      toggleList: function (menu){
        menu.show = !menu.show;
      }
    },
    computed: {
      sortCategories: function() {
          var cat = this.categories;

          for(var i=0;i<cat.length;i++){
            console.log("name:" + cat[i].name);
            cat[i].show = false;
          }

          function compare(a,b){
            var cat01 = a.category_id;
            var cat02 = b.category_id;
            var pos01 = a.position;
            var pos02 = b.position;
            var ret = 0;
            if(cat01 > cat02){
              ret = 1;
            } else if(cat01 < cat02){
              ret = -1;
            } else {
              if(pos01 > pos02){
                ret = 1;
              } else if (pos01 < pos02){
                ret = -1;
              }
            }
            return ret;
          }
          return cat.sort(compare);
        }
      }
    }
</script>
