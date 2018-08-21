import Vue from 'vue'
import login from './register.vue'
import axios from 'axios';
Vue.prototype.$http=axios //axios 定义为$http. 在vue 中this.$http可调用
new Vue({
  el:'#register',
  render:h => h(login)
})


