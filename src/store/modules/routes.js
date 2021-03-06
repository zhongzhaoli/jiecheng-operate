/*
 * @Author: Custer
 * @Date: 2021-11-04 12:13:44
 * @LastEditors: custer 525966315@qq.com
 * @LastEditTime: 2022-05-20 16:10:32
 * @Description: file content
 */
import { baseRoutes, constantRoutes, resetRouter } from '@/router';
import { filterRoutes,convertRouter } from '@/utils/routes';
import { getList } from '@/api/router';
const state = () => ({
  routes: [],
})
const getters = {
  routes: (state) => state.routes,
}

const mutations = {
  setRoutes(state, routes) {
    state.routes = routes
  }
}

const actions = {
  async setRoutes({commit}){
    let routes = [...baseRoutes];
    // const { data: { list } } = await getList();
    const { data } = await getList();
    let list = JSON.parse(data);
    if(list[list.length - 1].path !== '*') list.push({ path: '*', redirect: '/404', meta: { hidden: true } })
    routes = convertRouter(list);
    // 设置菜单所需路由
    const accessRoutes = filterRoutes([...routes, ...constantRoutes]);
    commit('setRoutes', JSON.parse(JSON.stringify(accessRoutes)))
    await resetRouter(accessRoutes)
  }
}

export default { state, getters, mutations, actions };