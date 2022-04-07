<!--
 * @Author: Custer
 * @Date: 2021-11-03 11:29:24
 * @LastEditors: Custer
 * @LastEditTime: 2021-11-05 17:18:24
 * @Description: file content
-->
<template>
  <div class="custer-admin-wrapper">
    <component :is="'custer-layout-' + theme.layout" :fixed-header="theme.fixedHeader" :collapse="collapse" :show-tabs="theme.showTabs"></component>
    <el-backtop target="#app" />

    <CusterThemeDrawer/>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      theme: "settings/theme",
      collapse: "settings/collapse"
    })
  },
  methods: {
    ...mapActions({
      updateTheme: 'settings/updateTheme',
    }),
  },
  beforeMount(){
    this.updateTheme();
  },
};
</script>
<style lang="scss" scoped>
  .custer-admin-wrapper {
    position: relative;
    width: 100%;
    height: 100%;

    [class*='custer-layout-'] {
      position: relative;

      ::v-deep {
        .custer-layout-header {
          box-shadow: $base-box-shadow;
        }
      }

      &.fixed {
        padding-top: $base-nav-height + $base-tabs-height;
      }

      &.fixed.no-tabs-bar {
        padding-top: $base-nav-height;
      }
    }

    ::v-deep {
      .fixed-header {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: $base-z-index - 1;
        width: 100%;
      }

      .custer-main {
        position: relative;
        width: auto;
        min-height: 100%;
        margin-left: $base-left-menu-width;

        &.is-collapse-main {
          margin-left: $base-left-menu-width-min;

          .fixed-header {
            left: $base-left-menu-width-min;
            width: calc(100% - #{$base-left-menu-width-min});
          }
        }
      }
    }
  }
</style>
