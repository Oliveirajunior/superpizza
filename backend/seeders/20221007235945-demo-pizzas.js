'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Pizzas',
      [
        {
          sabor: 'Calabresa',
          preco: 100.0
        },
        {
          sabor: 'Portuguesa',
          preco: 120.0
        },
        {
          sabor: 'Palmito',
          preco: 150.0
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pizzas', null, {})
  }
}
