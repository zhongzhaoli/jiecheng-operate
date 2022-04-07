<!--
 * @Author: Custer
 * @Date: 2022-04-06 17:36:04
 * @LastEditors: Custer
 * @LastEditTime: 2022-04-07 22:48:40
 * @Description: file content
-->
<template>
  <div class="order-afterSale-page">
    <h3>应有的功能</h3>
    <el-input type="textarea" value="增删查改，售后处理（退款，调解），联系相关人员" :rows="4"></el-input>
    <h3>待考虑的功能</h3>
    <el-input type="textarea" value="退款的金额可否修改（修改后，骑手收益又是怎样的？）" :rows="4"></el-input>
  </div>
</template>
<script>
export default {
  name: "Order-AfterSale",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
  .order-afterSale-page{
    h3{
      &:first-child{
        margin-top: 0;
      }
    }
  }
</style>