import request from "./request.js";
import {whoAmI} from './loginService'
export async function getSetting(){
    const setting =  await whoAmI();
    if(!setting){
        return {
            avatar: "https://img0.baidu.com/it/u=3684533571,3875739943&fm=26&fmt=auto",
            siteTitle: "勾指起誓",
            webTitle:"我的博客",
            github: "https://github.com/",
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
          }
    }
    return setting
}