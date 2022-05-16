<!--
 * @Author: Custer
 * @Date: 2022-04-06 17:35:51
 * @LastEditors: Custer
 * @LastEditTime: 2022-04-06 17:58:36
 * @Description: file content
-->
<template>
  <div class="order-list-container">
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
      <template v-slot:table-name="{ row }">
        <div class="nameBox">
          <div class="textEllipsis-1">{{ row.name }}</div>
          <el-link type="primary" class="textEllipsis-1" :underline="false">
            <CusterIcon iconName="phone-line"></CusterIcon>
            {{ row.phone }}
          </el-link>
        </div>
      </template>
      <template v-slot:table-status="{ row }">
        <el-tag type="warning" v-if="row.status == 1">待接单</el-tag>
        <el-tag type="warning" v-if="row.status == 2">已接单，待支付</el-tag>
        <el-tag type="primary" v-if="row.status == 3">已支付，配送中</el-tag>
        <el-tag type="warning" v-if="row.status == 4">骑手确认送达</el-tag>
        <el-tag type="success" v-if="row.status == 5">已完成</el-tag>
        <el-tag type="info" v-if="row.status == 6">已取消</el-tag>
        <el-tag type="danger" v-if="row.status == 7">售后中</el-tag>
      </template>
      <template v-slot:table-handle="{ row }">
        <el-button type="text">查看详细</el-button>
        <el-button type="text">修改状态</el-button>
        <el-button type="text" v-if="row.status != 1">骑手信息</el-button>
      </template>
    </CusterCrud>
    <!-- <h3>应有的功能</h3>
    <el-input type="textarea" value="增删查改，修改订单状态，评价" :rows="4"></el-input>
    <h3>待考虑的功能</h3>
    <el-input type="textarea" value="地图" :rows="4"></el-input> -->
  </div>
</template>
<script>
import config from "./config";
import * as API_ORDER_LIST from '@/api/order/list';
export default {
  name: "Order-List",
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
        let { data } = await API_ORDER_LIST.getList({
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
  .order-list-container{
  }
</style>
