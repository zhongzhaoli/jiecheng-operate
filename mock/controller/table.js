/*
 * @Author: Custer
 * @Date: 2021-10-29 16:46:12
 * @LastEditors: Custer
 * @LastEditTime: 2021-11-02 17:47:19
 * @Description: file content
 */
const { mock } = require("mockjs");
const list = [];
const count = 50;
for (let i = 0; i < count; i++) {
  list.push(
    mock({
      id: "@id",
      title: "@title(1, 2)",
      description: "@csentence",
    })
  );
}
module.exports = [
  {
    url: "/table/index",
    type: "get",
    response() {
      return {
        code: 200,
        msg: "success",
        data: list,
      };
    },
  },
  {
    url: "/table/create",
    type: "post",
    response() {
      return {
        code: 200,
        msg: "操作成功",
      };
    },
  },
];
