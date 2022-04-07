/*
 * @Author: Custer
 * @Date: 2021-10-29 16:41:58
 * @LastEditors: Custer
 * @LastEditTime: 2021-11-10 17:56:29
 * @Description: file content
 */
"use strict";
const path = require("path");
const { title, lintOnSave } = require('./src/config')

process.env.VUE_APP_TITLE = title

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave,
  devServer: {
    hot: true,
    port: 8080,
    overlay: {
      warnings: true,
      errors: true,
    },
    after: require("./mock"),
  },
  chainWebpack(config) {
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icon'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icon'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: '[name]'
      })
      .end()
  },
  css: {
    requireModuleExtension: true,
    sourceMap: true,
    loaderOptions: {
      scss: {
        additionalData(content, loaderContext) {
          const { resourcePath, rootContext } = loaderContext
          const relativePath = path.relative(rootContext, resourcePath)
          if (
            relativePath.replace(/\\/g, '/') !==
            'src/custer/styles/variables/variables.scss'
          )
            return '@import "~@/custer/styles/variables/variables.scss";' + content
          return content
        },
      },
    },
  },
};
