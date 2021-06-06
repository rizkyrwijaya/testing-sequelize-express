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
    return queryInterface.bulkInsert('Users', [
      {
        first_name : 'John',
        last_name : 'Doe',
        type : 1,
        createdAt : new Date(),
        updatedAt : new Date(),
        email : 'johnDoe@test.com'
      }, {
        first_name : 'Nouval',
        last_name : 'Abdel',
        type : 2,
        createdAt : new Date(),
        updatedAt : new Date(),
        email : 'nouval.abdel@test.com'
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    const Op = Sequelize.Op
    return queryInterface.bulkDelete('Users', {
      [Op.or]: [
        {first_name: "John"},{first_name: "Nouval"}]}
    )
  }
};
