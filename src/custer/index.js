/*
 * @Author: Custer
 * @Date: 2021-11-03 14:26:26
 * @LastEditors: Custer
 * @LastEditTime: 2021-12-03 16:03:03
 * @Description: file content
 */

import '@/icon'

import Vue from 'vue';
import CusterIcon from './components/CusterIcon';

// 加载全局样式样式
import './styles/custer.scss'

Vue.component('CusterIcon', CusterIcon);

// 加载主题
const Themes = require.context('./styles/themes', false, /\.scss$/)
Themes.keys().map(Themes)

// 加载补充样式
const extraCss = require.context('./styles/extra', false, /\.scss$/)
extraCss.keys().map(extraCss)

// 加载插件
const Plugins = require.context('./plugins', true, /\.js$/)
Plugins.keys().map(Plugins)

// 加载组件
const Components = require.context('.', true, /\.vue$/)
Components.keys()
  .map(Components)
  .forEach((item) => {
    if (item.default.name && item.default.name !== 'Layouts')
      Vue.component(item.default.name, item.default)
  })
