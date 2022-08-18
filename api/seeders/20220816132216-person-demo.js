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
      'People',
      [
        {
          name: 'Ana Souza',
          isActive: true,
          email: 'ana@ana.com',
          role: 'student',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Marcos Cintra',
          isActive: true,
          email: 'marcos@marcos.com',
          role: 'student',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Felipe Cardoso',
          isActive: true,
          email: 'felipe@felipe.com',
          role: 'student',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Sandra Gomes',
          isActive: false,
          email: 'sandra@sandra.com',
          role: 'student',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Paula Morais',
          isActive: true,
          email: 'paula@paula.com',
          role: 'teacher',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Sergio Lopes',
          isActive: true,
          email: 'sergio@sergio.com',
          role: 'teacher',
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
    await queryInterface.bulkDelete('People', null, {});
  }
};
