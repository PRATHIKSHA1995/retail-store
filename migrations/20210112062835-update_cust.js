'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('customers', 'email', {
        type: Sequelize.STRING,
        allowNull: false,
      }),
      queryInterface.addColumn('customers', 'password', {
        type: Sequelize.STRING,
        allowNull: false,
      }),
      queryInterface.addColumn('customers', 'role', {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'customer',
      }),
      queryInterface.addColumn('items', 'active', {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      }),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('customers', 'email'),
      queryInterface.addColumn('customers', 'password'),
      queryInterface.addColumn('customers', 'role'),
      queryInterface.addColumn('items', 'active'),
    ]);
  }
};
