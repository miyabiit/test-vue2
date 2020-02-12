import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Head from '../views/Head.vue'
import Side from '../views/Side.vue'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/head',
    name: 'Head',
    component: Head
  },
  {
    path: '/side',
    name: 'Side',
    component: Side
  },
  {
    path: '/main',
    name: 'Main',
    component: Main
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
