<!--
 * @Author: Custer
 * @Date: 2021-11-29 17:47:47
 * @LastEditors: Custer
 * @LastEditTime: 2021-11-29 18:03:22
 * @Description: file content
-->
<template>
  <!-- 横向布局 -->
  <div class="custer-layout-horizontal" :class="{fixed: fixedHeader,'no-tabs-bar': !showTabs}">
    <div class="custer-layout-header" :class="{'fixed-header': fixedHeader,}">
      <CusterHeader/>
      <div v-show="showTabs" :class="{ 'custer-tabs-horizontal': showTabs }">
        <div class="custer-main">
          <CusterTabs />
        </div>
      </div>
    </div>
    <div class="custer-main main-padding">
      <CusterAppMain/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'custerLayoutHorizontal',
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
      device: {
        type: String,
        default() {
          return 'desktop'
        },
      },
    },
  }
</script>

<style lang="scss" scoped>
  .custer-layout-horizontal {
    ::v-deep {
      .custer-main {
        width: 100% !important;
        margin: auto;
      }
    }

    .custer-tabs-horizontal {
      background: $base-color-white;
      box-shadow: $base-box-shadow;
    }

    .custer-nav {
      .fold-unfold {
        display: none;
      }
    }
  }
</style>
