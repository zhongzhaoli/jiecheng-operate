<!--
 * @Author: Custer
 * @Date: 2021-11-04 10:24:13
 * @LastEditors: Custer
 * @LastEditTime: 2021-11-29 17:50:40
 * @Description: file content
-->
<template>
  <div class="custer-layout-vertical" :class="{fixed: fixedHeader, 'no-tabs-bar': !showTabs}">
    <CusterSideBar/>
    <div class="custer-main" :class="{'is-collapse-main': collapse}">
      <div class="custer-layout-header" :class="{'fixed-header': fixedHeader}">
        <CusterNav/>
        <CusterTabs v-show="showTabs"/>
      </div>
      <CusterAppMain/>
    </div>
  </div>
</template>
<script>
export default {
  name: "custer-layout-vertical",
  props: {
    collapse: {
      type: Boolean,
      default() {
        return false
      },
    },
    fixedHeader: {
      type: Boolean,
      default() {
        return true
      },
    },
    showTabs: {
      type: Boolean,
      default() {
        return true
      },
    },
  },
  data(){
    return {}
  },
};
</script>
<style lang='scss' scoped>
  .custer-layout-vertical{
    .fixed-header {
      left: $base-left-menu-width;
      width: $base-right-content-width;
    }
  }
</style>