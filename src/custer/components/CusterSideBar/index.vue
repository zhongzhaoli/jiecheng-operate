<!--
 * @Author: Custer
 * @Date: 2021-11-04 11:31:01
 * @LastEditors: Custer
 * @LastEditTime: 2021-11-05 10:21:38
 * @Description: file content
-->
<template>
  <el-scrollbar class="custer-side-bar" :class="{'is-collapse': collapse}">
    <CusterLogo v-if=" layout === 'vertical' || layout === 'comprehensive' || layout === 'float'" />
    <el-menu
      :active-text-color="variables['menu-color-active']"
      :background-color="variables['menu-background']"
      :collapse="collapse"
      :collapse-transition="false"
      :default-active="activeMenu"
      :default-openeds="defaultOpeneds"
      menu-trigger="click"
      mode="vertical"
      :text-color="variables['menu-color']"
      :unique-opened="uniqueOpened"
    >
      <template v-for="(route, index) in handleRoutes">
        <CusterMenu
          v-if="route.meta && !route.meta.hidden"
          :key="index + route.name"
          :item="route"
        />
      </template>
    </el-menu>
  </el-scrollbar>
</template>
<script>
import { mapGetters } from 'vuex';
import { defaultOpeneds, uniqueOpened } from '@/config';
import variables from '@/custer/styles/variables/variables.scss'
import { handleActivePath, handleMatched } from '@/utils/routes'
export default {
  name: "CusterSideBar",
  props: {
    layout: {
      type: String,
      default: 'vertical',
    },
  },
  data(){
    return {
      variables,
      defaultOpeneds,
      activeMenu: "",
      uniqueOpened
    }
  },
  computed: {
    ...mapGetters({
      collapse: 'settings/collapse',
      routes: 'routes/routes'
    }),
    handleRoutes(){
      const list = this.routes.flatMap((route) => {
        return route.children && route.meta.levelHidden === true ? route.children : route
      })
      return list;
    }
  },
  watch: {
    $route: {
      handler(route) {
        this.activeMenu = handleActivePath(route)
      },
      immediate: true,
    },
    activeName: {
      handler(val) {
        const matched = handleMatched(this.routes, val)
        this.activeMenu = matched[matched.length - 1].path
      },
    },
  },
  mounted(){
  }
};
</script>
<style lang='scss' scoped>
  .custer-side-bar{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: $base-left-menu-width;
    z-index: $base-z-index + 1;
    height: 100vh;
    overflow: hidden;
    transition: $base-transition;
    &.side-bar-common {
      top: $base-top-bar-height;
      height: calc(100vh - #{$base-top-bar-height});
    }

    &.is-collapse {
      width: $base-left-menu-width-min;
      border-right: 0;

      ::v-deep {
        .el-menu--collapse.el-menu {
          > .el-menu-item,
          > .el-submenu {
            text-align: center;

            .el-tag {
              display: none;
            }
          }
        }

        .el-menu-item,
        .el-submenu {
          text-align: left;
        }

        .el-menu--collapse {
          border-right: 0;

          .el-submenu__icon-arrow {
            right: 10px;
            margin-top: -3px;
          }
        }
      }
    }

    ::v-deep {
      .el-scrollbar__wrap {
        overflow-x: hidden;
      }

      .el-menu {
        border: 0;
      }

      .el-menu-item,
      .el-submenu__title {
        height: $base-menu-item-height;
        overflow: hidden;
        line-height: $base-menu-item-height;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: middle;

        i {
          color: inherit;
        }
      }

      // .el-menu-item {
        // @include active;
      // }
    }
  }
</style>