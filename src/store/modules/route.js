const route = {

  namespaced: true,

  state: {
    /**
     * 当前选中的模块（顶部菜单）编码
     */
    currentModuleCode: ''
  },

  mutations: {
    setCurrentModuleCode (state, moduleCode) {
      state.currentModuleCode = moduleCode
    }
  },

  actions: {},

  getters: {
    currentModuleCode: state => state.currentModuleCode
  }
}

export default route
