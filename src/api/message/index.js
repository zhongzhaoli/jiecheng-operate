/*
 * @Author: Custer
 * @LastEditors: custer 525966315@qq.com
 * @Date: 2022-05-19 18:52:38
 * @LastEditTime: 2022-05-19 18:52:47
 * @Description: file content
 */
import request from '@/utils/request'

export function sendMessage(params) {
  return request({
    url: '/message/send',
    method: 'post',
    params,
  })
}