import Vue from 'vue'
import VueRouter from 'vue-router'
import SideMenu from '@/views/SideMenu.vue'
import CategoryMenu from '@/views/CategoryMenu.vue'
import TiledList from '@/views/TiledList.vue'
import SinglePage from '@/views/SinglePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    components: {
      side: SideMenu,
      mainview: CategoryMenu
    }
  },
  {
    path: '/list/:Id',
    name: 'list',
    components: {
      side: SideMenu,
      mainview: TiledList
    }
  },
  {
    path: '/search/:Keyword',
    name: 'search',
    components: {
      side: SideMenu,
      mainview: TiledList
    }
  },
  {
    path: '/single/:Id',
    name: 'single',
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
