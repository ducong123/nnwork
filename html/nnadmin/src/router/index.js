import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Login from '../components/Login'
import AdminGroup from '../components/role/AdminGroup'
import RoleGroup from  '../components/role/RoleGroup'
import Welcome from '../components/Welcome'
import CompanyList from '../components/member/CompanyList'
import CompanyUserList from '../components/member/CompanyUserList'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },{
      path: '/home',
      name: 'Home',
      component: Home,
      children:[
        {
          path: '/',
          name: 'welcome',
          component: Welcome
        },
        {
          path: '/adminGroup',
          name: 'adminGroup',
          component: AdminGroup
        },
        {
          path: '/roleGroup',
          name: 'roleGroup',
          component: RoleGroup
        },
        {
          path: '/companyList',
          name: 'companyList',
          component: CompanyList
        },
        {
          path: '/companyUserList',
          name: 'companyUserList',
          component: CompanyUserList
        }
      ]
    }

  ]
})
