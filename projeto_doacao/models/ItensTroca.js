module.exports = (sequelize, DataTypes) => {
    const ItensTroca = sequelize.define(
        "ItensTroca", {
            id: {        
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
              },
            idTroca: {
                type: DataTypes.INTEGER,
                allowNull: false,                
            },
            idItem: {
                type: DataTypes.INTEGER,
                allowNull: false,                
            },           
        }, {
            tableName: 'itens_trocas',
            timestamps: false,
        })          
        
    

    return ItensTroca
}