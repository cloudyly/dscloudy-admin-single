import { get, post } from '@/common/axios'
import urls from '@/config/urls'

/**
 * 登录
 */
export const login = param => post(urls.core.login, param)

/**
 * 获取权限
 */
export const getPrivileges = _ => get(urls.core.privileges)
