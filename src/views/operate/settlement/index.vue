<!--
 * @Author: Custer
 * @Date: 2022-04-07 17:23:20
 * @LastEditors: custer 525966315@qq.com
 * @LastEditTime: 2022-05-16 18:45:06
 * @Description: file content
-->
<template>
  <div class="operate-settlement-container">
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
      <template v-slot:screen-createTime="{ row, form }">
        <el-date-picker
          class="w-100-important"
          v-model="form[row.key]"
          type="date"
          placeholder="选择发起日期"
        >
        </el-date-picker>
      </template>
      <template v-slot:table-status="{ row }">
        <el-tag type="success" v-if="row.status == 1">已结算</el-tag>
        <el-tag type="warning" v-if="row.status == 2">待结算</el-tag>
        <el-tag type="danger" v-if="row.status == 3">拒绝结算</el-tag>
      </template>
      <template v-slot:table-handle="{ row }">
        <el-button type="text">结算订单</el-button>
        <el-button type="text" v-if="row.status === 1">打款信息</el-button>
        <el-button type="text" v-if="row.status === 3">查看原因</el-button>
      </template>
    </CusterCrud>
    <!-- <h3>应有的功能</h3>
    <el-input type="textarea" value="查记录，申请结算" :rows="4"></el-input>
    <h3>待考虑的功能</h3>
    <el-input type="textarea" value="根据订单？？" :rows="4"></el-input> -->
  </div>
</template>
<script>
import config from "./config";
import * as API_OPERATE_SETTLEMENT from "@/api/operate/settlement";
export default {
  name: "Operate-Settlement",
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
        let { data } = await API_OPERATE_SETTLEMENT.getList({
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
