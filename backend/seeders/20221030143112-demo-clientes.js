'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Clientes',
      [
        {
          nome: 'Superman',
          email: 'sups@dc.com',
          senha: 'krypton'
        },
        {
          nome: 'Batman',
          email: 'morcegao@dc.com',
          senha: 'iambatman'
        },
        {
          nome: 'Wonder Woman',
          email: 'ww@dc.com',
          senha: 'amazonas'
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Clientes', null, {})
  }
}
