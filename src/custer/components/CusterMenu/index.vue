<!--
 * @Author: Custer
 * @Date: 2021-11-04 12:09:06
 * @LastEditors: Custer
 * @LastEditTime: 2021-11-05 10:10:27
 * @Description: file content
-->
<template>
  <component :is="menuComponent" :item-or-menu="item" v-if="item.meta && !item.meta.hidden">
    <template v-if="item.children && item.children.length">
      <CusterMenu v-for="route in item.children" :key="route.path" :item="route"/>
    </template>
  </component>
</template>
<script>
export default {
  name: "CusterMenu",
  props: {
    item: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data(){
    return {
      menuComponent: "CusterMenuItem"
    }
  },
  created() {
    if (
      this.item.children &&
      this.item.children.some((route) => {
        return route.meta && route.meta.hidden !== true
      })
    )
      this.menuComponent = 'CusterSubmenu'
  },
};
</script>
<style lang="scss" scoped>
  .custer-menu-children-height {
    height: 60vh !important;
  }
</style>