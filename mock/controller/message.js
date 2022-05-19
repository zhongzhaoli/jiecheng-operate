/*
 * @Author: Custer
 * @LastEditors: custer 525966315@qq.com
 * @Date: 2022-05-19 18:50:11
 * @LastEditTime: 2022-05-19 18:52:25
 * @Description: file content
 */
const { mock } = require("mockjs");
module.exports = [
    {
        // 发送站内信
        url: "/message/send",
        type: "post",
        response(config) {
            const { content, title, type } = config.body;
            return {
                code: 200,
                msg: "success",
                data: null
            };
        }
    }
];