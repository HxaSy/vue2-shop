import Vue from 'vue'
import Vuex from 'vuex'
import product from '@/store/modules/product.js'
import cart from '@/store/modules/cart.js'
import user from '@/store/modules/user.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    product,
    cart,
    user
  }
})

export default store
