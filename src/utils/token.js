/*
 * @Author: Custer
 * @Date: 2021-11-08 15:30:40
 * @LastEditors: Custer
 * @LastEditTime: 2021-11-08 15:36:08
 * @Description: file content
 */
import { storage, tokenKey } from "@/config";
import cookie from "js-cookie";

export function getToken() {
  if (storage) {
    if (storage === "localStorage") {
      return localStorage.getItem(tokenKey);
    } else if (storage === "sessionStorage") {
      return sessionStorage.getItem(tokenKey);
    } else if (storage === "cookie") {
      return cookie.get(tokenKey);
    } else {
      return localStorage.getItem(tokenKey);
    }
  } else {
    return localStorage.getItem(tokenKey);
  }
}

export function setToken(token) {
  if (storage) {
    if ('localStorage' === storage) {
      return localStorage.setItem(tokenKey, token)
    } else if ('sessionStorage' === storage) {
      return sessionStorage.setItem(tokenKey, token)
    } else if ('cookie' === storage) {
      return cookie.set(tokenKey, token)
    } else {
      return localStorage.setItem(tokenKey, token)
    }
  } else {
    return localStorage.setItem(tokenKey, token)
  }
}

export function removeToken() {
  if (storage) {
    if ('localStorage' === storage) {
      return localStorage.removeItem(tokenKey)
    } else if ('sessionStorage' === storage) {
      return sessionStorage.clear()
    } else if ('cookie' === storage) {
      return cookie.remove(tokenKey)
    } else {
      return localStorage.removeItem(tokenKey)
    }
  } else {
    return localStorage.removeItem(tokenKey)
  }
}
