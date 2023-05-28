'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Pizzas',
      [
        {
          sabor: 'Calabresa',
          preco: 10000
        },
        {
          sabor: 'Portuguesa',
          preco: 12000
        },
        {
          sabor: 'Palmito',
          preco: 15000
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pizzas', null, {})
  }
}
