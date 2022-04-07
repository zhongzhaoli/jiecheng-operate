<!--
 * @Author: Custer
 * @Date: 2021-11-05 11:25:35
 * @LastEditors: Custer
 * @LastEditTime: 2021-11-05 15:04:04
 * @Description: file content
-->
<template>
  <el-dropdown v-if="theme.showLanguage" @command="handleCommand">
    <CusterIcon iconName="translate" iconClass="ri-translate"/>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="zh">中文简体</el-dropdown-item>
        <el-dropdown-item command="en">English</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: "CusterLanguage",
  data(){
    return {}
  },
  computed: {
    ...mapGetters({
      theme: 'settings/theme',
    }),
  },
  methods: {
    ...mapActions({
      changeLanguage: 'settings/changeLanguage',
    }),
    handleCommand(command) {
      this.changeLanguage(command)
      this.$i18n.locale = command
    },
  }
};
</script>
<style lang='scss' scoped>
</style>