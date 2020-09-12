import * as coreApi from '../api/core-api'

const user = {
  namespaced: true,

  state: {
    token: ''
  },
  mutations: {
    setToken (state, token) {
      state.token = token
    }
  },
  actions: {
    async login (context, params) {
      try {
        const token = await coreApi.login(params)
        context.commit('setToken', token)
        return Promise.resolve(token)
      } catch (e) {
        return Promise.reject(e)
      }
    }
  },
  getters: {
    token: state => state.token
  }
}

export default user
