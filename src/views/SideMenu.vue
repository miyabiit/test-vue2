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
            <div v-if="true">
            <div v-for="child in category.child" v-bind:key="child.id">
              <div class="card-body">
                <div class="card child">
                  <div class="card-body" id="heading-1-1">
                    <a v-on:click="toggleList(child)" v-bind:aria-expanded="child.show" aria-controls="collapse-1-1">
                      {{child.name}}
                    </a>
                  </div>
                  <transition>
                  <div v-if="true" aria-labelledby="heading-1-1">
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
        var cat2h = {};
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
        var catout = [];
        for(var key in cat2h){
          if(cat2h[key].position == 1){
            catout.push(cat2h[key]);
          }
        }
        return catout;
      }
    }
  }
</script>
