import Vue from 'vue'
import VueRouter from 'vue-router'
import SideMenu from '@/views/SideMenu.vue'
import CategoryMenu from '@/views/CategoryMenu.vue'
import TiledList from '@/views/TiledList.vue'
import SinglePage from '@/views/SinglePage.vue'
import CategoryPage from '@/views/CategoryPage.vue'
import CategoryPage2 from '@/views/CategoryPage2.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    components: {
      side: SideMenu,
      mainview: CategoryMenu
    }
  },
  // 所属category_id 
  {
    path: '/list/:Id',
    name: 'list',
    components: {
      side: SideMenu,
      mainview: TiledList
    }
  },
  // タグ（新入荷商品とか)
  {
    path: '/catlist/:Name',
    name: 'catlist',
    components: {
      side: SideMenu,
      mainview: TiledList
    }
  },
  // カテゴリーページに遷移
  {
    path: '/speclist/:Spec',
    name: 'speclist',
    components: {
      side: SideMenu,
      mainview: CategoryPage
    },
  },
  // カテゴリーページに遷移
  {
    path: '/speclist/:Spec',
    name: 'speclist2',
    components: {
      side: SideMenu,
      mainview: CategoryPage2
    },
  },
  // 検索
  {
    path: '/search/:Keyword',
    name: 'search',
    components: {
      side: SideMenu,
      mainview: TiledList
    }
  },
  // 商品詳細
  {
    path: '/single/:Id',
    name: 'single',
    components: {
      side: SideMenu,
      mainview: SinglePage
    }
  },
  // 商品詳細（カテゴリー）
  {
    path: '/singlec/:CharterId',
    name: 'singleCharter',
    components: {
      side: SideMenu,
      mainview: SinglePage
    }
  },
  {
    path: '/single/:Code',
    name: 'singleCode',
    components: {
      side: SideMenu,
      mainview: SinglePage
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
