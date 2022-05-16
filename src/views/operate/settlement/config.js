/*
 * @Author: Custer
 * @LastEditors: custer 525966315@qq.com
 * @Date: 2022-05-16 17:26:39
 * @LastEditTime: 2022-05-16 18:43:38
 * @Description: file content
 */
const screenColumn = [
    {
        label: "发起时间",
        key: "createTime"
    },
];
const screenConfig = {
    labelWidth: "80px"
};
const handleColumn = [
    {
        label: "申请结算",
        key: "add",
        icon: "el-icon-plus",
        type: "primary"
    },
    {
        label: "导出",
        key: "export",
        icon: "el-icon-download",
        type: "warning"
    },
];
const tableColumn = [
    {
        label: "发起时间",
        key: "createTime",
        minWidth: 180,
    },
    {
        label: "结算单数",
        width: 110,
        key: "settlementOrderNum"
    },
    {
        label: "结算金额",
        width: 100,
        key: "settlementTotal"
    },
    {
        label: "结算状态",
        align: "center",
        key: "status",
        minWidth: 130,
    },
    {
        label: "操作人",
        align: "center",
        key: "applyUserName",
        minWidth: 130,
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
    index: true
};

export default {
    screenColumn,
    screenConfig,
    handleColumn,
    tableColumn,
    tableConfig
}