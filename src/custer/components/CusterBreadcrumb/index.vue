<!--
 * @Author: Custer
 * @Date: 2021-11-05 10:05:01
 * @LastEditors: Custer
 * @LastEditTime: 2021-11-05 12:15:55
 * @Description: file content
-->
<template>
  <el-breadcrumb class="custer-breadcrumb" separator="/">
    <template v-for="(item, index) in breadcrumbList">
      <el-breadcrumb-item :key="index" :to="{ path: item.redirect }">
        <CusterIcon v-if="item.meta && item.meta.icon" :iconName="item.meta.icon" />
        <span class="title"> {{ $t(item.meta.title) }} </span>
      </el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>
<script>
import { mapGetters } from 'vuex';
import { handleMatched } from '@/utils/routes'
export default {
  name: "CusterBreadcrumb",
  computed: {
    ...mapGetters({
      routes: 'routes/routes',
    }),
    breadcrumbList() {
      return handleMatched(this.routes, this.$route.name).filter(
        (item) => item.meta.breadcrumbHidden !== true
      )
    },
  },
  data(){
    return {}
  }
};
</script>
<style lang="scss" scoped>
  .custer-breadcrumb {
    height: $base-nav-height;
    font-size: $base-font-size-default;
    line-height: $base-nav-height;
    ::v-deep {
      .el-breadcrumb__item {
        display: inline-flex;
        align-items: center;
        .title{
          margin-left: 5px;
        }
        .el-breadcrumb__inner {
          font-weight: normal;
          color: #515a6e;
          display: inline-flex;
          align-items: center;
        }

        .el-breadcrumb__separator{
          margin: 0 12px;
        }

        .is-link {
          font-weight: normal;
          color: #515a6e;
        }

        &:last-child {
          .el-breadcrumb__inner {
            a {
              color: #999;
            }
          }
        }
      }
    }
  }
</style>
