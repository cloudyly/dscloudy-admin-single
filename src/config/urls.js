import config from '@/config/index'

/**
 * 系统所有请求的请求路径
 * @type {{core: {}}}
 */
const urls = {
  /**
   * 核心模块
   */
  core: {
    test: `${config.host.core}/test`
  },

  /**
   * 演示模块
   */
  demo: {
    test: `${config.host.demo}/test`
  },

  /**
   * 系统管理模块
   */
  system: {
    test: `${config.host.system}/test`
  }
}

export default urls
