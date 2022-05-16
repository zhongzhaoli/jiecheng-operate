<!--
 * @Author: Custer
 * @Date: 2022-04-06 17:18:20
 * @LastEditors: Custer
 * @LastEditTime: 2022-04-06 20:13:38
 * @Description: file content
-->
<template>
  <div class="rider-review-container">
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
      <template v-slot:table-status="{ row }">
        <el-tag type="success" v-if="row.status == 1">通过</el-tag>
        <el-tag type="warning" v-if="row.status == 2">待审核</el-tag>
        <el-tag type="error" v-if="row.status == 3">拒绝</el-tag>
      </template>
      <template v-slot:table-handle="{ row }">
        <el-button type="text">审核信息</el-button>
        <el-button type="text">联系运营团队</el-button>
        <el-button type="text" v-if="row.status == 2">通过</el-button>
        <el-button type="text" v-if="row.status == 2">拒绝</el-button>
        <el-button type="text" v-if="row.status == 3">拒绝原因</el-button>
      </template>
    </CusterCrud>
    <!-- <h3>应有的功能</h3>
    <el-input type="textarea" value="查，审核" :rows="4"></el-input>
    <h3>待考虑的功能</h3>
    <el-input type="textarea" value="" :rows="4"></el-input> -->
  </div>
</template>
<script>
import config from "./config";
import * as API_RIDER_REVIEW from '@/api/rider/review';
export default {
  name: "Rider-Review",
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
        let { data } = await API_RIDER_REVIEW.getList({
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
.rider-review-page {
  h3 {
    &:first-child {
      margin-top: 0;
    }
  }
}
</style>