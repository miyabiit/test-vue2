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
        <router-link :to="{ name: 'catlist', params: {Name: '新'}}">新入荷商品</router-link>
        <router-link :to="{ name: 'catlist', params: {Name: 'おすすめ'}}">おすすめ商品</router-link>
        <router-link :to="{ name: 'catlist', params: {Name: '災害'}}">災害支援商品</router-link>
      </div>
      </transition>
			<a class="side_menu mt-2" v-on:click="toggleList(mainNavi)" v-bind:aria-expanded="mainNavi.show"><i class="icon-search"></i>機種一覧から探す</a>
			<transition>
			<div id="accordion" v-if="mainNavi.show">
        <div v-for="category in sortCategories" v-bind:key="category.id">
          <div class="card">
            <div class="card-body" id="heading-1" >
              <a v-on:click="toggleListInMainNavi(category, sortCategories)" v-bind:aria-expanded="category.show">
              {{category.name}}
              </a>
            </div>
            <transition>
            <div v-if="category.show">
            <div v-for="child in category.child" v-bind:key="child.id">
              <div class="card-body">
                <div class="card child">
                  <div class="card-body" id="heading-1-1">
                    <a v-on:click="toggleListInMainNavi(child, category.child)" v-bind:aria-expanded="child.show" aria-controls="collapse-1-1">
                      {{child.name}}
                    </a>
                  </div>
                  <transition>
                  <div v-if="child.show" aria-labelledby="heading-1-1">
                    <div v-for="childone in child.child" v-bind:key="childone.id">
                      <div class="card">
                        <router-link class="product" :to="{ name: 'list', params: {Id: childone.id}}">{{childone.name}}</router-link>
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
        <a href="/../document/general-conditions/index.html">レンタル約款</a>
        <a href="/../document/rental-support/index.html">レンタル物件サポート特約制度</a>
        <a href="/../document/special-contract/index.html">レンタル保障制度</a>
        <a href="/../document/law/index.html">法規</a>
        <a href="/../document/qualification/index.html">資格</a>
        <a href="/../document/unit/index.html">単位</a>
        <a href="/../document/guide/index.html">ご利用ガイド</a>
      </div>
			</transition>
</div>
</template>

<script>	
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
        sortCategories: [] //categories
      }
    },
    props: {
      categorySet: {
        type: Array,
        require: true
      }
    },
    mounted () {
      this.sortCategories = this.categorySet
    },
    methods: {
      toggleList: function (menu){
        menu.show = !menu.show
      },
      toggleListInMainNavi: function (menu, uppermenus = []){
        for(var i=0;i<uppermenus.length;i++){
          uppermenus[i].show = false
        }
        this.mainNavi.show = false;
        menu.show = !menu.show;
        this.$nextTick(()=>{
          this.mainNavi.show = true;
        })
      },
    },
    watch: {
      categorySet(newSet){
        this.sortCategories = newSet
      }
    }
  }
</script>
