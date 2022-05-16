<!--
 * @Author: Custer
 * @Date: 2022-04-06 17:38:13
 * @LastEditors: Custer
 * @LastEditTime: 2022-04-06 18:06:38
 * @Description: file content
-->
<template>
  <div class="order-paymentLog-container">
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
      <template v-slot:table-distance="{ row }">
        {{ row.distance | formatDistance }}
      </template>
      <template v-slot:table-orderPrice="{ row }">
        <span class="text-color-red">{{ row.orderPrice | formatPrice }}</span>
      </template>
      <template v-slot:table-handle="{ row }">
        <el-button type="text">查看详细</el-button>
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
import * as API_ORDER_PAYMENTLOG from "@/api/order/paymentLog";
export default {
  name: "Order-PaymentLog",
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
        let { data } = await API_ORDER_PAYMENTLOG.getList({
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