import Vue from 'vue'
import VueI18n from 'vue-i18n'
import cookie from 'js-cookie'
import enLocale from './en'
import zhLocale from './zh'
import elementEnLocale from 'element-ui/lib/locale/lang/en'
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'

Vue.use(VueI18n)

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale
  },
  zh: {
    ...zhLocale,
    ...elementZhLocale
  }
}

/**
 * 获取浏览器的语言
 */
const getBrowserLang = function () {
  const browserLang = navigator.language ? navigator.language : navigator.browserLanguage
  let defaultBrowserLang = ''
  if (browserLang.toLowerCase() === 'cn' ||
    browserLang.toLowerCase() === 'zh' ||
    browserLang.toLowerCase() === 'zh-cn') {
    defaultBrowserLang = 'zh'
  } else {
    defaultBrowserLang = 'en'
  }
  return defaultBrowserLang
}

/**
 * 获取语言。
 *
 * 如果用户设置过语言，使用用户设置的；
 * 如果没有设置，使用浏览器语言。
 */
const getLanguage = () => {
  const lang = cookie.get('language')
  console.log('cookie: ', lang)
  if (lang) {
    return lang
  }
  const defaultLang = getBrowserLang()
  console.log('default: ', lang)
  cookie.set('language', defaultLang)
  return defaultLang
}

const i18n = new VueI18n({
  locale: getLanguage(),
  messages,
  // 当没有 key 值时，不发出警告
  silentTranslationWarn: true
})

export default i18n
