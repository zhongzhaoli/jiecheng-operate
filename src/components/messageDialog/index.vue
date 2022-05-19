<!--
 * @Author: Custer
 * @LastEditors: custer 525966315@qq.com
 * @Date: 2022-05-19 15:50:11
 * @LastEditTime: 2022-05-19 18:58:37
 * @Description: file content
-->
<template>
  <el-drawer
    title="发送站内信"
    :size="450"
    :wrapperClosable="false"
    :close-on-press-escape="false"
    :visible.sync="drawerInsert"
    direction="rtl"
    @closed="closeFun"
  >
    <el-form label-position="top">
      <el-form-item label="收件人">
        <div class="selectUser" v-if="showSelectUserBox">
          <template v-if="!allRider_c && !allMember_c">
            <el-tag v-for="tag in selectUserArr" :key="tag.id">
              {{ tag.name }}
            </el-tag>
          </template>
          <el-tag type="success" v-if="allRider_c">全体骑手</el-tag>
          <el-tag type="success" v-if="allMember_c">全体会员</el-tag>
        </div>
      </el-form-item>
      <el-form-item label="类型">
        <el-select
          placeholder="请选择站内信类型"
          v-model="messageForm.type"
          class="w-100"
        >
          <el-option
            v-for="item in messageType"
            :key="item.key"
            :value="item.key"
            :label="item.label"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题">
        <el-input
          placeholder="请输入站内信标题"
          v-model="messageForm.title"
        ></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <el-input
          :rows="5"
          v-model="messageForm.content"
          placeholder="请输入站内信内容"
          type="textarea"
        ></el-input>
      </el-form-item>
    </el-form>
    <div class="btnBox">
      <el-button @click="drawerInsert = false">关闭</el-button>
      <el-button type="primary" @click="sendMessage" :loading="sendBtnLoading">发送</el-button>
    </div>
  </el-drawer>
</template>
<script>
import * as API_MESSAGE from '@/api/message/index';
export default {
  data() {
    return {
      messageForm: {},
      showSelectUserBox: true,
      sendBtnLoading: false,
      messageType: [
        {
          label: "官方通知",
          key: "1",
        },
        {
          label: "服务通知",
          key: "2",
        },
      ],
    };
  },
  props: {
    drawer: {
      type: Boolean,
      required: true,
    },
    selectUser: {
      type: Array,
      default: () => {
        return [];
      },
    },
    allRider: {
      type: Boolean,
      default: false,
    },
    allMember: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    selectUserArr: {
      get() {
        return this.selectUser;
      },
    },
    drawerInsert: {
      get() {
        this.showSelectUserBox = true;
        return this.drawer;
      },
      set(val) {
        this.$emit("update:drawer", val);
      },
    },
    allRider_c: {
      get() {
        return this.allRider;
      },
      set(val) {
        this.$emit("update:allRider", val);
      },
    },
    allMember_c: {
      get() {
        return this.allMember;
      },
      set(val) {
        this.$emit("update:allMember", val);
      },
    },
  },
  methods: {
    closeFun() {
      this.allRider_c = false;
      this.allMember_c = false;
      this.showSelectUserBox = false;
    },
    sendMessage() {
      if(this.sendBtnLoading) return;
      this.$confirm("确认发送站内信？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        this.sendBtnLoading = true;
        API_MESSAGE.sendMessage(this.messageForm).then(() => {
          this.sendBtnLoading = false;
          this.$message.success("发送成功");
          this.drawerInsert = false;
        })
      });
    },
  },
};
</script>
<style lang='scss' scoped>
.selectUser {
  color: #999;
  display: flex;
  flex-wrap: wrap;
  max-height: 150px;
  overflow: auto;
  border: 1px #dcdfe6 solid;
  border-radius: 4px;
  margin-top: 5px;
  padding: 15px 10px;
  ::v-deep {
    .el-tag {
      margin-left: 5px !important;
      margin-right: 5px !important;
      width: calc(25% - 10px);
      text-align: center;
      word-break: break-all;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      white-space: normal;
      overflow: hidden;
      &:nth-child(n + 5) {
        margin-top: 10px;
      }
    }
  }
}
::v-deep {
  .el-drawer__body {
    padding-bottom: 80px !important;
  }
}
.btnBox {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  background: #fff;
}
</style>