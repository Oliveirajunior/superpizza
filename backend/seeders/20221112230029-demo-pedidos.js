'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Pedidos',
      [
        {
          cliente_id: '1',
          pizza_id: '1',
          quantidade: '1'
        },
        {
          cliente_id: '2',
          pizza_id: '2',
          quantidade: '3'
        },
        {
          cliente_id: '2',
          pizza_id: '3',
          quantidade: '1'
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pedidos', null, {})
  }
}
