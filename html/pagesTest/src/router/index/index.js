import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/index/home'
import Trading from '@/components/index/trading'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/trading',
      name: 'Trading',
      component: Trading
    }
  ]
})
