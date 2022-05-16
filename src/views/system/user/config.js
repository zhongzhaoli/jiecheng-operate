/*
 * @Author: Custer
 * @LastEditors: custer 525966315@qq.com
 * @Date: 2022-05-16 18:06:07
 * @LastEditTime: 2022-05-16 18:38:41
 * @Description: file content
 */
const screenColumn = [
    {
        label: "用户名",
        key: "username"
    },
    {
        label: "姓名",
        key: "name"
    },
    {
        label: "状态",
        key: "status"
    },
];
const screenConfig = {
    labelWidth: "60px"
};
const handleColumn = [
    {
        label: "添加",
        key: "add",
        icon: "el-icon-plus",
        type: "primary"
    },
    {
        label: "删除",
        key: "delete",
        selection: true,
        icon: "el-icon-delete",
        type: "danger"
    },
];
const tableColumn = [
    {
        label: "用户名",
        tooltip: true,
        minWidth: 140,
        key: "username"
    },
    {
        label: "姓名",
        tooltip: true,
        minWidth: 100,
        key: "name"
    },
    {
        label: "状态",
        minWidth: 110,
        key: "status"
    },
    {
        label: "角色",
        minWidth: 110,
        key: "position"
    },
    {
        label: "创建时间",
        minWidth: 180,
        key: "createTime"
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
    selection: true
};

export default {
    screenColumn,
    screenConfig,
    handleColumn,
    tableColumn,
    tableConfig
}