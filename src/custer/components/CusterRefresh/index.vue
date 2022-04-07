<!--
 * @Author: Custer
 * @Date: 2021-11-05 11:20:49
 * @LastEditors: Custer
 * @LastEditTime: 2021-11-18 11:24:37
 * @Description: file content
-->
<template>
  <CusterIcon iconName="refresh-line" v-if="theme.showRefresh" @click="refreshRoute"></CusterIcon>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: "CusterRefresh",
  data(){
    return {}
  },
  computed: {
    ...mapGetters({
      theme: 'settings/theme',
    }),
  },
  methods: {
    refreshRoute(){
        this.$baseEventBus.$emit('reload-router-view')
    }
  }
};
</script>
<style lang='scss' scoped>
</style>