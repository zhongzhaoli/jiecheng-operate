<!--
 * @Author: Custer
 * @Date: 2021-11-04 12:09:25
 * @LastEditors: Custer
 * @LastEditTime: 2021-11-18 11:19:44
 * @Description: file content
-->
<template>
  <el-menu-item :index="itemOrMenu.path" @click="handleLink">
    <CusterIcon :iconName="itemOrMenu.meta.icon"/>
    <span :title="itemOrMenu.meta.title"> {{ $t(itemOrMenu.meta.title) }} </span>
  </el-menu-item>
</template>
<script>
import { isExternal } from '@/utils/validate'
export default {
  name: "CusterMenuItem",
  props: {
    itemOrMenu: {
      type: Object,
      default() {
        return null
      },
    },
  },
  data(){
    return {}
  },
  methods: {
    handleLink() {
      const routePath = this.itemOrMenu.path
      if (isExternal(routePath)) window.location.href = routePath;
      else if (this.$route.fullPath !== routePath) this.$router.push(routePath);
      else this.$baseEventBus.$emit('reload-router-view');
    }
  }
};
</script>
<style lang='scss' scoped>
</style>