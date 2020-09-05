import i18n from '@/i18n'

const validNotNullAndLengthRange = (rule, value, callback, displayName, minLength, maxLength) => {
  if (!value) {
    callback(new Error(`${displayName}${i18n.t('valid.notNull')}`))
  } else {
    if ((minLength > -1) && (value.length < minLength)) {
      callback(new Error(`${displayName}${i18n.t('valid.minLength')}${minLength}`))
    } else if ((maxLength > -1) && (value.length > maxLength)) {
      callback(new Error(`${displayName}${i18n.t('valid.maxLength')}${maxLength}`))
    } else {
      callback()
    }
  }
}

const validNotNullAndLength = (rule, value, callback, displayName, length) => {
  if (!value) {
    callback(new Error(`${displayName}${i18n.t('valid.notNull')}`))
  } else {
    if (value.length !== length) {
      callback(new Error(`${displayName}${i18n.t('valid.lengthIs')}${length}`))
    } else {
      callback()
    }
  }
}

export default {
  /**
   * 校验字符串： 非空
   * @param displayName 错误提示展示的字段名
   */
  notNull: (displayName) => {
    return { required: true, message: `${displayName}${i18n.t('valid.notNull')}` }
  },

  /**
   * 校验字符串： 非空 且 长度区间
   * @param displayName 错误提示展示的字段名
   * @param minLength   最小长度（-1表示不限制）
   * @param maxLength   最大长度（-1表示不限制）
   */
  notNullAndLengthRange: (displayName, minLength, maxLength) => {
    return {
      validator: (rule, value, callback) => validNotNullAndLengthRange(rule, value, callback, displayName, minLength, maxLength)
    }
  },

  /**
   * 校验字符串： 非空 且 长度等于
   * @param displayName 错误提示展示的字段名
   * @param length   长度值
   */
  notNullAndLength: (displayName, length) => {
    return {
      validator: (rule, value, callback) => validNotNullAndLength(rule, value, callback, displayName, length)
    }
  }
}
