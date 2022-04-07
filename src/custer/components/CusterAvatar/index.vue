<!--
 * @Author: Custer
 * @Date: 2021-11-05 11:05:25
 * @LastEditors: Custer
 * @LastEditTime: 2021-12-03 15:06:37
 * @Description: file content
-->
<template>
  <el-dropdown @visible-change="handleVisibleChange" @command="handleCommand">
    <span class="avatar-dropdown">
      <el-avatar class="user-avatar" :src="avatar" />
      <div class="user-name">
        <span class="hidden-xs-only">Admin</span>
        <CusterIcon
          class="custer-dropdown"
          :class="{ 'custer-dropdown-active': active }"
          iconName="arrow-down-s-line"
        />
      </div>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="personalCenter">
          <CusterIcon class="mr" iconName="user-line" />
          {{ $t('个人中心') }}
        </el-dropdown-item>
        <el-dropdown-item command="logout">
          <CusterIcon class="mr" iconName="logout-circle-r-line" />
          {{ $t('退出登录') }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import { toLoginRoute } from '@/utils/routes';
export default {
  name: "CusterAvatar",
  data(){
    return {
      active: false,
    }
  },
  computed: {
    ...mapGetters({
      avatar: "user/avatar"
    })
  },
  methods: {
    ...mapActions({
      _logout: 'user/logout',
    }),
    handleVisibleChange(val) {
      this.active = val
    },
    handleCommand(command){
      switch (command) {
        case 'logout':
          this.logout()
          break
        case 'personalCenter':
          console.log("userInfo");
          break
      }
    },
    async logout(){
      await this._logout();
      this.$router.push(toLoginRoute(this.$route.fullPath))
    }
  }
};
</script>
<style lang="scss" scoped>
  .el-dropdown-menu__item{
    display: flex;
    align-items: center;
    .mr{
      margin-right: 5px !important;
    }
  }
  .avatar-dropdown {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    justify-items: center;

    .user-avatar {
      width: 30px;
      height: 30px;
      margin-left: 15px;
      cursor: pointer;
      border-radius: 50%;
    }

    .user-name {
      position: relative;
      display: flex;
      align-content: center;
      align-items: center;
      height: 40px;
      margin-left: 6px;
      line-height: 40px;
      cursor: pointer;

      [class*='ri-'] {
        margin-left: 0 !important;
      }
    }
  }
</style>