import DsSvgIcon from './ds-svg-icon'

const DSComponents = [
  DsSvgIcon
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
