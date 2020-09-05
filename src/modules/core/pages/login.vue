<template>
  <div class="site">
    <div class="login-container">
      <div class="title">{{ $t('app.appName') }}</div>
      <div class="login-wrap">
        <div class="login-title">{{ $t('core.login.loginTitle') }}</div>
        <div class="login-form">
          <el-form ref="form" label-position="left" :model="loginForm" :rules="loginRules">
            <el-form-item prop="username">
              <el-input v-model="loginForm.username" :placeholder="$t('core.login.usernamePlaceHolder')">
                <ds-svg-icon slot="prefix" class-name="login-form-icon" icon="user"></ds-svg-icon>
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input v-model="loginForm.password" :type="passwordType" :placeholder="$t('core.login.passwordPlaceHolder')">
                <ds-svg-icon slot="prefix" class-name="login-form-icon" icon="pwd"></ds-svg-icon>
                <span class="icon-eye" slot="suffix" @click="onEyeClick">
                  <ds-svg-icon class-name="login-form-icon" :icon="passwordType === 'password' ? 'eye-close' : 'eye-open'"></ds-svg-icon>
                </span>
              </el-input>
            </el-form-item>
            <el-form-item prop="validCode">
              <el-input v-model="loginForm.validCode" :placeholder="$t('core.login.validCodePlaceHolder')">
                <ds-svg-icon slot="prefix" class-name="login-form-icon" icon="valid-code"></ds-svg-icon>
                <span slot="suffix">
                  <img v-if="this.key" :src="validCodeUrl" @click="onCheckCodeClick" class="valid-code-img">
                </span>
              </el-input>
            </el-form-item>
            <el-button type="primary" class="submit-btn" @click="onLoginBtnClick">{{ $t('core.login.login') }}</el-button>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      passwordType: 'password',
      key: new Date().getTime(),
      validCodeUrl: require('@/assets/demo/valid-code.png'),
      loginRules: {
        username: [
          this.commonRules.notNullAndLengthRange(this.$t('core.login.username'), 4, 18)
        ],
        password: [
          this.commonRules.notNullAndLengthRange(this.$t('core.login.password'), 6, 18)
        ],
        validCode: [
          this.commonRules.notNullAndLength(this.$t('core.login.validCode'), 4)
        ]
      },
      loginForm: {
        username: '',
        password: '',
        validCode: ''
      }
    }
  },
  methods: {
    onEyeClick () {
      this.passwordType = this.passwordType === 'password' ? 'text' : 'password'
    },
    onCheckCodeClick () {
    },
    async onLoginBtnClick () {
      const valid = await this.$refs.form.validate()
      if (!valid) {
        return
      }
      console.log('表单校验通过，提交数据')
    }
  }
}
</script>

<style scoped lang="scss">
  @import "~@/assets/scss/config.scss";
  @import "~@/assets/scss/mixin.scss";

  .site {
    background: url("~@/assets/img/login-bg.jpg") no-repeat;
    background-size: 100% 100%;
    @include flex-col(center, center);
    color: $color6;

    .login-container {
      width: 100%;
      height: 120px;
      background-color: rgba(37, 88, 132, 0.4);
      padding: 0 20px;
      @include flex();
      position: relative;

      .title {
        font-size: 48px;
        margin-left: 10%;
      }

      .login-wrap {
        width: 400px;
        height: 290px;
        background: rgba(255, 255, 255, 0.7);
        position: absolute;
        right: 10%;
        border-radius: 3px;
        box-shadow: 1px 2px 2px 1px #FBFBFB;

        .login-title {
          font-size: 18px;
          font-weight: bold;
          color: $colorM4;
          line-height: 60px;
          border-bottom: 1px solid $colorM4;
          margin: 0 20px;
        }

        .login-form {
          margin: 20px 20px;

          ::v-deep .el-input__inner {
            border-radius: 0;
          }

          .login-form-icon {
            font-size: 14px;
            margin-bottom: -1px;
            margin-left: 2px;
            color: $color3;
          }

          .icon-eye {
            margin-right: 5px;
            cursor: pointer;
          }

          .valid-code-img {
            width: 75px;
            height: 24px;
            margin-top: 2px;
            cursor: pointer;
          }

          .submit-btn {
            margin-top: 20px;
            width: 100%;
          }

          .el-form-item.is-error .login-form-icon {
            color: red;
          }
        }
      }
    }
  }
</style>
