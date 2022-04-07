/*
 * @Author: Custer
 * @Date: 2021-11-03 11:32:27
 * @LastEditors: Custer
 * @LastEditTime: 2022-04-06 16:20:47
 * @Description: file content
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/custer/layouts';
import { routerMode, publicPath } from '@/config';


Vue.use(VueRouter);

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login'),
    meta: {
      hidden: true,
    },
  },
  {
    path: "/403",
    component: () => import('@/views/403'),
    meta: {
      hidden: true,
    },
  },
  {
    path: "/404",
    component: () => import('@/views/404'),
    meta: {
      hidden: true,
    },
  }
]

export const baseRoutes = [
]

const router = createRouter();

function fatteningRoutes(routes) {
  return routes.flatMap((route) => {
    return route.children ? fatteningRoutes(route.children) : route
  })
}

export function resetRouter(routes = constantRoutes) {
  routes.map((route) => {
    if (route.children) {
      route.children = fatteningRoutes(route.children)
    }
  })
  router.matcher = createRouter(routes).matcher
}

function createRouter(routes = constantRoutes){
  return new VueRouter({
    base: publicPath,
    mode: routerMode,
    routes
  })
}

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}

export default router;
