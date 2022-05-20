/*
 * @Author: Custer
 * @Date: 2021-11-03 12:15:04
 * @LastEditors: custer 525966315@qq.com
 * @LastEditTime: 2022-05-20 17:44:37
 * @Description: file content
 */
const setting = require("./setting.config");
const cli = require("./cli.config");
const theme = require("./theme.config");
const net = require("./net.config");
const variables = require("./variables.config");

module.exports = {
  ...setting,
  ...cli,
  ...theme,
  ...net,
  ...variables
}