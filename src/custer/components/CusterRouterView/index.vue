<!--
 * @Author: Custer
 * @Date: 2021-11-05 16:36:45
 * @LastEditors: Custer
 * @LastEditTime: 2021-11-18 11:22:47
 * @Description: file content
-->
<template>
  <transition mode="out-in" name="fade-transform">
    <keep-alive :max="keepAliveMaxNum" :include="keepAliveNameList">
      <router-view :key="routerKey" />
    </keep-alive>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
import { keepAliveMaxNum } from '@/config'
import CusterProgress from 'nprogress'
import store from '@/store';
export default {
  name: 'CusterRouterView',
  data(){
    return {
      routerKey: null,
      keepAliveMaxNum,
      keepAliveNameList: [],
    }
  },
  computed: {
    ...mapGetters({
      visitedRoutes: 'tabs/visitedRoutes',
    })
  },
  watch: {
    $route: {
      handler() {
        this.routerKey = this.$route.fullPath
      },
      immediate: true,
    },
    visitedRoutes: {
      handler() {
        this.updateKeepAliveNameList();
      },
    },
  },
  created(){
    this.updateKeepAliveNameList();
    this.$baseEventBus.$on('reload-router-view', (refreshRouteName = this.$route.name) => {
      const { showProgressBar } = store.getters['settings/theme']
      if (showProgressBar) CusterProgress.start();
      this.routerKey = null;
      this.updateKeepAliveNameList(refreshRouteName)
      this.$nextTick(() => {
        this.routerKey = this.$route.path
        this.updateKeepAliveNameList()
      })
      setTimeout(() => {
        CusterProgress.done();
      }, 200)
    })
  },
  methods: {
    updateKeepAliveNameList(refreshRouteName = null) {
      this.keepAliveNameList = [
        ...new Set(
          this.visitedRoutes
            .filter(
              (item) =>
                !item.meta.noKeepAlive && item.name !== refreshRouteName
            )
            .flatMap((item) => item.matched)
        ),
      ]
    },
  },
}
</script>