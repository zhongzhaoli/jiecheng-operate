const { mock } = require("mockjs");
module.exports = [
    {
        // 骑手列表
        url: "/rider/list",
        type: "get",
        response(config) {
            let { pageSize, pageNumber } = config.query;
            const listMock = mock({
                'list|5': [{
                    'id': "@id",
                    'name': '@name',
                    'phone': '13662648176',
                    "status|0-1": 0,
                    "balance|10000": 0,
                    "orderNum|0-100": 0,
                    "praise|50-100": 0,
                    "sex|1-3": 0,
                    "onTime|50-100": 0,
                    "avatar": '@image("200x200","red","#fff","avatar")',
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
    },
    {
        // 骑手详情
        url: "/rider/detail",
        type: "get",
        response() {
            const objectMock = mock(
                {
                    'id': "@id",
                    'name': '@name',
                    'phone': '13662648176',
                    "status|0-1": 0,
                    "sex|1-3": 0,
                    "balance|10000": 0,
                    "orderNum|0-100": 0,
                    "praise|50-100": 0,
                    "onTime|50-100": 0,
                    "avatar": '@image("200x200","red","#fff","avatar")',
                    'createTime': '@date @time',
                    'birthday': '@date'
                }
            );
            return {
                code: 200,
                msg: "success",
                data: objectMock
            };
        }
    },
    {
        // 骑手审核信息
        url: "/rider/passport",
        type: "get",
        response() {
            const objectMock = mock(
                {
                    "idImagePositive": '@image("400x200","red","#fff","idImagePositive")',
                    "idImageBack": '@image("400x200","red","#fff","idImageBack")',
                    "schoolImagePositive": '@image("400x200","red","#fff","schoolImagePositive")',
                    "schoolImageBack": '@image("400x200","red","#fff","schoolImageBack")',
                }
            );
            return {
                code: 200,
                msg: "success",
                data: objectMock
            };
        }
    },
    {
        // 骑手审核
        url: "/rider/review/list",
        type: "get",
        response(config) {
            let { pageSize, pageNumber } = config.query;
            const listMock = mock({
                'list|5': [{
                    'id': "@id",
                    'name': '@name',
                    "operation": '@cname',
                    'phone': '13662648176',
                    "school|2": '@cname',
                    "operate": '@cname',
                    "status|1-3": 0,
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
    },
    {
        // 结算列表
        url: "/rider/settlement/list",
        type: "get",
        response(config) {
            let { pageSize, pageNumber } = config.query;
            const listMock = mock({
                'list|5': [{
                    'id': "@id",
                    'name': '@name',
                    'operate': '@cname',
                    'applyUserName': '@name',
                    'createTime': '@date @time',
                    'settlementOrderNum|1-100': 0,
                    'settlementTotal|500-1000': 0,
                    'status|1-3': 0,
                    'phone': '13662648176',
                    "school|2": '@cname',
                    "operation": '@cname',
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
]