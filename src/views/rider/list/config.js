/*
 * @Author: Custer
 * @LastEditors: custer 525966315@qq.com
 * @Date: 2022-05-16 15:06:40
 * @LastEditTime: 2022-05-19 18:20:26
 * @Description: file content
 */
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
        label: "状态",
        key: "status"
    }
];
const screenConfig = {
    labelWidth: "80px"
};
const handleColumn = [
    {
        label: "全部发站内信",
        key: "allMessage",
        icon: "el-icon-s-promotion",
        type: "success"
    },
    {
        label: "批量发送站内信",
        key: "partMessage",
        selection: true,
        icon: "el-icon-s-promotion",
        type: "primary"
    },
];
const tableColumn = [
    {
        label: "姓名",
        minWidth: 150,
        key: "name"
    },
    {
        label: "手机号",
        minWidth: 110,
        key: "phone"
    },
    {
        label: "余额",
        minWidth: 100,
        key: "balance"
    },
    {
        label: "接单数",
        width: 80,
        key: "orderNum"
    },
    {
        label: "好评率",
        width: 80,
        key: "praise"
    },
    {
        label: "准时率",
        width: 80,
        key: "onTime"
    },
    {
        label: "接单状态",
        align: "center",
        key: "status",
        width: 100,
    },
    {
        label: "注册时间",
        key: "createTime",
        minWidth: 180,
    },
    {
        label: "操作",
        fixed: "right",
        align: "center",
        width: 280,
        key: "handle"
    }
];
const tableConfig = {
    selection: true
};

export default {
    screenColumn,
    screenConfig,
    handleColumn,
    tableColumn,
    tableConfig
}