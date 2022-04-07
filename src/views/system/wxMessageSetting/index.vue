<!--
 * @Author: Custer
 * @Date: 2022-04-06 20:19:23
 * @LastEditors: Custer
 * @LastEditTime: 2022-04-06 20:22:30
 * @Description: file content
-->
<template>
  <div class="system-wxMessageSetting-page">
    <h3>应有的功能</h3>
    <el-input type="textarea" value="同步，编辑，删除，开启，关闭" :rows="4"></el-input>
    <h3>待考虑的功能</h3>
    <el-input type="textarea" value="前期可不考虑" :rows="4"></el-input>
  </div>
</template>
<script>
export default {
  name: "System-WxMessageSetting",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
  .system-wxMessageSetting-page{
    h3{
      &:first-child{
        margin-top: 0;
      }
    }
  }
</style>