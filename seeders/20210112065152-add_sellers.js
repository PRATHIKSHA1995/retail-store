'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('sellers', [
      {
        'name': 'Ranga Stores',
      },
      {
        'name': 'Anna Stores',
      },
      {
        'name': 'Ammu Stores',
      },
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('sellers', null, {});
  }
};
