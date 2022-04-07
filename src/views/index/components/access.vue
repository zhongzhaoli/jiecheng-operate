<!--
 * @Author: Custer
 * @Date: 2021-11-19 10:52:45
 * @LastEditors: Custer
 * @LastEditTime: 2021-11-23 14:22:43
 * @Description: file content
-->
<template>
  <el-card class="access" shadow="hover">
    <template #header>
      <CusterIcon iconName="line-chart-line" />
      访问量
      <el-tag style="float: right;" type="success">日</el-tag>
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
        tooltip: { trigger: "axis" },
        grid: {
          top: "3%",
          left: "0%",
          right: "5%",
          bottom: "0%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["08-12", "08-13", "08-14", "08-16"],
          axisLine: { lineStyle: { color: "#999", width: 0.1 } },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#999",
              width: 0.1,
            },
          },
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "访问量",
            type: "line",
            data: [3000, 4839, 2399, 4829],
            smooth: true,
            areaStyle: {},
            itemStyle: {
              borderRadius: [0, 5, 5, 0],
              color: new CusterChart.graphic.LinearGradient(0, 0, 1, 0,
                ['#3ED572', '#399efd'].map((color, offset) => ({
                  color,
                  offset,
                }))
              ),
            },
          },
        ],
      },
    };
  },
};
</script>
<style lang="scss">
.echarts {
  width: 100%;
}
</style>
