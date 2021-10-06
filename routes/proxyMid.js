const { createProxyMiddleware } = require("http-proxy-middleware");
const context = "/api";
module.exports = createProxyMiddleware(context, {
  target: "http://test.my-site.com",
  pathRewrite: function (path, req) {
    console.log(path.substr(context.length));
    return path.substr(context.length);
  },
});