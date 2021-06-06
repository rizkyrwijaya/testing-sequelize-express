'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Rooms', [{
      hotel_id: 1,
      room_number: "S101",
      room_type: 1,
      max_people: 5,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
        hotel_id: 1,
        room_number: "S102",
        room_type: 1,
        max_people: 3,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        hotel_id: 1,
        room_number: "S103",
        room_type: 1,
        max_people: 2,
        createdAt : new Date(),
        updatedAt : new Date()
      }])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('Rooms', {
       hotel_id: 1
     })
  }
};
