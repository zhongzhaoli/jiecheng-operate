const screenColumn = [
    {
        label: "收货人",
        key: "name"
    },
    {
        label: "收货手机号",
        key: "phone"
    },
    {
        label: "运营团队",
        key: "operate"
    },
    {
        label: "距离范围",
        key: "range"
    },
    {
        label: "订单状态",
        key: "status"
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
        label: "收货人",
        width: 150,
        tooltip: true,
        key: "name"
    },
    {
        label: "距离",
        minWidth: 80,
        key: "distance"
    },
    {
        label: "价格",
        width: 100,
        key: "orderPrice"
    },
    {
        label: "下单时间",
        key: "createTime",
        minWidth: 180,
    },
    {
        label: "订单状态",
        align: "center",
        key: "status",
        width: 130,
    },
    {
        label: "操作",
        fixed: "right",
        align: "center",
        width: 250,
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