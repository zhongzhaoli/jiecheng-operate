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
        label: "骑手姓名",
        key: "rider"
    },
    {
        label: "骑手手机号",
        key: "riderPhone"
    },
    {
        label: "售后状态",
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
        label: "骑手",
        width: 150,
        tooltip: true,
        key: "rider"
    },
    {
        label: "售后类型",
        width: 120,
        tooltip: true,
        key: "type"
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
        label: "售后状态",
        align: "center",
        key: "status",
        width: 130,
    },
    {
        label: "操作",
        fixed: "right",
        align: "center",
        width: 200,
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