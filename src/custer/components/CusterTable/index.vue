<!--
 * @Author: Custer
 * @Date: 2021-12-06 11:34:52
 * @LastEditors: Custer
 * @LastEditTime: 2021-12-06 11:42:49
 * @Description: file content
-->
<template>
  <el-table
    :size="TABLE_DEFAULT_SIZE"
    class="w-100"
    ref="table"
    :data="tableData"
    @selection-change="handleSelectionChange"
  >
    <template v-if="tableConfig && tableConfig.selection">
      <el-table-column
        type="selection"
        align="center"
        width="80px"
      ></el-table-column>
    </template>
    <template v-if="tableConfig && tableConfig.index">
      <el-table-column
        type="index"
        align="center"
        label="序号"
        width="100px"
      ></el-table-column>
    </template>
    <template v-for="(item, index) in tableColumn">
      <el-table-column
        :align="item.align || TABLE_DEFAULT_ALIGN"
        :type="item.type || ''"
        :width="item.width || ''"
        :min-width="item.minWidth || ''"
        :key="index"
        :label="item.label || item.title"
        :prop="item.key || item.prop"
        :fixed="item.fixed"
        :show-overflow-tooltip="item.tooltip || false"
      >
        <template slot-scope="scope">
          <slot
            :name="item.key || item.prop"
            v-bind="{ row: scope.row, index: scope.$index }"
          >
            <span>{{ scope.row[item.key] || '-' }}</span>
          </slot>
        </template>
      </el-table-column>
    </template>
  </el-table>
</template>
<script>
const TABLE_DEFAULT_ALIGN = "left";
const TABLE_DEFAULT_SIZE = "large";
export default {
  name: "CusterTable",
  props: {
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
  },
  methods: {
    handleSelectionChange(arr) {
      if (this.tableConfig && this.tableConfig.selection) {
        this.$emit("selection-change", arr);
      }
    },
  },
  data() {
    return {
      TABLE_DEFAULT_ALIGN,
      TABLE_DEFAULT_SIZE,
    };
  },
  activated(){
    this.$refs.table.doLayout();
  }
};
</script>
<style lang="scss" scoped></style>