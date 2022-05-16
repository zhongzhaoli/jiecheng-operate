import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/order/paymentLog/list',
    method: 'get',
    params,
  })
}