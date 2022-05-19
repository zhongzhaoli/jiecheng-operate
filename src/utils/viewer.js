/*
 * @Author: Custer
 * @LastEditors: custer 525966315@qq.com
 * @Date: 2022-05-19 11:57:44
 * @LastEditTime: 2022-05-19 12:16:44
 * @Description: file content
 */
import Vue from 'vue';
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
Vue.use(Viewer)
Viewer.setDefaults({
    title: false
})