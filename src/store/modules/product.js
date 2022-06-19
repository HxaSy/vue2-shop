
const state = {
  i: 0,
  info: []
}

//  定义修改状态的方法
const mutations = {
  change (state, payload) {
    state.i = payload.num
  },
  getInfo (state, payload) {
    state.info = payload.item
  }
}

//  提交修改
const actions = {
  change ({ commit }, payload) {
    commit('change', payload)
  },
  getInfo ({ commit }, payload) {
    commit('getInfo', payload)
  }
}

export default {
  state,
  mutations,
  actions
}
