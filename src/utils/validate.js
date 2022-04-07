/*
 * @Author: Custer
 * @Date: 2021-11-04 16:13:31
 * @LastEditors: Custer
 * @LastEditTime: 2021-11-18 17:23:30
 * @Description: file content
 */

/**
 * @description 判读是否为外链
 * @param path
 * @returns {boolean}
 */
 export function isExternal(path) {
  return /^(https?:|mailto:|tel:|\/\/)/.test(path)
}

/**
 * @description 判断是否为json
 * @param value
 * @returns {boolean}
 */
 export function isJson(value) {
  if (typeof value === 'string') {
    const obj = JSON.parse(value)
    return !!(typeof obj === 'object' && obj)
  }
  return false
}

/**
 * @description 判断是否是字符串
 * @param value
 * @returns {boolean}
 */
 export function isString(value) {
  return typeof value === 'string' || value instanceof String
}

/**
 * @description 判断是否是数组
 * @param arg
 */
export function isArray(arg) {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
  return Array.isArray(arg)
}