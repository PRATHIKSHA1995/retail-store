'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('stores', [
      {
          "name": "More Store HSR",
          "address": "2342, Vanganahalli, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102, India",
          "location": "https://www.google.com/maps/place/?q=place_id:ChIJQewAX5sUrjsRkQ83I9yocFg"
      },
      {
          "name": "More Supermarket Vijayanagar",
          "address": "1st Main Rd, Govindaraja Nagar Ward, Madava Upanagara, Vijayanagar, Bengaluru, Karnataka 560040, India",
          "location": "https://www.google.com/maps/place/?q=place_id:ChIJzUPvh9g9rjsRz60vJvrWwSY"
      },
      {
          "name": "More Store Ganganagar",
          "address": "Bilappa Garden, Ganganagar, Bengaluru, Karnataka 560032, India",
          "location": "https://www.google.com/maps/place/?q=place_id:ChIJ6Wg91LsXrjsRUY38JhZzaec"
      },
      {
          "name": "More Market Pulikeshi Nagar",
          "address": "Frazer Town Store No, 92, Mosque Rd, Cleveland Town, Pulikeshi Nagar, Bengaluru, Karnataka 560005, India",
          "location": "https://www.google.com/maps/place/?q=place_id:ChIJacZcW_EWrjsR6ftnilyvBxo"
      },
      {
          "name": "More Store Mahadevapura",
          "address": "PWD Rd, Anugraha Layout, Akash Nagar, B Narayanapura, Mahadevapura, Bengaluru, Karnataka 560016, India",
          "location": "https://www.google.com/maps/place/?q=place_id:ChIJMVQoPGsRrjsRIyIJYNGzEvs"
      },
      {
          "name": "More Store Murgesh Pallya",
          "address": "6, Wind Tunnel Rd, Kaveri Nagar, Murgesh Pallya, Bengaluru, Karnataka 560017, India",
          "location": "https://www.google.com/maps/place/?q=place_id:ChIJ-aDHBPgTrjsR-PjHertEzQI"
      },
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('stores', null, {});
  }
};
