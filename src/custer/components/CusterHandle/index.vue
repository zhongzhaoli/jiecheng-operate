<template>
  <div class="custer-handle">
    <div>
      <template v-for="(item, index) in handleColumn">
        <el-button
          :disabled="item.selection ? !handleSelectionList.length > 0 : false"
          :size="item.size || BUTTON_DEFAULT_SIZE"
          :key="index"
          :type="item.type || BUTTON_DEFAULT_TYPE"
          v-permissions="item.permissions || []"
          :icon="item.icon || ''"
          plain
          @click="handleFun(item.key)"
          >{{ item.label || BUTTON_DEFAULT_LABEL }}</el-button
        >
      </template>
    </div>
    <div v-if="tools">
      <el-button icon="el-icon-search" @click="toolsToggle" circle></el-button>
      <el-button
        v-if="tableColumn && tableColumn.length"
        icon="el-icon-s-operation"
        @click="columnSet"
        circle
      ></el-button>
      <el-button
        icon="el-icon-refresh"
        @click="tableRefresh"
        circle
      ></el-button>
    </div>
    <el-drawer size="260px" :with-header="false" :visible.sync="drawer">
      <div class="drawerContentBox">
        <div class="header">
          <div>表格列表过滤</div>
          <i @click="drawer = false;" class="el-icon-close"></i>
        </div>
        <div class="body">
          <el-checkbox-group v-model="checkList">
            <div v-for="(item, index) in r_tableColumn" :key="index" class="checkItem">
              <el-checkbox :label="item.key" :disabled="checkDisabledFun(item)">{{ item.label }}</el-checkbox>
            </div>
          </el-checkbox-group>
        </div>
        <div class="footer">
          <el-button type="primary" @click="changeColumn()">确认</el-button>
        </div>
      </div>
    </el-drawer>
  </div>
</template>
<script>
const BUTTON_DEFAULT_SIZE = "mini";
const BUTTON_DEFAULT_TYPE = "default";
const BUTTON_DEFAULT_LABEL = "按钮";
export default {
  name: "CusterHandle",
  props: {
    handleColumn: {
      type: Array,
      default: () => {
        return [];
      },
    },
    handleSelectionList: {
      type: Array,
      default: () => {
        return [];
      },
    },
    tableColumn: {
      type: Array,
      default: () => {
        return [];
      },
    },
    tools: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      BUTTON_DEFAULT_SIZE,
      BUTTON_DEFAULT_TYPE,
      BUTTON_DEFAULT_LABEL,
      r_tableColumn: [],
      checkList: [],
      drawer: false,
      showScreen: true,
    };
  },
  methods: {
    tableColumnHandle() {
      this.r_tableColumn = JSON.parse(JSON.stringify(this.r_tableColumn && this.r_tableColumn.length ? this.r_tableColumn : this.tableColumn));
      this.checkList = this.r_tableColumn.filter(item => {
        return item.check === undefined || item.check === true;
      }).map(item => {
        return item.key;
      });
    },
    checkDisabledFun(row){
      if(row.type === 'index' || row.key === 'handle'){
        return true;
      }
      return false;
    },
    handleFun(key) {
      this.$emit("on-click", key);
    },
    tableRefresh() {
      this.$emit("table-refresh");
    },
    toolsToggle() {
      this.showScreen = !this.showScreen;
      this.$emit("screen-toggle", this.showScreen);
    },
    columnSet() {
      this.drawer = true;
      this.tableColumnHandle();
    },
    changeColumn(){
      this.r_tableColumn.forEach(item => {
        item.check = this.checkList.includes(item.key);
      })
      let arr = [];
      for(let i in this.r_tableColumn){
        if(this.r_tableColumn[i].check){
          arr.push(this.r_tableColumn[i]);
        }
      }
      this.$emit("table-column-change", arr);
      this.drawer = false;
    },
  },
};
</script>
<style lang='scss' scoped>
.custer-handle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  & .drawerContentBox{
    height: 100vh;
    & > .header{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px;
      & > i{
        font-size: 18px;
        cursor: pointer;
      }
    }
    & > .body{
      padding-left: 20px;
      & .checkItem:not(:last-child){
        margin-bottom: 10px;
      }
    }
    & > .footer{
      width: 100%;
      position: absolute;
      padding: 20px;
      box-sizing: border-box;
      bottom: 0;
      border-top: 1px #eaeaea solid;
    }
  }
}
</style>