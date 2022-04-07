/*
 * @Author: Custer
 * @Date: 2021-11-05 11:10:36
 * @LastEditors: Custer
 * @LastEditTime: 2021-11-05 11:10:37
 * @Description: file content
 */
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import i18n from '@/i18n'

Vue.use(ElementUI, {
  size: 'small',
  i18n: (key, value) => i18n.t(key, value),
})
