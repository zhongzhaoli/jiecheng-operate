/*
 * @Author: Custer
 * @Date: 2021-11-08 14:48:59
 * @LastEditors: Custer
 * @LastEditTime: 2021-11-17 16:45:44
 * @Description: file content
 */
import axios from 'axios';
import store from '@/store';
import Vue from 'vue';
import router from '@/router';
import { statusName, messageName } from '@/config';
import { baseURL, requestTimeout, contentType } from '@/config';

const CODE_MESSAGE = {
  200: '服务器成功返回请求数据',
  201: '新建或修改数据成功',
  202: '一个请求已经进入后台排队(异步任务)',
  204: '删除数据成功',
  400: '发出信息有误',
  401: '用户没有权限(令牌失效、用户名、密码错误、登录过期)',
  402: '令牌过期',
  403: '用户得到授权，但是访问是被禁止的',
  404: '访问资源不存在',
  406: '请求格式不可得',
  410: '请求资源被永久删除，且不会被看到',
  500: '服务器发生错误',
  502: '网关错误',
  503: '服务不可用，服务器暂时过载或维护',
  504: '网关超时',
}

// 请求拦截器
const requestConfig = (config) => {
  const token = store.getters['user/token'];

  if(token) config.headers['Authorization'] = `Bearer ${token}`

  return config
}

const instance = axios.create({
  baseURL,
  timeout: requestTimeout,
  headers: {
    'Content-Type': contentType,
  }
})

instance.interceptors.request.use(requestConfig, (error) => {
  return Promise.reject(error);
})

const responseHandle = ({ status, data, statusText }) => {
  const code = data && data[statusName] ? data[statusName] : status;
  switch(code){
    case 200:
      return data;
    case 401:
      store.dispatch('user/resetAll').then(() => {
        router.replace({ path: '/login' })
      })
      break;
  }
  const errMsg = `${data && data[messageName] ? data[messageName] : CODE_MESSAGE[code] ? CODE_MESSAGE[code] : statusText}`
  Vue.prototype.$baseMessage(errMsg, 'error')
}

instance.interceptors.response.use(response => responseHandle(response), (error) => {
  Vue.prototype.$baseNotify(
    '未可知错误，可能是因为后端不支持跨域CORS、接口地址不存在等问题引起',
    '发生错误',
    'error'
  )
  return Promise.reject(error);
})

export default instance;