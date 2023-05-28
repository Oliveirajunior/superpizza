'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Pizza extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Selecao, {
        foreignKey: 'id_pizza',
        as: 'escolhida_por'
      })
    }
  }
  Pizza.init(
    {
      sabor: DataTypes.STRING,
      preco: DataTypes.INTEGER
    },
    {
      sequelize,
      tableName: 'Pizzas'
    }
  )
  return Pizza
}
