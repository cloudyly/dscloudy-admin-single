import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from '@/i18n'
import ElementUI from 'element-ui'
import '@/assets/scss/index.scss'
import DSComponent from '@/components'
import '@/icons/index'
import rules from '@/common/rules'
import config from '@/config'
import moduleCore from '@/modules/core'
import langUtils from '@/common/lang'

Vue.use(moduleCore, store)

Vue.use(ElementUI, {
  size: 'mini',
  i18n: (key, value) => i18n.t(key, value)
})
Vue.use(DSComponent)

Vue.prototype.commonRules = rules
Vue.prototype.getText = langUtils.getText

Vue.config.productionTip = false

if (config.isMock) {
  require('@/mock')
}

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
