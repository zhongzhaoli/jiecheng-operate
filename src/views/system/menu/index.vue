<!--
 * @Author: Custer
 * @Date: 2022-04-06 20:16:16
 * @LastEditors: Custer
 * @LastEditTime: 2022-04-06 20:16:17
 * @Description: file content
-->
<template>
  <div class="system-menu-page">
    <h3>应有的功能</h3>
    <el-input type="textarea" value="增删查改" :rows="4"></el-input>
    <h3>待考虑的功能</h3>
    <el-input type="textarea" value="权限将会写在菜单里" :rows="4"></el-input>
  </div>
</template>
<script>
export default {
  name: "System-Menu",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
  .system-menu-page{
    h3{
      &:first-child{
        margin-top: 0;
      }
    }
  }
</style>