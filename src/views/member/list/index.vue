<!--
 * @Author: Custer
 * @Date: 2022-04-06 17:00:02
 * @LastEditors: Custer
 * @LastEditTime: 2022-04-07 22:46:12
 * @Description: file content
-->
<template>
  <div class="member-list-page">
    <h3>应有的功能</h3>
    <el-input type="textarea" value="" :rows="4"></el-input>
    <h3>待考虑的功能</h3>
    <el-input type="textarea" value="增删查改" :rows="4"></el-input>
  </div>
</template>
<script>
export default {
  name: "Member-List",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
  .member-list-page{
    h3{
      &:first-child{
        margin-top: 0;
      }
    }
  }
</style>
