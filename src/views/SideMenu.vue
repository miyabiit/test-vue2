<!-- 
catalog-db
created: yamada
updated:
-->
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
			<div id="accordion" v-if="mainNavi.show">
        <div v-for="category in sortCategories" v-bind:key="category.id">
          <div class="card">
            <div class="card-body" id="heading-1" >
              <a v-on:click="toggleList(category)" v-bind:aria-expanded="category.show">
              {{category.name}}
              </a>
            </div>
            <transition>
            <div v-if="category.show">
            <div v-for="child in category.child" v-bind:key="child.id">
              <div class="card-body">
                <div class="card child">
                  <div class="card-body" id="heading-1-1">
                    <a v-on:click="toggleList(child)" v-bind:aria-expanded="child.show" aria-controls="collapse-1-1">
                      {{child.name}}
                    </a>
                  </div>
                  <transition>
                  <div v-if="child.show" aria-labelledby="heading-1-1">
                    <div v-for="childone in child.child" v-bind:key="childone.id">
                      <div class="card">
                        <router-link class="product" :to="{ name: 'list', params: {Id: category.id}}">{{childone.name}}</router-link>
                      </div>
                    </div>
                  </div>
                  </transition>
                </div>
              </div>
            </div>
            </div>
            </transition>
          </div>
        </div>
			</div>
			</transition>
			<!-- a class="side_menu mt-2" data-toggle="collapse" href="#accordion" role="button" aria-expanded="true" aria-controls="side_navi"><i class="icon-search"></i> 機種一覧から探す</a>
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
      </div -->
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
        //menu.show = !menu.show;
        this.$nextTick(() => (menu.show = !menu.show));
      }
    },
    computed: {
      sortCategories: function() {
        var cat = this.categories;

        for(var i=0;i<cat.length;i++){
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
        //layered
        var newone = []
        cat.sort(compare);
        var data = cat;
        var last_gm = -1; //grand mother
        var last_m = -1;
        for(i=0;i < data.length;i++){
          data[i].child = [];
          if(data[i].position == 1){
            last_gm++;
            last_m = -1;
            newone.push(data[i]);
          }
          else if(data[i].position == 2){
            last_m++;
            newone[last_gm].child.push(data[i]);
          }else if(data[i].position == 3){
            newone[last_gm].child[last_m].child.push(data[i]);
          }
        }
        return newone;
      }
    }
  }
</script>
