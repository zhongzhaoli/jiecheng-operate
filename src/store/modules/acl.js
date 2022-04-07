/*
 * @Author: Custer
 * @Date: 2021-11-24 16:43:33
 * @LastEditors: Custer
 * @LastEditTime: 2021-11-29 10:40:29
 * @Description: file content
 */
const state = () => ({
  role: [],
  permission: [],
});

const getters = {
  role: (state) => state.role,
  permission: (state) => state.permission,
};

const mutations = {
  setRole(state, role) {
    state.role = role;
  },
  setPermission(state, permission) {
    state.permission = permission;
  },
};

const actions = {
  setRole({ commit }, role) {
    commit("setRole", role);
  },
  setPermission({ commit }, permission) {
    commit("setPermission", permission);
  },
};

export default { state, getters, mutations, actions };