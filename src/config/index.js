/**
 * 全局配置文件
 */
const config = {
  /**
   * 是否使用 Mock 请求
   */
  isMock: true,

  /**
   * 是否使用本地 Mock 菜单
   */
  isMockMenu: false,

  /**
   * 网络请求的超时时间
   */
  timeout: 30 * 1000,

  /**
   * 请求的 host （联调时方便直连后端每个微服务）
   */
  host: {
    core: `${process.env.VUE_APP_URL_GATEWAY}/core`, // 核心模块
    demo: `${process.env.VUE_APP_URL_GATEWAY}/demo`, // 演示模块
    system: `${process.env.VUE_APP_URL_GATEWAY}/system` // 系统管理模块
  },

  /**
   * 路由的白名单
   */
  whiteList: []
}

export default config
