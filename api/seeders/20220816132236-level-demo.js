'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
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
    await queryInterface.bulkDelete('Levels', null, {});
  }
};
