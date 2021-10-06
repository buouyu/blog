const Admin = require("./Admin");

require('./Banner')
const sequelize = require("./db");

sequelize.sync({alert:true}).then(()=>{
    console.log('sync complete')
})