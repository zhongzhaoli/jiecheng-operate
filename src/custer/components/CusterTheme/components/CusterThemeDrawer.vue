<!--
 * @Author: Custer
 * @Date: 2021-11-05 14:33:26
 * @LastEditors: Custer
 * @LastEditTime: 2022-03-28 14:50:04
 * @Description: file content
-->
<template>
  <el-drawer
    append-to-body
    custom-class="custer-drawer"
    direction="rtl"
    size="280px"
    :title="$t('主题配置')"
    :visible.sync="drawerVisible"
  >
    <el-scrollbar>
      <el-form ref="form" label-position="left" :model="theme">
        <el-form-item>
          <template #label>
            {{ $t("布局") }}
            <el-tooltip :content="$t('布局配置仅在电脑视窗下生效，手机视窗时将默认锁定为纵向布局')" effect="dark" placement="top">
              <CusterIcon iconName="question-line"/>
            </el-tooltip>
          </template>
          <el-select v-model="theme.layout">
            <el-option key="vertical" :label="$t('纵向')" value="vertical"/>
            <el-option key="horizontal" :label="$t('横向')" value="horizontal"/>
            <el-option key="float" :label="$t('浮动')" value="float"/>
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('主题')">
          <el-select v-model="theme.themeName" @change="updateTheme">
            <el-option
              key="blue-black"
              :label="$t('蓝黑')"
              value="blue-black"
            />
            <el-option
              key="blue-white"
              :label="$t('蓝白')"
              value="blue-white"
            />
            <el-option
              key="green-black"
              :label="$t('绿黑')"
              value="green-black"
            />
            <el-option
              key="green-white"
              :label="$t('绿白')"
              value="green-white"
            />
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('标签')">
          <el-switch v-model="theme.showTabs" />
        </el-form-item>
        <el-form-item>
          <template #label>
            {{ $t('标签风格') }}
            <el-tooltip
              :content="$t('标签开启时生效')"
              effect="dark"
              placement="top"
            >
              <CusterIcon iconName="question-line" />
            </el-tooltip>
          </template>
          <el-select v-model="theme.tabsBarStyle" :disabled="!theme.showTabs">
            <el-option
              key="card"
              :label="$t('卡片')"
              value="card"
            />
            <el-option
              key="smart"
              :label="$t('灵动')"
              value="smart"
            />
            <el-option
              key="smooth"
              :label="$t('圆滑')"
              value="smooth"
            />
          </el-select>
        </el-form-item>
        <el-form-item>
          <template #label>
            {{ $t('标签图标') }}
            <el-tooltip
              :content="$t('标签开启时生效')"
              effect="dark"
              placement="top"
            >
              <CusterIcon iconName="question-line" />
            </el-tooltip>
          </template>
          <el-switch v-model="theme.showTabsIcon" :disabled="!theme.showTabs" />
        </el-form-item>
        <el-form-item :label="$t('国际化')">
          <el-switch v-model="theme.showLanguage" />
        </el-form-item>
        <el-form-item :label="$t('进度条')">
          <el-switch v-model="theme.showProgressBar" />
        </el-form-item>
        <el-form-item :label="$t('刷新')">
          <el-switch v-model="theme.showRefresh" />
        </el-form-item>
        <el-form-item :label="$t('搜索')">
          <el-switch v-model="theme.showSearch" />
        </el-form-item>
        <el-form-item :label="$t('通知')">
          <el-switch v-model="theme.showNotice" />
        </el-form-item>
        <el-form-item :label="$t('全屏')">
          <el-switch v-model="theme.showFullScreen" />
        </el-form-item>
      </el-form>
    </el-scrollbar>
    <div class="el-drawer__footer">
      <el-button type="primary" @click="handleSaveTheme">
        {{ $t('保存') }}
      </el-button>
      <el-button @click="setDefaultTheme">
        {{ $t('恢复默认') }}
      </el-button>
    </div>
  </el-drawer>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: "CusterThemeDrawer",
  data(){
    return {
      drawerVisible: false
    }
  },
  computed: {
    ...mapGetters({
      theme: 'settings/theme',
    })
  },
  created(){
    this.$baseEventBus.$on('theme', () => {
      this.handleOpenTheme()
    })
  },
  methods: {
    ...mapActions({
      saveTheme: 'settings/saveTheme',
      resetTheme: 'settings/resetTheme',
      updateTheme: 'settings/updateTheme',
    }),
    handleOpenTheme() {
      this.drawerVisible = true
    },
    async setDefaultTheme() {
      await this.resetTheme()
      this.drawerVisible = false
    },
    async handleSaveTheme() {
      await this.saveTheme()
      this.drawerVisible = false
    },
  }
};
</script>
<style lang='scss'>
  .custer-drawer {
    .el-drawer__body {
      .el-scrollbar__wrap {
        height: calc(100vh - 100px);
        padding: $base-padding;

        .el-divider--horizontal {
          margin: $base-margin * 2 0 $base-margin * 2 0;
        }

        .el-form-item {
          display: flex;
          align-items: center;

          .el-form-item__label {
            flex: 1 1;
          }

          .el-form-item__content {
            flex: 0 0 auto;
          }

          &.custer-item-custom {
            display: block !important;
          }

          .el-radio-button {
            display: block;
            float: left;
            width: 80px;
            height: 80px;
            margin: 10px;
            cursor: pointer;
            border-radius: 5px;
            &.is-disabled {
              cursor: not-allowed;
              opacity: 0.6;
            }
            &.is-active {
              box-shadow: 0 0 2px 2px #1890ff;
            }
            .el-radio-button__orig-radio,
            .el-radio-button__inner {
              display: none;
            }
            &.none {
              font-family: 'remixicon', sans-serif !important;
              font-size: 16px;
              font-weight: 580;
              line-height: 80px;
              text-align: center;
              background: #f7f7f7 none;
              background-size: cover;
              &:before {
                content: '\eace';
              }
            }
            &.custer-background {
              background: url(~@/assets/theme_images/background-1.png);
              background-size: cover;
            }
          }
        }

        .el-form-item--small.el-form-item {
          .el-input__inner {
            width: 115px;
          }
        }
      }

      .el-drawer__footer {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: $base-z-index + 1;
        padding: $base-padding / 2;
        background: $base-color-white;
        border-top: 1px solid $base-border-color;
      }
    }
  }
</style>