<!--
 * @Author: Custer
 * @Date: 2022-04-06 20:17:11
 * @LastEditors: Custer
 * @LastEditTime: 2022-04-06 20:17:11
 * @Description: file content
-->
<template>
  <div class="system-dict-page">
    <h3>应有的功能</h3>
    <el-input type="textarea" value="增删查改，设置属性值" :rows="4"></el-input>
    <h3>待考虑的功能</h3>
    <el-input type="textarea" value="" :rows="4"></el-input>
  </div>
</template>
<script>
export default {
  name: "System-Dict",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
  .system-dict-page{
    h3{
      &:first-child{
        margin-top: 0;
      }
    }
  }
</style>