<!--
 * @Author: Custer
 * @Date: 2021-11-24 17:08:31
 * @LastEditors: Custer
 * @LastEditTime: 2021-11-26 11:43:55
 * @Description: file content
-->
<template>
  <div class="permissionPage">
    <!-- Admin角色才有的按钮 -->
    <el-button type="primary" v-permissions="['Admin']">Admin 按钮</el-button>
    <!-- Editor角色才有的按钮 -->
    <el-button type="primary" v-permissions="['Editor']">Editor 按钮</el-button>
    <!-- 同时拥有Admin和Editor角色才有的按钮 -->
    <el-button type="primary" v-permissions="{ role: ['Admin', 'Editor'], mode: 'allOf' }">同时拥有Admin和Editor角色的按钮</el-button>
    <!-- 拥有Admin或Editor角色才有的按钮 -->
    <el-button type="primary" v-permissions="{ role: ['Admin', 'Editor'], mode: 'oneOf' }">拥有Admin或Editor角色的按钮</el-button>
    <!-- 拥有write:system权限才有的按钮 -->
    <el-button type="primary" v-permissions="{ permission: ['write:system'], mode: 'oneOf' }">拥有write:system权限才有的按钮</el-button>
    <!-- 拥有Admin和write:system权限才有的按钮 -->
    <el-button type="primary" v-permissions="{ role: ['Admin'], permission: ['write:system'] }">拥有Admin和write:system权限才有的按钮</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
  .permissionPage{
    background: #fff;
    border-radius: 4px;
    padding: 20px;
  }
</style>
