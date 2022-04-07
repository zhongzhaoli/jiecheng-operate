/*
 * @Author: Custer
 * @Date: 2021-10-29 14:28:55
 * @LastEditors: Custer
 * @LastEditTime: 2021-12-06 11:44:01
 * @Description: file content
 */
import Vue from "vue";
import VueI18n from "vue-i18n";
import store from '@/store'
import elEn from 'element-ui/lib/locale/lang/en'
import elZh from 'element-ui/lib/locale/lang/zh-CN'

Vue.use(VueI18n);

function getLanguage() {
  return store.getters['settings/language'] || 'zh'
}

const messages = {
  en: {
    ...require('./en'),
    ...elEn
  },
  zh: {
    ...require('./zh'),
    ...elZh
  }
}

const i18n = new VueI18n({
  locale: getLanguage(),
  messages
});

export default i18n;
