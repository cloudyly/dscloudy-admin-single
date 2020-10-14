<template>
  <div class="ds-layout-sider-item" v-if="!route.isHidden">
    <el-menu-item v-if="!route.children || route.children <= 0"
                  :index="generatePath(route.path)">
      <template>
        <ds-svg-icon v-if="route.icon" :icon="route.icon"></ds-svg-icon>
        <span slot="title">{{ getText(route, 'titleZh', 'titleEn') }}</span>
      </template>
    </el-menu-item>

    <el-menu-item v-else-if="route.children.length === 1 && !route.alwaysShow"
                  :index="generatePath(route.path + '/' + route.children[0].path)">
      <template slot="title">
        <ds-svg-icon v-if="route.children[0].icon" :icon="route.children[0].icon"></ds-svg-icon>
        <span>{{ getText(route, 'titleZh', 'titleEn') }}</span>
      </template>
    </el-menu-item>

    <el-submenu v-else :index="route.path" popper-class="pop-menu">
      <template slot="title">
        <ds-svg-icon v-if="route.icon" :icon="route.icon"></ds-svg-icon>
        <span>{{ getText(route, 'titleZh', 'titleEn') }}</span>
      </template>
      <ds-layout-sider-item v-for="item in route.children" :key="item.path" :route="item"
                            :parent-path="generatePath(route.path)"></ds-layout-sider-item>
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: 'ds-layout-sider-item',
  props: {
    route: {
      type: Object,
      required: true
    },
    parentPath: {
      type: String,
      required: true
    }
  },
  data () {
    return {}
  },
  methods: {
    generatePath (path) {
      return `${this.parentPath}/${path}`
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/scss/config.scss";

.el-submenu ::v-deep .el-submenu__title,
.el-menu-item {
  font-size: 14px;

  span {
    margin-left: 10px;
  }
}

.el-submenu,
.el-submenu:hover {
  background-color: transparent !important;
}

.el-menu-item.is-active,
.el-menu-item:focus,
.el-submenu ::v-deep .el-submenu__title:hover,
.el-submenu__title:hover,
.el-menu-item:hover {
  background-color: $color8 !important;
  border-right: 3px solid $colorM1;
  box-sizing: border-box;
  color: $color2;
  transition: border-color 0s, background-color 0s;
}

.sidebar-mini {

  .el-submenu {
    & > ::v-deep .el-submenu__title {
      text-align: center;

      & > span {
        display: none;
      }

      & > i {
        display: none;
      }
    }
  }
}

.pop-menu {
  margin-left: 2px;

  .el-menu-item {
    font-size: 14px;

    span {
      margin-left: 5px;
    }
  }
}
</style>
