<!--
 * @Author: Custer
 * @Date: 2021-11-18 11:47:53
 * @LastEditors: Custer
 * @LastEditTime: 2021-11-24 14:51:24
 * @Description: file content
-->
<template>
  <el-card shadow="never">
    <div class="welcomeBox">
      <el-avatar :src="avatar"></el-avatar>
      <div class="descBox">
        <p class="welcomeTitle">{{ handleTips() }}</p>
        <p class="welcomeDesc">{{ desc }}</p>
      </div>
    </div>
  </el-card>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      desc: "听闻先生治家有方，小女余生愿闻其详。"
    };
  },
  computed: {
    ...mapGetters({
      avatar: "user/avatar",
      username: "user/username"
    })
  },
  methods: {
    handleTips() {
      const hour = new Date().getHours()
      return hour < 8
        ? `早上好 ${this.username}，又是元气满满的一天。`
        : hour <= 11
        ? `上午好 ${this.username}，看到你我好开心。`
        : hour <= 13
        ? `中午好 ${this.username}，忙碌了一上午，记得吃午饭哦。`
        : hour < 18
        ? `下午好 ${this.username}，你一定有些累了，喝杯咖啡提提神。`
        : `晚上好 ${this.username}，愿你天黑有灯，下雨有伞。`
    },
  }
};
</script>
<style lang="scss" scoped>
  .welcomeBox{
    display: flex;
    align-items: center;
    & > .descBox{
      margin-left: 20px;
      & > .welcomeTitle{
        margin-top: 0;
        margin-bottom: 12px;
        font-size: 20px;
        font-weight: bold;
        color: #3c4a54;
      }
      & > .welcomeDesc{
        font-size: 14px;
        color: #808695;
        margin: 0;
      }
    }
  }
</style>
