'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('items', [
      {
        'name': 'Sugar',
        'cost': 50,
        'category': 'grocery',
        'image': '../images/items/itemplaceholder.png',
      },
      {
        'name': 'Maggi',
        'cost': 10,
        'category': 'grocery',
        'image': '../images/items/itemplaceholder.png',
      },
      {
        'name': 'Santoor soap',
        'cost': 20,
        'category': 'bath',
        'image': '../images/items/itemplaceholder.png',
      },
      {
        'name': 'Pens',
        'cost': 5,
        'category': 'stationary',
        'image': '../images/items/itemplaceholder.png',
      },
      {
        'name': 'A4 sheets set',
        'cost': 100,
        'category': 'stationary',
        'image': '../images/items/itemplaceholder.png',
      },
      {
        'name': 'Salt',
        'cost': 15,
        'category': 'grocery',
        'image': '../images/items/itemplaceholder.png',
      },
      {
        'name': 'Harpic',
        'cost': 70,
        'category': 'toilet',
        'image': '../images/items/itemplaceholder.png',
      },
      {
        'name': 'Jars',
        'cost': 30,
        'category': 'kitchen',
        'image': '../images/items/itemplaceholder.png',
      },
      {
        'name': 'Nail Polish',
        'cost': 200,
        'category': 'beauty',
        'image': '../images/items/itemplaceholder.png',
      },
      {
        'name': 'Hammer',
        'cost': 300,
        'category': 'tools',
        'image': '../images/items/itemplaceholder.png',
      },
      {
        'name': 'Screw Driver',
        'cost': 50,
        'category': 'tools',
        'image': '../images/items/itemplaceholder.png',
      },
      {
        'name': 'Bucket',
        'cost': 50,
        'category': 'bath',
        'image': '../images/items/itemplaceholder.png',
      },
      {
        'name': 'Broom',
        'cost': 80,
        'category': 'home',
        'image': '../images/items/itemplaceholder.png',
      },
      {
        'name': 'Oreo',
        'cost': 40,
        'category': 'food',
        'image': '../images/items/itemplaceholder.png',
      },
    ], {})

  },

  down: async (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete('items', null, {})
  }
};
