const { mock } = require("mockjs");
const { mockOperate, mockSchool } = require("../utils/extra");
module.exports = [
    {
        // 订单列表
        url: "/order/list",
        type: "get",
        response(config) {
            let { pageSize, pageNumber } = config.query;
            const listMock = mock({
                'list|5': [{
                    'id': "2205112130491137",
                    'name': '@name',
                    'phone': '13662648176',
                    'distance|1.0-5': 0,
                    "school": mockSchool(),
                    "operate": mockOperate(),
                    "status|1-7": 0,
                    "type": "钥匙",
                    "payType": "微信支付",
                    "orderPrice|10-50": 0,
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
        // 售后订单列表
        url: "/order/afterSale/list",
        type: "get",
        response(config) {
            let { pageSize, pageNumber } = config.query;
            const listMock = mock({
                'list|5': [{
                    'id': "2205112130491137",
                    'name': '@name',
                    'phone': '13662648176',
                    'rider': '@name',
                    'riderPhone': '13662648176',
                    "operate": mockOperate(),
                    "operatePhone": '13662648176',
                    'type|1': [
                        "没收到货",
                        "配送超时",
                    ],
                    'distance|1.0-5': 0,
                    "status|1-3": 0,
                    "payType": "微信支付",
                    "orderPrice|10-50": 0,
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
        // 收款流水
        url: "/order/paymentLog/list",
        type: "get",
        response(config) {
            let { pageSize, pageNumber } = config.query;
            const listMock = mock({
                'list|5': [{
                    'id': "2205112130491137",
                    'name': '@name',
                    'phone': '13662648176',
                    'rider': '@name',
                    'riderPhone': '13662648176',
                    "operate": mockOperate(),
                    "operatePhone": '13662648176',
                    'distance|1.0-5': 0,
                    "payType": "微信支付",
                    "orderPrice|10-50": 0,
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
        // 退款流水
        url: "/order/refundLog/list",
        type: "get",
        response(config) {
            let { pageSize, pageNumber } = config.query;
            const listMock = mock({
                'list|5': [{
                    'id': "2205112130491137",
                    'name': '@name',
                    'phone': '13662648176',
                    'rider': '@name',
                    'riderPhone': '13662648176',
                    "operate": mockOperate(),
                    "refundType|1-2": 0,
                    "operatePhone": '13662648176',
                    'distance|1.0-5': 0,
                    "payType": "微信支付",
                    "orderPrice|10-50": 0,
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
];