<!--
 * @Author: Custer
 * @Date: 2021-11-04 12:09:36
 * @LastEditors: Custer
 * @LastEditTime: 2021-11-05 12:15:35
 * @Description: file content
-->
<template>
  <div v-if="itemOrMenu.meta && itemOrMenu.meta.levelHidden">
    <template v-for="route in itemOrMenu.children">
      <CusterMenu :key="route.path" :item="route" />
    </template>
  </div>
  <el-submenu v-else ref="subMenu" :index="itemOrMenu.path" :popper-append-to-body="false">
    <template slot="title">
      <CusterIcon v-if="itemOrMenu.meta && itemOrMenu.meta.icon" :iconName="itemOrMenu.meta.icon"/>
      <span :title="itemOrMenu.meta.title">
        {{ $t(itemOrMenu.meta.title) }}
      </span>
    </template>
    <slot />
  </el-submenu>
</template>
<script>
export default {
  name: "CusterSubmenu",
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
  }
};
</script>
<style lang='scss' scoped>
</style>