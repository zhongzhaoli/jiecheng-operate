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