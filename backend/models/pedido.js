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
        foreignKey: 'id_cliente',
        as: 'cliente'
      })
      this.hasMany(models.Selecao, {
        foreignKey: 'id_pedido',
        as: 'selecionada_por'
      })
    }
  }
  Pedido.init(
    {
      id_cliente: DataTypes.INTEGER
    },
    {
      sequelize,
      tableName: 'Pedidos'
    }
  )
  return Pedido
}
