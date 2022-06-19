const state = {
  userinfo: '',
  token: '',
  isLogin: 'N'
}

const getters = {
  getUserinfo (state) {
    if (!state.userinfo) {
      state.userinfo = localStorage.getItem('userinfo')
    }
    return state.userinfo
  },
  getToken (state) {
    if (!state.token) {
      state.token = localStorage.getItem('token')
    }
    return state.token
  }
}

const mutations = {
  saveUserinfo (state, userinfo) {
    state.userinfo = userinfo
    localStorage.userinfo = userinfo
  },
  saveTooken (state, token) {
    state.token = token
    localStorage.token = token
    state.isLogin = 'Y'
    localStorage.isLogin = state.isLogin
  },
  delToken (state) {
    state.token = ''
    localStorage.removeItem('token')
    state.isLogin = 'N'
    localStorage.isLogin = state.isLogin
    state.userinfo = '点击登录/注册'
    localStorage.userinfo = state.userinfo
  }
}

const actions = {
  saveUserinfo ({ commit }, userinfo) {
    commit('saveUserinfo', userinfo)
  },
  saveTooken ({ commit }, token) {
    commit('saveTooken', token)
  },
  delToken ({ commit }) {
    commit('delToken')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
