const crypto = require('crypto');
const key = Buffer.from('mm7h3ck87ugk9l4a');
const iv = Buffer.from('jxkvxz97409u3m8c')
exports.encrypt = function(str){
    const cry = crypto.createCipheriv('aes-128-cbc',key,iv)
    return cry.update(str,'utf-8','hex')+cry.final('hex');
}
exports.decrypt = function(str){
    const cry = crypto.createDecipheriv('aes-128-cbc',key,iv);
    return cry.update(str,'hex','utf-8')+cry.final('utf-8')
}