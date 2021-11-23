const myError = require("../utils/myError")
module.exports= function(sequelize, DataTypes){
    return sequelize.define(
        "department",
        {
            department_id: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true 
            },
            department_name: {
                type: DataTypes.STRING(50),
                allowNull: false,
                unique: {msg:'Талбарын нэр давхцаж байгаа тул шалгаад дахин оруулна уу'},
            },
            coordinate: {
                type: DataTypes.GEOMETRY('POLYGON'),
                // allowNull: true,
            }
            
        },
        {
            tableName: "department",
            timestamps: false,
        }
    )
}