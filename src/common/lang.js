import store from '../store'

const getText = (data, zhProp, enProp) => {
  const language = store.getters['app/language']
  if (language === 'en') {
    return data[enProp]
  } else if (language === 'zh') {
    return data[zhProp]
  }
}

export default {
  getText: getText
}
