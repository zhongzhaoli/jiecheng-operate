/*
 * @Author: Custer
 * @Date: 2021-10-29 14:23:48
 * @LastEditors: Custer
 * @LastEditTime: 2021-11-05 16:25:18
 * @Description: file content
 */
import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n';
import router from './router';
import store from '@/store';
import '@/utils/filters';
import "@/custer";
import "@/assets/fonts/remixicon.css";
Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app')