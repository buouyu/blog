const cryptor = require('../util/cryptor')
const pathToRegxp = require('path-to-regexp')
const {getErr} = require('./getSendResult')
let needTokenApi = [
    { method: "POST", path: "/api/student" },
    { method: "PUT", path: "/api/student/:id" },
    { method: "GET", path: "/api/student" },
  ];
module.exports= (req,res,next)=>{
    // console.log('tokenMiddleware')
 needTokenApi= needTokenApi.filter(api=>{
      const pathReg = pathToRegxp(api.path)
    return api.method==req.method&& pathReg.test(req.path)
    })
    if(needTokenApi.length===0){
        next();
        return
    }
    let token = req.cookies ? req.cookies.token :undefined;
    if(!token){
        token=req.headers.authorization;
    }
    if(!token){
        handleNoToken(req,res,next)
        return;
    }
    let id = cryptor.decrypt(token);
    // console.log(id)
    req.id=id;
    next();

}
function handleNoToken(req,res,next){
    console.log('have err',res.status)
    res.status(403).send(getErr('you do not have token,you must login first',403))
}