<!--
 * @Author: Custer
 * @Date: 2021-11-08 11:54:23
 * @LastEditors: custer 525966315@qq.com
 * @LastEditTime: 2022-05-20 15:16:56
 * @Description: file content
-->
<template>
  <div class="loginContainer">
    <el-row>
      <el-col :lg="14" :md="11" :sm="24" :xl="14" :xs="24">
        <div style="color: transparent">占位符</div>
      </el-col>
      <el-col :lg="9" :md="12" :sm="24" :xl="9" :xs="24">
        <el-form ref="form" class="loginForm" label-position="left" :model="formObj" :rules="rules">
          <div class="title">hello !</div>
          <div class="titleTips">
            {{ $t('欢迎来到') }} {{ title }}！
          </div>
          <el-form-item prop="username" style="margin-top: 40px">
            <el-input v-model.trim="formObj.username" :placeholder="$t('请输入用户名')" tabindex="1" type="text">
              <template #prefix>
                <CusterIcon iconName="user-line" />
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input :key="passwordType" ref="password" v-model.trim="formObj.password" :placeholder="$t('请输入密码')" tabindex="2" :type="passwordType" @keyup.enter.native="handleLogin">
              <template #prefix>
                <CusterIcon iconName="lock-line" />
              </template>
              <template v-if="passwordType === 'password'" #suffix>
                <CusterIcon class="showPassword" iconName="eye-off-line" @click="handlePassword"/>
              </template>
              <template v-else #suffix>
                <CusterIcon class="showPassword" iconName="eye-line" @click="handlePassword"/>
              </template>
            </el-input>
          </el-form-item>
          <!-- <el-form-item prop="verificationCode">
            <el-input :placeholder="$t('验证码')" tabindex="3" v-model="formObj.verificationCode">
              <template #prefix>
                <CusterIcon iconName="barcode-box-line" />
              </template>
            </el-input>
          </el-form-item> -->
          <el-button class="loginBtn" :loading="loading" type="primary" @click="handleLogin">
            {{ $t('登录') }}
          </el-button>
        </el-form>
      </el-col>
      <el-col :lg="1" :md="1" :sm="24" :xl="1" :xs="24">
        <div style="color: transparent">占位符</div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  data() {
    return {
      formObj: {
        username: "test",
        password: "123456",
        verificationCode: "m4m8"
      },
      redirect: "",
      loading: false,
      passwordType: "password",
      rules: {
        username: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
        password: [{ required: true, message: "密码不能为空", trigger: "blur" }],
      }
    };
  },
  computed: {
    ...mapGetters({
      title: 'settings/title',
      token: "user/token"
    })
  },
  mounted(){
    const route = this.$route;
    this.redirect = (route.query && route.query.redirect) || '/'
  },
  methods: {
    ...mapActions({
      loginAction: 'user/loginAction'
    }),
    handlePassword() {
      this.passwordType === 'password'
        ? (this.passwordType = '')
        : (this.passwordType = 'password')
    },
    handleRoute() {
      return this.redirect === '/404' || this.redirect === '/403'
        ? '/'
        : this.redirect
    },
    handleLogin(){
      this.$refs.form.validate(async (valid) => {
        if(valid){
          try {
            this.loading = true;
            await this.loginAction(this.formObj);
            this.$router.push(this.handleRoute());
          } finally {
            this.loading = false;
          }
        }
      })
    },
  }
};
</script>
<style lang="scss" scoped>
  .loginContainer{
    height: 100vh;
    background: url('~@/assets/login_images/background.jpg') center center fixed no-repeat;
    background-size: cover;
    .loginForm {
      position: relative;
      max-width: 100%;
      padding: 4.5vh;
      margin: calc((100vh - 475px) / 2) 3vw 3vw;
      overflow: hidden;
      background: url('~@/assets/login_images/login_form.png');
      background-size: 100% 100%;
      border-radius: 10px;

      .title {
        font-size: 54px;
        font-weight: 500;
        color: $base-color-white;
      }

      .titleTips {
        margin-top: 29px;
        font-size: 26px;
        font-weight: 400;
        color: $base-color-white;
      }

      .loginBtn {
        display: inherit;
        width: 220px;
        height: 50px;
        margin-top: 5px;
        font-size: 16px;
        border: 0;

        &:hover {
          opacity: 0.9;
        }

        .forget-passwordword {
          width: 100%;
          margin-top: 40px;
          text-align: left;

          .forget-password {
            width: 129px;
            height: 19px;
            font-size: 20px;
            font-weight: 400;
            color: rgba(92, 102, 240, 1);
          }
        }
      }

      .showPassword {
        position: absolute;
        right: 25px;
        left: -25px;
        font-size: 16px;
        color: #d7dee3;
        cursor: pointer;
        user-select: none;
      }

      i {
        position: absolute;
        top: 8px;
        left: 5px;
        z-index: $base-z-index;
        font-size: 16px;
        color: #d7dee3;
        cursor: pointer;
        user-select: none;
      }

      ::v-deep {
      .el-form-item {
        padding-right: 0;
        margin: 20px 0;
        color: #454545;
        background: transparent;
        border: 1px solid transparent;
        border-radius: 2px;

        &__content {
          min-height: $base-input-height;
          line-height: $base-input-height;
        }

        &__error {
          position: absolute;
          top: 100%;
          left: 18px;
          font-size: $base-font-size-small;
          line-height: 18px;
          color: $base-color-red;
        }
      }

      .el-input {
        box-sizing: border-box;

        input {
          height: 48px;
          padding-left: 35px;
          font-size: $base-font-size-default;
          line-height: 58px;
          background: #f6f4fc;
          border: 0;
        }
      }

      .code {
        position: absolute;
        top: 4px;
        right: 4px;
        cursor: pointer;
        border-radius: $base-border-radius;
      }
      }
    }
  }
</style>
