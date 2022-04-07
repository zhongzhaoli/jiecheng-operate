/*
 * @Author: Custer
 * @Date: 2021-12-03 14:38:13
 * @LastEditors: Custer
 * @LastEditTime: 2021-12-03 14:43:37
 * @Description: file content
 */
const list = [
  {
    id: 1,
    name: "手机数码",
  },
  {
    id: 2,
    name: "电脑办公",
  },
  {
    id: 3,
    name: "服装饰品",
  },
  {
    id: 4,
    name: "美妆个护",
  },
  {
    id: 5,
    name: "运动户外",
  },
];
module.exports = [
  {
    url: "/category/list",
    type: "get",
    response() {
      return {
        code: 200,
        msg: "success",
        data: list,
      };
    },
  },
];
