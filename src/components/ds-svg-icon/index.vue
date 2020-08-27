<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="svgIcon"></use>
  </svg>
</template>

<script>
export default {
  name: 'ds-svg-icon',
  props: {
    icon: {
      type: String,
      required: true
    },
    className: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    svgClass () {
      return `ds-svg-icon ${this.className}`
    },
    svgIcon () {
      return `#icon-${this.icon}`
    }
  }
}
</script>

<style scoped lang="scss">
  .ds-svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
