/*
 * @Author: Custer
 * @Date: 2021-11-04 12:17:36
 * @LastEditors: Custer
 * @LastEditTime: 2022-04-07 13:25:26
 * @Description: file content
 */
import router from '@/router'
import store from '@/store'
import CusterProgress from 'nprogress'
import { routesWhiteList } from '@/config';
import { toLoginRoute, titleFun } from '@/utils/routes'
import 'nprogress/nprogress.css'

CusterProgress.configure({
  easing: 'ease',
  speed: 500,
  trickleSpeed: 200,
  showSpinner: false,
})

router.beforeEach(async (to, form, next) => {
  titleFun(to.meta.title);
  const { showProgressBar } = store.getters['settings/theme']
  if (showProgressBar) CusterProgress.start();
  const hasToken = store.getters['user/token']
  if (hasToken) {
    if (store.getters['routes/routes'].length) {
      if(to.path === '/login'){
        next({ path: '/' })
      } else {
        next();
      }
    } else {
      try {
        await store.dispatch('user/getUserInfo');
        await store.dispatch('routes/setRoutes');
        next({ ...to, replace: true });
      } catch(err) {
        await store.dispatch('user/resetAll')
        next(toLoginRoute(to.path))
      }
    }
  } else {
    if(routesWhiteList.includes(to.path)){
      next();
    } else {
      next(toLoginRoute(to.path));
    }
  }
})

router.afterEach(() => {
  if (CusterProgress.status) CusterProgress.done()
})
