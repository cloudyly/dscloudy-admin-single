<template>
  <div class="site">
    <div class="header">
      <ds-layout-header></ds-layout-header>
    </div>
    <div class="content">
      <div class="left"></div>
      <div class="main"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'layout',
  data () {
    return {
      token: this.$store.getters['user/token']
    }
  }
}
</script>

<style scoped lang="scss">
  @import "~@/assets/scss/mixin.scss";

  .site {
    @include flex-col('flex-start', 'start');

    .header {
      height: $topNavHeight;
      background-color: $colorM2;
      color: $color6;
    }

    .content {
      flex: 1;
      overflow: hidden;
      @include flex('flex-start', 'start');

      .left {
        transition: width .3s;
        background-color: $color14;
        width: $leftWidthMax;
      }

      .main {
        @include flex-col('flex-start', 'start');
        width: 100%;
        flex: 1;
        overflow: hidden;
      }
    }
  }
</style>
