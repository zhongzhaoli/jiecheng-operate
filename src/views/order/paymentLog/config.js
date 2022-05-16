const screenColumn = [
    {
        label: "订单号",
        key: "id"
    },
];
const screenConfig = {
    labelWidth: "80px"
};
const handleColumn = [
    {
        label: "导出",
        key: "export",
        icon: "el-icon-download",
        type: "warning"
    },
];
const tableColumn = [
    {
        label: "订单号",
        minWidth: 160,
        align: "center",
        fixed: "left",
        key: "id"
    },
    {
        label: "距离",
        minWidth: 100,
        key: "distance"
    },
    {
        label: "支付方式",
        minWidth: 100,
        key: "payType"
    },
    {
        label: "收款金额",
        minWidth: 110,
        key: "orderPrice"
    },
    {
        label: "下单时间",
        key: "createTime",
        minWidth: 180,
    },
    {
        label: "操作",
        fixed: "right",
        align: "center",
        width: 100,
        key: "handle"
    }
];
const tableConfig = {
};

export default {
    screenColumn,
    screenConfig,
    handleColumn,
    tableColumn,
    tableConfig
}