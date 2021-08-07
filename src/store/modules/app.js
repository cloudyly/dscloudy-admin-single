import cookie from 'js-cookie'

const app = {

  namespaced: true,

  state: {
    language: ''
  },

  mutations: {
    setLanguage (state, language) {
      cookie.set('language', language)
      state.language = language
    }
  },

  actions: {},

  getters: {
    language: state => state.language || cookie.get('language')
  }
}

export default app
