import demo from '@/modules/core/store/demo'
import user from '@/modules/core/store/user'

export default {
  install (module, store) {
    if (store) {
      store.registerModule('demo', demo)
      store.registerModule('user', user)
    }
  }
}
