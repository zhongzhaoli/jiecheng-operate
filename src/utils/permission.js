/*
 * @Author: Custer
 * @Date: 2021-11-24 17:20:11
 * @LastEditors: Custer
 * @LastEditTime: 2021-11-24 18:56:21
 * @Description: file content
 */
import store from "@/store";
import { isArray } from "@/utils/validate";

export function hasPermission(target) {
  if (isArray(target) && target.length > 0) {
    return can(
      [...store.getters["acl/role"], ...store.getters["acl/permission"]],
      { permission: target, mode: "oneOf" }
    );
  }
  const { role, permission, mode = "oneOf" } = target;
  let result = true;
  if (role)
    result =
      result && can(store.getters["acl/role"], { permission: role, mode });
  if (result && permission)
    result = can(store.getters["acl/permission"], { permission, mode });
  return result;
}

function can(roleOrPermission, target) {
  const { permission, mode } = target;
  let hasRole = false;
  if (mode === "oneOf") {
    hasRole = permission.some(item => roleOrPermission.includes(item));
  }
  if (mode === "allOf") {
    hasRole = permission.every(item => roleOrPermission.includes(item));
  }
  return hasRole;
}
