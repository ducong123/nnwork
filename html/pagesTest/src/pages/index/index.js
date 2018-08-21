import Vue from 'vue'
import index from './index.vue'
import router from '@/router/index/index'
import axios from 'axios'
Vue.prototype.$http=axios //axios 定义为$http. 在vue 中this.$http可调用
new Vue({
  el: '#index',
  router,
  render: h => h(index)
})
