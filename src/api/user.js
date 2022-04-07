/*
 * @Author: Custer
 * @Date: 2021-11-08 14:49:17
 * @LastEditors: Custer
 * @LastEditTime: 2021-11-18 17:01:15
 * @Description: file content
 */
import request from "@/utils/request";

export function login(data) {
  return request({
    url: "/login",
    method: "post",
    data,
  });
}

export function getUserInfo() {
  return request({
    url: "/userInfo",
    method: "get"
  });
}
