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
      main: CategoryMenu
    }
  },
  {
    path: '/list',
    name: 'list',
    component: TiledList
  },
  {
    path: '/single',
    name: 'single',
    component: SinglePage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
