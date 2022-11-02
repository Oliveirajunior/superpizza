'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Clientes',
      [
        {
          nome: 'Superman',
          fone: '555-111'
        },
        {
          nome: 'Batman',
          fone: '555-222'
        },
        {
          nome: 'Wonder Woman',
          fone: '555-333'
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Clientes', null, {})
  }
}
