<!--
 * @Author: Custer
 * @Date: 2021-11-05 11:26:54
 * @LastEditors: Custer
 * @LastEditTime: 2021-11-05 15:01:57
 * @Description: file content
-->
<template>
  <CusterIcon v-if="theme.showFullScreen" :iconName="isFullscreen ? 'fullscreen-exit-fill' : 'fullscreen-fill'" @click="click"></CusterIcon>
</template>
<script>
import screenfull from 'screenfull'
import { mapGetters } from 'vuex'
export default {
  name: 'CusterFullScreen',
  data(){
    return {
        isFullscreen: false,
    }
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    this.destroy()
  },
  computed: {
    ...mapGetters({
      theme: 'settings/theme',
    }),
  },
  methods: {
    click() {
      if (!screenfull.isEnabled) {
        console.log("开启全屏失败")
      }
      screenfull.toggle()
      this.$emit('refresh')
    },
    change() {
      this.isFullscreen = screenfull.isFullscreen
    },
    init() {
      if (screenfull.isEnabled) screenfull.on('change', this.change)
    },
    destroy() {
      if (screenfull.isEnabled) screenfull.off('change', this.change)
    },
  }
};
</script>
<style lang='scss' scoped>
</style>