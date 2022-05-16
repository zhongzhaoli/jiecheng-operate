/*
 * @Author: Custer
 * @LastEditors: custer 525966315@qq.com
 * @Date: 2022-05-16 18:19:37
 * @LastEditTime: 2022-05-16 18:35:21
 * @Description: file content
 */
const { mock } = require("mockjs");
const { mockPosition } = require("../utils/extra");
module.exports = [
    {
        // 用户列表
        url: "/system/user/list",
        type: "get",
        response(config) {
            let { pageSize, pageNumber } = config.query;
            const listMock = mock({
                'list|5': [{
                    'id': "@id",
                    'username': '@name',
                    'name|1': '@cname',
                    'phone': '13662648176',
                    "status|0-1": 0,
                    "avatar": '@image("200x200","red","#fff","avatar")',
                    'createTime': '@date @time',
                    "position|1": mockPosition()
                }]
            });
            return {
                code: 200,
                msg: "success",
                data: {
                    total: 50,
                    pageSize: parseInt(pageSize) || 10,
                    pageNumber: parseInt(pageNumber) || 1,
                    list: listMock.list
                },
            };
        }
    },
    {
        // 角色列表
        url: "/system/role/list",
        type: "get",
        response(config) {
            let { pageSize, pageNumber } = config.query;
            const listMock = mock({
                'list|5': [{
                    'id': "@id",
                    'name|1': mockPosition(),
                    'remark': '@cname',
                    'operation': '@cname',
                    'createTime': '@date @time',
                }]
            });
            return {
                code: 200,
                msg: "success",
                data: {
                    total: 50,
                    pageSize: parseInt(pageSize) || 10,
                    pageNumber: parseInt(pageNumber) || 1,
                    list: listMock.list
                },
            };
        }
    }
]