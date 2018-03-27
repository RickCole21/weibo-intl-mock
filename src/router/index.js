import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import Weibo from '@/components/weibo'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'weibo',
      component: Weibo,
      meta: {
        title: '微博'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title: '登录'
      }
    }
  ]
})
