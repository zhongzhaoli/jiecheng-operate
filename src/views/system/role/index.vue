<!--
 * @Author: Custer
 * @Date: 2022-04-06 20:15:10
 * @LastEditors: custer 525966315@qq.com
 * @LastEditTime: 2022-05-16 18:38:11
 * @Description: file content
-->
<template>
  <div class="system-role-container">
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
        <el-date-picker class="w-100-important" v-model="form[row.key]" type="date" placeholder="选择创建日期">
        </el-date-picker>
      </template>
      <template v-slot:table-handle="{ row }">
        <el-button type="text">设置权限</el-button>
        <el-button type="text">编辑</el-button>
        <el-button type="text">删除</el-button>
      </template>
    </CusterCrud>
    <!-- <h3>应有的功能</h3>
    <el-input type="textarea" value="增删查改，设置权限" :rows="4"></el-input>
    <h3>待考虑的功能</h3>
    <el-input type="textarea" value="" :rows="4"></el-input> -->
  </div>
</template>
<script>
import config from "./config";
import * as API_SYSTEM_ROLE from "@/api/system/role";
export default {
  name: "System-Role",
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
        let { data } = await API_SYSTEM_ROLE.getList({
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