import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({

  strict: process.env.NODE_ENV === 'dev',

  plugins: [createPersistedState({
    storage: window.sessionStorage
  })]
})
