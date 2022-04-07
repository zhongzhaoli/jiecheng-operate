/*
 * @Author: Custer
 * @Date: 2021-11-24 17:04:07
 * @LastEditors: Custer
 * @LastEditTime: 2021-11-24 18:16:12
 * @Description: file content
 */
import Vue from 'vue';
import { hasPermission } from '@/utils/permission'

Vue.directive('permissions', {
  inserted(el, binding){
    const { value } = binding;
    if(value){
      if (!hasPermission(value)) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    }
  }
})