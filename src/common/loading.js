import { Loading } from 'element-ui'
import i18n from '@/i18n'

/**
 * Loading 组件的实例对象
 */
let loadingInstance = null

/**
 * 当前需要显示 loading 的请求数
 */
let loadingRequestCount = 0

/*
 * 内部方法：开始显示 loading 框
 */
const beginLoading = () => {
  loadingInstance = Loading.service({
    lock: true,
    text: i18n.t('app.loadingText'),
    background: 'rgba(0, 0, 0, 0.1)',
    target: document.querySelector('#app'),
    customClass: '.ds-loading'
  })
}

/*
 * 内部方法：结束显示 loading 框
 */
const endLoading = () => {
  if (loadingInstance) {
    loadingInstance.close()
  }
}

/**
 * 显示 loading 框
 */
export const showLoading = () => {
  if (loadingRequestCount === 0) {
    beginLoading()
  }
  loadingRequestCount++
}

/**
 * 关闭 loading 框
 */
export const closeLoading = () => {
  if (loadingRequestCount <= 0) {
    return
  }
  loadingRequestCount--
  if (loadingRequestCount === 0) {
    endLoading()
  }
}
