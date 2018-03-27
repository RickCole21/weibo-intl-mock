import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import Weibo from '@/components/weibo'
import Mine from '@/components/mine'

import Dev from '@/components/common/weibo-item'

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
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine,
      meta: {
        title: '我的'
      }
    },
    {
      path: '/dev',
      name: 'dev',
      component: Dev,
      meta: {
        title: '开发组件'
      }
    }
  ]
})
