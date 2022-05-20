/*
 * @Author: Custer
 * @LastEditors: custer 525966315@qq.com
 * @Date: 2022-05-16 17:38:20
 * @LastEditTime: 2022-05-20 17:31:50
 * @Description: file content
 */
import Vue from 'vue'

const filters = {
    /**
     * 货币格式化
     * @param price
     * @returns {string}
     */
    formatPrice: (price) => {
        if (typeof price !== "number") return price;
        return `¥${String(Number(price).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    },
    formatDistance: (num, fixed = 2, unit = "km") => {
        return `${num.toFixed(fixed)}${unit}`;
    }
}

Object.keys(filters).forEach((key) => {
    Vue.filter(key, filters[key]);
});