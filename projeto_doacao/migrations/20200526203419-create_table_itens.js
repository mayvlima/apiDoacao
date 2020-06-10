'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return queryInterface.createTable('itens', {
    id:{
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement:true
    },
    nomeItem:{
      type: Sequelize.STRING,
      allowNull: false
    },
    descricao:{
      type: Sequelize.STRING,
      allowNull: false
    },       
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   return queryInterface.dropTable('itens')
  }
};
