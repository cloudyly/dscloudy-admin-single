import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import app from '@/store/modules/app'
import user from '@/store/modules/user'

Vue.use(Vuex)

export default new Vuex.Store({

  strict: process.env.NODE_ENV === 'dev',

  modules: {
    user,
    app
  },

  plugins: [createPersistedState({
    storage: window.sessionStorage
  })]
})
