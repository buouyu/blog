const { DataTypes } = require("sequelize");
const sequelize = require("./db");

const Banner = sequelize.define('Banner',{
    midImg:{
        type:DataTypes.STRING,
        allowNull:false
    },
    bigImg:{
        type:DataTypes.STRING,
        allowNull:false
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false
    },
    
},{
    paranoid:true
})
module.exports=Banner;