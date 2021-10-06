const express = require('express');
const router = express.Router();
const {login,getAdminById,addUser} = require('../../services/adminService')
const {asyncHandler} = require('../getSendResult')
const jwt = require('../jwt')
router.post('/login',asyncHandler(async (req,res)=>{
        const result = await login(req.body.loginId, req.body.loginPwd)
        if(result){
            
            const id = result.id;
            
            jwt.publish(res,undefined,{id})
        }
        return result;
    })
)
router.post('/register',asyncHandler(async (req,res)=>{

    const result = await addUser(req.body)
    return result.had || result.id;
})
)
router.get("/whoami", asyncHandler(async (req, res) => {
    const result = jwt.verify(req)
    const user = await getAdminById(result.id);
    if(!user){
        return ;
    }
    const usedUser = {
        avatar: `http://q1.qlogo.cn/g?b=qq&nk=${user.qq}&s=640`,
        siteTitle: user.username,
        webTitle:"我的博客",
        github: user.github || 'https://www.baidu.com/',
        qq: user.qq,
        qqQrCode:
          "https://i.loli.net/2021/10/05/9cjstaZfmlRKU4H.png",
        weixin: user.weixin,
        weixinQrCode:
          "https://i.loli.net/2021/10/05/9cjstaZfmlRKU4H.png",
        mail: "我的邮箱",
        mailTo:user.mailTo,
        icp: "浙ICP备17001719号",
        githubName: "我的GitHub",
        favicon: "https://img2.baidu.com/it/u=3559071630,3668586377&fm=26&fmt=auto",
        personWeb:user.personWeb || 'https://1879153421.github.io/lby/liboyu/aibo/aibo.html'
      }
    return usedUser;
  }))
module.exports = router;