"usr strict";

const path = require("path");
// function resolve(dir) {
//   return path.resolve(__dirname, '.', dir);
// }
const name = "data-analysis"; // page title
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  // lintOnSave: false,
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
  },
  css: {
    loaderOptions: {
      less: { javascriptEnabled: true },
    },
  },
  // pluginOptions: {
  //   "style-resources-loader": {
  //     preProcessor: "less",
  //     patterns: [path.resolve(__dirname, "src/design/index.less")], // 引入全局样式变量
  //   },
  // },
  chainWebpack(config) {
    // 配置svg规则排除icons⽬录中svg⽂件处理
    // ⽬标给svg规则增加⼀个排除选项exclude:['path/to/icon']
    config.module.rule("svg").exclude.add(resolve("./src/icons"));

    // 新增icons规则，设置svg-sprite-loader处理icons⽬录中的svg
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("./src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({ symbolId: "icon-[name]" });

    // config.module.rule('ts')
    // config.module.rule('ts').use('ts-loader')
  },
  publicPath: "./",
  assetsDir: "./static/",
  devServer: {
    open: true,
    port: "8888",
    // proxy: {

    //   "/SettlementServ": {
    //     target: "http://192.168.10.17:8086/", //陈勇
    //     changeOrigin: true,
    //   },
    // },
  },
};
