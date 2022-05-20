/*
 * @Author: Custer
 * @Date: 2021-11-08 14:49:17
 * @LastEditors: custer 525966315@qq.com
 * @LastEditTime: 2022-05-20 15:26:33
 * @Description: file content
 */
import request from "@/utils/request";

export function login(data) {
  return request({
    url: "/operate/auth/login",
    method: "post",
    data,
  });
}

export function getUserInfo() {
  return request({
    url: "/operate/auth/me",
    method: "get"
  });
}
