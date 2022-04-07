<!--
 * @Author: Custer
 * @Date: 2021-11-19 11:44:24
 * @LastEditors: Custer
 * @LastEditTime: 2021-11-19 16:56:59
 * @Description: file content
-->
<template>
  <el-card class="authorization" shadow="hover">
    <template #header>
      <CusterIcon iconName="bar-chart-2-line" />
      授权数
      <el-tag style="float: right;" type="warning">周</el-tag>
    </template>
    <CusterChart :option="option" :initOptions="initOptions"/>
  </el-card>
</template>
<script>
import CusterChart from '@/custer/components/CusterChart';
export default {
  data() {
    return {
      initOptions: {
        renderer: 'svg',
      },
      option: {
        tooltip: {
          trigger: 'axis',
          extraCssText: 'z-index:1',
        },
        grid: {
          top: "3%",
          left: "0%",
          right: "3%",
          bottom: "0%",
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            data: ['0时', '8时', '16时', '24时'],
            axisTick: {
              alignWithLabel: true,
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "#999",
                width: 0.1,
              },
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
          },
        ],
        series: [
          {
            name: '授权数',
            type: 'bar',
            barWidth: '60%',
            data: [10, 40, 20, 33, 39, 33, 22],
            itemStyle: {
              borderRadius: [2, 2, 0, 0],
              color: new CusterChart.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#83bff6' },
                { offset: 0.5, color: '#188df0' },
                { offset: 1, color: '#188df0' }
              ])
            },
          },
        ],
      },
    };
  },
};
</script>
<style lang="scss" scoped></style>
