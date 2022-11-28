import { createStore } from 'vuex'

export default createStore({
  state: {
    isLoading: false,
    isAuthenticated: false,
    token: null
  },
  getters: {
  },
  mutations: {
    initializeTree(state) {
      if (localStorage.getItem('token')) {
        state.token = localStorage.getItem('token')
        state.isAuthenticated = true
      } else {
          state.token = null
          state.isAuthenticated = false
      } 
    },
    setToken(state, token) {
      state.token = token
      state.isAuthenticated = true
    },  
    removeToken(state) {
        state.token = ''
        state.isAuthenticated = false
    },
  },
  actions: {
  },
  modules: {
  }
})
