<template>
  <span class="screen-toggle" @click="onScreenToggle">
    <el-tooltip v-show="!isFullscreen" effect="light" :content="$t('icon.screenFull')">
      <ds-svg-icon icon="screen-full"></ds-svg-icon>
    </el-tooltip>
    <el-tooltip v-show="isFullscreen" effect="light" :content="$t('icon.screenNormal')">
      <ds-svg-icon icon="screen-normal"></ds-svg-icon>
    </el-tooltip>
  </span>
</template>

<script>
import screenfull from 'screenfull'

export default {
  name: 'ds-screen-toggle',
  data () {
    return {
      isFullscreen: screenfull.isFullscreen
    }
  },
  methods: {
    onScreenToggle () {
      if (!screenfull.isEnabled) {
        this.$message({
          message: 'you browser can not work',
          type: 'warning'
        })
        return false
      }
      this.isFullscreen = !this.isFullscreen
      screenfull.toggle()
    }
  }
}
</script>

<style scoped lang="scss">
  @import "~@/assets/scss/mixin.scss";

  .screen-toggle {
    margin: 0;
    padding: 0;
    cursor: pointer;

    .svg-icon {
      @include svg-icon();
    }
  }
</style>
