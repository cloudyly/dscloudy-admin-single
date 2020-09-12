const demo = {
  namespaced: true,

  state: {
    msg: ''
  },
  mutations: {
    setMsg: (state, msg) => {
      state.msg = msg
    }
  },
  actions: {
    setMsgAsync (context, msg) {
      return new Promise((resolve, reject) => {
        context.commit('setMsg', msg)
        resolve()
      })
    }
  },
  getters: {
    msg: state => state.msg
  }
}

export default demo
