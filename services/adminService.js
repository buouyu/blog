const Admin = require("../models/Admin")
const md5 = require('md5')
exports.addUser = async function(userObj){
    if(!userObj.username){
        const result = {
            had:'用户名不能为空'
        }
        return result;
    }
    const result = await Admin.findOne({
        where:{
            username:userObj.username
        }
    })
    
    if(result){
        result.had='已有此用户';
        return result
    }
    userObj.password = md5(userObj.password)
    const ins = await Admin.create(userObj);
    return ins.toJSON()
}
exports.deleteUser = async function(id){
    const result = await Admin.destroy({
        where:{
            id:id,
        }
    })
    return result
}
exports.updataUser = async function(id,newObj){
    const result = await Admin.update(newObj,{
        where:{
            id
        }
    })
    return result;
}
exports.getAdminById =async function(id){
    const result = await Admin.findByPk(id);
    if(result){
        return result.toJSON();
    }
    return null
}

exports.login = async function(username,password){
    password = md5(password)
    const result = await Admin.findOne({
        where:{
            username,
            password
        }
    })
    if(result&&result.username===username){
        return result.toJSON();
    }
    return null;
}

exports.getAdmins =async function(){
    const result = await Admin.findAll();
    return JSON.parse(JSON.stringify(result))
}