<!--
 * @Author: Custer
 * @Date: 2022-04-06 17:36:04
 * @LastEditors: Custer
 * @LastEditTime: 2022-04-06 18:05:16
 * @Description: file content
-->
<template>
  <div class="order-afterSale-container">
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
      <template v-slot:table-rider="{ row }">
        <div class="nameBox">
          <div class="textEllipsis-1">{{ row.rider }}</div>
          <el-link type="primary" class="textEllipsis-1" :underline="false">
            <CusterIcon iconName="phone-line"></CusterIcon>
            {{ row.riderPhone }}
          </el-link>
        </div>
      </template>
      <template v-slot:table-operate="{ row }">
        <div class="nameBox">
          <div class="textEllipsis-1">{{ row.operate }}</div>
          <el-link type="primary" class="textEllipsis-1" :underline="false">
            <CusterIcon iconName="phone-line"></CusterIcon>
            {{ row.operatePhone }}
          </el-link>
        </div>
      </template>
      <template v-slot:table-status="{ row }">
        <el-tag type="warning" v-if="row.status == 1">处理中</el-tag>
        <el-tag type="success" v-if="row.status == 2">已解决</el-tag>
        <el-tag type="success" v-if="row.status == 3">已退款</el-tag>
      </template>
      <template v-slot:table-handle="{ row }">
        <el-button type="text">查看详细</el-button>
        <el-button type="text" v-if="row.status == 1">介入处理</el-button>
        <el-button type="text" v-if="row.status != 1">处理过程</el-button>
      </template>
    </CusterCrud>
    <!-- <h3>应有的功能</h3>
    <el-input type="textarea" value="增删查改，联系，售后处理（退款，调解），联系相关人员" :rows="4"></el-input>
    <h3>待考虑的功能</h3>
    <el-input type="textarea" value="退款的金额可否修改（修改后，骑手收益又是怎样的？）" :rows="4"></el-input> -->
  </div>
</template>
<script>
import config from "./config";
import * as API_ORDER_AFTERSALE from "@/api/order/afterSale";
export default {
  name: "Order-AfterSale",
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
        let { data } = await API_ORDER_AFTERSALE.getList({
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
.order-afterSale-container {
}
</style>