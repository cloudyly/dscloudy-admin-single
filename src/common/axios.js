import axios from 'axios'
import { Message } from 'element-ui'
import systemConfig from '@/config'
import * as loading from './loading'
import i18n from '@/i18n'

// 创建 axios 对象
const axiosInstance = axios.create({
  timeout: systemConfig.timeout
})

// 显示错误信息
const showError = (msg) => Message.error({
  message: msg,
  type: 'error',
  duration: 3 * 1000
})

// 请求拦截器
axiosInstance.interceptors.request.use(
  config => {
    // 后面需要设置 token
    loading.showLoading()
    return config
  },
  error => {
    console.error(error)
    loading.closeLoading()
    showError(`${i18n.t('app.sendRequestError')}`)
    return Promise.reject(error)
  }
)

// 响应拦截器
axiosInstance.interceptors.response.use(
  response => {
    loading.closeLoading()
    // HTTP 状态码为 200 表示成功，其他情况均为失败
    if (response.status === 200) {
      return Promise.resolve(response.data)
    }
    const respData = response.data
    Message.error(`${respData.msg}(${respData.code})`)
    return Promise.reject(response.data)
  },
  error => {
    console.error(error)
    loading.closeLoading()
    const { code, message } = error
    if (code === 'ECONNABORTED' || message === 'Network Error') { // 请求超时
      showError(`${i18n.t('app.requestTimeoutError')}`)
      return Promise.reject(error)
    }
    if (error.response) {
      if (error.response.status === 401) {
        // 针对无权限的处理
      } else {
        showError(`${error.response.data.msg}(${error.response.data.code})`)
      }
    }
    return Promise.reject(error)
  }
)

export const createApi = (url, method, data) => {
  const config = {}
  if (method === 'get') {
    config.params = data
  } else {
    config.data = data || {}
  }
  return axiosInstance({
    url,
    method,
    ...config
  })
}

export const get = (url, data) => createApi(url, 'get', data)
export const post = (url, data) => createApi(url, 'post', data)
export const put = (url, data) => createApi(url, 'put', data)
export const del = (url, data) => createApi(url, 'delete', data)
