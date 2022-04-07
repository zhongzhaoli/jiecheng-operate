/*
 * @Author: Custer
 * @Date: 2021-11-03 12:15:04
 * @LastEditors: Custer
 * @LastEditTime: 2021-11-08 15:05:08
 * @Description: file content
 */
const setting = require("./setting.config");
const cli = require("./cli.config");
const theme = require("./theme.config");
const net = require("./net.config");

module.exports = {
  ...setting,
  ...cli,
  ...theme,
  ...net
}