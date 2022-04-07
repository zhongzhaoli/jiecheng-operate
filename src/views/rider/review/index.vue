<!--
 * @Author: Custer
 * @Date: 2022-04-06 17:18:20
 * @LastEditors: Custer
 * @LastEditTime: 2022-04-06 20:13:38
 * @Description: file content
-->
<template>
  <div class="rider-review-page">
    <h3>应有的功能</h3>
    <el-input type="textarea" value="查，审核" :rows="4"></el-input>
    <h3>待考虑的功能</h3>
    <el-input type="textarea" value="" :rows="4"></el-input>
  </div>
</template>
<script>
export default {
  name: "Rider-Review",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
  .rider-review-page{
    h3{
      &:first-child{
        margin-top: 0;
      }
    }
  }
</style>