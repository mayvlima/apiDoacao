module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define(
      "Usuario",
      {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
          },
          nome: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
          },
          telefone: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
          },
          updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
          },
      },
      {
        timestamps: false,
      }
    )
      return Usuario
}