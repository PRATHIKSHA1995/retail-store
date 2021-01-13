'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('sellers', [
      {
        'name': 'Ranga Stores',
        'address': "647, Friend's Colony, 2nd Cross, BHCS Layout, Uttarahalli, Bengaluru-560061"
      },
      {
        'name': 'Anna Stores',
        'address': "331, 2nd Cross, 3rd Stage, RR Nagar, Bengaluru-560098"
      },
      {
        'name': 'Amma Stores',
        'address': "110, 3rd Cros, 5th Main, HSR Layout, Bengaluru-560034"
      },
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('sellers', null, {});
  }
};
