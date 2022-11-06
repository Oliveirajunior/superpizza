'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Pizza_pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Pizza, {
        foreignKey: 'pizza_id',
        as: 'pizza_selecionada'
      })
      this.belongsTo(models.Pedido, {
        foreignKey: 'pedido_id',
        as: 'selecao_feita_por'
      })
    }
  }
  Pizza_pedido.init(
    {
      pedido_id: DataTypes.INTEGER,
      pizza_id: DataTypes.INTEGER,
      quantidade: DataTypes.INTEGER,
      subtotal: DataTypes.FLOAT
    },
    {
      sequelize,
      tableName: 'Pizza_pedidos'
    }
  )
  return Pizza_pedido
}
