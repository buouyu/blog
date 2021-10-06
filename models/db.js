const { Sequelize } = require("sequelize")

const sequelize = new Sequelize('blog','root','123123',{
    host:'localhost',
    dialect:'mysql',
    logging:null
})
module.exports=sequelize;