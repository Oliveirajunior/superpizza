'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Pizza_pedidos',
      [
        {
          pedido_id: 1,
          pizza_id: 2,
          quantidade: 1
        },
        {
          pedido_id: 1,
          pizza_id: 3,
          quantidade: 2
        },
        {
          pedido_id: 2,
          pizza_id: 1,
          quantidade: 3
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pizza_pedidos', null, {})
  }
}
