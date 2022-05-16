/*
 * @Author: Custer
 * @LastEditors: custer 525966315@qq.com
 * @Date: 2022-05-16 18:41:00
 * @LastEditTime: 2022-05-16 18:41:06
 * @Description: file content
 */
import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/operateSettlement/list',
    method: 'get',
    params,
  })
}