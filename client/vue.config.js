// vue-cli的配置文件
const path = require("path");
module.exports = {
    devServer: {
      proxy: {
        "/api": {
          target: "http://localhost:9000",
        },
      },
    },
    configureWebpack:require('./webpack.config'),
    outputDir: path.resolve(__dirname, "../public"),
  };