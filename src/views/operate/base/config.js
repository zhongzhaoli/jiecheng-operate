const operateColumn = [
    {
        label: "运营范围",
        type: "inputNumber",
        min: 1,
        placeholder: "公里",
        tips: "可运营的最大范围",
        key: "operate_map"
    },
    {
        label: "每公里价格",
        type: "inputNumber",
        min: 1,
        required: true,
        placeholder: "元",
        tips: "每公里用户要支付的费用",
        key: "operate_price"
    }
];

const operateRules = {
    operate_map: [
        { required: true, message: '请输入运营范围最大值', trigger: 'blur' },
    ],
    operate_price: [
        { required: true, message: '请输入每公里价格', trigger: 'blur' },
    ],
};

const riderColumn = [
    {
        label: "同时进行订单数",
        type: "inputNumber",
        placeholder: "单",
        min: 1,
        tips: "骑手可同时存在进行中的订单数量最大值",
        key: "rider_going_orderNum"
    },
    {
        label: "结算申请间隔时间",
        type: "inputNumber",
        placeholder: "天",
        min: 0,
        tips: "骑手每次申请结算间隔的天数",
        key: "rider_settlement_apart"
    },
    {
        label: "结算最多订单数",
        type: "inputNumber",
        placeholder: "单",
        min: 1,
        tips: "骑手每次申请结算订单数的最大值",
        key: "rider_settlement_maxOrderNum"
    },
    {
        label: "结算最小金额",
        type: "inputNumber",
        placeholder: "天",
        min: 0,
        tips: "骑手每次申请结算的最小金额限制",
        key: "rider_settlement_minPrice"
    },
];

const riderRules = {
    rider_going_orderNum: [
        { required: true, message: '请输入同时进行订单数', trigger: 'blur' },
    ],
    rider_settlement_apart: [
        { required: true, message: '请输入结算申请间隔时间', trigger: 'blur' },
    ],
    rider_settlement_maxOrderNum: [
        { required: true, message: '请输入结算最多订单数', trigger: 'blur' },
    ],
    rider_settlement_minPrice: [
        { required: true, message: '请输入结算最小金额', trigger: 'blur' },
    ]
};

const orderColumn = [
    {
        label: "无人接单自动取消",
        type: "inputNumber",
        placeholder: "分",
        min: 1,
        tips: "订单发起后多少分钟无人接单自动取消订单",
        key: "order_noReceive_cancel"
    },
    {
        label: "未支付自动取消",
        type: "inputNumber",
        placeholder: "分",
        min: 1,
        tips: "骑手接单后多少分钟未未支付自动取消订单",
        key: "order_noPay_cancel"
    },
    {
        label: "已完成订单允许售后",
        type: "inputNumber",
        placeholder: "天",
        min: 0,
        tips: "订单完成后多少天内允许售后，如果天数为0,则不允许申请售后",
        key: "order_complete_afterSale"
    }
];

const orderRules = {
    order_noReceive_cancel: [
        { required: true, message: '请输入订单无人接单自动取消时间', trigger: 'blur' },
    ],
    order_noPay_cancel: [
        { required: true, message: '请输入订单未支付自动取消时间', trigger: 'blur' },
    ],
    order_complete_afterSale: [
        { required: true, message: '请输入已完成订单允许售后时间', trigger: 'blur' },
    ],
};

const formConfig = {
    labelWidth: "150px",
    labelPosition: "left",
    size: "small",
    inline: false
}

export default {
    operateColumn,
    riderColumn,
    formConfig,
    operateRules,
    riderRules,
    orderColumn,
    orderRules
}