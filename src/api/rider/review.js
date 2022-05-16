import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/rider/review/list',
    method: 'get',
    params,
  })
}