<!--
 * @Author: Custer
 * @Date: 2022-04-06 17:35:51
 * @LastEditors: Custer
 * @LastEditTime: 2022-04-06 17:58:36
 * @Description: file content
-->
<template>
  <div class="order-list-page">
    <h3>应有的功能</h3>
    <el-input type="textarea" value="增删查改，修改订单状态，评价" :rows="4"></el-input>
    <h3>待考虑的功能</h3>
    <el-input type="textarea" value="地图" :rows="4"></el-input>
  </div>
</template>
<script>
export default {
  name: "Order-List",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
  .order-list-page{
    h3{
      &:first-child{
        margin-top: 0;
      }
    }
  }
</style>
