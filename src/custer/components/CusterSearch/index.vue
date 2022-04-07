<!--
 * @Author: Custer
 * @Date: 2021-11-05 11:33:52
 * @LastEditors: Custer
 * @LastEditTime: 2021-11-05 15:30:14
 * @Description: file content
-->
<template>
  <span>
    <CusterIcon iconName="search-line" v-if="theme.showSearch" @click="openDialog"></CusterIcon>
    <el-dialog append-to-body :visible.sync="dialogVisible" width="40%">
      <el-form :model="queryForm" @submit.native.prevent>
        <el-form-item label-width="0">
          <el-autocomplete v-model="queryForm.searchWord" v-focus :fetch-suggestions="querySearchAsync" select-when-unmatched @select="handleSelect">
            <template #prefix>
              <CusterIcon iconName="search-line" />
            </template>
          </el-autocomplete>
        </el-form-item>
      </el-form>
    </el-dialog>
  </span>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: "CusterSearch",
  data(){
    return {
      dialogVisible: false,
      queryForm: {
        searchWord: '',
      },
      timeout: null,
    }
  },
  computed: {
    ...mapGetters({
      theme: 'settings/theme',
    }),
  },
  methods: {
    querySearchAsync(queryString, cb) {
      const restaurants = [{url: 'https://www.roseshownt.com/', value: "睿思尚品"}]
      const results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        cb(results)
      }, 200)
    },
    createStateFilter(queryString) {
      return (state) => state.value.includes(queryString.toLowerCase())
    },
    openDialog() {
      this.queryForm.searchWord = ''
      this.dialogVisible = true
    },
    handleSelect(item) {
      if (item.url) {
        window.open(item.url)
      } else {
        window.open(`https://www.baidu.com/s?wd=${item.value}`)
      }
    },
  }
};
</script>
<style lang="scss" scoped>
  ::v-deep {
    .el-dialog {
      .el-dialog__header {
        display: none;
        border: 0 !important;
      }

      .el-dialog__body {
        padding: 0;
        border: 0 !important;
      }

      .el-form-item__content {
        position: relative;

        i {
          position: absolute;
          top: 14px;
          left: $base-margin / 1.5;
        }

        .el-autocomplete {
          width: 100%;

          .el-input__inner {
            width: 100%;
            height: 60px;
            padding-left: $base-padding * 2.5;
            border: 0 !important;
          }
        }
      }
    }
  }
</style>
