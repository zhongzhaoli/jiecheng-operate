/*
 * @Author: Custer
 * @Date: 2021-10-29 14:23:48
 * @LastEditors: custer 525966315@qq.com
 * @LastEditTime: 2022-05-19 11:57:38
 * @Description: file content
 */
import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n';
import router from './router';
import store from '@/store';
import '@/utils/filters';
import '@/utils/viewer';
import "@/custer";
import "@/assets/fonts/remixicon.css";
Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app')