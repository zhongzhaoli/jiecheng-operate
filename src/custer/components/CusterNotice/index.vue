<!--
 * @Author: Custer
 * @Date: 2021-11-05 11:32:22
 * @LastEditors: Custer
 * @LastEditTime: 2021-11-05 15:21:04
 * @Description: file content
-->
<template>
  <el-badge v-if="theme.showNotice" :value="badge">
    <el-popover placement="bottom" trigger="hover" width="300">
      <template #reference>
        <CusterIcon iconName="notification-line"></CusterIcon>
      </template>
      <div class="notice-list">
        <el-scrollbar>
          <ul>
            <li>
              <el-avatar :size="40" src="https://i.gtimg.cn/club/item/face/img/2/16022_100.gif"></el-avatar>
              <div class="rightMessage">
                <div class="title">通知</div>
                <div class="desc">睿思相信，每个人都有自己独立的才能，因此，我们致力于打造一个没有天花板的舞台，让每一位员工尽情绽放光彩。 加入我们，你将可以迎接知识的挑战，实现工作与生活的平衡，并获得多样化的职业发展机遇；在这里，你将充分施展自身的能力，并收获快速成长。 诚意邀请各位加入睿思尚品，共创美好未来！</div>
              </div>
            </li>
          </ul>
        </el-scrollbar>
      </div>
      <div class="notice-clear">
        <el-button type="text">
          <CusterIcon iconName="close-circle-line"></CusterIcon>
          <span>{{ $t('清空消息') }}</span>
        </el-button>
      </div>
    </el-popover>
  </el-badge>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: "CusterNotice",
  data(){
    return {
      badge: null
    }
  },
  computed: {
    ...mapGetters({
      theme: 'settings/theme',
    }),
  },
};
</script>
<style lang="scss" scoped>
  ::v-deep {
    .el-tabs__active-bar {
      min-width: 28px;
    }
  }

  .notice-list {
    height: 29vh;

    ul {
      margin: 0;
      padding: 0;

      li {
        display: flex;
        align-items: center;
        cursor: pointer;
        &:not(:first-child){
          margin-top: 10px;
        }

        ::v-deep {
          .el-avatar {
            flex-shrink: 0;
            width: 50px;
            height: 50px;
            border-radius: 50%;
          }
        }
        .rightMessage{
          margin-left: 15px;
          display: flex;
          flex-flow: column;
          & > .title{
            font-size: 14px;
            font-weight: bold;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
          }
          & > .desc{
            margin-top: 4px;
            font-size: 12px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            letter-spacing: 0px;
            height: 32px;
            line-height: 16px;
            overflow: hidden;
            text-align: justify;
          }
        }
      }
    }
  }

  .notice-clear {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0 0 0;
    font-size: 14px;
    text-align: center;
    cursor: pointer;
    border-top: 1px solid #e8eaec;

    i {
      margin-right: 3px;
    }
  }
</style>
