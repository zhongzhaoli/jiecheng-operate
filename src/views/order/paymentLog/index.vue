<!--
 * @Author: Custer
 * @Date: 2022-04-06 17:38:13
 * @LastEditors: Custer
 * @LastEditTime: 2022-04-06 18:06:38
 * @Description: file content
-->
<template>
  <div class="order-paymentLog-page">
    <h3>应有的功能</h3>
    <el-input type="textarea" value="查" :rows="4"></el-input>
    <h3>待考虑的功能</h3>
    <el-input type="textarea" value="" :rows="4"></el-input>
  </div>
</template>
<script>
export default {
  name: "Order-PaymentLog",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
  .order-paymentLog-page{
    h3{
      &:first-child{
        margin-top: 0;
      }
    }
  }
</style>