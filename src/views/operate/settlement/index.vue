<!--
 * @Author: Custer
 * @Date: 2022-04-07 17:23:20
 * @LastEditors: Custer
 * @LastEditTime: 2022-04-07 22:50:04
 * @Description: file content
-->
<template>
  <div class="operate-settlement-page">
    <h3>应有的功能</h3>
    <el-input type="textarea" value="查记录，申请结算" :rows="4"></el-input>
    <h3>待考虑的功能</h3>
    <el-input type="textarea" value="根据订单？？" :rows="4"></el-input>
  </div>
</template>
<script>
export default {
  name: "Operate-Settlement",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
  .operate-settlement-page{
    h3{
      &:first-child{
        margin-top: 0;
      }
    }
  }
</style>
