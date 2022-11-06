'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Cliente, {
        foreignKey: 'cliente_id',
        as: 'cliente_que_pediu'
      })
      this.hasMany(models.Pizza_pedido, {
        foreignKey: 'pedido_id',
        as: 'selecoes_realizadas'
      })
    }
  }
  Pedido.init(
    {
      cliente_id: DataTypes.INTEGER,
      total: DataTypes.FLOAT
    },
    {
      sequelize,
      tableName: 'Pedidos'
    }
  )
  return Pedido
}
