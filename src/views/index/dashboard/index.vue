<!--
 * @Author: Custer
 * @Date: 2021-11-03 11:35:02
 * @LastEditors: Custer
 * @LastEditTime: 2022-04-06 16:59:02
 * @Description: file content
-->
<template>
  <div class="index-dashboard-page">
    <h3>应有的功能</h3>
    <el-input type="textarea" value="订单统计图，订单数量，用户新增统计图，用户数量" :rows="4"></el-input>
    <h3>待考虑的功能</h3>
    <el-input type="textarea" :rows="4"></el-input>
    <!-- <el-row :gutter="10">
      <el-col :lg="24">
        <Welcome/>
      </el-col>
      <el-col :lg="6">
        <Access/>
      </el-col>
      <el-col :lg="6">
        <Authorization/>
      </el-col>
      <el-col :lg="12">
        <Version/>
      </el-col>
      <el-col :lg="12">
        <ChinaMap/>
      </el-col>
      <el-col :lg="12">
        <Plan/>
      </el-col>
    </el-row> -->
  </div>
</template>
<script>
import Welcome from '../components/welcome.vue';
import Plan from '../components/plan.vue';
import Access from '../components/access.vue';
import Authorization from '../components/authorization.vue';
import Version from '../components/version.vue';
import ChinaMap from '../components/chinaMap.vue'
export default {
  name: "Index-Dashboard",
  components: { Welcome, Plan, Access, Authorization, Version, ChinaMap },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
  .index-dashboard-page{
    h3{
      &:first-child{
        margin-top: 0;
      }
    }
    ::v-deep {
      .access,
      .authorization,
      .version {
        min-height: 268px;
      }
      .el-card__body {
        position: relative;
        .echarts {
          width: 100%;
          height: 170px;
        }
      }
    }
  }
</style>
