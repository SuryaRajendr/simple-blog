'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
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
  Comments.init(
    {
      article_id: { type:  DataTypes.INTEGER },
      reader_name: { type:  DataTypes.STRING },
      comments: { type:  DataTypes.STRING }
     
    },
    {
      sequelize,
      tableName: 'comments',
      modelName: 'Comments',
    }
  )
  return Comments
}
