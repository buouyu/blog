const { mock } = require("mockjs");

const adminUser = mock({
    'datas|10':[
        {
            'username':'@word(5)',
            'password':'@integer(1,10000)'
        }
    ]
})
module.exports=adminUser