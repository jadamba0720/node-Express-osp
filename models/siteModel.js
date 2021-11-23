module.exports = (sequelize, DataTypes)=>{

    return sequelize.define(
        "sites",
    {
        sites_id:{ type: DataTypes.INTEGER.UNSIGNED, primaryKey: true, allowNull: false,},
        department_id: {type: DataTypes.INTEGER.UNSIGNED},
        sites_name: {type: DataTypes.STRING(50), allowNull: false},
        coordinate: {type: DataTypes.GEOMETRY('POLYGON')}
    }, 
    {
        tableName: "sites",
        timestamps: false,
    }
    );
}