<!--
 * @Author: Custer
 * @Date: 2021-12-03 11:26:30
 * @LastEditors: Custer
 * @LastEditTime: 2021-12-06 11:19:50
 * @Description: file content
-->
<template>
  <div class="custer-tools">
    <el-form :model="toolForm">
      <template v-for="item in toolsData">
        <slot :name="item.key" v-bind="{ row: item, form: toolForm }">
          <el-form-item :label="item.label">
            <el-input v-model="toolForm[item.key]" :placeholder="item.placeholder || `请输入${item.label}`"></el-input>
          </el-form-item>
        </slot>
      </template>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "CusterTools",
  props: {
    toolsData: {
      type: Array,
       default: () => []
    }
  },
  created(){
    this.toolsData.forEach(v => {
      if(v.defaultVal) this.toolForm[v.key] = v.defaultVal;
    })
  },
  data() {
    return {
      toolForm: {}
    };
  },
};
</script>
<style lang="scss" scoped>
  .custer-tools{
    padding: 0 10px;
    ::v-deep{
      .el-form-item{
        border-bottom: 1px #eaeaea solid;
      }
    }
  }
</style>