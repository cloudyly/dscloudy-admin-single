<template>
  <div class="ds-layout-header">
    <div class="left">
      <span class="title">{{$t('app.appName')}}</span>
      <span class="version">{{version}}</span>
    </div>

    <div class="middle">
      <el-menu :default-active="activeIndex" class="top-menu" mode="horizontal" @select="onTopMenuSelect">
        <el-menu-item v-for="item in modules" :key="item.code" :index="item.code">
          <div class="item" slot="title">
            <ds-svg-icon :icon="item.icon"></ds-svg-icon>
            <div class="title">{{ getText(item, 'titleZh', 'titleEn') }}</div>
          </div>
        </el-menu-item>
      </el-menu>
    </div>

    <div class="right">
      <div class="item">
        <ds-language-select></ds-language-select>
      </div>
      <div class="item">
        <el-tooltip effect="light" :content="$t('icon.errorLog')">
          <ds-svg-icon icon="error-log"></ds-svg-icon>
        </el-tooltip>
      </div>
      <div class="item">
        <ds-screen-toggle></ds-screen-toggle>
      </div>
      <el-dropdown class="item user-info" trigger="click">
        <span><img class="avatar" src="../../assets/img/default-user-pic.png">
          {{userInfo.name || ''}}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <div>{{$t('app.changePwd')}}</div>
          </el-dropdown-item>
          <el-dropdown-item divided>
            <div @click="logout">{{$t('app.logout')}}</div>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ds-layout-header',
  data () {
    return {
      version: require('../../../package').version || '1.0.0',
      userInfo: {
        name: '测试用户'
      }
    }
  },
  mounted () {
  },
  methods: {
    onTopMenuSelect (key) {
      this.$store.commit('route/setCurrentModuleCode', key)
    },
    logout () {
      window.sessionStorage.clear()
      window.localStorage.clear()
      window.location.href = '/login'
    }
  },
  computed: {
    modules () {
      const moduleList = this.$store.getters['user/privileges'] || []
      return moduleList.filter(module => module.isModule && !module.isHidden)
    },
    activeIndex () {
      if (!this.$store.getters['route/currentModuleCode']) {
        this.$store.commit('route/setCurrentModuleCode', this.modules[0].code)
      }
      return this.$store.getters['route/currentModuleCode']
    }
  }
}
</script>

<style scoped lang="scss">
  @import "~@/assets/scss/mixin.scss";

  .ds-layout-header {
    @include flex();
    line-height: $topNavHeight;
    height: $topNavHeight;
    box-sizing: border-box;
    overflow: hidden;
    padding: 0 20px;
    -webkit-box-shadow: 0 2px 6px rgba(0, 21, 41, .35);
    box-shadow: 0 2px 6px rgba(0, 21, 41, .35);

    .left {
      .title {
        font-size: $fontC;
        color: $colorM3;
      }

      .version {
        background: $colorM1;
        font-size: 12px;
        padding: 0 10px;
        color: white;
        display: inline-block;
        height: 20px;
        line-height: 20px;
        border-radius: 10px;
        vertical-align: middle;
        margin: -5px 20px 0;
      }
    }

    .middle {
      flex: 1;
      margin: 0 20px;
      height: $topNavHeight;

      .top-menu {
        background-color: transparent;
        border: none !important;
        box-sizing: border-box;
        line-height: $topNavHeight;
        margin: 0;

        .el-menu-item {
          height: $topNavHeight;
          border: none;

          .item {
            color: $color7;
            display: flex;
            flex-direction: column;
            align-items: center;

            .ds-svg-icon {
              font-size: 20px;
              margin-top: 5px;
              margin-bottom: 3px;
            }

            .title {
              line-height: 20px;
            }
          }
        }

        .el-menu-item:hover,
        .is-active {
          background-color: $color12;
          .item {
            color: $colorM3;
          }
        }
      }
    }

    .right {
      @include flex();
      margin: 0;

      .item {
        margin: 0 15px;

        .ds-svg-icon {
          @include svg-icon();
          cursor: pointer;
        }
      }
      .user-info {
        color: $color7;
        cursor: pointer;

        .avatar {
          width: 22px;
          vertical-align: -5px;
        }
      }
    }
  }
</style>
