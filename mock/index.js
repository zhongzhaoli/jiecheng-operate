/*
 * @Author: Custer
 * @Date: 2021-10-29 16:43:40
 * @LastEditors: Custer
 * @LastEditTime: 2021-11-08 15:06:32
 * @Description: file content
 */
const chalkNext = require("chalk-next");
const bodyParser = require('body-parser')
const { handleMockArray } = require("./utils");
const chokidar = require("chokidar");
const path = require('path')
const { mock } = require("mockjs");
const mockDir = path.join(process.cwd(), 'mock')
const { baseURL } = require("../src/config");

const responseFake = (url, type, respond) => {
  return {
    url: new RegExp(`${baseURL}${url}`),
    type: type || "get",
    response(req, res) {
      res.status(200);
      console.log(chalkNext.green(`\n> 请求地址：${req.path}`));
      if (JSON.stringify(req.body) !== "{}")
        console.log(
          chalkNext.green(`> 请求参数(body)：${JSON.stringify(req.body)}`)
        );
      if (JSON.stringify(req.query) !== "{}")
        console.log(
          chalkNext.green(`> 请求参数(query)：${JSON.stringify(req.query)}`)
        );
      res.json(mock(respond instanceof Function ? respond(req, res) : respond));
    },
  };
};

const registerRoutes = app => {
  const mocks = [];
  const mockArray = handleMockArray();
  mockArray.forEach(item => {
    const obj = require(item);
    mocks.push(...obj);
  });
  const mocksForServer = mocks.map(route =>
    responseFake(route.url, route.type, route.response)
  );
  const mockRoutesLength = Object.keys(mocksForServer).length
  for (const item of mocksForServer) {
    app[item.type](item.url, item.response);
    mockLastIndex = app._router.stack.length
  }
  return {
    mockRoutesLength,
    mockStartIndex: mockLastIndex - mockRoutesLength,
  }
};

module.exports = app => {
  app.use(bodyParser.json())
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  )
  let { mockRoutesLength, mockStartIndex } = registerRoutes(app);
  chokidar.watch(mockDir, {
    ignoreInitial: true,
  }).on('all', (event) => {
    if (event === 'change' || event === 'add') {
      try {
        app._router.stack.splice(mockStartIndex, mockRoutesLength);
        Object.keys(require.cache).forEach((item) => {
          if (item.includes(mockDir))
            delete require.cache[require.resolve(item)]
        })
        const mockRoutes = registerRoutes(app)
        mockRoutesLength = mockRoutes.mockRoutesLength
        mockStartIndex = mockRoutes.mockStartIndex
      } catch(error) {
        console.log(chalkNext.red(error))
      }
    }
  })
};
