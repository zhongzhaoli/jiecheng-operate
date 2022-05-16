const screenColumn = [
    {
        label: "姓名",
        key: "name"
    },
    {
        label: "手机号",
        key: "phone"
    },
    {
        label: "审核状态",
        key: "status"
    },
];
const screenConfig = {
    labelWidth: "80px"
};
const handleColumn = [
];
const tableColumn = [
    {
        label: "姓名",
        tooltip: true,
        minWidth: 110,
        key: "name"
    },
    {
        label: "手机号",
        minWidth: 110,
        key: "phone"
    },
    {
        label: "申请时间",
        key: "createTime",
        minWidth: 180,
    },
    {
        label: "操作人",
        key: "operation",
        minWidth: 100,
    },
    {
        label: "审核状态",
        align: "center",
        key: "status",
        minWidth: 90,
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
    index: true
};

export default {
    screenColumn,
    screenConfig,
    handleColumn,
    tableColumn,
    tableConfig
}