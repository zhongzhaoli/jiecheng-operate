<!--
 * @Author: Custer
 * @Date: 2021-11-05 11:22:28
 * @LastEditors: Custer
 * @LastEditTime: 2021-11-05 15:00:41
 * @Description: file content
-->
<template>
  <CusterIcon v-if="theme.showTheme" iconName="brush-2-line" @click="handleOpenTheme"></CusterIcon>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: "CusterTheme",
  data(){
    return {}
  },
  computed: {
    ...mapGetters({
      theme: 'settings/theme',
    }),
  },
  methods: {
    handleOpenTheme() {
      this.$baseEventBus.$emit('theme');
    },
  }
};
</script>
<style lang='scss' scoped>
</style>