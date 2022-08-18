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
      'Enrollments',
      [
        {
          status: 'confirmed',
          student_id: 1,
          class_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          status: 'confirmed',
          student_id: 2,
          class_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          status: 'confirmed',
          student_id: 3,
          class_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          status: 'confirmed',
          student_id: 4,
          class_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          status: 'canceled',
          student_id: 1,
          class_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          status: 'canceled',
          student_id: 2,
          class_id: 2,
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
     await queryInterface.bulkDelete('Enrollments', null, {});
  }
};
