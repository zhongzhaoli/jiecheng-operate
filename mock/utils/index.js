/*
 * @Author: Custer
 * @Date: 2021-10-29 16:57:47
 * @LastEditors: Custer
 * @LastEditTime: 2021-10-29 17:00:04
 * @Description: file content
 */
const fs = require("fs");

function handleMockArray() {
  const getFiles = (path, baseUrl = "./controller") => {
    const files = fs.readdirSync(path);
    return files.flatMap(file => {
      const fPath = `${path}/${file}`;
      const stat = fs.statSync(fPath);
      return stat.isDirectory()
        ? getFiles(fPath, `${baseUrl}/${file}`)
        : `${baseUrl}/${file}`;
    });
  };
  return getFiles("mock/controller");
}

module.exports = {
  handleMockArray,
};
