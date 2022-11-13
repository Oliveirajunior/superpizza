'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pedidos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cliente_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Clientes', key: 'id' }
      },
      pizza_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Pizzas', key: 'id' }
      },
      quantidade: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 1
      },
      total: {
        allowNull: false,
        type: Sequelize.FLOAT,
        defaultValue: 0
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pedidos')
  }
}
