/*
 * @Author: Custer
 * @Date: 2021-11-08 15:27:28
 * @LastEditors: Custer
 * @LastEditTime: 2022-04-07 13:29:50
 * @Description: file content
 */

import { login, getUserInfo } from "@/api/user";
import { getToken, removeToken, setToken } from "@/utils/token";
import { tokenName, title } from "@/config";
import { isArray, isString } from "@/utils/validate";
import Vue from "vue";

const state = () => ({
  token: getToken(),
  username: "",
  avatar: "https://i.gtimg.cn/club/item/face/img/2/15922_100.gif",
});

const getters = {
  token: state => state.token,
  username: state => state.username,
  avatar: state => state.avatar,
};

const mutations = {
  setToken(state, token) {
    state.token = token;
    setToken(token);
  },
  setUsername(state, username) {
    state.username = username;
  },
  setAvatar(state, avatar) {
    state.avatar = avatar;
  },
};

const actions = {
  async loginAction({ commit }, userInfo) {
    const {
      data: { [tokenName]: token },
    } = await login(userInfo);
    if (token) {
      commit("setToken", token);
      const hour = new Date().getHours();
      const thisTime =
        hour < 8
          ? "早上好"
          : hour <= 11
          ? "上午好"
          : hour <= 13
          ? "中午好"
          : hour < 18
          ? "下午好"
          : "晚上好";
      Vue.prototype.$baseNotify(`欢迎登录 ${title}`, `${thisTime}！`);
    } else {
      const err = `登录接口异常，未正确返回${tokenName}...`;
      Vue.prototype.$baseMessage(err, "error");
      throw err;
    }
  },
  async getUserInfo({ commit, dispatch }) {
    const { data } = await getUserInfo();
    const { username, avatar, roles, permissions } = data;
    if (
      username &&
      isString(username) &&
      avatar &&
      isString(avatar)
    ) {
      if (username) commit("setUsername", username);
      if (avatar) commit("setAvatar", avatar);
      if (roles) dispatch("acl/setRole", roles, { root: true });
      if (permissions) dispatch("acl/setPermission", permissions, { root: true });
    } else {
      const err = "getUserInfo核心接口异常，请检查返回JSON格式是否正确";
      Vue.prototype.$baseMessage(err, "error");
      throw err;
    }
  },
  async logout({ dispatch }) {
    await dispatch("resetAll");
  },
  async resetAll({ commit, dispatch }) {
    commit("setUsername", "游客");
    commit(
      "setAvatar",
      "https://i.gtimg.cn/club/item/face/img/2/15922_100.gif"
    );
    commit("setToken", "");
    commit("routes/setRoutes", [], { root: true });
    dispatch("acl/setRole", [], { root: true });
    dispatch("acl/setPermission", [], { root: true });
    removeToken();
  },
};

export default { state, getters, mutations, actions };
