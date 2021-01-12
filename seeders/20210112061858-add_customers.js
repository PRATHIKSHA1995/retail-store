'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('customers', [
      {
        'name': 'admin',
        'address': '401 Admin St',
        'role': 'admin',
        'password': '$2b$10$1QXlaXKw2.gKP1zPvLdFGulEBkNWvYLBwmUjUjxMDXzxKwg57gJ.6',
        'email': 'test@admin.com',
      },
      {
        'name': 'prathiksha',
        'address': '401 Anderson St',
        'role': 'customer',
        'password': '$2b$10$1QXlaXKw2.gKP1zPvLdFGulEBkNWvYLBwmUjUjxMDXzxKwg57gJ.6',
        'email': 'test@test.com',
      },
      {
        'name': 'pramitha',
        'address': '401 Friends Colony',
        'role': 'customer',
        'password': '$2b$10$1QXlaXKw2.gKP1zPvLdFGulEBkNWvYLBwmUjUjxMDXzxKwg57gJ.6',
        'email': 'test@test.com',
      },
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('customers', null, {})
  }
};
