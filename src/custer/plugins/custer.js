/*
 * @Author: Custer
 * @Date: 2021-11-05 14:32:27
 * @LastEditors: Custer
 * @LastEditTime: 2021-11-12 17:10:28
 * @Description: file content
 */
import Vue from 'vue';
import { Notification, Message } from 'element-ui'


Vue.prototype.$baseNotify = (
  message,
  title,
  type = 'success',
  position = 'top-right',
  duration = 3000
) => {
  Notification({
    title,
    message,
    type,
    duration,
    position,
  })
}

Vue.prototype.$baseMessage = (
  message,
  type = 'info',
) => {
  Message({
    message,
    type,
    duration: 3000,
  })
}

/**
 * @description 全局事件总线
 */
Vue.prototype.$baseEventBus = new Vue();