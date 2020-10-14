import cookie from 'js-cookie'

const app = {

  namespaced: true,

  state: {
    language: '',
    isMenuOpen: true
  },

  mutations: {
    setLanguage (state, language) {
      cookie.set('language', language)
      state.language = language
    },
    setIsMenuOpen (state, isMenuOpen) {
      state.isMenuOpen = isMenuOpen
    }
  },

  actions: {},

  getters: {
    language: state => state.language || cookie.get('language'),
    isMenuOpen: state => state.isMenuOpen
  }
}

export default app
