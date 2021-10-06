const { DataTypes } = require("sequelize");
const sequelize = require("./db");

const Admin = sequelize.define('Admin',{
    username:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    qq:{
        type:DataTypes.STRING,
        allowNull:false
    },
    weixin:{
        type:DataTypes.STRING,
        allowNull:false
    },
    mailTo:{
        type:DataTypes.STRING,
        allowNull:false
    },
    personWeb:{
        type:DataTypes.STRING,
        allowNull:true
    },
    github:{
        type:DataTypes.STRING,
        allowNull:true
    }
    
},{
    paranoid:true
})
module.exports=Admin;