'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      'Levels',
      [
        {
          lvl_description: 'basic',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          lvl_description: 'intermediary',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          lvl_description: 'advanced',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Levels', null, {});
  }
};
