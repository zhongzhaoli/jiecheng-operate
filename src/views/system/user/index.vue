<!--
 * @Author: Custer
 * @Date: 2022-04-06 20:14:02
 * @LastEditors: custer 525966315@qq.com
 * @LastEditTime: 2022-05-16 18:32:04
 * @Description: file content
-->
<template>
  <div class="system-user-container">
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
      <template v-slot:table-username="{ row }">
        <div class="usernameBox d-flex ai-center w-100">
          <el-avatar :size="30" fit="fill" :src="row.avatar"></el-avatar>
          <div class="name ml-10 textEllipsis-1">{{ row.username }}</div>
        </div>
      </template>
      <template v-slot:table-status="{ row }">
        <el-switch v-model="row.status" :active-value="1" :inactive-value="0"></el-switch>
      </template>
      <template v-slot:table-handle="{ row }">
        <el-button type="text">查看详细</el-button>
        <el-button type="text">修改密码</el-button>
        <el-button type="text">编辑</el-button>
        <el-button type="text">删除</el-button>
      </template>
    </CusterCrud>
    <!-- <h3>应有的功能</h3>
    <el-input type="textarea" value="增删查改，修改密码，设置角色，启用，禁用" :rows="4"></el-input>
    <h3>待考虑的功能</h3>
    <el-input type="textarea" value="" :rows="4"></el-input> -->
  </div>
</template>
<script>
import config from "./config";
import * as API_SYSTEM_USER from '@/api/system/user';
export default {
  name: "System-User",
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
        let { data } = await API_SYSTEM_USER.getList({
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
.system-user-container{
  & .usernameBox{
    height: 30px;
    & > .name{
      flex: 1;
    }
  }
}
</style>