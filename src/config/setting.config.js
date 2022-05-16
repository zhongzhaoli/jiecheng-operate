/*
 * @Author: Custer
 * @Date: 2021-11-03 12:15:13
 * @LastEditors: Custer
 * @LastEditTime: 2022-04-07 16:43:06
 * @Description: file content
 */

module.exports = {
  // 标题
  title: "捷诚校园-运营团队",
  // 短标题
  short_title: "捷诚校园",
  // 语言类型
  i18n: "zh",
  // 路由模式
  routerMode: "history",
  // 如需使用内置RemixIcon图标，请自行去logo组件切换注释代码(内置svg雪碧图较大，对性能有一定影响)
  logo: 'vuejs-fill',
  // 路由白名单
  routesWhiteList: ['/login', '/404', '/403', '/test'],
  // vertical column comprehensive common布局时默认展开的菜单path，使用逗号隔开建议只展开一个
  defaultOpeneds: [
    '/'
  ],
  // vertical column comprehensive common布局时是否只保持一个子菜单的展开
  uniqueOpened: false,
  // 缓存路由的最大数量
  keepAliveMaxNum: 20,
  // token存储的key
  tokenKey: "custer-admin-token",
  // token存储位置
  storage: "cookie"
}