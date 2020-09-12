import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../modules/core/pages/login')
  },
  {
    path: '/',
    name: 'Layout',
    component: () => import(/* webpackChunkName: "about" */ '../modules/core/pages/layout')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
