import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/order/refundLog/list',
    method: 'get',
    params,
  })
}