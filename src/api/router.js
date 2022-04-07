/*
 * @Author: Custer
 * @Date: 2021-11-15 14:50:31
 * @LastEditors: Custer
 * @LastEditTime: 2021-11-15 14:50:32
 * @Description: file content
 */
import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/router/getList',
    method: 'get',
    params,
  })
}
