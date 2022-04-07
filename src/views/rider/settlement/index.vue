<!--
 * @Author: Custer
 * @Date: 2022-04-06 17:17:44
 * @LastEditors: Custer
 * @LastEditTime: 2022-04-07 17:25:14
 * @Description: file content
-->
<template>
  <div class="rider-settlement-page">
    <h3>应有的功能</h3>
    <el-input type="textarea" value="查，审核确认已打钱" :rows="4"></el-input>
    <h3>待考虑的功能</h3>
    <el-input type="textarea" value="" :rows="4"></el-input>
  </div>
</template>
<script>
export default {
  name: "Rider-Settlement",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
  .rider-settlement-page{
    h3{
      &:first-child{
        margin-top: 0;
      }
    }
  }
</style>
