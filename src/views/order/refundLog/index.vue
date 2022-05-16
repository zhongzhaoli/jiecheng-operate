<!--
 * @Author: Custer
 * @Date: 2022-04-06 17:38:29
 * @LastEditors: Custer
 * @LastEditTime: 2022-04-06 18:06:47
 * @Description: file content
-->
<template>
  <div class="order-refundLog-container">
    <CusterCrud
      :screenColumn="screenColumn"
      :screenConfig="screenConfig"
      :handleColumn="handleColumn"
      :tableColumn="tableColumn"
      :tableConfig="tableConfig"
      :tableData="tableData"
      :paginationPage.sync="pageParams.pageNumber"
      :paginationLimit.sync="pageParams.pageSize"
      :paginationTotal="total"
      :tableLoading="loading"
      @on-search="searchBackFun"
      @page-change="getListFun"
      @table-refresh="getListFun"
    >
      <template v-slot:screen-refundType="{ row, form }">
        <el-select class="w-100" v-model="form[row.key]" clearable></el-select>
      </template>
      <template v-slot:table-distance="{ row }">
        {{ row.distance | formatDistance }}
      </template>
      <template v-slot:table-orderPrice="{ row }">
        <span class="text-color-red">{{ row.orderPrice | formatPrice }}</span>
      </template>
      <template v-slot:table-handle="{ row }">
        <el-button type="text">查看详细</el-button>
      </template>
      <template v-slot:table-refundType="{ row }">
        <el-tag type="info" v-if="row.refundType == 1">取消订单</el-tag>
        <el-tag type="danger" v-if="row.refundType == 2">售后处理</el-tag>
      </template>
    </CusterCrud>
    <!-- <h3>应有的功能</h3>
    <el-input type="textarea" value="查" :rows="4"></el-input>
    <h3>待考虑的功能</h3>
    <el-input type="textarea" value="" :rows="4"></el-input> -->
  </div>
</template>
<script>
import config from "./config";
import * as API_ORDER_REFUNDLOG from "@/api/order/refundLog";
export default {
  name: "Order-RefundLog",
  data() {
    return {
      tableData: [],
      total: 0,
      pageParams: {
        pageSize: 10,
        pageNumber: 1,
      },
      loading: false,
      ...config,
    };
  },
  methods: {
    searchBackFun(val) {
      this.getListFun(val);
    },
    async getListFun(searchParams = {}) {
      if (this.loading) return;
      this.loading = true;
      try {
        let { data } = await API_ORDER_REFUNDLOG.getList({
          ...this.pageParams,
          ...searchParams,
        });
        this.total = data.total;
        this.tableData = data.list;
      } catch (err) {
        console.log(err);
      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {
    this.getListFun();
  },
};
</script>
<style lang="scss" scoped>
</style>