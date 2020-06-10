'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('itens_trocas', {
          id: {        
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
            idTroca: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: {
                        tableName: 'trocas',
                    },
                    key: 'id',
                },
            },
            idItem: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: {
                        tableName: 'itens',
                    },
                    key: 'id',
                },
            },
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('itens_trocas');
    }
};
