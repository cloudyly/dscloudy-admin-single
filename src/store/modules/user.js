import * as coreApi from '@/modules/core/api/core-api'

const user = {
  namespaced: true,

  state: {
    token: '',
    privileges: []
  },
  mutations: {
    setToken (state, token) {
      state.token = token
    },
    setPrivilege (state, privileges) {
      state.privileges = privileges
    }
  },
  actions: {
    async login (context, params) {
      try {
        const token = await coreApi.login(params)
        context.commit('setToken', token)

        const privileges = await coreApi.getPrivileges()
        console.log(privileges)
        context.commit('setPrivilege', privileges || [])
        return Promise.resolve(token)
      } catch (e) {
        return Promise.reject(e)
      }
    }
  },
  getters: {
    token: state => state.token,
    privileges: state => state.privileges
  }
}

export default user
