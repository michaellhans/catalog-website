import AuthService from '@/services/AuthService'

const state = {
  isLoggedIn: null,
  username: null,
  accessToken: localStorage.getItem('accessToken') || null
}

const getters = {
  getAuthStatus: state => state.isLoggedIn,
  getAuthUsername: state => state.username
}

const actions = {
  async login({ dispatch }, userData ) {
    try {
      const resp = await AuthService.login(userData)
      dispatch('initAuth')
      return resp
    } catch (error) {
      throw error
    }
  },

  logout({ commit }) {
    commit('logout')
  },

  initAuth({ commit }) {
    AuthService.getAuthStatus()
      .then(
        (resp) => {
          const { auth, username } = resp.data
          if(auth === true) {
            commit('login')
            commit('setUsername', username )
          }
          else {
            commit('logout')
          }
        }
      )
  }
}

const mutations = {
  login: (state) => {
    state.isLoggedIn = true
  },
  logout: (state) => {
    state.isLoggedIn = false
  },
  setUsername: (state, username) => {
    state.username = username
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}