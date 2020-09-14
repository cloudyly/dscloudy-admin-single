import demo from '@/modules/core/store/demo'

export default {
  install (module, store) {
    if (store && !store.hasModule('demo')) {
      store.registerModule('demo', demo)
    }
  }
}
