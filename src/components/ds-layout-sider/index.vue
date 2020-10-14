<template>
  <div class="ds-layout-sider" :class="isMenuOpen ? '' : 'sidebar-mini'" v-if="currentModule">
    <div class="header">
      <div class="title" :class="isMenuOpen ? '' : 'hide-title'">{{ getText(currentModule, 'titleZh', 'titleEn') }}</div>
      <el-button type="text" class="icon" @click="onMenuToggleBtnClick">
        <ds-svg-icon icon="menu-btn" :class-name="isMenuOpen ? '' : 'menu-close'"></ds-svg-icon>
      </el-button>
    </div>

    <el-menu mode="vertical"
             :default-active="$route.path"
             :collapse="!isMenuOpen"
             :router="true"
             :unique-opened="false"
             class="ds-layout-menu">
      <el-scrollbar :native="false" v-if="currentModule">
        <ds-layout-sider-item v-for="item in currentModule.children"
                              :key="item.path"
                              :route="item"
                              :parent-path="''">
        </ds-layout-sider-item>
      </el-scrollbar>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'ds-layout-sider',
  mounted () {
    console.log(this.currentModule)
  },
  methods: {
    onMenuToggleBtnClick () {
      this.$store.commit('app/setIsMenuOpen', !this.isMenuOpen)
    }
  },
  computed: {
    currentModuleCode () {
      return this.$store.getters['route/currentModuleCode']
    },
    currentModule () {
      return this.$store.getters['user/privileges']
        .find(item => item.code === this.currentModuleCode)
    },
    isMenuOpen () {
      return this.$store.getters['app/isMenuOpen']
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/scss/mixin.scss";
.ds-layout-sider {
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  overflow: hidden;
  -webkit-box-shadow: 2px 0 6px rgba(0, 21, 41, .35);
  box-shadow: 2px 0 6px rgba(0, 21, 41, .35);
  transition: width 0.28s;
  background-color: transparent;
  @include flex-col();

  .header {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: $color8;
    border-bottom: 1px $color8 solid;
    @include flex();
    margin-bottom: 5px;
    color: $color3;

    .title {
      flex: 1;
      margin-left: 10px;
      font-size: 14px;
      display: block;
      opacity: 0.8;

      transition: display .1s ;
    }

    .hide-title {
      display: none;
    }

    .icon {
      width: $leftWidthMin;
      text-align: center;
      opacity: 0.8;
      font-size: 16px;
      color: $color3;

      .ds-svg-icon {
        transition: .3s;
      }

      .menu-close {
        transform: rotate(90deg);
      }
    }
    .icon:hover {
      color: $color4;
    }
  }

  .ds-layout-menu {
    flex: 1;
    border: none;
    overflow: hidden;
    //width: $leftWidthMax;
    width: 100%;

    .el-scrollbar {
      height: 100%;

      .el-scrollbar__wrap{
        overflow-x: hidden;
      }
    }
  }
}
</style>
