import axios from 'axios'
import router from '@/router'
import store from '@/store/index.js'
import { Toast } from 'vant'

const request = axios.create({
  baseURL: 'http://127.0.0.1:30/api'
})

const cartRequest = axios.create({
  baseURL: 'http://127.0.0.1:30/cart'
})

const userRequest = axios.create({
  baseURL: 'http://127.0.0.1:30/api'
})

const userinfo = axios.create({
  baseURL: 'http://127.0.0.1:30/my'
})

// 添加请求拦截器
cartRequest.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  config.headers.Authorization = localStorage.token
  return config
}, error => {
  // 对请求错误做些什么
  console.log('在request拦截器显示错误：', error.response)
  return Promise.reject(error)
})

// 添加响应拦截器
cartRequest.interceptors.response.use(response => {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  // return response.data.code === (0 || 1 || 2) ? response : Promise.reject(response.data.message)
  return response
}, error => {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  // 在status不正确的情况下，判别status状态码给出对应响应
  if (error.response) {
    console.log('在respone拦截器显示错误：', error.response)
    switch (error.response.status) {
      case 401:
        // 可能是token过期，清除它
        // console.log(1)
        store.dispatch('delToken')

        // alert('登录过期')
        Toast.loading({
          message: '登录已过期',
          duration: 1100
        })

        setTimeout(function () {
          router.replace( // 跳转到登录页面
            '/login')
        }, 1000)

          // 将跳转的路由path作为参数，登录成功后跳转到该路由
          // query: { redirect: router.currentRoute.fullPath }
    }
    return Promise.reject(error.response.data)
  }
})

userinfo.interceptors.request.use(config => {
  config.headers.Authorization = localStorage.token
  return config
},
error => {
  return Promise.reject(error)
})

// 添加响应拦截器
userinfo.interceptors.response.use(response => {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response.data.code === 0 ? response : Promise.reject(response.data.message)
}, error => {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  // 在status不正确的情况下，判别status状态码给出对应响应
  if (error.response) {
    console.log('在respone拦截器显示错误：', error.response)
    switch (error.response.status) {
      case 401:
        // 可能是token过期，清除它
        // console.log(1)
        store.dispatch('delToken')

        // alert('登录过期')
        Toast.loading({
          message: '请先登录',
          duration: 1100
        })

        setTimeout(function () {
          router.replace('/login')
        }, 1000)

        // router.replace( // 跳转到登录页面
        //   '/login'
        //   // 将跳转的路由path作为参数，登录成功后跳转到该路由
        //   // query: { redirect: router.currentRoute.fullPath }
        // )
    }
    return Promise.reject(error.response.data)
  }
})

export { request, cartRequest, userRequest, userinfo }
