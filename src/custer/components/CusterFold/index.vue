<!--
 * @Author: Custer
 * @Date: 2021-11-04 18:08:49
 * @LastEditors: Custer
 * @LastEditTime: 2021-11-05 11:46:16
 * @Description: file content
-->
<template>
  <CusterIcon
    class="fold-unfold"
    :iconName="collapse ? 'menu-unfold-line' : 'menu-fold-line'"
    @click="toggleCollapse"
  />
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'CusterFold',
    data() {
      return {}
    },
    computed: {
      ...mapGetters({
        collapse: 'settings/collapse',
      }),
    },
    methods: {
      ...mapActions({
        toggleCollapse: 'settings/toggleCollapse',
      })
    },
  }
</script>

<style lang="scss" scoped>
  .fold-unfold {
    color: $base-color-grey;
    cursor: pointer;
  }
</style>
