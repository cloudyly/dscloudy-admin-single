import DsSvgIcon from './ds-svg-icon'
import DsLanguageSelect from './ds-language-select'
import DsLayoutHeader from './ds-layout-header'
import DsScreenToggle from './ds-screen-toggle'

const DSComponents = [
  DsSvgIcon,
  DsLanguageSelect,
  DsLayoutHeader,
  DsScreenToggle
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
