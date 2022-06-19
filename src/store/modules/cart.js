
import { cartRequest } from '@/utils/request'

const state = {
  // 存储购物车信息
  cartInfo: [],
  statusAll: false,
  numSum: 0
}

// 相当于计算属性,计算总价格和总数
const getters = {
  cartTotalPrice: (state) => {
    return state.cartInfo.filter(item => item.cart_choose)
      .reduce((total, item) => (total += (item.cart_num * item.cart_price)), 0)
  },
  fullChoose: (state) => {
    return state.statusAll
  }

}

// 修改state中的状态,只允许同步方法
const mutations = {
  getCartInfo (state, cartList) {
    state.cartInfo = cartList.info
    state.statusAll = state.cartInfo.every(item => item.cart_choose)
    // console.log(state.statusAll)
  },
  changeAllState (state, payload) {
    // console.log(getters.fullChoose)
    if (payload.checked === true) {
      state.statusAll = false
      state.cartInfo.forEach(item => { item.cart_choose = true })
    } else {
      state.statusAll = true
      state.cartInfo.forEach(item => { item.cart_choose = false })
    }
  },
  // 如果商品已经在购物车中，则数量加1
  andOne (state, num) {
    // console.log(state.cartInfo)
    state.cartInfo.forEach(item => {
      if (item.product_id === num) {
        item.cart_num += 1
        console.log(item)
        cartRequest.post('/update', { cart_num: item.cart_num, cart_id: item.cart_id })
      }
    })
  }
}

// 提交修改，允许异步
const actions = {
  getCartInfo ({ commit }, cartList) {
    // console.log(cartList)
    commit('getCartInfo', cartList)
  },
  changeAllState ({ commit }, payload) {
    commit('changeAllState', payload)
  },
  // 如果商品已经在购物车中，则数量加1
  andOne ({ commit }, num) {
    commit('andOne', num)
  }

}

export default {
  state,
  getters,
  mutations,
  actions
}
