'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Pedidos',
      [
        {
          cliente_id: 1
        },
        {
          cliente_id: 2
        },
        {
          cliente_id: 3
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pedidos', null, {})
  }
}
