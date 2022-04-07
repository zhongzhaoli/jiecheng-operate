<!--
 * @Author: Custer
 * @Date: 2022-04-06 17:08:58
 * @LastEditors: Custer
 * @LastEditTime: 2022-04-06 17:32:37
 * @Description: file content
-->
<template>
  <div class="rider-list-page">
    <h3>应有的功能</h3>
    <el-input type="textarea" value="增删查改，查看审核信息，启用，停用（禁止接单），余额（可提现金额），订单数，提现记录" :rows="4"></el-input>
    <h3>待考虑的功能</h3>
    <el-input type="textarea" value="" :rows="4"></el-input>
  </div>
</template>
<script>
export default {
  name: "Rider-List",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
  .rider-list-page{
    h3{
      &:first-child{
        margin-top: 0;
      }
    }
  }
</style>
