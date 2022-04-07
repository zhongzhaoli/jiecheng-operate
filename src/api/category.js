/*
 * @Author: Custer
 * @Date: 2021-12-03 15:30:45
 * @LastEditors: Custer
 * @LastEditTime: 2021-12-03 15:30:45
 * @Description: file content
 */
import request from '@/utils/request'

export function getCategoryList() {
  return request({
    url: '/category/list',
    method: 'get',
  })
}
