<template>
  <div class="custer-crud">
    <CusterScreen class="mb-10 w-100" :screenConfig="screenConfig" :screenColumn="screenColumn" @on-search="searchBackFun" v-show="showSearch">
      <template v-for="item in screenColumn" v-slot:[item.key]="{ row, form }">
        <slot :name="`screen-${item.key}`" v-bind="{ row, form }"></slot>
      </template>
    </CusterScreen>
    <CusterHandle
      :handleColumn="handleColumn"
      :tableColumn="tableColumn"
      :handleSelectionList="tableSelect_list"
      class="w-100"
      @on-click="clickFun"
      @table-refresh="tableRefresh"
      @table-column-change="tableColumnChangeFun"
      @screen-toggle="screenToggle"
    ></CusterHandle>
    <CusterTable
      class="mt-10 w-100"
      :tableColumn="tableColumn_show"
      :tableData="tableData"
      :tableConfig="tableConfig"
      v-loading="tableLoading"
      @selection-change="tableSelectionChange"
    >
      <template v-for="item in tableColumn" v-slot:[item.key]="{ row, index }">
        <slot :name="`table-${item.key}`" v-bind="{ row, index }"></slot>
      </template>
    </CusterTable>
    <CusterPagination
      class="w-100"
      :page.sync="page"
      :limit.sync="limit"
      :total="paginationTotal"
      @limit-change="handleSizeChange"
      @page-change="handleCurrentChange"
    ></CusterPagination>
  </div>
</template>
<script>
import { defaultPage, defaultPageSize } from "@/config";
export default {
  name: "CusterCrud",
  props: {
    screenColumn: {
      type: Array,
      default: () => {
        return [];
      },
    },
    screenConfig: {
      type: Object,
      default: () => {
        return {};
      }
    },
    handleColumn: {
      type: Array,
      default: () => {
        return [];
      },
    },
    tableColumn: {
      type: Array,
      default: () => {
        return [];
      },
    },
    tableData: {
      type: Array,
      default: () => {
        return [];
      },
    },
    tableConfig: {
      type: Object,
      default: () => {
        return {};
      },
    },
    paginationPage: {
      type: Number,
      default: defaultPage,
    },
    paginationLimit: {
      type: Number,
      default: defaultPageSize,
    },
    paginationTotal: {
      type: Number,
      default: 0,
    },
    tableLoading: {
      type: Boolean,
      default: false
    },
  },
    computed: {
    page: {
      get() {
        return this.paginationPage;
      },
      set(val) {
        this.$emit("update:paginationPage", val);
      },
    },
    limit: {
      get() {
        return this.paginationLimit;
      },
      set(val) {
        this.$emit("update:paginationLimit", val);
      },
    }
  },
  data() {
    return {
      tableColumn_show: [],
      tableSelect_list: [],
      showSearch: true,
    };
  },
  mounted() {
    this.tableColumn_show = JSON.parse(JSON.stringify(this.tableColumn));
  },
  methods: {
    searchBackFun(val) {
      this.$emit("on-search", val);
    },
    tableColumnChangeFun(arr) {
      this.tableColumn_show = [];
      this.$nextTick(() => {
        this.tableColumn_show = arr;
      })
    },
    tableSelectionChange(arr){
      this.tableSelect_list = arr;
    },
    screenToggle(val){
      this.showSearch = val;
    },
    clickFun() {},
    handleSizeChange(val){
      this.$emit("limit-change", val)
    },
    handleCurrentChange(val) {
      this.$emit('page-change', val)
    },
    tableRefresh(){
      this.$emit('table-refresh');
    }
  },
};
</script>
<style lang='scss' scoped>
.custer-crud{
  width: 100%;
}
</style>