<!--
 * @Author: Custer
 * @Date: 2021-12-10 14:06:19
 * @LastEditors: Custer
 * @LastEditTime: 2021-12-20 11:14:47
 * @Description: file content
-->
<template>
  <el-pagination
    :total="total"
    :background="true"
    :layout="layout || PAGINATION_DEFAULT_LAYOUT"
    :current-page.sync="currentPage"
    :page-size.sync="pageSize"
    :page-sizes="pageSizes"
    :style="{ textAlign: align || PAGINATION_DEFAULT_ALIGN }"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  ></el-pagination>
</template>
<script>
import { defaultPageSizes, defaultPageSize } from '@/config';
const PAGINATION_DEFAULT_LAYOUT = "total, sizes, prev, pager, next, jumper";
const PAGINATION_DEFAULT_ALIGN = "right";
export default {
  name: "CusterPagination",
  props: {
    total: {
      type: Number,
      default: 0,
    },
    layout: {
      type: String,
      default: PAGINATION_DEFAULT_LAYOUT,
    },
    page: {
      type: Number,
      default: 1,
    },
    limit: {
      type: Number,
      default: defaultPageSize,
    },
    pageSizes: {
      type: Array,
      default: () => defaultPageSizes
    },
    align: {
      type: String,
      default: PAGINATION_DEFAULT_ALIGN
    }
  },
  computed: {
    currentPage: {
      get() {
        return this.page;
      },
      set(val) {
        this.$emit("update:page", val);
      },
    },
    pageSize: {
      get() {
        return this.limit;
      },
      set(val){
        this.$emit("update:limit", val);
      }
    },
  },
  data() {
    return {
      PAGINATION_DEFAULT_LAYOUT,
      PAGINATION_DEFAULT_ALIGN
    };
  },
  methods: {
    handleSizeChange(val){
      this.$emit("limit-change", { page: this.currentPage, limit: val })
    },
    handleCurrentChange(val) {
      this.$emit('page-change', { page: val, limit: this.pageSize })
    }
  }
};
</script>
<style lang="scss" scoped></style>
