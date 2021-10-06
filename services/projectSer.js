const Banner = require("../models/Project")
exports.addBanner = async function(userObj){
    const ins = await Banner.create(userObj);
    return ins.toJSON()
}
exports.deleteBanner = async function(id){
    const result = await Banner.destroy({
        where:{
            id:id,
        }
    })
    return result
}

exports.getBanners =async function(){
    const result = await Banner.findAll();
    return JSON.parse(JSON.stringify(result))
}
