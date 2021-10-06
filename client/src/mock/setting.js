import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar: "http://q1.qlogo.cn/g?b=qq&nk=1879153421&s=640",
    siteTitle: "勾指起誓",
    webTitle:"我的博客",
    github: "https://github.com/1879153421/lby",
    qq: "1879153421",
    qqQrCode:
      "https://i.loli.net/2021/10/05/9cjstaZfmlRKU4H.png",
    weixin: "l1879153421",
    weixinQrCode:
      "https://i.loli.net/2021/10/05/9cjstaZfmlRKU4H.png",
    mail: "我的邮箱",
    mailTo:"1879153421@qq.com",
    icp: "浙ICP备17001719号",
    githubName: "我的GitHub",
    favicon: "https://img2.baidu.com/it/u=3559071630,3668586377&fm=26&fmt=auto",
    personWeb:'https://www.baidu.com/'
  },
});
