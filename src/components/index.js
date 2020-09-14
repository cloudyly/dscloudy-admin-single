import DsSvgIcon from './ds-svg-icon'
import DsLanguageSelect from './ds-language-select'

const DSComponents = [
  DsSvgIcon,
  DsLanguageSelect
]

function plugin (Vue) {
  if (plugin.installed) {
    return
  }
  DSComponents.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default plugin
