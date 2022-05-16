/*
 * @Author: Custer
 * @LastEditors: custer 525966315@qq.com
 * @Date: 2022-05-16 18:06:07
 * @LastEditTime: 2022-05-16 18:38:24
 * @Description: file content
 */
const screenColumn = [
    {
        label: "角色名",
        key: "name"
    },
    {
        label: "创建时间",
        key: "createTime"
    }
];
const screenConfig = {
    labelWidth: "80px"
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
        label: "角色名称",
        tooltip: true,
        minWidth: 140,
        key: "name"
    },
    {
        label: "操作人",
        minWidth: 180,
        key: "operation"
    },
    {
        label: "备注",
        tooltip: true,
        minWidth: 200,
        key: "remark"
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