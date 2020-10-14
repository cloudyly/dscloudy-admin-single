<template>
  <div class="site">
    <div class="header">
      <ds-layout-header></ds-layout-header>
    </div>
    <div class="content">
      <div class="left" :class="isMenuOpen ? 'left-width-max' : 'left-width-min'">
        <ds-layout-sider></ds-layout-sider>
      </div>
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
  },
  computed: {
    isMenuOpen () {
      return this.$store.getters['app/isMenuOpen']
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
        background-color: $color5;
        //width: $leftWidthMax;
      }

      .left-width-max {
        width: $leftWidthMax;
      }

      .left-width-min {
        width: $leftWidthMin;
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
