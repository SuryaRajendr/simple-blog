'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Test extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // define association here 
    // static associate({ Financials }) {
      // this.hasMany(Financials, { foreignKey: 'entity_id', as: 'financialsData' })
    // }
    
    
  }
  Test.init(
    {
      losid: { type:  DataTypes.STRING },
      createdby: { type:  DataTypes.INTEGER },
      updatedby: { type:  DataTypes.INTEGER },
     
    },
    {
      sequelize,
      tableName: 'test',
      modelName: 'Test',
    }
  )
  return Test
}
