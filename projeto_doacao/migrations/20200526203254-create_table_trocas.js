"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("trocas", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      idDoador: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "usuarios",
          },
          key: "id",
        },
      },
      idReceptor: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "usuarios",
          },
          key: "id",
        },
      },
      descricao:{
        type: Sequelize.STRING,
        allowNull: false
      },
      status: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("trocas");
  },
};