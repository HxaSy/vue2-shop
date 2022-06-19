import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'
import '@/assets/css/base.css'
import store from '@/store/index.js'
// 图片懒加载
import VueLazyLoad from 'vue-lazyload'

// 导入所有的Vant组件
Vue.use(Vant)

Vue.use(VueLazyLoad, {

  preLoad: 1.3,
  error: 'https://cn.vuejs.org/images/logo.svg',
  loading: 'https://cn.vuejs.org/images/logo.svg',
  attempt: 1

})

// 跳转后返回顶部
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
