import Mock from 'mockjs'
import urls from '@/config/urls'

// 登录请求
Mock.mock(urls.core.login, 'post', '149e5916-fada-42cd-9298-5d85b7dff2bb')
