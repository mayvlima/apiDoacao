module.exports = (sequelize, DataTypes) => {
    const Troca = sequelize.define(
        "Troca", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            idDoador: {
                type: DataTypes.INTEGER,                
            },
            idReceptor: {
                type: DataTypes.INTEGER,                
            },
            descricao:{
                type: DataTypes.STRING,
                allowNull: false
            },
            status: {
                type: DataTypes.STRING,
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: DataTypes.DATE,
            }
        }, {
            timestamps: false,
        }
    )
    Troca.associate = (listaDeModelos) =>{
        Troca.belongsTo(listaDeModelos.Usuario,{
            foreignKey:'idReceptor',
            as:'solicitante'
        }),
        Troca.belongsTo(listaDeModelos.Usuario,{
            foreignKey:'idDoador',
            as:'doador'
        }),
        Troca.belongsToMany(listaDeModelos.Item,{
            foreignKey:'idTroca',
            as:'itensDaDoacao',
            through:listaDeModelos.ItensTroca
        })
    }
    return Troca
}