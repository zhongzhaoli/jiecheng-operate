<!--
 * @Author: Custer
 * @Date: 2022-04-06 17:38:29
 * @LastEditors: Custer
 * @LastEditTime: 2022-04-06 18:06:47
 * @Description: file content
-->
<template>
  <div class="order-refundLog-page">
    <h3>应有的功能</h3>
    <el-input type="textarea" value="查" :rows="4"></el-input>
    <h3>待考虑的功能</h3>
    <el-input type="textarea" value="" :rows="4"></el-input>
  </div>
</template>
<script>
export default {
  name: "Order-RefundLog",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
  .order-refundLog-page{
    h3{
      &:first-child{
        margin-top: 0;
      }
    }
  }
</style>