<template>
  <div class="custer-screen">
    <el-form
      class="screenForm"
      :label-position="screenConfig.align || FORM_ALIGN_DEFAULT"
      :size="screenConfig.size || FORM_SIZE_DEFAULT"
      :label-width="screenConfig.labelWidth || FORM_LABELWIDTH_DEFAULT"
      :inline="screenConfig.inline || FORM_INLINE_DEFAULT"
    >
      <el-row :gutter="screenConfig.gutter || FORM_GUTTER_DEFAULT">
        <template v-for="(item, index) in screenColumn">
          <el-col :span="screenConfig.col || FORM_COL_DEFAULT" :key="index">
            <el-form-item
              class="screenFormItem"
              :label="item.label || item.title"
              :prop="item.key"
            >
              <slot :name="item.key" v-bind="{ row: item, form: formValue }">
                <el-input
                  class="formInput"
                  :type="item.type || FORM_INPUT_TYPE_DEFAULT"
                  :show-password="item.type === 'password'"
                  v-model="formValue[item.key]"
                  :placeholder="`请输入${item.label || item.title}`"
                ></el-input>
              </slot>
            </el-form-item>
          </el-col>
        </template>
        <el-col :span="screenConfig.col || FORM_COL_DEFAULT">
          <el-button
            icon="el-icon-search"
            :size="screenConfig.size || FORM_SIZE_DEFAULT"
            type="primary"
            @click="search"
            >搜索</el-button
          >
          <el-button
            icon="el-icon-refresh"
            :size="screenConfig.size || FORM_SIZE_DEFAULT"
            @click="resetFun"
            >重置</el-button
          >
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
const FORM_COL_DEFAULT = 6;
const FORM_ALIGN_DEFAULT = "left";
const FORM_LABELWIDTH_DEFAULT = "70px";
const FORM_SIZE_DEFAULT = "small";
const FORM_INLINE_DEFAULT = true;
const FORM_GUTTER_DEFAULT = 20;
const FORM_INPUT_TYPE_DEFAULT = "input";
export default {
  name: "CusterScreen",
  props: {
    screenConfig: {
      type: Object,
      default: () => {
        return {
          col: FORM_COL_DEFAULT,
          align: FORM_ALIGN_DEFAULT,
          labelWidth: FORM_LABELWIDTH_DEFAULT,
          size: FORM_SIZE_DEFAULT,
          inline: FORM_INLINE_DEFAULT,
          gutter: FORM_GUTTER_DEFAULT,
        };
      },
    },
    screenColumn: {
      type: Array,
      default: () => {
        return [];
      },
    },
    value: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  watch: {
    formValue: {
      deep: true,
      immediate: true,
      handler(nV) {
        this.$emit("input", nV);
      },
    },
    value: {
      deep: true,
      immediate: true,
      handler(nV) {
        this.formValue = nV;
      },
    },
  },
  data() {
    return {
      FORM_COL_DEFAULT,
      FORM_ALIGN_DEFAULT,
      FORM_LABELWIDTH_DEFAULT,
      FORM_SIZE_DEFAULT,
      FORM_INLINE_DEFAULT,
      FORM_GUTTER_DEFAULT,
      FORM_INPUT_TYPE_DEFAULT,
      formValue: {},
    };
  },
  methods: {
    search(){
      this.$emit("on-search", this.formValue);
    },
    resetFun() {
      this.formValue = {};
    },
  },
};
</script>
<style lang='scss' scoped>
.custer-screen {
  width: 100%;
  & .screenForm,
  & .formInput,
  & .screenFormItem {
    width: 100%;
  }
  & .screenFormItem {
    display: flex;
  }
  ::v-deep {
    .el-form-item__content {
      flex: 1;
    }
  }
}
</style>