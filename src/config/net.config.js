/*
 * @Author: Custer
 * @Date: 2021-11-08 14:52:20
 * @LastEditors: Custer
 * @LastEditTime: 2022-03-28 15:06:23
 * @Description: file content
 */
module.exports = {
  // 默认接口地址
  baseURL: process.env.VUE_APP_API,
  // 数据格式
  contentType: "application/json;charset=UTF-8",
  // 最长请求时间
  requestTimeout: 10000,
  // 数据状态的字段名称
  statusName: "code",
  // 状态信息的字段名称
  messageName: "msg",
  // token名称
  tokenName: 'token',
};
