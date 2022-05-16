/*
 * @Author: Custer
 * @Date: 2021-11-15 14:43:49
 * @LastEditors: Custer
 * @LastEditTime: 2022-04-07 17:25:28
 * @Description: file content
 */
const list = [
  {
    path: '/',
    name: 'Index',
    component: 'Layout',
    meta: {
      title: '看板',
      icon: 'dashboard-line',
      breadcrumbHidden: true,
    },
    children: [
      {
        path: '',
        name: 'Index-Dashboard',
        component: '@/views/index/dashboard',
        meta: {
          title: '看板',
          icon: 'dashboard-line',
          noClosable: true,
          hidden: true
        },
      },
    ],
  },
  {
    path: "rider",
    name: "Rider",
    component: 'Layout',
    meta: {
      title: "平台骑手",
      icon: "e-bike-2-line"
    },
    children: [
      {
        path: "list",
        name: "Rider-List",
        component: '@/views/rider/list/index',
        meta: {
          title: "骑手列表",
          icon: "list-unordered"
        }
      },
      {
        path: "review",
        name: "Rider-Review",
        component: '@/views/rider/review/index',
        meta: {
          title: "骑手审核",
          icon: "checkbox-line"
        }
      },
      {
        path: "settlement",
        name: "Rider-Settlement",
        component: '@/views/rider/settlement/index',
        meta: {
          title: "骑手结算",
          icon: "currency-line"
        }
      },
    ]
  },
  {
    path: "order",
    name: "order",
    component: 'Layout',
    meta: {
      title: "订单管理",
      icon: "bill-line"
    },
    children: [
      {
        path: "list",
        name: "Order-List",
        component: '@/views/order/list/index',
        meta: {
          title: "订单列表",
          icon: "list-unordered"
        }
      },
      {
        path: "afterSale",
        name: "Order-AfterSale",
        component: '@/views/order/afterSale/index',
        meta: {
          title: "售后订单",
          icon: "file-copy-2-line"
        }
      },
      {
        path: "paymentLog",
        name: "Order-PaymentLog",
        component: '@/views/order/paymentLog/index',
        meta: {
          title: "收款流水",
          icon: "money-cny-box-line"
        }
      },
      {
        path: "refundLog",
        name: "order-RefundLog",
        component: '@/views/order/refundLog/index',
        meta: {
          title: "退款流水",
          icon: "refund-2-line"
        }
      },
    ]
  },
  {
    path: "operate",
    name: "Operate",
    component: 'Layout',
    meta: {
      title: "运营中心",
      icon: "dvd-line"
    },
    children: [
      {
        path: "base",
        name: "Operate-Base",
        component: '@/views/operate/base/index',
        meta: {
          title: "基础设置",
          icon: "settings-6-line"
        }
      },
      {
        path: "settlement",
        name: "Operate-Settlement",
        component: '@/views/operate/settlement/index',
        meta: {
          title: "平台结算",
          icon: "currency-line"
        }
      },
    ]
  },
  {
    path: "system",
    name: "System",
    component: 'Layout',
    meta: {
      title: "系统管理",
      icon: "list-settings-line"
    },
    children: [
      {
        path: "user",
        name: "System-User",
        component: '@/views/system/user/index',
        meta: {
          title: "用户管理",
          icon: "user-line"
        }
      },
      {
        path: "role",
        name: "System-Role",
        component: '@/views/system/role/index',
        meta: {
          title: "角色管理",
          icon: "admin-line"
        }
      },
    ]
  },
]

module.exports = [
  {
    url: '/router/getList',
    type: 'get',
    response() {
      return {
        code: 200,
        msg: 'success',
        data: { list },
      }
    },
  },
]
