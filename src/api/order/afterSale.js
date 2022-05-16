import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/order/afterSale/list',
    method: 'get',
    params,
  })
}