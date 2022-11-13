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
        as: 'cliente'
      })
      this.belongsTo(models.Pizza, { foreignKey: 'pizza_id', as: 'pizza' })
    }
  }
  Pedido.init(
    {
      cliente_id: DataTypes.INTEGER,
      pizza_id: DataTypes.INTEGER,
      quantidade: DataTypes.INTEGER,
      total: DataTypes.FLOAT
    },
    {
      sequelize,
      tableName: 'Pedidos'
    }
  )
  return Pedido
}
