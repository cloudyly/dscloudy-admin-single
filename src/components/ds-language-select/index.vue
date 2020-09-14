<template>
  <el-dropdown class="ds-language-select" trigger="click" @command="onLanguageChange">
    <span>
      <el-tooltip effect="light" :content="$t('icon.changeLanguage')">
        <ds-svg-icon icon="language"></ds-svg-icon>
      </el-tooltip>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item v-for="item in languageOptions" :key="item.value" :command="item.value"
                        :disabled="language === item.value">{{item.label}}
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: 'ds-language-select',
  data () {
    return {
      languageOptions: [
        { label: '中文-简体', value: 'zh' },
        { label: 'English', value: 'en' }
      ]
    }
  },
  methods: {
    onLanguageChange (lang) {
      this.$i18n.locale = lang
      this.$store.commit('app/setLanguage', lang)
    }
  },
  computed: {
    language () {
      return this.$store.getters['app/getLanguage']
    }
  }
}
</script>

<style scoped lang="scss">
  @import "~@/assets/scss/mixin.scss";

  .ds-language-select {
    .ds-svg-icon {
      @include svg-icon();
      cursor: pointer;
    }
  }
</style>
