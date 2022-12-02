'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Selecoes',
      [
        {
          id_pizza: '2',
          id_pedido: '1',
          quantidade: '1'
        },
        {
          id_pizza: '3',
          id_pedido: '2',
          quantidade: '2'
        },
        {
          id_pizza: '1',
          id_pedido: '3',
          quantidade: '3'
        },
        {
          id_pizza: '2',
          id_pedido: '3',
          quantidade: '1'
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Selecoes', null, {})
  }
}
