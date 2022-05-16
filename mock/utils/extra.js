/*
 * @Author: Custer
 * @LastEditors: custer 525966315@qq.com
 * @Date: 2022-05-16 15:12:03
 * @LastEditTime: 2022-05-16 18:28:52
 * @Description: file content
 */
const { mock } = require("mockjs");

function mockOperate() {
    return mock({
        "array|1": [
            "深圳技师学院",
            "深圳职业技术学院",
            "深圳信息学院"
        ]
    }).array;
}

function mockSchool(){
    return mock({
        "array|1": [
            "深技师学区",
            "深职院学区",
            "深信息学区",
        ]
    }).array;
}

function mockPosition(){
    return mock({
        "array|1": [
            "骑手运维",
            "售后运维",
            "会员运维",
            "结算运维",
        ]
    }).array
}

module.exports = {
    mockOperate,
    mockSchool,
    mockPosition
}