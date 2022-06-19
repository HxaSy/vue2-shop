import Vue from 'vue'
import VueRouter from 'vue-router'
import { userinfo } from '@/utils/request.js'

import { Toast } from 'vant'
// import Home from '@/views/Home.vue'
// import List from '@/views/List.vue'
// import Cart from '@/views/Cart.vue'
// import My from '@/views/My.vue'
// import GoodDetail from '@/views/GoodDetail.vue'
// import HomeListDetail from '@/views/HomeListDetail.vue'
// import Login from '@/views/Login.vue'
// import Register from '@/views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/list',
    component: () => import('@/views/List.vue')
  },
  {
    path: '/cart',
    component: () => import('@/views/Cart.vue')
  },
  {
    path: '/my',
    component: () => import('@/views/My.vue')
  },
  {
    path: '/product/detail',
    component: () => import('@/views/GoodDetail.vue')
  },
  {
    path: '/homeList/detail',
    component: () => import('@/views/HomeListDetail.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/register',
    component: () => import('@/views/Register.vue')
  }
]

const router = new VueRouter({
  routes
})
// 为 router 实例对象，声明全局前置导航守卫
// 只要发生了路由的跳转，必然会触发 beforeEach 指定的 function 回调函数
router.beforeEach(function (to, from, next) {
  // to 表示将要访问的路由的信息对象
  // from 表示将要离开的路由的信息对象
  // next() 函数表示放行的意思
  // 分析：
  // 1. 要拿到用户将要访问的 hash 地址
  // 2. 判断 hash 地址是否等于 /main。
  // 2.1 如果等于 /main，证明需要登录之后，才能访问成功
  // 2.2 如果不等于 /main，则不需要登录，直接放行  next()
  // 3. 如果访问的地址是 /main。则需要读取 localStorage 中的 token 值
  // 3.1 如果有 token，则放行
  // 3.2 如果没有 token，则强制跳转到 /login 登录页
  if (to.path === '/cart') {
    // 要访问后台主页，需要判断是否有 token
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      Toast.loading({
        message: '请先登录',
        duration: 1100
      })

      // 没有登录，强制跳转到登录页
      setTimeout(function () {
        next('/login')
      }, 1000)
    }
  } else if (to.path === '/my') {
    const token = localStorage.getItem('token')
    if (token) {
      const request = userinfo
      // 判断token是否已经过期
      request.post('userinfo')
      next()
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
