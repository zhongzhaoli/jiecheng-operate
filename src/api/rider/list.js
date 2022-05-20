/*
 * @Author: Custer
 * @LastEditors: custer 525966315@qq.com
 * @Date: 2022-05-16 15:06:54
 * @LastEditTime: 2022-05-20 17:23:24
 * @Description: file content
 */
import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/operate/auth/deliver/list',
    method: 'get',
    params,
  })
}

export function getDetail(id){
  return request({
    url: `/rider/detail/${id}`,
    method: 'get',
  })
}

export function getPassport(id){
  return request({
    url: `/rider/passport/${id}`,
    method: 'get',
  })
}