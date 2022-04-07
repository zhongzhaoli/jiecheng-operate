<!--
 * @Author: Custer
 * @Date: 2021-12-06 11:34:52
 * @LastEditors: Custer
 * @LastEditTime: 2021-12-06 11:42:49
 * @Description: file content
-->
<template>
  <el-table :data="tableData">
    <template v-for="(item, index) in tableColumn">
      <slot :name="item.key || item.prop">
        <el-table-column :key="index" :label="item.label || item.title" :prop="item.key || item.prop"></el-table-column>
      </slot>
    </template>
  </el-table>
</template>
<script>
export default {
  name: "CusterTable",
  props: {
    tableColumn: {
      type: Array,
      default: () => []
    },
    tableData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped></style>