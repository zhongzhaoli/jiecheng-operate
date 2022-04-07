<!--
 * @Author: Custer
 * @Date: 2021-11-19 12:15:52
 * @LastEditors: Custer
 * @LastEditTime: 2021-11-19 16:57:06
 * @Description: file content
-->
<template>
  <el-card class="version" shadow="hover">
    <template #header>
      <CusterIcon iconName="line-chart-line" />
      系统信息
      <el-tag style="float: right;" type="info">部署时间：2021-11-19 10:42:32</el-tag>
    </template>
    <table class="table">
      <tr>
        <td>vue</td>
        <td>{{ dependencies['vue'] }}</td>
        <td>@vue/cli</td>
        <td>{{ devDependencies['@vue/cli-service'] }}</td>
      </tr>
      <tr>
        <td>vuex</td>
        <td>{{ dependencies['vuex'] }}</td>
        <td>vue-router</td>
        <td>{{ dependencies['vue-router'] }}</td>
      </tr>
      <tr>
        <td>element-ui</td>
        <td>{{ dependencies['element-ui'] }}</td>
        <td>axios</td>
        <td>{{ dependencies['axios'] }}</td>
      </tr>
      <tr>
        <td>echarts</td>
        <td>{{ dependencies['echarts'] }}</td>
        <td>sass-loader</td>
        <td>{{ dependencies['sass-loader'] }}</td>
      </tr>
    </table>
  </el-card>
</template>
<script>
import { dependencies, devDependencies } from '/package.json'
export default {
  data() {
    return {
      dependencies,
      devDependencies,
    };
  },
};
</script>
<style lang="scss" scoped>
  .table {
    width: 100%;
    color: #666;
    border-collapse: collapse;
    background-color: #fff;
    td {
      position: relative;
      padding: 9px 15px;
      overflow: hidden;
      font-size: 14px;
      line-height: 20px;
      text-overflow: ellipsis;
      white-space: nowrap;
      border: 1px solid #e6e6e6;
      &:nth-child(odd) {
        width: 20%;
        text-align: right;
        background-color: #f7f7f7;
      }
    }
  }
</style>
