/*
 * @Author: Custer
 * @Date: 2021-12-03 15:30:45
 * @LastEditors: custer 525966315@qq.com
 * @LastEditTime: 2022-05-16 18:19:24
 * @Description: file content
 */
import request from '@/utils/request'

export function getCategoryList() {
  return request({
    url: '/category/list',
    method: 'get',
  })
}