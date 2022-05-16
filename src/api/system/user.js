/*
 * @Author: Custer
 * @LastEditors: custer 525966315@qq.com
 * @Date: 2022-05-16 18:13:28
 * @LastEditTime: 2022-05-16 18:19:17
 * @Description: file content
 */
import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/system/user/list',
    method: 'get',
    params,
  })
}