import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/rider/list',
    method: 'get',
    params,
  })
}