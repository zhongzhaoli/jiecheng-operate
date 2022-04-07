<!--
 * @Author: Custer
 * @Date: 2021-11-19 10:50:05
 * @LastEditors: Custer
 * @LastEditTime: 2021-11-19 17:31:38
 * @Description: file content
-->
<template>
  <div class="echarts" ref="echarts"/>
</template>
<script>
import * as echarts from 'echarts';
import theme from './theme/custer-echarts-theme.json'
export default {
  name: "CusterChart",
  props: {
    option: {
      type: Object,
      default: () => {}
    },
    initOptions: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {};
  },
  watch: {
    option(v1){
      this.drawEcharts();
    }
  },
  methods: {
    drawEcharts(){
      const chart = echarts.init(this.$refs.echarts, theme, this.initOptions);
      chart.setOption(this.option);
    }
  },
  mounted(){
    this.drawEcharts();
  },
  registerMap(mapName, geoJSON, specialAreas) {
    echarts.registerMap(mapName, geoJSON, specialAreas)
  },
  graphic: echarts.graphic
};
</script>
<style lang="scss" scoped></style>
