module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define(
      "Item",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        nomeItem:{
            type: DataTypes.STRING,
            allowNull: false
          },
          descricao:{
            type: DataTypes.STRING,
            allowNull: false
          },
          createdAt: {
            allowNull: false,
            type: DataTypes.DATE
          },
          updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
          }
      },
      {
        timestamps: false,
        tableName: 'itens'
      }
    )
    
    Item.associate = (listaDeModelos) =>{
      Item.belongsToMany(listaDeModelos.Troca,{
          foreignKey:'idItem',
          as:'doacao',
          through:listaDeModelos.ItensTroca
      })
  }


      return Item
}