<!--
 * @Author: Custer
 * @Date: 2021-11-04 10:09:34
 * @LastEditors: Custer
 * @LastEditTime: 2021-11-05 11:46:32
 * @Description: file content
-->
<template>
  <i :class="'ri-' + iconName" @click="clickEmit"></i>
</template>
<script>
export default {
  props: {
    iconName: {
      type: String,
      default: ""
    },
  },
  data(){
    return {}
  },
  methods: {
    clickEmit(){
      this.$emit("click")
    }
  }
}
</script>
<style lang='scss' scoped>
</style>