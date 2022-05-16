<!--
 * @Author: Custer
 * @Date: 2022-04-06 17:08:58
 * @LastEditors: Custer
 * @LastEditTime: 2022-04-06 17:32:37
 * @Description: file content
-->
<template>
  <div class="rider-list-container">
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
      <template v-slot:screen-status="{ row, form }">
        <el-select class="w-100" v-model="form[row.key]" clearable> </el-select>
      </template>
      <template v-slot:table-name="{ row }">
        <div class="nameBox d-flex ai-center w-100">
          <el-avatar :size="30" fit="fill" :src="row.avatar"></el-avatar>
          <div class="name ml-10 textEllipsis-1">{{ row.name }}</div>
        </div>
      </template>
      <template v-slot:table-balance="{ row }">
        <span class="text-color-price">{{ row.balance | formatPrice }}</span>
      </template>
      <template v-slot:table-status="{ row }">
        <el-switch v-model="row.status" :active-value="1" :inactive-value="0"></el-switch>
      </template>
      <template v-slot:table-praise="{ row }">
        {{ row.praise }}星
      </template>
      <template v-slot:table-onTime="{ row }">
        {{ row.onTime }}%
      </template>
      <template v-slot:table-handle="{ row }">
        <el-button type="text">编辑</el-button>
        <el-button type="text">查看信息</el-button>
        <el-button type="text">发站内信</el-button>
        <el-button type="text">提现记录</el-button>
      </template>
    </CusterCrud>
    <!-- <h3>应有的功能</h3>
    <el-input type="textarea" value="增删查改，查看审核信息，启用，停用（禁止接单），余额（可提现金额），订单数，提现记录" :rows="4"></el-input>
    <h3>待考虑的功能</h3>
    <el-input type="textarea" value="" :rows="4"></el-input> -->
  </div>
</template>
<script>
import config from "./config";
import * as API_RIDER_LIST from '@/api/rider/list';
export default {
  name: "Rider-List",
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
        let { data } = await API_RIDER_LIST.getList({
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
.rider-list-container{
  & .nameBox{
    height: 30px;
    & > .name{
      flex: 1;
    }
  }
}
</style>
