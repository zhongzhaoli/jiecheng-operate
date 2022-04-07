<!--
 * @Author: Custer
 * @Date: 2021-11-04 17:50:23
 * @LastEditors: Custer
 * @LastEditTime: 2021-11-29 18:23:21
 * @Description: file content
-->
<template>
  <div class="custer-nav">
    <el-row :gutter="15">
      <el-col :lg="12" :md="12" :sm="12" :xl="12" :xs="4">
        <div class="left-panel">
          <CusterFold v-if="layout !== 'float'"/>
          <CusterBreadcrumb/>
        </div>
      </el-col>
      <el-col :lg="12" :md="12" :sm="12" :xl="12" :xs="20">
        <div class="right-panel">
          <CusterSearch/>
          <CusterNotice/>
          <CusterFullScreen/>
          <CusterLanguage/>
          <CusterTheme/>
          <CusterRefresh/>
          <CusterAvatar/>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "CusterNav",
  props: {
    layout: {
      type: String,
      default: '',
    },
  },
  data(){
    return {}
  }
};
</script>
<style lang='scss' scoped>
  .custer-nav {
    position: relative;
    height: $base-nav-height;
    padding-right: $base-padding;
    padding-left: $base-padding;
    overflow: hidden;
    user-select: none;
    background: $base-color-white;
    box-shadow: $base-box-shadow;
    .left-panel {
      display: flex;
      align-items: center;
      justify-items: center;
      height: $base-nav-height;
      ::v-deep {
        .fold-unfold {
          margin-right: $base-margin;
        }

        .el-tabs {
          width: 100%;
          margin-left: $base-margin;

          .el-tabs__header {
            margin: 0;

            > .el-tabs__nav-wrap {
              display: flex;
              align-items: center;

              .el-icon-arrow-left,
              .el-icon-arrow-right {
                font-weight: 600;
                color: $base-color-grey;
              }
            }
          }

          .el-tabs__item {
            > div {
              display: flex;
              align-items: center;

              i {
                margin-right: 3px;
              }
            }
          }
        }

        .el-tabs__nav-wrap::after {
          display: none;
        }
      }
    }
    .right-panel {
      display: flex;
      align-content: center;
      align-items: center;
      justify-content: flex-end;
      height: $base-nav-height;

      ::v-deep {
        [class*='ri-'] {
          margin-left: $base-margin;
          color: $base-color-grey;
          cursor: pointer;
        }

        button {
          [class*='ri-'] {
            margin-left: 0;
            color: $base-color-white;
            cursor: pointer;
          }
        }
      }
    }
  }
</style>