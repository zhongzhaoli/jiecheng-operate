<!--
 * @Author: Custer
 * @Date: 2022-04-06 20:18:34
 * @LastEditors: Custer
 * @LastEditTime: 2022-04-06 20:18:35
 * @Description: file content
-->
<template>
  <div class="system-paySetting-page">
    <h3>应有的功能</h3>
    <el-input type="textarea" value="编辑支付的一些固定参数" :rows="4"></el-input>
    <h3>待考虑的功能</h3>
    <el-input type="textarea" value="" :rows="4"></el-input>
  </div>
</template>
<script>
export default {
  name: "System-PaySetting",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
  .system-paySetting-page{
    h3{
      &:first-child{
        margin-top: 0;
      }
    }
  }
</style>