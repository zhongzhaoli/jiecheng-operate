/*
 * @Author: Custer
 * @LastEditors: custer 525966315@qq.com
 * @Date: 2022-05-16 18:40:20
 * @LastEditTime: 2022-05-16 18:40:25
 * @Description: file content
 */
const { mock } = require("mockjs");
module.exports = [
    {
        // 结算列表
        url: "/operateSettlement/list",
        type: "get",
        response(config) {
            let { pageSize, pageNumber } = config.query;
            const listMock = mock({
                'list|5': [{
                    'id': "@id",
                    'operate': '@cname',
                    'applyUserName': '@name',
                    'createTime': '@date @time',
                    'settlementOrderNum|1-100': 0,
                    'settlementTotal|500-1000': 0,
                    'status|1-3': 0,
                    'phone': '13662648176',
                    "school|2": '@cname'
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
                }
            }
        }
    }
];
