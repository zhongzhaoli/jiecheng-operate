/*
 * @Author: Custer
 * @Date: 2021-11-08 14:24:58
 * @LastEditors: Custer
 * @LastEditTime: 2021-11-24 16:15:22
 * @Description: file content
 */
const { Random } = require("mockjs");
const tokens = {
  admin: `admin-token-${Random.guid()}-${new Date().getTime()}`,
};

const usernameRole = {
  admin: ['Admin'],
  editor: ['Editor'],
  test: ['Admin', 'Editor'],
}

const rolePermission = {
  Admin: ['read:system', 'write:system', 'delete:system'],
  Editor: ['read:system', 'write:system'],
  Test: ['read:system'],
}

module.exports = [
  {
    url: "/login",
    type: "post",
    response(config) {
      const { username } = config.body;
      const token = tokens[username];
      if (!token) {
        return {
          code: 400,
          msg: "账户或密码不正确",
        };
      }
      return {
        code: 200,
        msg: "success",
        data: { token },
      };
    },
  },
  {
    url: '/userInfo',
    type: 'get',
    response(config) {
      const authorization =
      config.headers.authorization || config.headers.Authorization
      if (!authorization.startsWith('Bearer ')){
        return {
          code: 401,
          msg: '令牌无效',
        }
      }
      const username = authorization.replace('Bearer ', '').split('-token-')[0]
      const roles = usernameRole[username] || [];
      const permissions = [
        ...new Set(roles.flatMap(role => rolePermission[role]))
      ]
      return {
        code: 200,
        msg: "success",
        data: {
          username,
          roles,
          permissions,
          avatar: 'https://i.gtimg.cn/club/item/face/img/2/16022_100.gif'
        }
      }
    }
  }
];
