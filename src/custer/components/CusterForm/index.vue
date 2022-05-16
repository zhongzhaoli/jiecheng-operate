<template>
  <div class="custer-form">
    <el-form
      :rules="formRules"
      :model="formValue"
      :label-position="formConfig.labelPosition || FORM_DEFAULT_LABELPOSITION"
      :label-width="formConfig.labelWidth || FORM_DEFAULT_LABELWIDTH"
      :inline="formConfig.inline || FORM_DEFAULT_INLINE"
      :size="formConfig.size || FORM_DEFAULT_SIZE"
    >
      <template v-for="(item, index) in formColumn">
        <el-form-item
          class="mb-30"
          :label="item.label || item.title"
          :prop="item.key"
          :key="index"
          :required="item.required || FORM_INPUT_REQUIRED"
          :class="{ 'mb-0': formColumn.length - 1 <= index }"
        >
          <div :class="{ 'd-flex': formConfig.labelPosition === 'left' }">
            <slot :name="item.key" v-bind="{ row: item, form: formValue }">
              <template v-if="item.type === 'inputNumber'">
                <el-input-number
                  class="formInputNumber"
                  v-model="formValue[item.key]"
                  :min="item.min"
                  :placeholder="
                    item.placeholder
                      ? item.placeholder
                      : `请输入${item.label || item.title}`
                  "
                ></el-input-number>
              </template>
              <template v-else>
                <el-input
                  class="formInput"
                  :show-password="item.type === 'password'"
                  v-model="formValue[item.key]"
                  :placeholder="
                    item.placeholder
                      ? item.placeholder
                      : `请输入${item.label || item.title}`
                  "
                ></el-input>
              </template>
            </slot>
            <div
              v-if="item.tips && formConfig.labelPosition === 'left'"
              class="tips ml-15"
            >
              {{ item.tips }}
            </div>
          </div>
          <slot :name="`${item.key}-supply`"></slot>
        </el-form-item>
      </template>
    </el-form>
  </div>
</template>
<script>
const FORM_DEFAULT_INLINE = false;
const FORM_DEFAULT_SIZE = "medium";
const FORM_DEFAULT_LABELWIDTH = "80px";
const FORM_DEFAULT_LABELPOSITION = "left";
const FORM_INPUT_TYPE_DEFAULT = "input";
const FORM_INPUT_REQUIRED = false;
export default {
  name: "CusterForm",
  props: {
    formColumn: {
      type: Array,
      default: () => {
        return [];
      },
    },
    formRules: {
      type: Object,
      default: () => {
        return {};
      },
    },
    formConfig: {
      type: Object,
      default: () => {
        return {
          inline: FORM_DEFAULT_INLINE,
          size: FORM_DEFAULT_SIZE,
          labelWidth: FORM_DEFAULT_LABELWIDTH,
          labelPosition: FORM_DEFAULT_LABELPOSITION,
        };
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
      FORM_DEFAULT_INLINE,
      FORM_DEFAULT_SIZE,
      FORM_DEFAULT_LABELWIDTH,
      FORM_DEFAULT_LABELPOSITION,
      FORM_INPUT_TYPE_DEFAULT,
      FORM_INPUT_REQUIRED,
      formValue: {},
    };
  },
};
</script>
<style lang='scss' scoped>
.custer-form {
  & .tips {
    font-size: 12px;
    color: #999;
  }
}
</style>