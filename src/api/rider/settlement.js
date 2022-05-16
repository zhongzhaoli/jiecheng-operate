import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/rider/settlement/list',
    method: 'get',
    params,
  })
}