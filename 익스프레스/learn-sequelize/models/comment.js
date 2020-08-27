module.exports = (sequelize, DataTypes)=>{
    return sequelize.define('comment',{
        comment:{
            type:DataTypes.STRING(100),
            allownull:false,
        },
        create_at:{
            type:DataTypes.DATE,
            allownull:false,
            defaultValue:sequelize.literal('now()'),
        },
    },{
        timestamps:false,
    });
};