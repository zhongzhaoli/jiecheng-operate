/*
 * @Author: Custer
 * @Date: 2021-11-04 15:13:20
 * @LastEditors: Custer
 * @LastEditTime: 2021-12-03 14:54:11
 * @Description: file content
 */
import { isJson } from '@/utils/validate'

import {
  background,
  collapse as _collapse,
  columnStyle,
  fixedHeader,
  i18n,
  layout,
  showFullScreen,
  showLanguage,
  showNotice,
  showProgressBar,
  showRefresh,
  showSearch,
  showTabs,
  showTabsIcon,
  showTheme,
  showThemeSetting,
  tabsBarStyle,
  themeName,
  logo,
  title
} from '@/config'

const defaultTheme = {
  background,
  columnStyle,
  fixedHeader,
  layout,
  showProgressBar,
  showTabs,
  tabsBarStyle,
  showTabsIcon,
  showLanguage,
  showRefresh,
  showSearch,
  showTheme,
  showNotice,
  showFullScreen,
  showThemeSetting,
  themeName,
}

const getLocalStorage = (key) => {
  const value = localStorage.getItem(key)
  if (isJson(value)) {
    return JSON.parse(value)
  } else {
    return false
  }
}

const { collapse } = getLocalStorage('collapse')
const { language } = getLocalStorage('language')

const state = () => ({
  logo,
  title,
  collapse: collapse || _collapse,
  language: language || i18n,
  theme: getLocalStorage("theme") || { ...defaultTheme },
})

const getters = {
  logo: (state) => state.logo,
  title: (state) => state.title,
  theme: (state) => state.theme,
  collapse: (state) => state.collapse,
  language: (state) => state.language,
}

const mutations = {
  openSideBar(state) {
    state.collapse = false
  },
  foldSideBar(state) {
    state.collapse = true
  },
  saveTheme(state) {
    console.log(state.theme);
    localStorage.setItem('theme', JSON.stringify(state.theme))
  },
  toggleCollapse(state) {
    state.collapse = !state.collapse
    localStorage.setItem('collapse', `{"collapse":${state.collapse}}`)
  },
  changeLanguage(state, language) {
    state.language = language
    localStorage.setItem('language', `{"language":"${language}"}`)
  },
  resetTheme(state) {
    state.theme = { ...defaultTheme }
    localStorage.removeItem('theme')
  },
  updateTheme(state) {
    document.getElementsByTagName(
      'body'
    )[0].className = `custer-theme-${state.theme.themeName}`
    if (state.theme.background !== 'none') {
      document
        .getElementsByTagName('body')[0]
        .classList.add(state.theme.background)
    }
  }
}

const actions = {
  openSideBar({ commit }) {
    commit('openSideBar')
  },
  foldSideBar({ commit }) {
    commit('foldSideBar')
  },
  saveTheme({ commit }) {
    commit('saveTheme')
  },
  resetTheme({ commit }) {
    commit('resetTheme')
    commit('updateTheme')
  },
  updateTheme({ commit }) {
    commit('updateTheme')
  },
  changeLanguage: ({ commit }, language) => {
    commit('changeLanguage', language)
  },
  toggleCollapse({ commit }) {
    commit('toggleCollapse')
  },
}

export default { state, getters, mutations, actions };