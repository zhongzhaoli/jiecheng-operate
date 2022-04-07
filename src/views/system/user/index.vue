<!--
 * @Author: Custer
 * @Date: 2022-04-06 20:14:02
 * @LastEditors: Custer
 * @LastEditTime: 2022-04-06 20:15:21
 * @Description: file content
-->
<template>
  <div class="system-user-page">
    <h3>应有的功能</h3>
    <el-input type="textarea" value="增删查改，修改密码，设置角色，启用，禁用" :rows="4"></el-input>
    <h3>待考虑的功能</h3>
    <el-input type="textarea" value="" :rows="4"></el-input>
  </div>
</template>
<script>
export default {
  name: "System-User",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
  .system-user-page{
    h3{
      &:first-child{
        margin-top: 0;
      }
    }
  }
</style>