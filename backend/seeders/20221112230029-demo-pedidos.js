'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Pedidos',
      [
        {
          id_cliente: '1'
        },
        {
          id_cliente: '2'
        },
        {
          id_cliente: '3'
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pedidos', null, {})
  }
}
